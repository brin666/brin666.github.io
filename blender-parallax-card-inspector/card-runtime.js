import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

/*
 * This is the display-only runtime for the two Blender cards.
 *
 * It deliberately reuses the source card package's GLB and PNG layers. The
 * custom shader is rebuilt here because a glTF/GLB file carries the mesh and
 * material roles, but not the original Three.js shader graph.
 */

const sourceCards = {
  shengkai: {
    model: "./assets/models/shengkaibumilong/card.glb",
    subject: "./assets/shengkaibumilong/subject.png",
    background: "./assets/shengkaibumilong/background.png",
    backgroundInsect: "./assets/shengkaibumilong/background-insect.png",
    subjectFxMask: "./assets/shengkaibumilong/subject-fx-mask.png",
    text: "./assets/shengkaibumilong/text.png",
    lineart: "./assets/shengkaibumilong/lineart.png",
    kind: "ember",
  },
  fengbao: {
    model: "./assets/models/fengbao-kula/card.glb",
    subject: "./assets/fengbao-kula/subject.png",
    background: "./assets/fengbao-kula/background.png",
    backgroundInsect: "./assets/fengbao-kula/background-electric.png",
    subjectFxMask: "./assets/fengbao-kula/subject-fx-mask.png",
    text: "./assets/fengbao-kula/text.png",
    lineart: "./assets/fengbao-kula/lineart.png",
    kind: "electric",
  },
};

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = vec2(uv.x, 1.0 - uv.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const sharedShader = `precision highp float;
varying vec2 vUv;
uniform float uTime, uFoil, uScale, uDepth, uBgDepth, uSafeScale;
uniform float uElementMix, uFxProgress, uFxDirection;
uniform vec2 uSafeOffset;
uniform vec3 uView;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

vec3 spectrum(float t) {
  t = fract(t);
  vec3 pink = vec3(1.0, 0.32, 0.62);
  vec3 yellow = vec3(1.0, 0.85, 0.32);
  vec3 blue = vec3(0.22, 0.62, 1.0);
  if (t < 0.35) return mix(pink, yellow, t / 0.35);
  if (t < 0.70) return mix(yellow, blue, (t - 0.35) / 0.35);
  return mix(blue, vec3(1.0), (t - 0.70) / 0.30);
}

vec3 overlay(vec3 b, vec3 f) {
  return mix(
    2.0 * b * f,
    1.0 - 2.0 * (1.0 - b) * (1.0 - f),
    step(vec3(0.5), b)
  );
}

float inside(vec2 p) {
  return step(0.0, p.x) * step(0.0, p.y) * step(p.x, 1.0) * step(p.y, 1.0);
}

vec2 parallax(vec2 p, float scale, float depth) {
  return (p - 0.5) * scale + 0.5
    + uView.xy / max(abs(uView.z), 0.35) * depth * 0.14;
}

float wave(vec2 p) {
  vec2 a = p + uView.xy * 2.4;
  return 0.5 + 0.5 * sin(
    (a.x * 0.848 - a.y * 0.530) * 6.283 * 0.55 + 7.0 * noise(a * 1.5)
  );
}

float star(vec2 p) {
  vec2 q = p * 105.0;
  vec2 id = floor(q);
  vec2 f = fract(q);
  float first = 9.0;
  float second = 9.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = vec2(hash(id + g), hash(id + g + 43.3));
      float d = length(g + o - f);
      if (d < first) {
        second = first;
        first = d;
      } else {
        second = min(second, d);
      }
    }
  }
  float edge = 1.0 - smoothstep(0.01, 0.035, second - first);
  float sparse = step(0.90, hash(id + 8.8));
  float twinkle = pow(
    0.5 + 0.5 * sin(uTime * 1.8 + hash(id) * 30.0 + uView.x * 27.0 + uView.y * 21.0),
    6.0
  );
  return edge * sparse * twinkle;
}

float flightY(float x) {
  return 0.88 - 0.62 * x + 0.035 * sin(x * 13.0);
}
`;

const emberFragment = sharedShader + `
uniform sampler2D tSubject, tBackground, tBackgroundInsect;
uniform sampler2D tSubjectFxMask, tText, tLine;

void main() {
  vec2 uv = vUv;
  vec2 su = parallax(uv, uScale, uDepth) * uSafeScale + uSafeOffset;
  vec2 bu = parallax(uv, 1.0, uBgDepth);
  vec4 sub = texture2D(tSubject, clamp(su, 0.0, 1.0));
  sub.a *= inside(su);

  vec3 fireBg = texture2D(tBackground, clamp(bu, 0.0, 1.0)).rgb;
  vec3 insectBg = texture2D(tBackgroundInsect, clamp(bu, 0.0, 1.0)).rgb;
  float organic = (noise(bu * 3.2) - 0.5) * 0.16 + (bu.x + bu.y - 1.0) * 0.09;
  float insectWipe = smoothstep(0.05, 0.95, uElementMix + organic);
  insectWipe *= smoothstep(0.0, 0.08, uElementMix);
  insectWipe = mix(insectWipe, 1.0, smoothstep(0.92, 1.0, uElementMix));
  vec3 bg = mix(fireBg, insectBg, insectWipe);

  float insectInk = smoothstep(0.10, 0.34, insectBg.g - insectBg.r * 0.18);
  float veinSweep = pow(
    0.5 + 0.5 * sin((bu.x * 0.72 + bu.y) * 15.0 - uTime * 1.25),
    12.0
  );
  bg += vec3(0.32, 0.34, 0.09) * insectInk * veinSweep * uElementMix * 0.14;

  vec2 cells = bu * vec2(7.0, 11.0);
  vec2 cell = floor(cells);
  vec2 cf = fract(cells) - 0.5;
  float edgeField = smoothstep(0.22, 0.46, max(abs(bu.x - 0.5), abs(bu.y - 0.5)));
  float scaleFleck = (1.0 - smoothstep(
    0.045, 0.17, abs(cf.x) * 0.7 + abs(cf.y)
  )) * step(0.88, hash(cell + 19.4)) * edgeField;
  bg += vec3(0.43, 0.46, 0.13) * scaleFleck * uElementMix * 0.24;

  float p = clamp(uFxProgress, 0.0, 1.0);
  float pulse = pow(sin(3.14159265 * p), 2.0);
  float travel = mix(1.0 - p, p, step(0.0, uFxDirection));
  float headX = mix(0.13, 0.88, travel);
  float headY = flightY(headX);
  vec2 hp = vec2((bu.x - headX) * 0.68, bu.y - headY);
  float shard = 1.0 - smoothstep(0.012, 0.048, abs(hp.x) * 0.82 + abs(hp.y) * 1.25);
  float path = (1.0 - smoothstep(0.006, 0.022, abs(bu.y - flightY(bu.x))))
    * step(0.08, bu.x) * step(bu.x, 0.93);
  float broken = smoothstep(
    0.28, 0.68, 0.5 + 0.5 * sin(bu.x * 92.0 + floor(bu.x * 12.0) * 0.83)
  );
  float forwardTail = step(bu.x, headX);
  float reverseTail = step(headX, bu.x);
  float trail = path * broken * mix(reverseTail, forwardTail, step(0.0, uFxDirection));
  vec2 wingQ = bu - vec2(headX, headY);
  float wingGate = smoothstep(0.30, 0.46, travel) * (1.0 - smoothstep(0.66, 0.82, travel));
  float wingUpper = (1.0 - smoothstep(
    0.004, 0.014, abs(wingQ.y + 0.48 * wingQ.x - 0.028 * sin(wingQ.x * 72.0))
  )) * step(0.0, wingQ.x) * step(wingQ.x, 0.22) * step(-0.13, wingQ.y) * step(wingQ.y, 0.04);
  float wingLower = (1.0 - smoothstep(
    0.004, 0.014, abs(wingQ.y - 0.38 * wingQ.x + 0.021 * sin(wingQ.x * 66.0))
  )) * step(0.0, wingQ.x) * step(wingQ.x, 0.20) * step(-0.03, wingQ.y) * step(wingQ.y, 0.12);
  float wing = wingGate * (wingUpper + wingLower);
  vec3 fxInk = mix(vec3(1.0, 0.28, 0.025), vec3(0.58, 0.66, 0.12), travel);
  float transitionBand = 0.4 + 0.6 * (4.0 * uElementMix * (1.0 - uElementMix));
  bg += fxInk * (shard * 2.05 + trail * 1.18 + wing * 1.42) * pulse * transitionBand;

  vec2 fxBehindUv = parallax(uv, uScale, uDepth - 0.032) * uSafeScale + uSafeOffset;
  vec2 fxFrontUv = parallax(uv, uScale, uDepth + 0.040) * uSafeScale + uSafeOffset;
  vec4 fxBehind = texture2D(tSubjectFxMask, clamp(fxBehindUv, 0.0, 1.0));
  vec4 fxFront = texture2D(tSubjectFxMask, clamp(fxFrontUv, 0.0, 1.0));
  float fireMask = fxBehind.r;
  float wingMask = fxBehind.g;
  float fireFlow = 0.5 + 0.5 * sin((uv.x * 7.2 + uv.y * 4.1) + uTime * 1.7 + uView.x * 9.0);
  float fireBeat = 0.68 + 0.32 * pow(fireFlow, 3.0);
  vec3 fireInk = mix(vec3(1.0, 0.18, 0.015), vec3(1.0, 0.72, 0.08), fireFlow);
  bg += fireInk * fireMask * fireBeat * (1.0 - uElementMix) * 0.235;
  float wingPulse = pow(
    0.5 + 0.5 * sin((uv.x * 0.7 + uv.y) * 19.0 - uTime * 1.15 + uView.x * 12.0),
    5.0
  );
  vec3 wingInk = mix(vec3(0.30, 0.36, 0.08), vec3(0.77, 0.66, 0.16), wingPulse);
  bg += wingInk * wingMask * uElementMix * (0.14 + 0.25 * wingPulse);

  float w = wave(uv);
  vec3 foil = spectrum(w * 0.8 + noise(uv * 5.0) * 0.12);
  vec3 subject = mix(sub.rgb, overlay(sub.rgb, foil), uFoil * 0.28);
  bg = mix(bg, overlay(bg, foil), uFoil * 0.36);
  vec3 col = mix(bg, subject, sub.a);
  float sweep = pow(max(0.0, sin(
    (uv.x * 0.83 + uv.y * 0.35 + uView.x * 1.8 + uView.y * 0.9) * 6.283
  )), 12.0);
  col += foil * sweep * uFoil * 0.28;
  float line = 1.0 - smoothstep(0.06, 0.25, texture2D(tLine, clamp(su, 0.0, 1.0)).r);
  col += vec3(1.0, 0.94, 0.78) * line * inside(su) * sub.a * sweep * uFoil * 0.22;
  col += vec3(0.66, 0.86, 1.0) * star(bu) * uFoil * 0.65 * (1.0 - sub.a * 0.7);
  float frontOutside = 1.0 - smoothstep(0.12, 0.72, fxFront.a);
  float fragmentFlow = 0.52 + 0.48 * sin(uTime * 1.35 + fxFrontUv.x * 31.0 + fxFrontUv.y * 17.0);
  vec3 fragmentInk = mix(vec3(1.0, 0.30, 0.02), vec3(0.58, 0.70, 0.14), uElementMix);
  col += wingInk * fxFront.g * frontOutside * (0.12 + 0.30 * wingPulse) * uElementMix;
  col += fragmentInk * fxFront.b * frontOutside * (0.22 + 0.42 * fragmentFlow)
    * (uElementMix * 0.82 + 0.18 * (1.0 - uElementMix));
  col += fireInk * fxFront.r * frontOutside * fireBeat * (1.0 - uElementMix) * 0.085;

  vec4 text = texture2D(tText, uv);
  col = mix(col, text.rgb, text.a);
  gl_FragColor = vec4(pow(max(col, vec3(0.0)), vec3(2.2)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

const electricFragment = sharedShader + `
uniform sampler2D tSubject, tBackground, tBackgroundInsect;
uniform sampler2D tSubjectFxMask, tText, tLine;

float electricSegment(vec2 point, vec2 a, vec2 b, float width) {
  vec2 ab = b - a;
  float h = clamp(dot(point - a, ab) / max(dot(ab, ab), 0.0001), 0.0, 1.0);
  float d = length(point - (a + ab * h));
  return 1.0 - smoothstep(width, width * 2.6, d);
}

float cartoonBolt(vec2 point, vec2 a, vec2 b, float width) {
  vec2 dir = normalize(b - a);
  vec2 normal = vec2(-dir.y, dir.x);
  vec2 p1 = mix(a, b, 0.22) + normal * width * 4.2;
  vec2 p2 = mix(a, b, 0.46) - normal * width * 3.2;
  vec2 p3 = mix(a, b, 0.70) + normal * width * 2.6;
  return max(
    max(electricSegment(point, a, p1, width), electricSegment(point, p1, p2, width)),
    max(electricSegment(point, p2, p3, width), electricSegment(point, p3, b, width))
  );
}

float electricSpark(vec2 point, vec2 center, float size) {
  vec2 q = point - center;
  float crossX = (1.0 - smoothstep(size * 0.08, size * 0.22, abs(q.x)))
    * step(abs(q.y), size * 0.55);
  float crossY = (1.0 - smoothstep(size * 0.08, size * 0.22, abs(q.y)))
    * step(abs(q.x), size * 0.55);
  float diamond = 1.0 - smoothstep(size * 0.16, size * 0.46, abs(q.x) + abs(q.y));
  return max(max(crossX, crossY), diamond);
}

void main() {
  vec2 uv = vUv;
  vec2 su = parallax(uv, uScale, uDepth) * uSafeScale + uSafeOffset;
  vec2 bu = parallax(uv, 1.0, uBgDepth);
  vec4 sub = texture2D(tSubject, clamp(su, 0.0, 1.0));
  sub.a *= inside(su);

  vec3 electricBg = texture2D(tBackground, clamp(bu, 0.0, 1.0)).rgb;
  vec3 bg = electricBg;
  float chargeNoise = noise(bu * 5.2 + uView.xy * 1.8);
  float chargeBand = pow(
    0.5 + 0.5 * sin((bu.x * 0.92 - bu.y * 0.38 + uView.x * 0.42) * 18.0 + chargeNoise * 2.4),
    10.0
  );
  float chargeDots = step(0.86, hash(floor(bu * vec2(13.0, 19.0)) + 17.2));
  bg += vec3(0.05, 0.28, 0.48) * chargeBand * uElementMix * 0.16;
  bg += vec3(0.96, 0.60, 0.08) * chargeDots * uElementMix * 0.05;

  float inspectLevel = clamp(0.16 + uElementMix * 0.84, 0.0, 1.0);
  float crossingPulse = step(0.0, uFxProgress)
    * pow(sin(3.14159265 * clamp(uFxProgress, 0.0, 1.0)), 0.72);
  float boltFlicker = 0.58 + 0.42 * pow(
    0.5 + 0.5 * sin(uTime * 4.6 + uView.x * 18.0 + uView.y * 9.0),
    5.0
  );
  float boltLevel = inspectLevel * (0.48 + 0.34 * boltFlicker) + crossingPulse * 0.72;
  vec2 boltShift = uView.xy * vec2(0.045, 0.032);
  vec2 boltA = vec2(0.055, 0.37) + boltShift;
  vec2 boltB = vec2(0.37, 0.56) + boltShift;
  vec2 boltC = vec2(0.67, 0.43) - boltShift;
  vec2 boltD = vec2(0.94, 0.65) - boltShift;
  vec2 boltE = vec2(0.31, 0.82) + boltShift * 0.5;
  vec2 boltF = vec2(0.60, 0.66) + boltShift * 0.5;
  float boltGlow = cartoonBolt(bu, boltA, boltB, 0.018)
    + cartoonBolt(bu, boltC, boltD, 0.016)
    + cartoonBolt(bu, boltE, boltF, 0.014);
  float boltCore = cartoonBolt(bu, boltA, boltB, 0.0052)
    + cartoonBolt(bu, boltC, boltD, 0.0048)
    + cartoonBolt(bu, boltE, boltF, 0.0044);
  float sparks = electricSpark(bu, vec2(0.23, 0.31) + boltShift, 0.026)
    + electricSpark(bu, vec2(0.75, 0.73) - boltShift, 0.022)
    + electricSpark(bu, vec2(0.57, 0.27) + boltShift, 0.017);
  vec3 boltTint = mix(
    vec3(0.20, 0.82, 1.0),
    vec3(1.0, 0.72, 0.10),
    0.28 + 0.34 * (0.5 + 0.5 * sin(uTime * 1.9 + uView.y * 13.0))
  );
  bg += boltTint * boltGlow * boltLevel * 0.16;
  bg += mix(vec3(0.68, 0.94, 1.0), vec3(1.0, 0.96, 0.66), 0.32 + 0.25 * boltFlicker)
    * (boltCore + sparks * 0.62) * boltLevel * 0.72;

  float p = clamp(uFxProgress, 0.0, 1.0);
  float pulse = pow(sin(3.14159265 * p), 2.0);
  float travel = mix(1.0 - p, p, step(0.0, uFxDirection));
  float headX = mix(0.13, 0.88, travel);
  float headY = flightY(headX);
  vec2 hp = vec2((bu.x - headX) * 0.68, bu.y - headY);
  float shard = 1.0 - smoothstep(0.012, 0.048, abs(hp.x) * 0.82 + abs(hp.y) * 1.25);
  float path = (1.0 - smoothstep(0.006, 0.022, abs(bu.y - flightY(bu.x))))
    * step(0.08, bu.x) * step(bu.x, 0.93);
  float broken = smoothstep(
    0.28, 0.68, 0.5 + 0.5 * sin(bu.x * 92.0 + floor(bu.x * 12.0) * 0.83)
  );
  float forwardTail = step(bu.x, headX);
  float reverseTail = step(headX, bu.x);
  float trail = path * broken * mix(reverseTail, forwardTail, step(0.0, uFxDirection));
  vec2 wingQ = bu - vec2(headX, headY);
  float wingGate = smoothstep(0.30, 0.46, travel) * (1.0 - smoothstep(0.66, 0.82, travel));
  float wingUpper = (1.0 - smoothstep(
    0.004, 0.014, abs(wingQ.y + 0.48 * wingQ.x - 0.028 * sin(wingQ.x * 72.0))
  )) * step(0.0, wingQ.x) * step(wingQ.x, 0.22) * step(-0.13, wingQ.y) * step(wingQ.y, 0.04);
  float wingLower = (1.0 - smoothstep(
    0.004, 0.014, abs(wingQ.y - 0.38 * wingQ.x + 0.021 * sin(wingQ.x * 66.0))
  )) * step(0.0, wingQ.x) * step(wingQ.x, 0.20) * step(-0.03, wingQ.y) * step(wingQ.y, 0.12);
  float wing = wingGate * (wingUpper + wingLower);
  vec3 fxInk = mix(vec3(0.12, 0.75, 1.0), vec3(1.0, 0.76, 0.10), travel);
  float transitionBand = 0.4 + 0.6 * (4.0 * uElementMix * (1.0 - uElementMix));
  bg += fxInk * (shard * 2.05 + trail * 1.18 + wing * 1.42) * pulse * transitionBand;

  vec2 fxBehindUv = parallax(uv, uScale, uDepth - 0.032) * uSafeScale + uSafeOffset;
  vec2 fxFrontUv = parallax(uv, uScale, uDepth + 0.040) * uSafeScale + uSafeOffset;
  vec4 fxBehind = texture2D(tSubjectFxMask, clamp(fxBehindUv, 0.0, 1.0));
  vec4 fxFront = texture2D(tSubjectFxMask, clamp(fxFrontUv, 0.0, 1.0));
  float electricMask = fxBehind.r;
  float electricFlow = 0.5 + 0.5 * sin((uv.x * 8.2 + uv.y * 4.7) + uTime * 1.7 + uView.x * 11.0);
  float electricBeat = 0.62 + 0.38 * pow(electricFlow, 3.0);
  vec3 electricInk = mix(vec3(0.12, 0.72, 1.0), vec3(1.0, 0.78, 0.12), electricFlow);
  bg += electricInk * electricMask * electricBeat * (0.12 + 0.36 * uElementMix);
  float chargePulse = pow(
    0.5 + 0.5 * sin((uv.x * 0.8 + uv.y) * 21.0 - uTime * 1.3 + uView.x * 15.0),
    5.0
  );
  bg += vec3(0.28, 0.78, 1.0) * electricMask * uElementMix * (0.08 + 0.24 * chargePulse);

  float w = wave(uv);
  vec3 foil = spectrum(w * 0.8 + noise(uv * 5.0) * 0.12);
  vec3 subject = mix(sub.rgb, overlay(sub.rgb, foil), uFoil * 0.28);
  bg = mix(bg, overlay(bg, foil), uFoil * 0.36);
  vec3 col = mix(bg, subject, sub.a);
  float sweep = pow(max(0.0, sin(
    (uv.x * 0.83 + uv.y * 0.35 + uView.x * 1.8 + uView.y * 0.9) * 6.283
  )), 12.0);
  col += foil * sweep * uFoil * 0.28;
  float line = 1.0 - smoothstep(0.06, 0.25, texture2D(tLine, clamp(su, 0.0, 1.0)).r);
  col += vec3(1.0, 0.94, 0.78) * line * inside(su) * sub.a * sweep * uFoil * 0.22;
  col += vec3(0.66, 0.86, 1.0) * star(bu) * uFoil * 0.65 * (1.0 - sub.a * 0.7);
  float frontOutside = 1.0 - smoothstep(0.12, 0.72, fxFront.a);
  float fragmentFlow = 0.52 + 0.48 * sin(uTime * 1.35 + fxFrontUv.x * 31.0 + fxFrontUv.y * 17.0);
  vec3 fragmentInk = mix(vec3(0.10, 0.70, 1.0), vec3(1.0, 0.45, 0.05), uElementMix);
  col += electricInk * fxFront.r * frontOutside * (0.14 + 0.34 * electricBeat);
  col += fragmentInk * fxFront.b * frontOutside * (0.18 + 0.38 * fragmentFlow)
    * (uElementMix * 0.82 + 0.18);

  vec4 text = texture2D(tText, uv);
  col = mix(col, text.rgb, text.a);
  gl_FragColor = vec4(pow(max(col, vec3(0.0)), vec3(2.2)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

const edgeFragment = sharedShader + `
void main() {
  vec3 col = mix(vec3(0.55, 0.34, 0.10), spectrum(wave(vUv)), 0.65 + uFoil * 0.2);
  gl_FragColor = vec4(col * 0.8 + 0.14, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

const backFragment = sharedShader + `
uniform sampler2D tBack;
void main() {
  vec4 art = texture2D(tBack, vUv);
  vec2 p = vUv - 0.5;
  float filigree = 0.5 + 0.5 * sin(length(p * vec2(1.0, 1.5)) * 100.0 + noise(p * 15.0) * 4.0);
  vec3 col = mix(vec3(0.025, 0.042, 0.064), vec3(0.085, 0.092, 0.11), filigree * 0.35);
  float border = step(0.465, max(abs(p.x), abs(p.y)));
  col = mix(col, spectrum(wave(vUv)) * 0.55, border);
  col += spectrum(wave(vUv)) * uFoil * 0.08;
  col = mix(col, art.rgb, art.a);
  gl_FragColor = vec4(pow(max(col, vec3(0.0)), vec3(2.2)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

const instances = new Map();
const textureLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();
const inverseRoot = new THREE.Matrix4();
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function smooth01(start, end, value) {
  const t = THREE.MathUtils.clamp((value - start) / (end - start), 0, 1);
  return t * t * (3 - 2 * t);
}

function loadTexture(path, renderer) {
  return textureLoader.loadAsync(path).then((texture) => {
    texture.colorSpace = THREE.NoColorSpace;
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
    return texture;
  });
}

function makeBackTexture(kind) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1536;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "#c2a368";
  context.lineWidth = 2;
  context.strokeRect(74, 74, 876, 1388);
  context.strokeRect(87, 87, 850, 1362);
  context.save();
  context.translate(512, 650);
  context.rotate(Math.PI / 4);
  context.strokeRect(-210, -210, 420, 420);
  context.strokeRect(-196, -196, 392, 392);
  context.restore();
  context.textAlign = "center";
  context.fillStyle = "#dbc18b";
  context.font = "166px KaiTi, STKaiti, serif";
  context.fillText(kind === "electric" ? "电" : "幻", 512, 709);
  context.font = "31px KaiTi, STKaiti, serif";
  context.fillText(kind === "electric" ? "常规宠物卡" : "赛季通行证 · 限定典藏", 512, 1050);
  context.font = "20px Georgia";
  context.fillStyle = "#a09a8f";
  context.fillText("HOLOGRAPHIC ATELIER", 512, 1114);
  context.font = "20px Georgia";
  context.fillText(kind === "electric" ? "002" : "001 / 001", 512, 1310);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

function resizeInstance(instance) {
  const width = instance.host.clientWidth;
  const height = instance.host.clientHeight;
  if (!width || !height) return;
  const aspect = width / height;
  const halfHeight = 5.65;
  instance.camera.left = -halfHeight * aspect;
  instance.camera.right = halfHeight * aspect;
  instance.camera.top = halfHeight;
  instance.camera.bottom = -halfHeight;
  instance.camera.updateProjectionMatrix();
  instance.renderer.setSize(width, height, false);
}

function applyPayload(instance, payload) {
  const tuning = payload.tuning || {};
  const yaw = Number(payload.yaw) || 0;
  const pitch = Number(payload.pitch) || 0;
  const now = Number(payload.timestamp) > 0 ? Number(payload.timestamp) * 0.001 : performance.now() * 0.001;
  const yawRadians = THREE.MathUtils.degToRad(yaw);
  const pitchRadians = THREE.MathUtils.degToRad(pitch);

  instance.root.rotation.set(pitchRadians, yawRadians, 0);
  instance.uniforms.uScale.value = Number(tuning.subjectScale ?? 1);
  instance.uniforms.uDepth.value = Number(tuning.subjectDepth ?? 0.38);
  instance.uniforms.uBgDepth.value = Number(tuning.backgroundDepth ?? -0.22);
  instance.uniforms.uFoil.value = Number(tuning.foilIntensity ?? 0.48);
  instance.uniforms.uSafeOffset.value.set(
    -(Number(tuning.subjectX) || 0) * 0.01,
    (Number(tuning.subjectY) || 0) * 0.01
  );

  const elementMix = smooth01(0.015, 0.25, yawRadians);
  const crossedForward = instance.previousElementMix < 0.5 && elementMix >= 0.5;
  const crossedBackward = instance.previousElementMix > 0.5 && elementMix <= 0.5;
  if (crossedForward || crossedBackward) {
    instance.fxStart = now;
    instance.fxDirection = crossedForward ? 1 : -1;
  }
  instance.previousElementMix = elementMix;
  instance.uniforms.uElementMix.value = elementMix;
  instance.uniforms.uFxDirection.value = instance.fxDirection;
  const progress = (now - instance.fxStart) / 1.05;
  instance.uniforms.uFxProgress.value = reducedMotion
    ? (elementMix > 0.34 && elementMix < 0.66 ? 0.5 : -1)
    : (progress >= 0 && progress <= 1 ? progress : -1);
  instance.uniforms.uTime.value = reducedMotion ? 0 : now;
  instance.lastPayload = payload;
}

function renderInstance(instance) {
  instance.root.updateMatrixWorld(true);
  inverseRoot.copy(instance.root.matrixWorld).invert();
  instance.uniforms.uView.value
    .copy(instance.camera.position)
    .applyMatrix4(inverseRoot)
    .normalize();
  instance.renderer.render(instance.scene, instance.camera);
}

async function createInstance(id, definition) {
  const host = document.querySelector('[data-card-id="' + id + '"] .parallax-card');
  if (!host) throw new Error("找不到卡片展示容器：" + id);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x111518, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.domElement.className = "card-runtime-canvas";
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.append(renderer.domElement);

    const textures = await Promise.all([
      loadTexture(definition.subject, renderer),
      loadTexture(definition.background, renderer),
      loadTexture(definition.backgroundInsect, renderer),
      loadTexture(definition.subjectFxMask, renderer),
      loadTexture(definition.text, renderer),
      loadTexture(definition.lineart, renderer),
    ]);
    const gltf = await gltfLoader.loadAsync(definition.model);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-5, 5, 5.65, -5.65, 0.1, 100);
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);
    const root = new THREE.Group();
    root.add(gltf.scene);
    scene.add(root);

    const uniforms = {
      tSubject: { value: textures[0] },
      tBackground: { value: textures[1] },
      tBackgroundInsect: { value: textures[2] },
      tSubjectFxMask: { value: textures[3] },
      tText: { value: textures[4] },
      tLine: { value: textures[5] },
      tBack: { value: makeBackTexture(definition.kind) },
      uTime: { value: 0 },
      uView: { value: new THREE.Vector3(0, 0, 1) },
      uFoil: { value: 0.48 },
      uScale: { value: 1 },
      uDepth: { value: definition.kind === "ember" ? 0.34 : 0.38 },
      uBgDepth: { value: definition.kind === "ember" ? -0.18 : -0.22 },
      uSafeScale: { value: 1 },
      uSafeOffset: { value: new THREE.Vector2(0, 0) },
      uElementMix: { value: 0 },
      uFxProgress: { value: -1 },
      uFxDirection: { value: 1 },
    };

    const frontMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader: definition.kind === "ember" ? emberFragment : electricFragment,
      side: THREE.FrontSide,
    });
    const edgeMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader: edgeFragment,
      side: THREE.DoubleSide,
    });
    const backMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader: backFragment,
      side: THREE.DoubleSide,
    });
    const goldMaterial = new THREE.MeshBasicMaterial({ color: 0xbfa26b });
    let frontMesh = null;

    gltf.scene.traverse((object) => {
      if (!object.isMesh) return;
      const sourceMaterial = Array.isArray(object.material) ? object.material[0] : object.material;
      const role = sourceMaterial?.name;
      if (role === "web_front") {
        object.material = frontMaterial;
        frontMesh = object;
      } else if (role === "web_back") {
        object.material = backMaterial;
      } else if (role === "web_gold") {
        object.material = goldMaterial;
      } else if (role === "web_text") {
        object.visible = false;
      } else {
        object.material = edgeMaterial;
      }
    });
    if (!frontMesh) throw new Error("GLB 中缺少 web_front 材质：" + id);

    const instance = {
      id,
      host,
      renderer,
      scene,
      camera,
      root,
      uniforms,
      previousElementMix: 0,
      fxStart: -10,
      fxDirection: 1,
    };
    instances.set(id, instance);
    host.classList.add("is-webgl");
    resizeInstance(instance);
    const observer = new ResizeObserver(() => resizeInstance(instance));
    observer.observe(host);
    return instance;
  } catch (error) {
    renderer?.domElement.remove();
    host.classList.remove("is-webgl");
    throw error;
  }
}

const runtime = {
  ready: false,
  instances,
  update(id, payload) {
    const instance = instances.get(id);
    if (!instance) return false;
    applyPayload(instance, payload);
    return true;
  },
};
window.__cardRuntime = runtime;

async function initialize() {
  const results = await Promise.allSettled(
    Object.entries(sourceCards).map(([id, definition]) => createInstance(id, definition))
  );
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const id = Object.keys(sourceCards)[index];
      console.error("[card-runtime] " + id + " failed:", result.reason);
    }
  });
  runtime.ready = true;
  const render = () => {
    instances.forEach(renderInstance);
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
}

initialize().catch((error) => {
  console.error("[card-runtime] initialization failed:", error);
  runtime.error = error.message;
});
