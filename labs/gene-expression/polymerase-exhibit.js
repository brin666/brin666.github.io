import * as THREE from './vendor/three.module.js';
import { GLTFLoader } from './vendor/addons/loaders/GLTFLoader.js';
import { createPolymeraseView } from './pilot/polymerase-view.js';

// Reuse the approved uncut, coarse 1Y1W protein envelopes. DNA/RNA and timing
// remain the main lesson's diagram; this placement is not an atomic alignment.
export async function loadPolymeraseExhibit() {
  const began = performance.now();
  const imported = await new GLTFLoader().loadAsync(new URL('./pilot/assets/perspective/polymerase-full.glb', import.meta.url).href);
  const group = new THREE.Group(), geometries = [], materials = [];
  group.name = 'RNAP_FULL_EXHIBIT';
  group.position.set(0, -.30, -.14); group.scale.setScalar(.98);
  const view = createPolymeraseView({ center: new THREE.Vector3(0, .0, .16), radii: new THREE.Vector2(1.18, 1.52), depthOffset: -.35 });
  const dispose = () => { geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); };
  imported.scene.updateMatrixWorld(true);
  const importedResources = new Set();
  try {
    const parts = [];
    imported.scene.traverse(object => {
      if (!object.isMesh) return;
      importedResources.add(object.geometry);
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        importedResources.add(material);
        for (const value of Object.values(material)) if (value?.isTexture) importedResources.add(value);
      }
      if (/^RNAP_RPB\d+$/.test(object.name)) parts.push(object);
    });
    if (parts.length !== 12) throw new Error('完整聚合酶必须包含十二个亚基');
    for (const object of parts) {
      const geometry = object.geometry.clone().applyMatrix4(object.matrixWorld);
      geometries.push(geometry);
      const index = Number(object.name.slice(8)) - 1;
      for (const ghost of [false, true]) {
        const material = view.surface(index, ghost); materials.push(material);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = object.name + (ghost ? '_TEACHING_OVERLAY' : '');
        mesh.userData.selection = ghost ? null : { type: 'polymerase' };
        mesh.userData.proteinWindow = !ghost;
        mesh.renderOrder = ghost ? 8 : 0;
        group.add(mesh);
      }
    }
    return { group, view, geometries, materials, loadMs: performance.now() - began, dispose };
  } catch (error) { dispose(); throw error; }
  finally { importedResources.forEach(resource => resource.dispose()); }
}
