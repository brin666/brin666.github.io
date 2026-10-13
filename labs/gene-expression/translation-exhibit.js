import * as THREE from './vendor/three.module.js';
import { createRibosomeShell } from './ribosome-shell.js';

const selection = { type: 'ribosome' };
const trnaSelection = { type: 'trna' };
const point = (x, y, z = 0) => new THREE.Vector3(x, y, z);
const clamp01 = (value) => Math.max(0, Math.min(1, value));
const smoothstep = (value) => {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
};

function gaussian(x, y, cx, cy, sx, sy) {
  return Math.exp(-(((x - cx) / sx) ** 2 + ((y - cy) / sy) ** 2));
}

function makeSubunitGeometry({ width, height, depth, centerY, phase, grooveY, small = false, baseColor, bioSurface = false }) {
  const geometry = new THREE.SphereGeometry(1, 72, 48);
  const positions = geometry.attributes.position;
  const base = baseColor.clone();
  const lightDomain = new THREE.Color(bioSurface ? (small ? '#c0cebd' : '#dfd0aa') : small ? '#a0c0ae' : '#c0c9a0');
  const shadowDomain = new THREE.Color(bioSurface ? (small ? '#536e65' : '#7a7056') : small ? '#486d66' : '#65785f');
  const colors = new Float32Array(positions.count * 3);

  for (let i = 0; i < positions.count; i++) {
    const sx = positions.getX(i);
    const sy = positions.getY(i);
    const sz = positions.getZ(i);
    const angle = Math.atan2(sy, sx);

    // Broad lobes and two uneven shoulder domains break the oval silhouette
    // with continuous shape changes rather than separate decorative blobs.
    const lobe = 1
      + 0.060 * Math.cos(3 * angle + phase) * (0.55 + 0.45 * Math.abs(sz))
      + 0.026 * Math.sin(2 * angle - phase) * (1 - Math.abs(sz));
    const shoulderA = gaussian(sx, sy, small ? -0.53 : -0.61, small ? 0.12 : 0.18, 0.34, 0.38);
    const shoulderB = gaussian(sx, sy, small ? 0.48 : 0.52, small ? 0.28 : 0.32, 0.37, 0.32);
    const x = sx * width * lobe + 0.035 * sy * sz + (small ? 0.035 : 0.072) * shoulderA - 0.040 * shoulderB;
    const crown = small ? 0 : .13 * gaussian(sx, sy, -.48, .62, .30, .32)
      - .17 * gaussian(sx, sy, .08, .89, .23, .25)
      + .065 * gaussian(sx, sy, .59, .50, .27, .34);
    const lowerNotch = small ? 0 : .11 * gaussian(sx, sy, -.05, -.85, .48, .28);
    const y = centerY + sy * height * lobe + 0.045 * (sx * sx - 0.28)
      + (small ? 0.025 : 0.070) * shoulderA - 0.038 * shoulderB + crown + lowerNotch;
    let z = -0.51 + sz * depth * lobe + 0.020 * sx * sy;

    const front = smoothstep((sz + 0.06) / 0.72);
    const centralGroove = gaussian(sx, sy, 0, grooveY, 0.50, small ? 0.22 : 0.24);
    const lineSlope = small ? 0.36 : 0.52;
    const lineStartY = small ? -0.26 : -0.30;
    const lineEndY = small ? 0.52 : 0.58;
    const physicalSlope = lineSlope * height / width;
    const grooveWidth = small ? 0.092 : 0.105;
    const grooveAt = (startX) => {
      const lineX = startX + lineSlope * (sy - lineStartY);
      const distance = (sx - lineX) * width / Math.sqrt(1 + physicalSlope * physicalSlope);
      const ends = smoothstep((sy - lineStartY) / 0.20) * smoothstep((lineEndY - sy) / 0.20);
      return Math.exp(-((distance / grooveWidth) ** 2)) * ends;
    };
    const grooveA = grooveAt(small ? -0.47 : -0.56);
    const grooveB = grooveAt(small ? 0.10 : 0.08);
    const edgeGrooveA = gaussian(sx, sy, -0.65, grooveY + 0.06, 0.18, 0.45);
    const edgeGrooveB = gaussian(sx, sy, 0.66, grooveY - 0.02, 0.20, 0.42);
    const grooveDepth = (small ? 0.047 : 0.086) * grooveA
      + (small ? 0.039 : 0.078) * grooveB
      + (small ? 0.080 : 0.042) * centralGroove
      + 0.024 * (edgeGrooveA + edgeGrooveB);
    z -= front * grooveDepth;

    // Low, offset shoulders make the channels read as domain boundaries.
    z += front * ((small ? 0.018 : 0.031) * shoulderA + (small ? 0.014 : 0.023) * shoulderB);

    positions.setXYZ(i, x, y, z);

    const domainMix = (small ? 0.13 : 0.21) * shoulderA + (small ? 0.10 : 0.16) * shoulderB;
    const grooveMix = Math.min(small ? 0.16 : 0.22, (small ? 0.13 : 0.18) * (grooveA + grooveB) + 0.06 * centralGroove);
    const color = base.clone().lerp(lightDomain, domainMix).lerp(shadowDomain, grooveMix);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  const normals = geometry.attributes.normal;
  for (let i = 0; i < normals.count; i++) {
    const lengthSq = normals.getX(i) ** 2 + normals.getY(i) ** 2 + normals.getZ(i) ** 2;
    if (lengthSq > 1e-10) continue;
    const fallback = new THREE.Vector3(
      positions.getX(i) / width,
      (positions.getY(i) - centerY) / height,
      (positions.getZ(i) + 0.51) / depth,
    ).normalize();
    normals.setXYZ(i, fallback.x, fallback.y, fallback.z);
  }
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

/** Add the static, abstract two-shell translation exhibit to the scene groups. */
export function buildRibosomeExhibit(bigSubunit, smallSubunit, kit) {
  const bigBase = kit.palette?.ribosome?.color || new THREE.Color('#9fae85');
  const smallBase = kit.palette?.smallRibosome?.color || new THREE.Color('#77a59b');
  const surface = { kind: 'protein', biological: true, vertexColors: true, ...(kit.bioSurface ? {} : { roughness: .78, specularIntensity: .18 }), bumpMap: null, bumpScale: 0 };
  const bigMaterial = kit.material('#ffffff', surface);
  const smallMaterial = kit.material('#ffffff', surface);
  if(kit.workWindow) { kit.workWindow.wrap(bigMaterial);kit.workWindow.wrap(smallMaterial); }
  const bigGeometry = kit.geometry(kit.refinedModels ? createRibosomeShell(false, bigBase) : makeSubunitGeometry({
    width: 1.43, height: 0.74, depth: 0.57, centerY: 0.84,
    phase: 0.72, grooveY: -0.72, baseColor: bigBase, bioSurface: kit.bioSurface,
  }));
  const smallGeometry = kit.geometry(kit.refinedModels ? createRibosomeShell(true, smallBase) : makeSubunitGeometry({
    width: 1.39, height: 0.37, depth: 0.43, centerY: -0.73,
    phase: 2.16, grooveY: 0.76, small: true, baseColor: smallBase, bioSurface: kit.bioSurface,
  }));

  const bigShell = kit.mesh(bigGeometry, bigMaterial, bigSubunit, selection);
  bigShell.name = 'translation-large-shell';
  const smallShell = kit.mesh(smallGeometry, smallMaterial, smallSubunit, selection);
  smallShell.name = 'translation-small-shell';
  if(kit.workWindow) {
    for(const [shell,parent] of [[bigShell,bigSubunit],[smallShell,smallSubunit]]) {
      shell.userData.proteinWindow='ribosome';
      const ghost=kit.mesh(shell.geometry,kit.workWindow.wrap(kit.material('#ffffff',surface),true),parent);
      ghost.name=shell.name+'-teaching-overlay';ghost.renderOrder=8;
    }
  }

  // The mRNA path is indicated by the small subunit's recessed surface.
  // Keep it part of the shell rather than adding a separate foreground strip.
}

/** Add only the tRNA body; the caller owns the anticodon plates and amino-acid end. */
export function buildTrnaExhibit(group, mat, kit) {
  const tube = (points, radius, segments, material = mat) => {
    const curve = kit.tube(group, material, radius, segments, trnaSelection);
    curve.set(points);
    return curve.object;
  };

  // Two continuous arms fold through different depths to give the body a
  // compact L-like silhouette. Their endpoints preserve the caller's anchors.
  const mainArm = [
    point(0, 0.0738, 0.10), point(-0.15, 0.27, 0.11),
    point(-0.08, 0.47, 0.10), point(0.02, 0.65, 0.11),
    point(0.13, 0.81, 0.13), point(0.18, 1.02, 0.12),
    point(0.15, 1.25, 0.09), point(0.25, 1.45, 0.045),
    point(0.44, 1.63, 0),
  ];
  const pairedArm = [
    point(0.15, 0.12, 0.055), point(0.16, 0.33, 0.035),
    point(0.10, 0.54, 0.035), point(0.22, 0.72, 0.065),
    point(0.08, 0.88, 0.03), point(0.025, 1.08, -0.005),
    point(0.16, 1.29, -0.025), point(0.34, 1.48, -0.015),
  ];
  tube(mainArm, 0.052, 48);
  tube(pairedArm, 0.040, 42);
  tube([
    point(-0.35, 0.0738, 0.10), point(-0.18, 0.052, 0.085),
    point(0, 0.0738, 0.10), point(0.15, 0.12, 0.055),
    point(0.35, 0.0738, 0.10), point(0.23, 0.15, 0.065),
    point(0.15, 0.12, 0.055), point(0, 0.0738, 0.10),
  ], 0.035, 22);

  // The unequal loops sit on opposite sides and at different depths, keeping
  // the folded silhouette readable without a flat cloverleaf outline.
  tube([
    point(0.015, 0.48, 0.10), point(-0.20, 0.53, 0.045),
    point(-0.37, 0.68, -0.02), point(-0.34, 0.86, 0.005),
    point(-0.15, 0.94, 0.065), point(0.12, 0.82, 0.13),
  ], 0.046, 26);
  tube([
    point(0.14, 0.80, 0.13), point(0.36, 0.72, 0.205),
    point(0.51, 0.84, 0.245), point(0.46, 1.02, 0.215),
    point(0.25, 1.10, 0.11), point(0.08, 0.88, 0.03),
  ], 0.043, 26);

  const joints = kit.palette?.joint || mat;
  const rungs = [
    [point(-0.115, 0.25, 0.108), point(0.157, 0.25, 0.045)],
    [point(-0.075, 0.44, 0.103), point(0.128, 0.44, 0.035)],
    [point(0.00, 0.62, 0.108), point(0.133, 0.62, 0.04)],
    [point(0.17, 1.10, 0.11), point(0.025, 1.10, -0.005)],
    [point(0.16, 1.30, 0.085), point(0.17, 1.30, -0.025)],
    [point(0.28, 1.47, 0.025), point(0.33, 1.47, -0.015)],
  ];
  for (const [a, b] of rungs) tube([a, b], 0.012, 2, joints);
}
