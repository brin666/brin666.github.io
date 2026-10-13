import * as THREE from 'three';
import { OrbitControls } from './vendor/OrbitControls.js';
import { BASE_COLORS, CODING_DNA, TEMPLATE_DNA, RNA, CODONS, AMINO_ACIDS } from './biology.mjs';
import { createOrganicGeometry, createBaseGeometry, createSugarGeometry, createSurfaceMaterial, createMembranePatchGeometry, disposeMolecularResources } from './molecular-models.js';
import { createExhibitBase, adaptExhibitBase, createPairingDashes } from './nucleic-exhibit.js';
import { createRefinedBaseGeometry } from './pilot/nucleic-base-geometry.js';
import { createContinuousBackbone } from './continuous-backbone.js';
import { buildRibosomeExhibit, buildTrnaExhibit } from './translation-exhibit.js';
import { createExhibitMaterial, createExhibitEnvironment } from './exhibit-surface.js';
import { createBioProteinMaterial, setProteinActivity } from './bio-protein-surface.js';
import { loadPolymeraseExhibit } from './polymerase-exhibit.js';
import { createPeptideResidue } from './peptide-exhibit.js';
import { TRANSLATION_SITES, SITE_SPACING } from './translation-layout.js';
import { buildNuclearExportExhibit } from './nuclear-export-exhibit.js';
import { createNuclearExportSpace } from './nuclear-export-space.js';
import { EXPORT_FRAME, envelopePositionX, sampleExportPoint } from './nuclear-export-path.js';
import { createPolymeraseView } from './pilot/polymerase-view.js';
import { createPolymeraseLivingMotion } from './polymerase-living-motion.js';
import { createMolecularLivingMotion } from './molecular-living-motion.js';
import { createDnaIdleRotation } from './dna-idle-rotation.js';
import { createStrandPoseBlend } from './strand-pose-blend.js';
import { createDnaEntrance, entranceEase, entranceSpin, ENTRANCE_HANDOFF, ENTRANCE_DURATION } from './dna-entrance.js';
import { derive } from './state.mjs';

// The shared timeline owns biology. This module owns only presentation and camera rendering.
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, Number(v) || 0));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
const dnaSequence = (s) => typeof s === 'string' ? [...s] : Array.from(s || []);
const coding = dnaSequence(CODING_DNA);
const template = dnaSequence(TEMPLATE_DNA);
const rna = dnaSequence(RNA);
const aminoNames = ['Met', 'Ala', 'Phe', 'Glu', 'Pro'];
const peptideColors = ['#c8a586', '#c9ba91', '#b5a8c7', '#b4c2a3', '#c79281'];
const aaName = (i) => AMINO_ACIDS?.[i]?.short || aminoNames[i] || '';
const colorOf = (b) => BASE_COLORS?.[b] || ({ A: '#8aa991', T: '#bda880', U: '#bda880', G: '#baa0a0', C: '#92aabb' }[b]) || '#a9b4b2';
const vec = (x, y, z = 0) => new THREE.Vector3(x, y, z);
const Z_AXIS = vec(0, 0, 1);
const X_AXIS = vec(1, 0, 0);

