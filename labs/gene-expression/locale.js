// Static copy and the language control for the gene-expression exhibit.
// Dynamic teaching text and scene labels listen for gene-expression-languagechange.
const LANGUAGE_KEY = 'gene-expression-language';
const CHINESE_TITLE = '基因表达 · 从 DNA 到多肽';
const ENGLISH_TITLE = 'Gene Expression · From DNA to Polypeptide';
const CHINESE_DESCRIPTION = '追踪同一段人工教学序列：从 DNA 模板到 RNA，再到五个氨基酸组成的多肽。可暂停、逐步观察与双向追踪。';
const ENGLISH_DESCRIPTION = 'Follow one designed teaching sequence from a DNA template through RNA to a five-residue polypeptide. Pause, step through, and trace the sequence in both directions.';

const english = new Map(Object.entries({
  '基因表达': 'Gene expression',
  '正在准备分子序列…': 'Preparing the molecular sequence…',
  '跳过开场': 'Skip intro',
  '跳到开始演示按钮': 'Skip to the Start demonstration button',
  '从 DNA 到多肽': 'From DNA to polypeptide',
  '认识分子': 'Molecules',
  '说明与序列': 'Guide & sequence',
  'DNA 双链': 'DNA double helix',
  '查看教材': 'View textbook (Chinese)',
  '正在建立序列模型…': 'Building the sequence model…',
  '开始演示': 'Start demonstration',
  '近景': 'Close-up',
  '全景': 'Overview',
  '局部展开': 'Expand region',
  '暂停旋转': 'Pause rotation',
  '透视': 'Perspective',
  '恢复视角': 'Reset view',
  '详细标签': 'Detailed labels',
  '观察提示': 'What to observe',
  '拓展标注：本页保留 A/P/E 位点；教材图 4-7 采用位点 1、位点 2 的简化表示。': 'Extension labels: this exhibit shows A/P/E sites; textbook Figure 4-7 uses the simplified labels Site 1 and Site 2.',
  '你选中的结构': 'Selected structure',
  '单独了解这个对象 ↗': 'Explore this molecule ↗',
  '返回整体视角 ↗': 'Return to the full view ↗',
  '可查看结构': 'Structures to explore',
  '同一段序列': 'One shared sequence',
  '多肽': 'Polypeptide',
  '点击任一碱基，查看它在两条 DNA 链中的配对。': 'Select any base to see its pair across the two DNA strands.',
  '转录读取什么？': 'What does transcription read?',
  '当前基因的 DNA 模板链。': 'The DNA template strand of this gene.',
  '翻译读取什么？': 'What does translation read?',
  'mRNA 上指定读框的密码子。': 'Codons in the selected reading frame of mRNA.',
  '排列顺序如何对应？': 'How does the order correspond?',
  '每个编码密码子指定一个残基，终止密码子结束读取。': 'Each coding codon specifies one residue; the stop codon ends translation.',
  '用三个小问题检验理解': 'Check your understanding with three questions',
  '拖动进度用于回看教学过程，不代表反应逆向进行。': 'Dragging the timeline reviews the teaching sequence; it does not mean the reaction runs backward.',
  '资料来源与模型说明': 'Sources and model notes',
  '认识 DNA': 'Meet DNA',
  '重置演示': 'Reset demonstration',
  '此教学实验需要 JavaScript。人工 RNA 序列为 GCC ACC AUG GCU UUU GAA CCG UAA GAC CUG，翻译产物为 Met–Ala–Phe–Glu–Pro，共五个残基；UAA 不对应氨基酸。': 'This teaching exhibit requires JavaScript. The designed RNA sequence is GCC ACC AUG GCU UUU GAA CCG UAA GAC CUG. Translation yields Met–Ala–Phe–Glu–Pro, five residues in total; UAA does not encode an amino acid.',
  '返回整体过程': 'Back to the full process',
  '分子特写': 'Molecule close-up',
  '拖动旋转 · 滚轮缩放': 'Drag to rotate · Scroll to zoom',
  '正在准备分子展台…': 'Preparing the molecule exhibit…',
  '透视：关': 'Perspective: off',
  '下一步': 'Next step',
  '生物学 · 必修2': 'Biology · Compulsory 2 (Chinese textbook)',
  '教材扫描页': 'Textbook scan',
  '2019 版人教教材': '2019 PEP edition (Chinese)',
  '正在加载教材扫描图…': 'Loading the textbook scan…',
  '教材扫描图来自外部网站': 'The textbook scan is hosted on an external site',
  '放大原图': 'Enlarge scan',
  '在新标签打开原图 ↗': 'Open original in a new tab ↗',
  '本页演示典型动物细胞环境中，一个核基因的蛋白质编码信息如何表达。基因表达也可以产生功能性 RNA，并非所有 RNA 都会被翻译。': 'This exhibit shows how protein-coding information from one nuclear gene is expressed in a typical animal-cell setting. Gene expression can also produce functional RNA; not every RNA is translated.',
  '这是一段人工教学序列': 'A designed teaching sequence',
  '展示窗口共 30 个核苷酸，前后各含 6 个非翻译区核苷酸。读取从位置 7 的 AUG 开始，到位置 22–24 的 UAA 终止，得到 5 个氨基酸残基。它不是已知天然基因，也不代表真实基因的典型长度。上下游调控与转录终止背景不在这个窗口中；AUG 和 UAA 是本例的翻译信号，不能作为转录起止信号。': 'The display window contains 30 nucleotides, including six untranslated nucleotides on each side. Translation starts at AUG at position 7 and ends at UAA at positions 22–24, yielding five amino-acid residues. This is not a known natural gene and does not represent the typical length of a real gene. Upstream and downstream regulation and the context of transcription termination are outside this window; AUG and UAA are translation signals in this example, not transcription start or stop signals.',
  '空间与时间经过教学化调整': 'Space and time are adjusted for teaching',
  'RNA 聚合酶外形参考': 'The RNA polymerase shape is based on',
  'PDB 1Y1W（酵母 RNA 聚合酶 II 延伸复合物）': 'PDB 1Y1W (yeast RNA polymerase II elongation complex)',
  '的实验坐标，保留十二亚基并生成简化曲面；用于真核转录教学，不是本页人工序列的实验复合物。DNA、RNA、核糖体和多肽为教学示意，非原子级结构；颜色、光泽、透视、相对大小、运动路径与速度均为教学表现。为使配对与转移清晰可见，分子之间的尺度比例与时间均有所调整。三维中的字母及下方序列共同标记信息位置，追踪不意味着 DNA 碱基本身变成氨基酸。': 'experimental coordinates. It retains twelve subunits and uses a simplified surface for teaching eukaryotic transcription; it is not an experimental complex of this designed sequence. DNA, RNA, ribosome, and polypeptide are teaching illustrations rather than atomic-level structures. Color, sheen, transparency, relative size, motion paths, and speed are visual teaching choices. Molecular scale and timing are adjusted to make pairing and transfer visible. Letters in the 3D scene and the sequence below mark information positions together; tracing them does not mean that DNA bases themselves turn into amino acids.',
  'RNA 加工与起始过程有所简化': 'RNA processing and initiation are simplified',
  '本页聚焦转录与翻译，RNA 加工的细节已简化。典型真核前体 mRNA 的加工可涉及加帽、剪接及 3′端加工等，部分加工可以与转录同时发生。章节顺序用于教学组织，不表示所有加工都严格等到转录结束才开始。': 'This exhibit focuses on transcription and translation, so RNA-processing details are simplified. Processing of a typical eukaryotic pre-mRNA can include capping, splicing, and 3′-end processing; some processing can occur during transcription. The chapter order is for teaching and does not imply that all processing begins only after transcription finishes.',
  '本例不含内含子，因此不播放剪接动画；编码链与 RNA 在此窗口内同向对照时，主要字母差别为 T 与 U。这个关系不能无条件推广到所有完整真核基因与成熟 mRNA。帽和 poly(A) 尾未纳入 30 个核苷酸的计数，poly(A) 尾也不是从本例 DNA 模板逐个转录来的。': 'This example contains no introns, so no splicing animation is shown. When the coding strand and RNA are compared in the same direction within this window, the main letter difference is T versus U. This relationship must not be generalized without qualification to every complete eukaryotic gene and mature mRNA. The cap and poly(A) tail are excluded from the 30-nucleotide count; the poly(A) tail is not transcribed base by base from this example’s DNA template.',
  '翻译从 5′端附近识别起始位置的过程为示意，起始因子等细节省略。采用标准遗传密码与理想互补反密码子，不展开特殊遗传密码与摆动配对，也不表示每个密码子必然对应一种独立 tRNA。真实蛋白质形成还涉及折叠，部分需要进一步加工；本页结束于示例多肽的释放。': 'The depiction of initiation near the 5′ end is schematic, with details such as initiation factors omitted. It uses the standard genetic code and ideal complementary anticodons; it does not cover variant codes or wobble pairing, or imply that each codon necessarily has a distinct tRNA. Formation of a real protein also involves folding, and some proteins require further processing. This exhibit ends when the example polypeptide is released.',
  '概念与规则参考': 'References for concepts and rules',
  'NHGRI · 转录概念': 'NHGRI · Transcription',
  'NHGRI · 翻译概念': 'NHGRI · Translation',
  'NCBI · 标准遗传密码（表中 T 在 RNA 中对应 U）': 'NCBI · Standard genetic code (table uses T; RNA uses U)',
  'OpenStax Biology 2e · 真核转录': 'OpenStax Biology 2e · Eukaryotic transcription',
  'OpenStax Biology 2e · RNA 加工': 'OpenStax Biology 2e · RNA processing',
  'OpenStax Biology 2e · 核糖体与蛋白质合成': 'OpenStax Biology 2e · Ribosomes and protein synthesis',
  '原创内容与软件许可': 'Original content and software licenses',
  '模型曲面、备用 SVG、教学文案和界面由本项目制作；聚合酶的结构坐标来源为上述 RCSB PDB 条目，核糖体曲面与残基外形为原创教学示意。交互需求参考': 'The model surfaces, fallback SVG, teaching copy, and interface were created for this project. Polymerase structural coordinates come from the RCSB PDB entry cited above; the ribosome surface and residue shapes are original teaching illustrations. The spatial-exploration interaction was informed by',
  '的空间探索方向，实际观察结果见本地验收记录，没有复制其代码、模型和文案。': '; observations are recorded in local acceptance notes. Its code, models, and copy were not copied.',
  '本地随页面提供 Three.js 0.160.0 与其 OrbitControls，遵循': 'Three.js 0.160.0 and its OrbitControls are bundled locally under the',
  'MIT 许可': 'MIT license',
  '。所有教学计算在浏览器本地完成，无付费 API、登录或运行时大模型。': '. All teaching calculations run locally in the browser, with no paid API, login, or runtime large language model.',
  '界面语言': 'Interface language',
  '切换为中文': 'Switch to Chinese',
  '切换为英文': 'Switch to English',
  '基因表达开场': 'Gene expression introduction',
  '独立对象教学': 'Individual molecule lessons',
  '教学章节': 'Teaching chapters',
  '基因表达三维教学场景': '3D gene-expression teaching scene',
  '场景视角与显示': 'Scene view and display',
  '分子视角': 'Molecule view',
  'DNA 双螺旋绕长轴缓慢旋转；教学进度保持不变': 'DNA slowly rotates around its long axis; teaching progress does not change',
  '透视效果': 'Perspective effect',
  '放大视角': 'Zoom in',
  '缩小视角': 'Zoom out',
  '进入白板，冻结当前教学步骤': 'Open whiteboard and freeze the current teaching step',
  '白板 · 冻结当前构象': 'Whiteboard · Freeze current molecular conformation',
  '关闭说明面板': 'Close explanation panel',
  '关闭结构说明': 'Close structure explanation',
  '可聚焦的结构入口': 'Structures available to focus on',
  '序列区域，可横向滚动': 'Sequence area; scroll horizontally',
  '播放控制': 'Playback controls',
  '当前教学步骤': 'Current teaching step',
  '全程教学进度': 'Full teaching timeline',
  '上一步': 'Previous step',
  '播放速度': 'Playback speed',
  '独立对象三维教学模型': '3D model for an individual molecule lesson',
  '对象教学步骤': 'Individual molecule lesson steps',
  '上一个对象教学步骤': 'Previous molecule lesson step',
  '关闭教材窗口': 'Close textbook window',
  '关闭模型说明': 'Close model notes',
  '复位': 'Reset',
}));

