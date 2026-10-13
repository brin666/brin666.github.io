import { createLivingScene } from './living-scene.js';

const $ = (id) => document.getElementById(id);
const duration = 14;
const query = new URLSearchParams(location.search);
const requestedTime = Number(query.get('time'));
const initialTime = Number.isFinite(requestedTime) ? clamp(requestedTime, 0, duration) : 0;
const initialDirection = query.get('view') === 'fixed' ? 'fixed' : 'guided';
const model = query.get('model') === 'illustrated' ? 'illustrated' : 'structural';
const look = query.get('look') === 'previous' ? 'previous' : 'perspective';
const state = {
  time: initialTime,
  playing: false,
  direction: initialDirection,
  cameraMode: initialDirection,
  labels: query.get('labels') === '1',
  motion: query.get('motion') !== 'baseline',
  reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
  model,
  look,
  perspective: query.get('xray') !== '0',
};
let scene;
let ready = Promise.resolve();
let raf = 0;
let playStartedAt = 0;
let timeAtStart = state.time;
let disposed = false;
let sceneReady = false;
let sceneFailed = false;
let lastActionNoteKey = '';

const sceneControls = ['play', 'replay', 'progress', 'labels', 'motion', 'camera', 'perspective', 'direction-guided', 'direction-fixed', 'resume-guide'].map($);
const actionStages = [
  { id: 'workspace', end: 2, label: '观察局部 DNA 与聚合酶' },
  { id: 'alignment', end: 7, label: '核苷酸对位 · 向 RNA 3′ 端接入' },
  { id: 'extension', end: 11, label: '连续延长 · 聚合酶向前推进' },
  { id: 'release', end: duration + Number.EPSILON, label: '新生 RNA 伸出 · 从出口延展' },
];

function updateActionNote() {
  const stageIndex = actionStages.findIndex((stage) => state.time < stage.end);
  const index = stageIndex < 0 ? actionStages.length - 1 : stageIndex;
  const noteKey = state.direction === 'fixed' ? 'fixed' : `guided:${index}`;
  if (noteKey === lastActionNoteKey) return;
  lastActionNoteKey = noteKey;
  const stage = actionStages[index];
  const note = $('action-note');
  note.textContent = state.direction === 'fixed' ? '局部解旋 · 核苷酸接入 · 聚合酶前移' : stage.label;
  note.dataset.stage = state.direction === 'fixed' ? 'fixed' : stage.id;
  let inspection;
  try { inspection = scene?.inspect?.(); } catch { inspection = null; }
  if (inspection?.directionStage !== undefined) note.dataset.directionStage = String(inspection.directionStage);
  else delete note.dataset.directionStage;
  if (inspection?.stageLabel !== undefined) note.dataset.stageLabel = String(inspection.stageLabel);
  else delete note.dataset.stageLabel;
}

function updateDirectionControls() {
  $('direction-guided').setAttribute('aria-pressed', String(state.direction === 'guided'));
  $('direction-fixed').setAttribute('aria-pressed', String(state.direction === 'fixed'));
  const showResume = state.direction === 'guided' && state.cameraMode === 'manual' && !state.reducedMotion;
  $('resume-guide').hidden = !showResume;
  $('resume-guide').disabled = !sceneReady || sceneFailed || disposed || state.reducedMotion;
  document.body.dataset.direction = state.direction;
  document.body.dataset.cameraMode = state.cameraMode;
}

function setSceneControlsDisabled(disabled) {
  sceneControls.forEach((control) => { control.disabled = disabled; });
  document.body.dataset.sceneState = sceneFailed ? 'failed' : sceneReady ? 'ready' : 'loading';
  updateDirectionControls();
}

function failScene(error) {
  if (sceneFailed || disposed) return;
  sceneFailed = true;
  sceneReady = false;
  state.playing = false;
  console.error(error);
  const failedScene = scene;
  scene = null;
  try { failedScene?.dispose(); } catch (disposeError) { console.warn(disposeError); }
  resizeObserver.disconnect();
  reducedMotionQuery.removeEventListener?.('change', onReducedMotionChange);
  $('loading').hidden = true;
  $('scene-error').hidden = false;
  document.body.dataset.renderer = 'unavailable';
  setSceneControlsDisabled(true);
  $('selection').hidden = true;
  updatePlayer();
}

function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }

