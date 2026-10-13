import * as THREE from './vendor/three.module.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { BASE_COLORS } from './biology.mjs';
import { createExhibitMaterial, createExhibitEnvironment } from './exhibit-surface.js';
import { createBioProteinMaterial } from './bio-protein-surface.js';
import { createExhibitBase } from './nucleic-exhibit.js';
import { loadPolymeraseExhibit } from './polymerase-exhibit.js';
import { createPolymeraseView } from './pilot/polymerase-view.js';
import { buildRibosomeExhibit, buildTrnaExhibit } from './translation-exhibit.js';
import { createPeptideResidue } from './peptide-exhibit.js';
import { buildNuclearExportExhibit } from './nuclear-export-exhibit.js';
import { createContinuousBackbone } from './continuous-backbone.js';
import { createMolecularLivingMotion } from './molecular-living-motion.js';
import { createSugarGeometry } from './molecular-models.js';

const TYPES = new Set(['polymerase', 'template', 'coding', 'rna', 'trna', 'ribosome', 'peptide', 'pore']);
const PERSPECTIVE_TYPES = new Set(['polymerase', 'ribosome', 'pore']);
const vector = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const PEPTIDE_COLORS = ['#c8a586', '#c9ba91', '#b5a8c7', '#b4c2a3', '#c79281'];
const RESIDUES = ['Met', 'Ala', 'Phe', 'Glu', 'Pro'];

/**
 * A separately owned, demand-rendered observation stage. Step changes are
 * deterministic diagrams. Each object has a separate presentation motion clock;
 * it does not advance the main transcription/translation timeline.
 * The host schedules render() after onInvalidate and while render() is true.
 */
