import * as THREE from 'three';

// The polymerase surface does not deform; its parent moves as a whole. Build
// one local-space index per geometry, then transform each label ray into that
// space. This keeps the teaching window's view-space opacity test unchanged.
export function createProteinOcclusion() {
  let indexes = new WeakMap();
  const inverse = new THREE.Matrix4();
  const origin = new THREE.Vector3();
  const endpoint = new THREE.Vector3();
  const direction = new THREE.Vector3();
  const localHit = new THREE.Vector3();
  const worldHit = new THREE.Vector3();
  const triangle = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  const ray = new THREE.Ray();
  const stack = [];

  function build(geometry) {
    const position = geometry.getAttribute('position');
    if (!position) return null;
    const index = geometry.getIndex();
    const count = Math.floor((index?.count ?? position.count) / 3);
    if (!count) return null;
    const vertexIds = new Uint32Array(count * 3);
    const order = new Uint32Array(count);
    const bounds = new Float32Array(count * 6);
    const centers = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      order[i] = i;
      const b = i * 6, c = i * 3;
      let minX = Infinity, minY = Infinity, minZ = Infinity;
      let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
      for (let corner = 0; corner < 3; corner++) {
        const vertex = index ? index.getX(c + corner) : c + corner;
        vertexIds[c + corner] = vertex;
        const x = position.getX(vertex), y = position.getY(vertex), z = position.getZ(vertex);
        minX = Math.min(minX, x); minY = Math.min(minY, y); minZ = Math.min(minZ, z);
        maxX = Math.max(maxX, x); maxY = Math.max(maxY, y); maxZ = Math.max(maxZ, z);
      }
      bounds.set([minX, minY, minZ, maxX, maxY, maxZ], b);
      centers.set([(minX + maxX) * .5, (minY + maxY) * .5, (minZ + maxZ) * .5], c);
    }

    function node(start, end) {
      const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
      const centerMin = [Infinity, Infinity, Infinity], centerMax = [-Infinity, -Infinity, -Infinity];
      for (let j = start; j < end; j++) {
        const id = order[j], b = id * 6, c = id * 3;
        for (let axis = 0; axis < 3; axis++) {
          min[axis] = Math.min(min[axis], bounds[b + axis]);
          max[axis] = Math.max(max[axis], bounds[b + axis + 3]);
          centerMin[axis] = Math.min(centerMin[axis], centers[c + axis]);
          centerMax[axis] = Math.max(centerMax[axis], centers[c + axis]);
        }
      }
      const branch = { min, max, start, end, left: null, right: null };
      if (end - start <= 16) return branch;
      let axis = 0;
      if (centerMax[1] - centerMin[1] > centerMax[axis] - centerMin[axis]) axis = 1;
      if (centerMax[2] - centerMin[2] > centerMax[axis] - centerMin[axis]) axis = 2;
      if (centerMax[axis] - centerMin[axis] < 1e-7) return branch;
      const midpoint = (centerMin[axis] + centerMax[axis]) * .5;
      let split = start, tail = end - 1;
      while (split <= tail) {
        if (centers[order[split] * 3 + axis] < midpoint) split++;
        else { const previous = order[split]; order[split] = order[tail]; order[tail--] = previous; }
      }
      if (split === start || split === end) return branch;
      branch.left = node(start, split);
      branch.right = node(split, end);
      return branch;
    }
    return { position, vertexIds, order, root: node(0, count), triangles: count };
  }

  function intersectsBox(box, maximum) {
    let near = 0, far = maximum;
    for (let axis = 0; axis < 3; axis++) {
      const start = origin.getComponent(axis), delta = direction.getComponent(axis);
      if (Math.abs(delta) < 1e-12) {
        if (start < box.min[axis] || start > box.max[axis]) return false;
        continue;
      }
      let a = (box.min[axis] - start) / delta;
      let b = (box.max[axis] - start) / delta;
      if (a > b) [a, b] = [b, a];
      near = Math.max(near, a); far = Math.min(far, b);
      if (far < near) return false;
    }
    return true;
  }

  function blockedByMesh(mesh, index, distance, opacityAt) {
    stack.length = 0;
    stack.push(index.root);
    const front = mesh.material?.side !== THREE.BackSide;
    const back = mesh.material?.side !== THREE.FrontSide;
    while (stack.length) {
      const branch = stack.pop();
      if (!intersectsBox(branch, distance)) continue;
      if (branch.left) { stack.push(branch.left, branch.right); continue; }
      for (let j = branch.start; j < branch.end; j++) {
        const id = index.order[j], c = id * 3;
        for (let corner = 0; corner < 3; corner++) triangle[corner].fromBufferAttribute(index.position, index.vertexIds[c + corner]);
        const hit = front && ray.intersectTriangle(triangle[0], triangle[1], triangle[2], !back, localHit)
          || !front && ray.intersectTriangle(triangle[2], triangle[1], triangle[0], true, localHit);
        if (!hit || ((localHit.x - origin.x) * direction.x
          + (localHit.y - origin.y) * direction.y
          + (localHit.z - origin.z) * direction.z) >= distance) continue;
        worldHit.copy(localHit).applyMatrix4(mesh.matrixWorld);
        if (opacityAt(worldHit) > .35) return true;
      }
    }
    return false;
  }

  return {
    buildMesh(mesh) {
      if (!indexes.has(mesh.geometry)) {
        const index = build(mesh.geometry);
        if (!index) throw new Error('聚合酶遮挡外壳没有可索引的三角形');
        indexes.set(mesh.geometry, index);
      }
    },
    hasMesh(mesh) { return indexes.has(mesh.geometry); },
    isBlocked(start, end, meshes, opacityAt = () => 1) {
      const worldDistance = start.distanceTo(end);
      if (worldDistance <= .035) return false;
      for (const mesh of meshes) {
        const index = indexes.get(mesh.geometry);
        if (!index) continue;
        inverse.copy(mesh.matrixWorld).invert();
        origin.copy(start).applyMatrix4(inverse);
        endpoint.copy(end).applyMatrix4(inverse);
        direction.subVectors(endpoint, origin);
        const maximum = direction.length() * (1 - .035 / worldDistance);
        direction.normalize(); ray.set(origin, direction);
        if (blockedByMesh(mesh, index, maximum, opacityAt)) return true;
      }
      return false;
    },
    dispose() { indexes = new WeakMap(); stack.length = 0; },
  };
}
