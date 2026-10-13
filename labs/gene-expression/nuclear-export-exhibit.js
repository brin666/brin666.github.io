import * as THREE from './vendor/three.module.js';
import { createExhibitMaterial } from './exhibit-surface.js';
import { createBioProteinMaterial } from './bio-protein-surface.js';
import { createPolymeraseView } from './pilot/polymerase-view.js';
import { EXPORT_FRAME } from './nuclear-export-path.js';

const TAU = Math.PI * 2;
const MEMBRANE = Object.freeze({
  // The perimeter sits outside the export camera, including portrait framing.
  // One active teaching pore and two smaller background apertures share this field.
  halfWidth: 8.25,
  halfHeight: 8.75,
  holeRadius: .70,
  halfThickness: .0175,
  edgeBevel: .009,
  layerOffset: .23,
  angleSegments: 144,
  radialSegments: 36,
});
const AUXILIARY_PORES = Object.freeze([
  Object.freeze({ y: -.90, z: 2.00, radius: .36 }),
  Object.freeze({ y: 2.25, z: -2.80, radius: .36 }),
]);
const AUXILIARY_PORE_SEGMENTS = 40;

function boundaryRadius(theta) {
  const y = Math.abs(Math.cos(theta)) / MEMBRANE.halfWidth;
  const z = Math.abs(Math.sin(theta)) / MEMBRANE.halfHeight;
  const roundedRectangle = Math.pow(Math.pow(y, 3.7) + Math.pow(z, 3.7), -1 / 3.7);
  const gentleLobes = 1 + .010 * Math.sin(theta * 3 + .42) + .006 * Math.sin(theta * 6 - .7);
  return roundedRectangle * gentleLobes;
}

function surfacePosition(theta, radius, side, depthSign) {
  const y = EXPORT_FRAME.y + radius * Math.cos(theta);
  const z = EXPORT_FRAME.z + radius * Math.sin(theta);
  const zRelative = z - EXPORT_FRAME.z;
  const distance = Math.hypot(y - EXPORT_FRAME.y, zRelative);
  // Both sheets turn gently toward the pore collar. Keep that attachment
  // nearly still while the broader film flexes farther from the opening.
  const poreDimple = .13 * Math.exp(-Math.pow((distance - .83) / .62, 2));
  const foldGate = 1 - Math.exp(-Math.pow(distance / 1.15, 2));
  const slowFold = foldGate * (
    .075 * Math.sin(y * .46 + zRelative * .32 + .3)
    + .045 * Math.sin(zRelative * .57 - y * .25 + 1.1)
  );
  const shallowHollow = .095 * Math.exp(-Math.pow((y + 2.45) / 1.55, 2) - Math.pow((zRelative - .8) / 1.9, 2))
    + .065 * Math.exp(-Math.pow((y - 3.2) / 1.8, 2) - Math.pow((zRelative + 1.2) / 2.2, 2));
  // Smaller dimples lead both sheets into their background pore walls.
  const auxiliaryDimple = AUXILIARY_PORES.reduce((sum, pore) => {
    const separation = Math.hypot(y - EXPORT_FRAME.y - pore.y, zRelative - pore.z);
    return sum + .075 * Math.exp(-Math.pow((separation - pore.radius) / .62, 2));
  }, 0);
  const centerX = side * (MEMBRANE.layerOffset - poreDimple - auxiliaryDimple - shallowHollow) + slowFold;
  const thickness = MEMBRANE.halfThickness + .0012 * Math.sin(y * .45 + zRelative * .36);
  return [centerX + depthSign * thickness, y, z];
}

function surfacePositionAt(y, z, side, depthSign) {
  const relativeY = y - EXPORT_FRAME.y;
  const relativeZ = z - EXPORT_FRAME.z;
  return surfacePosition(Math.atan2(relativeZ, relativeY), Math.hypot(relativeY, relativeZ), side, depthSign);
}

function addQuad(indices, a, b, c, d, reverse = false) {
  if (reverse) indices.push(a, b, c, b, d, c);
  else indices.push(a, c, b, b, c, d);
}

