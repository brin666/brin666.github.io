import { createPilotScene } from './scene.js';
import { createMaterialStudyRig, STUDIES } from './material-studies.js';
import { poseAt, DURATION, PHASES } from './motion.mjs';
import { TEMPLATE_DNA, RNA } from '../biology.mjs';
import { loadBlenderModels } from './blender-assets.js';

const $ = id => document.getElementById(id);
const FACTORS = {
  baseline: ['保留原粗糙度纹理、sheen 和清漆参数。', '保留原半球光及主光、补光强度。', '用它判断新方案是否真正改善沟槽与层次。'],
  A: ['去除额外亮边，粗糙度不再被纹理压低。', '降低填充光，让内侧沟槽保留阴影；柔化曲面上的明暗过渡。', '只保留低幅度、平滑的表面变化，避免砂纸感。'],
  B: ['少量透射结合克制的边缘透光示意，不对整壳做透明淡化。', '冷暖主补光区分外表面、暗内层与后方 DNA。', '聚合酶保持完整轮廓，避免透明层错序或过亮发白。'],
  C: ['弱化镜面反光，以低反光底色为主。', '柔和明暗分区强调体块；入口附近用克制暖色提示功能。', 'RNA 与两条 DNA 保持各自颜色和字母，方便课堂讲解。'],
};
const STRUCTURE_NOTES = {
  exhibit: '分层通道 · 连续的糖磷酸骨架 · 核苷酸先靠近、再对准接合。柔韧运动与模型分区为教学表现。',
  blender: '精修曲面与圆润的碱基边缘 · 保留环状结构、大小沟与配对位置。模型为教学示意，未使用实测原子坐标。',
  refined: '环状碱基 · 连续大小沟 · 较紧密堆叠 · 并列氢键示意线。形状、比例与展开角度经过教学简化。',
  legacy: '上一版的叶片式碱基、对称双螺旋与单列连接短线，用于同材质比较。',
};
let scene, blenderAssets, exhibitAssets, time = 7.3, playing = false, stamp = 0, frame = 0, labels = true, appearance = 'B', structure = 'refined';
let frames = [], cpu = [];
let pageClosed = false;
const disposeAssets = assets => { if (assets) Object.values(assets.geometries).forEach(geometry => geometry.dispose()); };
window.addEventListener('pagehide', () => { pageClosed = true; pause(); cancelAnimationFrame(frame); scene?.dispose(); }, { once: true });
function requestFrame() { if (!frame && !document.hidden) frame = requestAnimationFrame(tick); }
function render() {
  if (!scene) return;
  const start = performance.now();
  const pose = poseAt(time);
  scene.update(pose, { labels, detail: matchMedia('(max-width: 600px)').matches ? 'low' : 'high', reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches });
  scene.render();
  cpu.push(performance.now() - start); if (cpu.length > 2400) cpu.shift();
  $('progress').value = String(time); $('time').textContent = `${time.toFixed(2)} / 14.00 s`;
  document.body.dataset.time = String(time); document.body.dataset.playing = String(playing);
  const overview = time < .75;
  const note = STRUCTURE_NOTES[structure] + (overview ? ' 当前为结构观察画面：RNA 展示样段已有片段，转录延长尚未开始。' : '');
  if ($('structure-note').textContent !== note) $('structure-note').textContent = note;
  const context = overview ? '闭合 DNA 结构观察 · 转录延长尚未开始' : structure === 'exhibit' ? PHASES[pose.phaseKey][0] : 'RNA 聚合酶 · 局部 DNA · 延伸中的 RNA';
  if ($('view-context').textContent !== context) $('view-context').textContent = context;
  $('motion-stages').hidden = structure !== 'exhibit';
  document.querySelectorAll('[data-phase]').forEach(item => { item.dataset.active = String(item.dataset.phase === pose.phaseKey); });
}
function pause() { playing = false; stamp = 0; $('play').textContent = '▶ 播放'; document.body.dataset.playing = 'false'; }
function tick(now) {
  frame = 0;
  if (document.hidden) return;
  if (playing && stamp) {
    const delta = now - stamp; frames.push(delta); if (frames.length > 2400) frames.shift();
    time = Math.min(DURATION, time + Math.min(delta / 1000, .10));
  }
  stamp = playing ? now : 0;
  render();
  if (playing && time >= DURATION) pause();
  if (playing) requestFrame();
}
function play() { if (time >= DURATION) time = 0; playing = true; stamp = 0; $('play').textContent = 'Ⅱ 暂停'; requestFrame(); }
function seek(value) { pause(); time = Math.min(DURATION, Math.max(0, Number(value) || 0)); render(); }
function setAppearance(id) {
  if (!Object.hasOwn(STUDIES, id)) return;
  appearance = id; scene.setAppearance(id);
  document.body.dataset.appearance = id;
  document.querySelectorAll('[data-study]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.study === id)));
  $('view-title').textContent = `${id === 'baseline' ? '原版' : id} / ${STUDIES[id].title}`;
  $('study-title').textContent = STUDIES[id].title; $('study-description').textContent = STUDIES[id].subtitle;
  $('study-factors').replaceChildren(...FACTORS[id].map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  render();
}
function setStructure(id) {
  if (!['legacy', 'refined', 'blender', 'exhibit'].includes(id) || !scene?.setStructureMode(id)) return;
  structure = id;
  document.body.dataset.structure = id;
  document.querySelectorAll('[data-structure]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.structure === id)));
  render();
}
function focusDna() { seek(0); scene.focusDna(); render(); }
const assets = await Promise.allSettled([loadBlenderModels(), loadBlenderModels('exhibit')]);
if (pageClosed) {
  for (const result of assets) if (result.status === 'fulfilled') disposeAssets(result.value);
} else {
const failures = [];
for (const [index, variant] of ['blender', 'exhibit'].entries()) {
  const result = assets[index];
  document.body.dataset[variant === 'blender' ? 'asset' : 'exhibitAsset'] = result.status === 'fulfilled' ? 'ready' : 'failed';
  if (result.status === 'fulfilled') {
    if (variant === 'blender') blenderAssets = result.value; else exhibitAssets = result.value;
  } else {
    document.querySelector(`[data-structure="${variant}"]`).disabled = true;
    failures.push(`${variant === 'blender' ? '上一版精修' : '展品新版'}：${result.reason.message}`);
  }
}
if (failures.length) { $('asset-status').hidden = false; $('asset-status').textContent = `部分模型暂时无法加载（${failures.join('；')}）。仍可查看其他版本。`; }
try {
  scene = createPilotScene($('scene'), {
    appearanceFactory: createMaterialStudyRig, onInvalidate: requestFrame, blenderAssets, exhibitAssets,
    onSelect: item => {
      $('selection').hidden = false;
      $('selection-text').textContent = item.type === 'polymerase' ? 'RNA 聚合酶 · 观察开口与曲面沟槽' : item.type === 'template' ? `模板链第 ${item.index + 1} 位 ${TEMPLATE_DNA[item.index]} · 对应 RNA ${RNA[item.index]}` : item.type === 'rna' ? `RNA 第 ${item.index + 1} 位 ${RNA[item.index]} · 在 3′ 端接入` : `编码链第 ${item.index + 1} 位 ${item.base}`;
    },
  });
  $('scene').querySelector('.loading').remove();
  document.body.dataset.renderer = 'webgl';
  const url = new URL(location.href);
  if (url.searchParams.has('t')) time = Math.min(DURATION, Math.max(0, Number(url.searchParams.get('t')) || 0));
  const requested = url.searchParams.get('structure') || 'exhibit';
  const available = ['legacy', 'refined', ...(blenderAssets ? ['blender'] : []), ...(exhibitAssets ? ['exhibit'] : [])];
  setStructure(available.includes(requested) ? requested : blenderAssets ? 'blender' : 'refined');
  setAppearance(Object.hasOwn(STUDIES, url.searchParams.get('study')) ? url.searchParams.get('study') : 'B');
} catch (error) {
  if (scene) { scene.dispose(); scene = null; }
  else { disposeAssets(blenderAssets); disposeAssets(exhibitAssets); }
  const message = document.createElement('p'); message.className = 'loading';
  message.textContent = `当前浏览器无法创建三维样品：${error.message}`;
  $('scene').replaceChildren(message);
  document.body.dataset.renderer = 'failed';
}
$('play').addEventListener('click', () => { if (playing) pause(); else play(); });
$('progress').addEventListener('input', event => seek(event.target.value));
$('sample').addEventListener('click', () => { seek(7.3); scene?.resetView(); render(); });
$('reset-view').addEventListener('click', () => { scene?.resetView(); render(); });
$('dna-view').addEventListener('click', focusDna);
$('labels').addEventListener('change', event => { labels = event.target.checked; render(); });
$('selection-close').addEventListener('click', () => { $('selection').hidden = true; });
document.querySelectorAll('[data-study]').forEach(button => button.addEventListener('click', () => setAppearance(button.dataset.study)));
document.querySelectorAll('[data-structure]').forEach(button => button.addEventListener('click', () => setStructure(button.dataset.structure)));
document.addEventListener('visibilitychange', () => { if (document.hidden) { pause(); cancelAnimationFrame(frame); frame = 0; } else requestFrame(); });
window.__MATERIAL_STUDY__ = {
  seek, play, pause, setAppearance, setStructure, focusDna,
  exportAuthoringSources: () => scene.getAuthoringSources(),
  getState: () => ({ time, playing, appearance, structure: scene?.getStructureDebug(), geometry: scene?.getDebugGeometry(), metrics: scene?.getMetrics(), material: scene?.getAppearance() }),
  resetView: () => { scene.resetView(); render(); },
  probe: factor => { pause(); scene.probeAppearance(factor); render(); },
  clearPerformance: () => { frames = []; cpu = []; },
  getPerformance: () => ({ intervals: [...frames], cpu: [...cpu] }),
};
}
