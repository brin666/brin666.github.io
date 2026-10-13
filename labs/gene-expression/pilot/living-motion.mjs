import { derive } from '../state.mjs';

// The sample slows four existing textbook timeline events. It does not invent
// a new reaction state machine or change the original commit at phase 0.70.
export const DURATION = 14;
export const CYCLE_SECONDS = 3.5;
export const FIRST_INDEX = 8;
export const SPACING = .40;
export const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, Number(v) || 0));
export const mix = (a, b, t) => a + (b - a) * t;
export const smooth = v => { const t = clamp(v); return t * t * (3 - 2 * t); };
// Quintic smootherstep has zero velocity and acceleration at both ends.
export const quinticSmooth = v => { const t = clamp(v); return t * t * t * (t * (t * 6 - 15) + 10); };

export const PRESENTATION_MODES = Object.freeze(['guided', 'fixed']);

function requireMode(mode) {
  if (!PRESENTATION_MODES.includes(mode)) throw new RangeError(`Unknown presentation mode: ${mode}`);
  return mode;
}

function inverseQuinticSmooth(value) {
  const target = clamp(value);
  let low = 0, high = 1;
  // Bisection keeps the inverse deterministic and well behaved near flat ends.
  for (let i = 0; i < 52; i++) {
    const middle = (low + high) / 2;
    if (quinticSmooth(middle) < target) low = middle; else high = middle;
  }
  return (low + high) / 2;
}

export function reactionTimeAt(time, mode = 'fixed') {
  requireMode(mode);
  const presentationTime = clamp(time, 0, DURATION);
  if (mode === 'fixed') return presentationTime;
  if (presentationTime <= 2) return 0;
  if (presentationTime < 7) return CYCLE_SECONDS * quinticSmooth((presentationTime - 2) / 5);
  if (presentationTime < 11) return CYCLE_SECONDS + 3 * CYCLE_SECONDS * quinticSmooth((presentationTime - 7) / 4);
  return DURATION;
}

export function presentationTimeForReaction(value, mode = 'fixed') {
  requireMode(mode);
  const reactionTime = clamp(value, 0, DURATION);
  if (mode === 'fixed') return reactionTime;
  if (reactionTime === 0) return 0;
  if (reactionTime <= CYCLE_SECONDS) {
    return 2 + 5 * inverseQuinticSmooth(reactionTime / CYCLE_SECONDS);
  }
  if (reactionTime < DURATION) {
    return 7 + 4 * inverseQuinticSmooth((reactionTime - CYCLE_SECONDS) / (3 * CYCLE_SECONDS));
  }
  return 11;
}

// A one-time arc-length table through the open RNA outlet. Growth consumes
// distance along this path, rather than stretching the chain to a new Y value.
const RNA_CURVES = [
  [[.20,.40,.64],[-.10,.40,.64],[-.27,.30,.64],[-.40,.18,.64]],
  [[-.40,.18,.64],[-.60,-.10,.64],[-.59,-.43,.65],[-.75,-.65,.65]],
  [[-.75,-.65,.65],[-.90,-.99,.68],[-1.04,-1.27,.80],[-1.35,-1.30,.84]],
  [[-1.35,-1.30,.84],[-2.50,-1.60,1.02],[-4.00,-1.35,.75],[-7.00,-1.70,.78]],
];
const RNA_PATH = [];
for (let segment = 0; segment < RNA_CURVES.length; segment++) {
  const [a,b,c,d] = RNA_CURVES[segment];
  for (let step = segment ? 1 : 0; step <= 96; step++) {
    const t = step / 96, u = 1 - t;
    const point = a.map((v, axis) => u ** 3 * v + 3 * u * u * t * b[axis] + 3 * u * t * t * c[axis] + t ** 3 * d[axis]);
    const previous = RNA_PATH.at(-1);
    const distance = previous ? previous.distance + Math.hypot(...point.map((v, axis) => v - previous.point[axis])) : 0;
    RNA_PATH.push({ point, distance });
  }
}
function sampleRnaDistance(distance, out) {
  let lower = 0, upper = RNA_PATH.length - 1;
  distance = clamp(distance, 0, RNA_PATH[upper].distance);
  while (upper - lower > 1) {
    const middle = (lower + upper) >> 1;
    if (RNA_PATH[middle].distance < distance) lower = middle; else upper = middle;
  }
  const a = RNA_PATH[lower], b = RNA_PATH[upper];
  const t = (distance - a.distance) / Math.max(1e-8, b.distance - a.distance);
  out.set(...a.point.map((v, axis) => mix(v, b.point[axis], t)));
  return out;
}