function updatePlayer() {
  const progress = $('progress');
  const percent = state.time / duration * 100;
  progress.value = String(state.time);
  progress.style.setProperty('--progress', `${percent}%`);
  progress.setAttribute('aria-valuetext', `${state.time.toFixed(2)} 秒`);
  $('time').innerHTML = `${state.time.toFixed(2)} <span>/ 14.00 秒</span>`;
  $('play-icon').textContent = state.playing ? 'Ⅱ' : '▶';
  $('play-label').textContent = state.playing ? '暂停' : '播放';
  $('play').setAttribute('aria-label', state.playing ? '暂停样段' : '播放样段');
  document.body.dataset.playing = String(state.playing);
  document.body.dataset.motion = state.motion ? 'alive' : 'baseline';
  document.body.dataset.labels = String(state.labels);
  const comparison = new URL(location.href);
  comparison.searchParams.set('model', 'structural');
  comparison.searchParams.set('look', look === 'previous' ? 'perspective' : 'previous');
  comparison.searchParams.set('time', state.time.toFixed(2));
  comparison.searchParams.set('view', state.direction);
  comparison.searchParams.set('motion', state.motion ? 'alive' : 'baseline');
  comparison.searchParams.set('labels', state.labels ? '1' : '0');
  comparison.searchParams.set('xray', state.perspective ? '1' : '0');
  $('model-compare').href = comparison.href;
  $('model-compare').textContent = look === 'previous' ? '查看正面透视版' : '查看上一版对照';
  $('model-status').textContent = model === 'illustrated' ? '聚合酶 · 原教学形体' : look === 'previous' ? '聚合酶 · 固定剖视' : '聚合酶 · 正面透视';
  updateActionNote();
}

function requestRender() {
  if (!raf && sceneReady && !sceneFailed && !disposed && !document.hidden) raf = requestAnimationFrame(drawFrame);
}

function drawFrame(now) {
  raf = 0;
  if (!scene || !sceneReady || sceneFailed || disposed) return;
  if (state.playing) {
    state.time = clamp(timeAtStart + (now - playStartedAt) / 1000, 0, duration);
    scene.setTime(state.time);
    if (state.time >= duration) state.playing = false;
  }
  updatePlayer();
  const needsAnotherFrame = Boolean(scene.render());
  if (state.playing || needsAnotherFrame) requestRender();
}

function pause() {
  state.playing = false;
  updatePlayer();
  requestRender();
}

function play() {
  if (!sceneReady || sceneFailed || disposed) return;
  if (state.time >= duration) seek(0);
  state.playing = true;
  timeAtStart = state.time;
  playStartedAt = performance.now();
  updatePlayer();
  requestRender();
}

function seek(value) {
  pause();
  state.time = clamp(Number(value) || 0, 0, duration);
  scene?.setTime(state.time, { seek: true });
  updatePlayer();
  requestRender();
}

function syncCameraMode(fallback = state.direction) {
  const mode = scene?.getCameraMode?.();
  state.cameraMode = ['guided', 'manual', 'fixed'].includes(mode) ? mode : fallback;
  updateDirectionControls();
}

function setDirection(mode) {
  if (mode !== 'guided' && mode !== 'fixed') return state.direction;
  if (sceneFailed || disposed) return state.direction;
  pause();
  state.direction = mode;
  state.cameraMode = mode;
  updateDirectionControls();
  try {
    scene?.setDirection?.(mode);
    scene?.setTime?.(state.time);
  } catch (error) {
    failScene(error);
    return state.direction;
  }
  updateActionNote();
  syncCameraMode(mode);
  requestRender();
  return state.direction;
}

function setMotion(enabled) {
  if (sceneFailed || disposed) return;
  state.motion = Boolean(enabled);
  scene?.setMotion(state.motion);
  $('motion').setAttribute('aria-pressed', String(state.motion));
  $('motion').textContent = state.motion ? '局部动态：开' : '局部动态：关';
  requestRender();
}

function setLabels(enabled) {
  if (sceneFailed || disposed) return;
  state.labels = Boolean(enabled);
  scene?.setLabels(state.labels);
  $('labels').setAttribute('aria-pressed', String(state.labels));
  requestRender();
}

function showSelection(selection) {
  if (!sceneReady || sceneFailed || disposed) return;
  if (!selection) {
    $('selection').hidden = true;
    return;
  }
  const title = typeof selection === 'string'
    ? selection
    : selection.title || selection.name || selection.label || selection.part || '结构';
  const description = typeof selection === 'object'
    ? selection.text || selection.description || selection.detail || ''
    : '';
  $('selection-title').textContent = String(title);
  $('selection-text').textContent = String(description);
  $('selection').hidden = false;
}

function resetView() {
  scene?.resetView();
  syncCameraMode();
  requestRender();
}

function resumeGuide() {
  if (!sceneReady || sceneFailed || disposed || state.direction !== 'guided' || state.reducedMotion) return;
  try {
    scene?.resumeGuide?.();
    syncCameraMode('guided');
    requestRender();
  } catch (error) {
    failScene(error);
  }
}

