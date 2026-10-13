import * as THREE from '../vendor/three.module.js';
import { createExhibitMaterial } from '../exhibit-surface.js';
import { createBioProteinMaterial, setProteinActivity } from '../bio-protein-surface.js';

// A view-space teaching window. Protein geometry stays intact; only near-side
// fragments inside the projected work region fade. No physical transparency claim.
const CENTER = new THREE.Vector3(0, .16, .06);
const RADII = new THREE.Vector2(1.02, 1.06);
const DECLARATIONS = `
uniform vec3 uWorkViewCenter;
uniform vec2 uWorkRadii;
uniform float uWorkEnabled;
uniform float uWorkScale;
uniform float uWorkNearOffset;
float workWindowMask(vec3 p) {
  vec2 projected = (p.xy / max(.1, -p.z)
    - uWorkViewCenter.xy / max(.1, -uWorkViewCenter.z)) * max(.1, -uWorkViewCenter.z);
  float radius = length(projected / uWorkRadii);
  float region = 1.0 - smoothstep(.62, 1.0, radius);
  float nearSide = smoothstep(-.16 * uWorkScale, .04 * uWorkScale, p.z - uWorkViewCenter.z - uWorkNearOffset * uWorkScale);
  return region * nearSide * uWorkEnabled;
}
`;

