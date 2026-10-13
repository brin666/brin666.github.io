import { CODING_DNA, TEMPLATE_DNA, RNA } from '../biology.mjs';
import { DURATION, SEED_COUNT, SAMPLE_COUNT, PHASES, poseAt, clamp } from './motion.mjs';
import { createPilotScene } from './scene.js';
import { createMaterialStudyRig } from './material-studies.js';
import { loadBlenderModels } from './blender-assets.js';

const $ = (id) => document.getElementById(id);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = { time: 0, playing: false, labels: true, selected: null };
const cells = [];
let frame = 0, scene, playStart = 0, timeStart = 0, signature = '';
const frameDurations = [];
let lastFrame = 0;
let pageClosed = false;

function buildSequence() {
  const grid = document.createElement('div'); grid.className = 'sequence-grid';
  for (const [type, name, sequence, left, right] of [
    ['coding', 'DNA 编码链', CODING_DNA, '5′', '3′'],
    ['template', 'DNA 模板链', TEMPLATE_DNA, '3′', '5′'],
    ['rna', 'RNA', RNA, '5′', '3′'],
  ]) {
    const label = document.createElement('span'); label.className = `sequence-name ${type}`; label.textContent = name; grid.append(label);
    const start = document.createElement('span'); start.className = 'end-label'; start.textContent = left; grid.append(start);
    [...sequence].forEach((base, index) => {
      const cell = document.createElement('button'); cell.className = 'base-cell'; cell.textContent = base; cell.dataset.base = base; cell.dataset.type = type; cell.dataset.index = index;
      cell.setAttribute('aria-label', `${name}，第 ${index + 1} 位，${base}`);
      cell.addEventListener('click', () => inspect({ type, base, index }));
      cells.push({ cell, type, index, base }); grid.append(cell);
    });
    const end = document.createElement('span'); end.className = 'end-label'; end.textContent = right; grid.append(end);
  }
  $('sequence').append(grid);
}

function inspect(selection) {
  pause(); state.selected = selection;
  $('inspect').hidden = false;
  updateInspector(poseAt(state.time));
  signature = ''; requestFrame();
}

function updateInspector(p) {
  const selection = state.selected;
  if (!selection || $('inspect').hidden) return;
  if (selection.type === 'polymerase') {
    $('inspect-title').textContent = 'RNA 聚合酶';
    $('inspect-text').textContent = '沿 DNA 模板链的 3′ → 5′ 方向移动，把互补核苷酸连接到 RNA 的 3′ 端。外形经过教学简化。';
  } else {
    const { type, index } = selection;
    const name = { coding: '编码链', template: '模板链', rna: 'RNA' }[type];
    $('inspect-title').textContent = `${name} · 第 ${index + 1} 位 · ${selection.base}`;
    const relation = `DNA 编码链 ${CODING_DNA[index]} / 模板链 ${TEMPLATE_DNA[index]} / RNA ${RNA[index]}`;
    $('inspect-text').textContent = type === 'rna' && index >= p.rnaCount ? `${relation}。这一位核苷酸在当前时间尚未接入 RNA 链。` : `${relation}。DNA 的两条链反向平行，RNA 与模板链互补。`;
  }
}

function updateUi(pose) {
  const rounded = Math.round(pose.time * 10) / 10;
  $('time').innerHTML = `${rounded.toFixed(1).padStart(4, '0')} <span>/ 14.0 s</span>`;
  $('progress').value = String(pose.time);
  $('progress').style.setProperty('--progress', `${pose.time / DURATION * 100}%`);
  $('progress').setAttribute('aria-valuetext', `${pose.time.toFixed(1)} 秒，${PHASES[pose.phaseKey][0]}`);
  document.body.dataset.time = pose.time.toFixed(4);
  document.body.dataset.phase = pose.phaseKey;
  document.body.dataset.rnaCount = pose.rnaCount;
  const sig = [pose.phaseKey, pose.targetIndex, pose.rnaCount, pose.incoming.visible, state.selected?.type, state.selected?.index].join('|');
  if (signature === sig) return;
  signature = sig;
  updateInspector(pose);
  const [title, description] = PHASES[pose.phaseKey];
  $('phase-title').textContent = title; $('phase-description').textContent = description;
  $('count').textContent = pose.rnaCount; $('added').textContent = `本段 +${pose.addedCount}`;
  const i = pose.targetIndex;
  $('pair-detail').textContent = `${pose.phaseKey === 'complete' ? '最后完成的配对' : '当前局部'}：第 ${i + 1} 位 · DNA 模板 ${TEMPLATE_DNA[i]} ↔ RNA ${RNA[i]}，编码链对应 ${CODING_DNA[i]}。`;
  for (const { cell, type, index } of cells) {
    cell.className = 'base-cell';
    if (type === 'rna') {
      if (index >= pose.rnaCount) cell.classList.add('pending');
      else cell.classList.add(index < SEED_COUNT ? 'seed' : 'added');
      if (index === i && pose.incoming.visible) cell.classList.add('incoming');
    }
    if (index === i && (type !== 'rna' || index < pose.rnaCount)) cell.classList.add('active');
    if (state.selected?.type === type && state.selected?.index === index) cell.classList.add('selected');
    cell.setAttribute('aria-label', `${{ coding: 'DNA 编码链', template: 'DNA 模板链', rna: 'RNA' }[type]}，第 ${index + 1} 位，${cell.textContent}${type === 'rna' && index >= pose.rnaCount ? '，尚未生成' : ''}`);
  }
}