export function createObjectLessonScene({ container, type, onInvalidate = () => {}, reducedMotion = false } = {}) {
  if (!container?.append) throw new TypeError('缺少对象教学展台容器');
  if (!TYPES.has(type)) throw new RangeError(`未知教学对象：${type}`);

  const began = performance.now();
  let disposed = false, loaded = false, errorMessage = null, step = 0;
  let perspective = false, needsFrame = false, dragging = false;
  let width = 1, height = 1, frames = 0, resizeObserver = null, loadMs = null;
  let environment = null, polymerase = null, exportExhibit = null;
  let livingMotion=null, motionTime=0, motionLastStamp=null;
  let motionEnabled=true, motionPlaying=!reducedMotion, motionSuspended=false;
  const motionDuration=12;
  let windowView = null, viewObject = null, applyStep = () => {};
  let homeDistance = 6, modelInfo = { authoring: '教学示意模型' };
  const ownedGeometries = new Set(), ownedMaterials = new Set();
  const labels = [], auxiliaries = [];
  const strandRecords = [], trnaMaterials = new Set(), residueMaterials = new Set();
  const proteinMaterials = new Set();
  const previousPosition = container.style.position;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#132427');
  const root = new THREE.Group();
  root.name = `object-lesson-${type}`;
  scene.add(root);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.domElement.dataset.objectLessonCanvas = type;
  renderer.domElement.setAttribute('aria-label', '三维对象，可拖动旋转、滚轮或双指缩放');
  renderer.domElement.setAttribute('role', 'img');
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;touch-action:none;';
  container.style.position = 'relative';
  container.append(renderer.domElement);
  const overlay = document.createElement('div');
  overlay.dataset.objectLessonOverlay = type;
  overlay.setAttribute('aria-hidden', 'true');
  overlay.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;user-select:none;';
  container.append(overlay);

  const camera = new THREE.PerspectiveCamera(38, 1, .05, 80);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.enableDamping = !reducedMotion;
  controls.dampingFactor = .13;
  controls.minPolarAngle = .12;
  controls.maxPolarAngle = Math.PI - .12;
  controls.touches.ONE = THREE.TOUCH.ROTATE;
  controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
  const homeTarget = vector(), homeDirection = vector(.14, .13, 1).normalize();
  function invalidate() { if (!disposed) { needsFrame = true; if (loaded) onInvalidate(); } }
  const orbitStart = () => { dragging = true; motionLastStamp=null; invalidate(); };
  const orbitEnd = () => { dragging = false; motionLastStamp=null; invalidate(); };
  controls.addEventListener('change', invalidate);
  controls.addEventListener('start', orbitStart);
  controls.addEventListener('end', orbitEnd);

  scene.add(new THREE.HemisphereLight('#bdd8cd', '#101f28', .38));
  for (const [color, intensity, position] of [
    ['#fff1d6', 2.05, [-4, 7, 9]], ['#9bd9ec', .40, [5, 2, -5]], ['#afdcca', .55, [-6, -3, 2]],
  ]) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...position); scene.add(light);
  }

  const geometry = value => { ownedGeometries.add(value); return value; };
  const ownMaterial = value => { ownedMaterials.add(value); return value; };
  const material = (color, { kind = 'protein', biological = false, ...properties } = {}) => {
    const role = kind === 'inner' ? 'inner' : ['base', 'sugar'].includes(kind) ? 'nucleic' : kind === 'backbone' ? 'backbone' : 'protein';
    return ownMaterial(biological
      ? createBioProteinMaterial({ color, inner: role === 'inner', residue: kind === 'residue', variant: `lesson-${color}`, ...properties })
      : createExhibitMaterial({ color, role, variant: `lesson-${color}`, ...properties }));
  };
  const mesh = (g, m, parent, selection = null) => {
    const object = new THREE.Mesh(g, m); parent.add(object);
    if (selection) object.userData.selection = selection;
    return object;
  };
  // Existing exhibit builders use this tiny kit. Every generated tube belongs
  // to this stage; no shared geometry, material or texture is disposed here.
  const tube = (parent, mat, radius, segments = 40, selection = null, { profile = false } = {}) => {
    const object = mesh(geometry(new THREE.BufferGeometry()), mat, parent, selection);
    const curve = new THREE.CatmullRomCurve3([], false, 'centripetal');
    let flow = null;
    const update = () => { if (flow && curve.points.length > 1) flow.update((t, out) => curve.getPoint(t, out), 0, 1); };
    return { object, update, set(points) {
      if (points.length < 2) { object.visible = false; return; }
      if (!flow) {
        flow = createContinuousBackbone(Math.max(2, segments), 8, radius, { profile, units: points.length - 1 });
        const old = object.geometry; object.geometry = geometry(flow.geometry);
        ownedGeometries.delete(old); old.dispose();
      }
      curve.points = points; object.visible = true; update();
    } };
  };
  const palette = {
    coding: material('#7db6a0', { kind: 'backbone' }), template: material('#85afce', { kind: 'backbone' }),
    rna: material('#dca28d', { kind: 'backbone' }), trna: material('#a59ac5', { kind: 'backbone' }),
    joint: material('#dcd4b6', { kind: 'backbone' }),
    ribosome: material('#bdb393'), smallRibosome: material('#91aaa0'),
  };
  const baseGeometry = new Map(), baseMaterial = new Map();
  const sugarGeometry = geometry(createSugarGeometry());
  function basePlate(base, parent) {
    if (!baseGeometry.has(base)) baseGeometry.set(base, geometry(createExhibitBase(base)));
    if (!baseMaterial.has(base)) baseMaterial.set(base, material(BASE_COLORS[base], { kind: 'base' }));
    return mesh(baseGeometry.get(base), baseMaterial.get(base), parent);
  }
  const kit = { geometry, material, ownMaterial, mesh, tube, palette, bioSurface: true, refinedModels: true };

  function group(parent = root, name = '') {
    const object = new THREE.Group(); object.name = name; parent.add(object); return object;
  }
  function auxiliary(name, parent = root) {
    const object = group(parent, name); object.visible = false; auxiliaries.push(object); return object;
  }
  function visibleInHierarchy(object) {
    for (let current = object; current; current = current.parent) if (!current.visible) return false;
    return true;
  }
  function label(text, object, local = vector(), { minStep = 0, maxStep = 2, letter = false, offset = [0, 0], anchor = null } = {}) {
    const element = document.createElement('span'); element.textContent = text; element.hidden = true;
    element.dataset.objectLessonLabel = letter ? 'letter' : 'annotation';
    element.style.cssText = `position:absolute;left:0;top:0;transform:translate(-50%,-50%);white-space:nowrap;font-family:ui-sans-serif,system-ui,sans-serif;font-size:${letter ? 13 : 11}px;font-weight:${letter ? 750 : 600};line-height:1.3;color:#f2f2e5;${letter ? 'padding:1px 2px;text-shadow:0 1px 3px #132427,0 0 3px #132427;' : 'padding:3px 7px;border:1px solid #6a807666;border-radius:5px;background:#132427d9;'}`;
    overlay.append(element);
    labels.push({ element, object, local, minStep, maxStep, offset, anchor });
    return element;
  }
  function connector(parent, a, b, radius = .018, mat = palette.joint) {
    const direction = b.clone().sub(a);
    const object = mesh(geometry(new THREE.CylinderGeometry(radius, radius, direction.length(), 10)), mat, parent);
    object.position.copy(a).add(b).multiplyScalar(.5);
    object.quaternion.setFromUnitVectors(vector(0, 1, 0), direction.normalize()); return object;
  }
  function arrow(parent, from, to, color = '#d5bf8b') {
    const direction = to.clone().sub(from), size = direction.length();
    const mat = material(color, { kind: 'backbone' });
    const headLength = Math.min(.14, size * .25), end = to.clone().addScaledVector(direction.clone().normalize(), -headLength);
    connector(parent, from, end, .014, mat);
    const head = mesh(geometry(new THREE.ConeGeometry(.06, headLength, 12)), mat, parent);
    head.position.copy(to).addScaledVector(direction.clone().normalize(), -headLength / 2);
    head.quaternion.setFromUnitVectors(vector(0, 1, 0), direction.normalize());
  }
  function outline(parent, position, radius, text) {
    const object = mesh(geometry(new THREE.TorusGeometry(radius, .011, 6, 64)), palette.joint, parent);
    object.position.copy(position);
    if (text) label(text, parent, position.clone().add(vector(0, radius + .20, 0)), { minStep: 1 });
    return object;
  }
  function shortStrand(sequence, kind, { parent = root, up = true, ends = ['5′', '3′'], spacing = .35, showLetters = true, showEnds = true, path = null } = {}) {
    const object = group(parent, `${kind}-short-strand`), bases = [], sugars = [];
    const anchors = path ? path.map(point => point.clone()) : [...sequence].map((_, i) => vector((i - (sequence.length - 1) / 2) * spacing, 0, .02 * Math.sin(i * .7)));
    const points = anchors.map(point => point.clone()), tips = anchors.map(point => point.clone().add(vector(0, up ? .52 : -.52, 0)));
    const backbone = tube(object, palette[kind], .032, 48, null, { profile: true });
    backbone.set(points);
    for (const [i, base] of [...sequence].entries()) {
      const plate = basePlate(base, object);
      plate.position.copy(points[i]).add(vector(0, up ? .26 : -.26, 0));
      plate.rotation.x = up ? -Math.PI / 2 : Math.PI / 2;
      if (showLetters) label(base, plate, vector(0, .042, 0), { letter: true }); bases.push(plate);
      const sugar = mesh(sugarGeometry, palette[kind], object);
      sugar.name = `${kind}-sugar-${i}`; sugar.scale.setScalar(.78); sugar.position.copy(points[i]); sugars.push(sugar);
    }
    if (showEnds) {
      const startOffset = vector(-.20, up ? -.16 : .16, .08), endOffset = vector(.20, up ? -.16 : .16, .08);
      label(ends[0], object, vector(), { anchor: out => out.copy(points[0]).add(startOffset) });
      label(ends[1], object, vector(), { anchor: out => out.copy(points.at(-1)).add(endOffset) });
    }
    const record = { group: object, bases, sugars, points, anchors, tips, backbone, animated: type !== 'polymerase', curved: !path };
    strandRecords.push(record);
    return { group: object, bases, points, sequence };
  }
  function contacts(parent, count, spacing = .35, y0 = .53, y1 = .57) {
    // Short dashed pairing marks, not measured atom-to-atom hydrogen bonds.
    for (let i = 0; i < count; i++) for (let dash = 0; dash < 2; dash++) {
      const x = (i - (count - 1) / 2) * spacing;
      connector(parent, vector(x, y0 + (y1 - y0) * dash / 2, .02), vector(x, y0 + (y1 - y0) * (dash + .65) / 2, .02), .007);
    }
  }
  function trnaBody(parent = root, anticodon = 'UAC') {
    const object = group(parent, 'folded-L-tRNA');
    object.userData.motionKind = 'trna';
    const joint = material('#dcd4b6', { kind: 'backbone' });
    buildTrnaExhibit(object, palette.trna, { ...kit, palette: { ...palette, joint } });
    trnaMaterials.add(palette.trna); trnaMaterials.add(joint);
    for (let i = 0; i < 3; i++) {
      const plate = basePlate(anticodon[i], object);
      plate.position.set((i - 1) * .35, -.025, .10);
      plate.rotation.x = Math.PI / 2;
      plate.scale.set(.9, .9, .38);
      label(anticodon[i], plate, vector(0, .055, 0), { letter: true });
    }
    return object;
  }
  function amino(parent, position, index = 0, radius = .16) {
    const surface = material(PEPTIDE_COLORS[index], { kind: 'residue', biological: true }); residueMaterials.add(surface);
    const object = mesh(geometry(createPeptideResidue(index)), surface, parent);
    object.userData.motionKind = 'peptide';
    object.position.copy(position); object.scale.setScalar(radius); return object;
  }

  function createPageMotion() {
    const controllers = [];
    const byKind = new Map();
    if (livingMotion) controllers.push(livingMotion);
    for (const [kind, materials] of [[type, proteinMaterials], ['trna', trnaMaterials], ['peptide', residueMaterials]]) {
      if (!materials.size) continue;
      const controller = createMolecularLivingMotion({ group: root, materials, kind });
      controllers.push(controller); byKind.set(kind, controller);
    }
    let enabled = true, dead = false, lastTime = null, lastWorking = null, lastEnabled = null, maxTipError = 0;
    const axis = vector(0, 0, 1), direction = vector(), sampledTip = vector();
    const streamOffset = (out, x, seconds, working) => {
      const phase = ((seconds % 12) + 12) % 12 * Math.PI / 6;
      const first = Math.sin(phase), second = Math.sin(phase * 2), gain = 1 + .12 * working;
      out.set(0, gain * .012 * first * Math.sin(.9 * x + .4),
        gain * (.025 * first * Math.sin(1.35 * x + .6) + .007 * second * Math.sin(.9 * x - .4)));
      return out;
    };
    const offset = vector();
    function update(time, { working = 0 } = {}) {
      if (dead) return;
      for (const controller of controllers) controller.update(time, { working });
      if (time === lastTime && working === lastWorking && enabled === lastEnabled) return;
      lastTime = time; lastWorking = working; lastEnabled = enabled; maxTipError = 0;
      for (const record of strandRecords) {
        if (record.initialized && (!record.animated || !visibleInHierarchy(record.group))) continue;
        for (let i = 0; i < record.points.length; i++) {
          const point = record.points[i], origin = record.anchors[i], plate = record.bases[i];
          point.copy(origin);
          if (record.curved) {
            point.y += .025 * Math.sin(1.6 * origin.x + .4);
            point.z += .052 * Math.sin(1.05 * origin.x - .3);
          }
          if (enabled && record.animated) point.add(streamOffset(offset, origin.x, time, working));
          direction.subVectors(record.tips[i], point);
          const length = direction.length();
          plate.position.copy(point).addScaledVector(direction, .5);
          plate.scale.z = length / .52; direction.multiplyScalar(1 / length);
          plate.quaternion.setFromUnitVectors(axis, direction);
          record.sugars[i].position.copy(point); record.sugars[i].quaternion.copy(plate.quaternion);
          sampledTip.copy(axis).multiplyScalar(.26 * plate.scale.z).applyQuaternion(plate.quaternion).add(plate.position);
          maxTipError = Math.max(maxTipError, sampledTip.distanceTo(record.tips[i]));
        }
        record.backbone.update();
        record.initialized = true;
      }
    }
    function setEnabled(value) {
      enabled = Boolean(value); lastEnabled = null;
      controllers.forEach(controller => controller.setEnabled(enabled));
    }
    function sampleLocalPoint(point, time, options = {}) {
      if (controllers.length) return controllers[0].sampleLocalPoint(point, time, options);
      const out = point?.isVector3 ? point.clone() : vector().fromArray(point);
      return enabled ? out.add(streamOffset(offset, out.x, time, options.working || 0)) : out;
    }
    function inspect() {
      const profiles = controllers.map(controller => controller.inspect());
      return { kind: type, enabled: enabled && !dead, period: 12, profiles,
        field: profiles.length ? profiles[0].field || profiles[0].kind : 'constrained continuous strand buffer',
        maxDisplacement: Math.max(.039, ...profiles.map(profile => profile.maxDisplacement || 0)),
        strands: strandRecords.length, curvedStrands: strandRecords.filter(record => record.curved).length,
        pairedTipMaxError: maxTipError, buffers: 'persistent; geometry allocated only at first set',
        scientificScope: '受约束协同微动教学示意；配对端、载荷端固定，不代表实测分子动力学' };
    }
    function sampleLabelPoint(kind, point) {
      return byKind.get(kind)?.sampleLocalPoint(point, lastTime || 0, { working: lastWorking || 0 }) || point;
    }
    function dispose() { if (!dead) { dead = true; enabled = false; controllers.forEach(controller => controller.dispose()); } }
    return { update, setEnabled, sampleLocalPoint, sampleLabelPoint, inspect, dispose };
  }

  async function build() {
    if (disposed) throw new DOMException('对象展台已销毁', 'AbortError');
    environment = createExhibitEnvironment(renderer); scene.environment = environment.texture;
    if (type === 'polymerase') {
      const imported = await loadPolymeraseExhibit();
      if (disposed) { imported.dispose(); throw new DOMException('对象展台已销毁', 'AbortError'); }
      polymerase = imported; root.add(imported.group);
      windowView = imported.view; viewObject = imported.group;
      const {createPolymeraseLivingMotion}=await import('./polymerase-living-motion.js');
      if(disposed)throw new DOMException('对象展台已销毁','AbortError');
      livingMotion=createPolymeraseLivingMotion({group:imported.group,materials:imported.materials});
      livingMotion.setEnabled(motionEnabled && !reducedMotion);
      modelInfo = { authoring: 'PDB 1Y1W 十二亚基粗粒化完整包络', subunits: 12, source: 'PDB 1Y1W', atomicSurface: false, loadMs: imported.loadMs };
      const work = auxiliary('polymerase-template');
      shortStrand('TACCGA', 'template', { parent: work, ends: ['3′', '5′'] });
      work.scale.setScalar(.66); work.position.set(0, -.19, .66);
      label('模板链 · 3′ → 5′', work, vector(0, -.45, .08));
      const incoming = auxiliary('polymerase-free-RNA-nucleotide', work);
      const nucleotide = basePlate('A', incoming);
      nucleotide.position.set(-.875, .84, .02); nucleotide.rotation.x = Math.PI / 2;
      label('A', nucleotide, vector(0, .042, 0), { letter: true });
      label('游离 RNA 核苷酸', incoming, vector(-.74, 1.36, .10));
      connector(incoming, vector(-1.0, 1.1, .02), vector(-.75, 1.1, .02), .035, palette.rna);
      const incomingPair = group(incoming);
      incomingPair.position.x = -.875; contacts(incomingPair, 1);
      const product = auxiliary('polymerase-RNA', work);
      // The older RNA segment exits toward the viewer; only the growing three
      // bases remain paired. This is a local schematic, not a native alignment.
      shortStrand('AUGGCU', 'rna', { parent: product, up: false, path: [
        vector(-1.45, -1.0, .38), vector(-1.30, -.58, .36), vector(-1.08, -.14, .28),
        vector(.175, 1.1, .02), vector(.525, 1.1, .02), vector(.875, 1.1, .02),
      ] });
      const hybridPairs = group(product); hybridPairs.position.x = .525; contacts(hybridPairs, 3);
      label('已连接 RNA · 5′ → 3′', product, vector(.51, 1.53, .10));
      const restored = auxiliary('polymerase-restored-DNA', work);
      shortStrand('ATG', 'coding', { parent: restored, up: false, showEnds: false });
      restored.position.set(-.525, 1.1, -.025);
      contacts(restored, 3, .35, -.57, -.53);
      label('经过区域 · DNA 恢复配对', restored, vector(-.15, .76, .04));
      const marker = auxiliary('polymerase-work-region');
      label('局部工作区域', marker, vector(1.12, .40, .84), { minStep: 1 });
      applyStep = () => { work.visible = step > 0; marker.visible = step > 0; incoming.visible = step === 1; product.visible = step === 2; restored.visible = step === 2; imported.view.setActivity(step > 0 ? .5 : 0, step > 0); };
    } else if (type === 'template' || type === 'coding') {
      const isTemplate = type === 'template';
      const main = shortStrand(isTemplate ? 'TACCGA' : 'ATGGCT', type, { ends: isTemplate ? ['3′', '5′'] : ['5′', '3′'] });
      const companion = auxiliary('complementary-DNA');
      shortStrand(isTemplate ? 'ATGGCT' : 'TACCGA', isTemplate ? 'coding' : 'template', { parent: companion, up: !isTemplate, ends: isTemplate ? ['5′', '3′'] : ['3′', '5′'] });
      companion.position.y = isTemplate ? 1.1 : 0;
      const pairing = auxiliary('DNA-pairing'); contacts(pairing, 6);
      label(isTemplate ? 'DNA 恢复双链' : '直接配对的是模板链', companion, vector(0, isTemplate ? .39 : -.36, .08));
      const rna = auxiliary('RNA-comparison');
      shortStrand('AUGGCU', 'rna', { parent: rna, up: false }); rna.position.y = 1.1;
      label(isTemplate ? '按碱基互补形成 RNA' : '与编码链对应 · T 换成 U', rna, vector(0, .39, .08));
      const direction = auxiliary('reading-direction');
      arrow(direction, vector(-.9, isTemplate ? -1.90 : -1.76, .06), vector(.9, isTemplate ? -1.90 : -1.76, .06));
      label(isTemplate ? 'RNA 离开 · 原 DNA 保留' : '编码链用于序列对照', direction, vector(0, isTemplate ? -2.13 : -1.98, .08));
      applyStep = () => {
        main.group.position.y = !isTemplate && step === 2 ? -1.15 : 0;
        companion.visible = step === 2; pairing.visible = step > 0;
        rna.visible = step > 0; rna.position.y = isTemplate && step === 2 ? -1.2 : 1.1;
        rna.position.z = isTemplate && step === 2 ? .18 : 0;
        // A same-direction coding/RNA comparison is not a physical base pair.
        pairing.visible = isTemplate ? step > 0 : step === 2;
        direction.visible = step === 2;
      };
      modelInfo = { authoring: '六核苷酸教学片段与碱基环状几何', atomicSurface: false, mainSequence: isTemplate ? '3′-TACCGA-5′' : '5′-ATGGCT-3′' };
    } else if (type === 'rna') {
      shortStrand('AUGGCUUUU', 'rna');
      const triplets = auxiliary('RNA-codon-guides');
      for (let i = 0; i < 3; i++) {
        const x = (i - 1) * 1.05;
        connector(triplets, vector(x - .43, -.27, .04), vector(x + .43, -.27, .04), .012);
        for (const edge of [-.43, .43]) connector(triplets, vector(x + edge, -.27, .04), vector(x + edge, -.13, .04), .012);
        label(['AUG · Met', 'GCU · Ala', 'UUU · Phe'][i], triplets, vector(x, -.49, .05));
      }
      const counterpart = auxiliary('RNA-template-comparison');
      shortStrand('TACCGAAAA', 'template', { parent: counterpart, up: false, ends: ['3′', '5′'] });
      counterpart.position.y = 1.1;
      const pairs = auxiliary('RNA-template-pairing'); contacts(pairs, 9);
      label('模板链 · 转录时局部配对', counterpart, vector(0, .39, .08));
      applyStep = () => { triplets.visible = step === 2; counterpart.visible = step === 1; pairs.visible = step === 1; };
      modelInfo = { authoring: '九核苷酸教学片段', atomicSurface: false, mainSequence: '5′-AUGGCUUUU-3′', codons: 3 };
    } else if (type === 'trna') {
      const body = trnaBody();
      label('折叠的 RNA', body, vector(-.56, .92, .14));
      const ends = group(root, 'tRNA-functional-ends');
      label('反密码子 · 3′-UAC-5′', ends, vector(-.75, .05, .13));
      label('氨基酸连接端', ends, vector(.45, 1.92, .03));
      const cargo = group(root, 'tRNA-amino-acid');
      amino(cargo, vector(.44, 1.66, 0)); label('Met', cargo, vector(.75, 1.71, .10), { maxStep: 1 });
      label('送来 Met', cargo, vector(.80, 1.71, .10), { minStep: 2 });
      const message = auxiliary('tRNA-codon');
      shortStrand('AUG', 'rna', { parent: message }); message.position.set(0, -.66, .10);
      label('mRNA 密码子 · AUG', message, vector(0, -.36, .08));
      const pairs = auxiliary('anticodon-pairing');
      contacts(pairs, 3, .35, -.125, -.105); pairs.position.z = .10;
      applyStep = () => { message.visible = step > 0; pairs.visible = step > 0; };
      modelInfo = { authoring: '原有 L 形折叠 RNA 教学示意', atomicSurface: false, anticodon: '3′-UAC-5′', cargo: 'Met' };
    } else if (type === 'ribosome') {
      const large = group(root, 'large-subunit'), small = group(root, 'small-subunit');
      large.userData.motionKind = small.userData.motionKind = 'ribosome';
      windowView = createPolymeraseView({ center: vector(0, .42, -.14), radii: new THREE.Vector2(1.42, 1.35), depthOffset: -.20 });
      viewObject = root;
      buildRibosomeExhibit(large, small, { ...kit, workWindow: windowView });
      for (const subunit of [large, small]) subunit.traverse(object => { if (object.isMesh && object.name.includes('shell')) proteinMaterials.add(object.material); });
      label('大亚基', large, vector(-1.12, 1.52, .05)); label('小亚基', small, vector(-1.14, -.95, .08));
      const message = auxiliary('ribosome-mRNA');
      shortStrand('AUGGCUUUU', 'rna', { parent: message, spacing: .35 });
      message.scale.setScalar(.88); message.position.set(.924, -.38, .35);
      const guides = auxiliary('ribosome-functional-regions');
      label('读取 mRNA', guides, vector(.94, -.80, .55));
      const carriers = auxiliary('ribosome-tRNAs');
      const pTrna = trnaBody(carriers, 'UAC'), aTrna = trnaBody(carriers, 'CGA');
      pTrna.scale.setScalar(.90); aTrna.scale.setScalar(.90);
      const met = amino(carriers, vector(.396, 1.657, .35));
      const ala = amino(carriers, vector(1.320, 1.657, .35), 1);
      const bond = auxiliary('ribosome-peptide-link', carriers);
      // A single diagrammatic connector between two residue symbols; no
      // atom alignment, chemical reaction timing or scale is asserted.
      const link = tube(bond, palette.joint, .024, 12);
      const peptideText = label('肽键连接 · 示意', bond, vector(-.05, 1.89, .46));
      label('Met', met, vector(0, 1.48, .15)); label('Ala', ala, vector(0, 1.48, .15));
      label('空 tRNA · 已转移', pTrna, vector(-.24, 1.60, .10), { minStep: 1, maxStep: 1 });
      const departures = auxiliary('ribosome-relative-movement');
      label('空 tRNA 离开', departures, vector(-1.26, 1.54, .50));
      label('载链 tRNA 移到前一站', departures, vector(.15, 2.15, .45));
      const incoming = auxiliary('ribosome-incoming-tRNA');
      const newTrna = trnaBody(incoming, 'AAA'); newTrna.scale.setScalar(.90); newTrna.position.set(1.50, .45, .35);
      amino(incoming, vector(1.896, 1.917, .35), 2);
      label('新 tRNA · Phe', incoming, vector(1.65, 2.18, .42));
      applyStep = () => {
        message.visible = step > 0; guides.visible = step === 1; carriers.visible = step > 0;
        bond.visible = step > 0;
        const moved = step === 2;
        message.position.x = moved ? 0 : .924;
        pTrna.position.set(moved ? -1.30 : 0, moved ? .52 : .19, .26);
        aTrna.position.set(moved ? 0 : .924, .19, .26);
        // After peptidyl transfer, both residue symbols belong to the tRNA
        // bearing Ala. The old UAC tRNA is empty, never a bridge carrying the
        // same covalent chain at both amino-acid attachment ends.
        met.position.set(moved ? .016 : .940, 1.777, .35);
        ala.position.set(moved ? .396 : 1.320, 1.657, .35);
        link.set([met.position.clone(), met.position.clone().lerp(ala.position, .5).add(vector(0, .028, .02)), ala.position.clone()]);
        const note = labels.find(entry => entry.element === peptideText);
        note.local.set(moved ? -.38 : -.05, moved ? 1.78 : 1.89, .46);
        departures.visible = moved; incoming.visible = moved;
      };
      modelInfo = { authoring: '原有两亚基隐式曲面教学模型', atomicSurface: false, subunits: 2, atomicAlignment: false, localCodons: 'AUG / GCU / UUU', schematicMotion: true };
    } else if (type === 'peptide') {
      const points = RESIDUES.map((_, i) => vector((i - 2) * .57, .05 * Math.sin(i * 1.6), .035 * Math.cos(i)));
      points.forEach((point, index) => {
        const bead = amino(root, point, index, .20); label(RESIDUES[index], bead, vector(0, 1.5, .06));
        if (index) connector(root, points[index - 1], point, .026);
      });
      label('N 端', root, points[0].clone().add(vector(-.38, -.25, .04)));
      label('C 端', root, points.at(-1).clone().add(vector(.38, -.25, .04)));
      const bonds = auxiliary('peptide-bond-guide');
      const middle = points[1].clone().lerp(points[2], .5);
      outline(bonds, middle.clone().add(vector(0, 0, .11)), .15);
      label('肽键连接 · 示意', bonds, middle.clone().add(vector(0, -.37, .11)));
      const direction = auxiliary('peptide-extension-direction');
      arrow(direction, vector(-1.13, -.58, .06), vector(1.13, -.58, .06));
      label('新氨基酸连接在 C 端', direction, vector(0, -.83, .06));
      applyStep = () => { bonds.visible = step === 1; direction.visible = step === 2; };
      modelInfo = { authoring: '五残基短肽链教学示意', residues: 5, foldedProtein: false, atomicSurface: false };
    } else if (type === 'pore') {
      exportExhibit = buildNuclearExportExhibit(root, kit);
      exportExhibit.pore.userData.motionKind = 'pore';
      exportExhibit.pore.traverse(object => { if (object.isMesh) proteinMaterials.add(object.material); });
      root.rotation.y = -Math.PI / 2;
      // Keep the intact local lumen, but shorten the owned membrane patch so
      // the pore, rather than a whole nucleus, remains the subject of the view.
      for (const [index, membrane] of exportExhibit.membranes.entries()) {
        const p = membrane.geometry.attributes.position;
        const compress = value => Math.abs(value) < .94 ? value : Math.sign(value) * (.94 + .55 * Math.tanh((Math.abs(value) - .94) / .55));
        for (let i = 0; i < p.count; i++) {
          const y = compress(p.getY(i)), z = compress(p.getZ(i) - .13);
          const x=membrane.userData.authoredMembraneVolume?p.getX(i):(index === 0 ? -1 : 1) * .085 + .023 * y * y + .012 * z * z;
          p.setXYZ(i, x, y, z + .13);
        }
        p.needsUpdate = true; membrane.geometry.computeVertexNormals(); membrane.geometry.computeBoundingBox(); membrane.geometry.computeBoundingSphere();
      }
      windowView = exportExhibit.window; viewObject = exportExhibit.pore;
      const membraneLabels = auxiliary('pore-membrane-annotations');
      label('双层核膜 · 局部剖示', membraneLabels, vector(0, 1.10, .60));
      label('核孔通道', exportExhibit.pore, vector(.04, .30, .95));
      const cargo = auxiliary('pore-RNA-cargo');
      shortStrand('AUGGCU', 'rna', { parent: cargo, showLetters: false, showEnds: false });
      cargo.scale.setScalar(.50);
      cargo.position.set(.16, -.12, .13);
      const direction = auxiliary('pore-export-direction');
      arrow(direction, vector(-.78, -.15, .13), vector(.90, -.15, .13));
      label('核内 → 细胞质', direction, vector(.05, -.58, .28),{offset:[-58,0]});
      label('RNA', cargo, vector(.90, .65, .05));
      applyStep = () => { exportExhibit.membranes.forEach(m => { m.visible = step > 0; }); membraneLabels.visible = step > 0; cargo.visible = step > 0; cargo.position.x = step === 2 ? .70 : .16; direction.visible = step > 0; exportExhibit.update(0, false); };
      homeDirection.set(.65, .20, 1).normalize();
      modelInfo = { authoring: '原有连续核孔领圈与双层核膜局部剖示', atomicSurface: false, transportMechanism: false };
    }
    if (disposed) throw new DOMException('对象展台已销毁', 'AbortError');
    livingMotion = createPageMotion(); livingMotion.setEnabled(motionEnabled && !reducedMotion);
    windowView?.setEnabled(perspective, { animate: false });
    const desiredStep = step;
    step = 2; applyStep();
    livingMotion.update(motionTime, { working: .72 });
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root), sphere = box.getBoundingSphere(new THREE.Sphere());
    step = desiredStep; applyStep();
    livingMotion.update(motionTime, { working: step === 0 ? 0 : step === 1 ? 1 : .72 });
    homeTarget.copy(sphere.center);
    homeDistance = Math.max(2.6, sphere.radius / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2)) * (type === 'pore' ? .86 : 1.18));
    loaded = true; loadMs = performance.now() - began;
    resize(); resetView(); invalidate();
  }

  function resize() {
    if (disposed) return;
    const bounds = container.getBoundingClientRect();
    width = Math.max(1, Math.round(container.clientWidth || bounds.width || 1));
    height = Math.max(1, Math.round(container.clientHeight || bounds.height || 1));
    renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix();
    invalidate();
  }
  function resetView() {
    if (disposed) return;
    // Fit both narrow/mobile and desktop canvases without moving on step changes.
    const distance = homeDistance * Math.max(1, 1 / camera.aspect);
    const damping = controls.enableDamping;
    controls.enableDamping = false; controls.update();
    controls.target.copy(homeTarget); camera.position.copy(homeTarget).addScaledVector(homeDirection, distance);
    controls.minDistance = homeDistance * .36; controls.maxDistance = distance * 2.6;
    controls.update(); controls.enableDamping = damping; controls.saveState(); invalidate();
  }
  function render(stamp=performance.now()) {
    if (disposed || !loaded) return false;
    const advancing=Boolean(livingMotion && motionEnabled && motionPlaying && !reducedMotion && !motionSuspended && !dragging);
    if(advancing && motionLastStamp!==null)motionTime=(motionTime+Math.min(.20,Math.max(0,(stamp-motionLastStamp)/1000)))%motionDuration;
    motionLastStamp=advancing?stamp:null;
    if(livingMotion){
      livingMotion.update(motionTime,{working:step===0?0:step===1?1:.72});
      if(motionEnabled && !reducedMotion)windowView?.setActivity((motionTime%6)/6,step>0);
      else windowView?.setActivity(step>0 ? .5 : 0,step>0);
    }
    const changed = controls.update();
    root.updateMatrixWorld(true);
    if (exportExhibit) exportExhibit.updateView(camera);
    else windowView?.update(camera, viewObject.matrixWorld);
    if (type === 'polymerase' || type === 'ribosome') {
      const showGhost = perspective || windowView.active();
      root.traverse(object => { if (object.name.endsWith('_TEACHING_OVERLAY') || object.name.endsWith('-teaching-overlay')) object.visible = showGhost; });
    }
    renderer.render(scene, camera); frames++;
    const projected = vector();
    for (const entry of labels) {
      if (step < entry.minStep || step > entry.maxStep || !visibleInHierarchy(entry.object)) { entry.element.hidden = true; continue; }
      if (entry.anchor) entry.anchor(projected); else projected.copy(entry.local);
      if (entry.object.userData.motionKind) projected.copy(livingMotion.sampleLabelPoint(entry.object.userData.motionKind, projected));
      entry.object.localToWorld(projected); projected.project(camera);
      const inFrame = projected.z > -1 && projected.z < 1 && Math.abs(projected.x) < 1.05 && Math.abs(projected.y) < 1.05;
      entry.element.hidden = !inFrame;
      if (!inFrame) continue;
      entry.element.style.left = `${((projected.x * .5 + .5) * width + entry.offset[0]).toFixed(1)}px`;
      entry.element.style.top = `${((-projected.y * .5 + .5) * height + entry.offset[1]).toFixed(1)}px`;
    }
    needsFrame = Boolean((changed && !reducedMotion) || windowView?.active() || advancing);
    return needsFrame;
  }
  function setStep(index) {
    if (disposed) return;
    if (!Number.isInteger(index) || index < 0 || index > 2) throw new RangeError('对象教学步骤应为 0、1 或 2');
    step = index; if (loaded) applyStep(); invalidate();
  }
  function setPerspective(value) {
    if (disposed) return;
    const next = Boolean(value) && PERSPECTIVE_TYPES.has(type);
    if (perspective === next) return;
    perspective = next; windowView?.setEnabled(next, { animate: !reducedMotion && loaded }); invalidate();
  }
  function setReducedMotion(value) {
    if (disposed) return;
    reducedMotion = Boolean(value); controls.enableDamping = !reducedMotion;
    motionLastStamp=null;
    livingMotion?.setEnabled(motionEnabled && !reducedMotion);
    motionPlaying=!reducedMotion;
    if (reducedMotion) { windowView?.finishTransition(); controls.update(); }
    invalidate();
  }
  function setMotionPlaying(value){
    if(disposed || !livingMotion)return;
    motionPlaying=Boolean(value) && !reducedMotion;
    motionLastStamp=null;invalidate();
  }
  function setMotionEnabled(value){
    if(disposed || !livingMotion)return;
    motionEnabled=Boolean(value);motionLastStamp=null;
    livingMotion.setEnabled(motionEnabled && !reducedMotion);invalidate();
  }
  function seekMotion(seconds){
    if(disposed || !livingMotion || !Number.isFinite(seconds))return;
    motionPlaying=false;motionLastStamp=null;
    motionTime=THREE.MathUtils.clamp(seconds,0,motionDuration);
    livingMotion.update(motionTime,{working:step===0?0:step===1?1:.72});invalidate();
  }
  function setMotionSuspended(value){motionSuspended=Boolean(value);motionLastStamp=null;if(!motionSuspended)invalidate();}
  function getMetrics() {
    return {
      type, step, loaded, disposed, error: errorMessage, loadMs,
      perspective, supportsPerspective: PERSPECTIVE_TYPES.has(type), reducedMotion, dragging, needsFrame,
      frames, width, height, renderCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles,
      geometryResources: ownedGeometries.size,
      auxiliaries: auxiliaries.filter(visibleInHierarchy).map(object => object.name),
      visibleLabels: labels.filter(entry => !entry.element.hidden).map(entry => entry.element.textContent),
      camera: { position: camera.position.toArray(), target: controls.target.toArray(), distance: camera.position.distanceTo(controls.target) },
      model: { ...modelInfo }, window: windowView?.inspect() || null,
      motion:{
        available:Boolean(livingMotion && loaded),enabled:motionEnabled,
        playing:Boolean(livingMotion && motionEnabled && motionPlaying && !reducedMotion && !motionSuspended),
        advancing:Boolean(livingMotion && motionEnabled && motionPlaying && !reducedMotion && !motionSuspended && !dragging),
        time:motionTime,duration:motionDuration,reducedMotion,suspended:motionSuspended,
        field:livingMotion?.inspect() || null,
        nucleicAnchors:labels.filter(entry=>entry.element.dataset.objectLessonLabel==='letter').map(entry=>entry.object.localToWorld(vector(0,0,.26)).toArray()),
        backboneBuffers:strandRecords.map(record=>record.backbone.object.geometry.uuid),
      },
    };
  }
  function dispose() {
    if (disposed) return;
    disposed = true; needsFrame = false;
    motionPlaying=false;motionLastStamp=null;livingMotion?.dispose();livingMotion=null;
    resizeObserver?.disconnect(); window.removeEventListener('resize', resize);
    controls.removeEventListener('change', invalidate); controls.removeEventListener('start', orbitStart); controls.removeEventListener('end', orbitEnd); controls.dispose();
    polymerase?.dispose(); polymerase = null;
    ownedGeometries.forEach(resource => resource.dispose()); ownedGeometries.clear();
    ownedMaterials.forEach(resource => resource.dispose()); ownedMaterials.clear();
    scene.environment = null; environment?.dispose(); environment = null;
    scene.clear(); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); overlay.remove();
    if (container.style.position === 'relative') container.style.position = previousPosition;
  }
  if (typeof ResizeObserver !== 'undefined') { resizeObserver = new ResizeObserver(resize); resizeObserver.observe(container); }
  else window.addEventListener('resize', resize);
  resize();
  const ready = Promise.resolve().then(build).then(() => getMetrics()).catch(error => {
    errorMessage = error.message; dispose(); throw error;
  });
  return { ready, render, setStep, resetView, setPerspective, setReducedMotion, setMotionPlaying, setMotionEnabled, seekMotion, setMotionSuspended, getMetrics, dispose };
}
