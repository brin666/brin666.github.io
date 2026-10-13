import * as THREE from './vendor/three.module.js';

// Coordinated teaching micro-motion in the geometry's own local frame.
// A material shared by several equivalent tRNAs/residues is installed once;
// mesh placement, nucleotide pairing and the real reaction timeline stay owned
// by the host. These fields are not measured molecular dynamics.
const VERSION = 'molecular-living-1', PERIOD = 12;
const clamp = value => Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const PROFILES = {
  ribosome: {
    scale: 1,
    weight: p => 1 - smooth(-.62, -.4, p.y) * (1 - smooth(.4, .68, p.y)) * smooth(-.14, .1, p.z),
    lock: 'y in [-.4,.4] and z >= .1; smooth taper behind/above/below the reading channel',
    glsl: `vec2 lo=molecularStep(-.62,-.4,p.y),hi=molecularStep(.4,.68,p.y),front=molecularStep(-.14,.1,p.z);
      float band=lo.x*(1.0-hi.x);
      weight=1.0-band*front.x;
      gradient=vec3(0.0,-(lo.y*(1.0-hi.x)-lo.x*hi.y)*front.x,-band*front.y);`,
  },
  trna: {
    scale: .85,
    weight: p => smooth(.15, .38, p.y) * (1 - smooth(1.20, 1.45, p.y)),
    lock: 'anticodon y <= .15; amino-acid attachment y >= 1.45',
    glsl: `vec2 lo=molecularStep(.15,.38,p.y),hi=molecularStep(1.20,1.45,p.y);
      weight=lo.x*(1.0-hi.x);
      gradient=vec3(0.0,lo.y*(1.0-hi.x)-lo.x*hi.y,0.0);`,
  },
  peptide: {
    scale: .55,
    weight: p => smooth(.20, .85, p.length()),
    lock: 'residue center radius <= .20; residue placement and peptide links stay fixed',
    glsl: `float radius=length(p);vec2 radial=molecularStep(.20,.85,radius);
      weight=radial.x;gradient=radial.y*p/max(radius,.00001);`,
  },
  pore: {
    scale: .70,
    weight: p => smooth(.53, .68, Math.hypot(p.y, p.z)),
    lock: 'collar local YZ radius <= .53; lumen and RNA path stay fixed',
    glsl: `float radius=length(p.yz);vec2 radial=molecularStep(.53,.68,radius);
      weight=radial.x;gradient=vec3(0.0,radial.y*p.yz/max(radius,.00001));`,
  },
};
const MAX_FIELD = Math.hypot(.026, .014, .028) * 1.15;

function modesAt(seconds) {
  const time = Number.isFinite(seconds) ? seconds : 0;
  const phase = ((time % PERIOD) + PERIOD) % PERIOD, angle = phase * Math.PI * 2 / PERIOD;
  return { phase, x: Math.sin(angle), y: Math.sin(angle * 2) };
}
function declarations(profile) {
  return `
uniform vec2 uMolecularModes;
uniform float uMolecularStrength;
uniform float uMolecularWorking;
vec2 molecularStep(float low,float high,float x) {
  float t=clamp((x-low)/(high-low),0.0,1.0);
  return vec2(t*t*(3.0-2.0*t),(x>low&&x<high)?6.0*t*(1.0-t)/(high-low):0.0);
}
void molecularField(vec3 p,out vec3 offset,out mat3 jacobian) {
  float weight;vec3 gradient;
  ${profile.glsl}
  float gain=uMolecularStrength*(1.0+.15*uMolecularWorking);
  float k=gain*weight;vec3 dk=gain*gradient;
  float first=uMolecularModes.x,second=uMolecularModes.y;
  float a=.9*p.y+.4*p.z+.35,b=.8*p.x-.35*p.z,c=.8*p.x-.35*p.y,d=.5*p.y+.4*p.z;
  vec3 field=vec3(.026*first*sin(a),.014*second*sin(b),.021*first*sin(c)+.007*second*sin(d));
  float ca=.026*first*cos(a),cb=.014*second*cos(b),cc=.021*first*cos(c),cd=.007*second*cos(d);
  offset=k*field;
  jacobian=mat3(
    vec3(1.,0.,0.)+k*vec3(0.,.8*cb,.8*cc)+dk.x*field,
    vec3(0.,1.,0.)+k*vec3(.9*ca,0.,-.35*cc+.5*cd)+dk.y*field,
    vec3(0.,0.,1.)+k*vec3(.4*ca,-.35*cb,.4*cd)+dk.z*field
  );
}
`;
}
const NORMAL = `
vec3 molecularOffset=vec3(0.0);
if(uMolecularStrength>0.0 && dot(uMolecularModes,uMolecularModes)>0.0) {
  mat3 molecularJacobian;molecularField(position,molecularOffset,molecularJacobian);
  objectNormal=normalize(objectNormal.x*cross(molecularJacobian[1],molecularJacobian[2])+
    objectNormal.y*cross(molecularJacobian[2],molecularJacobian[0])+
    objectNormal.z*cross(molecularJacobian[0],molecularJacobian[1]));
}
`;
function hook(source, name, content) {
  if (!source.includes(name)) throw new Error(`${VERSION}: shader hook missing ${name}`);
  return source.replace(name, `${name}\n${content}`);
}