function pointSegmentDistanceSquared(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return (px - ax - t * dx) ** 2 + (py - ay - t * dy) ** 2;
}

function triangleIntersectsPore(positions, a, b, c, pore) {
  const px = EXPORT_FRAME.y + pore.y, py = EXPORT_FRAME.z + pore.z;
  const ax = positions[a * 3 + 1], ay = positions[a * 3 + 2];
  const bx = positions[b * 3 + 1], by = positions[b * 3 + 2];
  const cx = positions[c * 3 + 1], cy = positions[c * 3 + 2];
  const cross = (x0, y0, x1, y1) => (x0 - px) * (y1 - py) - (y0 - py) * (x1 - px);
  const s0 = cross(ax, ay, bx, by), s1 = cross(bx, by, cx, cy), s2 = cross(cx, cy, ax, ay);
  if ((s0 >= 0 && s1 >= 0 && s2 >= 0) || (s0 <= 0 && s1 <= 0 && s2 <= 0)) return true;
  const radiusSquared = (pore.radius + MEMBRANE.edgeBevel + .012) ** 2;
  return Math.min(
    pointSegmentDistanceSquared(px, py, ax, ay, bx, by),
    pointSegmentDistanceSquared(px, py, bx, by, cx, cy),
    pointSegmentDistanceSquared(px, py, cx, cy, ax, ay),
  ) <= radiusSquared;
}

// Retain the original polar mesh except where a circular opening actually cuts
// it. Retriangulating the local removed disk gives both sheets the same clean
// aperture without adding an opaque decorative disk behind either rim.
function cutAuxiliaryPore(positions, faceIndices, side, depthSign, pore) {
  const kept = [], removed = [];
  for (let index = 0; index < faceIndices.length; index += 3) {
    const triangle = faceIndices.slice(index, index + 3);
    (triangleIntersectsPore(positions, ...triangle, pore) ? removed : kept).push(...triangle);
  }
  if (!removed.length) throw new Error('Auxiliary nuclear pore misses the membrane surface');

  const edgeCounts = new Map();
  for (let index = 0; index < removed.length; index += 3) {
    const [a, b, c] = removed.slice(index, index + 3);
    for (const [from, to] of [[a, b], [b, c], [c, a]]) {
      const key = from < to ? `${from}:${to}` : `${to}:${from}`;
      const edge = edgeCounts.get(key);
      if (edge) edge.count++;
      else edgeCounts.set(key, { from, to, count: 1 });
    }
  }
  const boundary = [...edgeCounts.values()].filter(edge => edge.count === 1);
  const next = new Map(boundary.map(edge => [edge.from, edge.to]));
  if (next.size !== boundary.length) throw new Error('Auxiliary nuclear pore has a non-manifold boundary');
  const contour = [];
  let vertex = boundary[0]?.from;
  while (vertex !== undefined && !contour.includes(vertex)) {
    contour.push(vertex);
    vertex = next.get(vertex);
  }
  if (vertex !== contour[0] || contour.length !== boundary.length) {
    throw new Error('Auxiliary nuclear pore boundary is not a single closed loop');
  }

  const contourPoints = contour.map(index => new THREE.Vector2(positions[index * 3 + 1], positions[index * 3 + 2]));
  const positiveContour = THREE.ShapeUtils.area(contourPoints) > 0;
  const ring = [], ringPoints = [];
  for (let index = 0; index < AUXILIARY_PORE_SEGMENTS; index++) {
    const angle = (positiveContour ? -1 : 1) * index / AUXILIARY_PORE_SEGMENTS * TAU;
    const radius = pore.radius + MEMBRANE.edgeBevel;
    const y = EXPORT_FRAME.y + pore.y + radius * Math.cos(angle);
    const z = EXPORT_FRAME.z + pore.z + radius * Math.sin(angle);
    ring.push(positions.length / 3);
    ringPoints.push(new THREE.Vector2(y, z));
    positions.push(...surfacePositionAt(y, z, side, depthSign));
  }
  const vertices = [...contour, ...ring];
  const triangles = THREE.ShapeUtils.triangulateShape(contourPoints, [ringPoints]);
  if (!triangles.length) throw new Error('Auxiliary nuclear pore triangulation failed');
  faceIndices.length = 0;
  faceIndices.push(...kept);
  for (const [i, j, k] of triangles) {
    const a = vertices[i], b = vertices[j], c = vertices[k];
    const winding = (positions[b * 3 + 1] - positions[a * 3 + 1]) * (positions[c * 3 + 2] - positions[a * 3 + 2])
      - (positions[b * 3 + 2] - positions[a * 3 + 2]) * (positions[c * 3 + 1] - positions[a * 3 + 1]);
    if (winding * depthSign >= 0) faceIndices.push(a, b, c);
    else faceIndices.push(a, c, b);
  }
}

