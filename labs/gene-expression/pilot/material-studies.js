import * as THREE from '../vendor/three.module.js';

export const STUDIES = {
  baseline: { title: '当前版本', subtitle: '保留原材质与原照明，作为比较基准。' },
  A: { title: '细腻哑光', subtitle: '温润曲面，柔和高光；用主光和接触阴影读清体块。' },
  B: { title: '生物教学展品', subtitle: '柔和的边缘透光与冷暖层次；主体保持清晰。' },
  C: { title: '清晰插画质感', subtitle: '低反光，克制的功能色区；加强课堂投影中的结构辨认。' },
};

const CONFIG = {
  A: { background: '#111d21', exposure: 1.12, ambient: .40, key: 2.7, fill: .43, keyColor: '#fff0db', fillColor: '#abc9d3', enzyme: '#afb7a0', inset: '#778d83', roughness: .87, specular: .16, bump: .0018, edge: 0 },
  B: { background: '#111d21', exposure: 1.06, ambient: .48, key: 2.4, fill: 1.0, keyColor: '#fff1db', fillColor: '#a0d6dc', enzyme: '#86b5ac', inset: '#558f91', roughness: .76, specular: .19, bump: .0012, edge: .12 },
  C: { background: '#152328', exposure: 1.03, ambient: .66, key: 2.3, fill: .34, keyColor: '#fff1df', fillColor: '#b8d4da', enzyme: '#6f9baf', inset: '#416679', roughness: .96, specular: .035, bump: 0, edge: 0 },
};

// Low amplitude, smoothly varying height. No high frequency grain or sandpaper.
function makeSoftHeight() {
  const size = 128, data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size * Math.PI * 2, v = y / size * Math.PI * 2;
    const value = Math.round(128 + 10 * Math.sin(u * 3 + Math.sin(v * 2)) + 6 * Math.cos(v * 5 - u * 2));
    const i = (y * size + x) * 4;
    data[i] = data[i + 1] = data[i + 2] = value; data[i + 3] = 255;
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true; texture.needsUpdate = true;
  return texture;
}

// Gentle background falloff separates the foreground without bloom, grain or blur.
function makeBackdrop(edge, center) {
  const toRgb = hex => [1, 3, 5].map(offset => parseInt(hex.slice(offset, offset + 2), 16));
  const a = toRgb(edge), b = toRgb(center), size = 128, data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const distance = ((x / size - .61) / .65) ** 2 + ((y / size - .58) / .65) ** 2;
    const t = Math.exp(-distance * 2.5) * .80;
    const i = (y * size + x) * 4;
    for (let channel = 0; channel < 3; channel++) data[i + channel] = Math.round(a[channel] + (b[channel] - a[channel]) * t);
    data[i + 3] = 255;
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace; texture.magFilter = texture.minFilter = THREE.LinearFilter; texture.needsUpdate = true;
  return texture;
}

const PROPERTIES = ['roughness', 'roughnessMap', 'bumpMap', 'bumpScale', 'specularIntensity', 'sheen', 'clearcoat', 'clearcoatRoughness', 'transmission', 'thickness', 'ior', 'attenuationDistance', 'depthWrite', 'transparent', 'opacity'];