export function sampleFrame(input, mode = 'fixed') {
  requireMode(mode);
  const time = clamp(input, 0, DURATION);
  const reactionTime = reactionTimeAt(time, mode);
  const snapshot = derive(4 + FIRST_INDEX + reactionTime / CYCLE_SECONDS);
  const { index, phase } = snapshot.transcription;
  const advance = index + smooth((phase - .72) / .28);
  const joining = reactionTime < DURATION ? smooth((phase - .58) / .12) : 0;
  return {
    time, reactionTime, snapshot, index, phase, advance,
    completed: snapshot.rnaCount,
    extent: reactionTime === DURATION ? snapshot.rnaCount - 1 : index - 1 + joining,
    incomingVisible: reactionTime < DURATION && phase < .7,
    // A compact, event-driven response, with zero value/velocity at boundaries.
    work: Math.sin(Math.PI * smooth((phase - .32) / .56)) ** 2,
  };
}

export function dnaPoint(index, frame, strand, secondary, out) {
  const relative = index - frame.advance;
  const x = .20 + relative * SPACING;
  const theta = (index - FIRST_INDEX) * Math.PI / 5.15 + .62 + (strand ? Math.PI - .42 : 0);
  const window = Math.exp(-((relative / 2.35) ** 4));
  const y = mix(Math.cos(theta) * .61, strand ? -.35 : .85, window);
  const z = mix(Math.sin(theta) * .61, strand ? .50 : .20, window);
  // Small localized strain around the working window, not whole-scene wobble.
  const strain = secondary ? .038 * frame.work * Math.exp(-(((relative - .4) / 2.1) ** 2)) : 0;
  out.set(x, y + (strand ? -strain : strain), z + strain * .35);
  return out;
}

export function rnaPoint(index, frame, secondary, out) {
  const age = Math.max(0, frame.advance - index);
  const delay = frame.time - Math.max(0, age - 2) * .26;
  const tail = smooth((age - 4.5) / 5);
  sampleRnaDistance(age * SPACING, out);
  if (secondary) {
    out.y += tail * (.082 * Math.sin(delay * .95 - age * .70) + .035 * Math.sin(delay * .53 + age * .43));
    out.z += tail * .070 * Math.sin(delay * .73 - age * .55 + .6);
  }
  return out;
}

export function standbyPoint(order, time, secondary, out) {
  const x = [2.95, 3.65, 2.15, 4.00][order];
  const y = [-.95, .30, 1.68, -1.72][order];
  const z = [1.32, -.36, .12, .75][order];
  const t = secondary ? time : 0;
  out.set(x + .13 * Math.sin(t * .49 + order * 1.7),
    y + .12 * Math.sin(t * .67 + order * 2.1),
    z + .14 * Math.sin(t * .43 + order * 1.3));
  return out;
}

export function incomingPoint(frame, secondary, out, scratch) {
  const order = frame.index - FIRST_INDEX;
  standbyPoint(order, frame.time, secondary, scratch);
  const target = rnaPoint(frame.index, frame, secondary, out);
  const x = target.x, y = target.y, z = target.z;
  const t = smooth(frame.phase / .58), u = 1 - t;
  // An asymmetric approach with enough time to rotate before short pairing dwell.
  out.set(u ** 3 * scratch.x + 3 * u * u * t * 2.30 + 3 * u * t * t * .86 + t ** 3 * x,
    u ** 3 * scratch.y + 3 * u * u * t * (-.28) + 3 * u * t * t * .90 + t ** 3 * y,
    u ** 3 * scratch.z + 3 * u * u * t * 1.65 + 3 * u * t * t * 1.18 + t ** 3 * z);
  return out;
}
