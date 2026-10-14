import { createPolymeraseDemo, SUBUNITS } from './scene.js';

const $ = (id) => document.getElementById(id);
const state = { phase: 'loading', step: 0, selected: null, cutaway: false, exploded: false, autoRotate: false };
const steps = [
  {
    title: '十二个亚基，围出工作通道。',
    what: '彩色分区对应不同的蛋白质亚基，它们共同构成 RNA 聚合酶Ⅱ。',
    how: '旋转模型，寻找中央沟槽；点选色块，辨认其中一个亚基。',
    caption: '十二个亚基 · 一个工作通道',
  },
  {
    title: '模板与新生 RNA，短暂配对。',
    what: 'DNA 模板进入工作区域，与正在生成的 RNA 形成一段局部配对结构。',
    how: '透视已开启。观察配对区域，区分进入的模板与伸出的 RNA。',
    caption: '模板 DNA · 局部配对 · 新生 RNA',
  },
  {
    title: '新的核苷酸，接到 RNA 的 3′端。',
    what: 'RNA 沿 5′→3′方向延长，DNA 模板仍然保留；它传递的是序列信息。',
    how: '观察 RNA 延伸端与离开通道的方向，再旋转模型看看它们的空间关系。',
    caption: '读取模板 · 延长 RNA · 保留 DNA',
  },
];
const partButtons = new Map();
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let scene = null;
let disposed = false;

function announce(message) { $('feedback-message').textContent = message; }

function setEnabled(enabled) {
  document.querySelectorAll('[data-scene-control]').forEach((button) => { button.disabled = !enabled; });
}

function renderSubunits() {
  const majors = $('major-subunits');
  const compact = $('compact-subunits');
  SUBUNITS.forEach((part, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'part-button';
    button.dataset.partIndex = String(index);
    button.setAttribute('data-scene-control', '');
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', '选择 ' + part.name);
    button.title = part.name + ' · ' + part.role;
    button.disabled = true;
    button.style.setProperty('--part-color', part.color);
    const swatch = document.createElement('i');
    swatch.setAttribute('aria-hidden', 'true');
    const name = document.createElement('span');
    name.textContent = part.name;
    button.append(swatch, name);
    const major = /^RPB[12]$/i.test(part.id);
    (major ? majors : compact).append(button);
    partButtons.set(index, button);
  });
}

function syncUI() {
  const step = steps[state.step];
  $('step-kicker').textContent = '观察 ' + String(state.step + 1).padStart(2, '0');
  $('step-title').textContent = step.title;
  $('step-what').textContent = step.what;
  $('step-how').textContent = state.step === 1 && !state.cutaway
    ? '透视已关闭。可重新开启，观察内部配对区域。'
    : step.how;
  $('stage-observation').textContent = step.caption;
  $('viewer-title').textContent = state.exploded ? '亚基展开' : state.cutaway ? '工作区域透视' : '完整结构';
  document.querySelectorAll('[data-step]').forEach((button) => {
    const active = Number(button.dataset.step) === state.step;
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  });
  $('cutaway-toggle').setAttribute('aria-pressed', String(state.cutaway));
  $('explode-toggle').setAttribute('aria-pressed', String(state.exploded));
  $('explode-toggle').disabled = state.phase !== 'ready' || state.step !== 0;
  $('explode-toggle').title = state.step === 0 ? '分开观察各个亚基' : '亚基展开用于整体结构步骤';
  $('rotate-toggle').setAttribute('aria-pressed', String(state.autoRotate));
  $('rotate-toggle').disabled = state.phase !== 'ready' || motionPreference.matches;
  $('rotate-text').textContent = state.autoRotate ? '暂停' : '自转';
  $('rotate-icon').setAttribute('href', state.autoRotate ? '#icon-pause' : '#icon-rotate');
  $('rotate-toggle').title = motionPreference.matches ? '系统已设置减少动态效果' : state.autoRotate ? '暂停自动旋转' : '缓慢自动旋转模型';
  const part = state.selected === null ? null : SUBUNITS[state.selected];
  partButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === state.selected)));
  $('clear-part').hidden = !part;
  $('part-note').classList.toggle('is-selected', Boolean(part));
  $('part-note-mark').style.background = part?.color || '';
  $('part-note-title').textContent = part ? part.name : '颜色帮助你追踪同一结构';
  $('part-note-description').textContent = part?.role || '在整体与透视之间切换，看看各个亚基如何相互包围。';
  if (part && !/^RPB[12]$/i.test(part.id)) $('other-subunits').open = true;
}

