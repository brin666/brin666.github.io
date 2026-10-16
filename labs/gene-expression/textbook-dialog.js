const $ = id => document.getElementById(id);

export function createTextbookDialog({ onOpen = () => {} } = {}) {
  const dialog = $('textbook-dialog');
  const stage = $('textbook-stage');
  const image = $('textbook-image');
  const status = $('textbook-status');
  const zoom = $('textbook-zoom');
  const original = $('textbook-original');
  let request = 0;

  function resetImage() {
    request++;
    image.onload = null;
    image.onerror = null;
    image.hidden = true;
    image.removeAttribute('src');
    stage.classList.remove('is-zoomed');
    zoom.hidden = true;
    zoom.setAttribute('aria-pressed', 'false');
    zoom.textContent = '放大原图';
  }

  function open(link) {
    if (!link.href || typeof dialog.showModal !== 'function') return false;
    const label = link.dataset.bookLabel || link.textContent.replace(/\s*[↗⤢]\s*$/, '').trim();
    const url = link.href;
    resetImage();
    $('textbook-title').textContent = label;
    image.alt = `2019 版人教生物学必修2，${label}扫描图`;
    original.href = url;
    status.textContent = '正在加载教材扫描图…';
    status.hidden = false;
    try {
      dialog.showModal();
    } catch {
      return false;
    }
    onOpen();
    const currentRequest = request;
    image.onload = () => {
      if (request !== currentRequest || !dialog.open) return;
      image.hidden = false;
      status.hidden = true;
      zoom.hidden = false;
    };
    image.onerror = () => {
      if (request !== currentRequest || !dialog.open) return;
      image.hidden = true;
      status.textContent = '扫描图暂时无法加载。可在新标签打开原图查看。';
      status.hidden = false;
      zoom.hidden = true;
    };
    image.src = url;
    if (image.complete && image.naturalWidth > 0) image.onload();
    return true;
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('#chapter-book, #object-book');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (open(link)) event.preventDefault();
  });
  $('textbook-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => { if (!dialog.open) resetImage(); });
  zoom.addEventListener('click', () => {
    const enlarged = stage.classList.toggle('is-zoomed');
    zoom.setAttribute('aria-pressed', String(enlarged));
    zoom.textContent = enlarged ? '适应窗口' : '放大原图';
    stage.scrollTo(0, 0);
  });
  return { close: () => { if (dialog.open) dialog.close(); }, isOpen: () => dialog.open };
}
