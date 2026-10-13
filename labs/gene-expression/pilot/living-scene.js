import * as THREE from '../vendor/three.module.js';
import { OrbitControls } from '../vendor/OrbitControls.js';
import { GLTFLoader } from '../vendor/addons/loaders/GLTFLoader.js';
import { CODING_DNA, TEMPLATE_DNA, RNA, BASE_COLORS } from '../biology.mjs';
import { createExhibitMaterial, createExhibitEnvironment } from '../exhibit-surface.js';
import { createExhibitBase, createPairingDashes } from '../nucleic-exhibit.js';
import { createSugarGeometry } from '../molecular-models.js';
import { createContinuousBackbone } from '../continuous-backbone.js';
import { DURATION, FIRST_INDEX, SPACING, clamp, smooth, mix, sampleFrame, dnaPoint, rnaPoint, standbyPoint, incomingPoint } from './living-motion.mjs';
import { directionAt } from './living-direction.mjs';
import { createPolymeraseView } from './polymerase-view.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const UP = V(0, 1, 0), FORWARD = V(0, 0, 1);
const ILLUSTRATED_PARTS = ['RNAP_CORE', 'RNAP_CLAMP', 'RNAP_JAW', 'RNAP_EXIT'];
const ILLUSTRATED_AMPLITUDES = { RNAP_CLAMP: .074, RNAP_JAW: -.048, RNAP_EXIT: .031 };
const MODEL_ASSETS = {
  illustrated: './assets/living/polymerase-living.glb',
  structural: './assets/structural/polymerase-structural.glb',
};
const SELECTIONS = {
  RNAP_CORE: { title: 'RNA 聚合酶', text: '正在工作的聚合酶近景；形体是功能结构示意。' },
  RNAP_CLAMP: { title: '聚合酶 · 夹持区', text: '局部动作帮助辨认工作区域，并非原子级构象模拟。' },
  RNAP_JAW: { title: '聚合酶 · 工作区', text: '观察核苷酸与模板对位，再连接到 RNA 延长端。' },
  RNAP_EXIT: { title: '聚合酶 · RNA 出口', text: '新生 RNA 从工作区连续延伸，向出口弯出。' },
  template: { title: 'DNA 模板链', text: '聚合酶沿模板链 3′→5′ 方向读取。' },
  coding: { title: 'DNA 非模板链', text: '两条 DNA 链在工作区局部打开，经过后重新配对。' },
  rna: { title: '新生 RNA', text: '以游离核苷酸为原料，向 RNA 的 3′端延长。' },
};

