import * as THREE from './vendor/three.module.js';

// Interpretive molecular silhouettes, not atom-coordinate or chemical structure data.
// All geometry and surface variation are generated locally and deterministically.
const TAU = Math.PI * 2;
let sharedSurfaceTextures = null;

const ORGANIC_FORMS = {
  protein: { axes: [1, 0.87, 0.93], phase: 0.42, lobes: 0.12, grain: 0.026, pocket: 0.055 },
  'ribosome-large': { axes: [1, 0.86, 0.90], phase: 1.7, lobes: 0.155, grain: 0.030, pocket: 0.12 },
  'ribosome-small': { axes: [1, 0.58, 0.72], phase: 3.2, lobes: 0.12, grain: 0.026, pocket: 0.07 },
  polymerase: { axes: [0.91, 0.95, 1], phase: 5.1, lobes: 0.16, grain: 0.027, pocket: 0.16 },
  factor: { axes: [0.73, 1, 0.81], phase: 2.3, lobes: 0.14, grain: 0.023, pocket: 0.065 },
  'factor-soft': { axes: [0.73, 1, 0.81], phase: 2.3, lobes: 0.06, grain: 0.003, pocket: 0.025 },
  residue: { axes: [0.91, 0.85, 1], phase: 6.8, lobes: 0.10, grain: 0.022, pocket: 0.025 },
  'residue-soft': { axes: [0.91, 0.85, 1], phase: 6.8, lobes: 0.035, grain: 0.002, pocket: 0.012 },
};

function smoothField(x, y, z, phase, frequency = 1) {
  const a = Math.sin((x * 1.31 + y * 2.17 - z * 0.73) * frequency + phase);
  const b = Math.sin((-x * 2.23 + y * 0.83 + z * 1.57) * frequency + phase * 1.41);
  const c = Math.sin((x * 0.79 - y * 1.73 + z * 2.41) * frequency - phase * 0.73);
  const d = Math.sin((x * 1.91 + y * 1.03 + z * 1.29) * frequency + phase * 2.03);
  return (a + b + c + d) * 0.25;
}

function organicPoint(direction, form, target) {
  const { x, y, z } = direction;
  const macro = smoothField(x, y, z, form.phase, 1.4);
  const lobes = smoothField(x, y, z, form.phase + 2.7, 3.1);
  const grain = smoothField(x, y, z, form.phase - 0.9, 8.4);
  // A broad, shallow binding cleft gives the proteins a directional silhouette.
  const cleft = Math.exp(-((x - 0.35) ** 2 * 7 + (y + 0.19) ** 2 * 11 + (z - 0.87) ** 2 * 5));
  const radius = 1 + macro * 0.055 + lobes * form.lobes + grain * form.grain - cleft * form.pocket;
  target.set(x * radius * form.axes[0], y * radius * form.axes[1], z * radius * form.axes[2]);
  // Soft shear breaks ellipsoid symmetry while keeping every surface continuous.
  target.x += y * z * 0.055;
  target.z += x * y * 0.035;
  return target;
}