/** An opt-in appearance experiment. Geometry, camera and biological poses are untouched. */
export function createMaterialStudyRig({ scene, renderer, lights, materials, enzyme, incomingGroup, floor }) {
  const height = makeSoftHeight();
  const backdrops = { A: makeBackdrop('#111b1e', '#233038'), B: makeBackdrop('#101b20', '#223b41'), C: makeBackdrop('#152328', '#2b3c43') };
  const origin = new THREE.Vector3();
  const rimDirection = new THREE.Vector3();
  let id = 'baseline';
  let structure = 'legacy';
  const originalRenderer = { background: scene.background.clone(), toneMapping: renderer.toneMapping, exposure: renderer.toneMappingExposure };
  const originalFloorOpacity = floor.material.opacity;
  const originalLights = Object.fromEntries(Object.entries(lights).map(([name, light]) => [name, { color: light.color.clone(), intensity: light.intensity, position: light.position.clone() }]));
  const savedMaterials = materials.map(({ material, kind, role }) => ({
    material, kind, role, color: material.color.clone(), attenuationColor: material.attenuationColor.clone(),
    properties: Object.fromEntries(PROPERTIES.map(key => [key, material[key]])),
    compile: material.onBeforeCompile, cacheKey: material.customProgramCacheKey,
  }));
  const shadowObjects = [];
  enzyme.traverse(object => { if (object.isMesh) shadowObjects.push({ object, cast: object.castShadow, receive: object.receiveShadow, enzyme: true }); });
  incomingGroup.traverse(object => { if (object.isMesh) shadowObjects.push({ object, cast: object.castShadow, receive: object.receiveShadow, enzyme: false }); });

  function restore() {
    scene.background = originalRenderer.background.clone();
    renderer.toneMapping = originalRenderer.toneMapping; renderer.toneMappingExposure = originalRenderer.exposure;
    floor.material.opacity = originalFloorOpacity;
    for (const [name, saved] of Object.entries(originalLights)) {
      lights[name].color.copy(saved.color); lights[name].intensity = saved.intensity; lights[name].position.copy(saved.position);
    }
    for (const saved of savedMaterials) {
      saved.material.color.copy(saved.color); saved.material.attenuationColor.copy(saved.attenuationColor);
      Object.assign(saved.material, saved.properties);
      saved.material.onBeforeCompile = saved.compile; saved.material.customProgramCacheKey = saved.cacheKey;
    }
    for (const saved of shadowObjects) { saved.object.castShadow = saved.cast; saved.object.receiveShadow = saved.receive; }
  }

  function enzymeShader(material, mode, config) {
    material.customProgramCacheKey = () => `transcription-surface-study-${mode}`;
    material.onBeforeCompile = shader => {
      shader.uniforms.studyOrigin = { value: origin };
      shader.uniforms.studyRimLight = { value: rimDirection };
      shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vStudyWorld;');
      shader.vertexShader = shader.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\nvStudyWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vStudyWorld;\nuniform vec3 studyOrigin;\nuniform vec3 studyRimLight;');
      // The aperture-side accent follows the whole enzyme, including its lobes.
      // Colors indicate teaching roles, not visible molecular pigmentation.
      const surface = mode === 'C' ? `
        vec3 studyP = vStudyWorld - studyOrigin;
        float studyGate = 1.0 - smoothstep(.40, 1.35, length(vec2(studyP.x - .56, studyP.y + 1.14)));
        float studyTop = smoothstep(-.70, .95, studyP.y);
        diffuseColor.rgb *= mix(vec3(.78,.88,.94), vec3(1.06,1.04,.97), studyTop);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.64,.28,.10), studyGate * .70);
      ` : `
        vec3 studyP = vStudyWorld - studyOrigin;
        float studySoft = .5 + .5 * sin(studyP.x * 1.55 + studyP.z * 1.2) * cos(studyP.y * 2.1);
        diffuseColor.rgb *= mix(vec3(.94,.97,1.0), vec3(1.035,1.02,.975), studySoft);
      `;
      shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\n' + surface);
      let light = '';
      if (mode === 'B') light = `
        // A bounded, surface-only backlit rim cue. This is not a physical SSS solver.
        float studyRim = pow(1.0 - clamp(dot(normal, geometryViewDir), 0.0, 1.0), 3.0);
        vec3 studyBackLight = normalize(mat3(viewMatrix) * studyRimLight);
        float studyBack = smoothstep(.0, .8, dot(normal, studyBackLight));
        outgoingLight += vec3(.22,.43,.39) * studyRim * studyBack * ${config.edge.toFixed(3)};
      `;
      if (mode === 'C') light = `
        float studyLuma = max(dot(outgoingLight, vec3(.2126,.7152,.0722)), .001);
        float studyBand = mix(.24, .52, smoothstep(.16,.32,studyLuma)) + .18 * smoothstep(.43,.65,studyLuma);
        outgoingLight *= mix(1.0, studyBand / studyLuma, .48);
      `;
      shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', light + '\n#include <opaque_fragment>');
    };
  }

  function apply(next = 'baseline') {
    id = Object.hasOwn(STUDIES, next) ? next : 'baseline';
    restore();
    if (id !== 'baseline') {
      const config = CONFIG[id];
      scene.background = backdrops[id];
      floor.material.opacity = id === 'A' ? .065 : .045;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = config.exposure;
      lights.hemisphere.intensity = config.ambient;
      lights.key.intensity = config.key; lights.key.color.set(config.keyColor); lights.key.position.set(-4, 5, 8);
      lights.fill.intensity = config.fill; lights.fill.color.set(config.fillColor); lights.fill.position.set(5, 3, -5);
      for (const saved of savedMaterials) {
        const m = saved.material;
        const protein = saved.role.startsWith('enzyme');
        m.clearcoat = 0; m.sheen = 0;
        m.roughnessMap = null;
        m.roughness = protein ? config.roughness : id === 'C' ? .93 : .82;
        m.specularIntensity = protein ? config.specular : .09;
        m.bumpMap = protein && id !== 'C' ? height : null;
        m.bumpScale = protein ? config.bump : 0;
        m.transmission = 0; m.thickness = 0;
        if (m.transparent) m.depthWrite = false;
        if (protein) {
          m.color.set(saved.role === 'enzyme-inset' || saved.role === 'enzyme-inner' ? config.inset : config.enzyme);
          if (id === 'B') { m.transmission = .055; m.thickness = .16; m.ior = 1.27; m.attenuationColor.set('#93c6b0'); m.attenuationDistance = 2.4; }
          enzymeShader(m, id, config);
          if (saved.role === 'enzyme-inner') {
            m.color.multiplyScalar(.62); m.roughness = .86;
            m.specularIntensity *= .55; m.transmission = 0;
          }
        }
        if (structure === 'exhibit' && id !== 'C') {
          if (saved.kind === 'backbone') { m.roughness = .64; m.specularIntensity = .12; }
          if (saved.kind === 'base') { m.roughness = .89; m.specularIntensity = .065; }
        }
        if (saved.role === 'coding') m.color.set(id === 'C' ? '#96b1b8' : '#a7bfc0');
        if (saved.role === 'template') m.color.set(id === 'C' ? '#d9bd83' : '#cfb491');
        if (saved.role === 'rna') m.color.set(id === 'C' ? '#e5a17c' : '#dca17e');
      }
      for (const saved of shadowObjects) {
        if (saved.enzyme) saved.object.receiveShadow = true;
        else saved.object.castShadow = false;
      }
    }
    for (const { material } of savedMaterials) material.needsUpdate = true;
    sync();
  }
  function sync() { enzyme.getWorldPosition(origin); rimDirection.copy(lights.fill.position).sub(lights.fill.target.position).normalize(); }
  return {
    apply, sync,
    setStructure(value) { structure = value; apply(id); },
    probe(factor) {
      // Readable diagnostic captures, separate from the three public appearance proposals.
      restore(); id = 'baseline';
      if (factor === 'roughness-map') for (const { material } of savedMaterials) material.roughnessMap = null;
      if (factor === 'fill-light') { lights.hemisphere.intensity = .40; lights.fill.intensity = .43; }
      for (const { material } of savedMaterials) material.needsUpdate = true;
      sync();
    },
    getState: () => ({ id, ...STUDIES[id], physicalSubsurfaceScattering: false, geometryUnchanged: true, backgroundMode: id === 'baseline' ? 'original' : 'gentle-gradient', parameters: id === 'baseline' ? null : { ...CONFIG[id] } }),
    dispose() { restore(); height.dispose(); Object.values(backdrops).forEach(texture => texture.dispose()); },
  };
}
