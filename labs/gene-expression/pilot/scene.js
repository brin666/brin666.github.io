import * as THREE from '../vendor/three.module.js';
import { OrbitControls } from '../vendor/OrbitControls.js';
import { CODING_DNA, TEMPLATE_DNA, RNA } from '../biology.mjs';
import { createBaseGeometry, createSugarGeometry, createOrganicGeometry, createSurfaceMaterial, disposeMolecularResources } from '../molecular-models.js';
import { createRefinedBaseGeometry } from './nucleic-base-geometry.js';
import { createContinuousBackbone } from '../continuous-backbone.js';

// All coordinates are reconstructed from the supplied timeline pose. The scene
// deliberately owns no clock, animation loop, or stochastic simulation.
const PALETTE = { A: '#d6c77a', T: '#90b7cd', G: '#9bbf9a', C: '#d79e89', U: '#c4a6d5' };
const STRAND = { coding: '#9cb6b8', template: '#d0b78e', rna: '#d5a486' };
const STEP = 0.63;
const HELIX_RADIUS = 0.94;
const TAU = Math.PI * 2;
const clamp = THREE.MathUtils.clamp;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const xAt = index => (index - (CODING_DNA.length - 1) * 0.5) * STEP;
const Y_AXIS = new THREE.Vector3(0, 1, 0);
const X_AXIS = new THREE.Vector3(1, 0, 0);
// Classroom spacing is expanded; this is not an atomistic B-DNA simulation.
const GROOVE_SHIFT = 0.37;
const CLOSED_SPACING = 0.60;

