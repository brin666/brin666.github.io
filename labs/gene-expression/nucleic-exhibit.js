import * as THREE from './vendor/three.module.js';
import { createRefinedBaseGeometry } from './pilot/nucleic-base-geometry.js';

// Adapt the approved near-view ring topology to the full lab's local +Z axis.
// Anchor and tip remain at z=-.26 / +.26, preserving the animation contract.
export function adaptExhibitBase(source, base, metadata) {
  const g = source;
  g.computeBoundingBox();
  const center = g.boundingBox.getCenter(new THREE.Vector3());
  const size = g.boundingBox.getSize(new THREE.Vector3());
  const width = /A|G/.test(base) ? .28 : .26;
  const rotation = new THREE.Matrix4().makeRotationY(-Math.PI / 2);
  const scale = new THREE.Matrix4().makeScale(width / size.z, .05 / size.y, .52 / size.x);
  const matrix = scale.multiply(rotation).multiply(new THREE.Matrix4().makeTranslation(-center.x, -center.y, -center.z));
  g.applyMatrix4(matrix);
  const transform = point => new THREE.Vector3(...point).applyMatrix4(matrix).toArray();
  g.userData = {
    ...metadata, authoring: source.userData.authoring || 'procedural',
    attachment: transform(metadata.attachment),
    pairingSites: metadata.pairingSites.map(site => ({ ...site, point: transform(site.point) })),
    molecularKind: `base-${base}`, interpretive: true,
  };
  g.computeBoundingBox(); g.computeBoundingSphere();
  return g;
}

export function createExhibitBase(base) {
  const g = createRefinedBaseGeometry(base);
  return adaptExhibitBase(g, base, g.userData);
}

// One draw call for many short hydrogen-contact dashes. These are teaching
// marks between schematic pairing edges, not measured atom-to-atom distances.
export function createPairingDashes(geometry, material, capacity = 420) {
  const object = new THREE.InstancedMesh(geometry, material, capacity);
  object.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  object.frustumCulled = false;
  object.count = 0;
  const pose = new THREE.Object3D(), direction = new THREE.Vector3();
  const start = new THREE.Vector3(), end = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  return {
    object,
    reset() { object.count = 0; },
    add(a, b, radius = .009) {
      direction.subVectors(b, a);
      if (direction.lengthSq() < 1e-10) return;
      for (let dash = 0; dash < 3 && object.count < capacity; dash++) {
        start.copy(a).lerp(b, (dash + .1) / 3);
        end.copy(a).lerp(b, (dash + .70) / 3);
        pose.position.copy(start).add(end).multiplyScalar(.5);
        direction.subVectors(end, start);
        pose.quaternion.setFromUnitVectors(up, direction.clone().normalize());
        pose.scale.set(radius, direction.length(), radius); pose.updateMatrix();
        object.setMatrixAt(object.count++, pose.matrix);
      }
    },
    finish() { object.visible = object.count > 0; object.instanceMatrix.needsUpdate = true; },
  };
}