/** Unit bounding radius; caller owns the returned geometry. */
export function createOrganicGeometry(kind = 'protein', detail = 'high') {
  const form = ORGANIC_FORMS[kind] || ORGANIC_FORMS.protein;
  const high = detail === 'high';
  const medium = detail === 'medium';
  const geometry = new THREE.SphereGeometry(1, high ? 64 : medium ? 40 : 24, high ? 44 : medium ? 28 : 16);
  const positions = geometry.attributes.position;
  const normals = geometry.attributes.normal;
  const direction = new THREE.Vector3();
  const tangent = new THREE.Vector3();
  const bitangent = new THREE.Vector3();
  const sample = new THREE.Vector3();
  const first = new THREE.Vector3();
  const second = new THREE.Vector3();
  const third = new THREE.Vector3();
  const fourth = new THREE.Vector3();
  const point = new THREE.Vector3();
  const normal = new THREE.Vector3();
  let maximumRadius = 0;
  const epsilon = 0.001;
  for (let index = 0; index < positions.count; index++) {
    direction.fromBufferAttribute(positions, index).normalize();
    organicPoint(direction, form, point);
    maximumRadius = Math.max(maximumRadius, point.length());
    positions.setXYZ(index, point.x, point.y, point.z);

    // Finite differences of the continuous surface keep poles and the UV seam smooth.
    tangent.set(0, Math.abs(direction.y) < 0.9 ? 1 : 0, Math.abs(direction.y) < 0.9 ? 0 : 1);
    tangent.cross(direction).normalize();
    bitangent.crossVectors(direction, tangent).normalize();
    organicPoint(sample.copy(direction).addScaledVector(tangent, epsilon).normalize(), form, first);
    organicPoint(sample.copy(direction).addScaledVector(tangent, -epsilon).normalize(), form, second);
    organicPoint(sample.copy(direction).addScaledVector(bitangent, epsilon).normalize(), form, third);
    organicPoint(sample.copy(direction).addScaledVector(bitangent, -epsilon).normalize(), form, fourth);
    normal.crossVectors(first.sub(second), third.sub(fourth)).normalize();
    if (normal.dot(direction) < 0) normal.negate();
    normals.setXYZ(index, normal.x, normal.y, normal.z);
  }
  geometry.scale(1 / maximumRadius, 1 / maximumRadius, 1 / maximumRadius);
  positions.needsUpdate = true;
  normals.needsUpdate = true;
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  geometry.userData.molecularKind = kind;
  geometry.userData.interpretive = true;
  return geometry;
}

function mergeGeometryParts(parts) {
  const arrays = { position: [], normal: [], uv: [] };
  const sizes = { position: 3, normal: 3, uv: 2 };
  let vertexCount = 0;
  for (const source of parts) {
    const geometry = source.index ? source.toNonIndexed() : source;
    const count = geometry.attributes.position.count;
    vertexCount += count;
    for (const name of Object.keys(arrays)) {
      const attribute = geometry.attributes[name];
      arrays[name].push(attribute ? attribute.array : new Float32Array(count * sizes[name]));
    }
    if (geometry !== source) geometry.dispose();
  }
  const merged = new THREE.BufferGeometry();
  for (const name of Object.keys(arrays)) {
    const combined = new Float32Array(vertexCount * sizes[name]);
    let offset = 0;
    for (const array of arrays[name]) { combined.set(array, offset); offset += array.length; }
    merged.setAttribute(name, new THREE.BufferAttribute(combined, sizes[name]));
  }
  for (const part of parts) part.dispose();
  return merged;
}

function roundedOutline(points) {
  const shape = new THREE.Shape();
  const last = points[points.length - 1];
  shape.moveTo((last[0] + points[0][0]) / 2, (last[1] + points[0][1]) / 2);
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const next = points[(i + 1) % points.length];
    shape.quadraticCurveTo(point[0], point[1], (point[0] + next[0]) / 2, (point[1] + next[1]) / 2);
  }
  shape.closePath();
  return shape;
}

function addRingRelief(parts, centerZ, radiusX, radiusZ, count, phase, variant) {
  const points = [];
  for (let i = 0; i < count; i++) {
    const angle = i / count * TAU + phase;
    const x = Math.cos(angle) * radiusX;
    const z = centerZ + Math.sin(angle) * radiusZ;
    points.push(new THREE.Vector3(x, 0.018, z));
    const atom = new THREE.SphereGeometry(variant === i ? 0.0097 : 0.0073, 10, 8);
    atom.scale(1, 0.76, 1);
    atom.translate(x, 0.018, z);
    parts.push(atom);
  }
  const curve = new THREE.CatmullRomCurve3(points, true, 'centripetal');
  parts.push(new THREE.TubeGeometry(curve, count * 7, 0.0038, 6, true));
}

/**
 * Opaque, thin molecular ring silhouettes. A/G have two fused ring reliefs;
 * C/T/U have one. Dimensions: X .16, Y .06, Z .52. Origin is the midpoint;
 * local +Z points from the sugar backbone toward the strand interior.
 * This is a readable visual abstraction, not an atomic chemistry model.
 */
