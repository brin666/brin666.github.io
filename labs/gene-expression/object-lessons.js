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
