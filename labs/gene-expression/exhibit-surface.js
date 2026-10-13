import * as THREE from './vendor/three.module.js';

// Presentation only: no displacement, timeline, molecular mechanism or asset changes.
// The shader hooks below target the locally supplied Three.js r160 physical shader.
const SURFACE_VERSION = 'exhibit-surface-2';
const ROLES = Object.freeze({
  protein: { roughness: .66, specularIntensity: .34, envMapIntensity: .68, colorVariation: .68, regionDepth: 2.7, detailField: 1, roughnessVariation: .055, relief: .0098, normalSlope: .052, edgeStrength: .052 },
  inner: { roughness: .81, specularIntensity: .14, envMapIntensity: .43, colorVariation: .48, regionDepth: 1.8, detailField: .80, roughnessVariation: .040, relief: .0062, normalSlope: .036, edgeStrength: .012 },
  nucleic: { roughness: .86, specularIntensity: .12, envMapIntensity: .48, colorVariation: .24, regionDepth: 1, detailField: 0, roughnessVariation: .013, relief: .0012, normalSlope: .022, edgeStrength: .018 },
  backbone: { roughness: .70, specularIntensity: .20, envMapIntensity: .58, colorVariation: .30, regionDepth: 1, detailField: 0, roughnessVariation: .018, relief: .0020, normalSlope: .022, edgeStrength: .030 },
});

const VERTEX_DECLARATIONS = '\nvarying vec3 vExhibitSurfacePosition;\n';
const VERTEX_POSITION = `
  // The field follows the deformed local surface. Instance translation/rotation
  // cannot slide the pattern across an animated strand; instance size is retained.
  vExhibitSurfacePosition = transformed;
  #ifdef USE_INSTANCING
    vec3 exhibitInstanceScale = vec3(
      length(instanceMatrix[0].xyz),
      length(instanceMatrix[1].xyz),
      length(instanceMatrix[2].xyz)
    );
    vExhibitSurfacePosition *= exhibitInstanceScale;
  #endif
`;

const FRAGMENT_DECLARATIONS = `
  varying vec3 vExhibitSurfacePosition;
  uniform float uExhibitScale;
  uniform vec3 uExhibitPhase;
  uniform float uExhibitColorVariation;
  uniform float uExhibitRegionDepth;
  uniform float uExhibitDetailField;
  uniform float uExhibitRoughnessVariation;
  uniform float uExhibitRelief;
  uniform float uExhibitNormalSlope;
  uniform float uExhibitEdgeStrength;
  uniform vec3 uExhibitRimDirection;
  uniform vec3 uExhibitRimTint;

  // Deterministic lattice values, smoothly blended with zero first/second
  // derivatives at cell boundaries. This is a surface field, never screen grain.
  float exhibitLatticeValue(vec3 cell) {
    vec3 key = fract(cell * vec3(.1277, .1879, .1133) + vec3(.11, .37, .71));
    key += dot(key, key.zxy + 17.17);
    return fract((key.x + .29 * key.y) * (key.z + .17)) * 2.0 - 1.0;
  }

  float exhibitSoftField(vec3 p) {
    vec3 cell = floor(p);
    vec3 fraction = fract(p);
    vec3 blend = fraction * fraction * fraction
      * (fraction * (fraction * 6.0 - 15.0) + 10.0);
    float lower = mix(
      mix(exhibitLatticeValue(cell), exhibitLatticeValue(cell + vec3(1, 0, 0)), blend.x),
      mix(exhibitLatticeValue(cell + vec3(0, 1, 0)), exhibitLatticeValue(cell + vec3(1, 1, 0)), blend.x),
      blend.y
    );
    float upper = mix(
      mix(exhibitLatticeValue(cell + vec3(0, 0, 1)), exhibitLatticeValue(cell + vec3(1, 0, 1)), blend.x),
      mix(exhibitLatticeValue(cell + vec3(0, 1, 1)), exhibitLatticeValue(cell + vec3(1, 1, 1)), blend.x),
      blend.y
    );
    return mix(lower, upper, blend.z);
  }

  // Broad regional color remains independent of the much smaller relief field.
  float exhibitRegion(vec3 p) {
    float bend = .32 * sin(dot(p, vec3(-.41, .67, .23)) + .7);
    float broad = .5 + .5 * sin(dot(p, vec3(.73, .39, .57)) + bend);
    if (uExhibitDetailField == 0.0) return broad;
    float cloud = .5 + .5 * exhibitSoftField(p * .82 + vec3(3.1, -1.7, .9));
    return mix(broad, cloud, .48 * uExhibitDetailField);
  }

  float exhibitHeight(vec3 p) {
    float broad = sin(dot(p, vec3(1.17, .61, .93))
      + .35 * sin(dot(p, vec3(-.53, .89, .37))));
    float middle = sin(dot(p, vec3(-2.31, 1.77, 3.13))
      + .28 * cos(dot(p, vec3(.71, 1.19, -.83))));
    float small = sin(dot(p, vec3(5.23, 4.17, -6.41)) + .41 * broad);
    float original = .62 * broad + .28 * middle + .10 * small;
    if (uExhibitDetailField == 0.0) return original;
    // Most of the slope comes from medium features. The finest layer has one
    // seventh the medium weight, so it reads as surface variation, not sandpaper.
    float shaped = .46 * exhibitSoftField(p * 3.2 + vec3(.8, -2.1, 1.3))
      + .34 * exhibitSoftField(p * 7.3 + vec3(-1.7, .5, 2.9))
      + .048 * exhibitSoftField(p * 16.1 + vec3(2.3, 3.7, -.4));
    return mix(original, shaped, uExhibitDetailField);
  }

  vec3 exhibitSurfaceNormal(vec3 viewPosition, vec3 viewNormal, float height) {
    // All frame vectors are in view space. Screen derivatives transfer the local
    // height field through model/instance transforms without object-space normals.
    vec3 tangentX = dFdx(viewPosition);
    vec3 tangentY = dFdy(viewPosition);
    float heightX = dFdx(height);
    float heightY = dFdy(height);
    vec3 dualX = cross(tangentY, viewNormal);
    vec3 dualY = cross(viewNormal, tangentX);
    float determinant = dot(tangentX, dualX);
    vec3 slope = (heightX * dualX + heightY * dualY)
      * (sign(determinant) / max(abs(determinant), 1e-10));
    // Role-specific slope cap: proteins stay below about 3 degrees; nucleic
    // teaching shapes retain the earlier 1.3 degree limit and weaker field.
    slope *= min(1.0, uExhibitNormalSlope / max(length(slope), 1e-6));
    return normalize(viewNormal - slope * (gl_FrontFacing ? 1.0 : -1.0));
  }
`;

