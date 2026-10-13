import { createExhibitMaterial } from './exhibit-surface.js';

// An art-directed hydrated surface, not measured protein optics or physical SSS.
// Geometry and opacity stay with the caller, including the teaching cutaway.
export function createBioProteinMaterial({ inner = false, residue = false, ...options } = {}) {
  const material = createExhibitMaterial({
    role: inner ? 'inner' : 'protein',
    roughness: inner ? .72 : residue ? .53 : .49,
    specularIntensity: inner ? .16 : .30,
    envMapIntensity: inner ? .40 : .53,
    ior: 1.36, clearcoat: 0, transmission: 0,
    sheen: inner ? .04 : .13, sheenRoughness: .78, sheenColor: '#e7dac0',
    colorVariation: inner ? .25 : .28,
    roughnessVariation: .048, relief: residue ? .0012 : .0034, normalSlope: residue ? .010 : .022,
    edgeStrength: inner ? .014 : .044,
    ...options,
  });
  const activity = { value: 0 };
  const compile = material.onBeforeCompile, key = material.customProgramCacheKey();
  material.onBeforeCompile = shader => {
    compile(shader);
    shader.uniforms.uBioActivity = activity;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uBioActivity;')
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        // Local, broad response with no displacement, shimmer or emission.
        float bioWork = exp(-dot(vExhibitSurfacePosition.xy, vExhibitSurfacePosition.xy) * 1.4);
        roughnessFactor = max(.36, roughnessFactor - .022 * bioWork * uBioActivity);
      `);
  };
  material.customProgramCacheKey = () => `bio-soft-1:${key}`;
  material.userData.bioSurface = { inner, residue, activity };
  return material;
}

export function setProteinActivity(material, phase = 0, enabled = true) {
  const uniform = material.userData.bioSurface?.activity;
  if (uniform) uniform.value = enabled && Number.isFinite(phase) ? Math.sin(Math.PI * Math.max(0, Math.min(1, phase))) ** 2 : 0;
}
