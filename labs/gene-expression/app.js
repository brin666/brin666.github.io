import './locale.js';
import { CODING_DNA, TEMPLATE_DNA, RNA, CODONS, AMINO_ACIDS, BASE_COLORS, regionAt, tracePosition, indicesForCodon } from './biology.mjs';
import { CHAPTERS, TOTAL, derive, clampTime, nextStep, previousStep } from './state.mjs';
import { getObjectLessons } from './object-lessons.js';
import { createObjectLesson, createKnowledgeHints, bookForObject } from './object-lesson.js';
import { createEntranceUI } from './entrance-ui.js';
import { createWhiteboard } from './whiteboard.js';
import { createTextbookDialog } from './textbook-dialog.js';

const $ = (id) => document.getElementById(id);
const NAMES = ['认识 DNA', '转录', '出核', '翻译', '序列对照'];
const TITLES = ['DNA 双链', '转录合成 RNA', 'mRNA 出核', '密码子与多肽', '序列追踪'];
const HINTS = ['观察：两条链的 5′端与 3′端，分别朝向哪里？', '观察：新加入的 RNA 核苷酸连接在哪一端？', '观察：mRNA 经过什么结构离开细胞核？', '观察：肽链怎样从一条 tRNA 转移到另一条 tRNA？', '试一试：点击下方的 Pro（脯氨酸）。页面会高亮 mRNA 中编码它的 CCG 密码子，以及 DNA 两条链上对应的碱基。'];
const EN_NAMES = ['Meet DNA', 'Transcription', 'Nuclear export', 'Translation', 'Sequence map'];
const EN_TITLES = ['DNA double helix', 'RNA transcription', 'mRNA nuclear export', 'Codons and peptide', 'Trace the sequence'];
const EN_HINTS = [
  'Observe: which way do the 5′ and 3′ ends of the two strands point?',
  'Observe: to which end is the new RNA nucleotide added?',
  'Observe: through which structure does mRNA leave the nucleus?',
  'Observe: how does the growing peptide move from one tRNA to another?',
  'Try selecting Pro (proline) below. Its mRNA codon CCG and the matching positions on both DNA strands will be highlighted.',
];
const EN_AMINO_NAMES = { Met: 'Methionine', Ala: 'Alanine', Phe: 'Phenylalanine', Glu: 'Glutamate', Pro: 'Proline' };
const isEn = () => document.documentElement.lang === 'en';
const t = (zh, en) => isEn() ? en : zh;
const L = t;
const chapterName = (id) => (isEn() ? EN_NAMES : NAMES)[id];
const aminoName = (amino) => isEn() ? EN_AMINO_NAMES[amino.short] || amino.name : amino.name;
const PREFERS_REDUCED = matchMedia('(prefers-reduced-motion: reduce)');
const sampleEntry = new URLSearchParams(location.search).get('sample') === 'transcription';
const introOff = new URLSearchParams(location.search).get('intro') === 'off';
const store = { time: sampleEntry ? 15 : 0, playing: false, ambientMotion: !sampleEntry, speed: 1, labels: false, expanded: false, selected: null, reducedMotion: PREFERS_REDUCED.matches, viewMode: 'overview', panelOpen: false };
let scene = null, pendingScene = null, sceneDisposed = false, fallback = null, clockFrame = 0, previousStamp = 0, uiSignature = '', snapshot = derive(store.time), viewControlMode = null, viewApiAvailable = null, reactionViewAvailable = null;
let inspectorTrigger = null;
let whiteboard = null;
const entrance = { eligible: document.documentElement.dataset.geneEntrance === 'waiting' && !introOff && !sampleEntry, phase: document.documentElement.dataset.geneEntrance === 'waiting' ? 'waiting' : 'idle', active: false, time: 0, elapsed: 0, lastStamp: 0, paused: false, atEndRendered: false, pendingSkip: false, autoSkipped: false, prepared: false, reason: null, error: null };
const entranceUI = createEntranceUI({ onSkip: skipEntrance });
const textbookDialog = createTextbookDialog({ onOpen: () => { pause(); render(); } });
if (entrance.eligible) {
  entranceUI.showLoading();
  window.dispatchEvent(new Event('gene-expression-entrance-ready'));
}
const objectLesson = createObjectLesson({
  getReducedMotion: () => store.reducedMotion,
  onEnter() { pendingSeek++; clearChapterLoading(); interruptEntrance('object-lesson'); scene?.cancelDeferredWarmup?.(); pause(); cancelAnimationFrame(clockFrame); clockFrame=0; if($('sources').open)$('sources').close(); textbookDialog.close(); knowledgeHints.hide(); closeObjectMenu(); },
  onReturn() { render(); requestSceneFrame(); },
});
const knowledgeHints = createKnowledgeHints({ getChapter: () => snapshot.chapter.id, isHidden: () => objectLesson.isActive() });
const objectMenu = $('object-menu');
function renderObjectMenu() {
  objectMenu.innerHTML = Object.values(getObjectLessons()).map(lesson=>`<button type="button" data-lesson="${lesson.id}">${lesson.title}<small>${lesson.subtitle}</small></button>`).join('');
}
renderObjectMenu();
function closeObjectMenu() { objectMenu.hidden=true; $('objects-toggle').setAttribute('aria-expanded','false'); }
$('objects-toggle').addEventListener('click',()=>{objectMenu.hidden=!objectMenu.hidden;$('objects-toggle').setAttribute('aria-expanded',String(!objectMenu.hidden));});
objectMenu.addEventListener('click',event=>{const button=event.target.closest('[data-lesson]');if(button)objectLesson.open(button.dataset.lesson,$('objects-toggle'));});
document.addEventListener('pointerdown',event=>{if(!event.target.closest('#object-menu,#objects-toggle'))closeObjectMenu();});
document.addEventListener('focusin',event=>{if(!event.target.closest('#object-menu,#objects-toggle'))closeObjectMenu();});
function selectScene(value, trigger = null) {
  // The model is for observing and orbiting. Only the final sequence comparison
  // asks learners to click individual nucleotides or amino acids to trace them.
  if (snapshot.chapter.id !== 4 || !Number.isInteger(value?.index)) return;
  if (!['base', 'coding', 'template', 'rna', 'peptide'].includes(value.type)) return;
  select(value, trigger);
}

function setPanelOpen(open, { returnFocus = false } = {}) {
  store.panelOpen = open;
  const panel = $('learning-panel');
  $('lab-main').dataset.panelOpen = String(open);
  $('details-toggle').setAttribute('aria-expanded', String(open));
  panel.dataset.open = String(open);
  panel.setAttribute('aria-hidden', String(!open));
  panel.inert = !open;
  if (!open && returnFocus) $('details-toggle').focus({ preventScroll: true });
}

function updateViewControls() {
  $('whiteboard-open').disabled = !scene?.enterWhiteboard || entrance.active;
  if (fallback) $('whiteboard-open').title = t('二维备用视图无法提供交互式 3D 白板', 'The 2D fallback cannot provide an interactive 3D whiteboard');
  const hasViewApi = typeof scene?.setView === 'function';
  const chapter = snapshot.chapter.id;
  const sceneMetrics = scene?.getMetrics?.();
  const hasChapterWindow = chapter === 1 ? sceneMetrics?.polymeraseModel === 'blender-full-perspective'
    : [2, 3].includes(chapter) && sceneMetrics?.modelEdition === 'exhibit-v12';
  $('protein-perspective').hidden = !hasViewApi || !hasChapterWindow;
  if (viewApiAvailable !== hasViewApi) {
    $('view-mode-group').hidden = !hasViewApi;
    viewApiAvailable = hasViewApi;
  }
  const canUseReactionView = [1,3].includes(snapshot.chapter.id) || (snapshot.chapter.id===2 && scene?.getMetrics?.()?.modelEdition==='exhibit-v12');
  if (reactionViewAvailable !== canUseReactionView) {
    $('view-reaction').disabled = !canUseReactionView;
    reactionViewAvailable = canUseReactionView;
  }
  const mode = scene?.getMetrics?.()?.viewMode || store.viewMode;
  if (mode === viewControlMode) return;
  viewControlMode = mode;
  $('view-reaction').setAttribute('aria-pressed', String(mode === 'reaction'));
  $('view-overview').setAttribute('aria-pressed', String(mode === 'overview'));
}

for (const [base, color] of Object.entries(BASE_COLORS)) document.documentElement.style.setProperty(`--${base.toLowerCase()}`, color);

const chapterNav = $('chapters');
chapterNav.innerHTML = CHAPTERS.map((chapter) => `<button class="chapter-button" data-chapter="${chapter.id}">${chapterName(chapter.id)}</button>`).join('')
  + '<span id="chapter-route" class="chapter-route" aria-hidden="true"></span><span id="chapter-indicator" class="chapter-indicator" aria-hidden="true"></span>';
