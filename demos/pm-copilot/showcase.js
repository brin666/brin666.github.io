(() => {
  const video = document.querySelector('.film video');
  if (!video) return;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const chapters = [...document.querySelectorAll('[data-seek]')];
  const message = document.querySelector('.film-message');
  const status = document.querySelector('[data-film-status]');
  let attempted = false;
  let pendingSeek = null;
  const reveal = selector => document.querySelectorAll(selector).forEach(e => { e.hidden = false; });
  const showMessage = text => { message.textContent = text; message.hidden = !text; };
  const playOnce = () => {
    if (attempted || reducedMotion.matches) return;
    attempted = true; video.muted = true; video.play().catch(() => {});
  };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= .35) playOnce();
      else if (!entry.isIntersecting) video.pause();
    }), { threshold: [0, .35] }).observe(video);
  } else playOnce();
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
  reducedMotion.addEventListener('change', e => { if (e.matches) video.pause(); });
  function syncChapter() {
    const active = [...chapters].reverse().find(e => Number(e.dataset.seek) <= video.currentTime) || chapters[0];
    chapters.forEach(e => e.setAttribute('aria-pressed', String(e === active)));
  }
  function seek(time) {
    attempted = true;
    if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      showMessage('视频暂时无法加载，可以继续查看下方示例产物。'); return;
    }
    if (video.readyState < HTMLMediaElement.HAVE_METADATA) { pendingSeek = time; video.load(); return; }
    video.currentTime = Math.max(0, Math.min(time, video.duration - .05));
    syncChapter();
    video.play().catch(() => showMessage('章节已定位，点击视频播放键即可继续。'));
  }
  video.addEventListener('loadedmetadata', () => {
    if (pendingSeek !== null) { const time = pendingSeek; pendingSeek = null; seek(time); }
  });
  video.addEventListener('timeupdate', syncChapter);
  video.addEventListener('seeked', syncChapter);
  const failure = () => showMessage('视频暂时无法加载，封面与下方示例产物仍可查看。');
  video.addEventListener('error', failure);
  video.querySelector('source')?.addEventListener('error', failure);
  if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) failure();
  chapters.forEach(e => e.addEventListener('click', () => {
    seek(Number(e.dataset.seek));
    status.textContent = `已定位到${e.querySelector('span').textContent}章节，${e.querySelector('small').textContent}。`;
  }));
  reveal('.film-chapters');
  const fullscreen = document.querySelector('[data-fullscreen]');
  if (document.fullscreenEnabled || typeof video.webkitEnterFullscreen === 'function') {
    fullscreen.hidden = false;
    fullscreen.addEventListener('click', async () => {
      try {
        if (video.requestFullscreen) await video.requestFullscreen(); else video.webkitEnterFullscreen();
      } catch { showMessage('可使用视频播放器里的全屏按钮观看。'); }
    });
  }
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  const prototypeFrame = document.querySelector('.prototype-frame iframe');
  prototypeFrame.addEventListener('load', () => {
    if (prototypeFrame.getAttribute('src')) {
      prototypeFrame.dataset.ready = 'true';
      prototypeFrame.parentElement.classList.add('is-ready');
    }
  });
  function selectArtifact(name, focus = false) {
    const selected = tabs.find(e => e.id === `tab-${name}`) || tabs[0];
    tabs.forEach(e => {
      const active = e === selected;
      e.setAttribute('aria-selected', String(active)); e.tabIndex = active ? 0 : -1;
    });
    panels.forEach(e => { e.hidden = e.id !== selected.getAttribute('aria-controls'); });
    if (name === 'prototype') {
      const frame = document.querySelector('.prototype-frame iframe');
      frame.parentElement.hidden = false;
      if (!frame.getAttribute('src')) frame.src = frame.dataset.src;
    }
    if (focus) selected.focus({ preventScroll: true });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectArtifact(tab.id.replace('tab-', '')));
    tab.addEventListener('keydown', e => {
      const next = e.key === 'ArrowRight' ? (index + 1) % tabs.length : e.key === 'ArrowLeft' ? (index + tabs.length - 1) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
      if (next !== null) { e.preventDefault(); selectArtifact(tabs[next].id.replace('tab-', ''), true); }
    });
  });
  reveal('.artifact-tabs,[data-watch],[data-show-artifact]');
  selectArtifact('prd');
  const scrollOptions = () => ({ block: 'start', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  document.querySelectorAll('[data-show-artifact]').forEach(e => e.addEventListener('click', () => {
    selectArtifact(e.dataset.showArtifact, true);
    document.querySelector('.outputs').scrollIntoView(scrollOptions());
  }));
  document.querySelectorAll('[data-watch]').forEach(e => e.addEventListener('click', () => {
    seek(Number(e.dataset.watch));
    video.scrollIntoView({ block: 'center', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    video.focus({ preventScroll: true });
  }));
})();
