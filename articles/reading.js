(() => {
  const body = document.querySelector('#article-body');
  const toolbar = document.querySelector('#highlight-toolbar');
  const button = document.querySelector('#highlight-button');
  const toast = document.querySelector('#reading-toast');
  if (!body || !toolbar || !button || !toast) return;

  const storageKey = document.body.dataset.highlightKey || 'brin:jev-article-highlights:v1';
  const paragraphs = [...body.querySelectorAll('p[data-paragraph]')];
  const originalMarkup = new Map(paragraphs.map(paragraph => [paragraph.dataset.paragraph, paragraph.innerHTML]));
  const saved = new Map();
  let pending = null;
  let toastTimer = 0;

  const announce = message => {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  };

  const normalize = (ranges, length) => {
    const valid = ranges
      .filter(item => Number.isInteger(item.start) && Number.isInteger(item.end) && item.start >= 0 && item.end > item.start && item.end <= length)
      .sort((a, b) => a.start - b.start);
    const merged = [];
    for (const range of valid) {
      const previous = merged[merged.length - 1];
      if (previous && range.start <= previous.end) previous.end = Math.max(previous.end, range.end);
      else merged.push({ start: range.start, end: range.end });
    }
    return merged;
  };

  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || '{}');
    for (const paragraph of paragraphs) {
      const ranges = stored[paragraph.dataset.paragraph];
      if (Array.isArray(ranges)) saved.set(paragraph.dataset.paragraph, normalize(ranges, paragraph.textContent.length));
    }
  } catch {
    // The page remains usable when browser storage is unavailable.
  }

  const persist = () => {
    try { localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(saved))); } catch { /* local-only best effort */ }
  };

  const pointAt = (root, position) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let remaining = position;
    let node;
    let last = null;
    while ((node = walker.nextNode())) {
      last = node;
      if (remaining <= node.length) return { node, offset: remaining };
      remaining -= node.length;
    }
    return last ? { node: last, offset: last.length } : null;
  };

  const decorate = paragraph => {
    const id = paragraph.dataset.paragraph;
    paragraph.innerHTML = originalMarkup.get(id);
    for (const { start, end } of saved.get(id) || []) {
      const first = pointAt(paragraph, start);
      const last = pointAt(paragraph, end);
      if (!first || !last) continue;
      const range = document.createRange();
      range.setStart(first.node, first.offset);
      range.setEnd(last.node, last.offset);
      const mark = document.createElement('mark');
      mark.className = 'reader-mark';
      mark.dataset.start = String(start);
      mark.dataset.end = String(end);
      mark.title = '点击取消这处标黄';
      mark.tabIndex = 0;
      mark.setAttribute('role', 'button');
      mark.setAttribute('aria-label', `取消标黄：${range.toString()}`);
      mark.append(range.extractContents());
      range.insertNode(mark);
    }
  };

  paragraphs.forEach(decorate);

  const paragraphOf = node => (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement)?.closest('p[data-paragraph]');
  const offsetOf = (paragraph, node, offset) => {
    const before = document.createRange();
    before.selectNodeContents(paragraph);
    before.setEnd(node, offset);
    return before.toString().length;
  };

  const hideToolbar = () => { toolbar.hidden = true; pending = null; };
  const updateToolbar = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || selection.rangeCount === 0) { hideToolbar(); return; }
    const range = selection.getRangeAt(0);
    const startParagraph = paragraphOf(range.startContainer);
    const endParagraph = paragraphOf(range.endContainer);
    if (!startParagraph || startParagraph !== endParagraph || !body.contains(startParagraph) || range.toString().trim().length > 240) {
      hideToolbar();
      return;
    }
    const start = offsetOf(startParagraph, range.startContainer, range.startOffset);
    const end = offsetOf(startParagraph, range.endContainer, range.endOffset);
    if (end <= start || !range.toString().trim()) { hideToolbar(); return; }
    pending = { id: startParagraph.dataset.paragraph, start, end };
    toolbar.hidden = false;
    const box = range.getBoundingClientRect();
    const toolbarWidth = toolbar.offsetWidth;
    const toolbarHeight = toolbar.offsetHeight;
    toolbar.style.left = `${Math.max(8, Math.min(window.innerWidth - toolbarWidth - 8, box.left + box.width / 2 - toolbarWidth / 2))}px`;
    toolbar.style.top = `${box.top > toolbarHeight + 16 ? box.top - toolbarHeight - 8 : box.bottom + 8}px`;
  };

  document.addEventListener('selectionchange', () => requestAnimationFrame(updateToolbar));
  button.addEventListener('pointerdown', event => event.preventDefault());
  button.addEventListener('click', () => {
    if (!pending) return;
    const paragraph = paragraphs.find(item => item.dataset.paragraph === pending.id);
    if (!paragraph) return;
    const previous = saved.get(pending.id) || [];
    saved.set(pending.id, normalize([...previous, { start: pending.start, end: pending.end }], paragraph.textContent.length));
    window.getSelection()?.removeAllRanges();
    decorate(paragraph);
    persist();
    hideToolbar();
    announce('已标黄。点击标记可取消。');
  });

  const removeMark = mark => {
    const paragraph = mark.closest('p[data-paragraph]');
    const id = paragraph?.dataset.paragraph;
    if (!id) return;
    saved.set(id, (saved.get(id) || []).filter(item => item.start !== Number(mark.dataset.start) || item.end !== Number(mark.dataset.end)));
    decorate(paragraph);
    persist();
    hideToolbar();
    announce('已取消标黄。');
  };

  body.addEventListener('click', event => {
    const mark = event.target.closest?.('mark.reader-mark');
    if (mark) setTimeout(() => {
      if (mark.isConnected && !window.getSelection()?.toString()) removeMark(mark);
    }, 0);
  });
  body.addEventListener('keydown', event => {
    const mark = event.target.closest?.('mark.reader-mark');
    if (mark && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      removeMark(mark);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') hideToolbar();
  });
})();