function onCameraModeChange(mode) {
  if (!['guided', 'manual', 'fixed'].includes(mode)) return;
  state.cameraMode = mode;
  updateDirectionControls();
}

function onReducedMotionChange(event) {
  state.reducedMotion = event.matches;
  scene?.setReducedMotion?.(state.reducedMotion);
  syncCameraMode();
  if (state.reducedMotion) pause();
  updateDirectionControls();
  requestRender();
}

$('play').addEventListener('click', () => state.playing ? pause() : play());
$('replay').addEventListener('click', () => { resetView(); seek(0); play(); });
$('progress').addEventListener('input', (event) => seek(event.currentTarget.value));
$('labels').addEventListener('click', () => setLabels(!state.labels));
$('motion').addEventListener('click', () => setMotion(!state.motion));
$('camera').addEventListener('click', resetView);
$('perspective').addEventListener('click', () => {
  state.perspective = !state.perspective;
  scene?.setPerspective(state.perspective);
  $('perspective').setAttribute('aria-pressed', String(state.perspective));
  $('perspective').textContent = state.perspective ? '透视：开' : '透视：关';
  updatePlayer(); requestRender();
});
$('direction-guided').addEventListener('click', () => setDirection('guided'));
$('direction-fixed').addEventListener('click', () => setDirection('fixed'));
$('resume-guide').addEventListener('click', resumeGuide);

document.addEventListener('keydown', (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON|A|SUMMARY)$/.test(target.tagName))) return;
  if (!sceneReady || sceneFailed || disposed) return;
  if (event.code === 'Space') {
    event.preventDefault();
    state.playing ? pause() : play();
  } else if (event.key === 'Home') {
    event.preventDefault();
    seek(0);
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    seek(state.time + (event.key === 'ArrowLeft' ? -0.25 : 0.25));
  }
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) pause();
  else requestRender();
});
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    scene?.resize();
    updatePlayer();
  }
  requestRender();
});
const reducedMotionQuery = matchMedia('(prefers-reduced-motion: reduce)');
reducedMotionQuery.addEventListener?.('change', onReducedMotionChange);
const resizeObserver = new ResizeObserver(() => {
  scene?.resize();
  requestRender();
});
resizeObserver.observe($('scene'));
window.addEventListener('pagehide', (event) => {
  if (event.persisted) {
    pause();
    return;
  }
  if (disposed) return;
  disposed = true;
  cancelAnimationFrame(raf);
  resizeObserver.disconnect();
  reducedMotionQuery.removeEventListener?.('change', onReducedMotionChange);
  const leavingScene = scene;
  scene = null;
  leavingScene?.dispose();
});

try {
  scene = createLivingScene({
    container: $('scene'),
    model,
    look,
    perspective: state.perspective,
    onInvalidate: requestRender,
    onSelect: showSelection,
    onCameraModeChange,
  });
  scene.setDirection?.(state.direction);
  scene.setTime(state.time);
  scene.setLabels(state.labels);
  scene.setMotion(state.motion);
  scene.setReducedMotion?.(state.reducedMotion);
  $('perspective').hidden = model !== 'structural' || look === 'previous';
  $('perspective').setAttribute('aria-pressed', String(state.perspective));
  $('perspective').textContent = state.perspective ? '透视：开' : '透视：关';
  syncCameraMode(state.direction);
  $('labels').setAttribute('aria-pressed', String(state.labels));
  $('motion').setAttribute('aria-pressed', String(state.motion));
  $('motion').textContent = state.motion ? '局部动态：开' : '局部动态：关';
  updatePlayer();
  ready = Promise.resolve(scene.ready).then(() => {
    if (disposed) return;
    sceneReady = true;
    setSceneControlsDisabled(false);
    $('loading').hidden = true;
    $('scene-error').hidden = true;
    document.body.dataset.renderer = 'webgl';
    requestRender();
  }).catch((error) => {
    failScene(error);
    throw error;
  });
  ready.catch(() => {});
} catch (error) {
  failScene(error);
  ready = Promise.reject(error);
  ready.catch(() => {});
}

window.__livingLab = {
  seek,
  play,
  pause,
  snapshot: () => scene?.inspect(),
  metrics: () => scene?.getMetrics(),
  setMotion,
  setLabels,
  setPerspective: enabled => { if (state.perspective !== Boolean(enabled)) $('perspective').click(); },
  resetView,
  setDirection,
  resumeGuide,
  setZoom: (factor) => { scene?.setZoom(factor); requestRender(); },
  get ready() { return ready; },
  get state() { return { ...state }; },
};

updatePlayer();