function onSelected(index) {
  state.selected = Number.isInteger(index) && index >= 0 && index < SUBUNITS.length ? index : null;
  syncUI();
  if (state.selected !== null) announce('已选择 ' + SUBUNITS[state.selected].name);
}

function chooseStep(index) {
  if (state.phase !== 'ready' || !steps[index] || !scene) return;
  state.step = index;
  state.cutaway = index > 0;
  state.exploded = false;
  state.selected = null;
  scene.setStep(index);
  syncUI();
  announce('已切换到' + ['整体结构', '模板配对', 'RNA 延长'][index]);
}

function choosePart(index) {
  if (state.phase !== 'ready' || !scene) return;
  const next = state.selected === index ? null : index;
  onSelected(next);
  scene.selectPart(next);
}

function resetView() {
  if (state.phase !== 'ready' || !scene) return;
  scene.resetView();
  announce('已恢复观察视角');
}

function onReady(info = {}) {
  if (disposed || state.phase === 'ready' || state.phase === 'error') return;
  state.phase = 'ready';
  $('molecule-stage').setAttribute('aria-busy', 'false');
  $('model-loading').hidden = true;
  const count = Number.isFinite(info.parts) ? info.parts : SUBUNITS.length;
  $('stage-part-count').textContent = count + ' 个亚基';
  setEnabled(true);
  syncUI();
  announce('聚合酶模型已载入，可拖动旋转或选择观察步骤');
}

function onError(error) {
  if (disposed || state.phase === 'error') return;
  state.phase = 'error';
  $('molecule-stage').setAttribute('aria-busy', 'false');
  $('stage-part-count').textContent = '暂未载入';
  $('model-loading').hidden = false;
  $('model-loading').classList.add('is-error');
  $('model-loading').setAttribute('role', 'alert');
  $('loading-title').textContent = '模型暂时无法载入';
  $('loading-description').textContent = '请刷新页面，重新准备三维观察场景。';
  $('model-retry').hidden = false;
  setEnabled(false);
  console.error('Molecule preview failed:', error);
}

renderSubunits();
syncUI();
document.querySelector('.lesson-steps').addEventListener('click', (event) => {
  const button = event.target.closest('[data-step]');
  if (button) chooseStep(Number(button.dataset.step));
});
document.querySelector('.subunit-section').addEventListener('click', (event) => {
  const button = event.target.closest('[data-part-index]');
  if (button) choosePart(Number(button.dataset.partIndex));
});
$('clear-part').addEventListener('click', () => { onSelected(null); scene?.selectPart(null); });
$('cutaway-toggle').addEventListener('click', () => {
  if (state.phase !== 'ready') return;
  state.cutaway = !state.cutaway;
  if (state.cutaway && state.exploded) {
    state.exploded = false;
    scene.setExploded(false);
  }
  scene.setCutaway(state.cutaway);
  syncUI();
});
$('explode-toggle').addEventListener('click', () => {
  if (state.phase !== 'ready' || state.step !== 0) return;
  state.exploded = !state.exploded;
  if (state.exploded) { state.cutaway = false; state.selected = null; }
  scene.setExploded(state.exploded);
  syncUI();
});
$('rotate-toggle').addEventListener('click', () => {
  if (state.phase !== 'ready' || motionPreference.matches) return;
  state.autoRotate = !state.autoRotate;
  scene.setAutoRotate(state.autoRotate);
  syncUI();
});
$('reset-view').addEventListener('click', resetView);
$('model-retry').addEventListener('click', () => window.location.reload());
const handleKey = (event) => {
  if (event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.target instanceof Element && (event.target.closest('input,textarea,select') || event.target.isContentEditable)) return;
  if (event.key === 'Escape') { event.preventDefault(); resetView(); }
  else if (['1', '2', '3'].includes(event.key)) { event.preventDefault(); chooseStep(Number(event.key) - 1); }
};
window.addEventListener('keydown', handleKey);
const onMotionPreferenceChanged = () => {
  if (motionPreference.matches) { state.autoRotate = false; scene?.setAutoRotate?.(false); }
  syncUI();
};
motionPreference.addEventListener('change', onMotionPreferenceChanged);
window.addEventListener('pagehide', () => {
  disposed = true;
  window.removeEventListener('keydown', handleKey);
  motionPreference.removeEventListener('change', onMotionPreferenceChanged);
  scene?.dispose();
}, { once: true });

try {
  scene = createPolymeraseDemo({ host: $('molecule-stage'), onReady, onSelect: onSelected, onError });
  window.__POLYMERASE_DEMO__ = Object.freeze({ inspect: () => ({ ui: { ...state }, scene: scene?.inspect() ?? null }) });
  await scene.ready;
  onReady();
} catch (error) { onError(error); }
