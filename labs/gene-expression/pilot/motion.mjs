import { RNA } from '../biology.mjs';

export const DURATION = 14;
export const SEED_COUNT = 6;
export const SAMPLE_COUNT = 5;
export const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
export const smooth = (v) => { const t = clamp(v); return t * t * t * (t * (t * 6 - 15) + 10); };
const window = (t, start, end) => smooth((t - start) / (end - start));

// Presentation poses are a pure function of seconds. A committed nucleotide
// remains discrete; the incoming molecule and the chain tip move continuously.
export function poseAt(seconds) {
  const time = clamp(Number(seconds) || 0, 0, DURATION);
  const cycle = clamp((time - 2) / 2, 0, SAMPLE_COUNT);
  const round = Math.min(SAMPLE_COUNT - 1, Math.floor(cycle));
  const phase = cycle === SAMPLE_COUNT ? 1 : cycle - round;
  const targetIndex = SEED_COUNT + round;
  const bond = window(phase, .56, .70);
  const committed = phase >= .70 ? 1 : 0;
  const rnaCount = SEED_COUNT + round + committed;
  let phaseKey = 'overview';
  if (time >= .85 && time < 2) phaseKey = 'open';
  if (time >= 2 && time < 12) {
    phaseKey = phase < .16 ? 'read' : phase < .56 ? 'arrive' : phase < .70 ? 'bond' : 'advance';
  }
  if (time >= 12) phaseKey = 'complete';
  return {
    time, duration: DURATION, targetIndex, phase,
    centerIndex: targetIndex + window(phase, .72, 1),
    rnaCount, growth: SEED_COUNT + round + bond,
    addedCount: rnaCount - SEED_COUNT,
    opening: window(time, .75, 1.9),
    cameraBlend: window(time, .35, 2.15),
    finalBlend: window(time, 12, 14),
    phaseKey,
    incoming: {
      visible: time >= 2 && time < 12 && phase >= .08 && phase < .70,
      base: RNA[targetIndex], index: targetIndex,
      progress: window(phase, .12, .56), bond,
    },
  };
}

export const PHASES = {
  overview: ['一条 DNA，两条反向的链', '先看完整双螺旋，再靠近正在延长 RNA 的局部。'],
  open: ['只在读取的位置打开', '转录泡局部展开；两侧 DNA 保留螺旋结构。'],
  read: ['读取模板链', '聚合酶沿模板链的 3′ → 5′ 方向读取下一个碱基。'],
  arrive: ['一个 RNA 核苷酸靠近', '互补的核苷酸进入局部配对位置。'],
  bond: ['连接到 RNA 的 3′ 端', '新核苷酸接入已有 RNA，单链继续沿 5′ → 3′ 方向延长。'],
  advance: ['前移，再读取下一个', '聚合酶连续向前移动；转录泡的前方打开、后方重新配对。'],
  complete: ['新增 5 个核苷酸：A U G G C', '这是转录延长的局部样段。DNA 仍然保留，RNA 已从 6 nt 延长到 11 nt。'],
};
