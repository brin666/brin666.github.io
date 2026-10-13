import * as THREE from './vendor/three.module.js';

// A persistent tube buffer with a transported cross-section. Updating a chain
// changes vertex data, never allocates a TubeGeometry per animation frame.
export function createContinuousBackbone(segments = 144, sides = 8, radius = .037, options = {}) {
  const profile = options?.profile === true;
  // `units` describes the nucleotide count across canonical sample t = 0..1.
  // Keeping the phase in sample space means changing `end` never rephases it.
  const units = Number.isFinite(options?.units) && options.units > 0 ? options.units : 1;
  const tau = Math.PI * 2;
  const ellipseNormal = 1.09, ellipseBinormal = .91;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array((segments + 1) * (sides + 1) * 3);
  const normals = new Float32Array(positions.length);
  const indices = [];
  const points = Array.from({ length: segments + 1 }, () => new THREE.Vector3());
  const direction = new THREE.Vector3(), normal = new THREE.Vector3(), binormal = new THREE.Vector3();
  const ring = sides + 1;
  for (let i = 0; i < segments; i++) for (let j = 0; j < sides; j++) {
    const a = i * ring + j, b = a + ring;
    indices.push(a, a + 1, b, b, a + 1, b + 1);
  }
  geometry.setIndex(indices);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3).setUsage(THREE.DynamicDrawUsage));
  return {
    geometry,
    update(sample, start, end) {
      if (Math.abs(end - start) < 1e-6) { geometry.setDrawRange(0, 0); return; }
      for (let i = 0; i <= segments; i++) sample(start + (end - start) * i / segments, points[i]);
      for (let i = 0; i <= segments; i++) {
        direction.subVectors(points[Math.min(segments, i + 1)], points[Math.max(0, i - 1)]).normalize();
        if (i === 0) normal.set(0, 1, 0);
        normal.addScaledVector(direction, -normal.dot(direction));
        if (normal.lengthSq() < 1e-8) normal.set(0, 0, 1).addScaledVector(direction, -direction.z);
        normal.normalize(); binormal.crossVectors(direction, normal).normalize();
        const t = start + (end - start) * i / segments;
        const phase = t * units * tau;
        // A broad sinusoidal swell per nucleotide keeps the neck and bulge
        // transitions continuous while staying far from a segmented bead form.
        const profileScale = profile ? 1 + .07 * Math.cos(phase) : 1;
        for (let j = 0; j <= sides; j++) {
          const angle = j / sides * Math.PI * 2, c = Math.cos(angle), s = Math.sin(angle);
          const offset = (i * ring + j) * 3;
          for (let axis = 0; axis < 3; axis++) {
            const n = normal.getComponent(axis) * c + binormal.getComponent(axis) * s;
            if (profile) {
              positions[offset + axis] = points[i].getComponent(axis) + radius * profileScale * (
                normal.getComponent(axis) * c * ellipseNormal + binormal.getComponent(axis) * s * ellipseBinormal
              );
            } else {
              // Keep the unprofiled geometry byte-for-byte compatible with the
              // original circular tube, including its radial normals.
              normals[offset + axis] = n;
              positions[offset + axis] = points[i].getComponent(axis) + radius * n;
            }
          }
        }
      }
      if (profile) {
        // Surface normals follow both actual parameters: circumferential angle
        // and longitudinal sample t. This includes ellipse curvature, the
        // changing radius, and the transported frame's motion along the curve.
        for (let i = 0; i <= segments; i++) for (let j = 0; j <= sides; j++) {
          const previousJ = j === 0 ? sides - 1 : j - 1;
          const nextJ = j === sides ? 1 : j + 1;
          const thetaA = (i * ring + previousJ) * 3;
          const thetaB = (i * ring + nextJ) * 3;
          const tangentA = ((i === 0 ? i : i - 1) * ring + j) * 3;
          const tangentB = ((i === segments ? i : i + 1) * ring + j) * 3;
          const thetaX = positions[thetaB] - positions[thetaA];
          const thetaY = positions[thetaB + 1] - positions[thetaA + 1];
          const thetaZ = positions[thetaB + 2] - positions[thetaA + 2];
          const tangentX = positions[tangentB] - positions[tangentA];
          const tangentY = positions[tangentB + 1] - positions[tangentA + 1];
          const tangentZ = positions[tangentB + 2] - positions[tangentA + 2];
          let nx = thetaY * tangentZ - thetaZ * tangentY;
          let ny = thetaZ * tangentX - thetaX * tangentZ;
          let nz = thetaX * tangentY - thetaY * tangentX;
          let length = Math.hypot(nx, ny, nz);
          const offset = (i * ring + j) * 3;
          if (length < 1e-12) {
            // Degenerate samples are uncommon, but a finite radial fallback
            // avoids poisoning lighting if a caller supplies a cusp.
            nx = positions[offset] - points[i].x;
            ny = positions[offset + 1] - points[i].y;
            nz = positions[offset + 2] - points[i].z;
            length = Math.hypot(nx, ny, nz) || 1;
          }
          normals[offset] = nx / length;
          normals[offset + 1] = ny / length;
          normals[offset + 2] = nz / length;
        }
      }
      geometry.setDrawRange(0, indices.length);
      geometry.attributes.position.needsUpdate = geometry.attributes.normal.needsUpdate = true;
      geometry.computeBoundingSphere();
    },
  };
}