// A low-frequency lobed, open protein shell. The opening is actual geometry,
// so the active site stays inspectable when orbiting the camera.
function polymeraseGeometry() {
  const around = 104, across = 24;
  const positions = [], uvs = [], indices = [];
  for (let i = 0; i <= around; i++) {
    const a = i / around * TAU;
    const thickness = 0.40 + 0.11 * Math.sin(a * 3 + 0.8) + 0.05 * Math.cos(a * 5);
    const cx = 1.31 * Math.cos(a) + 0.17 * Math.sin(a * 2);
    const cy = 1.39 * Math.sin(a) + 0.10 * Math.cos(a * 3);
    for (let j = 0; j <= across; j++) {
      const b = j / across * TAU;
      const r = thickness * (1 + 0.085 * Math.sin(a * 4 + b * 2) + 0.025 * Math.sin(a * 11 - b * 5));
      positions.push(cx + Math.cos(a) * r * Math.cos(b), cy + Math.sin(a) * r * Math.cos(b), -0.63 + 0.14 * Math.cos(a) + r * 1.22 * Math.sin(b));
      uvs.push(i / around, j / across);
    }
  }
  for (let i = 0; i < around; i++) for (let j = 0; j < across; j++) {
    const a = i * (across + 1) + j, b = a + across + 1;
    indices.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function makeLabel(layer, text, kind = '', color = '') {
  const element = document.createElement('div');
  element.className = `pilot-label ${kind}`;
  element.textContent = text;
  element.style.cssText = `position:absolute;left:0;top:0;transform:translate(-50%,-50%);pointer-events:none;white-space:nowrap;font:600 11px/1.2 ui-monospace,SFMono-Regular,Consolas,monospace;color:${color || '#d1ded3'};padding:3px 5px;border-radius:5px;background:rgba(16,30,32,.86);border:1px solid rgba(158,185,166,.18);will-change:transform;`;
  if (kind.includes('terminal')) element.style.cssText += 'font-size:12px;padding:3px 6px;';
  if (kind.includes('caption')) element.style.cssText += 'font:500 10px/1.3 system-ui,sans-serif;letter-spacing:.045em;padding:4px 7px;color:#c2d3c5;';
  layer.appendChild(element);
  return { element, point: new THREE.Vector3(), visible: true };
}

export function createPilotScene(container, { onSelect = () => {}, onInvalidate = () => {}, appearanceFactory = null, blenderAssets = null, exhibitAssets = null } = {}) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#101a1d');
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.07;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;touch-action:none;';
  renderer.domElement.setAttribute('aria-label', '可拖动旋转的 DNA 转录三维模型');
  container.appendChild(renderer.domElement);
  const computedPosition = getComputedStyle(container).position;
  if (computedPosition === 'static') container.style.position = 'relative';

  const labelLayer = document.createElement('div');
  labelLayer.className = 'pilot-scene-labels';
  labelLayer.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:2;';
  container.appendChild(labelLayer);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 160);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.11;
  controls.enablePan = true;
  controls.minDistance = 4.5;
  controls.maxDistance = 54;
  controls.maxPolarAngle = Math.PI * 0.86;
  controls.minPolarAngle = 0.15;
  let userCamera = false;
  let applyingCamera = false;
  const markUserCamera = () => { if (!applyingCamera) userCamera = true; };
  const invalidate = () => onInvalidate();
  controls.addEventListener('start', markUserCamera);
  controls.addEventListener('change', invalidate);

  const hemisphere = new THREE.HemisphereLight('#dcebe5', '#172831', 1.2);
  scene.add(hemisphere);
  const key = new THREE.DirectionalLight('#fff3d9', 2.5);
  key.position.set(-4, 8, 9);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -15;
  key.shadow.camera.right = 15;
  key.shadow.camera.top = 10;
  key.shadow.camera.bottom = -9;
  key.shadow.camera.near = 0.1;
  key.shadow.camera.far = 35;
  key.shadow.bias = -0.0007;
  key.shadow.normalBias = 0.028;
  key.shadow.radius = 4;
  scene.add(key);
  const fill = new THREE.DirectionalLight('#a8d6da', 1.65);
  fill.position.set(5, 2, -6);
  scene.add(fill);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.ShadowMaterial({ color: '#050c0d', opacity: 0.16 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -3.72;
  floor.receiveShadow = true;
  scene.add(floor);

  const root = new THREE.Group();
  scene.add(root);
  const allGeometries = new Set();
  const allMaterials = new Set();
  const geometry = value => { allGeometries.add(value); return value; };
  const material = (color, extras = {}, kind = 'protein', role = kind) => {
    const value = createSurfaceMaterial(color, kind);
    Object.assign(value, extras);
    value.userData.studyKind = kind;
    value.userData.studyRole = role;
    allMaterials.add(value);
    return value;
  };
  allGeometries.add(floor.geometry);
  allMaterials.add(floor.material);
  const legacyBaseGeometries = Object.fromEntries(Object.keys(PALETTE).map(base => {
    const meshGeometry = createBaseGeometry(base);
    meshGeometry.rotateY(Math.PI / 2);
    meshGeometry.scale((base === 'A' || base === 'G' ? 0.72 : 0.61) / 0.52, 1.28, 1.28);
    return [base, geometry(meshGeometry)];
  }));
  let baseGeometries = legacyBaseGeometries;
  let refinedBaseGeometries = null;
  let blenderBaseGeometries = null;
  let exhibitBaseGeometries = null;
  const authoredGeometry = {};
  const exhibitGeometry = {};
  // The comparison owns these imported buffers; the original pilot loads none.
  if (blenderAssets) for (const [name, mesh] of Object.entries(blenderAssets.geometries)) authoredGeometry[name] = geometry(mesh);
  if (exhibitAssets) for (const [name, mesh] of Object.entries(exhibitAssets.geometries)) exhibitGeometry[name] = geometry(mesh);
  let structureMode = 'legacy';
  const sugarGeo = geometry(createSugarGeometry());
  const phosphateGeo = geometry(createOrganicGeometry('residue', 'low').scale(0.059, 0.059, 0.059));
  const rodGeo = geometry(new THREE.CylinderGeometry(1, 1, 1, 8, 1));
  const baseMaterials = Object.fromEntries(Object.entries(PALETTE).map(([base, color]) => [base, material(color, {}, 'base')]));
  const dnaBondsMaterial = material('#b6ae94', { transparent: true, opacity: 0.48, roughness: 1 });
  const activeBondMaterial = material('#a69764', { transparent: true, opacity: 0.88, roughness: 1 });
  const proteinMaterial = material('#95aaa0', {}, 'protein', 'enzyme');
  const proteinInsetMaterial = material('#6d8c82', {}, 'protein', 'enzyme-inset');
  const pickables = [];
  const labels = [];

  const temporaryMatrix = new THREE.Matrix4();
  const temporaryQuaternion = new THREE.Quaternion();
  const temporaryScale = new THREE.Vector3();
  const temporaryPosition = new THREE.Vector3();
  const temporaryDirection = new THREE.Vector3();
  const temporaryFrame = new THREE.Matrix4();
  const tangent = new THREE.Vector3();
  const inward = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const sample1 = new THREE.Vector3();
  const sample2 = new THREE.Vector3();
  const cameraTarget = new THREE.Vector3();
  const cameraPosition = new THREE.Vector3();
  const projected = new THREE.Vector3();
  const scratch = new THREE.Vector3();
  const pairingA = new THREE.Vector3();
  const pairingB = new THREE.Vector3();
  const hingeQuaternion = new THREE.Quaternion();
  const approachRotation = new THREE.Quaternion();
  const approachAxis = new THREE.Vector3(.38, .72, .54).normalize();
  let dnaPairingDebug = [], rnaPairingDebug = [];

  function instance(mesh, index, position, quaternion, scale) {
    temporaryMatrix.compose(position, quaternion, scale);
    mesh.setMatrixAt(index, temporaryMatrix);
  }
  function link(mesh, index, a, b, radius = 0.038, weight = 1) {
    temporaryDirection.subVectors(b, a);
    const length = temporaryDirection.length();
    temporaryPosition.addVectors(a, b).multiplyScalar(0.5);
    temporaryQuaternion.setFromUnitVectors(Y_AXIS, temporaryDirection.multiplyScalar(1 / (length || 1)));
    temporaryScale.set(radius * weight, Math.max(length, 0.00001), radius * weight);
    instance(mesh, index, temporaryPosition, temporaryQuaternion, temporaryScale);
  }
  function frameQuaternion(direction, axis, quaternion) {
    normal.crossVectors(direction, axis).normalize();
    temporaryFrame.makeBasis(direction, axis, normal);
    quaternion.setFromRotationMatrix(temporaryFrame);
  }
  function instanced(geo, mat, count) {
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    mesh.castShadow = true;
    root.add(mesh);
    return mesh;
  }

  const strandData = {};
  for (const [type, sequence] of [['coding', CODING_DNA], ['template', TEMPLATE_DNA]]) {
    const strandMaterial = material(STRAND[type], {}, 'backbone', type);
    const sugar = instanced(sugarGeo, strandMaterial, sequence.length);
    const phosphate = instanced(phosphateGeo, material(STRAND[type], { roughness: 0.56 }, 'protein', type), sequence.length - 1);
    const spine = instanced(rodGeo, strandMaterial, (sequence.length - 1) * 4);
    const bases = [], positions = [], baseTips = [];
    for (let index = 0; index < sequence.length; index++) {
      const base = sequence[index];
      const mesh = new THREE.Mesh(baseGeometries[base], baseMaterials[base]);
      mesh.castShadow = true;
      mesh.userData.selection = { type, index, base };
      root.add(mesh);
      pickables.push(mesh);
      bases.push(mesh);
      positions.push(new THREE.Vector3());
      baseTips.push(new THREE.Vector3());
    }
    strandData[type] = { sequence, sugar, phosphate, spine, bases, positions, baseTips };
  }
  const flowingSpines = {};
  if (exhibitAssets) for (const type of ['coding', 'template', 'rna']) {
    const tube = createContinuousBackbone(type === 'rna' ? 100 : 174, 8, type === 'rna' ? .037 : .034);
    geometry(tube.geometry);
    const mesh = new THREE.Mesh(tube.geometry, type === 'rna' ? null : strandData[type].spine.material);
    mesh.visible = false; mesh.frustumCulled = false;
    root.add(mesh); flowingSpines[type] = { ...tube, mesh };
  }
  const pairBonds = instanced(rodGeo, dnaBondsMaterial, CODING_DNA.length * 9);
  pairBonds.count = CODING_DNA.length * 3;
  pairBonds.castShadow = false;
  const activeBonds = instanced(rodGeo, activeBondMaterial, 27);
  activeBonds.count = 9;
  activeBonds.castShadow = false;

  const enzyme = new THREE.Group();
  root.add(enzyme);
  const shell = new THREE.Mesh(geometry(polymeraseGeometry()), proteinMaterial);
  const originalShellGeometry = shell.geometry;
  const enzymeLobes = [];
  shell.castShadow = true;
  shell.receiveShadow = true;
  shell.userData.selection = { type: 'polymerase', index: null, base: null };
  enzyme.add(shell);
  pickables.push(shell);
  const lobeGeo = geometry(createOrganicGeometry('polymerase'));
  const lobeSpecs = [
    [-0.6, 1.45, -0.9, 1.12, 0.38, 0.56],
    [0.76, 1.14, -0.85, 0.74, 0.57, 0.53],
    [-1.23, -0.6, -0.8, 0.46, 0.8, 0.57],
    [0.35, -1.43, -0.84, 1.0, 0.35, 0.52],
  ];
  for (const [x, y, z, sx, sy, sz] of lobeSpecs) {
    const mesh = new THREE.Mesh(lobeGeo, proteinMaterial);
    mesh.position.set(x, y, z);
    mesh.scale.set(sx, sy, sz);
    mesh.castShadow = true;
    mesh.userData.selection = shell.userData.selection;
    enzyme.add(mesh);
    enzymeLobes.push(mesh);
    pickables.push(mesh);
  }
  const inlet = new THREE.Mesh(geometry(new THREE.TorusGeometry(0.26, 0.035, 10, 36)), proteinInsetMaterial);
  inlet.position.set(0.65, -1.22, -0.28);
  inlet.scale.set(1.4, 0.66, 1);
  enzyme.add(inlet);
  const exhibitDetails = [];
  if (exhibitAssets) for (const name of ['RNAP_INNER', 'RNAP_RIDGE']) {
    if (!exhibitGeometry[name]) continue;
    const surface = name === 'RNAP_INNER' ? material('#587b75', {}, 'protein', 'enzyme-inner') : proteinMaterial;
    surface.vertexColors = !!exhibitGeometry[name].getAttribute('color');
    const mesh = new THREE.Mesh(exhibitGeometry[name], surface);
    mesh.visible = false; mesh.castShadow = mesh.receiveShadow = true;
    mesh.userData.selection = shell.userData.selection;
    enzyme.add(mesh); pickables.push(mesh); exhibitDetails.push(mesh);
  }

  const rnaMaterial = material(STRAND.rna, {}, 'backbone', 'rna');
  if (flowingSpines.rna) flowingSpines.rna.mesh.material = rnaMaterial;
  const rnaSugar = instanced(sugarGeo, rnaMaterial, RNA.length);
  const rnaPhosphate = instanced(phosphateGeo, rnaMaterial, RNA.length);
  const rnaSpine = instanced(rodGeo, rnaMaterial, RNA.length * 4);
  const rnaBases = [], rnaPositions = [], rnaTips = [];
  for (let index = 0; index < RNA.length; index++) {
    const base = RNA[index];
    const mesh = new THREE.Mesh(baseGeometries[base], baseMaterials[base]);
    mesh.castShadow = true;
    mesh.visible = false;
    mesh.userData.selection = { type: 'rna', index, base };
    root.add(mesh);
    pickables.push(mesh);
    rnaBases.push(mesh);
    rnaPositions.push(new THREE.Vector3());
    rnaTips.push(new THREE.Vector3());
  }
  const incomingGroup = new THREE.Group();
  root.add(incomingGroup);
  const incomingMaterials = Object.fromEntries(Object.entries(PALETTE).map(([base, color]) => [base, material(color, { transparent: true }, 'base')]));
  const incomingSugarMaterial = material(STRAND.rna, { transparent: true }, 'backbone', 'rna');
  const incomingSugar = new THREE.Mesh(sugarGeo, incomingSugarMaterial);
  const incomingBase = new THREE.Mesh(baseGeometries.A, incomingMaterials.A);
  incomingSugar.castShadow = incomingBase.castShadow = true;
  incomingGroup.add(incomingSugar, incomingBase);
  pickables.push(incomingBase, incomingSugar);
  const triphosphate = new THREE.Group();
  incomingGroup.add(triphosphate);
  const triphosphateMaterial = material('#bd9c76', { transparent: true, opacity: 1, roughness: 0.73 });
  const tailSphereGeo = phosphateGeo;
  for (let k = 0; k < 3; k++) {
    const atom = new THREE.Mesh(tailSphereGeo, triphosphateMaterial);
    atom.position.set(0.08 + k * 0.18, 0.15 + k * 0.025, 0);
    triphosphate.add(atom);
    if (k > 0) {
      const rod = new THREE.Mesh(rodGeo, triphosphateMaterial);
      rod.position.set(-0.01 + k * 0.18, 0.14 + k * 0.025, 0);
      rod.scale.set(0.021, 0.18, 0.021);
      rod.rotation.z = -Math.PI / 2 + 0.14;
      triphosphate.add(rod);
    }
  }
  const incomingJoin = instanced(rodGeo, rnaMaterial, 4);
  const incomingPhosphate = new THREE.Mesh(phosphateGeo, rnaMaterial);
  incomingPhosphate.castShadow = true;
  incomingPhosphate.visible = false;
  root.add(incomingPhosphate);

  // Sample a fixed cubic once, then address it by arclength. An existing
  // nucleotide keeps its sequence index as the 3′ end advances.
  const rnaCurve = new THREE.CubicBezierCurve3(
    new THREE.Vector3(0, 0, 0), new THREE.Vector3(-3.0, 0.02, 0.11),
    new THREE.Vector3(-3.7, -3.7, 0.8), new THREE.Vector3(-8.3, -2.3, 1.12),
  );
  const curveResolution = 240;
  const curvePoints = Array.from({ length: curveResolution + 1 }, (_, i) => rnaCurve.getPoint(i / curveResolution));
  const curveLengths = new Float32Array(curveResolution + 1);
  for (let i = 1; i <= curveResolution; i++) curveLengths[i] = curveLengths[i - 1] + curvePoints[i].distanceTo(curvePoints[i - 1]);
  const rnaAnchor = new THREE.Vector3();
  const RNA_STEP = 0.70;
  function curveAt(distance, out) {
    const d = clamp(distance, 0, curveLengths[curveResolution]);
    let lo = 0, hi = curveResolution;
    while (lo + 1 < hi) { const mid = (lo + hi) >> 1; if (curveLengths[mid] < d) lo = mid; else hi = mid; }
    const fraction = (d - curveLengths[lo]) / (curveLengths[hi] - curveLengths[lo] || 1);
    out.lerpVectors(curvePoints[lo], curvePoints[hi], fraction).add(rnaAnchor);
    if (structureMode === 'exhibit' && !currentOptions.reducedMotion) {
      // The flexible, already-synthesized tail has a very small lagging bend.
      // Its envelope vanishes at the active site, preserving the handoff.
      const envelope = smooth(.8, 4.5, d);
      const time = currentPose?.time || 0;
      out.y += .055 * envelope * Math.sin(time * 1.45 - d * .82);
      out.z += .075 * envelope * Math.sin(time * 1.15 - d * .62);
    }
    return out;
  }

  const terminalLabels = {
    coding5: makeLabel(labelLayer, '5′', 'terminal', STRAND.coding),
    coding3: makeLabel(labelLayer, '3′', 'terminal', STRAND.coding),
    template3: makeLabel(labelLayer, '3′', 'terminal', STRAND.template),
    template5: makeLabel(labelLayer, '5′', 'terminal', STRAND.template),
    rna5: makeLabel(labelLayer, '5′', 'terminal', STRAND.rna),
    rna3: makeLabel(labelLayer, '3′', 'terminal', STRAND.rna),
  };
  labels.push(...Object.values(terminalLabels));
  const codingCaption = makeLabel(labelLayer, '编码链', 'caption', STRAND.coding);
  const templateCaption = makeLabel(labelLayer, '模板链 · 3′ → 5′', 'caption', STRAND.template);
  const rnaCaption = makeLabel(labelLayer, 'RNA · 5′ → 3′', 'caption', STRAND.rna);
  const enzymeCaption = makeLabel(labelLayer, 'RNA 聚合酶', 'caption');
  labels.push(codingCaption, templateCaption, rnaCaption, enzymeCaption);
  const dnaLetterLabels = { coding: [], template: [] };
  for (const type of ['coding', 'template']) for (let k = 0; k < 5; k++) {
    const label = makeLabel(labelLayer, '', 'base-letter');
    dnaLetterLabels[type].push(label);
    labels.push(label);
  }
  const rnaLetterLabels = Array.from({ length: 5 }, () => { const label = makeLabel(labelLayer, '', 'base-letter'); labels.push(label); return label; });
  const incomingLabel = makeLabel(labelLayer, '', 'base-letter');
  labels.push(incomingLabel);

  let width = 1, height = 1, currentPose = null, currentOptions = { detail: 'high', labels: true, reducedMotion: false };
  let currentDetail = 'high', disposed = false;
  let centerIndex = 6, opening = 0;
  const defaultPose = { time: 0, duration: 14, centerIndex: 6, targetIndex: 6, rnaCount: 6, growth: 6, opening: 0, cameraBlend: 0, finalBlend: 0, incoming: { visible: false, base: 'A', index: 6, progress: 0, bond: 0 } };

  const baseOffset = base => structureMode !== 'legacy' ? 0.105 + baseGeometries[base].boundingBox.max.x : 0.43;
  const baseReach = base => structureMode !== 'legacy' ? 0.105 + baseGeometries[base].boundingBox.max.x * 2 : 0.78;
  const hydrogenCount = base => base === 'G' || base === 'C' ? 3 : 2;
  function bubbleAt(index) {
    return opening * (1 - smooth(1.6, 4.6, Math.abs(index - centerIndex)));
  }
  function refinedX(index) {
    // Integral of the opening envelope: local unstacking, without compressed
    // or reversed residue order where the bubble meets the closed helix.
    const signed = index - centerIndex, distance = Math.abs(signed);
    const u = clamp((distance - 1.6) / 3, 0, 1);
    const integral = distance <= 1.6 ? distance : 1.6 + 3 * (u - u ** 3 + 0.5 * u ** 4);
    return xAt(centerIndex) + Math.sign(signed) * STEP * (CLOSED_SPACING * distance + (1 - CLOSED_SPACING) * opening * integral);
  }
  function baseSite(mesh, index, reverse, out) {
    const sites = mesh.geometry.userData.pairingSites;
    const site = sites[reverse ? sites.length - 1 - index : index];
    mesh.updateMatrixWorld(true);
    return out.fromArray(site.point).applyMatrix4(mesh.matrixWorld);
  }
  function dashedContact(mesh, slot, a, b, weight) {
    for (let dash = 0; dash < 3; dash++) {
      sample1.lerpVectors(a, b, 0.08 + dash * 0.30);
      sample2.lerpVectors(a, b, 0.27 + dash * 0.30);
      link(mesh, slot++, sample1, sample2, 0.010, weight);
    }
    return slot;
  }
  function dnaPoint(index, type, out) {
    const sign = type === 'coding' ? 1 : -1;
    const angle = index * TAU / 10.5 + 0.58 + (structureMode !== 'legacy' ? sign * GROOVE_SHIFT : 0);
    const distance = Math.abs(index - centerIndex);
    const bubble = opening * (1 - smooth(1.6, 4.6, distance));
    const helicalY = Math.cos(angle) * HELIX_RADIUS * sign;
    const helicalZ = Math.sin(angle) * HELIX_RADIUS * sign;
    out.set(structureMode !== 'legacy' ? refinedX(index) : xAt(index), THREE.MathUtils.lerp(helicalY, sign * (1.12 + 0.27 * (1 - smooth(0, 3.2, distance))), bubble), helicalZ * (1 - bubble) - 0.045 * bubble);
    return out;
  }
  function setDnaGeometry() {
    for (const type of ['coding', 'template']) {
      const data = strandData[type];
      for (let i = 0; i < data.sequence.length; i++) {
        const point = dnaPoint(i, type, data.positions[i]);
        dnaPoint(i + 0.03, type, sample1);
        dnaPoint(i - 0.03, type, sample2);
        tangent.subVectors(sample1, sample2).normalize();
        inward.set(0, -point.y, -point.z).normalize();
        inward.addScaledVector(tangent, -inward.dot(tangent)).normalize();
        frameQuaternion(inward, tangent, temporaryQuaternion);
        const base = data.sequence[i];
        data.bases[i].geometry = baseGeometries[base];
        if (structureMode !== 'legacy') {
          dnaPoint(i, type === 'coding' ? 'template' : 'coding', scratch);
          inward.subVectors(scratch, point).normalize();
          frameQuaternion(inward, X_AXIS, temporaryQuaternion);
          // Opened bases unstack into an inspectable teaching view; this
          // angle is explanatory staging, not a measured molecular motion.
          temporaryQuaternion.multiply(hingeQuaternion.setFromAxisAngle(X_AXIS, (type === 'coding' ? 1 : -1) * 0.65 * bubbleAt(i)));
        }
        temporaryScale.set(1, 1, 1);
        instance(data.sugar, i, point, temporaryQuaternion, temporaryScale);
        data.bases[i].position.copy(point).addScaledVector(inward, structureMode !== 'legacy' ? baseOffset(base) : 0.46);
        data.bases[i].quaternion.copy(temporaryQuaternion);
        data.baseTips[i].copy(point).addScaledVector(inward, structureMode !== 'legacy' ? baseReach(base) : 0.81);
      }
      let rodIndex = 0;
      for (let i = 0; i < data.sequence.length - 1; i++) {
        dnaPoint(i + 0.5, type, sample1);
        temporaryQuaternion.identity();
        temporaryScale.set(1, 1, 1);
        instance(data.phosphate, i, sample1, temporaryQuaternion, temporaryScale);
        for (let sub = 0; sub < 4; sub++) {
          dnaPoint(i + sub / 4, type, sample1);
          dnaPoint(i + (sub + 1) / 4, type, sample2);
          link(data.spine, rodIndex++, sample1, sample2, 0.038);
        }
      }
      data.sugar.instanceMatrix.needsUpdate = data.phosphate.instanceMatrix.needsUpdate = data.spine.instanceMatrix.needsUpdate = true;
      if (structureMode === 'exhibit') flowingSpines[type].update((index, out) => dnaPoint(index, type, out), 0, data.sequence.length - 1);
    }
    let pairSlot = 0;
    dnaPairingDebug = [];
    for (let i = 0; i < CODING_DNA.length; i++) {
      const a = strandData.coding.baseTips[i], b = strandData.template.baseTips[i];
      const closed = 1 - opening * (1 - smooth(1.4, 4.5, Math.abs(i - centerIndex)));
      if (structureMode !== 'legacy') {
        const number = hydrogenCount(CODING_DNA[i]);
        const weight = closed < 0.28 ? 0 : closed;
        for (let k = 0; k < number; k++) {
          baseSite(strandData.coding.bases[i], k, false, pairingA);
          baseSite(strandData.template.bases[i], k, true, pairingB);
          pairSlot = dashedContact(pairBonds, pairSlot, pairingA, pairingB, weight);
        }
        dnaPairingDebug.push({ index: i, bases: `${CODING_DNA[i]}–${TEMPLATE_DNA[i]}`, hydrogenBonds: number, visible: weight > 0, weight });
        continue;
      }
      for (let k = 0; k < 3; k++) {
        sample1.lerpVectors(a, b, 0.15 + k * 0.25);
        sample2.lerpVectors(a, b, 0.29 + k * 0.25);
        link(pairBonds, i * 3 + k, sample1, sample2, 0.014, closed < 0.28 ? 0 : closed);
      }
    }
    pairBonds.count = structureMode !== 'legacy' ? pairSlot : CODING_DNA.length * 3;
    pairBonds.instanceMatrix.needsUpdate = true;
  }

  function rnaFrame(distance) {
    curveAt(Math.max(0, distance - 0.025), sample1);
    curveAt(distance + 0.025, sample2);
    tangent.subVectors(sample1, sample2).normalize();
    inward.set(0, -1, -0.05);
    inward.addScaledVector(tangent, -inward.dot(tangent)).normalize();
    frameQuaternion(inward, tangent, temporaryQuaternion);
    if (structureMode !== 'legacy') temporaryQuaternion.multiply(hingeQuaternion.setFromAxisAngle(X_AXIS, 0.65));
  }
  function setRnaGeometry(pose) {
    const count = clamp(Math.floor(pose.rnaCount ?? 6), 1, RNA.length);
    const target = clamp(Math.floor(pose.targetIndex ?? 6), 0, RNA.length - 1);
    rnaAnchor.set(xAt(centerIndex), 0.38, 0.22);
    for (let i = 0; i < RNA.length; i++) {
      const shown = i < count;
      rnaBases[i].visible = shown;
      if (!shown) continue;
      rnaBases[i].geometry = baseGeometries[RNA[i]];
      const distance = Math.max(0, centerIndex - i) * RNA_STEP;
      const point = curveAt(distance, rnaPositions[i]);
      rnaFrame(distance);
      temporaryScale.set(1, 1, 1);
      instance(rnaSugar, i, point, temporaryQuaternion, temporaryScale);
      rnaBases[i].position.copy(point).addScaledVector(inward, baseOffset(RNA[i]));
      rnaBases[i].quaternion.copy(temporaryQuaternion);
      rnaTips[i].copy(point).addScaledVector(inward, baseReach(RNA[i]));
    }
    rnaSugar.count = count;
    rnaPhosphate.count = Math.max(0, count - 1);
    rnaSpine.count = Math.max(0, count - 1) * 4;
    for (let i = 0; i < count - 1; i++) {
      const distance = (centerIndex - i - 0.5) * RNA_STEP;
      curveAt(distance, sample1);
      temporaryQuaternion.identity();
      temporaryScale.set(1, 1, 1);
      instance(rnaPhosphate, i, sample1, temporaryQuaternion, temporaryScale);
      for (let k = 0; k < 4; k++) {
        curveAt((centerIndex - i - k / 4) * RNA_STEP, sample1);
        curveAt((centerIndex - i - (k + 1) / 4) * RNA_STEP, sample2);
        link(rnaSpine, i * 4 + k, sample1, sample2, 0.039);
      }
    }
    rnaSugar.instanceMatrix.needsUpdate = rnaPhosphate.instanceMatrix.needsUpdate = rnaSpine.instanceMatrix.needsUpdate = true;

    const input = pose.incoming || defaultPose.incoming;
    incomingGroup.visible = Boolean(input.visible) && target >= count;
    incomingJoin.count = incomingGroup.visible && (input.bond || 0) > 0 ? 4 : 0;
    incomingPhosphate.visible = incomingJoin.count > 0;
    if (incomingGroup.visible) {
      const progress = clamp(input.progress || 0, 0, 1);
      const dockingDistance = Math.max(0, centerIndex - target) * RNA_STEP;
      curveAt(dockingDistance, scratch);
      const travel = 1 - progress;
      incomingGroup.position.copy(scratch);
      incomingGroup.position.x += 2.65 * travel;
      incomingGroup.position.y += 0.74 * travel + 0.38 * Math.sin(progress * Math.PI);
      incomingGroup.position.z += 0.52 * travel;
      if (structureMode === 'exhibit' && !currentOptions.reducedMotion) {
        incomingGroup.position.y += .22 * Math.sin(Math.PI * progress) * travel;
        incomingGroup.position.z += .32 * Math.sin(Math.PI * progress) * travel;
      }
      rnaFrame(dockingDistance);
      incomingGroup.quaternion.copy(temporaryQuaternion);
      if (structureMode === 'exhibit' && !currentOptions.reducedMotion) incomingGroup.quaternion.multiply(approachRotation.setFromAxisAngle(approachAxis, .74 * (1 - smooth(0, .88, progress))));
      // The local x axis of a nucleotide points inward toward the template.
      incomingSugar.position.set(0, 0, 0);
      incomingBase.position.set(baseOffset(input.base || RNA[target]), 0, 0);
      incomingBase.geometry = baseGeometries[input.base] || baseGeometries[RNA[target]];
      incomingBase.material = incomingMaterials[input.base] || incomingMaterials[RNA[target]];
      const arrivalOpacity = smooth(0.08, 0.19, pose.phase ?? 1);
      incomingBase.material.opacity = incomingSugarMaterial.opacity = arrivalOpacity;
      const selection = { type: 'rna', index: target, base: input.base || RNA[target] };
      incomingBase.userData.selection = incomingSugar.userData.selection = selection;
      triphosphateMaterial.opacity = arrivalOpacity * (1 - smooth(0.05, 1, input.bond || 0));
      triphosphate.visible = triphosphateMaterial.opacity > 0.025;
      const lastDistance = (centerIndex - count + 1) * RNA_STEP;
      curveAt((lastDistance + dockingDistance) * 0.5, incomingPhosphate.position);
      incomingPhosphate.scale.setScalar(smooth(0, 0.72, input.bond || 0));
      for (let k = 0; k < 4; k++) {
        curveAt(THREE.MathUtils.lerp(lastDistance, dockingDistance, k / 4), sample1);
        curveAt(THREE.MathUtils.lerp(lastDistance, dockingDistance, (k + 1) / 4), sample2);
        link(incomingJoin, k, sample1, sample2, 0.039, smooth(0, 0.72, input.bond || 0));
      }
      incomingJoin.instanceMatrix.needsUpdate = true;
    }
    // Show only the two newest, local RNA-template contacts. DNA's displaced
    // coding strand remains present above the hybrid.
    let bondIndex = 0;
    rnaPairingDebug = [];
    for (let offset = 0; offset < 3; offset++) {
      const index = target - offset;
      let visible = index >= 0 && index < count && Math.abs(centerIndex - index) < 2.7 && opening > 0.65;
      if (structureMode !== 'legacy') {
        const arriving = index === target && incomingGroup.visible;
        const mesh = arriving ? incomingBase : rnaBases[Math.max(0, index)];
        if (arriving) visible = (input.progress || 0) > 0.84 && opening > 0.65;
        if (index < 0) continue;
        const number = hydrogenCount(RNA[index]);
        const weight = visible ? (arriving ? smooth(0.84, 0.96, input.progress || 0) : 1) : 0;
        rnaPairingDebug.push({ index, bases: `${TEMPLATE_DNA[index]}–${RNA[index]}`, hydrogenBonds: number, visible: weight > 0, arriving });
        if (!weight) continue;
        if (arriving) incomingGroup.updateMatrixWorld(true);
        for (let k = 0; k < number; k++) {
          baseSite(mesh, k, false, pairingA);
          baseSite(strandData.template.bases[index], k, true, pairingB);
          bondIndex = dashedContact(activeBonds, bondIndex, pairingA, pairingB, weight);
        }
        continue;
      }
      let a;
      if (index === target && incomingGroup.visible) {
        incomingGroup.updateMatrixWorld(true);
        sample2.set(0.78, 0, 0).applyMatrix4(incomingGroup.matrixWorld);
        a = sample2;
        visible = (input.progress || 0) > 0.84 && opening > 0.65;
      } else a = rnaTips[Math.max(0, index)];
      const b = strandData.template.baseTips[Math.max(0, index)];
      // Copy first because sample2 is also the link scratch vector.
      const contactStart = scratch.copy(a);
      for (let k = 0; k < 3; k++) {
        sample1.lerpVectors(contactStart, b, 0.08 + k * 0.31);
        sample2.lerpVectors(contactStart, b, 0.24 + k * 0.31);
        link(activeBonds, bondIndex++, sample1, sample2, 0.014, visible ? 1 : 0);
      }
    }
    activeBonds.count = structureMode !== 'legacy' ? bondIndex : 9;
    activeBonds.instanceMatrix.needsUpdate = true;
    if (structureMode === 'exhibit') {
      const far = Math.max(0, centerIndex) * RNA_STEP;
      const near = Math.max(0, centerIndex - count + 1) * RNA_STEP;
      // The coming nucleotide still has its own growing bond, just as before.
      // The committed backbone is one seamless surface through its sugar nodes.
      flowingSpines.rna.update((distance, out) => curveAt(distance, out), near, far);
    }
  }

  function placeLabels(pose) {
    const last = CODING_DNA.length - 1;
    terminalLabels.coding5.point.copy(strandData.coding.positions[0]).add(new THREE.Vector3(-0.38, 0.12, 0));
    terminalLabels.coding3.point.copy(strandData.coding.positions[last]).add(new THREE.Vector3(0.38, 0.12, 0));
    terminalLabels.template3.point.copy(strandData.template.positions[0]).add(new THREE.Vector3(-0.38, -0.1, 0));
    terminalLabels.template5.point.copy(strandData.template.positions[last]).add(new THREE.Vector3(0.38, -0.1, 0));
    terminalLabels.rna5.point.copy(rnaPositions[0]).add(new THREE.Vector3(-0.25, -0.21, 0.12));
    const count = clamp(Math.floor(pose.rnaCount ?? 6), 1, RNA.length);
    terminalLabels.rna3.point.copy(rnaPositions[count - 1]).add(new THREE.Vector3(0.04, 0.39, 0.18));
    if (incomingGroup.visible && (pose.incoming?.bond || 0) > 0) {
      // Keep the 3′ marker on the growing connection until the molecule commits.
      scratch.copy(incomingGroup.position).add(new THREE.Vector3(0.04, 0.39, 0.18));
      terminalLabels.rna3.point.lerp(scratch, clamp(pose.incoming.bond, 0, 1));
    }
    codingCaption.point.set(xAt(centerIndex) - 1.05, 2.2, 0.1);
    templateCaption.point.set(xAt(centerIndex) + 0.05, -2.06, -0.05);
    enzymeCaption.point.set(xAt(centerIndex) + 0.3, 2.64, -0.7);
    rnaCaption.point.copy(rnaPositions[Math.max(0, count - 5)]).add(new THREE.Vector3(-0.25, -0.82, 0.05));
    const target = clamp(Math.floor(pose.targetIndex ?? 6), 0, RNA.length - 1);
    for (const type of ['coding', 'template']) {
      for (let k = 0; k < 5; k++) {
        const index = target + k - 2;
        const label = dnaLetterLabels[type][k];
        label.visible = index >= 0 && index < CODING_DNA.length && opening > 0.48;
        if (!label.visible) continue;
        label.element.textContent = strandData[type].sequence[index];
        label.element.style.color = PALETTE[strandData[type].sequence[index]];
        label.element.style.fontWeight = index === target ? '800' : '600';
        label.element.style.borderColor = index === target ? 'rgba(150,130,83,.48)' : 'rgba(142,131,110,.12)';
        label.point.copy(strandData[type].bases[index].position).addScaledVector(new THREE.Vector3(0, type === 'coding' ? 1 : -1, 0.42), 0.2);
      }
    }
    for (let k = 0; k < 5; k++) {
      const index = count - 5 + k;
      const label = rnaLetterLabels[k];
      label.visible = index >= 0;
      if (!label.visible) continue;
      label.element.textContent = RNA[index];
      label.element.style.color = PALETTE[RNA[index]];
      label.point.copy(rnaBases[index].position).add(new THREE.Vector3(0, 0, 0.22));
    }
    incomingLabel.visible = incomingGroup.visible;
    if (incomingLabel.visible) {
      incomingLabel.element.style.opacity = String(smooth(0.08, 0.19, pose.phase ?? 1));
      incomingLabel.element.textContent = pose.incoming?.base || RNA[target];
      incomingLabel.element.style.color = PALETTE[incomingLabel.element.textContent];
      incomingLabel.element.style.fontWeight = '800';
      incomingLabel.point.set(baseOffset(pose.incoming?.base || RNA[target]), 0, 0.2).applyMatrix4(incomingGroup.matrixWorld);
    }
  }

  function automaticCamera(pose) {
    if (userCamera) return;
    const blend = currentOptions.reducedMotion ? 1 : clamp(pose.cameraBlend ?? 0, 0, 1);
    const portrait = width / height < 1.05;
    const finish = currentOptions.reducedMotion ? 1 : clamp(pose.finalBlend ?? 0, 0, 1);
    const focusWidth = (portrait ? 8.7 : 12.1) + finish * (portrait ? 0.38 : 0.5);
    const wideWidth = CODING_DNA.length * STEP + 3.2;
    const worldWidth = THREE.MathUtils.lerp(wideWidth, focusWidth, blend);
    const worldHeight = Math.max(portrait ? 7.0 : 7.05, worldWidth / camera.aspect);
    const distance = worldHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)));
    const viewIndex = currentOptions.reducedMotion ? 8.5 : centerIndex;
    cameraTarget.set(THREE.MathUtils.lerp(0, xAt(viewIndex) - (portrait ? 1.82 : 1.2), blend), THREE.MathUtils.lerp(-0.38, -0.47, blend), 0.05);
    const direction = scratch.set(0.10, 0.30, 1).normalize();
    cameraPosition.copy(cameraTarget).addScaledVector(direction, distance);
    applyingCamera = true;
    controls.target.copy(cameraTarget);
    camera.position.copy(cameraPosition);
    camera.lookAt(cameraTarget);
    controls.update();
    applyingCamera = false;
  }

  function update(pose = defaultPose, options = {}) {
    if (disposed) return;
    currentPose = pose;
    currentOptions = { ...currentOptions, ...options };
    controls.enableDamping = !currentOptions.reducedMotion;
    const detail = currentOptions.detail === 'low' ? 'low' : 'high';
    if (detail !== currentDetail) {
      currentDetail = detail;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, detail === 'low' ? 1.25 : 2));
      renderer.shadowMap.enabled = detail !== 'low';
      renderer.setSize(width, height, false);
    }
    centerIndex = clamp(pose.centerIndex ?? 6, 0, CODING_DNA.length - 1);
    opening = clamp(pose.opening ?? 1, 0, 1);
    setDnaGeometry();
    enzyme.position.set(xAt(centerIndex), 0, 0);
    enzyme.scale.setScalar(0.94 + opening * 0.06);
    setRnaGeometry(pose);
    root.updateMatrixWorld(true);
    placeLabels(pose);
    automaticCamera(pose);
    appearanceRig?.sync();
  }

  function render() {
    if (disposed) return;
    controls.update();
    renderer.render(scene, camera);
    const show = currentOptions.labels !== false;
    const priority = label => label === incomingLabel ? 100 : label === terminalLabels.rna3 ? 95 :
      label.element.className.includes('terminal') ? 85 : label.element.className.includes('caption') ? 80 :
      label.element.style.fontWeight === '800' ? 90 : 50;
    const ordered = structureMode === 'exhibit' ? [...labels].sort((a, b) => priority(b) - priority(a)) : labels;
    const occupied = [];
    for (const label of ordered) {
      if (!show || !label.visible) { label.element.style.display = 'none'; continue; }
      projected.copy(label.point).project(camera);
      const x = (projected.x * 0.5 + 0.5) * width, y = (-projected.y * 0.5 + 0.5) * height;
      let inView = projected.z > -1 && projected.z < 1 && x > 14 && x < width - 14 && y > 12 && y < height - 12;
      if (inView && structureMode === 'exhibit') {
        // Keep labels at their real anchors. Nearby lower-priority letters
        // yield to the active nucleotide and strand-direction markers.
        const textWidth = [...label.element.textContent].reduce((n, char) => n + (char.charCodeAt(0) > 255 ? 11 : 7), 14);
        const rect = { x: x - textWidth / 2 - 3, y: y - 13, width: textWidth + 6, height: 26 };
        inView = rect.x > 4 && rect.x + rect.width < width - 4 && !occupied.some(other => rect.x < other.x + other.width && rect.x + rect.width > other.x && rect.y < other.y + other.height && rect.y + rect.height > other.y);
        if (inView) occupied.push(rect);
      }
      label.element.style.display = inView ? '' : 'none';
      if (inView) label.element.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-50%)`;
    }
  }
  function resize() {
    if (disposed) return;
    width = Math.max(1, container.clientWidth);
    height = Math.max(1, container.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (currentPose) automaticCamera(currentPose);
    onInvalidate();
  }
  function resetView() {
    userCamera = false;
    controls.reset();
    if (currentPose) automaticCamera(currentPose);
    onInvalidate();
  }
  function setStructureMode(mode) {
    if (!['legacy', 'refined', 'blender', 'exhibit'].includes(mode) || (mode === 'blender' && !blenderAssets) || (mode === 'exhibit' && !exhibitAssets)) return false;
    if (mode !== 'legacy' && !refinedBaseGeometries) {
      refinedBaseGeometries = Object.fromEntries(Object.keys(PALETTE).map(base => [base, geometry(createRefinedBaseGeometry(base))]));
    }
    if (mode === 'blender' && !blenderBaseGeometries) {
      blenderBaseGeometries = Object.fromEntries(Object.keys(PALETTE).map(base => {
        const mesh = authoredGeometry[`BASE_${base}`];
        // Contacts and ring annotations come from the existing teaching model.
        Object.assign(mesh.userData, refinedBaseGeometries[base].userData);
        return [base, mesh];
      }));
    }
    if (mode === 'exhibit' && !exhibitBaseGeometries) {
      exhibitBaseGeometries = Object.fromEntries(Object.keys(PALETTE).map(base => {
        const mesh = exhibitGeometry[`BASE_${base}`];
        Object.assign(mesh.userData, refinedBaseGeometries[base].userData);
        return [base, mesh];
      }));
    }
    structureMode = mode;
    baseGeometries = mode === 'exhibit' ? exhibitBaseGeometries : mode === 'blender' ? blenderBaseGeometries : mode === 'refined' ? refinedBaseGeometries : legacyBaseGeometries;
    const authored = mode === 'blender' || mode === 'exhibit';
    const activeGeometry = mode === 'exhibit' ? exhibitGeometry : authoredGeometry;
    shell.geometry = authored ? activeGeometry.RNAP_BODY : originalShellGeometry;
    enzymeLobes.forEach(mesh => { mesh.visible = !authored; });
    exhibitDetails.forEach(mesh => { mesh.visible = mode === 'exhibit'; });
    for (const [type, tube] of Object.entries(flowingSpines)) {
      tube.mesh.visible = mode === 'exhibit';
      (type === 'rna' ? rnaSpine : strandData[type].spine).visible = mode !== 'exhibit';
    }
    const vertexColors = authored && !!shell.geometry.getAttribute('color');
    if (proteinMaterial.vertexColors !== vertexColors) {
      proteinMaterial.vertexColors = vertexColors;
      proteinMaterial.needsUpdate = true;
    }
    const sugarGeometry = authored ? activeGeometry.SUGAR : sugarGeo;
    const phosphateGeometry = authored ? activeGeometry.PHOSPHATE : phosphateGeo;
    for (const strand of Object.values(strandData)) {
      strand.sugar.geometry = sugarGeometry;
      strand.phosphate.geometry = phosphateGeometry;
    }
    rnaSugar.geometry = incomingSugar.geometry = sugarGeometry;
    rnaPhosphate.geometry = incomingPhosphate.geometry = phosphateGeometry;
    triphosphate.children.filter(mesh => [phosphateGeo, authoredGeometry.PHOSPHATE, exhibitGeometry.PHOSPHATE].includes(mesh.geometry)).forEach(mesh => { mesh.geometry = phosphateGeometry; });
    appearanceRig?.setStructure?.(mode);
    if (currentPose) update(currentPose);
    onInvalidate();
    return true;
  }
  function focusDna() {
    // Same camera for both structure versions: compare one closed segment.
    userCamera = true;
    cameraTarget.set(xAt(centerIndex) + 3.8, 0, 0);
    cameraPosition.copy(cameraTarget).add(scratch.set(0.82, 0.38, 1).normalize().multiplyScalar(7.1));
    applyingCamera = true;
    controls.target.copy(cameraTarget);
    camera.position.copy(cameraPosition);
    camera.lookAt(cameraTarget);
    controls.update();
    applyingCamera = false;
    onInvalidate();
  }
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let downX = 0, downY = 0;
  function pointerDown(event) { downX = event.clientX; downY = event.clientY; }
  function pointerUp(event) {
    if (Math.hypot(event.clientX - downX, event.clientY - downY) > 5) return;
    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.set((event.clientX - bounds.left) / bounds.width * 2 - 1, -(event.clientY - bounds.top) / bounds.height * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const candidates = pickables.filter(mesh => mesh.visible && mesh.parent?.visible !== false);
    const hit = raycaster.intersectObjects(candidates, false)[0];
    if (hit?.object.userData.selection) onSelect({ ...hit.object.userData.selection });
  }
  renderer.domElement.addEventListener('pointerdown', pointerDown);
  renderer.domElement.addEventListener('pointerup', pointerUp);
  const resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(resize) : null;
  resizeObserver?.observe(container);
  if (!resizeObserver) window.addEventListener('resize', resize);
  // The original pilot opts out. A separate comparison page supplies this factory.
  const appearanceRig = appearanceFactory?.({
    scene, renderer, lights: { hemisphere, key, fill }, enzyme, incomingGroup, floor,
    materials: [...allMaterials].filter(value => value.isMeshPhysicalMaterial).map(value => ({ material: value, kind: value.userData.studyKind, role: value.userData.studyRole })),
  }) || null;
  resize();
  update(defaultPose);
  controls.saveState();

  function dispose() {
    if (disposed) return;
    disposed = true;
    resizeObserver?.disconnect();
    window.removeEventListener('resize', resize);
    renderer.domElement.removeEventListener('pointerdown', pointerDown);
    renderer.domElement.removeEventListener('pointerup', pointerUp);
    controls.removeEventListener('start', markUserCamera);
    controls.removeEventListener('change', invalidate);
    controls.dispose();
    appearanceRig?.dispose();
    for (const value of allGeometries) value.dispose();
    for (const value of allMaterials) value.dispose();
    disposeMolecularResources();
    renderer.dispose();
    renderer.domElement.remove();
    labelLayer.remove();
  }
  function getDebugGeometry() {
    const count = clamp(Math.floor(currentPose?.rnaCount ?? 6), 1, RNA.length);
    const target = clamp(Math.floor(currentPose?.targetIndex ?? 6), 0, RNA.length - 1);
    root.updateMatrixWorld(true);
    const active = {};
    for (const type of ['coding', 'template']) {
      active[type] = [];
      for (let index = Math.max(0, target - 3); index <= Math.min(CODING_DNA.length - 1, target + 3); index++) {
        active[type].push({ index, base: strandData[type].sequence[index], sugar: strandData[type].positions[index].toArray(), baseCenter: strandData[type].bases[index].position.toArray(), baseTip: strandData[type].baseTips[index].toArray() });
      }
    }
    const incomingTip = new THREE.Vector3(baseReach(currentPose?.incoming?.base || RNA[target]), 0, 0).applyMatrix4(incomingGroup.matrixWorld);
    const incomingCenter = new THREE.Vector3(baseOffset(currentPose?.incoming?.base || RNA[target]), 0, 0).applyMatrix4(incomingGroup.matrixWorld);
    return {
      time: currentPose?.time ?? 0, centerIndex, targetIndex: target, rnaCount: count,
      rnaPositions: rnaPositions.slice(0, count).map(point => point.toArray()),
      rnaBaseCenters: rnaBases.slice(0, count).map(mesh => mesh.position.toArray()),
      rnaBaseTips: rnaTips.slice(0, count).map(point => point.toArray()),
      active,
      incoming: { visible: incomingGroup.visible, index: currentPose?.incoming?.index ?? target, base: currentPose?.incoming?.base ?? RNA[target], position: incomingGroup.position.toArray(), quaternion: incomingGroup.quaternion.toArray(), baseCenter: incomingCenter.toArray(), baseTip: incomingTip.toArray() },
      rnaAnchor: rnaAnchor.toArray(), camera: { position: camera.position.toArray(), target: controls.target.toArray(), userCamera },
      terminals: Object.fromEntries(Object.entries(terminalLabels).map(([name, label]) => {
        const p = label.point.clone().project(camera);
        return [name, { world: label.point.toArray(), ndc: p.toArray(), inView: Math.abs(p.x) < 1 && Math.abs(p.y) < 1 && Math.abs(p.z) < 1 }];
      })),
    };
  }
  return {
    update, render, resize, resetView, dispose, getDebugGeometry, setStructureMode, focusDna,
    getAuthoringSources: () => {
      const pack = mesh => ({
        position: Array.from(mesh.attributes.position.array),
        index: mesh.index ? Array.from(mesh.index.array) : null,
        uv: mesh.attributes.uv ? Array.from(mesh.attributes.uv.array) : null,
        userData: mesh.userData,
      });
      return {
        coordinates: 'Three.js right-handed Y_UP; authoring import maps (x,y,z) to Blender (x,-z,y)',
        interpretive: true,
        enzymeParts: enzyme.children.filter(child => child.isMesh && !exhibitDetails.includes(child)).map((child, index) => {
          child.updateMatrix();
          return { name: `enzyme_part_${index}`, role: child.material.userData.studyRole, ...pack(child === shell ? originalShellGeometry : child.geometry), matrix: child.matrix.toArray() };
        }),
        bases: Object.fromEntries(Object.entries(refinedBaseGeometries || {}).map(([base, mesh]) => [base, pack(mesh)])),
        sugar: pack(sugarGeo), phosphate: pack(phosphateGeo),
      };
    },
    getStructureDebug: () => ({
      mode: structureMode,
      authoring: ['blender', 'exhibit'].includes(structureMode) ? {
        generator: (structureMode === 'exhibit' ? exhibitAssets : blenderAssets).generator,
        manifest: (structureMode === 'exhibit' ? exhibitAssets : blenderAssets).manifest,
        loadMs: (structureMode === 'exhibit' ? exhibitAssets : blenderAssets).loadMs,
        loadedBounds: Object.fromEntries(Object.entries(structureMode === 'exhibit' ? exhibitGeometry : authoredGeometry).map(([name, mesh]) => [name, {
          min: mesh.boundingBox.min.toArray(), max: mesh.boundingBox.max.toArray(),
          vertexCount: mesh.attributes.position.count,
          triangles: (mesh.index ? mesh.index.count : mesh.attributes.position.count) / 3,
        }])),
        bodyUsesOcclusion: proteinMaterial.vertexColors,
        continuousBackbones: structureMode === 'exhibit',
      } : null,
      schematic: true,
      dnaPairs: dnaPairingDebug,
      rnaContacts: rnaPairingDebug,
      renderedDnaDashCount: pairBonds.count,
      renderedRnaDashCount: activeBonds.count,
      dnaPositions: Object.fromEntries(Object.entries(strandData).map(([type, data]) => [type, data.positions.map(point => point.toArray())])),
      baseBounds: Object.fromEntries(Object.entries(baseGeometries).map(([base, mesh]) => [base, { min: mesh.boundingBox.min.toArray(), max: mesh.boundingBox.max.toArray(), rings: mesh.userData.ringCount ?? null }])),
      closedRise: structureMode !== 'legacy' ? STEP * CLOSED_SPACING : STEP,
      grooveAngles: structureMode !== 'legacy' ? [(Math.PI - 2 * GROOVE_SHIFT) * 180 / Math.PI, (Math.PI + 2 * GROOVE_SHIFT) * 180 / Math.PI] : [180, 180],
    }),
    setAppearance: id => { appearanceRig?.apply(id); onInvalidate(); },
    probeAppearance: factor => { appearanceRig?.probe(factor); onInvalidate(); },
    getAppearance: () => appearanceRig?.getState() || { id: 'baseline' },
    getMetrics: () => ({ drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures, nucleotideCount: CODING_DNA.length * 2 + (currentPose?.rnaCount ?? 6), userCamera, detail: currentDetail }),
  };
}
