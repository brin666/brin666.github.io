import * as THREE from '../vendor/three.module.js';

// Local, idealized educational geometry. The ring CONNECTIVITY and atom names
// were checked against RCSB CCD component summaries, not copied coordinates:
// https://www.rcsb.org/ligand/DA   https://www.rcsb.org/ligand/DG
// https://www.rcsb.org/ligand/DC   https://www.rcsb.org/ligand/DT
// https://www.rcsb.org/ligand/U
// No CCD model or ideal coordinates are used. All lengths, rounding, relief,
// attachment positions and aligned pairing-site positions below are schematic.

const COMPONENTS = { A: 'DA', G: 'DG', C: 'DC', T: 'DT', U: 'U' };
const PAIRING_ATOMS = {
  A: ['N6', 'N1'], T: ['N3', 'O4'], U: ['N3', 'O4'],
  G: ['O6', 'N1', 'N2'], C: ['O2', 'N3', 'N4'],
};
const PURINE_ATOMS = {
  C4: [0, -0.135], N9: [-0.20, -0.218], C8: [-0.31, 0],
  N7: [-0.20, 0.218], C5: [0, 0.135], C6: [0.225, 0.25],
  N1: [0.43, 0.18], C2: [0.43, -0.18], N3: [0.225, -0.25],
};
const PURINE_RINGS = [['C4', 'N9', 'C8', 'N7', 'C5'], ['C4', 'N3', 'C2', 'N1', 'C6', 'C5']];
const PURINE_OUTLINE = ['C8', 'N9', 'C4', 'N3', 'C2', 'N1', 'C6', 'C5', 'N7'];
const PYRIMIDINE_ATOMS = {
  N1: [-0.25, -0.20], C2: [0, -0.26], N3: [0.25, -0.20],
  C4: [0.25, 0.20], C5: [0, 0.26], C6: [-0.25, 0.20],
};
const PYRIMIDINE_RINGS = [['N1', 'C2', 'N3', 'C4', 'C5', 'C6']];

function roundedPolygon(points) {
  const shape = new THREE.Shape();
  const cornerFraction = 0.10;
  const first = points[0], previous = points[points.length - 1];
  shape.moveTo(first.x + (previous.x - first.x) * cornerFraction,
    first.y + (previous.y - first.y) * cornerFraction);
  for (let i = 0; i < points.length; i++) {
    const current = points[i];
    const before = points[(i + points.length - 1) % points.length];
    const after = points[(i + 1) % points.length];
    const start = current.clone().lerp(before, cornerFraction);
    const end = current.clone().lerp(after, cornerFraction);
    shape.lineTo(start.x, start.y);
    shape.quadraticCurveTo(current.x, current.y, end.x, end.y);
  }
  shape.closePath();
  return shape;
}

function polygonArea(points) {
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    area += a.x * b.y - a.y * b.x;
  }
  return area * 0.5;
}

// Concentric tessellation keeps the ring relief in the SAME closed skin as the
// plate. There are no separate spheres, tubes or hollow ring meshes.
function refineCap(contour, maxEdge = 0.075) {
  const points = contour.map((point) => point.clone());
  // The fused outlines are star-shaped around the origin. Radial bands preserve
  // every perimeter sample and avoid thin, over-subdivided fan triangles.
  const ringCount = Math.max(2, Math.ceil(Math.max(...contour.map((point) => point.length())) / maxEdge));
  const count = contour.length;
  const triangles = [];
  for (let ring = 1; ring < ringCount; ring++) {
    const fraction = 1 - ring / ringCount;
    for (const point of contour) points.push(point.clone().multiplyScalar(fraction));
    const outer = (ring - 1) * count, inner = ring * count;
    for (let i = 0; i < count; i++) {
      const next = (i + 1) % count;
      triangles.push([outer + i, inner + i, outer + next], [outer + next, inner + i, inner + next]);
    }
  }
  const centerIndex = points.length;
  points.push(new THREE.Vector2(0, 0));
  const lastRing = (ringCount - 1) * count;
  for (let i = 0; i < count; i++) triangles.push([lastRing + i, centerIndex, lastRing + (i + 1) % count]);
  return { points, triangles };
}