export function createPolymeraseView({ center = CENTER, radii = RADII, depthOffset = 0 } = {}) {
  const bioSurface = new URLSearchParams(window.location.search).get('surface') !== 'previous';
  const surfaces = [];
  const uniforms = {
    uWorkViewCenter: { value: CENTER.clone() },
    uWorkRadii: { value: radii.clone() },
    uWorkScale: { value: 1 },
    uWorkNearOffset: { value: depthOffset },
    uWorkEnabled: { value: 1 },
  };
  const viewMatrix = new THREE.Matrix4();
  const modelScale = new THREE.Vector3();
  let transition = null, target = 1;
  const colors = bioSurface ? ['#c7bc99', '#b5ad90', '#cec3a4', '#bfbca6'] : ['#b7b09e', '#aaa593', '#bdb6a6', '#b0b1a8'];
  function surface(index, ghost = false) {
    const material = (bioSurface ? createBioProteinMaterial : createExhibitMaterial)({
      color: colors[index % colors.length], role: 'protein', variant: `pearl-${index}-${ghost}`,
      fieldVariant: 'rnap', vertexColors: true,
      ...(bioSurface ? {} : { roughness: .44, specularIntensity: .27, envMapIntensity: .46,
      clearcoat: 0, sheen: .16, sheenRoughness: .72, sheenColor: '#d6d1c2',
      colorVariation: .20, relief: .003, normalSlope: .019,
      roughnessVariation: .022, edgeStrength: .035 }),
      transparent: ghost, depthWrite: !ghost, side: THREE.FrontSide,
    });
    return wrap(material,ghost);
  }
  function wrap(material, ghost = false) {
    material.transparent=ghost;material.depthWrite=!ghost;material.side=THREE.FrontSide;
    const previousCompile = material.onBeforeCompile;
    const previousKey = material.customProgramCacheKey();
    material.onBeforeCompile = shader => {
      previousCompile(shader);
      Object.assign(shader.uniforms, uniforms);
      shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\n'+DECLARATIONS);
      const operation = ghost
        ? 'if (workMask <= .002) discard; diffuseColor.a *= 1.0 - .972 * workMask;'
        : 'if (workMask > .002) discard;';
      shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
        vec3 workPosition = -vViewPosition;
        float workMask = workWindowMask(workPosition);
        ${operation}
        // Calm the far wall within the work region, preserving a legible background.
        float farRegion = 1.0 - smoothstep(.65, 1.05,
          length((workPosition.xy / max(.1, -workPosition.z)
            - uWorkViewCenter.xy / max(.1, -uWorkViewCenter.z))
            * max(.1, -uWorkViewCenter.z) / uWorkRadii));
        float farWall = 1.0 - smoothstep(-.42 * uWorkScale, -.10 * uWorkScale, workPosition.z - uWorkViewCenter.z);
        diffuseColor.rgb *= 1.0 - .28 * farRegion * farWall * uWorkEnabled;
      `);
    };
    material.customProgramCacheKey = () => `${previousKey}:work-window-1:${ghost ? 'ghost' : 'opaque'}`;
    surfaces.push(material);
    return material;
  }
  function update(camera, modelMatrix = null) {
    if (transition) {
      const progress = Math.min(1, (performance.now() - transition.started) / 220);
      // CSS ease-out token: cubic-bezier(.23, 1, .32, 1), evaluated for WebGL.
      let low=0, high=1;
      const cubic=(a,b,t)=>3*a*(1-t)*(1-t)*t+3*b*(1-t)*t*t+t*t*t;
      for(let i=0;i<14;i++){const t=(low+high)/2;if(cubic(.23,.32,t)<progress)low=t;else high=t;}
      const eased = progress === 1 ? 1 : cubic(1,1,(low+high)/2);
      uniforms.uWorkEnabled.value=transition.from+(target-transition.from)*eased;
      if(progress===1)transition=null;
    }
    camera.updateMatrixWorld();
    viewMatrix.copy(camera.matrixWorldInverse);
    uniforms.uWorkViewCenter.value.copy(center);
    const scale = modelMatrix ? modelScale.setFromMatrixScale(modelMatrix).x : 1;
    uniforms.uWorkScale.value = scale;
    uniforms.uWorkRadii.value.copy(radii).multiplyScalar(scale);
    if (modelMatrix) uniforms.uWorkViewCenter.value.applyMatrix4(modelMatrix);
    uniforms.uWorkViewCenter.value.applyMatrix4(viewMatrix);
  }
  function opacityAt(point) {
    if (!uniforms.uWorkEnabled.value) return 1;
    const p = point.clone().applyMatrix4(viewMatrix), center = uniforms.uWorkViewCenter.value;
    const x=(p.x/Math.max(.1,-p.z)-center.x/Math.max(.1,-center.z))*Math.max(.1,-center.z)/uniforms.uWorkRadii.value.x;
    const y=(p.y/Math.max(.1,-p.z)-center.y/Math.max(.1,-center.z))*Math.max(.1,-center.z)/uniforms.uWorkRadii.value.y;
    const smooth=(lo,hi,v)=>{const t=THREE.MathUtils.clamp((v-lo)/(hi-lo),0,1);return t*t*(3-2*t);};
    const scale=uniforms.uWorkScale.value;
    const mask=(1-smooth(.62,1,Math.hypot(x,y)))*smooth(-.16*scale,.04*scale,p.z-center.z-depthOffset*scale);
    return 1-.972*mask*uniforms.uWorkEnabled.value;
  }
  function captureState() {
    return { value: uniforms.uWorkEnabled.value, target };
  }
  function restoreState(state) {
    if (!state || !Number.isFinite(state.value) || !Number.isFinite(state.target)) return false;
    // Preserve the current shader opacity while dropping wall-clock tween state.
    // Camera-facing matrices continue to update through update().
    transition = null;
    uniforms.uWorkEnabled.value = THREE.MathUtils.clamp(state.value, 0, 1);
    target = THREE.MathUtils.clamp(state.target, 0, 1);
    return true;
  }
    return { surface, wrap, update, opacityAt, captureState, restoreState, active:()=>Boolean(transition),
    setActivity(phase, enabled) { surfaces.forEach(m => setProteinActivity(m, phase, enabled)); },
    setEnabled(value,{animate=false}={}) {
      target=value?1:0;
      transition=animate?{from:uniforms.uWorkEnabled.value,started:performance.now()}:null;
      if(!animate)uniforms.uWorkEnabled.value=target;
    },
    finishTransition() { transition=null;uniforms.uWorkEnabled.value=target; },
    inspect:()=>({enabled:Boolean(target),amount:uniforms.uWorkEnabled.value,value:uniforms.uWorkEnabled.value,target,transitioning:Boolean(transition),center:center.toArray(),radii:uniforms.uWorkRadii.value.toArray(),nearOpacity:.028,roughness:bioSurface ? .49 : .44,specularIntensity:bioSurface ? .30 : .27,surface:bioSurface ? 'soft-warm' : 'previous'}) };
}