export function createBaseGeometry(base = 'A') {
  base = String(base).toUpperCase();
  const doubleRing = base === 'A' || base === 'G';
  const outline = doubleRing ? [
    [-0.012, -0.26], [-0.018, -0.22], [-0.049, -0.19], [-0.078, -0.105],
    [-0.066, -0.019], [-0.077, 0.09], [-0.053, 0.198], [-0.010, 0.258],
    [0.044, 0.222], [0.078, 0.113], [0.059, 0.015], [0.075, -0.085],
    [0.052, -0.187], [0.018, -0.22], [0.012, -0.26],
  ] : [
    [-0.012, -0.26], [-0.015, -0.16], [-0.057, -0.094], [-0.079, -0.015],
    [-0.069, 0.134], [-0.043, 0.219], [0.009, 0.26], [0.055, 0.20],
    [0.079, 0.06], [0.061, -0.073], [0.017, -0.155], [0.012, -0.26],
  ];
  const plate = new THREE.ExtrudeGeometry(roundedOutline(outline), {
    depth: 0.012, steps: 1, bevelEnabled: true,
    bevelThickness: 0.0055, bevelSize: 0.0033, bevelSegments: 3, curveSegments: 10,
  });
  plate.translate(0, 0, -0.006);
  plate.rotateX(Math.PI / 2);
  const parts = [plate];
  if (doubleRing) {
    addRingRelief(parts, -0.092, 0.052, 0.082, 6, Math.PI / 6, base === 'G' ? 2 : 4);
    addRingRelief(parts, 0.112, 0.049, 0.084, 5, Math.PI / 2, base === 'G' ? 1 : 3);
  } else {
    addRingRelief(parts, 0.052, 0.052, 0.148, 6, Math.PI / 6, base === 'C' ? 4 : 1);
  }
  const geometry = mergeGeometryParts(parts);
  geometry.computeBoundingBox();
  const size = geometry.boundingBox.getSize(new THREE.Vector3());
  const center = geometry.boundingBox.getCenter(new THREE.Vector3());
  geometry.translate(-center.x, -center.y, -center.z);
  geometry.scale(0.16 / size.x, 0.06 / size.y, 0.52 / size.z);
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  geometry.userData.molecularKind = `base-${base}`;
  geometry.userData.interpretive = true;
  return geometry;
}

/** Compact, softly irregular sugar marker with radius .085. */
export function createSugarGeometry() {
  const geometry = createOrganicGeometry('residue', 'medium');
  geometry.scale(0.085, 0.085, 0.085);
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  geometry.userData.molecularKind = 'sugar';
  return geometry;
}

function hash2(x, y) {
  const value = Math.sin(x * 127.1 + y * 311.7 + 83.37) * 43758.5453123;
  return value - Math.floor(value);
}

function periodicNoise(x, y, period) {
  const floorX = Math.floor(x), floorY = Math.floor(y);
  const fx = x - floorX, fy = y - floorY;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
  const wrap = (value) => ((value % period) + period) % period;
  const a = hash2(wrap(floorX), wrap(floorY));
  const b = hash2(wrap(floorX + 1), wrap(floorY));
  const c = hash2(wrap(floorX), wrap(floorY + 1));
  const d = hash2(wrap(floorX + 1), wrap(floorY + 1));
  return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
}

function surfaceTextures() {
  if (sharedSurfaceTextures) return sharedSurfaceTextures;
  const size = 256;
  const bump = new Uint8Array(size * size * 4);
  const roughness = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size;
    const coarse = periodicNoise(u * 16, v * 16, 16);
    const medium = periodicNoise(u * 43, v * 43, 43);
    const fine = periodicNoise(u * 91, v * 91, 91);
    const value = coarse * 0.37 + medium * 0.43 + fine * 0.20;
    const pore = Math.max(0, 0.30 - medium) * 0.58;
    const height = Math.round(Math.max(0, Math.min(1, 0.30 + value * 0.48 - pore)) * 255);
    const matte = Math.round((0.69 + value * 0.24) * 255);
    const offset = (y * size + x) * 4;
    bump[offset] = bump[offset + 1] = bump[offset + 2] = height;
    roughness[offset] = roughness[offset + 1] = roughness[offset + 2] = matte;
    bump[offset + 3] = roughness[offset + 3] = 255;
  }
  const makeTexture = (data) => {
    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    texture.colorSpace = THREE.NoColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
    return texture;
  };
  sharedSurfaceTextures = { bump: makeTexture(bump), roughness: makeTexture(roughness) };
  return sharedSurfaceTextures;
}