const chapterButtons = [...chapterNav.querySelectorAll('.chapter-button')];
const chapterIndicator = $('chapter-indicator');
const chapterRoute = $('chapter-route');
let indicatedChapter = null;
let chapterRouteTimeout = 0;
function positionChapterIndicator(chapterId, animate = false) {
  const target = chapterButtons[chapterId];
  if (!target) return;
  const center = target.offsetLeft + target.offsetWidth / 2;
  const previous = indicatedChapter;
  if (previous === chapterId && chapterIndicator.style.getPropertyValue('--chapter-cursor-x') === `${center}px`) return;
  const traveling = animate && previous !== null && Math.abs(chapterId - previous) === 1 && !store.reducedMotion;
  clearTimeout(chapterRouteTimeout);
  chapterRoute.classList.remove('is-visible');
  if (traveling) {
    const prior = chapterButtons[previous];
    const priorCenter = prior.offsetLeft + prior.offsetWidth / 2;
    chapterIndicator.classList.remove('is-traveling');
    chapterIndicator.style.setProperty('--chapter-cursor-x', `${priorCenter}px`);
    chapterRoute.style.left = `${Math.min(priorCenter, center)}px`;
    chapterRoute.style.width = `${Math.abs(center - priorCenter)}px`;
    void chapterIndicator.offsetWidth;
    chapterIndicator.classList.add('is-traveling');
    chapterRoute.classList.add('is-visible');
    chapterRouteTimeout = setTimeout(() => chapterRoute.classList.remove('is-visible'), 800);
  } else chapterIndicator.classList.remove('is-traveling');
  chapterIndicator.style.setProperty('--chapter-cursor-x', `${center}px`);
  indicatedChapter = chapterId;
}
addEventListener('resize', () => positionChapterIndicator(snapshot.chapter.id));

chapterNav.addEventListener('click', (event) => {
  const target = event.target.closest('[data-chapter]');
  if (!target) return;
  pause(); store.selected = null; void seekWhenReady(CHAPTERS[Number(target.dataset.chapter)].start, { resetView: true });
});

function buildSequence() {
  const rows = [
    ['coding', t('DNA 编码链', 'DNA coding strand'), CODING_DNA, '5′', '3′'],
    ['template', t('DNA 模板链', 'DNA template strand'), TEMPLATE_DNA, '3′', '5′'],
    ['rna', 'RNA', RNA, '5′', '3′'],
  ];
  $('sequences').innerHTML = rows.map(([type, name, sequence, left, right]) => `<div class="sequence-row" data-row="${type}"><span class="row-name">${name}</span><span class="end-mark">${left}</span><div class="base-track">${[...sequence].map((base, index) => `<button class="base-cell" data-base="${base}" data-type="${type}" data-index="${index}" aria-label="${isEn() ? `${name}, position ${index + 1}, ${base}` : `${name} 第 ${index + 1} 位 ${base}`}">${base}</button>`).join('')}</div><span class="end-mark">${right}</span></div>`).join('') + `<div class="region-row" id="regions"><span></span><span></span><div class="regions"><span>${t('5′侧非翻译区', '5′ UTR')}</span><span>${t('五个氨基酸的编码区', 'Five-residue coding region')}</span><span>${t('终止', 'Stop')}</span><span>${t('3′侧非翻译区', '3′ UTR')}</span></div><span></span></div>`;
  $('amino-row').innerHTML = `<span class="amino-label">${t('氨基酸序列', 'Amino acid sequence')}</span><span class="amino-end">N</span>` + AMINO_ACIDS.map((amino, index) => `${index ? '<span class="peptide-link" aria-hidden="true"></span>' : ''}<button class="amino" data-amino="${index}" aria-label="${amino.short} ${aminoName(amino)}" aria-pressed="false">${amino.short}<small>${aminoName(amino)}</small></button>`).join('') + '<span class="amino-end">C</span>';
}
buildSequence();
function localizeSequence() {
  $('sequences').querySelector('[data-row="coding"] .row-name').textContent = t('DNA 编码链', 'DNA coding strand');
  $('sequences').querySelector('[data-row="template"] .row-name').textContent = t('DNA 模板链', 'DNA template strand');
  const regions = $('regions').querySelectorAll('.regions span');
  [t('5′侧非翻译区', '5′ UTR'), t('五个氨基酸的编码区', 'Five-residue coding region'), t('终止', 'Stop'), t('3′侧非翻译区', '3′ UTR')]
    .forEach((label, index) => { regions[index].textContent = label; });
  $('amino-row').querySelector('.amino-label').textContent = t('氨基酸序列', 'Amino acid sequence');
}
$('sequences').addEventListener('click', (event) => {
  const button = event.target.closest('.base-cell');
  if (!button || button.disabled) return;
  select({ type: button.dataset.type, index: Number(button.dataset.index) }, button);
});
$('amino-row').addEventListener('click', (event) => {
  const button = event.target.closest('[data-amino]');
  if (button && !button.disabled) select({ type: 'peptide', index: Number(button.dataset.amino) }, button);
});

function normaliseSelection(selected) {
  const value = { ...selected };
  if (value.type === 'base') value.type = 'template';
  if (value.type === 'trna') {
    // A tRNA's index is a reading-frame codon index, not a nucleotide position.
    value.index ??= snapshot.translation.mode === 'elongate' ? snapshot.translation.codonIndex : (snapshot.translation.pCodonIndex ?? 0);
    if (value.index >= 0 && value.index < 5) value.indices = indicesForCodon(value.index);
  } else if (value.type === 'peptide' && Number.isInteger(value.index)) value.indices = indicesForCodon(value.index);
  else if (Number.isInteger(value.index) && value.index >= 0 && value.index < 30) {
    value.indices = snapshot.chapter.id >= 3 ? tracePosition(value.index).indices : [value.index];
  }
  return value;
}

function isSelectionAvailable(selection) {
  if (!selection) return true;
  if (selection.type === 'peptide') return snapshot.peptideCount > 0 && (selection.index == null || selection.index < snapshot.peptideCount);
  if (selection.type === 'rna') return snapshot.rnaCount > 0 && (selection.index == null || selection.index < snapshot.rnaCount);
  if (selection.type === 'polymerase') return snapshot.chapter.id === 1;
  if (selection.type === 'trna' || selection.type === 'ribosome') return snapshot.chapter.id === 3;
  if (selection.type === 'pore') return snapshot.chapter.id === 2;
  // DNA stays visible as information in the DOM sequence panel during cytoplasmic translation.
  if (selection.type === 'coding' || selection.type === 'template') return true;
  return true;
}

function select(selected, trigger = null) {
  interruptEntrance('selection');
  pause(); store.selected = normaliseSelection(selected);
  if (!isSelectionAvailable(store.selected)) { store.selected = null; return; }
  inspectorTrigger = trigger;
  setPanelOpen(true);
  scene?.focus(store.selected.type, store.selected.index);
  uiSignature = ''; render();
}

const STRUCTURES = {
  coding: ['DNA 编码链', '同向对照时，本例编码链与 RNA 的主要字母差别是 T 与 U。', '编码链没有被剪下或消耗；它与模板链反向平行。'],
  template: ['DNA 模板链', 'RNA 聚合酶读取当前基因的这条链，合成互补的 RNA。', '在本例中从左侧 3′端朝右侧 5′端读取；另一基因可以采用另一条链作为模板。'],
  polymerase: ['RNA 聚合酶', '在局部打开 DNA，读取模板并连接 RNA 核苷酸。', 'DNA 仅在聚合酶附近打开，经过后恢复双链；新核苷酸接到 RNA 的 3′端。'],
  rna: ['mRNA / RNA', '把这个蛋白质编码基因的序列信息带向细胞质中的核糖体。', '这是一条新合成的 RNA，来自核苷酸之间的连接，DNA 仍保留在核内。'],
  trna: ['tRNA', '携带氨基酸，用反密码子与 mRNA 密码子反向平行配对。', '携带氨基酸的一端与反密码子位于不同部位；离开核糖体后可被重新装载，本页不模拟装载。'],
  ribosome: ['核糖体', '大小亚基共同组织密码子读取、tRNA 结合和肽键形成。', '相对 mRNA 按 5′→3′方向前进；起始 tRNA 在 P 位，普通延长的 tRNA 先进入 A 位。'],
  peptide: ['多肽链', '由指定顺序的氨基酸残基通过肽键连接而成。', '从 N 端向 C 端延长。本例最终释放五个残基，不模拟折叠或形成真实完整蛋白质。'],
  pore: ['核孔', '成熟 mRNA 出核的通道。', 'mRNA 从可见核孔通过，DNA 留在细胞核内。RNA 加工的细节已简化。'],
};
const EN_STRUCTURES = {
  coding: ['DNA coding strand', 'When aligned in the same direction, this coding strand mainly differs from the RNA by T versus U.', 'The coding strand is neither cut away nor consumed; it runs antiparallel to the template strand.'],
  template: ['DNA template strand', 'RNA polymerase reads this strand of the current gene and makes complementary RNA.', 'In this example it reads from the left 3′ end toward the right 5′ end; a different gene may use the other strand as its template.'],
  polymerase: ['RNA polymerase', 'Locally opens the DNA, reads the template, and joins RNA nucleotides.', 'The DNA opens only near the polymerase and reforms a duplex behind it. Each new nucleotide joins the RNA 3′ end.'],
  rna: ['mRNA / RNA', 'Carries the sequence information of this protein-coding gene to a ribosome in the cytoplasm.', 'This newly made RNA forms by joining nucleotides. The DNA remains in the nucleus.'],
  trna: ['tRNA', 'Carries an amino acid and pairs its anticodon antiparallel to an mRNA codon.', 'The amino-acid attachment end is distinct from the anticodon. A departing tRNA may be reloaded; this page does not simulate reloading.'],
  ribosome: ['Ribosome', 'Its large and small subunits organize codon reading, tRNA binding, and peptide-bond formation.', 'It advances along mRNA 5′→3′. The initiator tRNA occupies the P site; during ordinary elongation the next tRNA first enters the A site.'],
  peptide: ['Peptide chain', 'A specified sequence of amino-acid residues joined by peptide bonds.', 'It grows from the N terminus toward the C terminus. This example releases five residues and does not simulate folding into a complete protein.'],
  pore: ['Nuclear pore', 'A passage for mature mRNA to leave the nucleus.', 'mRNA passes through the visible pore while DNA stays in the nucleus. Details of RNA processing are simplified.'],
};
const structures = () => isEn() ? EN_STRUCTURES : STRUCTURES;

