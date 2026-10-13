import * as THREE from './vendor/three.module.js';

// Preserve point indices while turning a centerline before changing its shape.
// The host supplies an already eased fraction and owns nucleotide/base data.
export function createStrandPoseBlend({ preferredTurnAxis = null, matchSpan = false } = {}) {
  const centerA = new THREE.Vector3(), centerB = new THREE.Vector3(), center = new THREE.Vector3();
  const axisA = new THREE.Vector3(), axisB = new THREE.Vector3(), reference = new THREE.Vector3();
  const cross = new THREE.Vector3(), relativeA = new THREE.Vector3(), relativeB = new THREE.Vector3();
  const turned = new THREE.Vector3(), residual = new THREE.Vector3();
  const fullRotation = new THREE.Quaternion(), identity = new THREE.Quaternion();
  const preferredDirection = new THREE.Vector3(), correctionRotation = new THREE.Quaternion();
  const preferredRotation = new THREE.Quaternion();
  if (preferredTurnAxis !== null) {
    if (!preferredTurnAxis?.isVector3 || !Number.isFinite(preferredTurnAxis.x)
      || !Number.isFinite(preferredTurnAxis.y) || !Number.isFinite(preferredTurnAxis.z)
      || preferredTurnAxis.lengthSq() <= 1e-20) {
      throw new TypeError('Preferred turn axis must be a finite nonzero Vector3');
    }
    reference.copy(preferredTurnAxis).normalize();
    preferredRotation.setFromAxisAngle(reference, Math.PI);
  }
  const rotationQuaternion = new THREE.Quaternion();
  const result = { points: null, rotationQuaternion };

  function rotationBetween(from, to, target) {
    const dot = THREE.MathUtils.clamp(from.dot(to), -1, 1);
    if (dot < -1 + 1e-10) {
      // Preserve the original default's deterministic antiparallel turn.
      const x = Math.abs(from.x), y = Math.abs(from.y), z = Math.abs(from.z);
      if (x <= y && x <= z) reference.set(1, 0, 0);
      else if (y <= z) reference.set(0, 1, 0);
      else reference.set(0, 0, 1);
      cross.crossVectors(from, reference).normalize();
      target.setFromAxisAngle(cross, Math.PI);
    } else {
      cross.crossVectors(from, to);
      target.set(cross.x, cross.y, cross.z, 1 + dot).normalize();
    }
  }

  function update(fromPoints, toPoints, fraction, outPoints) {
    const count = fromPoints?.length;
    if (!Number.isInteger(count) || count < 2 || toPoints?.length !== count || outPoints?.length !== count) {
      throw new RangeError('Strand poses require equal point counts and a preallocated output array');
    }
    for (let i = 0; i < count; i++) {
      if (!fromPoints[i]?.isVector3 || !toPoints[i]?.isVector3 || !outPoints[i]?.isVector3) {
        throw new TypeError('Strand poses and output must contain Vector3 instances');
      }
      if (!Number.isFinite(fromPoints[i].x) || !Number.isFinite(fromPoints[i].y) || !Number.isFinite(fromPoints[i].z)
        || !Number.isFinite(toPoints[i].x) || !Number.isFinite(toPoints[i].y) || !Number.isFinite(toPoints[i].z)) {
        throw new TypeError('Strand pose coordinates must be finite');
      }
    }
    const f = Number.isFinite(fraction) ? Math.max(0, Math.min(1, fraction)) : 0;
    result.points = outPoints;
    if (f === 0) {
      rotationQuaternion.identity();
      for (let i = 0; i < count; i++) outPoints[i].copy(fromPoints[i]);
      return result;
    }
    centerA.set(0, 0, 0); centerB.set(0, 0, 0);
    for (let i = 0; i < count; i++) {
      centerA.addScaledVector(fromPoints[i], 1 / count); centerB.addScaledVector(toPoints[i], 1 / count);
    }
    axisA.subVectors(fromPoints[count - 1], fromPoints[0]);
    axisB.subVectors(toPoints[count - 1], toPoints[0]);
    const axisLengthSqA = axisA.lengthSq(), axisLengthSqB = axisB.lengthSq();
    // Match representation scale before adding shape residuals. A degenerate
    // source axis keeps the original finite interpolation rather than dividing.
    const endScale = matchSpan && axisLengthSqA > 1e-20 ? Math.sqrt(axisLengthSqB / axisLengthSqA) : 1;
    fullRotation.identity();
    if (axisLengthSqA > 1e-20 && axisLengthSqB > 1e-20) {
      axisA.normalize(); axisB.normalize();
      const dot = THREE.MathUtils.clamp(axisA.dot(axisB), -1, 1);
      if (preferredTurnAxis !== null && dot < -.65) {
        // Use the requested half-turn plane, then correct its endpoint direction.
        preferredDirection.copy(axisA).applyQuaternion(preferredRotation).normalize();
        rotationBetween(preferredDirection, axisB, correctionRotation);
        fullRotation.copy(correctionRotation).multiply(preferredRotation).normalize();
      } else {
        rotationBetween(axisA, axisB, fullRotation);
      }
    }
    rotationQuaternion.copy(identity).slerp(fullRotation, f);
    if (f === 1) {
      for (let i = 0; i < count; i++) outPoints[i].copy(toPoints[i]);
      return result;
    }
    center.copy(centerA).lerp(centerB, f);
    const currentScale = 1 + (endScale - 1) * f;
    for (let i = 0; i < count; i++) {
      relativeA.subVectors(fromPoints[i], centerA); relativeB.subVectors(toPoints[i], centerB);
      turned.copy(relativeA).applyQuaternion(fullRotation);
      if (matchSpan) turned.multiplyScalar(endScale);
      residual.copy(relativeB).sub(turned);
      turned.copy(relativeA).applyQuaternion(rotationQuaternion);
      if (matchSpan) turned.multiplyScalar(currentScale);
      outPoints[i].copy(center).add(turned).addScaledVector(residual, f);
    }
    return result;
  }
  return { update, rotationQuaternion };
}
