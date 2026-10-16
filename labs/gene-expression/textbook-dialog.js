const $ = id => document.getElementById(id);
const textbookLanguage = () => document.documentElement.lang === 'en' ? 'en' : 'zh';
const textbookCopy = {
  zh: { zoom: '放大原图', fit: '适应窗口', loading: '正在加载教材扫描图…', error: '扫描图暂时无法加载。可在新标签打开原图查看。', alt: label => `2019 版人教生物学必修2，${label}扫描图` },
  en: { zoom: 'Enlarge original', fit: 'Fit to window', loading: 'Loading textbook scan…', error: 'The scan could not be loaded. Open the original in a new tab to view it.', alt: label => `Scanned textbook page: ${label}` },
};
function displayBookLabel(raw) {
  let label = String(raw || '');
  if (textbookLanguage() === 'en') {
    label = label.replace(/^教材第(\d+)页/, '2019 Chinese-edition textbook scan · p. $1')
      .replace(/图(\d+-\d+)/g, 'Fig. $1').replace(/、/g, ', ')
      .replace(/（转录参照）/g, ' (transcription reference)')
      .replace(/及正文/g, ' and text').replace(/正文/g, 'text');
  } else {
    label = label.replace(/^(?:2019 Chinese-edition textbook scan · |Textbook )p\.\s*(\d+)/i, '教材第$1页')
      .replace(/Figs\.\s*(\d+-\d+)\s+and\s+(\d+-\d+)/gi, '图$1、图$2')
      .replace(/Fig\.\s*(\d+-\d+)/gi, '图$1').replace(/,\s*/g, '、')
      .replace(/\s*\(transcription reference\)/i, '（转录参照）')
      .replace(/\s+and text/i, '及正文').replace(/\btext\b/gi, '正文');
  }
  return label;
}

export function createTextbookDialog({ onOpen = () => {} } = {}) {
  const dialog = $('textbook-dialog');
  const stage = $('textbook-stage');
  const image = $('textbook-image');
  const status = $('textbook-status');
  const zoom = $('textbook-zoom');
  const original = $('textbook-original');
  let request = 0;
  let currentLabel = null;
  let statusState = 'loading';

  function localizeDialog() {
    const copy = textbookCopy[textbookLanguage()];
    if (currentLabel !== null) {
      const label = displayBookLabel(currentLabel);
      $('textbook-title').textContent = label;
      image.alt = copy.alt(label);
    }
    status.textContent = copy[statusState];
    zoom.textContent = stage.classList.contains('is-zoomed') ? copy.fit : copy.zoom;
  }
  window.addEventListener('gene-expression-languagechange', localizeDialog);
  localizeDialog();

  function resetImage() {
    request++;
    image.onload = null;
    image.onerror = null;
    image.hidden = true;
    image.removeAttribute('src');
    stage.classList.remove('is-zoomed');
    zoom.hidden = true;
    zoom.setAttribute('aria-pressed', 'false');
    zoom.textContent = textbookCopy[textbookLanguage()].zoom;
  }

  function open(link) {
    if (!link.href || typeof dialog.showModal !== 'function') return false;
    currentLabel = link.dataset.bookLabel || link.textContent.replace(/\s*[↗⤢]\s*$/, '').trim();
    const url = link.href;
    resetImage();
    original.href = url;
    statusState = 'loading';
    localizeDialog();
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
      statusState = 'error';
      localizeDialog();
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
    zoom.textContent = textbookCopy[textbookLanguage()][enlarged ? 'fit' : 'zoom'];
    stage.scrollTo(0, 0);
  });
  return { close: () => { if (dialog.open) dialog.close(); }, isOpen: () => dialog.open };
}