function updateInspector() {
  const selection = store.selected;
  $('inspector').hidden = !selection;
  $('trace-detail').replaceChildren();
  $('trace-message').textContent = '';
  if (!selection) return;
  const [name, role, current] = structures()[selection.type] || structures().template;
  $('inspector-title').textContent = name;
  $('inspector-role').textContent = role;
  $('inspector-now').textContent = current;
  if (selection.type === 'polymerase' && snapshot.transcription.index != null) $('inspector-now').textContent = t(`当前读取模板第 ${snapshot.transcription.index + 1} 位 ${TEMPLATE_DNA[snapshot.transcription.index]}，加入 RNA ${RNA[snapshot.transcription.index]}。新核苷酸连接在 RNA 的 3′端。`, `Now reading template position ${snapshot.transcription.index + 1} (${TEMPLATE_DNA[snapshot.transcription.index]}) and adding RNA ${RNA[snapshot.transcription.index]}. The new nucleotide joins the RNA 3′ end.`);
  if (selection.type === 'trna' && selection.index != null && CODONS[selection.index] && !CODONS[selection.index].stop) {
    const codon = CODONS[selection.index];
    $('inspector-now').textContent = t(`mRNA 5′-${codon.rna}-3′，对齐反密码子 3′-${codon.anticodonAligned}-5′。同一反密码子按 5′→3′书写是 ${codon.anticodon5to3}。`, `mRNA 5′-${codon.rna}-3′ aligns antiparallel with anticodon 3′-${codon.anticodonAligned}-5′. Written 5′→3′, that anticodon is ${codon.anticodon5to3}.`);
  }
  if (!selection.indices?.length) return;
  const indices = selection.indices;
  const first = indices[0];
  const range = indices.length === 1 ? `${first + 1}` : `${first + 1}–${indices.at(-1) + 1}`;
  const region = regionAt(first);
  const dnaCoding = indices.map((i) => CODING_DNA[i]).join('');
  const dnaTemplate = indices.map((i) => TEMPLATE_DNA[i]).join('');
  const rna = indices.map((i) => i < snapshot.rnaCount ? RNA[i] : '·').join('');
  const trace = document.createElement('div'); trace.className = 'trace-detail';
  const lines = [t(`位置 ${range}（从 1 开始编号）`, `Positions ${range} (numbered from 1)`), t(`编码链 5′-${dnaCoding}-3′`, `Coding strand 5′-${dnaCoding}-3′`), t(`模板链 3′-${dnaTemplate}-5′`, `Template strand 3′-${dnaTemplate}-5′`), `RNA 5′-${rna}-3′`];
  for (const line of lines) { const code = document.createElement('code'); code.textContent = line; trace.append(code); }
  const note = document.createElement('small');
  let message;
  if (snapshot.chapter.id < 3) {
    message = first < snapshot.rnaCount ? t(`位置 ${range}：模板 ${dnaTemplate} → RNA ${rna}，属于信息配对关系。`, `Positions ${range}: template ${dnaTemplate} → RNA ${rna}. This shows complementary sequence information.`) : t(`位置 ${range}：两条 DNA 链互补。这个 RNA 位置尚未生成。`, `Positions ${range}: the two DNA strands are complementary. This RNA position has not been made yet.`);
  } else if (region === 'stop') {
    message = t('UAA：终止信号，不对应氨基酸。由释放因子参与终止，不存在“终止氨基酸 tRNA”。', 'UAA is a stop signal, not an amino acid. A release factor participates in termination; there is no “stop amino acid tRNA.”');
  } else if (region === 'utr5' || region === 'utr3') {
    message = t('该区域在本例中不被翻译。它也在 RNA 中，但不产生本例的氨基酸残基。', 'This region is present in the RNA but is not translated into an amino-acid residue in this example.');
  } else {
    const codonIndex = Math.floor((first - 6) / 3), amino = AMINO_ACIDS[codonIndex];
    message = codonIndex < snapshot.peptideCount ? t(`${amino.short}（${amino.name}） ↔ mRNA ${CODONS[codonIndex].rna} ↔ DNA 位置 ${range}。这是信息位置对应。`, `${amino.short} (${aminoName(amino)}) ↔ mRNA ${CODONS[codonIndex].rna} ↔ DNA positions ${range}. This traces corresponding information positions.`) : t(`mRNA ${CODONS[codonIndex].rna} 位于当前读框；对应残基在当前进度尚未加入多肽。`, `mRNA ${CODONS[codonIndex].rna} is in the reading frame; its residue has not yet joined the peptide at this point.`);
  }
  note.textContent = message; trace.append(note); $('trace-detail').append(trace); $('trace-message').textContent = message;
  if (selection.type === 'peptide' && selection.index != null) $('inspector-title').textContent = `${AMINO_ACIDS[selection.index].short} · ${aminoName(AMINO_ACIDS[selection.index])}`;
}

function closeInspector(returnFocus = true) {
  store.selected = null; scene?.resetView(); uiSignature = ''; render();
  if (returnFocus && inspectorTrigger?.isConnected) inspectorTrigger.focus({ preventScroll: true });
}
$('inspector-close').addEventListener('click', () => closeInspector());
$('inspector-return').addEventListener('click', () => closeInspector());
$('inspector-lesson').addEventListener('click', () => { if(store.selected) objectLesson.open(store.selected.type,$('inspector-lesson')); });

function teachingCaption(state, locale = isEn() ? 'en' : 'zh') {
  if (locale === 'en') {
    switch (state.chapter.key) {
      case 'dna': return ['One strand of this gene serves as the template', 'The DNA strands run antiparallel, with A–T and G–C base pairing.'];
      case 'transcription': {
        const index = state.transcription.index;
        return [`Nucleotide ${index + 1} · ${TEMPLATE_DNA[index]} → ${RNA[index]}`, 'The template is read 3′→5′ while RNA grows 5′→3′.'];
      }
      case 'export': return ['Through a nuclear pore into the cytoplasm', 'mRNA crosses the nuclear pore; DNA remains in the nucleus.'];
      case 'comparison': return ['Five residues, six codons read', 'Select a completed residue to trace its mRNA codon and corresponding DNA positions.'];
      default: break;
    }
    const mode = state.translation, codon = CODONS[mode.codonIndex];
    const descriptions = {
      scan: ['Finding the specified start site', 'In this example reading begins at mRNA position 7, AUG.'],
      initiate: ['Initiator tRNA enters the P site', 'AUG specifies methionine (Met); the initiator tRNA pairs antiparallel to it.'],
      assemble: ['The subunits form an initiation complex', 'Met is still attached to the initiator tRNA; the next codon will enter the A site.'],
      stop: ['UAA enters the A site', 'UAA signals termination and does not specify a sixth amino acid.'],
      'release-factor': ['Release factor recognizes the stop codon', 'The release factor enters the A site and starts peptide release.'],
      release: ['A five-residue peptide is released', 'The peptide leaves the P-site tRNA in the order Met–Ala–Phe–Glu–Pro.'],
      disassemble: ['Ribosome-associated components separate', 'The mRNA remains, and use in translation does not destroy the tRNAs.'],
      complete: ['The example peptide has formed and been released', 'This page stops at peptide release and does not simulate later folding.'],
    };
    if (mode.mode !== 'elongate') return descriptions[mode.mode];
    return {
      enter: [`tRNA carrying ${codon.aminoAcid.short} enters the A site`, 'The matching tRNA brings an amino acid beside the mRNA codon.'],
      pair: [`Codon ${codon.rna} pairs with an anticodon`, `mRNA 5′-${codon.rna}-3′ aligns antiparallel with tRNA 3′-${codon.anticodonAligned}-5′.`],
      bond: ['A peptide bond forms; the chain transfers to the A site', `The chain transfers to ${codon.aminoAcid.short} on the A-site tRNA, adding a new residue at the C terminus.`],
      translocate: ['Advance one codon for the next cycle', 'The ribosome advances three bases; the chain-bearing tRNA moves from A to P.'],
    }[mode.subphase];
  }
  switch (state.chapter.key) {
    case 'dna': return ['当前基因的一条链作为模板', '两条 DNA 链反向平行，A—T、G—C 配对。'];
    case 'transcription': {
      const index = state.transcription.index;
      return [`第 ${index + 1} 个核苷酸 · ${TEMPLATE_DNA[index]} → ${RNA[index]}`, '模板链按 3′→5′方向读取，RNA 按 5′→3′方向延长。'];
    }
    case 'export': return ['通过核孔，进入细胞质', 'mRNA 经过核孔进入细胞质，DNA 留在细胞核内。'];
    case 'comparison': return ['五个残基，六个读取单位', '点击已生成的氨基酸，可反查 mRNA 密码子和 DNA 位置。'];
    default: break;
  }
  const t = state.translation, codon = CODONS[t.codonIndex];
  const descriptions = {
    scan: ['寻找指定起始位置', '本例从 mRNA 位置 7 的 AUG 开始读取。'],
    initiate: ['起始 tRNA 进入 P 位', 'AUG 指定甲硫氨酸（Met），起始 tRNA 与它反向平行配对。'],
    assemble: ['大小亚基组成起始复合体', 'Met 仍连在起始 tRNA 上，下一个密码子将进入 A 位。'],
    stop: ['UAA 进入 A 位', 'UAA 是终止信号，不指定第六个氨基酸。'],
    'release-factor': ['释放因子识别终止密码子', '释放因子进入 A 位，启动多肽释放过程。'],
    release: ['释放五个残基组成的多肽', '多肽从 P 位 tRNA 释放，顺序为 Met—Ala—Phe—Glu—Pro。'],
    disassemble: ['核糖体相关组分解离', 'mRNA 保留，tRNA 也没有被使用过程销毁。'],
    complete: ['示例多肽已经形成并释放', '本页结束于多肽释放，不模拟后续折叠。'],
  };
  if (t.mode !== 'elongate') return descriptions[t.mode];
  return {
    enter: [`${codon.aminoAcid.short} 的 tRNA 进入 A 位`, '氨基酸由对应的 tRNA 携带到 mRNA 密码子旁。'],
    pair: [`密码子 ${codon.rna} 与反密码子配对`, `mRNA 5′-${codon.rna}-3′ 与 tRNA 3′-${codon.anticodonAligned}-5′ 反向平行对齐。`],
    bond: ['形成肽键，肽链转移到 A 位', `肽链转移到 A 位 tRNA 携带的 ${codon.aminoAcid.short} 上，新残基接在 C 端。`],
    translocate: ['前进一个密码子，进入下一轮', '核糖体前进三个碱基，载链 tRNA 从 A 位移到 P 位。'],
  }[t.subphase];
}

