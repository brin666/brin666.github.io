const REQUIRED = ['RNAP_BODY', 'BASE_A', 'BASE_T', 'BASE_G', 'BASE_C', 'BASE_U', 'SUGAR', 'PHOSPHATE'];
const OPTIONAL = ['RNAP_INNER', 'RNAP_RIDGE'];

// Only the comparison page calls this. The original pilot has no asset request.
// Materials, biology and animation remain owned by the existing runtime.
export async function loadBlenderModels(variant = 'blender') {
  if (!['blender', 'exhibit'].includes(variant)) throw new Error('未知模型版本');
  const filename = variant === 'exhibit' ? 'gene-expression-exhibit.glb' : 'gene-expression-refined.glb';
  const started = performance.now();
  const { GLTFLoader } = await import('../vendor/addons/loaders/GLTFLoader.js');
  const loaded = await Promise.allSettled([
    new GLTFLoader().loadAsync(new URL(`./assets/${variant}/${filename}`, import.meta.url).href),
    (async () => {
      const response = await fetch(new URL(`./assets/${variant}/manifest.json`, import.meta.url));
      if (!response.ok) throw new Error(`精修模型说明加载失败 (${response.status})`);
      return response.json();
    })(),
  ]);
  const gltf = loaded[0].status === 'fulfilled' ? loaded[0].value : null;
  const geometries = {};
  try {
    for (const result of loaded) if (result.status === 'rejected') throw result.reason;
    gltf.scene.updateMatrixWorld(true);
    gltf.scene.traverse(object => {
      if (!object.isMesh || (!REQUIRED.includes(object.name) && !OPTIONAL.includes(object.name))) return;
      if (geometries[object.name]) throw new Error(`精修模型 ${object.name} 重复`);
      const mesh = object.geometry.clone().applyMatrix4(object.matrixWorld);
      // Register immediately so validation errors also release earlier clones.
      geometries[object.name] = mesh;
      const position = mesh.getAttribute('position');
      if (!position || !position.count || !Array.from(position.array).every(Number.isFinite)) {
        throw new Error(`精修模型 ${object.name} 的坐标无效`);
      }
      mesh.computeBoundingBox(); mesh.computeBoundingSphere();
      mesh.userData.authoring = 'Blender'; mesh.userData.interpretive = true;
    });
    const missing = REQUIRED.filter(name => !geometries[name]);
    if (missing.length) throw new Error(`精修模型缺少 ${missing.join(', ')}`);
    return { geometries, manifest: loaded[1].value, loadMs: performance.now() - started, generator: gltf.parser.json.asset.generator };
  } catch (error) {
    for (const mesh of Object.values(geometries)) mesh.dispose();
    throw error;
  } finally {
    // Always release imported preview resources, including partial failures.
    // Only cloned geometry and the approved browser materials reach the scene.
    const disposed = new Set();
    const release = value => { if (value && !disposed.has(value)) { disposed.add(value); value.dispose(); } };
    gltf?.scene.traverse(object => {
      if (!object.isMesh) return;
      release(object.geometry);
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        for (const value of Object.values(material)) if (value?.isTexture) release(value);
        release(material);
      }
    });
  }
}