export function createMolecularLivingMotion({ group, materials, kind, amplitude = 1 } = {}) {
  const profile = PROFILES[kind];
  if (!profile) throw new RangeError(`Unknown molecular motion kind: ${kind}`);
  if (!group?.isObject3D) throw new TypeError('Molecular motion requires an existing group');
  const owned = new Set();
  if (materials) for (const material of materials.isMaterial ? [materials] : materials) owned.add(material);
  else group.traverse(object => { if (object.isMesh) for (const material of Array.isArray(object.material) ? object.material : [object.material]) owned.add(material); });
  if (!owned.size || [...owned].some(material => !material?.isMaterial)) throw new TypeError('Molecular motion requires materials');
  const strength = clamp(amplitude) * profile.scale, count = owned.size;
  let enabled = true, disposed = false, seconds = 0, working = 0, phase = 0;
  const uniforms = { uMolecularModes: { value: new THREE.Vector2() }, uMolecularStrength: { value: strength }, uMolecularWorking: { value: 0 } };
  const installed = [];
  for (const material of owned) {
    const compile = material.onBeforeCompile, key = material.customProgramCacheKey;
    installed.push({ material, compile, key });
    material.onBeforeCompile = function(shader, renderer) {
      compile.call(this, shader, renderer); Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = hook(shader.vertexShader, '#include <common>', declarations(profile));
      shader.vertexShader = hook(shader.vertexShader, '#include <beginnormal_vertex>', NORMAL);
      shader.vertexShader = hook(shader.vertexShader, '#include <begin_vertex>', 'transformed+=molecularOffset;');
    };
    material.customProgramCacheKey = function() { return `${key.call(this)}:${VERSION}:${kind}`; };
    material.needsUpdate = true;
  }
  function update(time, { working: response = 0 } = {}) {
    if (disposed) return;
    seconds = Number.isFinite(time) ? time : 0; working = clamp(response);
    const modes = modesAt(seconds); phase = modes.phase;
    uniforms.uMolecularModes.value.set(modes.x, modes.y); uniforms.uMolecularWorking.value = working;
  }
  function setEnabled(value) { if (!disposed) { enabled = Boolean(value); uniforms.uMolecularStrength.value = enabled ? strength : 0; } }
  function sampleLocalPoint(point, time, { working: response = 0 } = {}) {
    const p = point?.isVector3 ? point.clone() : new THREE.Vector3().fromArray(point);
    if (![p.x, p.y, p.z].every(Number.isFinite)) throw new TypeError('Motion sample requires finite coordinates');
    if (disposed || !enabled) return p;
    const { x, y, z } = p, modes = modesAt(time), k = strength * profile.weight(p) * (1 + .15 * clamp(response));
    p.x += k * .026 * modes.x * Math.sin(.9 * y + .4 * z + .35);
    p.y += k * .014 * modes.y * Math.sin(.8 * x - .35 * z);
    p.z += k * (.021 * modes.x * Math.sin(.8 * x - .35 * y) + .007 * modes.y * Math.sin(.5 * y + .4 * z));
    return p;
  }
  function inspect() {
    return { kind, enabled: enabled && !disposed, disposed, amplitude: strength, seconds, phase, working, period: PERIOD,
      materials: count, maxDisplacement: MAX_FIELD * strength, lock: profile.lock, normals: 'analytic Jacobian cofactor',
      scientificScope: '受约束微动教学示意；不是实测分子动力学或新的反应机制' };
  }
  function dispose() {
    if (disposed) return;
    disposed = true; enabled = false; uniforms.uMolecularStrength.value = 0;
    for (const { material, compile, key } of installed) { material.onBeforeCompile = compile; material.customProgramCacheKey = key; material.needsUpdate = true; }
    installed.length = 0; owned.clear();
  }
  return { update, setEnabled, sampleLocalPoint, inspect, dispose };
}