function updateStructureAccess() {
  let types = ['template', 'coding'];
  if (snapshot.chapter.id === 1) types.push('polymerase');
  if (snapshot.rnaCount) types.push('rna');
  if (snapshot.chapter.id === 2) types.push('pore');
  if (snapshot.chapter.id === 3) types = ['rna', 'ribosome', ...(!['scan', 'disassemble', 'complete'].includes(snapshot.translation.mode) ? ['trna'] : [])];
  if (snapshot.peptideCount) types.push('peptide');
  const element = $('structure-access');
  if (element.dataset.types !== types.join(',')) {
    element.dataset.types = types.join(',');
    element.innerHTML = types.map((type) => `<button data-structure="${type}">${structures()[type][0]}</button>`).join('');
  }
  element.querySelectorAll('button').forEach((button) => button.setAttribute('aria-pressed', String(store.selected?.type === button.dataset.structure)));
}
$('structure-access').addEventListener('click', (event) => {
  const button = event.target.closest('[data-structure]');
  if (button) objectLesson.open(button.dataset.structure, button);
});

function render() {
  if (whiteboard?.isActive()) { scene?.render(); return; }
  if (objectLesson.isActive()) return;
  snapshot = derive(store.time);
  if (!isSelectionAvailable(store.selected)) store.selected = null;
  if (entrance.active) {
    const viewportScale = entranceUI.update(entrance.time);
    scene?.update(derive(0), { ...store, time: 0, playing: false, ambientMotion: false, labels: false, expanded: false, selected: null, entrance: { active: true, time: entrance.time, viewportScale } });
  } else {
    scene?.update(snapshot, { ...store, labels: store.labels, expanded: store.expanded, selected: store.selected });
  }
  scene?.render();
  updateViewControls();
  $('dna-idle').hidden = snapshot.chapter.id !== 0 || !!fallback;
  $('dna-idle').disabled = store.reducedMotion || store.expanded;
  $('dna-idle').setAttribute('aria-pressed', String(store.ambientMotion && !store.reducedMotion));
  $('dna-idle').textContent = store.ambientMotion && !store.reducedMotion ? t('暂停旋转', 'Pause rotation') : t('播放旋转', 'Play rotation');
  fallback?.update(snapshot, store);
  $('progress').value = String(store.time);
  $('progress-value').textContent = `${Math.round(store.time / TOTAL * 100)}%`;
  $('progress').setAttribute('aria-valuetext', t(`${NAMES[snapshot.chapter.id]}，全程 ${Math.round(store.time / TOTAL * 100)}%`, `${chapterName(snapshot.chapter.id)}, ${Math.round(store.time / TOTAL * 100)}% of lesson`));
  const signature = [snapshot.chapter.id, snapshot.step, snapshot.rnaCount, snapshot.peptideCount, snapshot.phase, snapshot.translation.subphase, JSON.stringify(store.selected)].join('|');
  if (signature === uiSignature) return;
  uiSignature = signature;
  const chapterId = snapshot.chapter.id;
  document.body.dataset.chapter = snapshot.chapter.key;
  document.body.dataset.rnaCount = String(snapshot.rnaCount);
  document.body.dataset.peptideCount = String(snapshot.peptideCount);
  $('stage-title').textContent = (isEn() ? EN_TITLES : TITLES)[chapterId];
  $('observation').textContent = (isEn() ? EN_HINTS : HINTS)[chapterId];
  $('translation-site-note').hidden = chapterId !== 3;
  const book=bookForObject(['template','polymerase','pore','ribosome','peptide'][chapterId],{chapter:chapterId});
  $('chapter-book').textContent=t(`教材 P${book.page} · ${chapterId===2?'正文':chapterId===3||chapterId===4?'图4-7':'图4-4'}`, `Textbook p. ${book.page} · ${chapterId===2?'text':chapterId===3||chapterId===4?'Fig. 4-7':'Fig. 4-4'}`);
  $('chapter-book').href=book.url;
  $('chapter-book').dataset.bookLabel=book.label;
  $('chapter-book').setAttribute('aria-label',t(`2019版人教生物必修2，${book.label}，在窗口查看教材扫描页`, `People's Education Press Biology 2 (2019), ${book.label}; open scanned textbook page in a dialog`));
  $('progress-label').textContent = t(`全程进度 · ${NAMES[chapterId]}`, `Lesson progress · ${chapterName(chapterId)}`);
  chapterButtons.forEach((button) => {
    if (Number(button.dataset.chapter) === chapterId) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
  });
  positionChapterIndicator(chapterId, store.playing);
  $('expand').hidden = chapterId !== 0 || !!fallback;
  $('rna-count').textContent = String(snapshot.rnaCount);
  $('peptide-count').textContent = String(snapshot.peptideCount);
  const [title, description] = teachingCaption(snapshot);
  $('step-title').textContent = title; $('step-description').textContent = description;
  $('sequence-hint').textContent = chapterId < 3 ? t('两条 DNA 链按同一位置对齐。RNA 随转录逐位生成，· 表示尚未生成。', 'The two DNA strands align by position. RNA is made one nucleotide at a time; · marks positions not yet made.') : t('编码区按三个碱基一组读取，前后非翻译区不分为密码子。点击字母或已生成残基可反查位置。', 'The coding region is read in triplets. Flanking untranslated regions are not grouped into codons. Select a base or completed residue to trace its position.');
  $('sequences').querySelector('[data-row="rna"]').hidden = chapterId === 0;
  $('regions').hidden = chapterId < 3;
  $('sequences').querySelectorAll('.base-track').forEach((track) => track.classList.toggle('codon-mode', chapterId >= 3));
  $('sequences').querySelectorAll('.base-cell').forEach((cell) => {
    const index = Number(cell.dataset.index), type = cell.dataset.type, pending = type === 'rna' && index >= snapshot.rnaCount, region = regionAt(index);
    cell.disabled = pending; cell.textContent = pending ? '·' : (type === 'coding' ? CODING_DNA : type === 'template' ? TEMPLATE_DNA : RNA)[index];
    cell.classList.toggle('pending', pending); cell.classList.toggle('active', !pending && snapshot.activeIndices.includes(index));
    cell.classList.toggle('selected', !pending && !!store.selected?.indices?.includes(index));
    cell.classList.toggle('utr', chapterId >= 3 && region.startsWith('utr'));
    cell.classList.toggle('coding', region === 'coding' || region === 'stop'); cell.classList.toggle('stop', region === 'stop');
    cell.classList.toggle('codon-start', index >= 6 && index < 24 && (index - 6) % 3 === 0);
    cell.classList.toggle('codon-end', index >= 6 && index < 24 && (index - 6) % 3 === 2);
    cell.setAttribute('aria-pressed', String(!pending && !!store.selected?.indices?.includes(index)));
    const base = (type === 'coding' ? CODING_DNA : type === 'template' ? TEMPLATE_DNA : RNA)[index];
    cell.setAttribute('aria-label', isEn() ? `${type === 'coding' ? 'DNA coding strand' : type === 'template' ? 'DNA template strand' : 'RNA'}, position ${index + 1}, ${pending ? 'not yet made' : base}` : `${type === 'coding' ? 'DNA 编码链' : type === 'template' ? 'DNA 模板链' : 'RNA'} 第 ${index + 1} 位 ${pending ? '尚未生成' : base}`);
  });
  $('amino-row').hidden = chapterId < 3;
  $('amino-row').querySelectorAll('[data-amino]').forEach((button) => {
    const index = Number(button.dataset.amino), pending = index >= snapshot.peptideCount, amino = AMINO_ACIDS[index];
    button.disabled = pending; button.classList.toggle('amino-pending', pending);
    button.innerHTML = pending ? '·' : `${amino.short}<small>${aminoName(amino)}</small>`;
    button.setAttribute('aria-label', pending ? t(`第 ${index + 1} 个残基尚未加入`, `Residue ${index + 1} has not yet joined`) : `${amino.short} ${aminoName(amino)}`);
    button.setAttribute('aria-pressed', String(!!store.selected?.indices?.includes(amino.start)));
  });
  $('amino-row').querySelectorAll('.peptide-link').forEach((link, index) => { link.style.opacity = index + 1 < snapshot.peptideCount ? '1' : '.2'; });
  $('comparison-notes').hidden = chapterId !== 4;
  $('previous').disabled = store.time === 0;
  $('next').disabled = store.time === TOTAL;
  updateStructureAccess(); updateInspector();
}