const COLOR_LAYER = `
  vec3 exhibitP = vExhibitSurfacePosition * uExhibitScale + uExhibitPhase;
  float exhibitRegionValue = exhibitRegion(exhibitP);
  vec3 exhibitRegionalTint = mix(
    vec3(.948, .983, 1.032), vec3(1.046, 1.013, .967), exhibitRegionValue
  );
  // Multiply after color_fragment: glTF vertex color and its baked AO survive.
  diffuseColor.rgb *= mix(vec3(1.0), exhibitRegionalTint,
    uExhibitColorVariation * uExhibitRegionDepth);
`;

const ROUGHNESS_LAYER = `
  roughnessFactor = clamp(roughnessFactor
    + (exhibitRegionValue - .5) * uExhibitRoughnessVariation, .10, 1.0);
`;

const NORMAL_LAYER = `
  float exhibitReliefHeight = exhibitHeight(exhibitP)
    * (uExhibitRelief / uExhibitScale);
  normal = exhibitSurfaceNormal(-vViewPosition, normal, exhibitReliefHeight);
`;

const EDGE_LAYER = `
  // A bounded, surface-only warm edge cue; no scattering or thickness solver.
  vec3 exhibitViewDirection = normalize(vViewPosition);
  vec3 exhibitRimDirection = normalize(mat3(viewMatrix) * uExhibitRimDirection);
  float exhibitEdge = pow(1.0 - clamp(dot(normal, exhibitViewDirection), 0.0, 1.0), 3.4);
  float exhibitBacklight = smoothstep(.04, .78, dot(normal, exhibitRimDirection));
  outgoingLight += diffuseColor.rgb * uExhibitRimTint
    * (exhibitEdge * exhibitBacklight * uExhibitEdgeStrength);
`;

function replaceHook(source, hook, replacement) {
  if (!source.includes(hook)) throw new Error(`${SURFACE_VERSION}: Three.js shader hook missing: ${hook}`);
  return source.replace(hook, replacement);
}

function finite(value, fallback, minimum = 0, maximum = 1) {
  return Number.isFinite(value) ? THREE.MathUtils.clamp(value, minimum, maximum) : fallback;
}