function draw(now) {
  frame = 0;
  if (state.playing) {
    state.time = clamp(timeStart + (now - playStart) / 1000, 0, DURATION);
    if (lastFrame && frameDurations.length < 1800) frameDurations.push(now - lastFrame);
    lastFrame = now;
  }
  const pose = poseAt(state.time);
  scene?.update(pose, { labels: state.labels, reducedMotion, detail: innerWidth < 600 ? 'low' : 'high' });
  scene?.render(); updateUi(pose);
  if (state.time >= DURATION && state.playing) pause();
  if (state.playing && !document.hidden) requestFrame();
}
function requestFrame() { if (!frame && !document.hidden) frame = requestAnimationFrame(draw); }
function pause() {
  state.playing = false; lastFrame = 0; document.body.dataset.playing = 'false';
  $('play-icon').textContent = '▶'; $('play-label').textContent = state.time >= DURATION ? '再播放' : '播放'; $('play').setAttribute('aria-label', '播放样段');
}
function play() {
  if (state.time >= DURATION) state.time = 0;
  state.playing = true; timeStart = state.time; playStart = performance.now(); lastFrame = 0;
  document.body.dataset.playing = 'true'; $('play-icon').textContent = 'Ⅱ'; $('play-label').textContent = '暂停'; $('play').setAttribute('aria-label', '暂停样段');
  requestFrame();
}
function seek(time) { pause(); state.time = clamp(Number(time) || 0, 0, DURATION); requestFrame(); }

buildSequence();
$('play').addEventListener('click', () => state.playing ? pause() : play());
$('restart').addEventListener('click', () => { state.time = 0; state.selected = null; $('inspect').hidden = true; scene?.resetView(); signature = ''; play(); });
$('progress').addEventListener('input', (event) => seek(event.target.value));
$('labels').addEventListener('click', () => { state.labels = !state.labels; $('labels').setAttribute('aria-pressed', String(state.labels)); requestFrame(); });
$('camera').addEventListener('click', () => { scene?.resetView(); requestFrame(); });
$('inspect-close').addEventListener('click', () => { state.selected = null; $('inspect').hidden = true; signature = ''; requestFrame(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { $('inspect').hidden = true; state.selected = null; signature = ''; requestFrame(); }
  if (event.target.matches('input,button,a')) return;
  if (event.code === 'Space') { event.preventDefault(); state.playing ? pause() : play(); }
  if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') { event.preventDefault(); seek(state.time + (event.code === 'ArrowLeft' ? -.2 : .2)); }
});
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); else requestFrame(); });
addEventListener('pagehide', () => { pageClosed = true; cancelAnimationFrame(frame); scene?.dispose(); }, { once: true });

const classic = new URLSearchParams(location.search).get('visual') === 'classic';
let exhibitAssets;
if (!classic) {
  try { exhibitAssets = await loadBlenderModels('exhibit'); }
  catch (error) {
    const status = document.createElement('p');
    status.className = 'scene-model-status'; status.setAttribute('role', 'status');
    status.textContent = '精修模型暂时无法加载，当前展示结构修正版。';
    $('scene').after(status);
  }
}
if (pageClosed) {
  if (exhibitAssets) Object.values(exhibitAssets.geometries).forEach(mesh => mesh.dispose());
} else {
try {
  scene = createPilotScene($('scene'), { onSelect: inspect, onInvalidate: requestFrame, exhibitAssets, appearanceFactory: classic ? null : createMaterialStudyRig });
  if (!classic) { scene.setStructureMode(exhibitAssets ? 'exhibit' : 'refined'); scene.setAppearance('B'); }
  document.body.dataset.visual = classic ? 'classic' : exhibitAssets ? 'exhibit' : 'refined';
  $('loading').remove(); document.body.dataset.renderer = 'webgl';
  requestFrame();
  if (!reducedMotion && !new URLSearchParams(location.search).has('paused')) play();
} catch (error) {
  if (scene) { scene.dispose(); scene = null; }
  else if (exhibitAssets) Object.values(exhibitAssets.geometries).forEach(mesh => mesh.dispose());
  $('loading')?.remove(); document.body.dataset.renderer = 'unavailable';
  const message = document.createElement('div'); message.className = 'scene-error';
  const text = document.createElement('span'); text.textContent = '三维预览需要浏览器启用 WebGL。';
  const link = document.createElement('a'); link.href = '../?view=2d'; link.textContent = '打开二维教学演示 →'; message.append(text, link); $('scene').append(message);
  console.error(error); requestFrame();
}
}

// Read-only observation hooks, also used for deterministic browser replay.
window.__TRANSCRIPTION_PILOT__ = {
  seek, play, pause, poseAt,
  getState: () => ({ ...state, pose: poseAt(state.time), metrics: scene?.getMetrics?.() || null }),
  getGeometry: () => scene?.getDebugGeometry?.() || null,
  getFrameTimes: () => [...frameDurations],
  duration: DURATION, sampleCount: SAMPLE_COUNT,
};
