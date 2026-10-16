// Page numbers are the printed textbook pages, not the scan filenames.
// Book references were visually checked against the linked 2019 textbook scans.
const SCAN_ROOT = 'https://images.szxuexiao.com/uploadimages/keben2022/rjgzshengwubx2_2019/';

export const OBJECT_LESSONS = {
  polymerase: {
    id: 'polymerase',
    title: 'RNA 聚合酶',
    subtitle: '连接 RNA 核苷酸的酶',
    summary: 'RNA 聚合酶与 DNA 结合，帮助局部打开双链，并沿模板连接 RNA 核苷酸。',
    book: { page: 65, figure: '图4-4', label: '教材第65页 · 图4-4', url: `${SCAN_ROOT}76.jpg` },
    steps: [
      { title: '认识聚合酶', text: 'RNA 聚合酶是转录时发挥作用的酶。先旋转观察完整外形，下一步再看它与 DNA 的工作关系。', focus: 'overview' },
      { title: '按模板配对', text: '游离的 RNA 核苷酸与 DNA 模板链上的碱基配对。', focus: 'work' },
      { title: '连接成 RNA', text: '配对的核苷酸依次连接，形成新的 RNA；经过的 DNA 恢复双链。', focus: 'process' },
    ],
  },
  template: {
    id: 'template',
    title: 'DNA 模板链',
    subtitle: '转录时用于配对的那条链',
    summary: '转录以 DNA 的一条链为模板，按照碱基配对关系合成 RNA。',
    book: { page: 65, figure: '图4-4', label: '教材第65页 · 图4-4', url: `${SCAN_ROOT}76.jpg` },
    steps: [
      { title: '两条链中的一条', text: '局部打开 DNA 后，只有其中一条链作为这次转录的模板。', focus: 'overview' },
      { title: '观察配对关系', text: '模板上的 A 与 RNA 的 U 配对，T 与 A 配对，G 与 C 配对。', focus: 'work' },
      { title: '留下原来的 DNA', text: '新合成的是 RNA。模板链没有被剪下或消耗，转录后仍留在 DNA 中。', focus: 'process' },
    ],
  },
  coding: {
    id: 'coding',
    title: 'DNA 编码链',
    subtitle: '用来对照 RNA 序列的另一条链',
    summary: '在本例中，把编码链与 RNA 按同一方向对照，主要字母差别是 DNA 的 T 对应 RNA 的 U。',
    book: { page: 65, figure: '图4-4', label: '教材第65页 · 图4-4（转录参照）', url: `${SCAN_ROOT}76.jpg` },
    steps: [
      { title: '先找模板链', text: 'RNA 是依据模板链合成的；本页把与模板相对的另一条链称为编码链。', focus: 'overview' },
      { title: '同向对照序列', text: '把本例编码链和 RNA 都按 5′→3′方向摆放，观察相同位置的 T 与 U。', focus: 'work' },
      { title: '区分对照与合成', text: '编码链可帮助核对序列，但这次合成 RNA 时直接参与配对的是模板链。', focus: 'process' },
    ],
    extension: '本站解释：教材本节图4-4用于定位转录过程，未使用“编码链”这一名称；编码链与 RNA 的同向对照是本演示的补充。',
  },
  rna: {
    id: 'rna',
    title: 'mRNA · 信使 RNA',
    subtitle: '从转录到翻译的信息载体',
    summary: '这是一条新合成的 RNA，把基因的序列信息带向细胞质中的核糖体。',
    book: { page: 65, figure: '图4-3、图4-4', label: '教材第65页 · 图4-3、图4-4', url: `${SCAN_ROOT}76.jpg` },
    steps: [
      { title: '认识信使 RNA', text: 'mRNA 是 RNA 的一种，通常呈单链，含有 A、U、G、C 四种碱基。', focus: 'overview' },
      { title: '由转录产生', text: 'RNA 核苷酸按照模板链的碱基排列依次连接，形成 mRNA。', focus: 'work' },
      { title: '成为翻译模板', text: '进入细胞质后，mRNA 与核糖体结合，密码子决定氨基酸的排列顺序。', focus: 'process' },
    ],
  },
  trna: {
    id: 'trna',
    title: 'tRNA · 转运 RNA',
    subtitle: '携带氨基酸，识别密码子',
    summary: 'tRNA 的一端携带氨基酸，另一部位的反密码子与 mRNA 上的密码子配对。',
    book: { page: 67, figure: '图4-6', label: '教材第67页 · 图4-6', url: `${SCAN_ROOT}78.jpg` },
    steps: [
      { title: '认识两个部位', text: '携带氨基酸的一端与反密码子位于不同部位，分别承担运输和识别的任务。', focus: 'overview' },
      { title: '与密码子配对', text: '反密码子的三个碱基与 mRNA 上相应密码子的三个碱基配对。', focus: 'work' },
      { title: '送来下一个氨基酸', text: 'tRNA 将氨基酸带入核糖体，使其按 mRNA 的序列顺序参与肽链合成。', focus: 'process' },
    ],
  },
  ribosome: {
    id: 'ribosome',
    title: '核糖体',
    subtitle: '翻译发生的工作位置',
    summary: '核糖体与 mRNA 结合，组织 tRNA 的配对和氨基酸的连接。',
    book: { page: 68, figure: '图4-7', label: '教材第68页 · 图4-7', url: `${SCAN_ROOT}79.jpg` },
    steps: [
      { title: '认识两个亚基', text: '本演示把核糖体分为大小两个亚基。它们共同组织 mRNA 的读取和氨基酸的连接。', focus: 'overview' },
      { title: '让氨基酸连接', text: '不同 tRNA 带来的氨基酸通过肽键连接，肽链逐渐延长。', focus: 'work' },
      { title: '沿 mRNA 移动', text: '核糖体沿 mRNA 前进，新的 tRNA 进入，已完成运输的 tRNA 离开。', focus: 'process' },
    ],
    extension: '教材图4-7以两个 tRNA 结合位点讲解翻译。演示中的 A/P/E 位点名称属于拓展，不对应教材本节的位点命名。',
  },
  peptide: {
    id: 'peptide',
    title: '多肽链',
    subtitle: '按顺序连接的氨基酸',
    summary: '翻译时，氨基酸按 mRNA 指定的顺序通过肽键连接，形成肽链。',
    book: { page: 68, figure: '图4-7及正文', label: '教材第68页 · 图4-7及正文', url: `${SCAN_ROOT}79.jpg` },
    steps: [
      { title: '认识这条短肽', text: '本例的五个残基依次为 Met、Ala、Phe、Glu、Pro。这个顺序由 mRNA 的密码子决定。', focus: 'overview' },
      { title: '肽键连接', text: '相邻氨基酸形成肽键，原有肽链接到新到来的氨基酸上，继续延长。', focus: 'work' },
      { title: '从 N 端到 C 端延长', text: '新到来的氨基酸连接在肽链的 C 端。本例只展示五个残基组成的短肽，不模拟后续折叠。', focus: 'process' },
    ],
    extension: '本站示例：本演示只释放一条含五个氨基酸残基的短肽链，没有模拟蛋白质折叠。',
  },
  pore: {
    id: 'pore',
    title: '核孔',
    subtitle: 'mRNA 通向细胞质的通道',
    summary: 'mRNA 合成后经过核孔，从细胞核进入细胞质，继续参与翻译。',
    book: { page: 66, figure: null, label: '教材第66页 · 正文', url: `${SCAN_ROOT}77.jpg` },
    steps: [
      { title: '从细胞核出发', text: 'mRNA 在细胞核内由转录产生；原来的 DNA 仍留在细胞核中。', focus: 'overview' },
      { title: '通过核孔', text: 'mRNA 经核孔进入细胞质，把基因的信息带到新的工作位置。', focus: 'work' },
      { title: '衔接翻译', text: '到达细胞质的 mRNA 与核糖体结合，作为合成肽链的模板。', focus: 'process' },
    ],
    extension: '本站示意：核孔外形和 mRNA 穿行路线采用简化模型；教材本节在此处给出正文说明，没有对应的核孔插图。',
  },
};