function resetTeachingForEntrance() {
  const wasActive = entrance.active;
  store.time = 0;
  store.playing = false;
  store.ambientMotion = true;
  store.labels = false;
  store.expanded = false;
  store.selected = null;
  store.viewMode = 'overview';
  previousStamp = 0;
  if (store.panelOpen) setPanelOpen(false);
  if (!wasActive) {
    scene?.resetView?.();
    scene?.setView?.('overview');
  }
  uiSignature = '';
  render();
}

function canReplayEntrance() {
  return entrance.eligible && !store.reducedMotion && !fallback && !!scene
    && scene.getMetrics?.()?.modelEdition === 'exhibit-v12'
    && typeof scene.prepareEntrance === 'function' && typeof scene.finishEntrance === 'function';
}

function completeEntrance(reason = 'complete') {
  if (!entrance.active) return false;
  entrance.active = false;
  entrance.phase = 'complete';
  entrance.reason = reason;
  entrance.lastStamp = 0;
  entrance.paused = false;
  entrance.atEndRendered = false;
  entranceUI.finish();
  scene?.finishEntrance?.();
  render();
  requestSceneFrame();
  return true;
}

function finishLoadingEntrance(reason = 'interrupted') {
  if (!['waiting', 'loading'].includes(entrance.phase)) return false;
  if (reason === 'skipped') entrance.autoSkipped = true;
  entrance.pendingSkip = true;
  entrance.reason = reason;
  entrance.active = false;
  entrance.phase = 'complete';
  entrance.lastStamp = 0;
  cancelAnimationFrame(clockFrame);
  clockFrame = 0;
  scene?.finishEntrance?.();
  entranceUI.finish();
  return true;
}

function skipEntrance() {
  if (entrance.phase === 'active') {
    resetTeachingForEntrance();
    completeEntrance('skipped');
    return;
  }
  if (['waiting', 'loading'].includes(entrance.phase)) {
    resetTeachingForEntrance();
    finishLoadingEntrance('skipped');
  }
}

function interruptEntrance(reason = 'state-change') {
  if (entrance.active) completeEntrance(reason);
  else if (['waiting', 'loading'].includes(entrance.phase)) finishLoadingEntrance(reason);
}

async function startEntrance({ replay = false, pausedAt = null } = {}) {
  if (!entrance.eligible || store.reducedMotion || fallback || !scene
      || typeof scene.prepareEntrance !== 'function' || typeof scene.finishEntrance !== 'function') return false;
  if (!replay && pausedAt === null && entrance.autoSkipped) {
    return false;
  }
  if (entrance.active) {
    if (replay) completeEntrance('replay');
    else {
      if (pausedAt !== null) {
        entrance.paused = true;
        entrance.time = Math.min(9, Math.max(0, Number(pausedAt) || 0));
        entrance.elapsed = entrance.time;
        entrance.lastStamp = 0;
        entrance.atEndRendered = false;
        cancelAnimationFrame(clockFrame);
        clockFrame = 0;
        render();
      }
      return true;
    }
  }
  if (entrance.phase === 'loading') return false;
  if (replay || pausedAt !== null) resetTeachingForEntrance();
  cancelAnimationFrame(clockFrame);
  clockFrame = 0;
  previousStamp = 0;
  entrance.phase = 'loading';
  entrance.time = 0;
  entrance.elapsed = 0;
  entrance.lastStamp = 0;
  entrance.paused = pausedAt !== null;
  entrance.atEndRendered = false;
  entrance.pendingSkip = false;
  entrance.prepared = false;
  entrance.error = null;
  entrance.reason = null;
  entranceUI.showLoading({ focus: replay });
  try {
    const ready = await scene.prepareEntrance({ time: 0, selected: null, expanded: false, ambientMotion: false, playing: false });
    entrance.prepared = ready !== false;
  } catch (error) {
    entrance.error = error instanceof Error ? error.message : String(error);
    entrance.reason = 'prepare-failed';
    entrance.phase = 'disabled';
    entrance.eligible = false;
    entranceUI.cancel();
    render();
    return false;
  }
  if (!entrance.prepared && !entrance.pendingSkip && !store.reducedMotion) {
    // Some scene editions do not support the opening. Keep their normal pose and UI.
    scene.finishEntrance();
    entrance.phase = 'disabled';
    entrance.reason = 'unsupported-model';
    entrance.eligible = false;
    entranceUI.cancel();
    render();
    requestSceneFrame();
    return false;
  }
  if (entrance.pendingSkip || entranceUI.skipRequested || store.reducedMotion) {
    if (entrance.prepared) scene.finishEntrance();
    entrance.phase = 'complete';
    entrance.reason ||= store.reducedMotion ? 'reduced-motion' : 'skipped';
    render();
    requestSceneFrame();
    return false;
  }
  if (!entranceUI.activate()) {
    scene.finishEntrance();
    entrance.phase = 'complete';
    entrance.reason = 'ui-unavailable';
    entranceUI.cancel();
    render();
    return false;
  }
  entrance.active = true;
  entrance.phase = 'active';
  entrance.time = pausedAt === null ? 0 : Math.min(9, Math.max(0, Number(pausedAt) || 0));
  entrance.elapsed = entrance.time;
  entrance.lastStamp = 0;
  entrance.atEndRendered = false;
  render();
  if (!entrance.paused) requestSceneFrame();
  return true;
}

function replayEntrance() {
  if (store.reducedMotion) return false;
  return startEntrance({ replay: true });
}

