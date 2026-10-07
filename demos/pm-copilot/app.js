(() => {
  'use strict';

  const pages = new Set(['home', 'feedback', 'feature', 'prd', 'prototype', 'delivery']);
  const state = { insight: false, feature: '', prd: false, prototype: false, delivery: false };
  const featureCopy = {
    evidence: {
      title: '修改理由与证据对照',
      description: '第一版聚焦“为什么要改”和“这句话是否属实”。每条建议显示理由与来源，导出前由用户确认。',
      problem: '示例反馈 02、04、06 表明用户看不懂修改依据，也担心 AI 编造未发生的经历。',
      goal: '在单条简历建议旁展示修改理由和原文出处；未经用户确认的内容不得直接进入导出结果。',
      reason: '这条建议需要展示它依据哪段原文，并提醒用户核对事实；这里不替用户确认真实性。'
    },
    compare: {
      title: '修改前后对比',
      description: '第一版聚焦“改了什么”。让用户在原文与建议之间切换，并看到修改理由，再决定是否采用。',
      problem: '示例反馈 03、06 表明用户无法看清改动前后的差别，也不了解修改理由。',
      goal: '在同一位置展示原文、建议和修改原因，让用户能逐条查看并决定是否采用。',
      reason: '先看清原文和建议之间的差异，再判断这处修改是否符合自己的真实经历。'
    }
  };

  const get = id => document.getElementById(id);
  const show = (id, visible) => { const node = get(id); if (node) node.hidden = !visible; };
  const setText = (id, value) => { const node = get(id); if (node) node.textContent = value; };

  const update = () => {
    const steps = [state.insight, Boolean(state.feature), state.prd, state.prototype, state.delivery];
    setText('home-count', `${steps.filter(Boolean).length} / 5 已体验`);
    const next = !state.insight ? ['阅读反馈样本', '查看示例原话，再决定是否值得做功能。', 'feedback']
      : !state.feature ? ['选择功能方向', '对照原始反馈，为第一版选一个机会点。', 'feature']
      : !state.prd ? ['明确 PRD 草稿', '把刚选的方向写成可检查的需求。', 'prd']
      : !state.prototype ? ['检视原型', '用低保真交互检查需求是否讲得清楚。', 'prototype']
      : ['查看交付拆解', '确认实现任务与边界用例。', 'delivery'];
    setText('home-next-title', next[0]);
    setText('home-next-copy', next[1]);
    const nextButton = document.querySelector('.home-grid [data-page]');
    if (nextButton) nextButton.dataset.page = next[2];
    show('insight-result', state.insight);
    show('feature-result', Boolean(state.feature));
    show('prd-locked', !state.feature);
    show('prd-form', Boolean(state.feature));
    show('prototype-locked', !state.prd);
    show('prototype-demo', state.prd);
    show('delivery-locked', !state.prototype);
    show('delivery-demo', state.prototype);
  };

  const goTo = page => {
    if (!pages.has(page)) return;
    document.querySelectorAll('[data-page-section]').forEach(section => {
      section.hidden = section.dataset.pageSection !== page;
    });
    document.querySelectorAll('.nav-item').forEach(button => {
      const active = button.dataset.page === page;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
    get(`page-${page}`)?.querySelector('h1')?.focus({ preventScroll: true });
  };

  const setFeature = choice => {
    if (!featureCopy[choice]) return;
    state.feature = choice;
    state.prd = false;
    state.prototype = false;
    state.delivery = false;
    const item = featureCopy[choice];
    setText('feature-result-title', item.title);
    setText('feature-result-copy', item.description);
    get('prd-problem').value = item.problem;
    get('prd-goal').value = item.goal;
    setText('prototype-reason', item.reason);
    setText('prd-feedback', '');
    setText('prototype-feedback', '');
    document.querySelectorAll('[data-feature]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.feature === choice));
    });
    update();
    get('feature-result').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  const setPrototypeTab = tab => {
    document.querySelectorAll('[data-proto]').forEach(button => {
      button.setAttribute('aria-selected', String(button.dataset.proto === tab));
    });
    setText('prototype-snippet', tab === 'before'
      ? '参与产品需求文档撰写，协助整理用户反馈。'
      : '整理用户反馈与需求证据，参与撰写产品需求文档。');
  };

  document.addEventListener('click', event => {
    const target = event.target instanceof Element ? event.target : null;
    const feature = target?.closest('[data-feature]');
    if (feature) { setFeature(feature.dataset.feature); return; }
    const tab = target?.closest('[data-proto]');
    if (tab) { setPrototypeTab(tab.dataset.proto); return; }
    const action = target?.closest('[data-action]');
    if (action?.dataset.action === 'insight') {
      state.insight = true;
      update();
      get('insight-result').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      return;
    }
    if (action?.dataset.action === 'finish-prototype') {
      state.prototype = true;
      update();
      goTo('delivery');
      return;
    }
    if (action?.dataset.action === 'export') {
      state.delivery = true;
      update();
      const summary = {
        note: 'PM Copilot 隔离演示版；示例数据与当前页面内的草稿，不是模型生成或真实用户调研结果。',
        sampleProject: 'AI 简历优化助手 Demo',
        selectedFeature: featureCopy[state.feature]?.title || null,
        evidenceIndexes: state.feature === 'compare' ? [3, 6] : [2, 4, 6],
        prd: { problem: get('prd-problem').value.trim(), goal: get('prd-goal').value.trim() },
        viewedPrototype: state.prototype
      };
      const url = URL.createObjectURL(new Blob([JSON.stringify(summary, null, 2)], { type: 'application/json' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'pm-copilot-demo-summary.json';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return;
    }
    const pageButton = target?.closest('[data-page]');
    if (pageButton) {
      goTo(pageButton.dataset.page);
      const evidenceIndex = Number(pageButton.dataset.focusEvidence);
      if (evidenceIndex) {
        const item = document.querySelector(`.feedback-list li:nth-child(${evidenceIndex})`);
        item?.classList.add('is-evidence');
        item?.scrollIntoView({ block: 'center', behavior: 'smooth' });
        setTimeout(() => item?.classList.remove('is-evidence'), 1800);
      }
    }
  });

  get('prd-form').addEventListener('submit', event => {
    event.preventDefault();
    const problem = get('prd-problem').value.trim();
    const goal = get('prd-goal').value.trim();
    if (problem.length < 12 || goal.length < 12) {
      setText('prd-feedback', '请把问题和目标各写到至少 12 个字，再继续。');
      return;
    }
    state.prd = true;
    state.prototype = false;
    state.delivery = false;
    setText('prd-feedback', '草稿已保存在当前页面，可继续检视原型。');
    update();
    goTo('prototype');
  });

  get('prototype-review').addEventListener('click', () => {
    setText('prototype-feedback', '已记录本次页面内的核对动作；这不是对真实履历内容的事实确认。');
  });

  setPrototypeTab('before');
  update();
})();