// The scans and page numbers refer to the 2019 Chinese edition. Keep the
// original lesson object available to callers that still import OBJECT_LESSONS.
const ENGLISH_OBJECT_LESSONS = {
  polymerase: {
    id: 'polymerase',
    title: 'RNA polymerase',
    subtitle: 'The enzyme that joins RNA nucleotides',
    summary: 'RNA polymerase binds to DNA, helps open a short region of the double helix, and joins RNA nucleotides along the template.',
    book: { page: 65, figure: 'Fig. 4-4', label: '2019 Chinese-edition textbook scan · p. 65 · Fig. 4-4', url: `${SCAN_ROOT}76.jpg` },
    steps: [
      { title: 'Meet the polymerase', text: 'RNA polymerase is the enzyme active during transcription. Rotate the complete model first; the next step shows how it works with DNA.', focus: 'overview' },
      { title: 'Pair with the template', text: 'Free RNA nucleotides pair with bases on the DNA template strand.', focus: 'work' },
      { title: 'Join them into RNA', text: 'The paired nucleotides join in sequence to form new RNA; the DNA behind the enzyme re-forms its double helix.', focus: 'process' },
    ],
  },
  template: {
    id: 'template',
    title: 'DNA template strand',
    subtitle: 'The strand used for pairing during transcription',
    summary: 'Transcription uses one DNA strand as a template and synthesizes RNA through complementary base pairing.',
    book: { page: 65, figure: 'Fig. 4-4', label: '2019 Chinese-edition textbook scan · p. 65 · Fig. 4-4', url: `${SCAN_ROOT}76.jpg` },
    steps: [
      { title: 'One of two strands', text: 'After a short stretch of DNA opens, only one strand serves as the template for this transcription event.', focus: 'overview' },
      { title: 'See the base pairs', text: 'Template A pairs with RNA U, T with A, and G with C.', focus: 'work' },
      { title: 'The DNA remains', text: 'RNA is the newly synthesized molecule. The template strand is neither cut away nor consumed; it remains part of the DNA afterward.', focus: 'process' },
    ],
  },
  coding: {
    id: 'coding',
    title: 'DNA coding strand',
    subtitle: 'The other strand, used to compare RNA sequences',
    summary: 'In this example, reading the coding strand and RNA in the same direction reveals the main letter difference: DNA T corresponds to RNA U.',
    book: { page: 65, figure: 'Fig. 4-4', label: '2019 Chinese-edition textbook scan · p. 65 · Fig. 4-4 (transcription reference)', url: `${SCAN_ROOT}76.jpg` },
    steps: [
      { title: 'Find the template first', text: 'RNA is synthesized from the template strand. Here, the opposite strand is called the coding strand.', focus: 'overview' },
      { title: 'Compare in one direction', text: 'Read both this coding strand and the RNA 5′→3′, then compare T and U at corresponding positions.', focus: 'work' },
      { title: 'Comparison versus synthesis', text: 'The coding strand helps check the sequence, but the template strand pairs directly with nucleotides during this RNA synthesis.', focus: 'process' },
    ],
    extension: 'This site’s explanation: textbook Fig. 4-4 shows transcription but does not use the term “coding strand.” Comparing the coding strand and RNA in the same direction is an addition in this demo.',
  },
  rna: {
    id: 'rna',
    title: 'mRNA · messenger RNA',
    subtitle: 'Carries information from transcription to translation',
    summary: 'This newly synthesized RNA carries the gene’s sequence information to a ribosome in the cytoplasm.',
    book: { page: 65, figure: 'Figs. 4-3 and 4-4', label: '2019 Chinese-edition textbook scan · p. 65 · Figs. 4-3 and 4-4', url: `${SCAN_ROOT}76.jpg` },
    steps: [
      { title: 'Meet messenger RNA', text: 'mRNA is a type of RNA. It is usually single-stranded and contains four bases: A, U, G, and C.', focus: 'overview' },
      { title: 'Made by transcription', text: 'RNA nucleotides join in sequence according to the bases on the template strand, forming mRNA.', focus: 'work' },
      { title: 'A template for translation', text: 'In the cytoplasm, mRNA binds to a ribosome. Its codons determine the amino acid sequence.', focus: 'process' },
    ],
  },
  trna: {
    id: 'trna',
    title: 'tRNA · transfer RNA',
    subtitle: 'Carries an amino acid and recognizes a codon',
    summary: 'One end of a tRNA carries an amino acid. Its anticodon pairs with a codon on mRNA.',
    book: { page: 67, figure: 'Fig. 4-6', label: '2019 Chinese-edition textbook scan · p. 67 · Fig. 4-6', url: `${SCAN_ROOT}78.jpg` },
    steps: [
      { title: 'Two functional regions', text: 'The amino acid attachment end and the anticodon lie in different regions, serving transport and recognition respectively.', focus: 'overview' },
      { title: 'Pair with a codon', text: 'The anticodon’s three bases pair with the three bases of the matching mRNA codon.', focus: 'work' },
      { title: 'Deliver the next amino acid', text: 'tRNA brings an amino acid into the ribosome so it can join the peptide chain in the order specified by mRNA.', focus: 'process' },
    ],
  },
  ribosome: {
    id: 'ribosome',
    title: 'Ribosome',
    subtitle: 'The site where translation takes place',
    summary: 'A ribosome binds mRNA and coordinates tRNA pairing and the joining of amino acids.',
    book: { page: 68, figure: 'Fig. 4-7', label: '2019 Chinese-edition textbook scan · p. 68 · Fig. 4-7', url: `${SCAN_ROOT}79.jpg` },
    steps: [
      { title: 'Two subunits', text: 'This demo shows a large and a small ribosomal subunit. Together they coordinate mRNA reading and amino acid joining.', focus: 'overview' },
      { title: 'Join amino acids', text: 'Amino acids delivered by different tRNAs are joined by peptide bonds, lengthening the peptide chain.', focus: 'work' },
      { title: 'Move along mRNA', text: 'The ribosome advances along mRNA. A new tRNA enters while a tRNA that has delivered its cargo leaves.', focus: 'process' },
    ],
    extension: 'Textbook Fig. 4-7 explains translation using two tRNA binding sites. The A/P/E site names shown in this demo are an extension; they are not the site names used in this textbook section.',
  },
  peptide: {
    id: 'peptide',
    title: 'Peptide chain',
    subtitle: 'Amino acids linked in sequence',
    summary: 'During translation, amino acids are joined by peptide bonds in the order specified by mRNA, forming a peptide chain.',
    book: { page: 68, figure: 'Fig. 4-7 and text', label: '2019 Chinese-edition textbook scan · p. 68 · Fig. 4-7 and text', url: `${SCAN_ROOT}79.jpg` },
    steps: [
      { title: 'Meet this short peptide', text: 'The five residues in this example are Met, Ala, Phe, Glu, and Pro, in that order. mRNA codons determine the sequence.', focus: 'overview' },
      { title: 'Peptide bonds', text: 'Adjacent amino acids form peptide bonds. The existing chain is transferred to the incoming amino acid and continues to grow.', focus: 'work' },
      { title: 'Growth from N to C', text: 'Each incoming amino acid joins the C terminus of the chain. This example shows only a five-residue short peptide; it does not simulate later folding.', focus: 'process' },
    ],
    extension: 'This site’s example: the demo releases only a short chain of five amino acid residues. It does not simulate protein folding.',
  },
  pore: {
    id: 'pore',
    title: 'Nuclear pore',
    subtitle: 'A passage for mRNA to the cytoplasm',
    summary: 'After synthesis, mRNA passes through a nuclear pore from the nucleus to the cytoplasm, where it participates in translation.',
    book: { page: 66, figure: null, label: '2019 Chinese-edition textbook scan · p. 66 · text', url: `${SCAN_ROOT}77.jpg` },
    steps: [
      { title: 'Start in the nucleus', text: 'mRNA is produced by transcription in the nucleus. The original DNA stays in the nucleus.', focus: 'overview' },
      { title: 'Pass through a pore', text: 'mRNA enters the cytoplasm through a nuclear pore, carrying the gene’s information to a new working site.', focus: 'work' },
      { title: 'Connect to translation', text: 'In the cytoplasm, mRNA binds to a ribosome and serves as the template for peptide synthesis.', focus: 'process' },
    ],
    extension: 'This site’s diagram: the pore shape and mRNA route are simplified. This textbook section describes the process in text and has no corresponding nuclear pore illustration.',
  },
};

export function getObjectLessons(locale = globalThis.document?.documentElement?.lang) {
  return /^en(?:-|$)/i.test(locale || '') ? ENGLISH_OBJECT_LESSONS : OBJECT_LESSONS;
}