function setTime(time) { if(whiteboard?.isActive())return; pendingSeek++; clearChapterLoading(); interruptEntrance('seek'); scene?.resetAmbient?.(); store.time = clampTime(time); render(); updatePlayControl(); }
let pendingSeek = 0, waitingForChapter = false;
function clearChapterLoading() {
  $('chapter-loading')?.remove();
  $('scene').removeAttribute('aria-busy');
  waitingForChapter = false;
  $('play').disabled = false;
}
function showChapterLoading(request) {
  if (request !== pendingSeek || sceneDisposed || objectLesson.isActive() || whiteboard?.isActive() || $('chapter-loading')) return;
  const notice = document.createElement('div');
  notice.id = 'chapter-loading';
  notice.className = 'scene-loading';
  notice.setAttribute('role', 'status');
  notice.textContent = t('正在准备转录模型…', 'Preparing the transcription model…');
  notice.style.cssText = 'z-index:20;background:#132427;color:#c3d2c8;pointer-events:none;';
  $('scene').append(notice);
  $('scene').setAttribute('aria-busy', 'true');
}
function scheduleChapterLoading(request) {
  return setTimeout(() => showChapterLoading(request), 150);
}
async function paintChapterLoading(request) {
  showChapterLoading(request);
  // Let the loading state reach the screen before decoding a model or compiling shaders.
  await new Promise(resolve => document.hidden ? setTimeout(resolve, 0)
    : requestAnimationFrame(() => setTimeout(resolve, 0)));
}
async function seekWhenReady(time, { resetView = false } = {}) {
  if (whiteboard?.isActive()) return;
  const request = ++pendingSeek;
  clearChapterLoading();
  interruptEntrance('seek');
  const targetTime = clampTime(time);
  // The polymerase already enters the DNA shot at 3.25 s, before the chapter
  // boundary at 4 s. A direct scrub there needs the same preparation as Play.
  if (scene && targetTime >= 3.25 && derive(targetTime).chapter.id <= 1 && !scene.isDeferredAssetsReady?.()) {
    waitingForChapter = true;
    $('play').disabled = true;
    await paintChapterLoading(request);
    if (request !== pendingSeek || sceneDisposed || objectLesson.isActive() || whiteboard?.isActive()) return;
    try { await scene.startDeferredAssets?.(); }
    catch (error) { console.info('基因表达：后续章节模型未能完整载入。', error); }
    finally { if (request === pendingSeek) clearChapterLoading(); }
    if (request !== pendingSeek || sceneDisposed || objectLesson.isActive()) return;
  }
  if (request !== pendingSeek || whiteboard?.isActive()) return;
  if (resetView) scene?.resetView();
  setTime(targetTime);
}
function updatePlayControl() {
  const label = store.playing ? t('暂停', 'Pause') : store.time >= TOTAL ? t('重播演示', 'Replay lesson') : store.time <= 0.01 ? t('开始演示', 'Start lesson') : t('继续播放', 'Resume');
  $('play-text').textContent = label;
  $('play-icon').textContent = store.playing ? 'Ⅱ' : '▶';
  $('play').setAttribute('aria-label', label);
  $('play').setAttribute('aria-pressed', String(store.playing));
}
function pause() {
  if (waitingForChapter) { pendingSeek++; clearChapterLoading(); }
  store.playing = false; store.ambientMotion = false; previousStamp = 0;
  updatePlayControl();
}
function waitForTranscriptionDuringPlayback() {
  const request = ++pendingSeek;
  waitingForChapter = true;
  const loadingTimer = scheduleChapterLoading(request);
  void scene.startDeferredAssets?.().catch(error => {
    console.info('基因表达：转录模型载入失败，沿用备用展品。', error);
  }).finally(() => {
    clearTimeout(loadingTimer);
    if (request !== pendingSeek || sceneDisposed || objectLesson.isActive() || whiteboard?.isActive()) return;
    clearChapterLoading();
    store.time = CHAPTERS[1].start;
    previousStamp = 0;
    render();
    if (store.playing) requestSceneFrame();
  });
}
function tick(stamp) {
  clockFrame = 0;
  if(whiteboard?.isActive()){scene?.render();return;}
  if(!scene && !fallback)return;
  if (document.hidden || objectLesson.isActive()) return;
  if (entrance.phase === 'loading') return;
  if (entrance.active) {
    if (entrance.atEndRendered && !entrance.paused) { completeEntrance('complete'); return; }
    if (!entrance.paused) {
      if (entrance.lastStamp) entrance.time = Math.min(9, entrance.time + Math.max(0, stamp - entrance.lastStamp) / 1000);
      entrance.lastStamp = stamp;
      entrance.elapsed = entrance.time;
    }
    render();
    if (!entrance.paused && entrance.time >= 9) entrance.atEndRendered = true;
    if (!entrance.paused) requestSceneFrame();
    return;
  }
  if (store.playing && previousStamp) {
    const dt = Math.min((stamp - previousStamp) / 1000, .12);
    const nextTime = clampTime(store.time + dt * store.speed / 1.65);
    if (scene && store.time < CHAPTERS[1].start && nextTime >= CHAPTERS[1].start && !scene.isDeferredAssetsReady?.()) {
      store.time = CHAPTERS[1].start - 0.00001;
      previousStamp = 0;
      render();
      waitForTranscriptionDuringPlayback();
      return;
    }
    store.time = nextTime;
  }
  previousStamp = store.playing ? stamp : 0;
  render();
  if (store.playing && store.time >= TOTAL) pause();
  if (store.playing) requestSceneFrame();
}
function requestSceneFrame() {
  if (entrance.phase === 'loading' || (entrance.active && entrance.paused)) return;
  if (!clockFrame && !document.hidden && !objectLesson.isActive()) clockFrame = requestAnimationFrame(tick);
}
async function play() {
  if(whiteboard?.isActive())return;
  if (waitingForChapter) {
    if (store.playing) { pause(); render(); }
    return;
  }
  pendingSeek++; clearChapterLoading();
  interruptEntrance('play');
  if (store.reducedMotion) { void seekWhenReady(nextStep(store.time)); return; }
  if (store.playing) { pause(); render(); return; }
  if (store.time === TOTAL) { store.selected = null; setTime(0); }
  // Full protein geometry and its shader variants must be ready before the
  // DNA-to-transcription camera move begins. Otherwise their first compilation
  // blocks visible playback near 3.25 s, even when the network response is fast.
  if (scene && derive(store.time).chapter.id === 0 && !scene.isDeferredAssetsReady?.()) {
    const request = ++pendingSeek;
    waitingForChapter = true;
    $('play').disabled = true;
    await paintChapterLoading(request);
    if (request !== pendingSeek || sceneDisposed || objectLesson.isActive() || whiteboard?.isActive()) return;
    try { await scene.startDeferredAssets?.(); }
    catch (error) { console.info('基因表达：转录模型载入失败，沿用备用展品。', error); }
    finally { if (request === pendingSeek) clearChapterLoading(); }
    if (request !== pendingSeek || sceneDisposed || objectLesson.isActive() || whiteboard?.isActive()) return;
  }
  scene?.beginPlayback?.(store.speed/1.65);
  store.playing = true; store.ambientMotion = false; previousStamp = 0;
  updatePlayControl();
  requestSceneFrame();
}
$('play').addEventListener('click', play);
$('previous').addEventListener('click', () => { pause(); void seekWhenReady(previousStep(store.time)); });
$('next').addEventListener('click', () => { pause(); void seekWhenReady(nextStep(store.time)); });
$('progress').addEventListener('input', (event) => { pause(); void seekWhenReady(Number(event.target.value)); });
$('reset').addEventListener('click', () => { pause(); store.selected = null; store.expanded = false; store.ambientMotion = true; $('expand').setAttribute('aria-pressed', 'false'); void seekWhenReady(0, { resetView: true }); });
$('dna-idle').addEventListener('click', () => { const wasAmbient=store.ambientMotion; pause(); store.ambientMotion=!wasAmbient; render(); requestSceneFrame(); });
document.querySelectorAll('[data-speed]').forEach((button) => button.addEventListener('click', () => {
  store.speed = Number(button.dataset.speed);
  document.querySelectorAll('[data-speed]').forEach((other) => other.setAttribute('aria-pressed', String(other === button)));
}));
$('labels').addEventListener('click', () => { store.labels = !store.labels; $('labels').setAttribute('aria-pressed', String(store.labels)); render(); });
$('expand').addEventListener('click', () => { store.expanded = !store.expanded; $('expand').setAttribute('aria-pressed', String(store.expanded)); render(); scene?.resetView(); });
$('view-reaction').addEventListener('click', () => { store.viewMode = 'reaction'; scene?.setView?.('reaction'); updateViewControls(); });
$('view-overview').addEventListener('click', () => { store.viewMode = 'overview'; scene?.setView?.('overview'); updateViewControls(); });
$('view-reset').addEventListener('click', () => { scene?.resetView(); updateViewControls(); });
function setPerspectiveButton(enabled) {
  const button = $('protein-perspective');
  button.setAttribute('aria-pressed', String(enabled));
  button.title = enabled ? t('关闭透视效果', 'Turn perspective off') : t('开启透视效果', 'Turn perspective on');
}
setPerspectiveButton(true);
$('protein-perspective').addEventListener('click', () => {
  const enabled = $('protein-perspective').getAttribute('aria-pressed') !== 'true';
  setPerspectiveButton(enabled);
  scene?.setPerspective?.(enabled);
});
$('zoom-in').addEventListener('click', () => scene?.zoom(1));
$('zoom-out').addEventListener('click', () => scene?.zoom(-1));
$('details-toggle').addEventListener('click', () => setPanelOpen(!store.panelOpen));
$('panel-close').addEventListener('click', () => setPanelOpen(false, { returnFocus: true }));
PREFERS_REDUCED.addEventListener('change', () => {
  if (PREFERS_REDUCED.matches) skipEntrance();
  pause(); store.reducedMotion = PREFERS_REDUCED.matches; objectLesson.setReducedMotion(store.reducedMotion);
  render();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (!entrance.active && entrance.phase !== 'loading') pause();
    entrance.lastStamp = 0;
    previousStamp = 0;
    cancelAnimationFrame(clockFrame); clockFrame = 0;
  } else {
    entrance.lastStamp = 0;
    previousStamp = 0;
    requestSceneFrame();
  }
});
document.addEventListener('keydown', (event) => {
  if(whiteboard?.isActive())return;
  if (entrance.active || ['waiting','loading'].includes(entrance.phase)) {
    if (event.key === 'Escape') { event.preventDefault(); skipEntrance(); }
    return;
  }
  if (objectLesson.isActive()) return;
  if ($('sources').open || textbookDialog.isOpen()) return;
  if (event.key === 'Escape') {
    if (!objectMenu.hidden) { closeObjectMenu(); $('objects-toggle').focus({preventScroll:true}); return; }
    if (store.panelOpen) { event.preventDefault(); setPanelOpen(false, { returnFocus: true }); return; }
    if (store.selected) { closeInspector(false); return; }
  }
  if (event.target.closest('input,textarea,select,button,a,[contenteditable="true"],summary')) return;
  if (event.code === 'Space') { event.preventDefault(); play(); }
  if (event.code === 'ArrowRight') { event.preventDefault(); pause(); void seekWhenReady(nextStep(store.time)); }
  if (event.code === 'ArrowLeft') { event.preventDefault(); pause(); void seekWhenReady(previousStep(store.time)); }
});
$('sources-open').addEventListener('click', () => { pause(); render(); $('sources').showModal(); });
$('sources-close').addEventListener('click', () => $('sources').close());
$('sources').addEventListener('click', (event) => { if (event.target === $('sources')) { const rect = $('sources').getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) $('sources').close(); } });