// A single open lumen joins the inner and outer sheets at every secondary pore.
// The ends coincide with the cut face rings; the middle narrows gently instead
// of producing an independent torus laid over an uncut sheet.
function buildAuxiliaryPoreWalls() {
  const positions = [], indices = [];
  const profileCount = 9;
  for (const pore of AUXILIARY_PORES) {
    const first = positions.length / 3;
    for (let angleIndex = 0; angleIndex <= AUXILIARY_PORE_SEGMENTS; angleIndex++) {
      const angle = angleIndex / AUXILIARY_PORE_SEGMENTS * TAU;
      const point = radius => [
        EXPORT_FRAME.y + pore.y + radius * Math.cos(angle),
        EXPORT_FRAME.z + pore.z + radius * Math.sin(angle),
      ];
      const [faceY, faceZ] = point(pore.radius + MEMBRANE.edgeBevel);
      const [rimY, rimZ] = point(pore.radius);
      const leftOuter = surfacePositionAt(faceY, faceZ, -1, -1);
      const leftInner = surfacePositionAt(faceY, faceZ, -1, 1);
      const rightInner = surfacePositionAt(faceY, faceZ, 1, -1);
      const rightOuter = surfacePositionAt(faceY, faceZ, 1, 1);
      const leftRim = surfacePositionAt(rimY, rimZ, -1, 0);
      const rightRim = surfacePositionAt(rimY, rimZ, 1, 0);
      const alongLumen = (fraction, radius) => {
        const [y, z] = point(radius);
        return [leftInner[0] + (rightInner[0] - leftInner[0]) * fraction, y, z];
      };
      for (const vertex of [
        leftOuter, leftRim, leftInner,
        alongLumen(.23, pore.radius - .055),
        alongLumen(.50, pore.radius - .075),
        alongLumen(.77, pore.radius - .055),
        rightInner, rightRim, rightOuter,
      ]) positions.push(...vertex);
    }
    for (let angleIndex = 0; angleIndex < AUXILIARY_PORE_SEGMENTS; angleIndex++) {
      for (let profileIndex = 0; profileIndex < profileCount - 1; profileIndex++) {
        const a = first + angleIndex * profileCount + profileIndex;
        const b = a + profileCount;
        addQuad(indices, a, b, a + 1, b + 1);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  geometry.userData.auxiliaryPoreCount = AUXILIARY_PORES.length;
  return geometry;
}

function buildMembraneGeometry(side, revealHalfAngle = 0) {
  const positions = [];
  const surfaceNear = [], surfaceFar = [], lipNear = [], lipFar = [], cutEdges = [];
  const angleCount = MEMBRANE.angleSegments;
  const radialCount = MEMBRANE.radialSegments;
  const angleStep = TAU / angleCount;
  const revealCenter = Math.PI / 2;
  const start = Math.round((revealCenter - revealHalfAngle) / angleStep);
  const end = Math.round((revealCenter + revealHalfAngle) / angleStep);
  const retained = index => index < start || index >= end;
  const faceRadiusAt = (theta, radialT) => {
    const inner = MEMBRANE.holeRadius + MEMBRANE.edgeBevel;
    const outer = boundaryRadius(theta) - MEMBRANE.edgeBevel;
    // Spend more of the fixed mesh budget near the pore and its shallow dimple.
    // Linear spacing would turn the lip into a broad, toy-like ring here.
    return inner + Math.pow(radialT, 1.5) * (outer - inner);
  };
  const angleAtFace = (angleIndex, radius) => {
    const theta = angleIndex * angleStep;
    if (revealHalfAngle > 0 && angleIndex === start) return theta - MEMBRANE.edgeBevel / Math.max(radius, .1);
    if (revealHalfAngle > 0 && angleIndex === end) return theta + MEMBRANE.edgeBevel / Math.max(radius, .1);
    return theta;
  };

  for (const [depthSign, faceIndices, lipIndices] of [
    [1, surfaceNear, lipNear],
    [-1, surfaceFar, lipFar],
  ]) {
    const vertexStart = positions.length / 3;
    for (let angleIndex = 0; angleIndex <= angleCount; angleIndex++) {
      const theta = angleIndex * angleStep;
      for (let radialIndex = 0; radialIndex <= radialCount; radialIndex++) {
        const radialT = radialIndex / radialCount;
        const radius = faceRadiusAt(theta, radialT);
        positions.push(...surfacePosition(angleAtFace(angleIndex, radius), radius, side, depthSign));
      }
    }

    const row = radialCount + 1;
    for (let angleIndex = 0; angleIndex < angleCount; angleIndex++) {
      if (!retained(angleIndex)) continue;
      for (let radialIndex = 0; radialIndex < radialCount; radialIndex++) {
        const a = vertexStart + angleIndex * row + radialIndex;
        const b = vertexStart + (angleIndex + 1) * row + radialIndex;
        const c = a + 1;
        const d = b + 1;
        const target = radialIndex < 2 ? lipIndices : faceIndices;
        addQuad(target, a, b, c, d, depthSign < 0);
      }
    }
    for (const pore of AUXILIARY_PORES) cutAuxiliaryPore(positions, faceIndices, side, depthSign, pore);
  }

  const roundedEdgeProfile = [
    { depth: 1, bevel: 1 }, { depth: .52, bevel: .48 }, { depth: 0, bevel: 0 },
    { depth: -.52, bevel: .48 }, { depth: -1, bevel: 1 },
  ];
  const addRoundedEdgeStrip = (points, { radialSign = 0, angleSign = 0, reverse = false } = {}) => {
    const first = positions.length / 3;
    for (const profile of roundedEdgeProfile) for (const point of points) {
      const radius = point.radius + radialSign * MEMBRANE.edgeBevel * profile.bevel;
      const theta = point.theta + angleSign * MEMBRANE.edgeBevel * profile.bevel / Math.max(radius, .1);
      positions.push(...surfacePosition(theta, radius, side, profile.depth));
    }
    const pointCount = points.length;
    for (let profileIndex = 0; profileIndex < roundedEdgeProfile.length - 1; profileIndex++) {
      const row = first + profileIndex * pointCount;
      const next = row + pointCount;
      for (let pointIndex = 0; pointIndex < pointCount - 1; pointIndex++) {
        addQuad(cutEdges, row + pointIndex, next + pointIndex, row + pointIndex + 1, next + pointIndex + 1, reverse);
      }
    }
  };

  // Rounded inner and outer cross-sections soften the shell while retaining its thickness.
  for (let angleIndex = 0; angleIndex < angleCount; angleIndex++) {
    if (!retained(angleIndex)) continue;
    const theta0 = angleIndex * angleStep;
    const theta1 = (angleIndex + 1) * angleStep;
    addRoundedEdgeStrip([
      { theta: theta0, radius: MEMBRANE.holeRadius },
      { theta: theta1, radius: MEMBRANE.holeRadius },
    ], { radialSign: 1 });
    // The expanded perimeter fades out before it reaches the camera framing.
    // A visible outer rim would read as a floating slab rather than a membrane.
    if (revealHalfAngle > 0) addRoundedEdgeStrip([
      { theta: theta0, radius: boundaryRadius(theta0) },
      { theta: theta1, radius: boundaryRadius(theta1) },
    ], { radialSign: -1, reverse: true });
  }

  if (revealHalfAngle > 0) {
    // Keep this branch for an explicitly requested local cutaway variant.
    for (const angleIndex of [start, end]) {
      const theta = angleIndex * angleStep;
      const angleSign = angleIndex === start ? -1 : 1;
      for (let radialIndex = 0; radialIndex < radialCount; radialIndex++) {
        const t0 = radialIndex / radialCount;
        const t1 = (radialIndex + 1) / radialCount;
        addRoundedEdgeStrip([
          { theta, radius: faceRadiusAt(theta, t0) },
          { theta, radius: faceRadiusAt(theta, t1) },
        ], { angleSign, reverse: angleIndex === end });
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const allGroups = [surfaceNear, surfaceFar, cutEdges, [...lipNear, ...lipFar]];
  const allIndices = [];
  for (let materialIndex = 0; materialIndex < allGroups.length; materialIndex++) {
    const group = allGroups[materialIndex];
    const startIndex = allIndices.length;
    allIndices.push(...group);
    if (group.length) geometry.addGroup(startIndex, group.length, materialIndex);
  }
  geometry.setIndex(allIndices);
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  geometry.userData.authoredMembraneVolume = true;
  geometry.userData.layerSide = side;
  geometry.userData.thickness = MEMBRANE.halfThickness * 2;
  geometry.userData.apertureRadius = MEMBRANE.holeRadius;
  geometry.userData.auxiliaryPores = AUXILIARY_PORES.map(({ y, z, radius }) => ({ y, z, radius }));
  geometry.userData.revealHalfAngle = revealHalfAngle;
  return geometry;
}

function addMembraneMotion(material, time, motion, suffix) {
  const previous = material.onBeforeCompile;
  const key = material.customProgramCacheKey();
  material.onBeforeCompile = shader => {
    previous(shader);
    Object.assign(shader.uniforms, { uBoundaryTime: time, uBoundaryMotion: motion });
    shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
      uniform float uBoundaryTime;
      uniform float uBoundaryMotion;
      // Both layers share the deformation; the pore attachment remains pinned.
      vec3 boundaryDeformation(vec3 p) {
        vec2 q = p.yz - vec2(${EXPORT_FRAME.y.toFixed(3)}, ${EXPORT_FRAME.z.toFixed(3)});
        float radius = length(q);
        float t = clamp((radius - .86) / .76, 0.0, 1.0);
        float mask = t * t * (3.0 - 2.0 * t);
        float derivative = 6.0 * t * (1.0 - t) / .76;
        vec2 maskGradient = derivative * q / max(radius, .001);
        float a = q.x * .95 + q.y * .68 + uBoundaryTime * .55;
        float b = q.x * -.58 + q.y * 1.12 - uBoundaryTime * .36 + .7;
        float wave = .045 * sin(a) + .020 * sin(b);
        vec2 gradient = .045 * cos(a) * vec2(.95, .68)
          + .020 * cos(b) * vec2(-.58, 1.12);
        return uBoundaryMotion * vec3(wave * mask, gradient * mask + wave * maskGradient);
      }
    `);
    shader.vertexShader = shader.vertexShader.replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
      vec3 boundaryNormalField = boundaryDeformation(position);
      objectNormal = normalize(objectNormal - vec3(0.0,
        objectNormal.x * boundaryNormalField.y, objectNormal.x * boundaryNormalField.z));
    `);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      transformed.x += boundaryDeformation(transformed).x;
    `);
    shader.fragmentShader = shader.fragmentShader.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      // Let the continuous sheets disappear into the surrounding space without
      // an outer silhouette that resembles the side of a transparent block.
      float filmRadius = length(vExhibitSurfacePosition.yz - vec2(${EXPORT_FRAME.y.toFixed(3)}, ${EXPORT_FRAME.z.toFixed(3)}));
      // A broad, low-contrast contour reveals where the sheets curve into the
      // pore. It follows the actual opening rather than adding a hard ring.
      float poreContour = exp(-pow((filmRadius - 1.18) / .62, 2.0));
      diffuseColor.rgb *= 1.0 + .11 * poreContour;
      diffuseColor.a *= 1.0 + .38 * poreContour;
      diffuseColor.a *= 1.0 - smoothstep(4.25, 7.15, filmRadius);
      ${suffix < 2 ? `// Broad, very soft surface modulation binds the small apertures to
      // the film. It is reflected light on the sheet, never an emissive halo.
      float auxiliaryFilm = 0.0;
      ${AUXILIARY_PORES.map(pore => `auxiliaryFilm += exp(-pow((length(vExhibitSurfacePosition.yz - vec2(${(EXPORT_FRAME.y + pore.y).toFixed(3)}, ${(EXPORT_FRAME.z + pore.z).toFixed(3)})) - .68) / .70, 2.0));`).join('\n      ')}
      auxiliaryFilm = min(auxiliaryFilm, 1.0);
      diffuseColor.rgb *= 1.0 + .035 * auxiliaryFilm;
      diffuseColor.a *= 1.0 + .52 * auxiliaryFilm;
      // Bounded teaching translucency: stronger silhouettes at grazing angles.
      float filmFacing = abs(dot(normal, normalize(vViewPosition)));
      float filmEdge = pow(1.0 - clamp(filmFacing, 0.0, 1.0), 2.0);
      diffuseColor.a *= mix(.58, 1.0, filmEdge);` : ''}
    `);
  };
  material.customProgramCacheKey = () => `${key}:nuclear-thin-film-6:${suffix < 2 ? 'face' : 'edge'}`;
  material.userData.thinMembrane = { time, motion, surface: suffix < 2 };
}

// Art-directed two-membrane teaching cutaway. Its soft folds, thickness and
// reveal are illustrative geometry, not measured membrane or NPC structure.
export function buildNuclearExportExhibit(parent, kit) {
  const time = { value: 0 }, motion = { value: 0 };

  const membraneNear = createExhibitMaterial({
    color: '#bdd8c7', role: 'inner', variant: 'nuclear-membrane-near',
    roughness: .48, specularIntensity: .22, envMapIntensity: .36, sheen: .08, transmission: 0,
    colorVariation: .12, roughnessVariation: .018, relief: .0008, normalSlope: .006, edgeStrength: .025,
    transparent: true, opacity: .40, depthWrite: false, side: THREE.FrontSide,
  });
  const membraneFar = createExhibitMaterial({
    color: '#9bbfb6', role: 'inner', variant: 'nuclear-membrane-far',
    roughness: .54, specularIntensity: .18, envMapIntensity: .30, sheen: .06, transmission: 0,
    colorVariation: .10, roughnessVariation: .018, relief: .0007, normalSlope: .005, edgeStrength: .020,
    transparent: true, opacity: .27, depthWrite: false, side: THREE.FrontSide,
  });
  const membraneCut = createExhibitMaterial({
    color: '#8ab1a1', role: 'inner', variant: 'nuclear-membrane-cut-edge',
    roughness: .60, specularIntensity: .16, sheen: .035, transmission: 0,
    colorVariation: .08, relief: .0005, normalSlope: .004, edgeStrength: .015,
    transparent: true, opacity: .70, depthWrite: false, side: THREE.FrontSide,
  });
  const membraneLip = createExhibitMaterial({
    color: '#b4cab1', role: 'inner', variant: 'nuclear-membrane-lip',
    roughness: .58, specularIntensity: .18, sheen: .04, transmission: 0,
    colorVariation: .08, relief: .0005, normalSlope: .004, edgeStrength: .015,
    transparent: true, opacity: .75, depthWrite: false, side: THREE.FrontSide,
  });
  [membraneNear, membraneFar, membraneCut, membraneLip].forEach((material, index) => {
    kit.ownMaterial(material);
    addMembraneMotion(material, time, motion, index);
  });

  const auxiliaryWallMaterial = createExhibitMaterial({
    color: '#a9c4ae', role: 'inner', variant: 'nuclear-membrane-auxiliary-pore-wall',
    roughness: .61, specularIntensity: .16, sheen: .035, transmission: 0,
    colorVariation: .08, relief: .0005, normalSlope: .004, edgeStrength: .018,
    transparent: true, opacity: .54, depthWrite: false, side: THREE.DoubleSide,
  });
  kit.ownMaterial(auxiliaryWallMaterial);
  addMembraneMotion(auxiliaryWallMaterial, time, motion, 4);

  const membranes = [];
  for (const layer of [
    { side: -1, halfAngle: 0, name: 'nuclear-membrane-inner' },
    { side: 1, halfAngle: 0, name: 'nuclear-membrane-outer' },
  ]) {
    const geometry = kit.geometry(buildMembraneGeometry(layer.side, layer.halfAngle));
    const shell = kit.mesh(geometry, [membraneNear, membraneFar, membraneCut, membraneLip], parent, { type: 'pore' });
    shell.name = layer.name;
    shell.renderOrder = 2;
    shell.userData.authoredMembraneVolume = true;
    shell.userData.revealDirection = 'none';
    shell.userData.layerSide = layer.side;
    shell.userData.thickness = MEMBRANE.halfThickness * 2;
    shell.castShadow = false;
    membranes.push(shell);
  }
  const auxiliaryWalls = kit.mesh(kit.geometry(buildAuxiliaryPoreWalls()), auxiliaryWallMaterial, parent, { type: 'pore' });
  auxiliaryWalls.name = 'nuclear-membrane-secondary-pore-walls';
  auxiliaryWalls.renderOrder = 2.2;
  auxiliaryWalls.castShadow = false;

  // Gentle local fill catches the camera-facing surface without adding glow or haze.
  const membraneFill = new THREE.DirectionalLight('#d8ddc7', 0);
  membraneFill.name = 'nuclear-membrane-local-fill';
  membraneFill.position.set(EXPORT_FRAME.x + 4, EXPORT_FRAME.y + 2.5, EXPORT_FRAME.z + 4);
  membraneFill.target.position.set(EXPORT_FRAME.x, EXPORT_FRAME.y, EXPORT_FRAME.z);
  // Keep the light in the visible scene even when the exhibit is hidden.
  // Switching the light count at chapter boundaries recompiles every material.
  (parent.parent || parent).add(membraneFill, membraneFill.target);
  const fillPosition=new THREE.Vector3(4,2.5,4+EXPORT_FRAME.z);
  const fillTarget=new THREE.Vector3(EXPORT_FRAME.x,EXPORT_FRAME.y,EXPORT_FRAME.z);
  const cameraLocal = new THREE.Vector3();

  const pore = new THREE.Group();
  parent.add(pore);
  pore.position.set(EXPORT_FRAME.x, EXPORT_FRAME.y, EXPORT_FRAME.z);
  const control = [
    [-.31, .48], [-.34, .59], [-.24, .68], [0, .64], [.24, .68],
    [.34, .59], [.31, .48], [.20, .45], [-.20, .45],
  ];
  const curve = new THREE.CatmullRomCurve3(control.map(([x, r]) => new THREE.Vector3(x, r, 0)), true, 'centripetal');
  const profile = Array.from({ length: 64 }, (_, index) => {
    const point = curve.getPoint(index / 64);
    return [point.x, point.y];
  });
  const positions = [], colors = [], indices = [], segments = 96;
  for (let i = 0; i <= segments; i++) {
    const angle = i / segments * TAU;
    for (let j = 0; j < profile.length; j++) {
      const [x, radius] = profile[j];
      const rib = .014 * Math.cos(8 * angle) * (radius > EXPORT_FRAME.lumenRadius + .10 ? 1 : .3);
      positions.push(x, (radius + rib) * Math.cos(angle), (radius + rib) * Math.sin(angle));
      const inner = radius < EXPORT_FRAME.lumenRadius + .08;
      const tint = new THREE.Color(inner ? '#647e76' : '#b9c5aa');
      const shade = 1 - .075 * (.5 + .5 * Math.cos(8 * angle + .4));
      colors.push(tint.r * shade, tint.g * shade, tint.b * shade);
    }
  }
  for (let i = 0; i < segments; i++) for (let j = 0; j < profile.length; j++) {
    const next = (j + 1) % profile.length;
    const a = i * profile.length + j, b = (i + 1) * profile.length + j;
    const c = i * profile.length + next, d = (i + 1) * profile.length + next;
    indices.push(a, c, b, c, d, b);
  }
  const collarGeometry = new THREE.BufferGeometry();
  collarGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  collarGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  collarGeometry.setIndex(indices);
  collarGeometry.computeVertexNormals();
  collarGeometry.computeBoundingBox();
  collarGeometry.computeBoundingSphere();
  const collarMaterial = createBioProteinMaterial({
    color: '#ffffff', variant: 'nuclear-pore-collar', vertexColors: true,
    roughness: .58, specularIntensity: .24, side: THREE.DoubleSide,
  });
  kit.ownMaterial(collarMaterial);
  const window = createPolymeraseView({
    center: new THREE.Vector3(EXPORT_FRAME.x, EXPORT_FRAME.y, 0),
    radii: new THREE.Vector2(.65, .62), depthOffset: -.07,
  });
  window.wrap(collarMaterial);
  const collar = kit.mesh(kit.geometry(collarGeometry), collarMaterial, pore, { type: 'pore' });
  collar.name = 'nuclear-pore-continuous-collar';
  collar.userData.proteinWindow = 'pore';

  const ghostMaterial = createBioProteinMaterial({
    color: '#ffffff', variant: 'nuclear-pore-overlay', vertexColors: true,
    roughness: .58, specularIntensity: .24,
  });
  kit.ownMaterial(ghostMaterial);
  window.wrap(ghostMaterial, true);
  const ghost = kit.mesh(collarGeometry, ghostMaterial, pore);
  ghost.name = 'nuclear-pore-teaching-overlay';
  ghost.renderOrder = 8;

  return {
    pore,
    membranes,
    window,
    update(t, enabled) { time.value = t; motion.value = enabled ? 1 : 0; },
    updateView(camera) {
      // Closed shells draw outward faces only; order sheets back to front.
      camera.getWorldPosition(cameraLocal);
      parent.worldToLocal(cameraLocal);
      for (const membrane of membranes) membrane.renderOrder =
        membrane.userData.layerSide * cameraLocal.x > 0 ? 2.1 : 2;
      membraneFill.intensity=parent.visible && membranes.some(mesh=>mesh.visible) ? .85*membraneNear.opacity : 0;
      membraneFill.position.copy(fillPosition).applyMatrix4(parent.matrixWorld);
      membraneFill.target.position.copy(fillTarget).applyMatrix4(parent.matrixWorld);
      window.update(camera, pore.matrixWorld);
      const windowState = window.inspect();
      ghost.visible = windowState.enabled || windowState.amount > 0 || window.active();
    },
    inspect: () => ({
      type: 'two full-field thin translucent membrane sheets',
      frame: { x: EXPORT_FRAME.x, y: EXPORT_FRAME.y, z: EXPORT_FRAME.z },
      lumenRadius: EXPORT_FRAME.lumenRadius,
      membraneHoleRadius: MEMBRANE.holeRadius,
      auxiliaryPores: AUXILIARY_PORES.map(({ y, z, radius }) => ({ y, z, radius })),
      totalPoreCount: 1 + AUXILIARY_PORES.length,
      membraneThickness: MEMBRANE.halfThickness * 2,
      edgeBevel: MEMBRANE.edgeBevel,
      membraneLayerCentersX: [-MEMBRANE.layerOffset, MEMBRANE.layerOffset],
      interMembraneGap: MEMBRANE.layerOffset * 2 - MEMBRANE.halfThickness * 2,
      membraneReveal: { direction: 'none', halfAnglesDegrees: [0, 0] },
      silhouette: { halfWidth: MEMBRANE.halfWidth, halfHeight: MEMBRANE.halfHeight, organicLobes: true, poreDimple: true },
      material: 'soft translucent sage film, bounded view-angle opacity and pinned broad ripples',
      membraneSurface: {
        opacity: [membraneNear.opacity, membraneFar.opacity],
        roughness: [membraneNear.roughness, membraneFar.roughness],
        transmission: 0, transparent: true, depthWrite: false, outwardFacesOnly: true,
        pinnedRadius: .86, maximumDisplacement: .065,
        timeSource: 'lesson timeline only', layersShareDeformation: true,
      },
      illustrativeSurface: true,
      measuredMolecularStructure: false,
      time: time.value,
      motion: motion.value,
      perspective: window.inspect().enabled,
    }),
  };
}