/** Caller owns the material; procedural texture storage is shared by this module. */
export function createSurfaceMaterial(color, kind = 'protein') {
  const textures = surfaceTextures();
  const tint = new THREE.Color(color ?? '#abb8b0');
  const hsl = {};
  tint.getHSL(hsl);
  tint.setHSL(hsl.h, Math.min(hsl.s, 0.52), hsl.l);
  const membrane = kind === 'membrane';
  const fine = kind === 'base' || kind.startsWith('base-') || kind === 'sugar' || kind === 'backbone';
  const material = new THREE.MeshPhysicalMaterial({
    color: tint, metalness: 0,
    roughness: membrane ? 0.63 : fine ? 0.66 : 0.72,
    roughnessMap: textures.roughness,
    bumpMap: textures.bump,
    bumpScale: membrane ? 0.012 : fine ? 0.0017 : kind === 'residue' ? 0.006 : 0.014,
    specularIntensity: membrane ? 0.44 : 0.35,
    specularColor: '#e7ede5',
    sheen: membrane ? 0.09 : 0.17,
    sheenColor: tint,
    sheenRoughness: 0.87,
    clearcoat: membrane ? 0.11 : 0.035,
    clearcoatRoughness: 0.62,
    transmission: membrane ? 0.11 : 0,
    thickness: membrane ? 0.09 : 0,
    ior: 1.34,
    side: membrane ? THREE.DoubleSide : THREE.FrontSide,
  });
  material.name = `molecular-${kind}`;
  material.userData.proceduralSurface = true;
  return material;
}

/**
 * A closed, thin curved membrane panel. It lies in XY (front points +Z), spans
 * X/Y [-1, 1], and has a central pore of radius ~.24. Thickness is .018;
 * surface Z curves from ~0 at the pore toward -.25 at the square corners.
 * Scale/duplicate it in the scene to suggest the nuclear double membrane.
 */
export function createMembranePatchGeometry() {
  const segments = 96, bands = 14, thickness = 0.018;
  const positions = [], uvs = [], indices = [];
  const stride = segments + 1;
  const sideVertexCount = (bands + 1) * stride;
  const membraneZ = (x, y) => -0.13 * (x * x + y * y) + 0.008 * Math.sin(x * 3.2 + y * 4.1);
  for (let side = 0; side < 2; side++) {
    for (let band = 0; band <= bands; band++) {
      const fraction = band / bands;
      for (let segment = 0; segment <= segments; segment++) {
        const angle = segment / segments * TAU;
        const cosine = Math.cos(angle), sine = Math.sin(angle);
        const inner = 0.24 + 0.004 * Math.sin(angle * 8);
        const outer = 1 / Math.max(Math.abs(cosine), Math.abs(sine));
        const radius = inner + (outer - inner) * fraction;
        const x = cosine * radius, y = sine * radius;
        positions.push(x, y, membraneZ(x, y) + (side === 0 ? thickness / 2 : -thickness / 2));
        uvs.push((x + 1) / 2, (y + 1) / 2);
      }
    }
  }
  for (let side = 0; side < 2; side++) {
    const offset = side * sideVertexCount;
    for (let band = 0; band < bands; band++) for (let segment = 0; segment < segments; segment++) {
      const a = offset + band * stride + segment;
      const b = a + stride;
      if (side === 0) indices.push(a, b, a + 1, b, b + 1, a + 1);
      else indices.push(a, a + 1, b, b, a + 1, b + 1);
    }
  }
  for (let segment = 0; segment < segments; segment++) {
    const innerA = segment, innerB = segment + sideVertexCount;
    indices.push(innerA, innerA + 1, innerB, innerB, innerA + 1, innerB + 1);
    const outerA = bands * stride + segment, outerB = outerA + sideVertexCount;
    indices.push(outerA, outerB, outerA + 1, outerB, outerB + 1, outerA + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  geometry.userData.molecularKind = 'membrane-patch';
  return geometry;
}

/** Release shared GPU textures after all scenes that use this library are gone. */
export function disposeMolecularResources() {
  if (!sharedSurfaceTextures) return;
  sharedSurfaceTextures.bump.dispose();
  sharedSurfaceTextures.roughness.dispose();
  sharedSurfaceTextures = null;
}