export function createScene({ container, onSelect = () => {}, onHover = () => {}, onStatus = () => {}, onInvalidate = () => {} }) {
  if (!container) throw new Error('缺少三维展台容器');
  const classic = new URLSearchParams(window.location.search).get('visual') === 'classic';
  const detailed = !classic && new URLSearchParams(window.location.search).get('visual') !== 'previous';
  // The baseline switch is a review aid: identical geometry, view and time,
  // with the former surface/light treatment. It does not change biology.
  const exhibitLighting = detailed && new URLSearchParams(window.location.search).get('look') !== 'baseline';
  const bioSurface = exhibitLighting && new URLSearchParams(window.location.search).get('surface') !== 'previous';
  const refinedModels = detailed && new URLSearchParams(window.location.search).get('model') !== 'previous';
  let proteinView = null, proteinVisual = null, perspectiveEnabled = true;
  container.dataset.visual = classic ? 'classic' : 'exhibit';
  container.dataset.modelEdition = refinedModels ? 'exhibit-v12' : bioSurface ? 'bio-materials-v10' : exhibitLighting ? 'exhibit-v5' : detailed ? 'full-v4' : classic ? 'classic' : 'previous';
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch (error) {
    throw new Error(`浏览器无法创建 WebGL 展台：${error.message}`);
  }
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(exhibitLighting ? '#132427' : '#101a1d');
  scene.fog = new THREE.Fog(scene.background, 32, 74);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 4.6, 15);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = exhibitLighting ? 1.0 : 1.08;
  renderer.shadowMap.enabled = false;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  renderer.domElement.dataset.sceneCanvas = 'gene-expression';
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;touch-action:pan-y;';
  container.style.position = 'relative';
  container.append(renderer.domElement);

  const overlay = document.createElement('div');
  overlay.dataset.sceneOverlay = 'gene-expression';
  overlay.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;user-select:none;';
  container.append(overlay);
  let whiteboardActive = false, whiteboardPreparing = false, whiteboardApplyingState = false, whiteboardFreezePending = false;
  let whiteboardMode = 'model', whiteboardQuality = null;
  let whiteboardOnCameraChange = null, whiteboardResetCamera = null;
  let whiteboardDarkState = null;
  let whiteboardCameraChangeTimer = 0;
  let whiteboardRenderCount = 0, whiteboardCameraChangeCount = 0;
  let controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.2, 0);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.minAzimuthAngle = -0.75;
  controls.maxAzimuthAngle = 0.75;
  controls.minPolarAngle = 1.02;
  controls.maxPolarAngle = 1.83;
  // The canvas is a dedicated observation surface; scrolling remains native
  // outside it, including the independently scrolling learning panel.
  controls.touches.ONE = THREE.TOUCH.ROTATE;
  controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
  renderer.domElement.style.touchAction = 'none';
  const darkControlSettings = () => ({
    enabled: controls.enabled,
    enableZoom: controls.enableZoom,
    enablePan: controls.enablePan,
    enableDamping: controls.enableDamping,
    dampingFactor: controls.dampingFactor,
    minAzimuthAngle: controls.minAzimuthAngle,
    maxAzimuthAngle: controls.maxAzimuthAngle,
    minPolarAngle: controls.minPolarAngle,
    maxPolarAngle: controls.maxPolarAngle,
    minDistance: controls.minDistance,
    maxDistance: controls.maxDistance,
    zoomSpeed: controls.zoomSpeed,
    rotateSpeed: controls.rotateSpeed,
    panSpeed: controls.panSpeed,
    mouseButtons: { ...controls.mouseButtons },
    touches: { ...controls.touches },
  });
  const applyControlSettings = (settings) => {
    if (!settings) return;
    for (const key of ['enabled','enableZoom','enablePan','enableDamping','dampingFactor','minAzimuthAngle','maxAzimuthAngle','minPolarAngle','maxPolarAngle','minDistance','maxDistance','zoomSpeed','rotateSpeed','panSpeed']) {
      if (settings[key] !== undefined) controls[key] = settings[key];
    }
    if (settings.mouseButtons) controls.mouseButtons = { ...settings.mouseButtons };
    if (settings.touches) controls.touches = { ...settings.touches };
  };
  function configureWhiteboardControls() {
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.enableDamping = true;
    controls.dampingFactor = .085;
    controls.minAzimuthAngle = -Infinity;
    controls.maxAzimuthAngle = Infinity;
    controls.minPolarAngle = .08;
    controls.maxPolarAngle = Math.PI - .08;
    controls.minDistance = 2.4;
    controls.maxDistance = 48;
    controls.zoomSpeed = .85;
    controls.rotateSpeed = .72;
    controls.panSpeed = .75;
    // OrbitControls' MOUSE values are ROTATE=0, DOLLY=1 and PAN=2.
    controls.mouseButtons = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };
    controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
    controls.enabled = whiteboardMode === 'model';
  }

  const resources = new Set();
  const materials = new Set();
  const warmMaterials = new Set();
  const livingControllers = [];
  const fadedSurfaces = new WeakMap();
  function stageOpacity(group, value, accept = () => true) {
    group.traverse(part => {
      if (!part.isMesh || !accept(part)) return;
      for(const mat of Array.isArray(part.material)?part.material:[part.material]) {
        if (!fadedSurfaces.has(mat)) fadedSurfaces.set(mat, { opacity: mat.opacity, transparent: mat.transparent, depthWrite: mat.depthWrite });
        const original = fadedSurfaces.get(mat), transparent = original.transparent || value < .9999;
        if (mat.transparent !== transparent) { mat.transparent = transparent; mat.needsUpdate = true; }
        mat.opacity = original.opacity * value;
        mat.depthWrite = original.depthWrite && value >= .9999;
      }
    });
  }
  const pickables = [];
  const labels = [];
  const geometry = (g) => { resources.add(g); return g; };
  const material = (color, extra = {}) => {
    const role = extra.kind === 'inner' ? 'inner' : ['base', 'sugar'].includes(extra.kind) ? 'nucleic' : extra.kind === 'backbone' ? 'backbone' : 'protein';
    const { kind, biological, ...properties } = extra;
    const m = exhibitLighting && extra.kind !== 'membrane'
      ? (bioSurface && biological
        ? createBioProteinMaterial({ color, inner: role === 'inner', residue: kind === 'residue', variant: color, ...properties })
        : createExhibitMaterial({ color, role, variant: color, ...properties }))
      : createSurfaceMaterial(color, extra.kind || 'protein');
    if (!classic && (!exhibitLighting || extra.kind === 'membrane')) {
      const fine = ['base', 'backbone', 'sugar'].includes(extra.kind);
      m.roughness = fine ? 0.64 : extra.kind === 'membrane' ? 0.56 : 0.58;
      m.specularIntensity = fine ? 0.42 : 0.56;
      m.clearcoat = 0;
      m.clearcoatRoughness = 0.62;
      m.sheen = 0;
      if (!fine) m.roughnessMap = null;
      m.bumpScale *= fine ? 0.9 : 0.28;
      if (detailed && ['base', 'sugar', 'backbone'].includes(extra.kind)) {
        m.roughnessMap = null; m.bumpMap = null; m.bumpScale = 0;
        m.roughness = extra.kind === 'base' ? .84 : .64;
        m.specularIntensity = extra.kind === 'base' ? .12 : .22;
      }
    }
    Object.assign(m, properties);
    materials.add(m);
    return m;
  };
  const palette = {
    coding: material('#7db6a0', { kind: 'backbone' }), template: material('#85afce', { kind: 'backbone' }), rna: material('#dca28d', { kind: 'backbone' }),
    polymerase: material(bioSurface ? '#c7bc99' : '#c0a56e', { biological: true }), ribosome: material(bioSurface ? '#bdb393' : '#9fae85'), smallRibosome: material(bioSurface ? '#91aaa0' : '#77a59b'),
    trna: material('#a59ac5', { kind: 'backbone' }), emptyTrna: material('#9baaa4', { kind: 'backbone' }), membrane: material('#9bbec1', { kind: 'membrane' }),
    pore: material('#d2bda0'), factor: material('#98a5c7',{biological:true}), joint: material('#dcd4b6', { kind: 'backbone' }),
    highlight: material('#deaa63', { emissive: '#b77526', emissiveIntensity: 0.14 }),
  };
  const baseMaterials = Object.fromEntries(['A', 'T', 'U', 'G', 'C'].map((b) => [b, material(colorOf(b), { kind: 'base' })]));
  // The entering molecule has its own material so a short entrance fade cannot
  // alter the already connected chain, or the complementary DNA base.
  const enteringSurface = (source) => {
    const result = source.clone();
    result.onBeforeCompile = source.onBeforeCompile;
    result.customProgramCacheKey = source.customProgramCacheKey;
    result.extensions = { ...source.extensions };
    result.transparent = true;
    result.depthWrite = false;
    materials.add(result);
    return result;
  };
  const enteringBases = Object.fromEntries(Object.entries(baseMaterials).map(([base, surface]) => [base, enteringSurface(surface)]));
  const enteringSugar = enteringSurface(palette.rna);
  const aminoMaterials = peptideColors.map((c) => material(c, classic ? {} : { kind: 'residue', biological: true }));
  const proteinGeo = geometry(createOrganicGeometry('protein', 'high'));
  const residueGeo = geometry(createOrganicGeometry(bioSurface ? 'residue-soft' : 'residue', 'high'));
  const residueGeometries = Array.from({ length: 5 }, (_, i) => refinedModels ? geometry(createPeptideResidue(i)) : residueGeo);
  const sugarGeo = geometry(createSugarGeometry());
  const baseGeometries = Object.fromEntries(['A', 'T', 'U', 'G', 'C'].map((b) => [b, geometry(detailed ? createExhibitBase(b) : createBaseGeometry(b))]));
  const bindingCleftGeometry = (kind, centerY, width, depth) => {
    const g = createOrganicGeometry(kind, 'high');
    if (classic) return geometry(g);
    const positions = g.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i), y = positions.getY(i), z = positions.getZ(i);
      const groove = Math.exp(-Math.pow(x / width, 4) - Math.pow((y - centerY) / 0.25, 2));
      const face = smooth((z - 0.08) / 0.42);
      positions.setZ(i, z - depth * groove * face);
    }
    g.computeVertexNormals(); g.computeBoundingBox(); g.computeBoundingSphere();
    g.userData.bindingCleft = true;
    return geometry(g);
  };
  const connectorGeo = geometry(new THREE.CylinderGeometry(1, 1, 1, 10));
  const hydrogenDashes = detailed ? createPairingDashes(connectorGeo, material('#bfc9b5', { kind: 'backbone', roughness: .9, specularIntensity: .05 })) : null;
  if (hydrogenDashes) scene.add(hydrogenDashes.object);
  function pairingBetween(a, b, amount = 1) {
    // Aligned teaching marks; they are not atom-to-atom geometry. Both full-lab
    // plate frames retain local X, so reversing site indices would cross lines.
    const count = Math.min(a.geometry.userData.pairingSites?.length || 0, b.geometry.userData.pairingSites?.length || 0);
    for (let j = 0; j < count; j++) {
      const x = count === 2 ? (j ? .075 : -.075) : (j - 1) * .085;
      hydrogenDashes.add(a.localToWorld(vec(x, 0, .26)), b.localToWorld(vec(x, 0, .26)), .009 * amount);
    }
  }
  const mesh = (g, m, parent, selectable = null) => {
    const result = new THREE.Mesh(g, m);
    result.castShadow = true;
    result.receiveShadow = true;
    parent?.add(result);
    if (selectable) { result.userData.selection = selectable; pickables.push(result); }
    return result;
  };
  const ball = (parent, m, position, scale, selectable) => {
    const result = mesh(proteinGeo, m, parent, selectable);
    result.position.copy(position);
    result.scale.set(...scale);
    return result;
  };
  const connector = (parent, m, radius = 0.025) => {
    const result = mesh(connectorGeo, m, parent);
    result.userData.radius = radius;
    return result;
  };
  const connect = (object, a, b, radius = object.userData.radius || 0.025) => {
    const direction = b.clone().sub(a);
    object.position.copy(a).add(b).multiplyScalar(0.5);
    object.quaternion.setFromUnitVectors(THREE.Object3D.DEFAULT_UP, direction.clone().normalize());
    object.scale.set(radius, direction.length(), radius);
  };

  // A stable tube buffer avoids creating/discarding geometries on timeline ticks.
  const tube = (parent, mat, radius, maxSegments = 116, selectable = null, nucleic = false) => {
    if (detailed) {
      const flow = createContinuousBackbone(maxSegments, 8, radius, { profile: nucleic && refinedModels, units: 29 });
      const object = mesh(geometry(flow.geometry), mat, parent, selectable);
      const curve = new THREE.CatmullRomCurve3([], false, 'centripetal');
      object.frustumCulled = false;
      return { object, set(points, end = 1) {
        object.visible = points.length > 1 && end > 0;
        if (!object.visible) { flow.geometry.setDrawRange(0, 0); object.userData.end = null; return; }
        curve.points = points;
        flow.update((t, target) => curve.getPoint(t, target), 0, end);
        object.userData.end = curve.getPoint(end).toArray();
      } };
    }
    const radial = 8;
    const positions = new Float32Array((maxSegments + 1) * (radial + 1) * 3);
    const normals = new Float32Array(positions.length);
    const indices = [];
    for (let i = 0; i < maxSegments; i++) for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j;
      const b = a + radial + 1;
      indices.push(a, a + 1, b, b, a + 1, b + 1);
    }
    const g = geometry(new THREE.BufferGeometry());
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('normal', new THREE.BufferAttribute(normals, 3).setUsage(THREE.DynamicDrawUsage));
    g.setIndex(indices);
    const object = mesh(g, mat, parent, selectable);
    object.frustumCulled = false;
    return {
      object,
      set(points) {
        object.visible = points.length > 1;
        if (points.length < 2) return;
        const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
        for (let i = 0; i <= maxSegments; i++) {
          const t = i / maxSegments;
          const p = curve.getPoint(t);
          const tangent = curve.getTangent(t).normalize();
          const axis = Math.abs(tangent.y) > 0.94 ? vec(0, 0, 1) : vec(0, 1, 0);
          const n = axis.cross(tangent).normalize();
          const b = tangent.clone().cross(n).normalize();
          for (let j = 0; j <= radial; j++) {
            const theta = j / radial * Math.PI * 2;
            const normal = n.clone().multiplyScalar(Math.cos(theta)).addScaledVector(b, Math.sin(theta));
            const index = (i * (radial + 1) + j) * 3;
            positions[index] = p.x + normal.x * radius;
            positions[index + 1] = p.y + normal.y * radius;
            positions[index + 2] = p.z + normal.z * radius;
            normals[index] = normal.x; normals[index + 1] = normal.y; normals[index + 2] = normal.z;
          }
        }
        g.attributes.position.needsUpdate = true;
        g.attributes.normal.needsUpdate = true;
        g.boundingSphere = null;
        g.boundingBox = null;
      },
    };
  };
  const domLabel = (text, anchor, { kind = 'structure', selection = null, index = null, offset = [0, 0] } = {}) => {
    const element = document.createElement(selection ? 'button' : 'span');
    element.textContent = text;
    element.className = `scene-label scene-label--${kind}`;
    element.dataset.kind = kind;
    if (index !== null) element.dataset.index = String(index);
    if (selection) {
      element.type = 'button';
      element.dataset.selectType = selection.type;
      element.setAttribute('aria-label', `${text}，查看说明`);
      element.addEventListener('click', (event) => { event.stopPropagation(); onSelect({ ...label.selection }); });
    }
    const isBase = kind.includes('base') || kind === 'anticodon';
    const isEnd = kind === 'endpoint';
    element.style.cssText = `position:absolute;left:0;top:0;transform:translate(-50%,-50%);white-space:nowrap;border:1px solid ${isBase ? 'rgba(211,230,223,.22)' : 'rgba(211,230,223,.30)'};padding:${isBase ? '0 2px' : isEnd ? '2px 5px' : '4px 7px'};border-radius:${isBase ? '3px' : '6px'};background:${isBase ? 'rgba(20,34,38,.84)' : 'rgba(23,38,42,.91)'};color:#f0f4e8;font-family:ui-sans-serif,system-ui,sans-serif;font-size:${isBase ? '10px' : isEnd ? '10px' : '11px'};font-weight:${isBase || isEnd ? '700' : '600'};line-height:1.25;box-shadow:${isBase ? 'none' : '0 2px 9px rgba(0,0,0,.15)'};pointer-events:${selection ? 'auto' : 'none'};cursor:${selection ? 'pointer' : 'default'};`;
    overlay.append(element);
    if (detailed && isBase) {
      // Letter glyphs belong to the schematic bases. Opaque badge rectangles
      // previously covered their ring silhouettes and made them look like blocks.
      element.style.border = '0';
      element.style.background = 'transparent';
      element.style.padding = '1px 3px';
      element.style.textShadow = '0 1px 2px rgba(9,25,27,.95), 0 0 2px rgba(9,25,27,.8)';
      element.style.fontWeight = '650';
    }
    const label = { element, anchor, kind, selection, offset, visible: true };
    labels.push(label);
    return label;
  };
  const objectAnchor = (object, local = vec(0, 0, 0)) => () => object.localToWorld(local.clone());
  const fixedLabel = (text, group, position, options) => domLabel(text, objectAnchor(group, position), options);

  const exhibitEnvironment = exhibitLighting ? createExhibitEnvironment(renderer) : null;
  if (exhibitEnvironment) scene.environment = exhibitEnvironment.texture;
  scene.add(new THREE.HemisphereLight(classic ? '#d8f3ea' : '#bdd8cd', classic ? '#172a33' : '#101f28', classic ? 1.6 : exhibitLighting ? 0.38 : 0.72));
  const keyLight = new THREE.DirectionalLight('#fff1d6', classic ? 3.3 : exhibitLighting ? 2.05 : 3.1);
  keyLight.position.set(-4, classic ? 9 : 7, classic ? 7 : 9);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  keyLight.shadow.camera.left = -10; keyLight.shadow.camera.right = 10;
  keyLight.shadow.camera.top = 9; keyLight.shadow.camera.bottom = -9;
  keyLight.shadow.normalBias = 0.045;
  keyLight.shadow.radius = 5;
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight('#9bd9ec', classic ? 2.6 : exhibitLighting ? 0.40 : 0.72);
  fillLight.position.set(5, 2, -5); scene.add(fillLight);
  const rimLight = new THREE.DirectionalLight('#afdcca', classic ? 1.5 : exhibitLighting ? 0.55 : 1.25);
  rimLight.position.set(-6, -3, 2); scene.add(rimLight);
  const floorMaterial = new THREE.ShadowMaterial({ color: '#000000', transparent: true, opacity: 0.1 });
  materials.add(floorMaterial);
  const floor = mesh(geometry(new THREE.PlaneGeometry(45, 28)), floorMaterial, scene);
  floor.rotation.x = -Math.PI / 2; floor.position.y = -3.55; floor.castShadow = false;
  floor.visible = false;

  const dnaGroup = new THREE.Group(); scene.add(dnaGroup);
  const codingPoints = Array.from({ length: 30 }, () => vec(0, 0, 0));
  const templatePoints = Array.from({ length: 30 }, () => vec(0, 0, 0));
  const codingRail = tube(dnaGroup, palette.coding, 0.052, 116, { type: 'coding' }, true);
  const templateRail = tube(dnaGroup, palette.template, 0.052, 116, { type: 'template' }, true);
  const dnaPlates = [];
  const dnaAttachments = detailed ? new THREE.InstancedMesh(connectorGeo, material('#aab9a6', { kind: 'backbone' }), 60) : null;
  const attachmentPose = new THREE.Object3D();
  if (dnaAttachments) { dnaAttachments.instanceMatrix.setUsage(THREE.DynamicDrawUsage); dnaAttachments.frustumCulled = false; dnaGroup.add(dnaAttachments); }
  const dnaSugars = [];
  const dnaGlyphs = [];
  for (let i = 0; i < 30; i++) {
    const upper = mesh(baseGeometries[coding[i]], baseMaterials[coding[i]] || palette.coding, dnaGroup, { type: 'base', index: i });
    const lower = mesh(baseGeometries[template[i]], baseMaterials[template[i]] || palette.template, dnaGroup, { type: 'base', index: i });
    dnaPlates.push([upper, lower]);
    dnaSugars.push([mesh(sugarGeo, palette.coding, dnaGroup, { type: 'coding' }), mesh(sugarGeo, palette.template, dnaGroup, { type: 'template' })]);
    dnaGlyphs.push([
      domLabel(coding[i] || '', objectAnchor(upper, vec(0, 0, 0.04)), { kind: 'coding-base', selection: { type: 'base', index: i }, index: i }),
      domLabel(template[i] || '', objectAnchor(lower, vec(0, 0, 0.04)), { kind: 'template-base', selection: { type: 'base', index: i }, index: i }),
    ]);
  }
  const dnaLabels = [
    domLabel('编码链 5′', () => dnaGroup.localToWorld(codingPoints[0].clone().add(vec(-0.5, 0.15, 0))), { kind: 'endpoint', selection: { type: 'coding' } }),
    domLabel('3′', () => dnaGroup.localToWorld(codingPoints[29].clone().add(vec(0.3, 0.15, 0))), { kind: 'endpoint' }),
    domLabel('模板链 3′', () => dnaGroup.localToWorld(templatePoints[0].clone().add(vec(-0.5, -0.18, 0))), { kind: 'endpoint', selection: { type: 'template' } }),
    domLabel('5′', () => dnaGroup.localToWorld(templatePoints[29].clone().add(vec(0.3, -0.18, 0))), { kind: 'endpoint' }),
  ];
  const dnaTitle = fixedLabel('DNA · 两条链反向平行', dnaGroup, vec(0, 1.45, 0), { selection: { type: 'coding' } });
  const entrance = createDnaEntrance({scene,group:dnaGroup,plates:dnaPlates,sugars:dnaSugars,codingPoints,templatePoints,codingRail,templateRail,attachments:dnaAttachments,pairingDashes:hydrogenDashes,pairBetween:pairingBetween});

  const rnaGroup = new THREE.Group(); scene.add(rnaGroup);
  const rnaPoints = Array.from({ length: 30 }, () => vec(0, 0, 0));
  const rnaRail = tube(rnaGroup, palette.rna, 0.045, 116, { type: 'rna' }, true);
  const rnaBases = [], rnaSugars = [], rnaGlyphs = [];
  for (let i = 0; i < 30; i++) {
    const base = mesh(baseGeometries[rna[i]], baseMaterials[rna[i]] || palette.rna, rnaGroup, { type: 'rna', index: i });
    rnaBases.push(base);
    rnaSugars.push(mesh(sugarGeo, palette.rna, rnaGroup, { type: 'rna', index: i }));
    rnaGlyphs.push(domLabel(rna[i] || '', objectAnchor(base, vec(0, 0.015, 0.05)), { kind: 'rna-base', selection: { type: 'rna', index: i }, index: i }));
  }
  let shownRna = 0;
  const rnaStart = domLabel('5′', () => {
    const along = rnaPoints[Math.min(1, Math.max(0, shownRna - 1))].clone().sub(rnaPoints[0]).normalize();
    return rnaGroup.localToWorld(rnaPoints[0].clone().addScaledVector(along, -0.22).add(vec(0, -0.22, 0)));
  }, { kind: 'endpoint' });
  const rnaEnd = domLabel('3′', () => {
    const last = Math.max(0, shownRna - 1);
    const endpoint = (index) => {
      const along = rnaPoints[index].clone().sub(rnaPoints[Math.max(0, index - 1)]).normalize();
      return rnaGroup.localToWorld(rnaPoints[index].clone().addScaledVector(along, 0.22).add(vec(0, -0.22, 0)));
    };
    const position = endpoint(last);
    const cycle = snapshot?.transcription?.phase ?? 0;
    const incomingIndex = snapshot?.transcription?.index;
    if (currentKey === 'transcription' && shownRna > 0 && cycle < 0.7 && incomingIndex === shownRna) {
      position.lerp(endpoint(incomingIndex), smooth(clamp((cycle - 0.56) / 0.14)));
    }
    return position;
  }, { kind: 'endpoint' });
  const rnaTitle = fixedLabel('mRNA', rnaGroup, vec(-4.7, -1.15, 0), { selection: { type: 'rna' } });

  const polymerase = new THREE.Group(); scene.add(polymerase);
  const enzymeBody = mesh(bindingCleftGeometry('polymerase', -0.22, 0.54, 0.34), palette.polymerase, polymerase, { type: 'polymerase' });
  enzymeBody.position.set(0.04, 0.18, -0.57); enzymeBody.scale.set(0.95, 1.04, 0.63);
  // The two asymmetric jaws embrace the strands; the catalytic cleft remains open to the viewer.
  ball(polymerase, palette.polymerase, vec(-0.32, 0.78, -0.08), [0.64, 0.39, 0.46], { type: 'polymerase' });
  ball(polymerase, palette.polymerase, vec(0.40, -0.53, -0.38), [0.45, 0.32, 0.43], { type: 'polymerase' });
  ball(polymerase, palette.polymerase, vec(-0.47, -0.37, -0.36), [0.35, 0.42, 0.32], { type: 'polymerase' });
  const polyLabel = fixedLabel('RNA 聚合酶', polymerase, vec(0, 1.35, 0), { selection: { type: 'polymerase' } });
  const templateWindowLabel = fixedLabel('模板链 · 3′→5′', polymerase, vec(-1.65, -1.0, .65), { kind: 'direction', selection: { type: 'template' } });
  const codingWindowLabel = fixedLabel('编码链 · 5′→3′', polymerase, vec(-1.65, .98, .10), { kind: 'direction', selection: { type: 'coding' } });
  const activeNucleotide = new THREE.Group(); scene.add(activeNucleotide);
  const activeBase = mesh(baseGeometries.A, enteringBases.A, activeNucleotide, { type: 'rna', index: 0 });
  const activeSugar = mesh(sugarGeo, enteringSugar, activeNucleotide, { type: 'rna', index: 0 });
  const incomingBaseLabel = fixedLabel('', activeBase, vec(0, 0.08, 0.09), { kind: 'incoming-base', selection: { type: 'rna', index: 0 } });
  incomingBaseLabel.offset = [0, -15];
  const transcriptionPair = connector(scene, palette.joint, 0.014);
  const freeNucleotides = new THREE.Group(); scene.add(freeNucleotides);
  for (let i = 0; i < 8; i++) {
    const free = new THREE.Group(); freeNucleotides.add(free);
    const base = rna[(i * 7) % 30];
    const plate = mesh(baseGeometries[base], baseMaterials[base], free);
    plate.scale.set(0.75, 0.75, 0.45); plate.position.z = 0.1;
    mesh(sugarGeo, palette.rna, free).scale.setScalar(0.8);
    free.position.set(-5.0 + i * 1.4, -2.52 - (i % 3) * 0.22, -0.14 + (i % 2) * 0.38);
    free.rotation.set(i * 0.45, i * 0.31, i * 0.6);
  }

  const nucleus = new THREE.Group(); scene.add(nucleus);
  const exportSpace = refinedModels ? createNuclearExportSpace(nucleus, {
    geometry,
    ownMaterial: m => { materials.add(m); return m; },
  }) : null;
  const exportExhibit=refinedModels ? buildNuclearExportExhibit(nucleus,{geometry,material,mesh,tube,palette,ownMaterial:m=>{materials.add(m);return m;}}) : null;
  let nuclearPore;
  if (!exportExhibit) {
  const shellGeo = geometry(new THREE.SphereGeometry(1, 64, 36, 0, Math.PI * 2, 0.20, Math.PI - 0.20));
  shellGeo.rotateZ(-Math.PI / 2);
  for (let layer = 0; layer < 2; layer++) {
    const shell = material(layer ? '#b0d6d0' : '#96bcc3', { kind: 'membrane', transparent: true, opacity: layer ? 0.075 : 0.085, depthWrite: false, side: THREE.DoubleSide });
    shell.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\n diffuseColor.a *= 0.24 + 1.3 * pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 2.0);');
    };
    shell.customProgramCacheKey = () => 'nuclear-envelope-fresnel-1';
    const envelope = mesh(shellGeo, shell, nucleus, { type: 'pore' });
    envelope.position.set(-3.65, 0, 0.13);
    envelope.scale.set(3.55 + layer * 0.055, 3.05 + layer * 0.055, 2.25 + layer * 0.055);
    envelope.castShadow = false;
  }
  const poreCollar = mesh(geometry(createMembranePatchGeometry()), material('#adcac4', { kind: 'membrane', transparent: true, opacity: 0.075, depthWrite: false, side: THREE.DoubleSide }), nucleus, { type: 'pore' });
  poreCollar.rotation.y = Math.PI / 2; poreCollar.position.set(-0.17, 0, 0.13); poreCollar.scale.set(1.90, 2.50, 0.44);
  poreCollar.castShadow = false;
  nuclearPore = new THREE.Group(); nucleus.add(nuclearPore); nuclearPore.position.set(-0.10, 0, 0.13);
  for (let i = 0; i < 8; i++) {
    const angle = i / 8 * Math.PI * 2;
    const y = Math.cos(angle) * 0.62, z = Math.sin(angle) * 0.47;
    for (const side of [-1, 1]) {
      const node = ball(nuclearPore, palette.pore, vec(side * 0.15, y, z), [0.18, 0.13, 0.13], { type: 'pore' });
      node.rotation.x = angle; node.rotation.z = i * 0.15;
    }
    const channel = tube(nuclearPore, palette.pore, 0.045, 12, { type: 'pore' });
    channel.set([vec(-0.22, y, z), vec(0, y * 0.95, z * 0.95), vec(0.22, y, z)]);
  }
  } else nuclearPore=exportExhibit.pore;
  const nuclearLabels = [
    fixedLabel('细胞核内', nucleus, exportExhibit ? vec(-2.25,1.42,.20) : vec(-4.4,2.45,0), {kind:'compartment'}),
    fixedLabel('细胞质', nucleus, exportExhibit ? vec(2.25,1.42,.20) : vec(3.3,2.45,0), {kind:'compartment'}),
    fixedLabel('核孔 · 双层核膜', nuclearPore, exportExhibit ? vec(.05,1.65,.1) : vec(0.4,1.06,.1), { kind:'compartment',selection: { type: 'pore' } }),
  ];
  const exportCurve = new THREE.CatmullRomCurve3([
    vec(-5.45, -1.15, 0.14), vec(-5.15, -0.60, 0.18), vec(-4.05, -1.18, 0.18),
    vec(-2.8, -0.85, 0.15), vec(-1.3, -0.25, 0.13), vec(-0.1, 0, 0.13),
    vec(1.3, -0.38, 0.14), vec(3.2, -0.4, 0.16), vec(5.5, -0.18, 0.16),
  ], false, 'centripetal');

  const ribosome = new THREE.Group(); scene.add(ribosome);
  const bigSubunit = new THREE.Group(); ribosome.add(bigSubunit);
  const smallSubunit = new THREE.Group(); ribosome.add(smallSubunit);
  const ribosomeView=refinedModels ? createPolymeraseView({center:vec(0,.76,-.10),radii:new THREE.Vector2(1.42,.8),depthOffset:-.15}) : null;
  let ribosomeWindowEnabled=false;
  ribosomeView?.setEnabled(false);
  const exhibitKit = { geometry, material, mesh, tube, palette, bioSurface, refinedModels,workWindow:ribosomeView };
  if (detailed) buildRibosomeExhibit(bigSubunit, smallSubunit, exhibitKit);
  else {
  const largeBody = mesh(bindingCleftGeometry('ribosome-large', -0.36, 0.86, 0.26), palette.ribosome, bigSubunit, { type: 'ribosome' });
  largeBody.position.set(0.12, 0.82, -0.48); largeBody.scale.set(1.38, 0.91, 0.70);
  ball(bigSubunit, palette.ribosome, vec(-0.70, 0.45, -0.23), [0.47, 0.35, 0.46], { type: 'ribosome' });
  ball(bigSubunit, palette.ribosome, vec(0.77, 0.46, -0.31), [0.50, 0.30, 0.41], { type: 'ribosome' });
  const smallBody = mesh(bindingCleftGeometry('ribosome-small', 0.28, 0.90, 0.16), palette.smallRibosome, smallSubunit, { type: 'ribosome' });
  smallBody.position.set(0.10, -0.74, -0.21); smallBody.scale.set(1.34, 0.39, 0.65);
  if (!classic) {
    const innerLarge = material('#72866c', { kind: 'backbone' });
    tube(bigSubunit, innerLarge, 0.022, 30, { type: 'ribosome' }).set([
      vec(-0.99, 0.43, 0.10), vec(-0.57, 0.31, 0.19), vec(0, 0.26, 0.21), vec(0.60, 0.32, 0.19), vec(1.02, 0.46, 0.10),
    ]);
    tube(smallSubunit, material('#537e76', { kind: 'backbone' }), 0.020, 30, { type: 'ribosome' }).set([
      vec(-1.04, -0.56, 0.20), vec(-0.62, -0.50, 0.27), vec(0, -0.49, 0.28), vec(0.66, -0.51, 0.25), vec(1.07, -0.60, 0.15),
    ]);
  }
  }
  const ribosomeLabel = fixedLabel('核糖体', ribosome, vec(1.55, 0.55, 0.05), { selection: { type: 'ribosome' } });
  const siteLabels = TRANSLATION_SITES.map(site => fixedLabel(site.key, smallSubunit, vec(site.x, site.y, site.z), { kind: 'site', offset: [0, -30] }));
  siteLabels.forEach(label=>{label.element.style.pointerEvents='auto';label.element.tabIndex=0;});
  const siteGuides = TRANSLATION_SITES.map((site, index) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText='position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;';
    path.setAttribute('fill','none'); path.setAttribute('stroke','#c9d5c5');path.setAttribute('stroke-width','1');path.setAttribute('opacity','.65');
    svg.append(path); overlay.prepend(svg);
    const ring = mesh(geometry(new THREE.TorusGeometry(.050,.008,6,20)), material('#c4cdb6',{kind:'backbone',roughness:.85,specularIntensity:.08}), smallSubunit);
    ring.position.set(site.x,site.y,site.z);ring.name=`site-anchor-${site.key}`;
    siteLabels[index].element.title=site.description;
    return { path, svg, ring };
  });
  const siteNote = fixedLabel('E / P / A · 拓展位点', ribosome, vec(1.78, 0.03, 0.12), { kind: 'site-note' });
  const readBracket = new THREE.Group(); scene.add(readBracket);
  const bracketLine = connector(readBracket, palette.highlight, 0.023);
  connect(bracketLine, vec(-0.43, 0, 0), vec(0.43, 0, 0));
  const bracketLeft = connector(readBracket, palette.highlight, 0.023);
  connect(bracketLeft, vec(-0.43, 0, 0), vec(-0.43, 0.13, 0));
  const bracketRight = connector(readBracket, palette.highlight, 0.023);
  connect(bracketRight, vec(0.43, 0, 0), vec(0.43, 0.13, 0));
  const codonLabel = fixedLabel('起始密码子 AUG', readBracket, vec(0, -0.23, 0), { kind: 'codon', selection: { type: 'rna', indices: [6, 7, 8] } });
  const readDirection = fixedLabel('mRNA 5′ → 3′', ribosome, vec(-0.4, -1.14, 0.55), { kind: 'direction', selection: { type: 'rna' } });

  const makeTrna = (name, mat) => {
    const group = new THREE.Group(); scene.add(group);
    if (detailed) buildTrnaExhibit(group, mat, exhibitKit);
    else {
    const shape = [vec(0, 0, 0), vec(-0.13, 0.37, 0), vec(-0.10, 1.05, 0), vec(-0.03, 1.5, 0), vec(0.44, 1.63, 0)];
    tube(group, mat, 0.073, 36, { type: 'trna' }).set(shape);
    const partner = [vec(0.17, 0.08, 0), vec(0.10, 0.44, 0), vec(0.09, 1.06, 0), vec(0.13, 1.32, 0), vec(0.46, 1.47, 0)];
    tube(group, mat, 0.040, 30, { type: 'trna' }).set(partner);
    tube(group, mat, 0.037, 22, { type: 'trna' }).set([
      vec(-0.07, 0.16, 0), vec(-0.35, 0.03, 0), vec(0, -0.12, 0), vec(0.35, 0.03, 0), vec(0.12, 0.18, 0),
    ]);
    // Folded D/T loops and a kinked acceptor arm give tRNA its compact three-dimensional L shape.
    tube(group, mat, 0.045, 28, { type: 'trna' }).set([
      vec(-0.09, 0.53, 0), vec(-0.39, 0.63, 0.04), vec(-0.50, 0.93, 0.08), vec(-0.27, 1.13, 0.08), vec(-0.05, 1.04, 0),
    ]);
    tube(group, mat, 0.042, 28, { type: 'trna' }).set([
      vec(0.10, 0.80, -0.03), vec(0.34, 0.94, -0.11), vec(0.35, 1.19, -0.10), vec(0.13, 1.32, 0),
    ]);
    for (let k = 0; k < 13; k++) {
      const t = k / 12;
      const bead = mesh(sugarGeo, mat, group, { type: 'trna' });
      bead.scale.setScalar(0.7);
      bead.position.set(-0.105 + 0.025 * Math.sin(t * 8), 0.23 + t * 1.04, Math.sin(t * 7) * 0.025);
    }
    for (const y of [0.43, 0.67, 0.9, 1.12]) {
      const rung = connector(group, palette.joint, 0.021);
      connect(rung, vec(-0.1, y, 0), vec(0.10, y + 0.02, 0));
    }
    }
    const anticodon = [], anticodonPlates = [];
    for (let j = 0; j < 3; j++) {
      const plate = mesh(baseGeometries.U, mat, group, { type: 'trna' });
      plate.position.set((j - 1) * 0.35, -0.025, 0.10);
      plate.quaternion.setFromUnitVectors(Z_AXIS, vec(0, -1, 0));
      plate.scale.set(0.9, 0.9, 0.38);
      anticodonPlates.push(plate);
      anticodon.push(domLabel('', objectAnchor(plate, vec(0, 0.02, 0.07)), { kind: 'anticodon', selection: { type: 'trna' }, index: j }));
    }
    const label = fixedLabel(name, group, vec(-0.35, 1.17, 0.15), { selection: { type: 'trna' } });
    const carrier = vec(0.44, 1.63, 0);
    return { group, anticodon, anticodonPlates, label, carrier };
  };
  const pTrna = makeTrna('载链 tRNA', palette.trna);
  const aTrna = makeTrna('氨酰 tRNA', palette.trna);
  const eTrna = makeTrna('空 tRNA', palette.emptyTrna);
  const initiatorAmino = mesh(residueGeometries[0], aminoMaterials[0], pTrna.group, { type: 'trna', index: 0 });
  initiatorAmino.scale.setScalar(0.165);
  initiatorAmino.position.copy(pTrna.carrier);
  const initiatorAminoLabel = fixedLabel('Met', pTrna.group, pTrna.carrier.clone().add(vec(0.06, 0.28, 0)), { kind: 'residue', selection: { type: 'trna', index: 0 } });
  const incomingAmino = mesh(residueGeometries[0], aminoMaterials[0], aTrna.group, { type: 'trna', index: 0 });
  incomingAmino.scale.setScalar(0.165);
  incomingAmino.position.copy(aTrna.carrier);
  const incomingAminoLabel = fixedLabel('Met', aTrna.group, aTrna.carrier.clone().add(vec(0.06, 0.28, 0)), { kind: 'residue', selection: { type: 'trna', index: 0 } });
  const pairMaterial = material('#c4ccbb', { transparent: true, opacity: 0.72 });
  const pairLinks = [pTrna, aTrna].map(() => Array.from({ length: 3 }, () => connector(scene, pairMaterial, 0.017)));

  const peptideGroup = new THREE.Group(); scene.add(peptideGroup);
  const peptideBeads = [], peptideLinks = [], peptideLabels = [], peptideLinkCurves=[];
  for (let i = 0; i < 5; i++) {
    const bead = mesh(residueGeometries[i], aminoMaterials[i], peptideGroup, { type: 'peptide', index: i });
    bead.scale.set(0.18, 0.15 + (i % 2) * 0.035, 0.17);
    bead.rotation.set(i * 0.71, i * 0.35, i * 0.47);
    peptideBeads.push(bead);
    peptideLabels.push(domLabel(aaName(i), objectAnchor(bead, vec(0, 0.27, 0.02)), { kind: 'residue', selection: { type: 'peptide', index: i }, index: i, offset: [0, i % 2 ? 8 : -8] }));
    if (i) {
      const curve=refinedModels ? tube(peptideGroup,palette.joint,.024,12) : null;
      peptideLinkCurves.push(curve);peptideLinks.push(curve?.object || connector(peptideGroup,palette.joint,.033));
    }
  }
  const chainLabel = fixedLabel('肽链 · N 端 → C 端', peptideGroup, vec(-0.50, -0.38, 0), { selection: { type: 'peptide' } });
  let shownPeptide = 0;
  const peptideN = domLabel('N', () => peptideGroup.localToWorld(peptideBeads[0].position.clone().add(vec(-0.30, -0.035, 0))), { kind: 'endpoint' });
  const peptideC = domLabel('C', () => {
    const position = peptideGroup.localToWorld(peptideBeads[Math.max(0, shownPeptide - 1)].position.clone().add(vec(0.30, -0.035, 0)));
    const tr = snapshot?.translation;
    if (!classic && currentKey === 'translation' && tr?.mode === 'elongate' && tr.subphase === 'bond' && tr.phase < 0.7 && shownPeptide > 0) {
      position.lerp(aTrna.group.localToWorld(aTrna.carrier.clone().add(vec(0.30, -0.035, 0.025))), smooth((tr.phase - 0.56) / 0.14));
    }
    return position;
  }, { kind: 'endpoint' });

  const releaseFactor = new THREE.Group(); scene.add(releaseFactor);
  const factorGeo = geometry(createOrganicGeometry(refinedModels ? 'factor-soft' : 'factor', 'high'));
  const factorTip = mesh(factorGeo, palette.factor, releaseFactor, { type: 'ribosome' });
  factorTip.position.set(0, 0.17, 0); factorTip.scale.set(0.28, 0.34, 0.24);
  const factorStem = connector(releaseFactor, palette.factor, 0.085);
  connect(factorStem, vec(0, 0.30, 0), vec(0.18, 1.06, 0));
  const factorHead = mesh(factorGeo, palette.factor, releaseFactor, { type: 'ribosome' });
  factorHead.position.set(0.20, 1.18, 0); factorHead.rotation.z = 0.3; factorHead.scale.set(0.34, 0.42, 0.28);
  const factorLabel = fixedLabel('释放因子', releaseFactor, vec(0.27, 1.75, 0), { selection: { type: 'ribosome' } });

  // Each adapter follows its own local coordinates and protects reaction anchors.
  // Shared tRNA/residue materials receive one hook, including their repeated copies.
  const collectMaterials = (group, accept) => {
    const result = new Set();
    group.traverse(part => { if (part.isMesh && accept(part)) result.add(part.material); });
    return [...result];
  };
  if (refinedModels) {
    livingControllers.push(createMolecularLivingMotion({ group: ribosome, kind: 'ribosome', materials: collectMaterials(ribosome, part => part.name.startsWith('translation-')) }));
    const trnaJoint = material(palette.joint.color.clone(), { kind: 'backbone', roughness: .9, specularIntensity: .05 });
    for (const trna of [pTrna, aTrna, eTrna]) trna.group.traverse(part => {
      if (part.isMesh && part.material === palette.joint) part.material = trnaJoint;
    });
    const trnaMaterials = new Set([pTrna, aTrna, eTrna].flatMap(trna => collectMaterials(trna.group, part => ![incomingAmino, initiatorAmino].includes(part))));
    livingControllers.push(createMolecularLivingMotion({ group: pTrna.group, kind: 'trna', materials: [...trnaMaterials] }));
    aminoMaterials.forEach((mat, i) => livingControllers.push(createMolecularLivingMotion({ group: peptideBeads[i], kind: 'peptide', materials: [mat] })));
    if (exportExhibit) livingControllers.push(createMolecularLivingMotion({ group: nuclearPore, kind: 'pore', materials: collectMaterials(nuclearPore, () => true) }));
  }

  let snapshot = null;
  let options = { labels: true, expanded: false, selected: null, reducedMotion: false };
  let currentKey = null;
  let disposed = false;
  let width = 1, height = 1;
  let baseDistance = 15;
  let followReading = true;
  let viewMode = 'overview';
  const cameraModes = { dna:'overview', transcription:'reaction', export:'reaction', translation:'reaction', comparison:'overview' };
  let presentationZoom = 1, manualCameraBlend = null;
  let polymeraseVisualSource = classic ? 'classic' : 'fallback-loading';
  let polymeraseAssetError = null, polymeraseLoadMs = null;
  let idleTime = 0, idleStamp = null, idleAdvancing = false, dragging = false;
  const dnaRotation = createDnaIdleRotation();
  let rotationPlayStart = null, dnaSpin = 0;
  let entranceActive = false, entranceTime = 0, entranceMobile = false, entrancePreparation = 0, assetReady = Promise.resolve(), assetReadySettled = true;
  const entranceLight = {key:keyLight.intensity,fill:fillLight.intensity,rim:rimLight.intensity};
  const selectedEmissive = new THREE.Color('#a68043');
  const normalEmissive = new THREE.Color('#000000');

  function visible(label, value) { label.visible = !!value; }
  // Presentation progress is continuous, while state.mjs remains the owner of chemical commits.
  function transcriptionAdvance(data) {
    const index = clamp(data.transcription?.index ?? 0, 0, 29);
    return Math.min(29, index + smooth(clamp(((data.transcription?.phase ?? 0) - 0.72) / 0.28)));
  }
  function nascentPoint(i, advance, target = vec(0, 0, 0)) {
    const age = Math.max(0, advance - i);
    return target.set((i - 14.5) * 0.35, 0.14 - 1.44 * smooth(age / 4.5) - 0.10 * Math.sin(age * 0.35), 0.095 + 0.48 * smooth(age / 4.5) + 0.08 * Math.sin(age * 0.42));
  }
  function nascentDirection(i, advance) {
    const angle = smooth(Math.max(0, advance - i) / 4.5) * Math.PI;
    return vec(0, -Math.cos(angle), Math.sin(angle));
  }
  function bezierOffset(a, b, c, d, t) {
    const u = 1 - clamp(t), v = 1 - u;
    return a.clone().multiplyScalar(u * u * u).addScaledVector(b, 3 * u * u * v).addScaledVector(c, 3 * u * v * v).addScaledVector(d, v * v * v);
  }
  function flexRna(point, i, key, data, influence = 1) {
    if (classic || options.reducedMotion || influence <= 0) return point;
    const time = data.time;
    point.y += 0.014 * influence * Math.sin(time * 0.74 - i * 0.36);
    point.z += 0.009 * influence * Math.sin(time * 0.63 - i * 0.31 + 0.9);
    return point;
  }
  function setDna(key, data) {
    const time = data.time;
    const carry = refinedModels && key === 'export' && time < 35;
    const preview = refinedModels && key === 'dna' && time > 3.25;
    const compare = refinedModels && time >= 61.5;
    const departingNucleus=refinedModels && key==='translation' && time<39.5;
    if (carry) key = 'transcription';
    if (departingNucleus) key = 'export';
    if (compare) key = 'comparison';
    dnaGroup.visible = key !== 'translation';
    dnaGroup.position.set(key === 'export' ? -3.65 : 0, key === 'export' ? 0.95 : key === 'comparison' ? 1.18 : 0.35, 0);
    dnaGroup.scale.setScalar(key === 'export' ? 0.48 : key === 'comparison' ? 0.90 : 1);
    // Portrait entry uses the stage's height while preserving all thirty pairs
    // and both ends. The reaction and sequence views retain their reading axis.
    const flatten = smooth((time - 2.7) / 1.5);
    dnaGroup.rotation.z = refinedModels && key === 'dna' && (entranceActive ? entranceMobile : width < 600) && !options.expanded ? .90 * (1 - flatten) : 0;
    if (dnaGroup.rotation.z) dnaGroup.position.y = mix(1.45, .35, flatten);
    if (carry) {
      const transfer = smooth(time - 34);
      dnaGroup.position.lerp(vec(-3.65, .95, 0), transfer);
      dnaGroup.scale.setScalar(mix(1, .48, transfer));
    }
    if(departingNucleus)dnaGroup.position.x-=11*smooth((time-38)/1.5);
    if (compare) {
      const reveal = smooth(time - 61.5);
      dnaGroup.scale.setScalar(.90 * Math.max(.00001, reveal));
      dnaGroup.position.y = mix(2.7, 1.18, reveal);
    }
    const isHelix = ['dna', 'transcription', 'export'].includes(key) && !options.expanded;
    const bubbleIndex = carry ? 29 : transcriptionAdvance(data);
    const closedPairs = [];
    for (let i = 0; i < 30; i++) {
      const x = (i - 14.5) * 0.35;
      const angle = i * Math.PI / 5.1 + (refinedModels && !options.reducedMotion ? dnaSpin : 0);
      const opening = refinedModels ? smooth((time - 3.5) / .8) * (1 - smooth((time - 34) / .8)) : 1;
      const bubble = key === 'transcription' || preview ? Math.exp(-Math.pow((i - bubbleIndex) / 2.95, 2)) * opening : 0;
      const restingY = isHelix ? Math.cos(angle) * 0.66 : 0.47;
      const restingZ = isHelix ? Math.sin(angle) * 0.66 : 0.015;
      const oppositeAngle = angle + Math.PI - (detailed ? .46 : 0);
      const templateY = detailed && isHelix ? Math.cos(oppositeAngle) * .66 : -restingY;
      const templateZ = detailed && isHelix ? Math.sin(oppositeAngle) * .66 : -restingZ;
      codingPoints[i].set(x, mix(restingY, 1.01, bubble), mix(restingZ, -0.015, bubble));
      templatePoints[i].set(x, mix(templateY, -1.01, bubble), mix(templateZ, -0.015, bubble));
      if (bubble < .18) closedPairs.push(i);
      const center = codingPoints[i].clone().add(templatePoints[i]).multiplyScalar(0.5);
      for (let j = 0; j < 2; j++) {
        const end = j === 0 ? codingPoints[i] : templatePoints[i];
        dnaSugars[i][j].position.copy(end);
        dnaSugars[i][j].rotation.set(i * 0.44, j * 0.8, i * 0.21);
        const plate = dnaPlates[i][j];
        const direction = center.clone().sub(end);
        const unitDirection = direction.clone().normalize();
        // Opening separates the bases locally; their lengths do not stretch across the bubble.
        const restingLength = direction.length() - (detailed ? .035 : 0);
        const plateLength = key === 'transcription' || preview ? mix(restingLength, detailed ? .42 : .47, bubble) : restingLength;
        const base = j === 0 ? coding[i] : template[i];
        const compactLength = /A|G/.test(base) ? .39 : .30;
        const reach = key === 'transcription' || preview ? mix(direction.length() - .03, .4284, bubble) : direction.length() - .03;
        plate.position.copy(end).addScaledVector(unitDirection, detailed ? reach - compactLength * .5 : plateLength * .52);
        plate.quaternion.setFromAxisAngle(X_AXIS, -Math.atan2(unitDirection.y, unitDirection.z));
        if (refinedModels) {
          dnaSugars[i][j].quaternion.copy(plate.quaternion);
          dnaSugars[i][j].rotateZ(j ? -.22 : .22);
        }
        plate.scale.z = Math.max(0.01, (detailed ? compactLength : plateLength) / 0.52);
        if (detailed) {
          const length = Math.max(.01, reach - compactLength);
          attachmentPose.position.copy(end).addScaledVector(unitDirection, length * .5);
          attachmentPose.quaternion.setFromUnitVectors(THREE.Object3D.DEFAULT_UP, unitDirection);
          attachmentPose.scale.set(.017, length, .017); attachmentPose.updateMatrix();
          dnaAttachments.setMatrixAt(i * 2 + j, attachmentPose.matrix);
        }
        const active = key === 'transcription' && Math.abs(i - bubbleIndex) < 1.2;
        plate.scale.x = active ? 1.12 : 1;
        plate.scale.y = 1;
        visible(dnaGlyphs[i][j], dnaGroup.visible && !['export','translation'].includes(data.chapter.key) && (!compare || time>61.9));
      }
    }
    codingRail.set(codingPoints); templateRail.set(templatePoints);
    if (dnaAttachments) dnaAttachments.instanceMatrix.needsUpdate = true;
    if (detailed && dnaGroup.visible && key !== 'export' && !entranceActive) {
      dnaGroup.updateMatrixWorld(true);
      for (const i of closedPairs) pairingBetween(dnaPlates[i][0], dnaPlates[i][1]);
    }
    dnaLabels.forEach((l) => visible(l, dnaGroup.visible && !['export','translation'].includes(data.chapter.key) && (!compare || time>61.9)));
    dnaLabels[2].offset = dnaGroup.rotation.z ? [60, -34] : [0, 0];
    visible(dnaTitle, key === 'dna' || key === 'comparison');
    polymerase.visible = key === 'transcription' || preview;
    if (refinedModels) stageOpacity(polymerase, 1);
    polymerase.scale.setScalar(refinedModels?1-.85*smooth((time-34)/.8):1);
    freeNucleotides.visible = classic && polymerase.visible;
    activeNucleotide.visible = false;
    visible(polyLabel, polymerase.visible && (!carry || time<34.2));
    visible(templateWindowLabel, detailed && polymerase.visible && !carry && viewMode === 'reaction');
    visible(codingWindowLabel, detailed && polymerase.visible && !carry && viewMode === 'reaction');
    visible(incomingBaseLabel, false);
    transcriptionPair.visible = false;
    if (polymerase.visible) {
      polymerase.position.set((bubbleIndex - 14.5) * 0.35, 0.35, 0.05);
      if(refinedModels && time<4.05)polymerase.position.y+=2.5*(1-smooth((time-3.25)/.8));
      if (carry) {polymerase.position.y += 2.7*smooth(time-34);polymerase.position.z-=smooth(time-34);}
    }
  }

  const rnaPoseA = Array.from({ length:30 }, () => vec(0,0,0));
  const rnaPoseB = Array.from({ length:30 }, () => vec(0,0,0));
  const rnaDirsA = Array.from({ length:30 }, () => vec(0,1,0));
  const rnaDirsB = Array.from({ length:30 }, () => vec(0,1,0));
  const rnaDirections = Array.from({ length:30 }, () => vec(0,1,0));
  const strandBlend = createStrandPoseBlend({preferredTurnAxis:vec(0,1,0),matchSpan:true}), directionTurn = new THREE.Quaternion(), directionPartial = new THREE.Quaternion();
  function fillRnaPose(key, time, points, directions) {
    const state = derive(time), exportPhase = clamp((time - 34) / 4);
    const advance = key === 'transcription' && time >= 34 ? 29 : transcriptionAdvance(state);
    for (let i=0; i<30; i++) {
      if (key === 'transcription') {
        nascentPoint(i, advance, points[i]);
        flexRna(points[i], i, key, state, smooth((advance - i - 3) / 7));
        directions[i].copy(nascentDirection(i, advance));
      } else if (key === 'export') {
        if(refinedModels) {
          sampleExportPoint(i,time,points[i],directions[i]);
          flexRna(points[i],i,key,state,smooth((Math.abs(points[i].x)-.9)/1.45));
        } else {
          const t = mix(.015, .680, smooth(exportPhase)) + (29-i)/29*.310;
          points[i].copy(exportCurve.getPoint(clamp(t)));
          flexRna(points[i], i, key, state, smooth(Math.abs(points[i].x + .1)/1.45)*Math.sin(exportPhase*Math.PI)**2);
          directions[i].set(0,1,0).addScaledVector(exportCurve.getTangent(clamp(t)), -.24).normalize();
        }
      } else {
        const x=(i-14.5)*.35, codon=state.translation.ribosomeCodon ?? (time>=60?4:0);
        const readCenter=(7+codon*3-14.5)*.35;
        const bend=key==='translation'?smooth((Math.abs(x-readCenter)-1.62)/2.7):1;
        points[i].set(x,(key==='comparison'?-.15:-.38)+bend*Math.sin(x*.90)*.16,.32+bend*Math.sin(x*.65)*.12);
        if(key==='translation')flexRna(points[i],i,key,state,bend);
        directions[i].set(0,1,0);
      }
    }
  }
  function setRna(key, data) {
    const phase = clamp((data.time - data.chapter.start) / Math.max(0.001, data.chapter.end - data.chapter.start));
    shownRna = key === 'transcription' ? clamp(data.rnaCount, 0, 30) : key === 'dna' ? 0 : 30;
    shownRna = Math.floor(shownRna);
    rnaGroup.visible = shownRna > 0;
    rnaGroup.position.set(0, 0, 0); rnaGroup.scale.setScalar(1);
    const time=data.time;
    const passage = refinedModels ? smooth((time-34)/1.6)*(1-smooth((time-38)/1.5)) : key==='export'?1:0;
    let from=null,to=null,fromTime=time,blend=0;
    if(refinedModels && time>=34 && time<35.2) {from='transcription';to='export';fromTime=34;blend=smooth((time-34)/1.2);}
    else if(refinedModels && time>=38 && time<39.5) {from='export';to='translation';fromTime=38;blend=smooth((time-38)/1.5);}
    else if(refinedModels && time>=61.5 && time<62.8) {from='translation';to='comparison';fromTime=Math.min(time,61.999999);blend=smooth((time-61.5)/1.3);}
    if(from) {
      fillRnaPose(from,fromTime,rnaPoseA,rnaDirsA);fillRnaPose(to,time,rnaPoseB,rnaDirsB);
      strandBlend.update(rnaPoseA,rnaPoseB,blend,rnaPoints);
      if(from!=='translation') {
        const center=vec(0,0,0),arc=Math.sin(blend*Math.PI),compact=from==='transcription'?1-.30*arc*arc:1;
        rnaPoints.forEach(point=>center.addScaledVector(point,1/30));
        rnaPoints.forEach(point=>point.sub(center).multiplyScalar(compact).add(center).add(vec(0,from==='transcription'?-.35*arc:0,1.0*arc)));
      }
      for(let i=0;i<30;i++) {
        directionTurn.setFromUnitVectors(rnaDirsA[i],rnaDirsB[i]);
        directionPartial.identity().slerp(directionTurn,blend);
        rnaDirections[i].copy(rnaDirsA[i]).applyQuaternion(directionPartial);
      }
    } else fillRnaPose(key,time,rnaPoints,rnaDirections);
    if(refinedModels && time>=34 && time<35.2) {
      // Finish arranging the strand on the nuclear side before the 5′ end
      // enters the pore. The old morph crossed the moving membrane sideways.
      const rightmost=Math.max(...rnaPoints.map(point=>point.x));
      const correction=Math.min(0,envelopePositionX(time)-.82-rightmost);
      for(const point of rnaPoints)point.x+=correction;
    }
    if(refinedModels && time>=38 && time<39.5) {
      // Reorient for translation only in the cytoplasm; the departing envelope
      // must never sweep through the same strand a second time.
      const leftmost=Math.min(...rnaPoints.map(point=>point.x));
      const correction=Math.max(0,envelopePositionX(time)+.82-leftmost);
      for(const point of rnaPoints)point.x+=correction;
    }
    for (let i = 0; i < 30; i++) {
      const baseDirection = rnaDirections[i];
      rnaBases[i].position.copy(rnaPoints[i]).addScaledVector(baseDirection, 0.18);
      rnaBases[i].quaternion.setFromUnitVectors(Z_AXIS, baseDirection);
      rnaSugars[i].position.copy(rnaPoints[i]);
      rnaSugars[i].rotation.set(i * 0.29, i * 0.42, i * 0.2);
      rnaSugars[i].scale.setScalar(detailed ? mix(1,.60,passage) : 1);
      rnaSugars[i].visible = i < shownRna;
      rnaBases[i].visible = i < shownRna;
      const indices = data.activeIndices || [];
      const isActive = key === 'translation' && indices.includes(i);
      rnaBases[i].scale.set(detailed ? mix(isActive?1.12:1,.46,passage) : isActive?1.12:1,1,detailed?mix(.54,.42,passage):.54);
      const annotation=data.time<61.5?1:smooth((data.time-62.65)/.25);
      rnaGlyphs[i].element.style.opacity=String((1-passage)*annotation);
      visible(rnaGlyphs[i], i < shownRna && passage < .98 && annotation>.02);
    }
    if (detailed) {
      const joining = key === 'transcription' && shownRna > 0 && data.transcription.index === shownRna
        ? smooth(clamp((data.transcription.phase - .58) / .12)) : 0;
      // Clip one complete spline instead of appending a new control point:
      // adding a control point can change the preceding tangent at join start.
      rnaRail.set(rnaPoints, Math.max(0, shownRna - 1 + joining) / 29);
    } else {
      const railPoints = rnaPoints.slice(0, shownRna);
      rnaRail.set(railPoints);
      rnaRail.object.userData.end = railPoints.at(-1)?.toArray() || null;
    }
    visible(rnaStart, shownRna > 0);
    visible(rnaEnd, shownRna > 0);
    const reactionEnd = detailed && key === 'transcription' && viewMode === 'reaction';
    rnaEnd.element.textContent = reactionEnd ? '3′ · 延长端' : '3′';
    rnaEnd.offset = reactionEnd ? [28, 19] : [0, 0];
    visible(rnaTitle, ['translation', 'comparison'].includes(key));
    nucleus.visible = refinedModels ? time>=34 && time<39.5 : key==='export';
    nucleus.position.x = refinedModels ? envelopePositionX(time) : 0;
    if(refinedModels)stageOpacity(nucleus,smooth((time-34)/.75)*(1-smooth((time-38)/1.5)));
    exportExhibit?.update(data.time,!options.reducedMotion);
    nuclearLabels.forEach((l) => visible(l, nucleus.visible));
    if (key === 'transcription') {
      const index = Math.round(clamp(data.transcription?.index ?? 0, 0, 29));
      const cycle = clamp(data.transcription?.phase ?? 0);
      const destination = nascentPoint(index, transcriptionAdvance(data));
      const arrival = smooth(clamp(cycle / 0.58));
      const offset = classic ? vec(1.70 * (1 - arrival), -1.55 * (1 - arrival), 0.30 * Math.sin(arrival * Math.PI)) : bezierOffset(
        vec(1.65, -1.35, 0.28), vec(1.83, -0.52, 0.43), vec(0.49, 0.13, 0.07), vec(0, 0, 0), arrival,
      );
      const incoming = destination.clone().add(offset);
      activeNucleotide.position.copy(incoming);
      activeNucleotide.quaternion.identity();
      if (!classic) {
        const alignment = smooth(clamp((cycle - 0.18) / 0.36));
        activeNucleotide.quaternion.setFromEuler(new THREE.Euler(0.30, -0.50, 0.75)).slerp(new THREE.Quaternion(), alignment);
      }
      activeNucleotide.visible = cycle < 0.7;
      activeBase.geometry = baseGeometries[rna[index]];
      activeBase.material = classic ? baseMaterials[rna[index]] : enteringBases[rna[index]];
      const entrance = classic || options.reducedMotion ? 1 : smooth(clamp(cycle / .10));
      activeBase.material.opacity = entrance;
      enteringSugar.opacity = entrance;
      const direction = nascentDirection(index, transcriptionAdvance(data));
      activeBase.position.copy(direction).multiplyScalar(0.18);
      activeBase.quaternion.setFromUnitVectors(Z_AXIS, direction);
      activeBase.scale.set(1, 1, 0.54);
      activeBase.userData.selection = { type: 'rna', index };
      activeSugar.userData.selection = { type: 'rna', index };
      activeSugar.rotation.copy(rnaSugars[index].rotation);
      incomingBaseLabel.element.textContent = cycle < 0.54 ? `${rna[index]} · 游离核苷酸` : rna[index];
      incomingBaseLabel.element.style.opacity = String(entrance);
      incomingBaseLabel.element.dataset.index = String(index);
      incomingBaseLabel.selection = { type: 'rna', index };
      visible(incomingBaseLabel, activeNucleotide.visible);
      const paired = cycle >= 0.58 && cycle < 0.9;
      transcriptionPair.visible = !detailed && paired;
      if (paired) {
        scene.updateMatrixWorld(true);
        const terminalBase = activeNucleotide.visible ? activeBase : rnaBases[index];
        if (detailed) pairingBetween(dnaPlates[index][1], terminalBase);
        else connect(transcriptionPair, dnaPlates[index][1].getWorldPosition(vec(0, 0, 0)), terminalBase.getWorldPosition(vec(0, 0, 0)));
      }
    }
  }

  const complementRna = (b) => ({ A: 'U', U: 'A', G: 'C', C: 'G' }[b] || '');
  function setAnticodon(trna, codonIndex, show) {
    const index = Math.round(clamp(codonIndex, 0, 4));
    const codon = rna.slice(6 + index * 3, 9 + index * 3);
    trna.anticodon.forEach((label, j) => {
      const base = complementRna(codon[j]);
      label.element.textContent = base;
      trna.anticodonPlates[j].geometry = baseGeometries[base];
      trna.anticodonPlates[j].material = baseMaterials[base];
      visible(label, show);
      label.selection = { type: 'trna', index };
      label.element.dataset.codonIndex = String(index);
    });
    trna.group.userData.codonIndex = index;
    trna.label.selection = { type: 'trna', index };
    trna.label.element.dataset.codonIndex = String(index);
    trna.group.userData.site = trna === pTrna ? 'P' : trna === aTrna ? 'A' : 'E';
    trna.group.traverse((object) => { if (object.userData.selection) object.userData.selection = { type: 'trna', index }; });
    visible(trna.label, show);
  }
  function setPeptide(count, anchor, key, layoutCount = count) {
    count = Math.round(clamp(count, 0, 5));
    shownPeptide = count;
    peptideGroup.visible = count > 0;
    peptideGroup.position.copy(anchor);
    peptideGroup.rotation.set(0, 0, 0);
    for (let i = 0; i < 5; i++) {
      const reverse = Math.max(0, layoutCount - 1 - i);
      peptideBeads[i].position.set(-reverse * 0.41, reverse * 0.10 + Math.sin(reverse * 0.95) * 0.07, 0.025 + Math.sin(reverse * 0.7) * 0.065);
      if(refinedModels && !options.reducedMotion) {
        const influence=1-Math.exp(-reverse*reverse*.45),time=snapshot?.time || 0;
        peptideBeads[i].position.y+=.018*influence*Math.sin(time*.63+reverse*.70);
        peptideBeads[i].position.z+=.012*influence*Math.sin(time*.55+reverse*.54);
      }
      peptideBeads[i].visible = i < count;
      const annotation=(snapshot?.time||0)<61.5?1:smooth(((snapshot?.time||0)-62.65)/.25);
      peptideLabels[i].element.style.opacity=String(annotation);
      visible(peptideLabels[i], i < count && annotation>.02 && (key === 'comparison' || key === 'translation'));
      if (i > 0) {
        peptideLinks[i - 1].visible = i < count;
        const a=peptideBeads[i-1].position,b=peptideBeads[i].position;
        if(peptideLinkCurves[i-1])peptideLinkCurves[i-1].set([a,a.clone().lerp(b,.5).add(vec(0,.014,.010)),b]);
        else connect(peptideLinks[i - 1], a, b);
      }
    }
    visible(chainLabel, count > 0 && key === 'comparison');
    visible(peptideN, count > 0);
    visible(peptideC, count > 0);
  }
  function comparisonPeptideAnchor(time) {
    const f=smooth((time-61.5)/1.3),arc=Math.sin(f*Math.PI);
    return vec(1.365,2.63,.22).lerp(vec(.82,-1.25,.20),f).add(vec(1.8*arc,0,1.2*arc));
  }

  function setTranslation(key, data) {
    const active = key === 'translation';
    if(!active && ribosomeWindowEnabled) {ribosomeWindowEnabled=false;ribosomeView?.setEnabled(false);}
    ribosome.visible = active;
    pTrna.group.visible = false; aTrna.group.visible = false; eTrna.group.visible = false;
    releaseFactor.visible = false; readBracket.visible = active;
    visible(ribosomeLabel, active); siteLabels.forEach((l) => visible(l, false));
    siteGuides.forEach(guide => { guide.ring.visible=false; guide.svg.style.display='none'; });
    visible(siteNote, active && !classic);
    visible(factorLabel, false); visible(codonLabel, active);
    visible(readDirection, active && width < 600);
    visible(incomingAminoLabel, false);
    visible(initiatorAminoLabel, false);
    initiatorAmino.visible = false;
    setAnticodon(pTrna, 0, false); setAnticodon(aTrna, 0, false); setAnticodon(eTrna, 0, false);
    pairLinks.flat().forEach((link) => { link.visible = false; });
    if (key === 'comparison') {
      const anchor=refinedModels?comparisonPeptideAnchor(data.time):vec(.82,-1.25,.20);
      setPeptide(5, anchor, key);
      return;
    }
    if (!active) { setPeptide(0, vec(0, 0, 0), key); return; }
    const tr = data.translation || {};
    const mode = tr.mode || 'scan';
    const sub = tr.subphase || 'enter';
    const phase = clamp(tr.phase ?? data.phase);
    const current = Math.round(clamp(tr.codonIndex, 0, 5));
    const riboCodon = clamp(tr.ribosomeCodon ?? tr.pCodonIndex ?? (['disassemble', 'complete'].includes(mode) ? 4 : Math.max(0, current - 1)), 0, 5);
    const readX = (7 + riboCodon * 3 - 14.5) * 0.35;
    ribosome.position.set(mode === 'scan' ? mix(-4.65, -2.625, smooth(phase)) : readX, 0, 0);
    ribosome.quaternion.identity();
    if(refinedModels && (mode==='scan'||mode==='initiate') && data.time<39.5) {
      const index=mode==='scan'?mix(1.214285714,7.0,smooth(phase)):7,low=Math.floor(index),fraction=index-low;
      const point=rnaPoints[low].clone().lerp(rnaPoints[Math.min(29,low+1)],fraction);
      ribosome.position.copy(point).add(vec(0,.38,-.32));
      const tangent=rnaPoints[Math.min(29,low+1)].clone().sub(rnaPoints[low]).normalize();
      ribosome.quaternion.setFromUnitVectors(vec(1,0,0),tangent);
    }
    const pIndex = Math.round(clamp(tr.pCodonIndex ?? Math.max(0, current - 1), 0, 4));
    const aIndex = Math.round(clamp(tr.aCodonIndex ?? current, 0, 5));
    const pX = ribosome.position.x;
    const aX = pX + SITE_SPACING;
    const carrierZ = classic ? 0.57 : 0.22;
    pTrna.group.position.set(pX, 0.12, carrierZ);
    aTrna.group.position.set(aX, 0.12, carrierZ);
    eTrna.group.position.set(pX - SITE_SPACING, 0.12, classic ? 0.55 : carrierZ);
    if(refinedModels && data.time<39.5)[pTrna,aTrna,eTrna].forEach(trna=>trna.group.position.add(vec(0,ribosome.position.y,ribosome.position.z)));
    [pTrna, aTrna, eTrna].forEach((trna) => trna.group.quaternion.identity());
    [pTrna,aTrna,eTrna].forEach(trna=>trna.group.scale.setScalar(1));
    bigSubunit.position.set(0, 0, 0);
    smallSubunit.position.set(0, 0, 0);
    bigSubunit.visible = !['scan', 'initiate'].includes(mode) || (!refinedModels && mode === 'initiate' && phase > .83);
    if (mode === 'assemble') bigSubunit.position.y = (1 - smooth(phase)) * 1.5;
    if(refinedModels) {
      const leave=1-smooth((data.time-60.3)/.7);
      stageOpacity(smallSubunit,smooth((data.time-38)/.28)*leave,part=>part.name.startsWith('translation-'));
      stageOpacity(bigSubunit,(mode==='assemble'?smooth(phase/.22):1)*leave,part=>part.name.startsWith('translation-'));
    }

    let chainSite = tr.chainSite || 'P';
    if(refinedModels && mode==='scan' && phase>.4) {
      const arrival=smooth((phase-.4)/.6);
      pTrna.group.visible=true;pTrna.group.scale.setScalar(Math.max(.00001,arrival));
      pTrna.group.position.copy(rnaPoints[7]).add(vec(-2.6,2.2,.38).lerp(vec(-.8,1.0,.13),arrival));
      pTrna.group.quaternion.setFromEuler(new THREE.Euler(.09,-.13,.23));
      setAnticodon(pTrna,0,arrival>.35);pTrna.label.element.textContent='起始 tRNA · 接近 AUG';
      initiatorAmino.visible=true;visible(initiatorAminoLabel,arrival>.45);
    } else if (mode === 'initiate') {
      pTrna.group.visible = true;
      const progress = smooth(phase / 0.7);
      if (classic) pTrna.group.position.add(vec(-(1 - progress) * 0.80, (1 - progress) * 0.50, 0));
      else {
        pTrna.group.position.add(bezierOffset(vec(-0.80, 0.50, 0.23), vec(-0.62, 0.73, 0.18), vec(-0.14, 0.12, 0.04), vec(0, 0, 0), progress));
        pTrna.group.quaternion.setFromEuler(new THREE.Euler(0.09, -0.13, 0.23)).slerp(new THREE.Quaternion(), progress);
      }
      pTrna.label.element.textContent = '起始 tRNA · P 位';
      setAnticodon(pTrna, 0, true);
      initiatorAmino.visible = data.peptideCount === 0;
      visible(initiatorAminoLabel, initiatorAmino.visible);
    } else if (mode === 'assemble') {
      pTrna.group.visible = true;
      pTrna.label.element.textContent = '起始 tRNA · P 位';
      setAnticodon(pTrna, 0, true);
    } else if (mode === 'elongate') {
      pTrna.group.visible = true;
      pTrna.label.element.textContent = chainSite === 'A' ? '空 tRNA' : '载链 tRNA · P 位';
      setAnticodon(pTrna, pIndex, true);
      aTrna.group.visible = true;
      aTrna.label.element.textContent = chainSite === 'A' ? '载链 tRNA · A 位' : '氨酰 tRNA · A 位';
      setAnticodon(aTrna, aIndex, true);
      if (sub === 'enter') {
        const progress = smooth(phase);
        if (classic) aTrna.group.position.add(vec((1 - progress) * 1.05, (1 - progress) * 0.50, 0));
        else {
          aTrna.group.position.add(bezierOffset(vec(1.05, 0.61, 0.18), vec(1.10, 0.81, 0.22), vec(0.24, 0.26, 0.06), vec(0, 0.11, 0), progress));
          aTrna.group.quaternion.setFromEuler(new THREE.Euler(0.09, 0.18, -0.28)).slerp(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0.03, -0.06)), progress);
        }
      }
      if (sub === 'pair') {
        const docking = classic ? smooth(phase) : smooth(phase / 0.22);
        aTrna.group.position.y += (1 - docking) * 0.11;
        if (!classic) aTrna.group.quaternion.setFromEuler(new THREE.Euler(0, 0.03, -0.06)).slerp(new THREE.Quaternion(), docking);
      }
      if (sub === 'translocate') {
        // A→P is a frame-relative shift; the complex itself advances one codon to the right.
        const translocation = classic ? smooth(phase) : phase;
        aTrna.group.position.x -= translocation * SITE_SPACING;
        pTrna.group.visible = false;
        eTrna.group.visible = phase < 0.98;
        const departure = smooth(Math.max(0, phase - 0.45) / 0.55);
        eTrna.group.position.set(pX - translocation * SITE_SPACING - departure * 0.85, 0.12 + smooth(Math.max(0, phase - 0.5) / 0.5) * 0.6, carrierZ);
        if (!classic) { eTrna.group.position.z += Math.sin(departure * Math.PI) * 0.12; eTrna.group.rotation.z = departure * 0.21; }
        eTrna.label.element.textContent = phase < 0.7 ? '空 tRNA · P → E' : '空 tRNA · 离开 E 位';
        setAnticodon(pTrna, pIndex, false);
        setAnticodon(eTrna, pIndex, phase < 0.94);
        aTrna.label.element.textContent = '载链 tRNA · A → P';
        chainSite = 'A';
      }
    } else if (['stop', 'release-factor', 'release'].includes(mode)) {
      pTrna.group.visible = true;
      pTrna.label.element.textContent = '末个 tRNA · P 位';
      setAnticodon(pTrna, 4, true);
      if (mode !== 'stop') {
        releaseFactor.visible = true;
        releaseFactor.position.set(aX, 0.12 + (mode === 'release-factor' ? (1 - smooth(phase)) * 1.35 : 0), carrierZ);
        visible(factorLabel, true);
      }
    } else if (mode === 'disassemble') {
      pTrna.group.visible = phase < 0.8;
      pTrna.group.position.add(vec(-phase * 0.7, phase * 1.6, 0));
      setAnticodon(pTrna, 4, pTrna.group.visible);
      bigSubunit.position.add(vec(-phase * 0.6, phase * 1.7, -phase * 0.35));
      smallSubunit.position.add(vec(phase * 0.6, -phase * 0.8, 0));
      siteLabels.forEach((l) => visible(l, false));
    } else if (mode === 'complete') {
      ribosome.visible = false; readBracket.visible = false;
      visible(ribosomeLabel, false); visible(codonLabel, false);
      siteLabels.forEach((l) => visible(l, false));
      visible(siteNote, false);
    }

    const completeSites=['elongate','stop','release-factor','release'].includes(mode) || (mode==='assemble' && phase>=.96);
    const windowEnabled=perspectiveEnabled && completeSites;
    if(ribosomeView && ribosomeWindowEnabled!==windowEnabled) {
      ribosomeWindowEnabled=windowEnabled;ribosomeView.setEnabled(windowEnabled,{animate:Boolean(options.playing)&&!options.reducedMotion});
    }
    siteLabels.forEach((label,i) => {
      const shown=completeSites || (i===1 && ((mode==='initiate' && phase>=.7) || mode==='assemble'));
      visible(label,shown);siteGuides[i].ring.visible=shown;
      label.element.dataset.active=String((i===1 && chainSite==='P') || (i===2 && chainSite==='A') || (i===0 && sub==='translocate' && phase>.5));
    });
    visible(siteNote,completeSites && !classic);

    const peptideCount = Math.round(clamp(data.peptideCount, 0, 5));
    const chargedVisible = mode === 'elongate' && sub !== 'translocate' && !(sub === 'bond' && phase >= 0.7);
    incomingAmino.visible = chargedVisible;
    incomingAmino.material = aminoMaterials[Math.min(aIndex, 4)];
    incomingAmino.geometry = residueGeometries[Math.min(aIndex, 4)];
    incomingAmino.position.copy(aTrna.carrier).add(vec(0, 0, classic ? 0 : 0.025));
    initiatorAmino.position.copy(pTrna.carrier).add(vec(0, 0, classic ? 0 : 0.025));
    incomingAmino.scale.copy(peptideBeads[Math.min(aIndex, 4)].scale);
    incomingAmino.rotation.copy(peptideBeads[Math.min(aIndex, 4)].rotation);
    initiatorAmino.scale.copy(peptideBeads[0].scale);
    initiatorAmino.rotation.copy(peptideBeads[0].rotation);
    incomingAmino.userData.selection = { type: 'trna', index: Math.min(aIndex, 4) };
    incomingAminoLabel.element.textContent = aaName(Math.min(aIndex, 4));
    incomingAminoLabel.selection = { type: 'trna', index: Math.min(aIndex, 4) };
    incomingAminoLabel.element.dataset.codonIndex = String(Math.min(aIndex, 4));
    visible(incomingAminoLabel, chargedVisible);
    scene.updateMatrixWorld(true);
    [pTrna, aTrna].forEach((trna, site) => {
      const codonIndex = site === 0 ? pIndex : aIndex;
      const isPaired = trna.group.visible && (site === 0
        ? ['initiate','assemble','elongate','stop','release-factor','release'].includes(mode) && (mode !== 'initiate' || phase >= 0.7)
        : mode === 'elongate' && (sub !== 'enter') && !(sub === 'pair' && phase < 0.22));
      pairLinks[site].forEach((link, j) => {
        const paired = isPaired && codonIndex < 5;
        link.visible = !detailed && paired;
        if (paired && detailed) pairingBetween(trna.anticodonPlates[j], rnaBases[6 + codonIndex * 3 + j]);
        if (link.visible) {
          const from = classic ? trna.group.localToWorld(vec((j - 1) * 0.35, -0.08, 0.10)) : trna.anticodonPlates[j].localToWorld(vec(0, 0, 0.26));
          const to = classic ? rnaGroup.localToWorld(rnaPoints[6 + codonIndex * 3 + j].clone().add(vec(0, 0.20, 0))) : rnaBases[6 + codonIndex * 3 + j].localToWorld(vec(0, 0, 0.26));
          connect(link, from, to);
        }
      });
    });
    let anchor;
    let layoutCount = peptideCount;
    if (chainSite === 'released' || ['disassemble', 'complete'].includes(mode)) {
      const releasePhase = mode === 'release' ? smooth(clamp((phase - 0.7) / 0.3)) : 1;
      anchor = vec(pX + 0.44 - releasePhase * 0.65, 1.75 + releasePhase * 0.88, carrierZ);
    } else {
      const carrier = chainSite === 'A' ? aTrna : pTrna;
      anchor = carrier.group.localToWorld(carrier.carrier.clone());
      if (mode === 'elongate' && sub === 'bond' && phase < 0.7) {
        const transfer = smooth(clamp((phase - 0.12) / 0.58));
        const aAnchor = aTrna.group.localToWorld(aTrna.carrier.clone());
        anchor.lerp(aAnchor, transfer);
        layoutCount = peptideCount + transfer;
      }
    }
    if(refinedModels && data.time>=61.5)anchor.copy(comparisonPeptideAnchor(data.time));
    setPeptide(peptideCount, anchor, key, layoutCount);
    const codonIndex = ['stop', 'release-factor', 'release', 'disassemble', 'complete'].includes(mode) ? 5 : mode === 'elongate' ? aIndex : 0;
    readBracket.position.set((7 + codonIndex * 3 - 14.5) * 0.35, -0.75, 0.45);
    readBracket.quaternion.identity();
    if(refinedModels && data.time<39.5) {
      readBracket.position.copy(rnaPoints[7]).add(vec(0,-.37,.13));
      readBracket.quaternion.setFromUnitVectors(vec(1,0,0),rnaPoints[8].clone().sub(rnaPoints[6]).normalize());
    }
    const codon = CODONS[codonIndex]?.rna || rna.slice(6 + codonIndex * 3, 9 + codonIndex * 3).join('');
    codonLabel.element.textContent = codonIndex === 0 ? '起始 AUG' : codonIndex === 5 ? '终止 UAA · 不编码残基' : `${codon} · ${aaName(codonIndex)}`;
    codonLabel.selection = { type: 'rna', indices: [6 + codonIndex * 3, 7 + codonIndex * 3, 8 + codonIndex * 3] };
  }

  function updateSelection() {
    const selected = options.selected;
    for (const mat of materials) {
      if (mat !== palette.highlight && mat.emissive) { mat.emissive.copy(normalEmissive); mat.emissiveIntensity = 0; }
    }
    for (const object of pickables) {
      const candidate = object.userData.selection;
      if (!selected || candidate?.type !== selected.type) continue;
      const indexMatches = selected.index === undefined || candidate.index === selected.index;
      if (indexMatches && selected.index === undefined && !['base', 'rna', 'peptide'].includes(selected.type) && object.material?.emissive) {
        object.material.emissive.copy(selectedEmissive);
        object.material.emissiveIntensity = 0.17;
      }
    }
    for (const label of labels) {
      const selectedLabel = selected && label.selection?.type === selected.type && (selected.index === undefined || label.selection.index === selected.index);
      label.element.style.outline = selectedLabel ? '1px solid #ae8c54' : 'none';
    }
  }

  function update(nextSnapshot, nextOptions = {}) {
    if (whiteboardActive && !whiteboardApplyingState) return;
    if (disposed || !nextSnapshot?.chapter) return;
    updateCount++;
    if(manualCameraBlend && snapshot && (nextSnapshot.time<snapshot.time || Math.abs(nextSnapshot.time-snapshot.time)>.75))manualCameraBlend=null;
    snapshot = nextSnapshot;
    options = { ...options, ...nextOptions };
    const key = snapshot.chapter.key;
    const wasEntranceActive=entranceActive;
    entranceActive=Boolean(refinedModels && options.entrance?.active && !options.reducedMotion && key==='dna' && snapshot.time===0);
    if(entranceActive){
      entranceTime=clamp(options.entrance.time,0,ENTRANCE_DURATION);
      entranceMobile=(document.querySelector('.stage')?.clientWidth || container.clientWidth)<600;
      const viewportScale=options.entrance.viewportScale||[1,1];
      width=Math.max(1,container.clientWidth*viewportScale[0]);height=Math.max(1,container.clientHeight*viewportScale[1]);
      camera.aspect=width/height;camera.updateProjectionMatrix();
      dnaSpin=entranceSpin(entranceTime);
      controls.enabled=false;rotationPlayStart=null;
    }else if(wasEntranceActive){entrance.hide();controls.enabled=true;width=Math.max(1,container.clientWidth);height=Math.max(1,container.clientHeight);camera.aspect=width/height;camera.updateProjectionMatrix();}
    idleAdvancing = Boolean(!whiteboardActive && !whiteboardApplyingState && !entranceActive && key === 'dna' && options.ambientMotion && !options.playing && !options.reducedMotion && !options.selected && !options.expanded && !dragging);
    const now = performance.now();
    if (idleAdvancing && idleStamp !== null) {
      const delta=Math.min(.12,Math.max(0,(now-idleStamp)/1000));
      idleTime=(idleTime+delta)%18;dnaSpin=dnaRotation.updateIdle(delta);
    } else if (rotationPlayStart!==null) dnaSpin=dnaRotation.samplePlayback(snapshot.time-rotationPlayStart);
    idleStamp = idleAdvancing ? now : null;
    for (const motion of livingControllers) {
      motion.setEnabled(!options.reducedMotion);
      motion.update(snapshot.time, { working: ['transcription','translation'].includes(key) ? 1 : 0 });
    }
    const previousKey=currentKey;
    const chapterChanged = key !== currentKey;
    currentKey = key;
    hydrogenDashes?.reset();
    setDna(key, snapshot);
    setRna(key, snapshot);
    setTranslation(key, snapshot);
    if(entranceActive)entrance.update(entranceTime,{mobile:entranceMobile});
    hydrogenDashes?.finish();
    updateSelection();
    for (const mat of materials) setProteinActivity(mat,
      key === 'transcription' ? snapshot.transcription?.phase : key === 'translation' ? snapshot.translation?.phase : 0,
      !options.reducedMotion && ['transcription', 'translation'].includes(key));
    if (options.reducedMotion) proteinView?.finishTransition();
    if (options.reducedMotion) ribosomeView?.finishTransition();
    if (options.reducedMotion) exportExhibit?.window.finishTransition();
    if (chapterChanged) {
      if(refinedModels) {
        if(!followReading && options.playing)manualCameraBlend={from:{position:camera.position.clone(),target:controls.target.clone()},start:snapshot.time};
        viewMode=cameraModes[key];followReading=true;
      } else { viewMode=['transcription','translation'].includes(key)?'reaction':'overview';resetView(); }
      onStatus({ renderer: 'webgl', chapter: key, basePairs: 30, rnaCount: shownRna, peptideCount: snapshot.peptideCount || 0 });
    }
    if(refinedModels && followReading)applyPresentationCamera();
    else if (key === 'translation' && (width < 600 || viewMode === 'reaction') && followReading) followCurrentCodon();
    else if (key === 'transcription' && viewMode === 'reaction' && followReading) followReaction();
    if(entranceActive)applyEntranceCamera();
    // The scene is still being scaled into the stage during the handoff. DOM
    // labels use stage-space projections, so revealing them before the canvas
    // returns to its normal parent makes them briefly float above the DNA.
    if (entranceActive) {
      overlay.style.transition = 'none';
      overlay.style.opacity = '0';
    } else if (wasEntranceActive) {
      overlay.style.transition = options.reducedMotion ? 'none' : 'opacity 180ms ease-out';
      overlay.style.opacity = '1';
    } else if (overlay.style.opacity !== '1') {
      overlay.style.opacity = '1';
    }
    const entranceLightMix=entranceActive?1-entranceEase((entranceTime-ENTRANCE_HANDOFF)/(ENTRANCE_DURATION-ENTRANCE_HANDOFF)):0;
    keyLight.intensity=entranceLight.key*(1+.08*entranceLightMix);
    fillLight.intensity=entranceLight.fill*(1-.18*entranceLightMix);
    rimLight.intensity=entranceLight.rim*(1+.48*entranceLightMix);
    container.dataset.sceneChapter = key;
    container.dataset.sceneRnaCount = String(shownRna);
    container.dataset.scenePeptideCount = String(snapshot.peptideCount || 0);
    container.dataset.sceneChainSite = String(snapshot.translation?.chainSite || '');
    container.dataset.sceneView = viewMode;
  }

  const projected = vec(0, 0, 0);
  let renderCount = 0, updateCount = 0;
  function render() {
    if (disposed || document.hidden) return;
    if (whiteboardActive) {
      // The timeline and all geometry/material motion are frozen at entry.
      // Camera-facing cutaways still follow a deliberate orbit, without
      // advancing their transition clocks or the scripted lesson camera.
      if (whiteboardMode === 'model' && controls.enabled) controls.update();
      scene.updateMatrixWorld(true);
      camera.updateMatrixWorld();
      exportSpace?.updateView(camera);
      exportExhibit?.updateView(camera);
      if (proteinView && proteinVisual) {
        proteinView.update(camera, proteinVisual.matrixWorld);
        const visible = perspectiveEnabled || proteinView.inspect().amount > 0 || proteinView.active();
        for (const part of proteinVisual.children) if (part.name.endsWith('_TEACHING_OVERLAY')) part.visible = visible;
      }
      if (ribosomeView) {
        ribosomeView.update(camera, ribosome.matrixWorld);
        const visible = ribosomeWindowEnabled || ribosomeView.inspect().amount > 0 || ribosomeView.active();
        for (const subunit of [bigSubunit,smallSubunit]) for (const part of subunit.children) if (part.name.endsWith('-teaching-overlay')) part.visible = visible;
      }
      renderer.render(scene, camera);
      renderCount++;
      whiteboardRenderCount++;
      return;
    }
    // Orbit damping must not modify a scripted follow pose after it is sampled.
    if(!entranceActive && !(refinedModels && followReading))controls.update();
    scene.updateMatrixWorld(true);
    camera.updateMatrixWorld();
    exportSpace?.updateView(camera);
    exportExhibit?.updateView(camera);
    if(exportExhibit?.window.active())invalidate();
    if (proteinView && proteinVisual) {
      proteinView.update(camera, proteinVisual.matrixWorld);
      const visible = perspectiveEnabled || proteinView.inspect().amount > 0 || proteinView.active();
      for (const part of proteinVisual.children) if (part.name.endsWith('_TEACHING_OVERLAY')) part.visible = visible;
      if (proteinView.active()) invalidate();
    }
    if(ribosomeView) {
      ribosomeView.update(camera,ribosome.matrixWorld);
      const visible = ribosomeWindowEnabled || ribosomeView.inspect().amount > 0 || ribosomeView.active();
      for(const subunit of [bigSubunit,smallSubunit])for(const part of subunit.children)if(part.name.endsWith('-teaching-overlay'))part.visible=visible;
      if(ribosomeView.active())invalidate();
    }
    renderer.render(scene, camera);
    if (idleAdvancing) invalidate();
    renderCount++;
    for (const label of labels) {
      const always = label.kind.includes('base') || ['endpoint', 'residue', 'anticodon', 'site', 'codon', 'direction','compartment'].includes(label.kind);
      let enabled = label.visible && (always || options.labels || (label === polyLabel && viewMode === 'reaction'));
      const selectedLabel = options.selected && label.selection?.type === options.selected.type
        && (options.selected.index === undefined || label.selection.index === options.selected.index);
      if (enabled && detailed && !options.labels && label.kind.includes('base')) {
        const index = Number(label.element.dataset.index);
        const selected = options.selected?.indices?.includes(index) || (options.selected?.index === index && ['base', 'rna'].includes(options.selected.type));
        const reading = currentKey === 'transcription' ? transcriptionAdvance(snapshot) : currentKey === 'translation' ? 7 + (snapshot.translation?.ribosomeCodon || 0) * 3 : 14.5;
        const radius = currentKey === 'transcription' ? 2.2 : currentKey === 'translation' ? 4 : currentKey === 'dna' && width < 600 ? 1.35 : 2.8;
        enabled = label.kind === 'incoming-base' || selected || Math.abs(index - reading) < radius;
      }
      // With the explanation open on a short phone, this becomes a small
      // contextual preview. Reserve glyphs for the selected object; the full
      // reaction annotations return when the learner closes the panel.
      if (width < 600 && height < 260) enabled = label.visible && !!selectedLabel;
      if (!enabled) { label.element.hidden = true; continue; }
      const position = label.anchor();
      if (label.selection) label.element.setAttribute('aria-label', `${label.element.textContent}，查看说明`);
      projected.copy(position).project(camera);
      const inView = projected.z > -1 && projected.z < 1 && Math.abs(projected.x) < 1.13 && Math.abs(projected.y) < 1.12;
      label.element.hidden = !inView;
      if (!inView) continue;
      let x = (projected.x * 0.5 + 0.5) * width + label.offset[0];
      const y = (-projected.y * 0.5 + 0.5) * height + label.offset[1];
      if (['endpoint', 'direction','compartment'].includes(label.kind)) {
        // Keep the short direction annotations legible at portrait edges,
        // without pulling off-screen molecular endpoints into the frame.
        const fontSize = label.kind==='compartment'?11:viewMode === 'reaction' && width >= 600 ? 12 : 10;
        const halfLabel = [...label.element.textContent].reduce((sum, char) => sum + (/\p{Script=Han}/u.test(char) ? fontSize : fontSize * .62), 12) * .5;
        x = clamp(x, halfLabel + 5, width - halfLabel - 5);
      }
      label.element.style.left = `${x.toFixed(1)}px`;
      label.element.style.top = `${y.toFixed(1)}px`;
      label.element.style.zIndex = String(Math.round((1 - projected.z) * 100));
      if (label.kind==='site') {
        const i=siteLabels.indexOf(label), guide=siteGuides[i];
        const px=(projected.x*.5+.5)*width, py=(-projected.y*.5+.5)*height;
        guide.svg.style.display='block';guide.path.setAttribute('d',`M ${x} ${y+11} L ${px} ${py-5}`);
        label.element.style.borderColor=label.element.dataset.active==='true' ? '#cbb981' : 'rgba(211,230,223,.30)';
      }
      if (label.kind.includes('base')) label.element.style.fontSize = viewMode === 'reaction' ? (width < 600 ? '12px' : '13px') : width < 500 ? '10px' : '11px';
      if (['endpoint', 'direction'].includes(label.kind)) label.element.style.fontSize = viewMode === 'reaction' && width >= 600 ? '12px' : '10px';
    }
  }
  function invalidate() { if (!disposed && !document.hidden) onInvalidate(); }
  function viewDistance(key=currentKey, mode=viewMode) {
    const mobile = entranceActive ? entranceMobile : width < 600;
    const reaction = mode === 'reaction' && ['transcription', 'translation',...(refinedModels?['export']:[])].includes(key);
    const halfViewWidth = reaction ? (mobile ? 2.35 : 3.45) : mobile ? key === 'dna' && refinedModels && !options.expanded ? 5.05 : 5.8 : 6.35;
    let distance = halfViewWidth / (Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect);
    if (reaction) distance = Math.max(distance, (key === 'translation' ? 2.15 : 1.9) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    if (key === 'export') distance = reaction ? Math.max(distance,8.6/Math.min(1,camera.aspect)) : Math.max(distance,12.4);
    return distance;
  }
  const cameraWindows=[
    {from:'dna',to:'transcription',start:3,end:4.6},
    {from:'transcription',to:'export',start:33.65,end:36.4},
    {from:'export',to:'translation',start:37.4,end:40.3},
    {from:'translation',to:'comparison',start:61.5,end:62.8},
  ];
  function applyEntranceCamera(){
    const mobile=entranceMobile,t=entranceTime,raise=entranceEase((t-.35)/(mobile?3.55:5.9));
    const handoff=entranceEase((t-ENTRANCE_HANDOFF)/(ENTRANCE_DURATION-ENTRANCE_HANDOFF));
    const openingTarget=vec(0,mobile?-2.9:-1.35,.4),heroTarget=vec(0,mobile?1.05:.6,0);
    const target=openingTarget.lerp(heroTarget,raise);
    const openingOffset=mobile?vec(.35,6.9,15.7):vec(1.8,6.9,13.2);
    const heroOffset=mobile?vec(0,4.35,27.2):vec(0,2.8,13.2);
    const offset=openingOffset.lerp(heroOffset,raise);
    const heroPosition=target.clone().add(offset),final=stageCameraPose('dna',0);
    controls.target.copy(target).lerp(final.target,handoff);
    camera.position.copy(heroPosition).lerp(final.position,handoff);
    baseDistance=camera.position.distanceTo(controls.target);
    camera.lookAt(controls.target);
  }
  function stageCameraPose(key,time) {
    const mobile=entranceActive?entranceMobile:width<600,mode=cameraModes[key],reaction=mode==='reaction';
    const distance=viewDistance(key,mode), target=vec(0,key==='translation'?(mobile?.65:.85):key==='transcription'&&reaction?.05:key==='comparison'?.28:key==='export'?.15:.70,0);
    if(key==='transcription'&&reaction)target.x=(transcriptionAdvance(derive(clamp(time,4,33.999999)))-14.5)*.35+.38;
    if(key==='translation'&&(mobile||reaction)) {
      const t=clamp(time,38,61.999999),tr=derive(t).translation;
      if(t<39.5) {
        const index=tr.mode==='scan'?mix(1.214285714,7,smooth(tr.phase)):7,i=Math.floor(index),fraction=index-i;
        if(currentKey==='translation')target.x=mix(rnaPoints[i].x,rnaPoints[i+1].x,fraction)+.25;
        else {fillRnaPose('export',38,rnaPoseA,rnaDirsA);target.x=mix(rnaPoseA[i].x,rnaPoseA[i+1].x,fraction)+.25;}
      } else target.x=(7+(tr.ribosomeCodon??4)*3-14.5)*.35+.25;
      const releaseFocus=smooth((time-59.3)/1.0);
      target.y+=.80*releaseFocus;
    }
    if(key==='export'&&reaction) {
      target.set(envelopePositionX(time)+EXPORT_FRAME.x,EXPORT_FRAME.y,EXPORT_FRAME.z);
      const departure=smooth((time-37.05)/.85);
      if(departure>0) {
        const middle=sampleExportPoint(14.5,time,vec(0,0,0)).add(vec(0,.12,0));
        target.lerp(middle,departure);
      }
    }
    if(key==='translation' && currentKey==='translation' && (mobile||reaction) && time<61.5) {
      // The ribosome also turns with the RNA during arrival. Follow its actual
      // world-space reading region in all axes, not an unrelated x coordinate.
      ribosome.updateWorldMatrix(true,false);
      target.copy(ribosome.localToWorld(vec(.12,.65,.12)));
      target.y+=.80*smooth((time-59.3)/1.0);
    }
    const offset=key==='export'&&reaction?vec(.68,.14,.73).normalize().multiplyScalar(distance):vec(reaction?distance*.26:0,distance*(reaction?.22:mobile?.16:.20),distance);
    return {position:target.clone().add(offset),target,distance};
  }
  function applyPresentationCamera() {
    if(!snapshot)return;
    const time=snapshot.time,window=cameraWindows.find(w=>time>=w.start&&time<w.end);
    let pose;
    if(window) {
      const a=stageCameraPose(window.from,Math.min(time,window.from==='transcription'?33.999999:time));
      const b=stageCameraPose(window.to,time),f=smooth((time-window.start)/(window.end-window.start));
      pose={position:a.position.lerp(b.position,f),target:a.target.lerp(b.target,f),distance:mix(a.distance,b.distance,f)};
    } else pose=stageCameraPose(currentKey,time);
    // Follow the carried strand during transitions, then hand focus to the pore
    // and the reading site. Camera orientation and distance remain continuous.
    if(time>=33.65 && time<40.3) {
      const middle=vec(0,0,0);
      for(const point of rnaPoints)middle.addScaledVector(point,1/30);
      middle.y+=.12;
      // A portrait viewport needs the approaching cargo and its destination in
      // one composition; on wide screens the RNA itself remains the lead.
      const arrivingFocus=middle.clone();
      if(width<600 && time<35.9)arrivingFocus.lerp(vec(envelopePositionX(time),EXPORT_FRAME.y,EXPORT_FRAME.z),.42*smooth((time-34)/.5));
      const target=vec(0,0,0);
      if(time<35.2) {
        target.copy(stageCameraPose('transcription',33.65).target).lerp(arrivingFocus,smooth((time-33.65)/.7));
      } else if(time<35.9) {
        target.copy(arrivingFocus).lerp(vec(EXPORT_FRAME.x,EXPORT_FRAME.y,EXPORT_FRAME.z),smooth((time-35.2)/.7));
      } else if(time<38) {
        target.set(EXPORT_FRAME.x,EXPORT_FRAME.y,EXPORT_FRAME.z).lerp(middle,smooth((time-37.05)/.85));
      } else {
        target.copy(middle).lerp(stageCameraPose('translation',time).target,smooth((time-38)/1.5));
      }
      const direction=pose.position.clone().sub(pose.target).normalize();
      let distance=pose.position.distanceTo(pose.target);
      // Broad, fixed framing allowance during the RNA turn; no old 15.5-unit
      // zoom-out that left both the pore and RNA small and away from the center.
      const turn=smooth((time-33.65)/.7)*(1-smooth((time-39.5)/.8));
      distance=mix(distance,Math.max(distance,9.2/Math.min(1,camera.aspect)),turn);
      pose={target,position:target.clone().addScaledVector(direction,distance),distance};
    }
    baseDistance=pose.distance;
    pose.position.sub(pose.target).multiplyScalar(presentationZoom).add(pose.target);
    if(manualCameraBlend) {
      const f=smooth((time-manualCameraBlend.start)/.7);
      const endPosition=pose.position.clone(),endTarget=pose.target.clone();
      pose.position.copy(manualCameraBlend.from.position).lerp(endPosition,f);
      pose.target.copy(manualCameraBlend.from.target).lerp(endTarget,f);
      if(f===1)manualCameraBlend=null;
    }
    camera.position.copy(pose.position);controls.target.copy(pose.target);camera.lookAt(controls.target);
  }
  function resetView() {
    if (disposed) return;
    if(refinedModels && snapshot) { followReading=true;presentationZoom=1;manualCameraBlend=null;applyPresentationCamera();invalidate();return; }
    const mobile = width < 600;
    const reaction = viewMode === 'reaction' && ['transcription', 'translation',...(refinedModels?['export']:[])].includes(currentKey);
    baseDistance = viewDistance();
    const targetY = currentKey === 'translation' ? (mobile ? 0.65 : 0.85) : currentKey === 'transcription' && reaction ? 0.05 : currentKey === 'comparison' ? 0.28 : currentKey === 'export' ? 0.15 : 0.70;
    controls.target.set(0, targetY, 0);
    const tilt = reaction ? 0.22 : mobile ? 0.16 : 0.20;
    if(currentKey==='export' && reaction) camera.position.copy(vec(.68,.14,.73).normalize().multiplyScalar(baseDistance)).add(controls.target);
    else camera.position.set(reaction ? baseDistance * 0.26 : 0, targetY + baseDistance * tilt, baseDistance);
    followReading = true;
    if (currentKey === 'translation' && (mobile || reaction)) followCurrentCodon();
    if (currentKey === 'transcription' && reaction) followReaction();
    invalidate();
  }
  function setView(mode) {
    if (!['reaction', 'overview'].includes(mode) || disposed) return;
    if (mode === 'reaction' && !['transcription', 'translation',...(refinedModels?['export']:[])].includes(currentKey)) return;
    viewMode = mode;
    cameraModes[currentKey]=mode;
    container.dataset.sceneView = mode;
    resetView();
  }
  function followReaction() {
    const offset = camera.position.clone().sub(controls.target);
    controls.target.x = polymerase.position.x + .38;
    camera.position.copy(controls.target).add(offset);
  }
  function followCurrentCodon() {
    const offset = camera.position.clone().sub(controls.target);
    controls.target.x = ribosome.position.x + 0.25;
    camera.position.copy(controls.target).add(offset);
  }
  function zoom(delta) {
    if (disposed) return;
    const direction = camera.position.clone().sub(controls.target);
    // Positive delta means zoom in, suitable for a labelled "+" control.
    const next = clamp(direction.length() * Math.exp(-Number(delta || 0) * 0.13), baseDistance * 0.57, baseDistance * 1.4);
    camera.position.copy(controls.target).add(direction.setLength(next));
    if(refinedModels)presentationZoom=next/baseDistance;
    invalidate();
  }
  function focus(type, index = null) {
    if (disposed) return;
    const objects = { coding: dnaGroup, template: dnaGroup, base: dnaGroup, polymerase, rna: rnaGroup, trna: aTrna.group.visible ? aTrna.group : pTrna.group, ribosome, peptide: peptideGroup, pore: nuclearPore };
    const selectedIndex = Number.isInteger(index) ? index : null;
    let object = objects[type];
    if (type === 'trna' && selectedIndex !== null) object = [pTrna, aTrna, eTrna].find(trna => trna.group.visible && trna.group.userData.codonIndex === selectedIndex)?.group || object;
    if (type === 'peptide' && selectedIndex !== null) object = peptideBeads[selectedIndex] || object;
    if (!object) return;
    for (let ancestor = object; ancestor; ancestor = ancestor.parent) {
      if (!ancestor.visible) return;
    }
    followReading = false;
    let target = object.getWorldPosition(vec(0, 0, 0));
    if (type === 'rna') {
      if (selectedIndex !== null && selectedIndex >= 0 && selectedIndex < 30) target = rnaGroup.localToWorld(rnaPoints[selectedIndex].clone());
      else target = rnaGroup.localToWorld(rnaPoints[Math.max(0, Math.floor(shownRna / 2) - 1)].clone());
    }
    if (['coding', 'template', 'base'].includes(type)) {
      const localIndex = selectedIndex ?? (currentKey === 'transcription' && viewMode === 'reaction' ? snapshot.transcription.index : null);
      if (Number.isInteger(localIndex) && localIndex >= 0 && localIndex < 30) target = dnaGroup.localToWorld(codingPoints[localIndex].clone().add(templatePoints[localIndex]).multiplyScalar(.5));
      else target.y += .15;
    }
    const offset = camera.position.clone().sub(controls.target);
    controls.target.copy(target);
    camera.position.copy(target).add(offset);
    invalidate();
  }
  function resize() {
    const previousDistance = baseDistance;
    const offset = camera.position.clone().sub(controls.target);
    width = Math.max(1, container.clientWidth);
    height = Math.max(1, container.clientHeight || 440);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    if (whiteboardActive) {
      invalidate();
      return;
    }
    baseDistance = snapshot ? viewDistance() : Math.max(14.0, 5.95 / (Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect));
    if (snapshot) {
      // Opening the sidebar changes aspect, not the learner's chosen angle or
      // focus target. Preserve the relative zoom and orbit instead of resetting.
      const ratio = clamp(offset.length() / Math.max(previousDistance, .01), .57, 1.6);
      camera.position.copy(controls.target).add(offset.setLength(baseDistance * ratio));
    } else camera.position.set(0, baseDistance * 0.24, baseDistance);
    invalidate();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  function inspectWorkVisibility() {
    if (!proteinView || !proteinVisual || currentKey !== 'transcription') return null;
    const index = Math.min(snapshot.transcription.index, 29);
    const points = {
      template: dnaPlates[index][1].getWorldPosition(vec(0,0,0)),
      incoming: activeBase.getWorldPosition(vec(0,0,0)),
      rnaEnd: rnaEnd.anchor(),
    };
    const shells = proteinVisual.children.filter(o => o.userData.proteinWindow);
    return Object.fromEntries(Object.entries(points).map(([name, point]) => {
      const distance = camera.position.distanceTo(point);
      raycaster.set(camera.position, point.clone().sub(camera.position).normalize());
      const hits = raycaster.intersectObjects(shells, false).filter(hit => hit.distance < distance - .02);
      const alphas = hits.map(hit => proteinView.opacityAt(hit.point));
      return [name, { point: point.toArray(), sourceHits: hits.length, transmittance: alphas.reduce((t,a) => t*(1-a),1), blockedByProtein: alphas.some(a => a > .30) }];
    }));
  }
  let pointerStart = null;
  const activeControlPointers = new Set();
  let hoverTimer = 0, hoverPoint = null, lastHoverAt = 0;
  function pointerLeave() { clearTimeout(hoverTimer); hoverTimer=0; hoverPoint=null; pointerStart=null; onHover(null); }
  function pointerDown(event) {
    if (whiteboardActive) return;
    pointerLeave(); pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  }
  function pickAt(x,y) {
    if(entranceActive)return null;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set((x - rect.left) / rect.width * 2 - 1, -(y - rect.top) / rect.height * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(pickables, false).find((hit) => {
      let object = hit.object;
      while (object) { if (!object.visible) return false; object = object.parent; }
      const window=hit.object.userData.proteinWindow==='pore' ? exportExhibit?.window : hit.object.userData.proteinWindow==='ribosome' ? ribosomeView : proteinView;
      return !hit.object.userData.proteinWindow || !window || window.opacityAt(hit.point) > .30;
    });
  }
  function pointerMove(event) {
    if (whiteboardActive) return;
    if (event.pointerType==='touch' || pointerStart) return;
    hoverPoint={x:event.clientX,y:event.clientY};
    if(hoverTimer)return;
    hoverTimer=setTimeout(()=>{
      hoverTimer=0;if(!hoverPoint || disposed)return;
      lastHoverAt=performance.now();
      const hit=pickAt(hoverPoint.x,hoverPoint.y);
      onHover(hit?.object.userData.selection ? {selection:hit.object.userData.selection,...hoverPoint}:null);
    },Math.max(0,80-(performance.now()-lastHoverAt)));
  }
  function pointerUp(event) {
    if (whiteboardActive) return;
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const travel = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
    pointerStart = null;
    if (travel > 6) return;
    const hit=pickAt(event.clientX,event.clientY);
    if (hit?.object.userData.selection) onSelect({ ...hit.object.userData.selection });
  }
  function pointerCancel(event) {
    if (event?.pointerId !== undefined) activeControlPointers.delete(event.pointerId);
    pointerStart=null;pointerLeave();
  }
  function trackControlPointerDown(event) { activeControlPointers.add(event.pointerId); }
  function trackControlPointerUp(event) { activeControlPointers.delete(event.pointerId); }
  function whiteboardCameraValue() {
    return {
      position: camera.position.toArray(),
      target: controls.target.toArray(),
      zoom: camera.position.distanceTo(controls.target),
      projectionZoom: camera.zoom,
    };
  }
  function flushWhiteboardCameraChange() {
    if (whiteboardCameraChangeTimer) clearTimeout(whiteboardCameraChangeTimer);
    whiteboardCameraChangeTimer = 0;
    if (!whiteboardActive || whiteboardMode !== 'model' || !whiteboardOnCameraChange) return;
    whiteboardCameraChangeCount++;
    whiteboardOnCameraChange(whiteboardCameraValue());
  }
  function queueWhiteboardCameraChange() {
    if (!whiteboardActive || whiteboardMode !== 'model' || !whiteboardOnCameraChange) return;
    if (whiteboardCameraChangeTimer) clearTimeout(whiteboardCameraChangeTimer);
    whiteboardCameraChangeTimer = setTimeout(flushWhiteboardCameraChange, 100);
  }
  function controlsChanged() {
    invalidate();
    queueWhiteboardCameraChange();
  }
  function bindControls() {
    controls.addEventListener('change', controlsChanged);
    controls.addEventListener('start', orbitStart);
    controls.addEventListener('end', orbitEnd);
  }
  function unbindControls() {
    controls.removeEventListener('change', controlsChanged);
    controls.removeEventListener('start', orbitStart);
    controls.removeEventListener('end', orbitEnd);
  }
  function recreateControls(settings = null, useWhiteboardSettings = whiteboardActive) {
    const target = controls.target.clone();
    const enabled = controls.enabled;
    unbindControls();
    controls.dispose();
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(target);
    if (useWhiteboardSettings) configureWhiteboardControls();
    else if (settings) applyControlSettings(settings);
    else {
      controls.enableZoom = false; controls.enablePan = false; controls.enableDamping = true;
      controls.dampingFactor = 0.1; controls.minAzimuthAngle = -0.75; controls.maxAzimuthAngle = 0.75;
      controls.minPolarAngle = 1.02; controls.maxPolarAngle = 1.83;
      controls.touches.ONE = THREE.TOUCH.ROTATE; controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
      controls.enabled = enabled;
    }
    bindControls();
    controls.update();
  }
  function resetPointerState() {
    pointerStart = null;
    const active = [...activeControlPointers];
    activeControlPointers.clear();
    for (const pointerId of active) {
      if (renderer.domElement.hasPointerCapture?.(pointerId)) {
        try { renderer.domElement.releasePointerCapture(pointerId); } catch {}
      }
    }
    pointerLeave();
  }
  function lostPointerCapture(event) {
    if (!activeControlPointers.has(event.pointerId)) return;
    resetPointerState();
    dragging = false;
    idleStamp = null;
    // OrbitControls has no lostpointercapture handler. Recreating it drops its
    // private pointer state while preserving the live camera pose and target.
    recreateControls(whiteboardActive ? null : whiteboardDarkState?.controls, whiteboardActive);
    invalidate();
  }
  function cancelOrbitGesture(event) {
    if (!activeControlPointers.has(event.pointerId)) return;
    resetPointerState();
    dragging = false;
    idleStamp = null;
    // Remove OrbitControls' pointercancel listener before it runs: its bundled
    // handler releases an already-cancelled capture unconditionally.
    recreateControls(whiteboardActive ? null : whiteboardDarkState?.controls, whiteboardActive);
    invalidate();
  }
  function contextLost(event) {
    event.preventDefault();
    onStatus({ renderer: 'webgl', error: 'WebGL 上下文丢失，请重新载入展台。' });
  }
  renderer.domElement.addEventListener('pointerdown', pointerDown);
  renderer.domElement.addEventListener('pointerup', pointerUp);
  renderer.domElement.addEventListener('pointerup', trackControlPointerUp);
  renderer.domElement.addEventListener('pointermove', pointerMove);
  renderer.domElement.addEventListener('pointerleave', pointerLeave);
  renderer.domElement.addEventListener('pointercancel', pointerCancel);
  renderer.domElement.addEventListener('pointerdown', trackControlPointerDown);
  renderer.domElement.addEventListener('pointercancel', cancelOrbitGesture, true);
  renderer.domElement.addEventListener('lostpointercapture', lostPointerCapture);
  renderer.domElement.addEventListener('webglcontextlost', contextLost);
  const orbitStart = () => { followReading = false; manualCameraBlend=null; dragging = true; idleStamp = null; invalidate(); };
  const orbitEnd = () => {
    dragging = false; idleStamp = null; invalidate();
    queueWhiteboardCameraChange();
  };
  bindControls();
  resize();
  let shaderWarmMs=null;
  async function warmTeachingPrograms() {
    // Compile the real mesh/material variants without changing the learner's
    // timeline, camera, visible scene or labels. Keep program owners alive until
    // scene disposal so chapter fades reuse these programs instead of relinking.
    const began=performance.now(),warmScene=new THREE.Scene();
    warmScene.environment=scene.environment;warmScene.fog=scene.fog;
    scene.traverse(object=>{if(object.isLight){const light=object.clone();warmScene.add(light);if(light.target)warmScene.add(light.target);}});
    const fadingMeshes=new Set();
    for(const group of [nucleus,bigSubunit,smallSubunit])group.traverse(object=>{if(object.isMesh)fadingMeshes.add(object);});
    const variants=new Map();
    function warmMaterial(source,transparent) {
      const key=`${source.id}:${transparent}`;
      if(!variants.has(key)) {
        const copy=source.clone();copy.onBeforeCompile=source.onBeforeCompile;copy.customProgramCacheKey=source.customProgramCacheKey;
        copy.transparent=transparent;copy.opacity=transparent?.5:1;copy.depthWrite=!transparent;
        variants.set(key,copy);warmMaterials.add(copy);
      }
      return variants.get(key);
    }
    scene.traverse(object=>{
      if(!object.isMesh)return;
      const sourceMaterials=Array.isArray(object.material)?object.material:[object.material];
      const modes=fadingMeshes.has(object)?[false,true]:[null];
      for(const transparent of modes) {
        const copy=object.clone(false);copy.visible=true;copy.frustumCulled=false;
        const prepared=sourceMaterials.map(m=>warmMaterial(m,transparent??m.transparent));
        copy.material=Array.isArray(object.material)?prepared:prepared[0];
        warmScene.add(copy);
      }
    });
    if(renderer.compileAsync)await renderer.compileAsync(warmScene,camera);else renderer.compile(warmScene,camera);
    // Compile for the canvas output. An offscreen render uses linear output and
    // no tone mapping in this Three.js version, creating another cold program
    // family instead of warming the programs used by the visible animation.
    warmScene.traverse(object=>{if(object.isInstancedMesh)object.dispose();});warmScene.clear();
    if(disposed)return;
    shaderWarmMs=performance.now()-began;
  }
  if (!classic) {
    assetReadySettled = false;
    const fallbackMeshes = polymerase.children.slice();
    assetReady = import('./pilot/blender-assets.js')
      .then(({ loadBlenderModels }) => disposed ? null : loadBlenderModels('exhibit'))
      .then(async (assets) => {
        if (!assets) return;
        if (disposed) { Object.values(assets.geometries).forEach((g) => g.dispose()); return; }
        let full = null;
        if (refinedModels) {
          try { full = await loadPolymeraseExhibit(); }
          catch (error) { polymeraseAssetError = `完整模型载入失败，保留旧展品：${error.message}`; }
        }
        if (disposed) { full?.dispose(); Object.values(assets.geometries).forEach(g => g.dispose()); return; }
        const visual = full?.group || new THREE.Group();
        if (!full) {
        visual.position.set(0, -0.14, -0.02);
        visual.scale.setScalar(0.58);
        }
        if (full) {
          proteinView = full.view; proteinVisual = visual;
          proteinView.setEnabled(perspectiveEnabled);
          full.geometries.forEach(g => resources.add(g)); full.materials.forEach(m => materials.add(m));
          const motion = createPolymeraseLivingMotion({ group: visual, materials: full.materials });
          livingControllers.push(motion);
          visual.traverse(object => { if (object.isMesh && object.userData.selection) pickables.push(object); });
        }
        const bodySurface = material(bioSurface ? '#c7bc99' : exhibitLighting ? '#7baea1' : '#86b5ac', { biological: true, variant: 'rnap-body', fieldVariant: 'rnap', vertexColors: true, bumpMap: null, bumpScale: 0 });
        const innerSurface = material(bioSurface ? '#706754' : exhibitLighting ? '#405f59' : '#52716d', { biological: true, kind: 'inner', variant: 'rnap-inner', fieldVariant: 'rnap', vertexColors: true, roughness: bioSurface ? .72 : exhibitLighting ? .81 : .69, bumpMap: null, bumpScale: 0 });
        for (const [name, g] of Object.entries(assets.geometries)) {
          if (['RNAP_BODY', 'RNAP_INNER', 'RNAP_RIDGE'].includes(name)) {
            if (full) { g.dispose(); continue; }
            const part = mesh(geometry(g), name === 'RNAP_INNER' ? innerSurface : bodySurface, visual, { type: 'polymerase' });
            part.name = name;
          } else if (detailed && name.startsWith('BASE_')) {
            const base = name.slice(5), previous = baseGeometries[base];
            const source = createRefinedBaseGeometry(base);
            baseGeometries[base] = geometry(adaptExhibitBase(g, base, source.userData));
            source.dispose();
            scene.traverse(object => { if (object.isMesh && object.geometry === previous) object.geometry = baseGeometries[base]; });
            baseMaterials[base].vertexColors = true; baseMaterials[base].needsUpdate = true;
            enteringBases[base].vertexColors = true; enteringBases[base].needsUpdate = true;
          } else if (detailed && name === 'SUGAR') {
            g.computeBoundingBox();
            const center = g.boundingBox.getCenter(vec(0, 0, 0)), size = g.boundingBox.getSize(vec(0, 0, 0));
            g.translate(-center.x, -center.y, -center.z); g.scale(.17 / size.x, .17 / size.y, .17 / size.z);
            geometry(g);
            scene.traverse(object => { if (object.isMesh && object.geometry === sugarGeo) object.geometry = g; });
          } else g.dispose();
        }
        polymerase.add(visual);
        fallbackMeshes.forEach((object) => { object.visible = false; });
        if(refinedModels)await warmTeachingPrograms();
        if(disposed)return;
        polymeraseVisualSource = full ? 'blender-full-perspective' : 'blender-exhibit';
        polymeraseLoadMs = assets.loadMs + (full?.loadMs || 0);
        if (snapshot) update(snapshot);
        container.dataset.polymeraseModel = polymeraseVisualSource;
        invalidate();
      })
      .catch((error) => {
        if (disposed) return;
        polymeraseVisualSource = 'fallback';
        polymeraseAssetError = error.message;
        container.dataset.polymeraseModel = polymeraseVisualSource;
        invalidate();
      })
      .finally(() => { assetReadySettled = true; });
  }
  function jsonCopy(value, fallback = null) {
    if (value === undefined) return fallback;
    try { return JSON.parse(JSON.stringify(value)); } catch { return fallback; }
  }
  function captureCutawayState() {
    return {
      protein: proteinView?.captureState?.() || null,
      export: exportExhibit?.window.captureState?.() || null,
      ribosome: ribosomeView?.captureState?.() || null,
    };
  }
  function restoreCutawayState(state) {
    if (!state || typeof state !== 'object') return;
    if (state.protein) proteinView?.restoreState?.(state.protein);
    if (state.export) exportExhibit?.window.restoreState?.(state.export);
    if (state.ribosome) ribosomeView?.restoreState?.(state.ribosome);
  }
  function captureFrozenState({ freezePresentation = false } = {}) {
    if (!snapshot) return null;
    const cutaways = captureCutawayState();
    if (freezePresentation) {
      whiteboardFreezePending = true;
      restoreCutawayState(cutaways);
    }
    return {
      version: 1,
      time: snapshot.time,
      options: {
        expanded: Boolean(options.expanded),
        selected: jsonCopy(options.selected),
        labels: options.labels !== false,
        reducedMotion: Boolean(options.reducedMotion),
        ambientMotion: false,
        playing: false,
        entrance: null,
      },
      dnaSpin,
      idleTime,
      perspectiveEnabled,
      cutaways,
      camera: whiteboardCameraValue(),
      presentation: {
        viewMode,
        followReading,
        presentationZoom,
        manualCameraBlend: manualCameraBlend ? {
          from: {
            position: manualCameraBlend.from.position.toArray(),
            target: manualCameraBlend.from.target.toArray(),
          },
          start: manualCameraBlend.start,
        } : null,
      },
    };
  }
  function captureMaterials() {
    const current = new Set(materials);
    scene.traverse(object => {
      if (!object.isMesh) return;
      for (const mat of Array.isArray(object.material) ? object.material : [object.material]) current.add(mat);
    });
    const scalarKeys = ['roughness','metalness','specularIntensity','envMapIntensity','clearcoat','sheen','reflectivity'];
    return [...current].map(mat => ({
      mat,
      color: mat.color?.clone() || null,
      emissive: mat.emissive?.isColor ? mat.emissive.clone() : null,
      scalars: Object.fromEntries(scalarKeys.filter(key => Number.isFinite(mat[key])).map(key => [key, mat[key]])),
    }));
  }
  function saveWhiteboardDarkPresentation() {
    const lightStates = [keyLight, fillLight, rimLight].map(light => ({ light, color: light.color.clone(), intensity: light.intensity }));
    const hemiColor = scene.children.find(light => light.isHemisphereLight);
    if (hemiColor) lightStates.push({ light: hemiColor, color: hemiColor.color.clone(), groundColor: hemiColor.groundColor.clone(), intensity: hemiColor.intensity });
    return {
      background: scene.background?.clone() || null,
      fogColor: scene.fog?.color?.clone() || null,
      fogNear: scene.fog?.near,
      fogFar: scene.fog?.far,
      toneMappingExposure: renderer.toneMappingExposure,
      pixelRatio: renderer.getPixelRatio(),
      overlayDisplay: overlay.style.display,
      materials: captureMaterials(),
      lights: lightStates,
      controls: darkControlSettings(),
      camera: whiteboardCameraValue(),
    };
  }
  function applyPaperPresentation() {
    const paper = new THREE.Color('#f7f7f2');
    scene.background?.copy(paper);
    if (scene.fog?.color) {
      scene.fog.color.copy(paper);
      scene.fog.near = 42;
      scene.fog.far = 94;
    }
    renderer.toneMappingExposure = whiteboardDarkState.toneMappingExposure * 1.07;
    for (const { mat } of whiteboardDarkState.materials) {
      if (mat.color) mat.color.lerp(paper, .075);
      if (Number.isFinite(mat.roughness)) mat.roughness = Math.min(.98, mat.roughness + .12);
      if (Number.isFinite(mat.specularIntensity)) mat.specularIntensity *= .58;
      if (Number.isFinite(mat.envMapIntensity)) mat.envMapIntensity *= .46;
      if (Number.isFinite(mat.clearcoat)) mat.clearcoat *= .42;
      if (Number.isFinite(mat.sheen)) mat.sheen *= .55;
      if (Number.isFinite(mat.metalness)) mat.metalness *= .68;
    }
    const hemi = scene.children.find(light => light.isHemisphereLight);
    if (hemi) {
      hemi.color.set('#fff5e4'); hemi.groundColor.set('#c1b7a4'); hemi.intensity *= 1.22;
    }
    keyLight.color.set('#fff8e8'); keyLight.intensity *= 1.13;
    fillLight.color.set('#e2e7db'); fillLight.intensity *= 1.28;
    rimLight.color.set('#eee5d0'); rimLight.intensity *= .82;
  }
  function restoreDarkPresentation() {
    if (!whiteboardDarkState) return;
    scene.background?.copy(whiteboardDarkState.background || new THREE.Color('#101a1d'));
    if (scene.fog?.color && whiteboardDarkState.fogColor) {
      scene.fog.color.copy(whiteboardDarkState.fogColor);
      scene.fog.near = whiteboardDarkState.fogNear;
      scene.fog.far = whiteboardDarkState.fogFar;
    }
    renderer.toneMappingExposure = whiteboardDarkState.toneMappingExposure;
    for (const { mat, color, emissive, scalars } of whiteboardDarkState.materials) {
      if (color && mat.color) mat.color.copy(color);
      if (emissive && mat.emissive) mat.emissive.copy(emissive);
      for (const [key, value] of Object.entries(scalars)) mat[key] = value;
    }
    for (const state of whiteboardDarkState.lights) {
      state.light.color.copy(state.color);
      state.light.intensity = state.intensity;
      if (state.groundColor) state.light.groundColor.copy(state.groundColor);
    }
    overlay.style.display = whiteboardDarkState.overlayDisplay;
    renderer.setPixelRatio(whiteboardDarkState.pixelRatio);
    renderer.setSize(width, height, false);
    recreateControls(whiteboardDarkState.controls, false);
    applyWhiteboardCamera(whiteboardDarkState.camera, { rebuild: false });
  }
  function finiteVector(value) {
    return Array.isArray(value) && value.length >= 3 && value.slice(0, 3).every(Number.isFinite);
  }
  function applyWhiteboardCamera(value, { rebuild = true, notify = false } = {}) {
    if (!value || !finiteVector(value.position) || !finiteVector(value.target)) return false;
    controls.target.fromArray(value.target.slice(0, 3));
    camera.position.fromArray(value.position.slice(0, 3));
    if (Number.isFinite(value.zoom) && value.zoom > 0) {
      const offset = camera.position.clone().sub(controls.target);
      if (offset.lengthSq() > 1e-8) camera.position.copy(controls.target).add(offset.setLength(THREE.MathUtils.clamp(value.zoom, 2.4, 48)));
    }
    if (Number.isFinite(value.projectionZoom)) camera.zoom = THREE.MathUtils.clamp(value.projectionZoom, .5, 2);
    camera.updateProjectionMatrix();
    camera.lookAt(controls.target);
    if (rebuild) recreateControls(whiteboardActive ? null : whiteboardDarkState?.controls, whiteboardActive);
    else controls.update();
    if (notify && !rebuild) queueWhiteboardCameraChange();
    invalidate();
    return true;
  }
  function restoreDnaRotationState(state) {
    dnaRotation.reset();
    rotationPlayStart = null;
    const savedSpin = Number.isFinite(state?.dnaSpin) ? state.dnaSpin : 0;
    dnaRotation.updateIdle(savedSpin / (Math.PI * 2 / 18));
    dnaSpin = savedSpin;
    idleTime = Number.isFinite(state?.idleTime) ? Math.max(0, state.idleTime) : 0;
    idleStamp = null;
  }
  function restoreFrozenState(state) {
    if (!state || state.version !== 1 || !Number.isFinite(state.time) || state.time < 0 || state.time > 66) return false;
    if (!whiteboardActive) whiteboardFreezePending = false;
    let nextSnapshot;
    try { nextSnapshot = derive(state.time); } catch { return false; }
    const savedOptions = state.options && typeof state.options === 'object' ? jsonCopy(state.options, {}) : {};
    const savedPresentation = state.presentation && typeof state.presentation === 'object' ? state.presentation : {};
    const savedCamera = whiteboardActive
      ? whiteboardCameraValue()
      : state.camera && finiteVector(state.camera.position) && finiteVector(state.camera.target) ? state.camera : null;
    const nextMode = ['overview','reaction'].includes(savedPresentation.viewMode) ? savedPresentation.viewMode : cameraModes[nextSnapshot.chapter.key];
    perspectiveEnabled = state.perspectiveEnabled !== false;
    cameraModes[nextSnapshot.chapter.key] = nextMode;
    viewMode = nextMode;
    followReading = savedPresentation.followReading !== false;
    presentationZoom = Number.isFinite(savedPresentation.presentationZoom) ? THREE.MathUtils.clamp(savedPresentation.presentationZoom, .5, 1.6) : 1;
    manualCameraBlend = null;
    restoreDnaRotationState(state);
    whiteboardApplyingState = true;
    try {
      update(nextSnapshot, {
        ...savedOptions,
        labels: savedOptions.labels !== false,
        expanded: Boolean(savedOptions.expanded),
        selected: jsonCopy(savedOptions.selected),
        reducedMotion: Boolean(savedOptions.reducedMotion),
        ambientMotion: false,
        playing: false,
        entrance: null,
      });
    } finally {
      whiteboardApplyingState = false;
    }
    followReading = savedPresentation.followReading !== false;
    presentationZoom = Number.isFinite(savedPresentation.presentationZoom) ? THREE.MathUtils.clamp(savedPresentation.presentationZoom, .5, 1.6) : 1;
    const blend = savedPresentation.manualCameraBlend;
    manualCameraBlend = blend && finiteVector(blend.from?.position) && finiteVector(blend.from?.target) && Number.isFinite(blend.start)
      ? { from: { position: vec(...blend.from.position.slice(0, 3)), target: vec(...blend.from.target.slice(0, 3)) }, start: blend.start }
      : null;
    proteinView?.setEnabled(perspectiveEnabled, { animate: false });
    exportExhibit?.window.setEnabled(perspectiveEnabled, { animate: false });
    if (ribosomeView) ribosomeView.setEnabled(ribosomeWindowEnabled, { animate: false });
    restoreCutawayState(state.cutaways);
    if (savedCamera) applyWhiteboardCamera(savedCamera, { rebuild: false });
    invalidate();
    return true;
  }
  function changeWhiteboardMode(mode) {
    if (!whiteboardActive || !['model','draw'].includes(mode)) return false;
    if (whiteboardMode === mode) return true;
    flushWhiteboardCameraChange();
    resetPointerState();
    dragging = false;
    idleStamp = null;
    whiteboardMode = mode;
    followReading = false;
    manualCameraBlend = null;
    recreateControls(null, true);
    controls.enabled = mode === 'model';
    container.dataset.whiteboardMode = mode;
    invalidate();
    return true;
  }
  function changeWhiteboardQuality(quality = 'balanced') {
    if (!whiteboardActive || !['balanced','economy'].includes(quality)) return false;
    whiteboardQuality = quality;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality === 'economy' ? 1 : 1.5));
    renderer.setSize(width, height, false);
    invalidate();
    return true;
  }
  return {
    update, render, resetView, zoom, focus, setView, ready:assetReady,
    captureFrozenState,
    restoreFrozenState,
    async enterWhiteboard({ camera: requestedCamera = null, quality = 'balanced', onCameraChange = null } = {}) {
      if (disposed || !snapshot) return null;
      if (whiteboardActive) {
        whiteboardOnCameraChange = typeof onCameraChange === 'function' ? onCameraChange : whiteboardOnCameraChange;
        if (requestedCamera) applyWhiteboardCamera(requestedCamera, { rebuild: true, notify: false });
        changeWhiteboardQuality(quality);
        return { camera: whiteboardCameraValue(), resetCamera: jsonCopy(whiteboardResetCamera) };
      }
      const frozen = captureFrozenState();
      whiteboardFreezePending = true;
      whiteboardDarkState = saveWhiteboardDarkPresentation();
      whiteboardActive = true;
      restoreCutawayState(frozen.cutaways);
      whiteboardPreparing = true;
      whiteboardMode = 'model';
      whiteboardOnCameraChange = typeof onCameraChange === 'function' ? onCameraChange : null;
      whiteboardResetCamera = jsonCopy(whiteboardDarkState.camera);
      whiteboardDarkState.frozenState = frozen;
      resetPointerState();
      dragging = false;
      idleStamp = null;
      idleAdvancing = false;
      followReading = false;
      manualCameraBlend = null;
      overlay.style.display = 'none';
      recreateControls(null, true);
      resize();
      // Asset loading can finish after the lesson first appears. Freeze external
      // updates immediately, then reconstruct once the current edition is ready.
      const reconstructAfterAssets = !assetReadySettled;
      if (reconstructAfterAssets) {
        try { await assetReady; } catch {}
      }
      if (disposed) return null;
      whiteboardDarkState.materials = captureMaterials();
      const presentCamera = whiteboardCameraValue();
      options = { ...options, playing: false, ambientMotion: false, entrance: null };
      restoreDnaRotationState(frozen);
      if (reconstructAfterAssets) restoreFrozenState(frozen);
      whiteboardPreparing = false;
      applyPaperPresentation();
      if (requestedCamera) applyWhiteboardCamera(requestedCamera, { rebuild: true, notify: false });
      else applyWhiteboardCamera(presentCamera, { rebuild: false, notify: false });
      changeWhiteboardQuality(quality);
      changeWhiteboardMode('model');
      invalidate();
      return { camera: whiteboardCameraValue(), resetCamera: jsonCopy(whiteboardResetCamera) };
    },
    setWhiteboardMode(mode) {
      return changeWhiteboardMode(mode);
    },
    getWhiteboardCamera() { return whiteboardCameraValue(); },
    setWhiteboardCamera(value) {
      return whiteboardActive && applyWhiteboardCamera(value, { rebuild: true, notify: true });
    },
    resetWhiteboardCamera() {
      if (!whiteboardActive || !whiteboardResetCamera) return false;
      return applyWhiteboardCamera(whiteboardResetCamera, { rebuild: true, notify: true });
    },
    setWhiteboardQuality(quality = 'balanced') {
      return changeWhiteboardQuality(quality);
    },
    exitWhiteboard() {
      if (!whiteboardActive) return false;
      flushWhiteboardCameraChange();
      const frozen = whiteboardDarkState?.frozenState;
      whiteboardActive = false;
      whiteboardPreparing = false;
      whiteboardMode = 'model';
      whiteboardQuality = null;
      whiteboardOnCameraChange = null;
      resetPointerState();
      dragging = false;
      idleStamp = null;
      idleAdvancing = false;
      restoreDarkPresentation();
      if (frozen?.presentation) {
        const key = currentKey;
        viewMode = frozen.presentation.viewMode === 'reaction' || frozen.presentation.viewMode === 'overview'
          ? frozen.presentation.viewMode : cameraModes[key];
        cameraModes[key] = viewMode;
        followReading = frozen.presentation.followReading !== false;
        presentationZoom = Number.isFinite(frozen.presentation.presentationZoom) ? frozen.presentation.presentationZoom : 1;
        const blend = frozen.presentation.manualCameraBlend;
        manualCameraBlend = blend && finiteVector(blend.from?.position) && finiteVector(blend.from?.target) && Number.isFinite(blend.start)
          ? { from: { position: vec(...blend.from.position.slice(0, 3)), target: vec(...blend.from.target.slice(0, 3)) }, start: blend.start }
          : null;
      }
      whiteboardDarkState = null;
      whiteboardResetCamera = null;
      whiteboardFreezePending = false;
      delete container.dataset.whiteboardMode;
      resize();
      invalidate();
      return true;
    },
    isWhiteboard() { return whiteboardActive; },
    async prepareEntrance() {
      const request=++entrancePreparation;
      if(!refinedModels)return false;
      await assetReady;
      if(disposed || request!==entrancePreparation)return false;
      idleTime=0;idleStamp=null;rotationPlayStart=null;dnaRotation.reset();dnaSpin=0;
      followReading=true;presentationZoom=1;manualCameraBlend=null;
      const warmOptions={playing:false,ambientMotion:false,selected:null,expanded:false,entrance:{active:true,time:6.7,viewportScale:[1,1]}};
      update(derive(0),warmOptions);
      // Compile and upload every mesh at the assembled pose behind the loading
      // cover. Warming only time zero leaves sugars and pairing strokes cold.
      if(renderer.compileAsync)await renderer.compileAsync(scene,camera);else renderer.compile(scene,camera);
      if(disposed || request!==entrancePreparation)return false;
      renderer.render(scene,camera);
      update(derive(0),{...warmOptions,entrance:{active:true,time:0,viewportScale:[1,1]}});
      renderer.render(scene,camera);
      return !disposed;
    },
    finishEntrance(){
      entrancePreparation++;
      entrance.hide();controls.enabled=true;
      dnaRotation.reset();dnaSpin=dnaRotation.updateIdle(entranceSpin(entranceTime)/(2*Math.PI/18));
      idleTime=entranceSpin(entranceTime)/(2*Math.PI/18);idleStamp=null;rotationPlayStart=null;
      options.entrance=null;
      if(snapshot)update(snapshot,{entrance:null});
      invalidate();
    },
    resetAmbient() { idleTime = 0; idleStamp = null; dnaSpin=dnaRotation.reset(); rotationPlayStart=null; manualCameraBlend=null; },
    beginPlayback(rate=1/1.65) {
      if(refinedModels && !followReading) {
        manualCameraBlend=options.reducedMotion?null:{from:{position:camera.position.clone(),target:controls.target.clone()},start:snapshot.time};
        followReading=true;
      }
      if(currentKey==='dna' && !options.reducedMotion) {rotationPlayStart=snapshot.time;dnaRotation.beginPlayback({rate});}
    },
    setPerspective(enabled) {
      if (whiteboardActive || whiteboardFreezePending) return false;
      perspectiveEnabled = Boolean(enabled);
      proteinView?.setEnabled(perspectiveEnabled, { animate: !options.reducedMotion });
      exportExhibit?.window.setEnabled(perspectiveEnabled,{animate:!options.reducedMotion});
      if(currentKey==='translation' && ribosomeView) {
        ribosomeWindowEnabled=perspectiveEnabled && siteLabels.every(label=>label.visible);
        ribosomeView.setEnabled(ribosomeWindowEnabled,{animate:!options.reducedMotion});
      }
      invalidate();
    },
    getDebugGeometry() {
      scene.updateMatrixWorld(true);
      if (proteinView && proteinVisual) proteinView.update(camera, proteinVisual.matrixWorld);
      ribosomeView?.update(camera,ribosome.matrixWorld);
      const world = (group, point) => group.localToWorld(point.clone()).toArray().map((value) => Number(value.toFixed(6)));
      const quaternion = (object) => object.getWorldQuaternion(new THREE.Quaternion()).toArray();
      const pose = (object) => ({ visible: object.visible, position: object.getWorldPosition(vec(0, 0, 0)).toArray(), quaternion: quaternion(object), scale: object.getWorldScale(vec(1, 1, 1)).toArray() });
      const index = Math.round(clamp(snapshot?.transcription?.index ?? 0, 0, 29));
      return {
        chapter: currentKey, time: snapshot?.time ?? null, visual: classic ? 'classic' : 'exhibit', polymeraseModel: polymeraseVisualSource, reducedMotion: options.reducedMotion, rnaCount: shownRna, peptideCount: shownPeptide,
        entrance:entrance.inspect(),dnaBasePositions:dnaPlates.flat().map(base=>base.getWorldPosition(vec(0,0,0)).toArray()),dnaBaseQuaternions:dnaPlates.flat().map(quaternion),
        modelEdition: container.dataset.modelEdition,
        perspective: proteinView?.inspect() || null,
        cutaways: captureCutawayState(),
        ribosomePerspective:ribosomeView?.inspect() || null,
        workVisibility: inspectWorkVisibility(),
        proteinPartCount: proteinVisual?.children.filter(o => o.userData.proteinWindow).length || 0,
        residueShapes: residueGeometries.map(g => ({ authoring: g.userData.authoring || g.userData.molecularKind, vertices: g.attributes.position.count })),
        siteAnchors: TRANSLATION_SITES.map((site,i)=>({key:site.key,visible:siteLabels[i].visible,position:siteLabels[i].anchor().toArray(),local:[site.x,site.y,site.z]})),
        nuclearExport:exportExhibit?.inspect() || null,
        ribosomeModels: [bigSubunit, smallSubunit].flatMap(group => group.children.filter(o => o.isMesh).map(o => ({ name: o.name, triangles: o.geometry.index ? o.geometry.index.count / 3 : o.geometry.attributes.position.count / 3, min: o.geometry.boundingBox?.min.toArray(), max: o.geometry.boundingBox?.max.toArray() }))),
        proteinSurfaces: [...materials].filter(m => m.userData.bioSurface).map(m => ({ name: m.name, color: m.color.getHexString(), roughness: m.roughness, specular: m.specularIntensity, activity: m.userData.bioSurface.activity.value })),
        baseModels: Object.fromEntries(Object.entries(baseGeometries).map(([base, g]) => [base, { rings: g.userData.ringCount || null, authoring: g.userData.authoring || null, min: g.boundingBox.min.toArray(), max: g.boundingBox.max.toArray(), attachment: g.userData.attachment || null }])),
        hydrogenDashCount: hydrogenDashes?.object.count || 0,
        rnaRailEnd: rnaRail.object.userData.end || null,
        rnaPositions: rnaPoints.slice(0, shownRna).map((point) => world(rnaGroup, point)),
        rnaBasePositions: rnaBases.slice(0, shownRna).map((base) => base.getWorldPosition(vec(0, 0, 0)).toArray()),
        rnaBaseQuaternions: rnaBases.slice(0, shownRna).map(quaternion),
        rnaSugarQuaternions: rnaSugars.slice(0, shownRna).map(quaternion),
        rnaEndPosition: rnaEnd.anchor().toArray(),
        rna3Label: rnaEnd.anchor().toArray(),
        codingPositions: codingPoints.map((point) => world(dnaGroup, point)),
        templatePositions: templatePoints.map((point) => world(dnaGroup, point)),
        incoming: { visible: activeNucleotide.visible, index, position: activeNucleotide.getWorldPosition(vec(0, 0, 0)).toArray(), basePosition: activeBase.getWorldPosition(vec(0, 0, 0)).toArray(), quaternion: quaternion(activeBase), sugarQuaternion: quaternion(activeSugar), groupQuaternion: quaternion(activeNucleotide), scale: activeBase.getWorldScale(vec(1, 1, 1)).toArray() },
        dnaActivePoint: world(dnaGroup, templatePoints[index]),
        polymerasePosition: polymerase.getWorldPosition(vec(0, 0, 0)).toArray(),
        peptidePositions: peptideBeads.slice(0, shownPeptide).map((bead) => bead.getWorldPosition(vec(0, 0, 0)).toArray()),
        peptideQuaternions: peptideBeads.slice(0, shownPeptide).map(quaternion),
        peptideScales: peptideBeads.slice(0, shownPeptide).map((bead) => bead.getWorldScale(vec(1, 1, 1)).toArray()),
        peptideCLabel: currentKey === 'translation' || currentKey === 'comparison' ? peptideC.anchor().toArray() : null,
        aminoCarrier: currentKey === 'translation' ? { index: Math.round(clamp(snapshot.translation?.aCodonIndex ?? 0, 0, 4)), ...pose(incomingAmino) } : null,
        initiatorCarrier: currentKey === 'translation' ? pose(initiatorAmino) : null,
        trna: currentKey === 'translation' ? Object.fromEntries([['P', pTrna], ['A', aTrna], ['E', eTrna]].map(([site, trna]) => [site, { codonIndex: trna.group.userData.codonIndex, ...pose(trna.group), anticodonPositions: trna.anticodonPlates.map((plate) => plate.getWorldPosition(vec(0, 0, 0)).toArray()), anticodonTips: trna.anticodonPlates.map((plate) => plate.localToWorld(vec(0, 0, 0.26)).toArray()), letters: trna.anticodon.map((label) => label.element.textContent) }])) : null,
        pairedRnaTips: currentKey === 'translation' ? rnaBases.map((base) => base.localToWorld(vec(0, 0, 0.26)).toArray()) : null,
        porePosition: nuclearPore.getWorldPosition(vec(0, 0, 0)).toArray(),
        camera: { position: camera.position.toArray(), target: controls.target.toArray(), quaternion:camera.quaternion.toArray(), fov: camera.fov, aspect: camera.aspect, viewMode, following:followReading, resuming:!!manualCameraBlend },
      };
    },
    getMetrics() { return { renderCount, updateCount, drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures, width, height, pixelRatio: renderer.getPixelRatio(), ownAnimationLoop: false, shaderWarmMs, warmMaterialVariants:warmMaterials.size, entrance:entrance.inspect(), polymeraseModel: polymeraseVisualSource, polymeraseLoadMs, polymeraseAssetError, modelEdition: container.dataset.modelEdition, viewMode, ambient: { time: idleTime, advancing: idleAdvancing, dragging, duration: 18,rotation:dnaRotation.inspect() }, whiteboard: { active: whiteboardActive, preparing: whiteboardPreparing, mode: whiteboardMode, quality: whiteboardQuality, renderCount: whiteboardRenderCount, cameraChanges: whiteboardCameraChangeCount }, transitions:{windows:cameraWindows,canvasFade:false}, livingMotion: livingControllers.map(motion => motion.inspect()) }; },
    dispose() {
      if (disposed) return;
      disposed = true;
      resizeObserver.disconnect();
      resetPointerState(); unbindControls(); controls.dispose();
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointerdown', trackControlPointerDown);
      renderer.domElement.removeEventListener('pointerup', pointerUp);
      renderer.domElement.removeEventListener('pointerup', trackControlPointerUp);
      renderer.domElement.removeEventListener('pointermove', pointerMove);
      renderer.domElement.removeEventListener('pointerleave', pointerLeave);
      renderer.domElement.removeEventListener('pointercancel', pointerCancel);
      renderer.domElement.removeEventListener('pointercancel', cancelOrbitGesture, true);
      renderer.domElement.removeEventListener('lostpointercapture', lostPointerCapture);
      pointerLeave();
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      if (whiteboardCameraChangeTimer) clearTimeout(whiteboardCameraChangeTimer);
      hydrogenDashes?.object.dispose(); dnaAttachments?.dispose();
      entrance.dispose();
      livingControllers.forEach(motion => motion.dispose());
      resources.forEach((g) => g.dispose()); materials.forEach((m) => m.dispose());warmMaterials.forEach(m=>m.dispose());warmMaterials.clear();
      disposeMolecularResources();
      scene.environment = null;
      exhibitEnvironment?.dispose();
      renderer.dispose(); renderer.domElement.remove(); overlay.remove();
    },
  };
}