function variantPhase(variant) {
  // Stable variants, with no random state and no time uniform.
  const text = String(variant);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  hash >>>= 0;
  return new THREE.Vector3(
    (hash & 1023) / 1023 * 6.28,
    ((hash >>> 10) & 1023) / 1023 * 6.28,
    ((hash >>> 20) & 1023) / 1023 * 6.28,
  );
}

/**
 * Create an owned MeshPhysicalMaterial for a teaching exhibit.
 *
 * role: protein | inner | nucleic | backbone. color and vertexColors retain their
 * normal Three.js meaning; existing vertex colors are never replaced by the shader.
 * variant: stable string/number for material identity; fieldVariant selects the
 * field phase, defaulting to variant. For RNAP use variant 'rnap-body'/'rnap-inner'
 * with fieldVariant 'rnap' on both to preserve one coordinate domain across parts.
 * surfaceScale: local field frequency. colorVariation, roughnessVariation, relief,
 * normalSlope and edgeStrength override role defaults; normalSlope is a tangent
 * slope (approximately radians for these small values), capped at .06.
 * Remaining options are ordinary MeshPhysicalMaterial constructor parameters.
 * Works with Mesh and InstancedMesh, with no UV requirement or extra texture.
 * Caller owns material.dispose(); create a fresh material instead of cloning hooks.
 */
export function createExhibitMaterial({
  color = '#86b5ac',
  role = 'protein',
  variant = 'default',
  fieldVariant = variant,
  vertexColors = false,
  surfaceScale = 1,
  colorVariation,
  roughnessVariation,
  relief,
  normalSlope,
  edgeStrength,
  rimDirection = new THREE.Vector3(5, 3, -5),
  rimTint = new THREE.Color().setRGB(1.12, .86, .64),
  ...physicalOptions
} = {}) {
  const preset = ROLES[role];
  if (!preset) throw new RangeError(`Unknown exhibit material role: ${role}`);

  const material = new THREE.MeshPhysicalMaterial({
    color,
    vertexColors,
    metalness: 0,
    roughness: preset.roughness,
    specularIntensity: preset.specularIntensity,
    specularColor: '#fff9ee',
    envMapIntensity: preset.envMapIntensity,
    ior: 1.36,
    clearcoat: 0,
    clearcoatRoughness: .86,
    sheen: 0,
    transmission: 0,
    thickness: 0,
    ...physicalOptions,
  });
  material.name = `Exhibit.${role}.${variant}`;
  material.userData.exhibitSurface = { role, variant, fieldVariant };
  // r160 uses derivatives in the physical shader already; this also covers WebGL1.
  material.extensions = { ...material.extensions, derivatives: true };

  const direction = rimDirection.clone();
  if (direction.lengthSq() < 1e-8) direction.set(5, 3, -5);
  direction.normalize();
  const uniforms = {
    uExhibitScale: { value: finite(surfaceScale, 1, .02, 30) },
    uExhibitPhase: { value: variantPhase(fieldVariant) },
    uExhibitColorVariation: { value: finite(colorVariation, preset.colorVariation, 0, 1) },
    uExhibitRegionDepth: { value: preset.regionDepth },
    uExhibitDetailField: { value: preset.detailField },
    uExhibitRoughnessVariation: { value: finite(roughnessVariation, preset.roughnessVariation, 0, .12) },
    uExhibitRelief: { value: finite(relief, preset.relief, 0, .020) },
    uExhibitNormalSlope: { value: finite(normalSlope, preset.normalSlope, 0, .06) },
    uExhibitEdgeStrength: { value: finite(edgeStrength, preset.edgeStrength, 0, .10) },
    uExhibitRimDirection: { value: direction },
    uExhibitRimTint: { value: rimTint.isColor ? rimTint.clone() : new THREE.Color(rimTint) },
  };

  material.customProgramCacheKey = () => `${SURFACE_VERSION}:${role}`;
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = replaceHook(shader.vertexShader, '#include <common>', '#include <common>' + VERTEX_DECLARATIONS);
    shader.vertexShader = replaceHook(shader.vertexShader, '#include <project_vertex>', VERTEX_POSITION + '\n#include <project_vertex>');
    shader.fragmentShader = replaceHook(shader.fragmentShader, '#include <common>', '#include <common>' + FRAGMENT_DECLARATIONS);
    shader.fragmentShader = replaceHook(shader.fragmentShader, '#include <color_fragment>', '#include <color_fragment>' + COLOR_LAYER);
    shader.fragmentShader = replaceHook(shader.fragmentShader, '#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>' + ROUGHNESS_LAYER);
    shader.fragmentShader = replaceHook(shader.fragmentShader, '#include <normal_fragment_maps>', '#include <normal_fragment_maps>' + NORMAL_LAYER);
    shader.fragmentShader = replaceHook(shader.fragmentShader, '#include <opaque_fragment>', EDGE_LAYER + '\n#include <opaque_fragment>');
  };
  return material;
}

