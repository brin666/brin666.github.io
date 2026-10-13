import * as THREE from './vendor/three.module.js';
import { EXPORT_FRAME } from './nuclear-export-path.js';

// A camera-facing color field fills the viewport instead of ending at a
// world-space horizon. Its split follows the projected nuclear +X direction
// and passes through the pore in every camera pose.
const BACKDROP_DISTANCE = 98;
const BACKDROP_OVERSCAN = 1.08;
const CENTER_FADE = .8;

function createRegionMaterial(region, color, opacity, ownMaterial) {
  const uniforms = {
    halfSize: { value: new THREE.Vector2(1, 1) },
    poreScreen: { value: new THREE.Vector2() },
    splitAxis: { value: new THREE.Vector2(1, 0) },
  };
  const material = ownMaterial(new THREE.MeshBasicMaterial({
    color,
    opacity,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    forceSinglePass: true,
    fog: false,
    toneMapped: false,
  }));
  // Complementary masks keep the total tint continuous across the pore.
  // Two disjoint half-fades would both reach zero at the center and expose
  // the bare scene background as a conspicuous line.
  const mask = region === 'nucleus'
    ? `1.0 - smoothstep(-${CENTER_FADE.toFixed(2)}, ${CENTER_FADE.toFixed(2)}, exportSpaceSide)`
    : `smoothstep(-${CENTER_FADE.toFixed(2)}, ${CENTER_FADE.toFixed(2)}, exportSpaceSide)`;
  material.onBeforeCompile = shader => {
    shader.uniforms.uExportSpaceHalfSize = uniforms.halfSize;
    shader.uniforms.uExportSpacePoreScreen = uniforms.poreScreen;
    shader.uniforms.uExportSpaceSplitAxis = uniforms.splitAxis;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform vec2 uExportSpaceHalfSize;\nvarying vec2 vExportSpaceScreen;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvExportSpaceScreen = position.xy * uExportSpaceHalfSize;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec2 uExportSpacePoreScreen;\nuniform vec2 uExportSpaceSplitAxis;\nvarying vec2 vExportSpaceScreen;')
      .replace('#include <color_fragment>', `#include <color_fragment>\nfloat exportSpaceSide = dot(vExportSpaceScreen - uExportSpacePoreScreen, uExportSpaceSplitAxis);\ndiffuseColor.a *= ${mask};`);
  };
  material.customProgramCacheKey = () => `nuclear-export-space-v3:${region}`;
  material.userData.nuclearExportSpace = { region, fadeWidth: CENTER_FADE, uniforms };
  return material;
}

