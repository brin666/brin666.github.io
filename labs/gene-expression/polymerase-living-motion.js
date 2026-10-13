import * as THREE from './vendor/three.module.js';

// A shared, bounded pedagogical deformation field, not molecular dynamics or
// a measured clamp/trigger-loop trajectory. Coordinates belong to the existing
// baked 1Y1W envelopes; all twelve subunits and their overlays share this field.
const VERSION = 'polymerase-living-1';
const PERIOD = 12;
const LIMITS = Object.freeze({ x: .036, y: .025, z1: .034, z2: .008, work: .20 });
const MAX_DISPLACEMENT = (1 + LIMITS.work) * Math.hypot(LIMITS.x, LIMITS.y, LIMITS.z1 + LIMITS.z2);
const clamp01 = value => Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
const glsl = value => Number(value).toFixed(8);

function smoothstep(low, high, value) {
  const u = Math.max(0, Math.min(1, (value - low) / (high - low)));
  return u * u * (3 - 2 * u);
}
function modesAt(seconds) {
  const time = Number.isFinite(seconds) ? seconds : 0;
  const phase = ((time % PERIOD) + PERIOD) % PERIOD;
  const angle = phase * (Math.PI * 2 / PERIOD);
  return { phase, first: Math.sin(angle), second: Math.sin(angle * 2) };
}
function weightAt(x, y, z, working) {
  const lx = 1 - smoothstep(.85, 1.02, Math.abs(x));
  const ly = smoothstep(-.55, -.35, y) * (1 - smoothstep(.85, 1.05, y));
  const lz = smoothstep(-.12, .10, z);
  const shoulder = smoothstep(.70, 1.05, Math.abs(x)) * smoothstep(.30, .85, y);
  return (1 - lx * ly * lz) * (1 + LIMITS.work * working * shoulder);
}

// Analytic spatial derivatives avoid six extra field evaluations per vertex.
// A single evaluation produces both displacement and the deformation Jacobian.
const DECLARATIONS = `
uniform vec2 uPolyLivingModes;
uniform float uPolyLivingStrength;
uniform float uPolyLivingWorking;

vec2 polyLivingStep(float low, float high, float value) {
  float u = clamp((value - low) / (high - low), 0.0, 1.0);
  float derivative = (value > low && value < high) ? 6.0 * u * (1.0 - u) / (high - low) : 0.0;
  return vec2(u * u * (3.0 - 2.0 * u), derivative);
}

void polyLivingField(vec3 p, out vec3 offset, out mat3 jacobian) {
  vec2 lockXStep = polyLivingStep(.85, 1.02, abs(p.x));
  vec2 lockYLow = polyLivingStep(-.55, -.35, p.y);
  vec2 lockYHigh = polyLivingStep(.85, 1.05, p.y);
  vec2 lockZStep = polyLivingStep(-.12, .10, p.z);
  float lx = 1.0 - lockXStep.x;
  float ly = lockYLow.x * (1.0 - lockYHigh.x);
  float lz = lockZStep.x;
  vec3 lockGradient = vec3(
    -lockXStep.y * sign(p.x) * ly * lz,
    lx * (lockYLow.y * (1.0 - lockYHigh.x) - lockYLow.x * lockYHigh.y) * lz,
    lx * ly * lockZStep.y
  );
  float freeWeight = 1.0 - lx * ly * lz;

  vec2 shoulderX = polyLivingStep(.70, 1.05, abs(p.x));
  vec2 shoulderY = polyLivingStep(.30, .85, p.y);
  float gain = 1.0 + ${glsl(LIMITS.work)} * uPolyLivingWorking * shoulderX.x * shoulderY.x;
  vec3 gainGradient = ${glsl(LIMITS.work)} * uPolyLivingWorking * vec3(
    shoulderX.y * sign(p.x) * shoulderY.x,
    shoulderX.x * shoulderY.y,
    0.0
  );
  float k = uPolyLivingStrength * freeWeight * gain;
  vec3 kGradient = uPolyLivingStrength * (-lockGradient * gain + freeWeight * gainGradient);

  float first = uPolyLivingModes.x;
  float second = uPolyLivingModes.y;
  float a = .85 * p.y + .35 * p.z + .4;
  float b = .80 * p.x - .30 * p.z;
  float c = .90 * p.x - .25 * p.y;
  float d = .50 * p.y + .40 * p.z;
  vec3 field = vec3(
    ${glsl(LIMITS.x)} * first * sin(a),
    ${glsl(LIMITS.y)} * second * sin(b),
    ${glsl(LIMITS.z1)} * first * sin(c) + ${glsl(LIMITS.z2)} * second * sin(d)
  );
  float ca = ${glsl(LIMITS.x)} * first * cos(a);
  float cb = ${glsl(LIMITS.y)} * second * cos(b);
  float cc = ${glsl(LIMITS.z1)} * first * cos(c);
  float cd = ${glsl(LIMITS.z2)} * second * cos(d);
  vec3 derivativeX = vec3(0.0, .80 * cb, .90 * cc);
  vec3 derivativeY = vec3(.85 * ca, 0.0, -.25 * cc + .50 * cd);
  vec3 derivativeZ = vec3(.35 * ca, -.30 * cb, .40 * cd);
  offset = k * field;
  jacobian = mat3(
    vec3(1.0, 0.0, 0.0) + k * derivativeX + kGradient.x * field,
    vec3(0.0, 1.0, 0.0) + k * derivativeY + kGradient.y * field,
    vec3(0.0, 0.0, 1.0) + k * derivativeZ + kGradient.z * field
  );
}
`;