function makeSoftboxMask() {
  const size = 64;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = (x / (size - 1)) * 2 - 1;
    const v = (y / (size - 1)) * 2 - 1;
    // A broad Gaussian, smoothly reduced to zero at every boundary.
    const boundary = 1 - Math.max(Math.abs(u), Math.abs(v));
    const taper = THREE.MathUtils.smoothstep(boundary, 0, .28);
    const alpha = Math.exp(-1.9 * (u * u + v * v)) * taper;
    const offset = (y * size + x) * 4;
    pixels[offset] = pixels[offset + 1] = pixels[offset + 2] = 255;
    pixels[offset + 3] = Math.round(alpha * 255);
  }
  const texture = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat);
  texture.colorSpace = THREE.NoColorSpace;
  texture.minFilter = texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Generate one static, original, wide-softbox PMREM with the supplied renderer.
 * Set scene.environment = result.texture; keep scene.background independently.
 * This function restores renderer state and disposes all temporary source resources.
 * When leaving the scene: clear scene.environment, then call result.dispose().
 * The returned render target owns its texture; dispose it only through this handle.
 */
export function createExhibitEnvironment(renderer) {
  if (!renderer?.isWebGLRenderer) throw new TypeError('createExhibitEnvironment needs a WebGLRenderer');
  const environmentScene = new THREE.Scene();
  environmentScene.background = new THREE.Color().setRGB(.105, .132, .148);
  const mask = makeSoftboxMask();
  const sources = [];
  const softboxes = [
    { position: [-4, 12, 5], size: [30, 26], color: '#fff1dc', intensity: 1.65 },
    { position: [13, 4, -6], size: [28, 26], color: '#d8eef2', intensity: .90 },
    { position: [-9, 2, -13], size: [26, 24], color: '#e2eddf', intensity: .78 },
    { position: [0, -15, 2], size: [30, 28], color: '#d1dad3', intensity: .30 },
  ];
  for (const box of softboxes) {
    const geometry = new THREE.PlaneGeometry(...box.size);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(box.color).multiplyScalar(box.intensity),
      map: mask,
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      toneMapped: false,
    });
    const panel = new THREE.Mesh(geometry, material);
    panel.position.set(...box.position);
    panel.lookAt(0, 0, 0);
    environmentScene.add(panel);
    sources.push({ geometry, material });
  }

  const previous = {
    target: renderer.getRenderTarget(),
    cubeFace: renderer.getActiveCubeFace(),
    mipLevel: renderer.getActiveMipmapLevel(),
    viewport: renderer.getViewport(new THREE.Vector4()),
    scissor: renderer.getScissor(new THREE.Vector4()),
    scissorTest: renderer.getScissorTest(),
    autoClear: renderer.autoClear,
    toneMapping: renderer.toneMapping,
    xrEnabled: renderer.xr.enabled,
  };
  let generator;
  let target;
  try {
    renderer.xr.enabled = false;
    generator = new THREE.PMREMGenerator(renderer);
    target = generator.fromScene(environmentScene, .16, .1, 60);
    target.texture.name = 'GeneExpression.ExhibitEnvironment.v1';
  } finally {
    renderer.setRenderTarget(previous.target, previous.cubeFace, previous.mipLevel);
    renderer.setViewport(previous.viewport);
    renderer.setScissor(previous.scissor);
    renderer.setScissorTest(previous.scissorTest);
    renderer.autoClear = previous.autoClear;
    renderer.toneMapping = previous.toneMapping;
    renderer.xr.enabled = previous.xrEnabled;
    generator?.dispose();
    sources.forEach(({ geometry, material }) => { geometry.dispose(); material.dispose(); });
    mask.dispose();
    environmentScene.clear();
  }

  let disposed = false;
  return {
    texture: target.texture,
    dispose() {
      if (disposed) return;
      disposed = true;
      target.dispose();
    },
  };
}