export function createLivingScene({ container, model = 'structural', look = 'perspective', perspective = true, onInvalidate = () => {}, onSelect = () => {}, onCameraModeChange = () => {} }) {
  if (!container) throw new Error('缺少样段展台');
  if (!Object.hasOwn(MODEL_ASSETS, model)) throw new Error('未知聚合酶模型');
  const fullEnvelope = model === 'structural' && look !== 'previous';
  const proteinView = fullEnvelope ? createPolymeraseView() : null;
  proteinView?.setEnabled(perspective);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.65));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = false;
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;touch-action:none';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  container.append(renderer.domElement);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#132427');
  scene.fog = new THREE.Fog(scene.background, 10, 22);
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 60);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .14;
  controls.enablePan = false; controls.enableZoom = true;
  controls.minDistance = 4.8; controls.maxDistance = 12.5;
  controls.minPolarAngle = .80; controls.maxPolarAngle = 1.85;
  controls.minAzimuthAngle = -.95; controls.maxAzimuthAngle = .95;
  controls.touches.ONE = THREE.TOUCH.ROTATE;
  controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
  controls.addEventListener('change', cameraChanged);
  controls.addEventListener('start', cameraInteractionStarted);
  controls.addEventListener('end', cameraInteractionEnded);
  const environment = createExhibitEnvironment(renderer);
  scene.environment = environment.texture;
  scene.add(new THREE.HemisphereLight('#bdd8cd', '#101f28', .38));
  for (const [color, intensity, position] of [
    ['#fff1d6', 2.05, [-4, 7, 9]], ['#9bd9ec', .40, [5, 2, -5]], ['#afdcca', .55, [-6, -3, 2]],
  ]) { const light = new THREE.DirectionalLight(color, intensity); light.position.set(...position); scene.add(light); }

  const geometries = new Set(), materials = new Set(), pickables = [];
  const selectionDetails = new Map(Object.entries(SELECTIONS));
  const ownGeometry = g => { geometries.add(g); return g; };
  const mat = (color, role, variant, extra = {}) => {
    const m = createExhibitMaterial({ color, role, variant, ...extra }); materials.add(m); return m;
  };
  const palette = {
    coding: mat('#7db6a0', 'backbone', 'living-coding'), template: mat('#85afce', 'backbone', 'living-template'),
    rna: mat('#dca28d', 'backbone', 'living-rna'), stem: mat('#aab9a6', 'backbone', 'living-stem'),
    body: mat('#7baea1', 'protein', 'living-rnap', { fieldVariant: 'rnap', vertexColors: true }),
    clamp: mat('#87b5a3', 'protein', 'living-rnap-clamp', { fieldVariant: 'rnap', vertexColors: true }),
    jaw: mat('#6d9c91', 'protein', 'living-rnap-jaw', { fieldVariant: 'rnap', vertexColors: true }),
    exit: mat('#5c8379', 'inner', 'living-rnap-exit', { fieldVariant: 'rnap', vertexColors: true }),
    contacts: mat('#bbc9b5', 'backbone', 'living-contacts', { roughness: .9, specularIntensity: .05 }),
  };
  const baseGeometry = Object.fromEntries(['A', 'T', 'G', 'C', 'U'].map(base => [base, ownGeometry(createExhibitBase(base))]));
  const baseMaterial = Object.fromEntries(['A', 'T', 'G', 'C', 'U'].map(base => [base, mat(BASE_COLORS[base], 'nucleic', `living-base-${base}`)]));
  const sugarGeometry = ownGeometry(createSugarGeometry());
  const cylinderGeometry = ownGeometry(new THREE.CylinderGeometry(1, 1, 1, 8));
  const pose = new THREE.Object3D();
  const a = V(), b = V(), c = V(), d = V(), direction = V();
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  const molecular = new THREE.Group(); scene.add(molecular);
  const polymerase = new THREE.Group(); molecular.add(polymerase);
  const partObjects = new Map();
  let assetManifest = null, assetLoaded = false, disposed = false;
  let time = 0, motion = true, reducedMotion = false, labelsEnabled = false;
  let directionMode = 'guided', cameraMode = 'guided';
  let applyingCamera = false, cameraInteracting = false, cameraTransition = null;
  let frame = sampleFrame(0, directionMode), renderCount = 0, updateCount = 0, width = 0, height = 0;

  function mesh(geometry, material, parent, selection) {
    const object = new THREE.Mesh(geometry, material); parent.add(object);
    if (selection) { object.userData.selection = selection; pickables.push(object); }
    return object;
  }
  function nucleotide(base, backboneMaterial, parent, selection) {
    const group = new THREE.Group(); parent.add(group);
    const plate = mesh(baseGeometry[base], baseMaterial[base], group, selection);
    const sugar = mesh(sugarGeometry, backboneMaterial, group, selection);
    sugar.scale.setScalar(.72);
    const stem = mesh(cylinderGeometry, backboneMaterial, group, selection);
    return { group, plate, sugar, stem, base, anchor: V(), edge: V() };
  }
  function place(n, anchor, inward, reach, orientation = null) {
    n.anchor.copy(anchor); n.group.position.copy(anchor);
    const length = /A|G/.test(n.base) ? .29 : .235;
    const stem = Math.max(.018, reach - length);
    n.sugar.rotation.set(.12, .3, -.14);
    // One canonical molecule frame keeps the sugar, base and stem continuous
    // when a waiting molecule becomes an incoming, and then a chain nucleotide.
    n.plate.position.set(0, stem + length * .5, 0);
    n.plate.quaternion.setFromUnitVectors(FORWARD, UP);
    n.plate.scale.set(.88, 1, length / .52);
    n.stem.position.set(0, stem * .5, 0);
    n.stem.quaternion.identity();
    n.stem.scale.set(.012, stem, .012);
    if (orientation) n.group.quaternion.copy(orientation);
    else n.group.quaternion.setFromUnitVectors(UP, inward);
    n.edge.copy(UP).multiplyScalar(stem + length).applyQuaternion(n.group.quaternion).add(anchor);
  }
  function rail(material, segments, radius, selection) {
    const buffer = createContinuousBackbone(segments, 9, radius); ownGeometry(buffer.geometry);
    const object = mesh(buffer.geometry, material, molecular, selection);
    object.frustumCulled = false;
    return { ...buffer, object };
  }
  const dnaRails = [rail(palette.coding, 210, .034, 'coding'), rail(palette.template, 210, .034, 'template')];
  const rnaRail = rail(palette.rna, 160, .031, 'rna');
  const dna = Array.from({ length: CODING_DNA.length }, (_, i) => [
    nucleotide(CODING_DNA[i], palette.coding, molecular, 'coding'),
    nucleotide(TEMPLATE_DNA[i], palette.template, molecular, 'template'),
  ]);
  const rna = Array.from({ length: RNA.length }, (_, i) => nucleotide(RNA[i], palette.rna, molecular, 'rna'));
  // Four candidates exist in the surrounding space from the opening frame.
  // Each becomes the chain's own base at the shared chemical commit boundary.
  const candidates = Array.from({ length: 4 }, (_, order) => nucleotide(RNA[FIRST_INDEX + order], palette.rna, molecular, 'rna'));
  const ambient = ['A', 'U', 'C'].map(base => nucleotide(base, palette.rna, molecular, 'rna'));
  const contacts = createPairingDashes(cylinderGeometry, palette.contacts, 260); molecular.add(contacts.object);

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden'; container.append(overlay);
  const tags = [
    ['RNA 聚合酶', () => V(.45, 1.50, .25)],
    ['非模板链 · 5′→3′', () => dnaPoint(frame.advance - 2.5, frame, 0, secondary(), V()).add(V(-.40, .34, 0))],
    ['模板链 · 3′→5′', () => dnaPoint(frame.advance + 2.6, frame, 1, secondary(), V()).add(V(.24, -.28, 0))],
    ['RNA · 5′→3′延长', () => rnaPoint(Math.max(0, frame.index - 6), frame, secondary(), V()).add(V(-.18, -.42, 0))],
  ].map(([text, anchor]) => {
    const element = document.createElement('span'); element.textContent = text;
    element.style.cssText = 'position:absolute;left:0;top:0;padding:4px 7px;border:1px solid #8db1a450;border-radius:5px;background:#132427db;color:#eaf0e5;font:500 11px/1.3 system-ui,sans-serif;white-space:nowrap;transform:translate(-50%,-50%)';
    overlay.append(element); return { element, anchor };
  });

  const dockRotation = new THREE.Quaternion();
  const pairedRotation = new THREE.Quaternion(), releasedRotation = new THREE.Quaternion();
  const targetRotation = new THREE.Quaternion();
  function secondary() { return motion && !reducedMotion; }
  function rnaDirection(index, output) {
    rnaPoint(index, frame, secondary(), a);
    dnaPoint(index, frame, 1, secondary(), b);
    output.subVectors(b, a).normalize();
    pairedRotation.setFromUnitVectors(UP, output);
    rnaPoint(index + .10, frame, secondary(), b);
    rnaPoint(index - .10, frame, secondary(), c);
    output.subVectors(b, c).normalize();
    output.set(-output.y, output.x, .18).normalize();
    releasedRotation.setFromUnitVectors(UP, output);
    pairedRotation.slerp(releasedRotation, smooth((frame.advance - index - .75) / 2.10));
    return output.copy(UP).applyQuaternion(pairedRotation).normalize();
  }
  function waitingRotation(order, out) {
    const t = secondary() ? time : 0;
    return out.setFromEuler(new THREE.Euler(.28 + .12 * Math.sin(t * .5 + order), -.30 + .16 * Math.sin(t * .4 + order), -.5 + order * 1.1 + t * .075));
  }
  function update() {
    if (disposed) return;
    updateCount++; frame = sampleFrame(time, directionMode);
    const animated = secondary();
    proteinView?.setActivity(frame.phase, animated);
    contacts.reset();
    dnaRails.forEach((tube, strand) => tube.update((i, out) => dnaPoint(i, frame, strand, animated, out), 0, 29));
    for (let i = 0; i < dna.length; i++) {
      dnaPoint(i, frame, 0, animated, a); dnaPoint(i, frame, 1, animated, b);
      const separated = Math.exp(-(((i - frame.advance) / 2.35) ** 4));
      const midpoint = c.copy(a).add(b).multiplyScalar(.5);
      for (let strand = 0; strand < 2; strand++) {
        const anchor = strand ? b : a;
        direction.subVectors(midpoint, anchor).normalize();
        const closedReach = anchor.distanceTo(midpoint) - .035;
        const reach = mix(closedReach, .355, separated);
        place(dna[i][strand], anchor, direction, reach);
      }
      if (separated < .05) {
        const start = dna[i][0].edge, end = dna[i][1].edge;
        const count = /G|C/.test(CODING_DNA[i]) ? 3 : 2;
        for (let j = 0; j < count; j++) { const offset = (j - (count - 1) / 2) * .047; contacts.add(start.clone().add(V(offset, 0, 0)), end.clone().add(V(offset, 0, 0)), .006); }
      }
    }
    rnaRail.update((i, out) => rnaPoint(i, frame, animated, out), 0, frame.extent);
    for (let i = 0; i < rna.length; i++) {
      const n = rna[i]; n.group.visible = i < frame.completed;
      if (!n.group.visible) continue;
      rnaPoint(i, frame, animated, d); rnaDirection(i, direction);
      place(n, d, direction, mix(.355, .305, smooth((frame.advance - i - .75) / 2.10)));
    }
    for (let order = 0; order < candidates.length; order++) {
      const index = FIRST_INDEX + order, n = candidates[order];
      n.group.visible = index >= frame.completed;
      if (!n.group.visible) continue;
      if (index === frame.index && frame.incomingVisible) {
        incomingPoint(frame, animated, d, a); rnaDirection(index, direction);
        const alignment = smooth((frame.phase - .18) / .36);
        waitingRotation(order, dockRotation);
        targetRotation.setFromUnitVectors(UP, direction);
        dockRotation.slerp(targetRotation, alignment);
        place(n, d, direction, mix(.305, .355, alignment), dockRotation);
      } else {
        standbyPoint(order, time, animated, d);
        direction.set(0, 1, 0);
        waitingRotation(order, dockRotation);
        place(n, d, direction, .305, dockRotation);
      }
    }
    ambient.forEach((n, index) => {
      const t = animated ? time : 0;
      d.set([-3.15, 2.05, 3.80][index] + .18 * Math.sin(t * .34 + index),
        [1.50, -2.02, 1.27][index] + .17 * Math.sin(t * .47 + index * 2.3),
        [-1.50, -.82, -1.85][index] + .16 * Math.cos(t * .37 + index));
      dockRotation.setFromEuler(new THREE.Euler(.45, index + t * .06, .40 + index));
      place(n, d, UP, .26, dockRotation); n.group.scale.setScalar(.72);
    });
    // Schematic contact marks identify the short pairing dwell. Existing RNA
    // bases behind the active site remain paired until they peel toward exit.
    for (let i = Math.max(0, frame.index - 1); i <= frame.index; i++) {
      if (frame.advance - i >= 1.30) continue;
      const paired = i < frame.completed ? rna[i] : frame.phase >= .56 && frame.incomingVisible ? candidates[i - FIRST_INDEX] : null;
      if (!paired || !paired.group.visible) continue;
      const count = /G|C/.test(RNA[i]) ? 3 : 2;
      for (let j = 0; j < count; j++) { const offset = (j - (count - 1) / 2) * .047; contacts.add(dna[i][1].edge.clone().add(V(offset, 0, 0)), paired.edge.clone().add(V(offset, 0, 0)), .007); }
    }
    contacts.finish();
    for (const [name, entry] of partObjects) {
      entry.pivot.rotation.set(0, 0, 0);
      const activity = animated ? frame.work : 0;
      entry.pivot.quaternion.setFromAxisAngle(entry.axis, entry.amplitude * activity);
    }
    // The experimental envelope stays rigid. Only the earlier illustrative
    // asset has teaching-only local compliance; these are not subunit kinetics.
    container.dataset.time = time.toFixed(3);
    container.dataset.motion = motion ? 'alive' : 'baseline';
  }

  async function loadModel() {
    const started = performance.now();
    const result = await Promise.allSettled([
      new GLTFLoader().loadAsync(new URL(fullEnvelope ? './assets/perspective/polymerase-full.glb' : MODEL_ASSETS[model], import.meta.url).href),
      fetch(new URL(fullEnvelope ? './assets/perspective/manifest.json' : model === 'structural' ? './assets/structural/manifest.json' : './assets/living/manifest.json', import.meta.url)).then(response => { if (!response.ok) throw new Error('聚合酶说明载入失败'); return response.json(); }),
    ]);
    const gltf = result[0].status === 'fulfilled' ? result[0].value : null;
    const releaseImported = () => {
      const released = new Set();
      const release = item => { if (item && !released.has(item)) { released.add(item); item.dispose(); } };
      gltf?.scene.traverse(object => {
        if (!object.isMesh) return;
        release(object.geometry);
        for (const surface of Array.isArray(object.material) ? object.material : [object.material]) {
          for (const value of Object.values(surface)) if (value?.isTexture) release(value);
          release(surface);
        }
      });
    };
    try {
      for (const item of result) if (item.status === 'rejected') throw item.reason;
      if (disposed) return;
      assetManifest = result[1].value;
      const parts = model === 'illustrated' ? ILLUSTRATED_PARTS : assetManifest.partNames;
      if (!Array.isArray(parts) || !parts.length || new Set(parts).size !== parts.length) throw new Error('模型部件说明无效');
      const found = new Map(); gltf.scene.updateMatrixWorld(true);
      gltf.scene.traverse(object => { if (object.isMesh && parts.includes(object.name)) {
        if (found.has(object.name)) throw new Error(`重复模型部件 ${object.name}`);
        found.set(object.name, object);
      } });
      if (parts.some(name => !found.has(name))) throw new Error('工作区模型缺少部件');
      for (const name of parts) {
        const object = found.get(name);
        const geometry = ownGeometry(object.geometry.clone().applyMatrix4(object.matrixWorld));
        const position = geometry.getAttribute('position');
        if (!position || !Array.from(position.array).every(Number.isFinite)) throw new Error('模型顶点无效');
        const part = assetManifest.pivots?.[name] || assetManifest.parts?.find?.(entry => entry.name === name) || assetManifest.parts?.[name] || {};
        const pivotPosition = part.pivot || (name === 'RNAP_CLAMP' ? [.85, .55, -.15] : name === 'RNAP_JAW' ? [.8, -.50, -.15] : name === 'RNAP_EXIT' ? [-.80, -.65, -.12] : [0, 0, 0]);
        const axis = V(...(part.rotationAxis || [1, 0, 0])).normalize();
        geometry.translate(...pivotPosition.map(value => -value));
        geometry.computeBoundingSphere();
        const pivot = new THREE.Group(); pivot.position.set(...pivotPosition); polymerase.add(pivot);
        const profile = assetManifest.parts?.find?.(entry => entry.name === name) || assetManifest.parts?.[name] || {};
        const color = assetManifest.partColors?.[name] || profile.color || '#7baea1';
        const surface = fullEnvelope ? proteinView.surface(parts.indexOf(name)) : model === 'structural'
          ? mat(color, profile.role === 'inner' ? 'inner' : 'protein', `structural-${name}`, { fieldVariant: 'rnap', vertexColors: true })
          : name === 'RNAP_CLAMP' ? palette.clamp : name === 'RNAP_JAW' ? palette.jaw : name === 'RNAP_EXIT' ? palette.exit : palette.body;
        if (model === 'structural') selectionDetails.set(name, {
          title: `RNA 聚合酶 · ${profile.subunit || '亚基'}`,
          text: fullEnvelope ? '外形依据酵母 Pol II 实验坐标简化；工作区前侧随视角局部透开，属于教学观察方式。' : '淡色分区表示不同蛋白亚基；外形依据酵母 Pol II 实验坐标简化，前侧为教学剖切。',
        });
        const partMesh = mesh(geometry, surface, pivot, name); partMesh.name = name;
        let ghost = null;
        if (fullEnvelope) {
          materials.add(surface);
          const ghostSurface = proteinView.surface(parts.indexOf(name), true); materials.add(ghostSurface);
          ghost = mesh(geometry, ghostSurface, pivot); ghost.name = name + '_TEACHING_OVERLAY';
          // Opaque geometry establishes depth first; faint near-side surfaces
          // blend after solid nucleic acids without writing depth over the chain.
          ghost.renderOrder = 2;
        }
        const amplitude = model === 'structural' ? 0 : ILLUSTRATED_AMPLITUDES[name] || 0;
        partObjects.set(name, { pivot, axis, amplitude, mesh: partMesh, ghost });
      }
      assetLoaded = true; container.dataset.model = model;
      container.dataset.loadMs = (performance.now() - started).toFixed(1);
      update(); onInvalidate();
    } finally { releaseImported(); }
  }

  function resize() {
    if (disposed) return;
    const bounds = container.getBoundingClientRect(); width = Math.max(1, bounds.width); height = Math.max(1, bounds.height);
    renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix();
    if (cameraMode === 'guided' && !cameraInteracting && !cameraTransition) applyCurrentCamera();
    onInvalidate();
  }
  function notifyCameraMode() {
    container.dataset.cameraMode = cameraMode;
    onCameraModeChange(cameraMode);
  }
  function cameraInteractionStarted() { cameraInteracting = true; }
  function cameraChanged() {
    if (!applyingCamera && cameraInteracting && cameraMode !== 'manual') {
      cameraMode = 'manual'; cameraTransition = null; notifyCameraMode();
    }
    onInvalidate();
  }
  function cameraInteractionEnded() {
    cameraInteracting = false;
    if (cameraMode === 'guided' && !cameraTransition) applyCurrentCamera();
    onInvalidate();
  }
  function cameraPose() {
    if (directionMode === 'guided') return directionAt(time, { portrait: width < 600, reducedMotion });
    return { position: [.60, 1.42, width < 600 ? 9.2 : 7.60], target: [-.30, -.22, .15] };
  }
  function applyPose(position, target) {
    applyingCamera = true;
    const damping = controls.enableDamping;
    // Clear residual OrbitControls velocities before applying a time-derived
    // pose. Otherwise out-of-order scrubbing would retain a previous turn.
    controls.enableDamping = false;
    controls.update();
    camera.position.fromArray(position); controls.target.fromArray(target);
    controls.update(); controls.enableDamping = damping;
    // OrbitControls' spherical normalization can alter coordinates by a few
    // ulps. Keep authored poses exact for deterministic seeks and frame export.
    camera.position.fromArray(position); controls.target.fromArray(target);
    camera.lookAt(controls.target);
    applyingCamera = false;
  }
  function applyCurrentCamera() { const pose = cameraPose(); applyPose(pose.position, pose.target); }
  function resetView() {
    cameraTransition = null; cameraMode = directionMode === 'guided' ? 'guided' : 'fixed';
    applyCurrentCamera(); notifyCameraMode(); onInvalidate();
  }
  function resumeGuide() {
    if (directionMode !== 'guided' || reducedMotion || disposed) return;
    cameraMode = 'guided'; cameraInteracting = false;
    cameraTransition = { started: performance.now(), position: camera.position.toArray(), target: controls.target.toArray() };
    notifyCameraMode(); onInvalidate();
  }
  function updateCameraTransition() {
    if (!cameraTransition) return false;
    const progress = clamp((performance.now() - cameraTransition.started) / 650);
    const t = progress ** 3 * (progress * (progress * 6 - 15) + 10);
    const pose = cameraPose();
    applyPose(cameraTransition.position.map((v, i) => mix(v, pose.position[i], t)), cameraTransition.target.map((v, i) => mix(v, pose.target[i], t)));
    if (progress === 1) cameraTransition = null;
    return Boolean(cameraTransition);
  }
  function render() {
    if (disposed) return false;
    const transitionActive = updateCameraTransition();
    const needsFrame = (cameraMode !== 'guided' || cameraInteracting ? controls.update() : false) || transitionActive;
    proteinView?.update(camera);
    const showOverlay = proteinView && (proteinView.inspect().enabled || proteinView.active());
    for (const entry of partObjects.values()) if (entry.ghost) entry.ghost.visible = Boolean(showOverlay);
    renderer.render(scene, camera); renderCount++;
    for (const tag of tags) {
      tag.element.hidden = !labelsEnabled;
      if (!labelsEnabled) continue;
      const point = tag.anchor().project(camera);
      tag.element.hidden = point.z < -1 || point.z > 1 || Math.abs(point.x) > .92 || Math.abs(point.y) > .90;
      const halfWidth = tag.element.offsetWidth / 2;
      const x = clamp((point.x + 1) * width / 2, halfWidth + 10, width - halfWidth - 10);
      tag.element.style.left = `${x}px`;
      tag.element.style.top = `${clamp((1 - point.y) * height / 2, 68, height - 26)}px`;
    }
    return needsFrame || Boolean(proteinView?.active());
  }
  let pointerDown = null;
  const down = event => { pointerDown = { x: event.clientX, y: event.clientY }; };
  const up = event => {
    if (!pointerDown || Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y) > 5) { pointerDown = null; return; }
    pointerDown = null;
    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.set((event.clientX - bounds.left) / bounds.width * 2 - 1, 1 - (event.clientY - bounds.top) / bounds.height * 2);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(pickables.filter(object => { let p = object; while (p) { if (!p.visible) return false; p = p.parent; } return true; }))
      .find(hit => !proteinView || !partObjects.has(hit.object.name) || proteinView.opacityAt(hit.point) > .30);
    onSelect(hit ? selectionDetails.get(hit.object.userData.selection) : null); onInvalidate();
  };
  renderer.domElement.addEventListener('pointerdown', down);
  renderer.domElement.addEventListener('pointerup', up);
  resize(); resetView(); update();
  const ready = loadModel();
  return {
    ready,
    setTime(value, { seek = false } = {}) {
      time = clamp(value, 0, DURATION); update();
      if (seek) cameraTransition = null;
      if (seek && cameraMode !== 'guided' && !cameraInteracting) applyPose(camera.position.toArray(), controls.target.toArray());
      if (cameraMode === 'guided' && !cameraInteracting && !cameraTransition) applyCurrentCamera();
      onInvalidate();
    },
    setDirection(value) {
      if (!['guided', 'fixed'].includes(value)) throw new Error('未知展示版本');
      directionMode = value; update(); resetView(); container.dataset.direction = directionMode;
    },
    getDirection() { return directionMode; },
    getCameraMode() { return cameraMode; },
    setPerspective(enabled) { perspective = Boolean(enabled); proteinView?.setEnabled(perspective, { animate: !reducedMotion }); onInvalidate(); },
    resumeGuide,
    setMotion(enabled) { motion = Boolean(enabled); update(); onInvalidate(); },
    setReducedMotion(enabled) {
      reducedMotion = Boolean(enabled); update(); cameraTransition = null;
      if (reducedMotion) proteinView?.finishTransition();
      if (reducedMotion && assetLoaded && cameraMode === 'guided') { cameraMode = 'manual'; notifyCameraMode(); }
      else if (cameraMode === 'guided') applyCurrentCamera();
      onInvalidate();
    },
    setLabels(enabled) { labelsEnabled = Boolean(enabled); onInvalidate(); },
    resetView, resize, render,
    setZoom(factor) {
      cameraMode = 'manual'; cameraTransition = null; notifyCameraMode();
      const offset = camera.position.clone().sub(controls.target);
      offset.setLength(clamp(offset.length() / clamp(factor, .25, 4), controls.minDistance, controls.maxDistance));
      camera.position.copy(controls.target).add(offset); controls.update(); onInvalidate();
    },
    inspect() {
      const index = frame.index;
      const candidate = candidates[index - FIRST_INDEX];
      const positionBuffer = rnaRail.geometry.attributes.position;
      const endCenter = V();
      for (let side = 0; side < 9; side++) endCenter.add(V().fromBufferAttribute(positionBuffer, 160 * 10 + side));
      endCenter.multiplyScalar(1 / 9);
      molecular.updateMatrixWorld(true);
      proteinView?.update(camera);
      const workPoints = {
        growingEnd: rnaPoint(frame.extent, frame, secondary(), V()),
        templateBase: dna[frame.index]?.[1].edge.clone(),
        pairingCenter: rnaPoint(frame.extent, frame, secondary(), V()).add(dna[frame.index]?.[1].edge || V()).multiplyScalar(.5),
      };
      const proteinMeshes = [...partObjects.values()].map(entry => entry.mesh);
      const workVisibility = Object.fromEntries(Object.entries(workPoints).filter(([, point]) => point).map(([name, point]) => {
        const distance = camera.position.distanceTo(point);
        raycaster.set(camera.position, point.clone().sub(camera.position).normalize());
        const hits = raycaster.intersectObjects(proteinMeshes, false).filter(hit => hit.distance < distance - .02);
        const transmittance = hits.reduce((value, hit) => value * (proteinView ? 1 - proteinView.opacityAt(hit.point) : 0), 1);
        return [name, { position: point.toArray(), blockedByProtein: transmittance < .5, transmittance }];
      }));
      return {
        time, reactionTime: frame.reactionTime, direction: directionMode, cameraMode,
        directionStage: directionMode === 'guided' ? directionAt(time).stage : 'fixed',
        stageLabel: directionMode === 'guided' ? directionAt(time).label : '局部解旋 · 核苷酸接入 · 聚合酶前移',
        index, phase: frame.phase, advance: frame.advance, completed: frame.completed, extent: frame.extent,
        scientificTime: frame.snapshot.time, inputBase: RNA[index], templateBase: TEMPLATE_DNA[index],
        motion, reducedMotion, loaded: assetLoaded, model, look, perspective: proteinView?.inspect() || null,
        incoming: candidate?.group.visible ? candidate.anchor.toArray() : null,
        incomingEdge: candidate?.group.visible ? candidate.edge.toArray() : null,
        joiningAnchor: rnaPoint(index, frame, secondary(), V()).toArray(),
        chainEnd: rnaPoint(frame.extent, frame, secondary(), V()).toArray(),
        backboneEnd: endCenter.toArray(),
        rna: rna.filter(n => n.group.visible).map(n => ({ base: n.base, position: n.anchor.toArray(), edge: n.edge.toArray(), rotation: n.group.quaternion.toArray() })),
        candidates: candidates.map((n, order) => n.group.visible
          ? { index: FIRST_INDEX + order, visible: true, position: n.anchor.toArray(), edge: n.edge.toArray(), rotation: n.group.quaternion.toArray() }
          : { index: FIRST_INDEX + order, visible: false }),
        dna: dna.map(pair => pair.map(n => ({ position: n.anchor.toArray(), edge: n.edge.toArray() }))),
        parts: Object.fromEntries([...partObjects].map(([name, entry]) => [name, { position: entry.pivot.position.toArray(), rotation: entry.pivot.quaternion.toArray() }])),
        workVisibility,
        camera: { position: camera.position.toArray(), target: controls.target.toArray(), fov: camera.fov },
      };
    },
    getMetrics() { return { renderCount, updateCount, loaded: assetLoaded, model, drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures, width, height, pixelRatio: renderer.getPixelRatio(), duration: DURATION, direction: directionMode, cameraMode }; },
    dispose() {
      if (disposed) return;
      disposed = true; cameraTransition = null;
      controls.removeEventListener('change', cameraChanged);
      controls.removeEventListener('start', cameraInteractionStarted);
      controls.removeEventListener('end', cameraInteractionEnded); controls.dispose();
      renderer.domElement.removeEventListener('pointerdown', down); renderer.domElement.removeEventListener('pointerup', up);
      for (const geometry of geometries) geometry.dispose();
      for (const material of materials) material.dispose();
      scene.environment = null; environment.dispose(); renderer.dispose();
      overlay.remove(); renderer.domElement.remove();
    },
  };
}