const textEntries = [];
const attributeEntries = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
for (let node = walker.nextNode(); node; node = walker.nextNode()) {
  const source = node.nodeValue;
  const core = source.trim();
  if (!english.has(core)) continue;
  const leading = source.match(/^\s*/u)?.[0] || '';
  const trailing = source.match(/\s*$/u)?.[0] || '';
  textEntries.push({ node, core, leading, trailing });
}
for (const element of document.body.querySelectorAll('*')) {
  for (const name of ['aria-label', 'title', 'placeholder', 'data-short-label']) {
    const source = element.getAttribute(name);
    if (source && english.has(source)) attributeEntries.push({ element, name, source });
  }
}

function applyLanguage(lang) {
  const en = lang === 'en';
  document.documentElement.lang = en ? 'en' : 'zh-CN';
  document.title = en ? ENGLISH_TITLE : CHINESE_TITLE;
  document.querySelector('meta[name="description"]')?.setAttribute('content', en ? ENGLISH_DESCRIPTION : CHINESE_DESCRIPTION);
  for (const { node, core, leading, trailing } of textEntries) {
    if (node.isConnected) node.nodeValue = leading + (en ? english.get(core) : core) + trailing;
  }
  for (const { element, name, source } of attributeEntries) {
    if (element.isConnected) element.setAttribute(name, en ? english.get(source) : source);
  }
  for (const button of document.querySelectorAll('.language-option')) {
    button.setAttribute('aria-pressed', String(button.dataset.language === lang));
  }
}

export function getLanguage() {
  return document.documentElement.lang === 'en' ? 'en' : 'zh-CN';
}

function syncLanguageInUrl(lang) {
  const url = new URL(location.href);
  if (lang === 'en') url.searchParams.set('lang', 'en');
  else url.searchParams.delete('lang');
  if (url.href !== location.href) history.replaceState(history.state, '', url);
}

export function setLanguage(lang) {
  const next = lang === 'en' ? 'en' : 'zh-CN';
  if (next === getLanguage()) return;
  applyLanguage(next);
  try { localStorage.setItem(LANGUAGE_KEY, next); } catch {}
  syncLanguageInUrl(next);
  dispatchEvent(new CustomEvent('gene-expression-languagechange', { detail: { lang: next } }));
}

applyLanguage(getLanguage());
// Object lessons add a history entry; returning must keep its shareable URL
// consistent with the language currently shown in the interface.
addEventListener('popstate', () => syncLanguageInUrl(getLanguage()));
if (['en', 'zh', 'zh-CN'].includes(new URLSearchParams(location.search).get('lang'))) {
  try { localStorage.setItem(LANGUAGE_KEY, getLanguage()); } catch {}
}
document.querySelectorAll('.language-option').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