function segmentDistanceSquared(point, a, b) {
  const dx = b.x - a.x, dz = b.y - a.y;
  const denominator = dx * dx + dz * dz;
  const t = denominator > 0 ? THREE.MathUtils.clamp(((point.x - a.x) * dx + (point.y - a.y) * dz) / denominator, 0, 1) : 0;
  const x = point.x - (a.x + dx * t), z = point.y - (a.y + dz * t);
  return x * x + z * z;
}

function uniqueRingEdges(rings) {
  const edges = new Map();
  for (const ring of rings) for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    const key = [a, b].sort().join(':');
    if (!edges.has(key)) edges.set(key, [a, b]);
  }
  return [...edges.values()];
}

function createClosedPlate(contour, ringPoints, ringEdges) {
  // Keep initial perimeter edges below the subdivision threshold. That means
  // the cap and its surrounding bevel share every boundary vertex exactly.
  const denseContour = [];
  for (let i = 0; i < contour.length; i++) {
    const a = contour[i], b = contour[(i + 1) % contour.length];
    const divisions = Math.max(1, Math.ceil(a.distanceTo(b) / 0.046));
    for (let part = 0; part < divisions; part++) denseContour.push(a.clone().lerp(b, part / divisions));
  }
  const innerContour = denseContour.map((point) => point.clone().multiplyScalar(0.98));
  const cap = refineCap(innerContour);
  const capCount = cap.points.length, perimeterCount = denseContour.length;
  const positions = [], uvs = [], indices = [];

  const reliefHeight = (point) => {
    let edgeDistance = Infinity, outlineDistance = Infinity;
    for (const [a, b] of ringEdges) edgeDistance = Math.min(edgeDistance, segmentDistanceSquared(point, ringPoints[a], ringPoints[b]));
    for (let i = 0; i < innerContour.length; i++) outlineDistance = Math.min(outlineDistance,
      segmentDistanceSquared(point, innerContour[i], innerContour[(i + 1) % innerContour.length]));
    const boundaryFade = THREE.MathUtils.smoothstep(Math.sqrt(outlineDistance), 0, 0.018);
    return 0.0035 * Math.exp(-edgeDistance / (0.019 * 0.019)) * boundaryFade;
  };
  const append = (point, height) => {
    positions.push(point.x, height, point.y);
    uvs.push(point.x + 0.5, point.y + 0.5);
  };
  for (const point of cap.points) append(point, 0.021 + reliefHeight(point));
  for (const point of cap.points) append(point, -0.021);

  for (const [a, b, c] of cap.triangles) {
    const abx = cap.points[b].x - cap.points[a].x, abz = cap.points[b].y - cap.points[a].y;
    const acx = cap.points[c].x - cap.points[a].x, acz = cap.points[c].y - cap.points[a].y;
    // Positive X/Z area points -Y, so reverse it on the upper cap.
    if (abx * acz - abz * acx > 0) {
      indices.push(a, c, b, capCount + a, capCount + b, capCount + c);
    } else {
      indices.push(a, b, c, capCount + a, capCount + c, capCount + b);
    }
  }

  let previousRing = Array.from({ length: perimeterCount }, (_, index) => index);
  for (const [scale, height] of [[0.994, 0.0185], [1, 0.013], [1, -0.013], [0.994, -0.0185]]) {
    const ringStart = positions.length / 3;
    for (const point of denseContour) append(point.clone().multiplyScalar(scale), height);
    const currentRing = Array.from({ length: perimeterCount }, (_, index) => ringStart + index);
    for (let i = 0; i < perimeterCount; i++) {
      const next = (i + 1) % perimeterCount;
      indices.push(previousRing[i], previousRing[next], currentRing[i],
        currentRing[i], previousRing[next], currentRing[next]);
    }
    previousRing = currentRing;
  }
  for (let i = 0; i < perimeterCount; i++) {
    const next = (i + 1) % perimeterCount;
    indices.push(previousRing[i], previousRing[next], capCount + i,
      capCount + i, previousRing[next], capCount + next);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * A single closed, rounded base plate, centered at the origin.
 * +X: sugar → pairing face; +Y: upper plate normal; Z: in-plane width.
 * Purines: .72 × .05 × .56; pyrimidines: .54 × .05 × .52 (X/Y/Z).
 * Caller owns and disposes the returned BufferGeometry.
 */
export function createRefinedBaseGeometry(base = 'A') {
  base = String(base).trim().toUpperCase();
  if (!Object.hasOwn(COMPONENTS, base)) throw new RangeError(`Unsupported nucleic base: ${base}`);
  const purine = base === 'A' || base === 'G';
  const dimensions = purine ? [0.72, 0.05, 0.56] : [0.54, 0.05, 0.52];
  const atoms = purine ? PURINE_ATOMS : PYRIMIDINE_ATOMS;
  const rings = purine ? PURINE_RINGS : PYRIMIDINE_RINGS;
  const outline = purine ? PURINE_OUTLINE : rings[0];
  const shape = roundedPolygon(outline.map((atom) => new THREE.Vector2(...atoms[atom])));
  const contour = shape.getPoints(5).filter((point, index, points) =>
    index === 0 || point.distanceToSquared(points[index - 1]) > 1e-14);
  if (contour[0].distanceToSquared(contour[contour.length - 1]) < 1e-12) contour.pop();
  if (polygonArea(contour) < 0) contour.reverse();
  const bounds = new THREE.Box2().setFromPoints(contour);
  const center = bounds.getCenter(new THREE.Vector2());
  const size = bounds.getSize(new THREE.Vector2());
  const scale = new THREE.Vector2(dimensions[0] / size.x, dimensions[2] / size.y);
  const transform = (point) => point.clone().sub(center).multiply(scale);
  for (let i = 0; i < contour.length; i++) contour[i] = transform(contour[i]);
  // Both rings use ONE global inset, retaining their common C4—C5 edge.
  const ringPoints = Object.fromEntries(Object.entries(atoms).map(([atom, coordinates]) => [atom,
    transform(new THREE.Vector2(...coordinates)).multiplyScalar(0.85)]));
  const ringEdges = uniqueRingEdges(rings);
  const geometry = createClosedPlate(contour, ringPoints, ringEdges);
  geometry.computeBoundingBox();
  const finalSize = geometry.boundingBox.getSize(new THREE.Vector3());
  const finalCenter = geometry.boundingBox.getCenter(new THREE.Vector3());
  geometry.translate(-finalCenter.x, -finalCenter.y, -finalCenter.z);
  geometry.scale(dimensions[0] / finalSize.x, dimensions[1] / finalSize.y, dimensions[2] / finalSize.z);
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  const pairingAtoms = PAIRING_ATOMS[base];
  const siteZ = pairingAtoms.length === 2 ? [-0.12, 0.12] : [-0.16, 0, 0.16];
  geometry.userData = {
    interpretive: true,
    molecularKind: `base-${base}`,
    ringCount: purine ? 2 : 1,
    attachment: [-dimensions[0] / 2, 0, 0],
    pairingSites: pairingAtoms.map((atom, index) => ({ point: [dimensions[0] / 2, 0, siteZ[index]], atom })),
    pairingLayout: 'schematic-aligned-functional-edge',
    ringTopology: {
      rings: rings.map((ring) => [...ring]),
      sharedEdges: purine ? [['C4', 'C5']] : [],
      graphVertexCount: Object.keys(atoms).length,
      graphEdgeCount: ringEdges.length,
      cycleRank: ringEdges.length - Object.keys(atoms).length + 1,
      outlineComponents: 1,
      outlineHoles: 0,
    },
    source: {
      url: `https://www.rcsb.org/ligand/${COMPONENTS[base]}`,
      use: 'ring-connectivity-and-atom-names-only',
      coordinates: 'local-programmatic-schematic; neither CCD model nor ideal coordinates',
    },
  };
  geometry.name = `refined-nucleic-base-${base}`;
  return geometry;
}
