import { clamp, DURATION, quinticSmooth } from './living-motion.mjs';

const KEYFRAMES = [
  { time: 0, position: [.90, 1.48, 8.45], target: [-.30, -.22, .15] },
  { time: 2, position: [.50, 1.00, 5.90], target: [.10, .05, .58] },
  { time: 7, position: [-.30, .72, 5.65], target: [.08, .03, .60] },
  { time: 11, position: [.70, 1.35, 7.35], target: [-.35, -.35, .35] },
  { time: 14, position: [-.15, 1.05, 8.50], target: [-.60, -.50, .40] },
];
const PORTRAIT_KEYFRAMES = [
  ...KEYFRAMES.slice(0, 3).map(({ time, position, target }) => ({
    time,
    position: [position[0], position[1], position[2] + 1.5],
    target: [...target],
  })),
  { time: 11, position: [-1.00, 1.18, 11.85], target: [-1.35, -.50, .35] },
  { time: 14, position: [-1.35, 1.12, 12.10], target: [-1.45, -.56, .40] },
];

const STAGES = [
  { until: 2, stage: 'observe', label: '观察工作区' },
  { until: 7, stage: 'pairing', label: '核苷酸对位·向3′端接入' },
  { until: 11, stage: 'elongation', label: '连续延长·聚合酶推进' },
  { until: DURATION, stage: 'release', label: '新生RNA从出口伸出' },
];

function stageAt(time) {
  return STAGES.find(({ until }) => time < until) ?? STAGES.at(-1);
}

function interpolatedPose(time, portrait) {
  const keyframes = portrait ? PORTRAIT_KEYFRAMES : KEYFRAMES;
  let segment = 0;
  while (segment < keyframes.length - 2 && time > keyframes[segment + 1].time) segment++;
  const from = keyframes[segment], to = keyframes[segment + 1];
  const amount = time === from.time ? 0 : time === to.time ? 1 : quinticSmooth((time - from.time) / (to.time - from.time));
  const position = amount === 0 ? [...from.position] : amount === 1 ? [...to.position]
    : from.position.map((value, axis) => value + (to.position[axis] - value) * amount);
  const target = amount === 0 ? [...from.target] : amount === 1 ? [...to.target]
    : from.target.map((value, axis) => value + (to.target[axis] - value) * amount);

  return { position, target };
}

export function directionAt(time, { portrait = false, reducedMotion = false } = {}) {
  const presentationTime = clamp(time, 0, DURATION);
  const { stage, label } = stageAt(presentationTime);
  const pose = reducedMotion
    ? { position: [.6, 1.42, portrait ? 9.2 : 7.6], target: [-.3, -.22, .15] }
    : interpolatedPose(presentationTime, portrait);
  return { ...pose, stage, label };
}