export function createNuclearExportSpace(parent, { geometry, ownMaterial } = {}) {
  if (!parent || typeof geometry !== 'function' || typeof ownMaterial !== 'function') {
    throw new TypeError('Nuclear export space needs a parent and registered resource factories');
  }

  const group = new THREE.Group();
  group.name = 'nuclear-export-space-background';
  parent.add(group);

  // PlaneGeometry spans [-1, 1] on each axis. Its material uniforms use the
  // matching half-size, so the soft boundary is measured in camera-plane units.
  const planeGeometry = geometry(new THREE.PlaneGeometry(2, 2));
  const regions = [
    { region: 'nucleus', color: '#789989', opacity: .19 },
    { region: 'cytoplasm', color: '#7894ad', opacity: .17 },
  ];
  const meshes = regions.map(({ region, color, opacity }) => {
    const mat = createRegionMaterial(region, color, opacity, ownMaterial);
    const mesh = new THREE.Mesh(planeGeometry, mat);
    mesh.name = `nuclear-export-space-${region}`;
    mesh.renderOrder = -30;
    mesh.frustumCulled = false;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    group.add(mesh);
    return mesh;
  });

  const poreLocal = new THREE.Vector3(EXPORT_FRAME.x, EXPORT_FRAME.y, EXPORT_FRAME.z);
  const cameraWorldPosition = new THREE.Vector3();
  const cameraWorldQuaternion = new THREE.Quaternion();
  const inverseCameraQuaternion = new THREE.Quaternion();
  const cameraForward = new THREE.Vector3();
  const poreWorld = new THREE.Vector3();
  const poreCamera = new THREE.Vector3();
  const nucleusAxisWorld = new THREE.Vector3();
  const cameraRightWorld = new THREE.Vector3();
  const cameraUpWorld = new THREE.Vector3();
  const parentWorldQuaternion = new THREE.Quaternion();
  const inverseParentQuaternion = new THREE.Quaternion();
  const parentWorldScale = new THREE.Vector3();
  const localScale = new THREE.Vector3();
  const planeWorldPosition = new THREE.Vector3();
  const splitAxis = new THREE.Vector2(1, 0);
  let lastStableSplitAxis = splitAxis.clone();
  let projectionState = null;

  function updateView(camera) {
    if (!camera) return false;
    camera.updateWorldMatrix(true, false);
    parent.updateWorldMatrix(true, false);
    camera.getWorldPosition(cameraWorldPosition);
    camera.getWorldQuaternion(cameraWorldQuaternion);
    cameraForward.set(0, 0, -1).applyQuaternion(cameraWorldQuaternion).normalize();

    // Keep this child of nucleus so stageOpacity, whiteboard material capture,
    // and the normal scene disposal path continue to own it.
    planeWorldPosition.copy(cameraWorldPosition).addScaledVector(cameraForward, BACKDROP_DISTANCE);
    parent.worldToLocal(planeWorldPosition);
    parent.getWorldQuaternion(parentWorldQuaternion);
    parent.getWorldScale(parentWorldScale);
    inverseParentQuaternion.copy(parentWorldQuaternion).invert();
    group.position.copy(planeWorldPosition);
    group.quaternion.copy(inverseParentQuaternion).multiply(cameraWorldQuaternion);
    localScale.set(
      1 / Math.max(1e-6, Math.abs(parentWorldScale.x)),
      1 / Math.max(1e-6, Math.abs(parentWorldScale.y)),
      1 / Math.max(1e-6, Math.abs(parentWorldScale.z)),
    );
    group.scale.copy(localScale);

    const fov = THREE.MathUtils.degToRad(camera.fov);
    const halfHeight = BACKDROP_DISTANCE * Math.tan(fov / 2) / Math.max(1e-6, camera.zoom || 1);
    const halfWidth = halfHeight * camera.aspect;
    const fieldHalfWidth = halfWidth * BACKDROP_OVERSCAN;
    const fieldHalfHeight = halfHeight * BACKDROP_OVERSCAN;
    for (const mesh of meshes) {
      mesh.scale.set(fieldHalfWidth, fieldHalfHeight, 1);
      const uniforms = mesh.material.userData.nuclearExportSpace.uniforms;
      uniforms.halfSize.value.set(fieldHalfWidth, fieldHalfHeight);
    }

    // Project the world-space pore into the same camera-facing plane used by
    // the color shader. This keeps the transition anchored even while the user
    // orbits, dollies, pans, or resizes the canvas.
    poreWorld.copy(poreLocal);
    parent.localToWorld(poreWorld);
    inverseCameraQuaternion.copy(cameraWorldQuaternion).invert();
    poreCamera.copy(poreWorld).sub(cameraWorldPosition).applyQuaternion(inverseCameraQuaternion);
    if (poreCamera.z < -1e-4) {
      const poreScale = BACKDROP_DISTANCE / -poreCamera.z;
      for (const mesh of meshes) {
        mesh.material.userData.nuclearExportSpace.uniforms.poreScreen.value.set(
          poreCamera.x * poreScale,
          poreCamera.y * poreScale,
        );
      }
    }

    // The sign is important: the positive side of the shader boundary is the
    // projected +X side (cytoplasm), and the negative side is nuclear interior.
    nucleusAxisWorld.set(1, 0, 0).transformDirection(parent.matrixWorld);
    cameraRightWorld.set(1, 0, 0).applyQuaternion(cameraWorldQuaternion);
    cameraUpWorld.set(0, 1, 0).applyQuaternion(cameraWorldQuaternion);
    splitAxis.set(nucleusAxisWorld.dot(cameraRightWorld), nucleusAxisWorld.dot(cameraUpWorld));
    if (splitAxis.lengthSq() > 1e-8) {
      splitAxis.normalize();
      lastStableSplitAxis.copy(splitAxis);
    } else {
      splitAxis.copy(lastStableSplitAxis);
    }
    for (const mesh of meshes) {
      mesh.material.userData.nuclearExportSpace.uniforms.splitAxis.value.copy(splitAxis);
    }

    projectionState = {
      distance: BACKDROP_DISTANCE,
      halfWidth: fieldHalfWidth,
      halfHeight: fieldHalfHeight,
      poreScreen: meshes[0].material.userData.nuclearExportSpace.uniforms.poreScreen.value.toArray(),
      splitAxis: splitAxis.toArray(),
    };
    return true;
  }

  return { group, meshes, updateView, getProjectionState: () => projectionState && { ...projectionState } };
}