function quizQuestions() {
  return isEn() ? [
    ['Which RNA base pairs with A on the template strand?', ['U', 'T', 'A'], 0, 'Template A pairs with RNA U. RNA uses U rather than T.'],
    ['Why do six read codons yield only five amino acids?', ['UAA is a stop signal', 'The last tRNA disappears', 'Pro is not added'], 0, 'A release factor recognizes UAA, which specifies no amino acid. All five residues remain.'],
    ['Which mRNA codon specifies Pro here?', ['CCG', 'GCU', 'UAA'], 0, 'Pro corresponds to CCG at RNA positions 19–21 in this example. Select the residue below or in 3D to trace it.'],
  ] : [
    ['模板链上的 A 对应哪一种 RNA 碱基？', ['U', 'T', 'A'], 0, '正确配对是模板 A → RNA U，RNA 使用 U 而不是 T。'],
    ['为什么六个读取单位只得到五个氨基酸？', ['UAA 是终止信号', '最后一个 tRNA 消失了', 'Pro 没有加入'], 0, 'UAA 由释放因子识别，不对应氨基酸；五个残基全部保留。'],
    ['Pro 对应哪个 mRNA 密码子？', ['CCG', 'GCU', 'UAA'], 0, 'Pro 对应 CCG，位于本例 RNA 第 19–21 位。下方和三维残基都可以点击追踪。'],
  ];
}
function buildQuiz() {
  const questions = quizQuestions();
  const container = $('quiz-content');
  if (!container.children.length) container.innerHTML = questions.map(([question, options], index) => `<div class="quiz-question" data-question="${index}"><p>${index + 1}. ${question}</p>${options.map((option, choice) => `<button data-choice="${choice}">${option}</button>`).join('')}<div class="quiz-answer" role="status"></div></div>`).join('');
  else container.querySelectorAll('[data-question]').forEach((item, index) => {
    const [question, options, correct, explanation] = questions[index];
    item.querySelector('p').textContent = `${index + 1}. ${question}`;
    item.querySelectorAll('[data-choice]').forEach((button, choice) => { button.textContent = options[choice]; });
    if (item.dataset.selectedChoice !== undefined) {
      item.querySelector('.quiz-answer').textContent = `${Number(item.dataset.selectedChoice) === correct ? t('答对了。', 'Correct. ') : t('再想一想。', 'Try again. ')}${explanation}`;
    }
  });
}
$('quiz-content').addEventListener('click', (event) => {
  const button = event.target.closest('[data-choice]'); if (!button) return;
  const item = button.closest('[data-question]'), question = quizQuestions()[Number(item.dataset.question)];
  item.dataset.selectedChoice = button.dataset.choice;
  item.querySelector('.quiz-answer').textContent = `${Number(button.dataset.choice) === question[2] ? t('答对了。', 'Correct. ') : t('再想一想。', 'Try again. ')}${question[3]}`;
});
buildQuiz();

function createFallback(reason) {
  // Original SVG uses the same derived snapshot as the 3D renderer, including backward seeks.
  const container = $('scene'); container.replaceChildren();
  const banner = document.createElement('p'); banner.className = 'fallback-banner'; banner.textContent = reason; container.append(banner);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox', '0 0 1000 460'); svg.setAttribute('class', 'fallback-svg'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', t('基因表达二维教学示意', '2D gene-expression teaching diagram')); container.append(svg);
  $('zoom-in').disabled = true; $('zoom-out').disabled = true; $('view-reset').disabled = true; $('expand').hidden = true;
  function update(state, options) {
    const translation = state.chapter.id === 3, exportStage = state.chapter.id === 2, comparison = state.chapter.id === 4;
    let markup = '<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#8a7c52"/></marker></defs>';
    function strand(sequence, count, y, type, left, right) {
      markup += `<line x1="90" x2="900" y1="${y}" y2="${y}" stroke="#c3b99d" stroke-width="2"/><text x="57" y="${y+6}" font-size="14" fill="#7b7160">${left}</text><text x="915" y="${y+6}" font-size="14" fill="#7b7160">${right}</text>`;
      for (let i = 0; i < count; i++) {
        const x = 90 + i * 27, selected = options.selected?.indices?.includes(i) || state.activeIndices.includes(i);
        markup += `<g data-svg-type="${type}" data-svg-index="${i}" ${comparison ? `tabindex="0" role="button" aria-label="${isEn() ? `${type}, position ${i+1}, ${sequence[i]}` : `${type} 第${i+1}位 ${sequence[i]}`}"` : ''}><rect x="${x-9}" y="${y-11}" width="21" height="24" rx="5" fill="${selected ? '#e2cb8a' : BASE_COLORS[sequence[i]]}" stroke="${selected ? '#9b7730' : '#ffffff'}"/><text x="${x+1}" y="${y+6}" text-anchor="middle" font-size="14" fill="#423e33">${sequence[i]}</text></g>`;
      }
    }
    if (exportStage) {
      const q = (state.time - 34) / 4;
      markup += `<path d="M480 130L480 215M480 285L480 365" stroke="#b9bba5" stroke-width="12"/><rect x="470" y="215" width="20" height="70" rx="7" fill="none" stroke="#bda469" stroke-width="5"/><text x="275" y="170" font-size="18" fill="#8f927b">${L('细胞核内', 'Inside nucleus')}</text><text x="660" y="170" font-size="18" fill="#8f927b">${L('细胞质', 'Cytoplasm')}</text><text x="462" y="320" font-size="12" fill="#8a7745">${L('核孔', 'Nuclear pore')}</text><text x="260" y="220" font-size="17" fill="#7b8070">${L('DNA 留在核内', 'DNA stays in nucleus')}</text>`;
      const x = 310 + q * 360;
      markup += `<path d="M${x-38} 247q19 -18 38 0t38 0" fill="none" stroke="#b39cb7" stroke-width="5"/><text x="${x-18}" y="280" font-size="12" fill="#74657b">mRNA</text>`;
    } else if (translation) {
      strand(RNA, state.rnaCount, 312, 'rna', '5′', '3′');
      const t = state.translation, x = 90 + (7 + (t.ribosomeCodon ?? 4)*3)*27;
      const pIndex = t.pCodonIndex ?? 4;
      const pWorld = 90 + (7 + pIndex * 3) * 27;
      const aWorld = 90 + (7 + (t.aCodonIndex ?? 5) * 3) * 27;
      let chainAnchor = pWorld + 20;
      const drawTrna = (tx,ty,codonIndex,label,empty=false) => {
        markup += `<g><path d="M${tx} ${ty+55}V${ty}H${tx+20}" fill="none" stroke="${empty ? '#c0c3b9' : '#b39bb9'}" stroke-width="8"/><text x="${tx-16}" y="${ty-9}" font-size="10" fill="#8c728e">${label}</text></g>`;
      };
      if (!['complete'].includes(t.mode)) {
        const split = t.mode === 'disassemble' ? t.phase*55 : 0;
        markup += `<path d="M${x-46} ${288-split}C${x-64} ${181-split} ${x+121} ${181-split} ${x+132} ${288-split}Z" fill="#c1ccb7" stroke="#8f9d80"/><ellipse cx="${x+43}" cy="${344+split}" rx="94" ry="21" fill="#d3ceb6" stroke="#aaa385"/>`;
        if (t.mode === 'initiate') { const ty=247-(1-t.phase)*45; drawTrna(pWorld,ty,0,L('起始 tRNA / P', 'Initiator tRNA / P')); chainAnchor=pWorld+20; }
        else if (!['scan','disassemble','complete'].includes(t.mode)) {
          if (t.mode === 'elongate' && t.subphase === 'translocate') {
            // Codon-bound carriers stay in RNA coordinates as the ribosome advances around them.
            drawTrna(pWorld-t.phase*35,247-t.phase*40,pIndex,L('空载 / P→E', 'Unloaded / P→E'),true);
          } else drawTrna(pWorld,247,pIndex,t.chainSite==='A'?L('空载 / P', 'Unloaded / P'):L('载链 / P', 'Chain-bearing / P'),t.chainSite==='A');
        }
        if (t.mode === 'elongate') {
          const ay = t.subphase === 'enter' ? 217+t.phase*30 : 247;
          drawTrna(aWorld,ay,t.codonIndex,t.subphase==='translocate'?L('载链 / A→P', 'Chain-bearing / A→P'):t.chainSite==='A'?L('载链 / A', 'Chain-bearing / A'):L('氨酰 / A', 'Aminoacyl / A'));
          if (['pair','bond'].includes(t.subphase)) markup += `<text x="${aWorld-20}" y="329" font-size="10" fill="#8c728e">3′-${CODONS[t.codonIndex].anticodonAligned}-5′</text>`;
          if (t.chainSite === 'A' || t.subphase === 'translocate') chainAnchor = aWorld + 20;
          // Before peptide transfer the incoming residue remains attached to its own tRNA.
          if (t.subphase !== 'translocate' && !(t.subphase === 'bond' && t.phase >= .7)) markup += `<circle cx="${aWorld+20}" cy="${ay}" r="16" fill="#e7d8ad" stroke="#b7a578"/><text x="${aWorld+20}" y="${ay+4}" text-anchor="middle" font-size="10">${AMINO_ACIDS[t.codonIndex].short}</text>`;
        }
        if (['release-factor','release'].includes(t.mode)) markup += `<path d="M${x+66} 252l16 -22 16 22-16 15Z" fill="#cbb678"/><text x="${x+62}" y="220" font-size="10" fill="#907445">${L('释放因子', 'Release factor')}</text>`;
      }
      markup += `<path d="M100 380H280" stroke="#8a7c52" marker-end="url(#arrow)"/><text x="310" y="386" font-size="11" fill="#7b7160">${L('mRNA 5′→3′ 被读取，序列保持完整', 'mRNA is read 5′→3′; its sequence remains intact')}</text>`;
      let anchorX = t.chainSite === 'released' ? 590 : chainAnchor, anchorY = t.chainSite === 'released' ? 178 : 247;
      for (let i = 0; i < state.peptideCount; i++) {
        const ax = anchorX-(state.peptideCount-1-i)*49, ay = anchorY-(state.peptideCount-1-i)*12;
        if (i) markup += `<path d="M${ax-49} ${ay-12}L${ax} ${ay}" stroke="#b9a471" stroke-width="3"/>`;
        markup += `<g><circle cx="${ax}" cy="${ay}" r="19" fill="#e7d8ad" stroke="#b7a578"/><text x="${ax}" y="${ay+4}" text-anchor="middle" font-size="11">${AMINO_ACIDS[i].short}</text></g>`;
      }
    } else {
      strand(CODING_DNA, 30, 190, 'coding', '5′', '3′'); strand(TEMPLATE_DNA, 30, 238, 'template', '3′', '5′');
      for (let i = 0; i < 30; i++) { const x=91+i*27; markup += `<line x1="${x}" x2="${x}" y1="204" y2="225" stroke="#d3cdbb" stroke-dasharray="2 3"/>`; }
      if (state.chapter.id > 0) strand(RNA, state.rnaCount, 310, 'rna', '5′', '3′');
      if (state.chapter.id === 1) { const x=91+state.transcription.index*27; markup += `<ellipse cx="${x}" cy="255" rx="33" ry="30" fill="#dcc99499" stroke="#b9a36a"/><text x="${Math.max(110,Math.min(840,x))}" y="370" text-anchor="middle" font-size="12" fill="#8e7640">${L('RNA 聚合酶 · 新核苷酸加入 3′端', 'RNA polymerase · nucleotide added at the 3′ end')}</text>`; }
      if (comparison) for (let i=0;i<5;i++) markup += `<g data-svg-type="peptide" data-svg-index="${i}" role="button" tabindex="0"><rect x="${275+i*87}" y="362" width="64" height="33" rx="10" fill="#e7d8ad" stroke="#b7a578"/><text x="${307+i*87}" y="384" text-anchor="middle" font-size="13">${AMINO_ACIDS[i].short}</text></g>`;
    }
    svg.innerHTML = markup;
  }
  const handler = (event) => { const target = event.target.closest('[data-svg-type]'); if (target) selectScene({type:target.dataset.svgType,index:Number(target.dataset.svgIndex)},target); };
  svg.addEventListener('click', handler); svg.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handler(event); } });
  return { update, setLanguage() {
    banner.textContent = new URLSearchParams(location.search).get('view') === '2d'
      ? L('二维观察模式 · 序列与教学进度保持一致', '2D view · sequence and lesson progress stay in sync')
      : L('此设备暂时无法建立三维场景，已切换为二维教学示意。', 'A 3D scene could not be created on this device. A 2D teaching diagram is shown.');
    svg.setAttribute('aria-label', L('基因表达二维教学示意', '2D gene-expression teaching diagram'));
  } };
}