const NORMAL_HOOK = `
vec3 polyLivingOffset = vec3(0.0);
if (uPolyLivingStrength > 0.0 && dot(uPolyLivingModes, uPolyLivingModes) > 0.0) {
  mat3 polyLivingJacobian;
  polyLivingField(position, polyLivingOffset, polyLivingJacobian);
  // cofactor(J) * n is det(J) * inverse-transpose(J) * n. The bounded,
  // low-slope field preserves orientation without a matrix inverse in GLSL1.
  objectNormal = normalize(
    objectNormal.x * cross(polyLivingJacobian[1], polyLivingJacobian[2]) +
    objectNormal.y * cross(polyLivingJacobian[2], polyLivingJacobian[0]) +
    objectNormal.z * cross(polyLivingJacobian[0], polyLivingJacobian[1])
  );
}
`;

function replaceHook(source, hook, value) {
  if (!source.includes(hook)) throw new Error(`${VERSION}: 缺少 shader 钩子 ${hook}`);
  return source.replace(hook, `${hook}\n${value}`);
}

/**
 * Install after the envelope's surface/work-window hooks. The existing meshes
 * are static, unskinned, with baked common-coordinate POSITION/NORMAL data.
 * No geometry, texture, independent clock or animation frame is allocated.
 */
export function createPolymeraseLivingMotion({ group, materials, amplitude = 1 } = {}) {
  if (!group?.isObject3D) throw new TypeError('聚合酶微动需要已有模型 group');
  const strength = clamp01(amplitude);
  const collected = new Set();
  if (materials) {
    for (const material of materials.isMaterial ? [materials] : materials) collected.add(material);
  } else {
    group.traverse(object => {
      if (!object.isMesh) return;
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) collected.add(material);
    });
  }
  if (!collected.size || [...collected].some(material => !material?.isMaterial)) throw new TypeError('聚合酶微动需要模型材质');

  let enabled = true, disposed = false, seconds = 0, working = 0, phase = 0;
  const uniforms = {
    uPolyLivingModes: { value: new THREE.Vector2() },
    uPolyLivingStrength: { value: strength },
    uPolyLivingWorking: { value: 0 },
  };
  const previous = [];
  for (const material of collected) {
    const compile = material.onBeforeCompile, key = material.customProgramCacheKey;
    previous.push({ material, compile, key });
    material.onBeforeCompile = function(shader, renderer) {
      compile.call(this, shader, renderer);
      Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = replaceHook(shader.vertexShader, '#include <common>', DECLARATIONS);
      shader.vertexShader = replaceHook(shader.vertexShader, '#include <beginnormal_vertex>', NORMAL_HOOK);
      shader.vertexShader = replaceHook(shader.vertexShader, '#include <begin_vertex>', 'transformed += polyLivingOffset;');
      // The previously installed exhibit varying is assigned at project_vertex,
      // after this displacement, so the surface field follows the moved mesh.
    };
    material.customProgramCacheKey = function() { return `${key.call(this)}:${VERSION}`; };
    material.needsUpdate = true;
  }

  function update(nextSeconds, { working: nextWorking = 0 } = {}) {
    if (disposed) return;
    seconds = Number.isFinite(nextSeconds) ? nextSeconds : 0;
    working = clamp01(nextWorking);
    const modes = modesAt(seconds); phase = modes.phase;
    uniforms.uPolyLivingModes.value.set(modes.first, modes.second);
    uniforms.uPolyLivingWorking.value = working;
  }
  function setEnabled(value) {
    if (disposed) return;
    enabled = Boolean(value); uniforms.uPolyLivingStrength.value = enabled ? strength : 0;
  }
  function sampleLocalPoint(point, sampleSeconds, { working: sampleWorking = 0 } = {}) {
    const result = point?.isVector3 ? point.clone() : new THREE.Vector3().fromArray(point);
    if (![result.x, result.y, result.z].every(Number.isFinite)) throw new TypeError('采样点需要三个有限坐标');
    if (disposed || !enabled || strength === 0) return result;
    const modes = modesAt(sampleSeconds), response = clamp01(sampleWorking);
    const { x, y, z } = result;
    const k = strength * weightAt(x, y, z, response);
    result.x += k * LIMITS.x * modes.first * Math.sin(.85 * y + .35 * z + .4);
    result.y += k * LIMITS.y * modes.second * Math.sin(.80 * x - .30 * z);
    result.z += k * (LIMITS.z1 * modes.first * Math.sin(.90 * x - .25 * y) + LIMITS.z2 * modes.second * Math.sin(.50 * y + .40 * z));
    return result;
  }
  function inspect() {
    return {
      enabled: enabled && !disposed, disposed, amplitude: strength, period: PERIOD, seconds, phase, working,
      materials: collected.size, maxDisplacement: strength * MAX_DISPLACEMENT,
      field: 'shared continuous spatial bending/torsion teaching field',
      normals: 'analytic Jacobian cofactor',
      lock: { x: [-.85, .85], y: [-.35, .85], zMin: .10,
        taper: { x: [.85, 1.02], yLow: [-.55, -.35], yHigh: [.85, 1.05], z: [-.12, .10] } },
      scientificScope: '协同微动教学示意；不代表真实夹钳、触发环或分子动力学',
    };
  }
  function dispose() {
    if (disposed) return;
    disposed = true; enabled = false; uniforms.uPolyLivingStrength.value = 0;
    for (const { material, compile, key } of previous) {
      material.onBeforeCompile = compile; material.customProgramCacheKey = key; material.needsUpdate = true;
    }
    previous.length = 0; collected.clear();
  }
  return { update, setEnabled, sampleLocalPoint, inspect, dispose };
}