function restoreWhiteboardTeachingState(frozen) {
  const saved=frozen.app || frozen.options || {};
  store.time=frozen.time;store.selected=saved.selected||null;store.expanded=!!saved.expanded;store.labels=!!saved.labels;
  store.viewMode=saved.viewMode||frozen.presentation?.viewMode||'overview';
  store.reducedMotion=!!saved.reducedMotion;pause();
}
whiteboard=createWhiteboard({getScene:()=>scene,trigger:$('whiteboard-open'),
  onFreeze(){
    pendingSeek++;clearChapterLoading();scene?.cancelDeferredWarmup?.();pause();cancelAnimationFrame(clockFrame);clockFrame=0;knowledgeHints.hide();closeObjectMenu();
    const frozen=scene.captureFrozenState({freezePresentation:true});
    frozen.app={selected:store.selected,expanded:store.expanded,labels:store.labels,viewMode:store.viewMode,reducedMotion:store.reducedMotion,panelOpen:store.panelOpen};
    const chapter=derive(frozen.time).chapter;
    // Associate notes with conformation, not sidebar layout or the current orbit.
    const contextKey=JSON.stringify([chapter.key,Number(frozen.time.toFixed(6)),Number(frozen.dnaSpin.toFixed(6)),store.expanded,store.selected,store.reducedMotion,frozen.perspectiveEnabled]);
    return {snapshot:frozen,contextKey,title:`${NAMES[chapter.id]} · ${teachingCaption(derive(frozen.time), 'zh')[0]} · ${frozen.time.toFixed(2)} s`};
  },
  onRestore:restoreWhiteboardTeachingState,
  onExit(frozen){
    restoreWhiteboardTeachingState(frozen);setPanelOpen(!!frozen.app?.panelOpen);
    $('expand').setAttribute('aria-pressed',String(store.expanded));$('labels').setAttribute('aria-pressed',String(store.labels));
    setPerspectiveButton(frozen.perspectiveEnabled!==false);
    uiSignature='';render();requestSceneFrame();
  },
});
window.addEventListener('gene-expression-languagechange', () => {
  renderObjectMenu();
  chapterButtons.forEach((button) => { button.textContent = chapterName(Number(button.dataset.chapter)); });
  localizeSequence();
  buildQuiz();
  $('structure-access').removeAttribute('data-types');
  $('chapter-loading') && ($('chapter-loading').textContent = t('正在准备转录模型…', 'Preparing the transcription model…'));
  fallback?.setLanguage();
  scene?.setLocale?.();
  pendingScene?.setLocale?.();
  setPerspectiveButton($('protein-perspective').getAttribute('aria-pressed') === 'true');
  uiSignature = '';
  if (!whiteboard?.isActive() && !objectLesson.isActive()) {
    render();
    updatePlayControl();
  }
  updateViewControls();
});
window.addEventListener('pagehide', () => { sceneDisposed=true;pause();cancelAnimationFrame(clockFrame);whiteboard?.dispose();scene?.dispose();pendingScene?.dispose(); }, {once:true});
render();
updatePlayControl();
try {
  if (new URLSearchParams(location.search).get('view') === '2d') throw new Error('二维观察模式');
  const { createScene } = await import('./scene.js?v=20261014-mobile');
  if (sceneDisposed) throw new Error('页面已离开');
  pendingScene = createScene({ container: $('scene'), onSelect: selectScene, onHover: knowledgeHints.onHover, onInvalidate: requestSceneFrame });
  const loading=$('scene-loading');
  if(loading){loading.textContent=t('正在准备动态场景…', 'Preparing the interactive scene…');loading.style.cssText='z-index:20;background:#132427;color:#c3d2c8;pointer-events:none;';}
  pendingScene.update(derive(0),{...store,playing:false,ambientMotion:false});pendingScene.render();
  await pendingScene.ready;
  if(!sceneDisposed) {
    scene=pendingScene;pendingScene=null;
    // Direct chapter links keep the loading cover until their protein model is
    // ready, rather than briefly showing the DNA-only exhibit in that chapter.
    if (derive(store.time).chapter.id === 1) await scene.startDeferredAssets?.();
    if (sceneDisposed) throw new Error('页面已离开');
    if (store.viewMode !== 'overview') scene.setView?.(store.viewMode);
    $('scene-loading')?.remove(); document.body.dataset.renderer = 'webgl'; render();
    if (entrance.eligible && !entrance.pendingSkip) void startEntrance();
    else {
      requestSceneFrame();
    }
  }
} catch (error) {
  pendingScene?.dispose();pendingScene=null;
  if(!sceneDisposed) {
  console.info('基因表达：启用二维备用视图。', error.message);
  entrance.eligible = false; entrance.active = false; entrance.phase = 'disabled'; entrance.reason = 'renderer-fallback'; entranceUI.cancel();
  fallback = createFallback(new URLSearchParams(location.search).get('view') === '2d' ? t('二维观察模式 · 序列与教学进度保持一致', '2D view · sequence and lesson progress stay in sync') : t('此设备暂时无法建立三维场景，已切换为二维教学示意。', 'A 3D scene could not be created on this device. A 2D teaching diagram is shown.'));
  document.body.dataset.renderer = 'svg'; uiSignature = ''; render();
  }
}
function seekEntrance(time) {
  if (!entrance.eligible || store.reducedMotion || fallback) return false;
  const value = Math.min(9, Math.max(0, Number(time) || 0));
  if (entrance.active) {
    entrance.paused = true;
    entrance.time = value;
    entrance.elapsed = value;
    entrance.lastStamp = 0;
    entrance.atEndRendered = false;
    cancelAnimationFrame(clockFrame); clockFrame = 0;
    render();
    return true;
  }
  return startEntrance({ pausedAt: value });
}
function getEntrance() {
  return { eligible: entrance.eligible, active: entrance.active, phase: entrance.phase, time: entrance.time, elapsed: entrance.elapsed, paused: entrance.paused, reason: entrance.reason, error: entrance.error, canReplay: canReplayEntrance(), metrics: scene?.getMetrics?.()?.entrance || null };
}
window.__GENE_EXPRESSION__ = {
  seek: (time) => { interruptEntrance('seek'); pause(); setTime(time); },
  getState: () => ({ time: store.time, playing: store.playing, snapshot: derive(store.time) }),
  getGeometry: () => scene?.getDebugGeometry?.() || null,
  getMetrics: () => scene?.getMetrics?.() || null,
  getObjectLesson: objectLesson.getState,
  getEntrance,
  getWhiteboard: () => whiteboard?.inspect(),
  seekEntrance,
  replayEntrance,
};
objectLesson.start();
