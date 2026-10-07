(() => {
  const musicControl = document.querySelector('.music-control');
  const musicToggle = musicControl?.querySelector('.music-toggle');
  const musicAudio = musicControl?.querySelector('.music-audio');
  const musicStatus = musicControl?.querySelector('.music-status');
  if (musicControl && musicToggle && musicAudio) {
    let switchingMusic = false;
    const bars = [...musicControl.querySelectorAll('.music-bar')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let audioContext;
    let analyser;
    let frequencies;
    let animationFrame = 0;
    let lastSample = 0;
    const barHeights = [3, 3, 3, 3];
    musicAudio.volume = 0.28;
    musicAudio.muted = true;
    const resetWave = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      barHeights.fill(3);
      bars.forEach(bar => { bar.style.height = '3px'; });
    };
    const drawWave = timestamp => {
      if (musicAudio.paused || musicAudio.muted || document.hidden || reduceMotion.matches || !analyser) {
        resetWave();
        return;
      }
      if (timestamp - lastSample >= 50) {
        analyser.getByteFrequencyData(frequencies);
        const ranges = [[2, 5], [5, 10], [10, 18], [18, 33]];
        ranges.forEach(([start, end], index) => {
          let total = 0;
          for (let bin = start; bin < end; bin++) total += frequencies[bin];
          const target = Math.min(13, 3 + total / (end - start) * .065);
          barHeights[index] += (target - barHeights[index]) * .48;
          bars[index].style.height = `${barHeights[index].toFixed(1)}px`;
        });
        lastSample = timestamp;
      }
      animationFrame = requestAnimationFrame(drawWave);
    };
    const startWave = () => {
      if (animationFrame || reduceMotion.matches || document.hidden || !analyser) return;
      animationFrame = requestAnimationFrame(drawWave);
    };
    const prepareAudioAnalysis = () => {
      if (audioContext || reduceMotion.matches) return;
      const AudioContextType = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextType) return;
      try {
        audioContext = new AudioContextType();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = .72;
        frequencies = new Uint8Array(analyser.frequencyBinCount);
        const source = audioContext.createMediaElementSource(musicAudio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
      } catch {
        analyser = null;
      }
    };
    const syncMusicState = () => {
      const playing = !musicAudio.paused && !musicAudio.muted;
      musicControl.dataset.playing = String(playing);
      musicToggle.setAttribute('aria-pressed', String(playing));
      musicToggle.setAttribute('aria-label', `${playing ? '静音' : '播放'}背景音乐：A Night in Bali，William ZZ`);
      if (musicStatus) musicStatus.textContent = playing ? '背景音乐正在播放' : '背景音乐已静音';
      if (playing) startWave(); else resetWave();
    };
    const startMusic = async () => {
      musicAudio.muted = false;
      prepareAudioAnalysis();
      if (audioContext?.state === 'suspended') void audioContext.resume().catch(() => {});
      try {
        await musicAudio.play();
        syncMusicState();
      } catch {
        musicAudio.muted = true;
        musicAudio.pause();
        syncMusicState();
        if (musicStatus) musicStatus.textContent = '音乐暂时无法播放，请点击音乐按钮重试';
      }
    };
    // The entrance button provides the user gesture browsers require for audible playback.
    window.addEventListener('blog:enter', () => { void startMusic(); });
    musicToggle.addEventListener('click', async () => {
      if (switchingMusic) return;
      switchingMusic = true;
      if (!musicAudio.paused && !musicAudio.muted) {
        musicAudio.muted = true;
        musicAudio.pause();
        syncMusicState();
      } else {
        await startMusic();
      }
      switchingMusic = false;
    });
    musicAudio.addEventListener('play', syncMusicState);
    musicAudio.addEventListener('pause', syncMusicState);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) resetWave(); else if (!musicAudio.paused && !musicAudio.muted) startWave();
    });
    reduceMotion.addEventListener('change', () => {
      if (reduceMotion.matches) resetWave(); else if (!musicAudio.paused && !musicAudio.muted) startWave();
    });
    musicAudio.addEventListener('error', () => {
      musicAudio.muted = true;
      syncMusicState();
      if (musicStatus) musicStatus.textContent = '音乐文件暂时无法加载';
    });
    syncMusicState();
  }

  const categoryTabs = [...document.querySelectorAll('.section-nav-link')];
  const contentPanels = [...document.querySelectorAll('.content-panel')];
  const panelIds = new Set(contentPanels.map(panel => panel.id));

  const activateCategory = (id, { updateUrl = false, focus = false, animate = true } = {}) => {
    if (!panelIds.has(id)) return;
    categoryTabs.forEach(tab => {
      const selected = tab.dataset.panel === id;
      tab.classList.toggle('is-current', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus({ preventScroll: true });
    });
    contentPanels.forEach(panel => {
      const selected = panel.id === id;
      const wasHidden = panel.hidden;
      panel.hidden = !selected;
      panel.classList.remove('is-entering');
      if (selected && wasHidden && animate) {
        void panel.offsetWidth;
        panel.classList.add('is-entering');
      }
    });
    if (updateUrl && window.location.hash !== `#${id}`) {
      window.history.pushState({ category: id }, '', `#${id}`);
    }
  };

  categoryTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateCategory(tab.dataset.panel, { updateUrl: true }));
    tab.addEventListener('keydown', event => {
      let nextIndex;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % categoryTabs.length;
      else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + categoryTabs.length) % categoryTabs.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = categoryTabs.length - 1;
      else return;
      event.preventDefault();
      activateCategory(categoryTabs[nextIndex].dataset.panel, { updateUrl: true, focus: true });
    });
  });

  const syncCategoryFromUrl = () => {
    const id = window.location.hash.slice(1);
    if (panelIds.has(id)) activateCategory(id);
  };
  window.addEventListener('popstate', syncCategoryFromUrl);
  window.addEventListener('hashchange', syncCategoryFromUrl);
  activateCategory(panelIds.has(window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'projects', { animate: false });

  document.querySelectorAll('.card-gallery .card-image[data-fallback-src]').forEach(image => {
    const fallbackUrl = new URL(image.dataset.fallbackSrc, document.baseURI).href;
    const useFallback = () => {
      if (image.src !== fallbackUrl) image.src = fallbackUrl;
    };
    image.addEventListener('error', useFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) useFallback();
  });

  const projectShowcases = [...document.querySelectorAll('.project-showcase')];
  projectShowcases.forEach(project => {
    const projectLink = project.querySelector('.project-hitarea');
    let feedbackTimer;
    projectLink?.addEventListener('click', () => {
      clearTimeout(feedbackTimer);
      project.classList.remove('is-activated');
      void project.offsetWidth;
      project.classList.add('is-activated');
      feedbackTimer = setTimeout(() => project.classList.remove('is-activated'), 620);
    });
  });

  const showcase = document.querySelector('.project-showcase:has(.card-gallery)');
  const hitarea = showcase?.querySelector('.project-hitarea');
  if (!showcase || !hitarea) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fineProjectPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const cardTiles = [...showcase.querySelectorAll('.card-tile')];
  const cardArts = cardTiles.map(tile => tile.querySelector('.card-art'));
  let activeCard = -1;
  let cardPointer = null;
  let cardHoverFrame = 0;

  const renderCardHover = () => {
    cardHoverFrame = 0;
    const nextCard = cardPointer ? cardArts.findIndex(art => {
      const bounds = art.getBoundingClientRect();
      return cardPointer.x >= bounds.left && cardPointer.x <= bounds.right && cardPointer.y >= bounds.top && cardPointer.y <= bounds.bottom;
    }) : -1;
    if (nextCard === activeCard) return;
    activeCard = nextCard;
    cardTiles.forEach((tile, index) => tile.classList.toggle('is-hovered', index === nextCard));
    showcase.classList.toggle('has-card-hover', nextCard !== -1);
  };

  const scheduleCardHover = point => {
    cardPointer = point;
    if (!cardHoverFrame) cardHoverFrame = requestAnimationFrame(renderCardHover);
  };

  const trackCardPointer = event => {
    if (!fineProjectPointer.matches || reducedMotion.matches || event.pointerType === 'touch') return;
    scheduleCardHover({ x: event.clientX, y: event.clientY });
  };
  hitarea.addEventListener('pointerenter', trackCardPointer);
  hitarea.addEventListener('pointermove', trackCardPointer);
  hitarea.addEventListener('pointerleave', () => scheduleCardHover(null));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) scheduleCardHover(null);
  });
  fineProjectPointer.addEventListener('change', event => {
    if (!event.matches) scheduleCardHover(null);
  });

  const demoShowcase = document.querySelector('.demo-showcase');
  const demoVisual = demoShowcase?.querySelector('.demo-visual');
  const demoHitarea = demoShowcase?.querySelector('.demo-hitarea');
  let demoMotionFrame = 0;
  let demoTargetX = 0;
  let demoTargetY = 0;

  const renderDemoMotion = () => {
    demoMotionFrame = 0;
    demoVisual.style.setProperty('--demo-x', `${demoTargetX}px`);
    demoVisual.style.setProperty('--demo-y', `${demoTargetY}px`);
  };
  const scheduleDemoMotion = (x, y) => {
    demoTargetX = x;
    demoTargetY = y;
    if (!demoMotionFrame) demoMotionFrame = requestAnimationFrame(renderDemoMotion);
  };

  demoHitarea?.addEventListener('pointermove', event => {
    if (!fineProjectPointer.matches || reducedMotion.matches || event.pointerType === 'touch') return;
    const bounds = demoVisual.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      scheduleDemoMotion(0, 0);
      return;
    }
    const x = (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2);
    const y = (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2);
    scheduleDemoMotion(Math.round(-x * 3), Math.round(-y * 3));
  });
  demoHitarea?.addEventListener('pointerleave', () => scheduleDemoMotion(0, 0));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) scheduleDemoMotion(0, 0);
  });
  fineProjectPointer.addEventListener('change', event => {
    if (!event.matches) scheduleDemoMotion(0, 0);
  });

  const switchVisual = document.querySelector('.switch-demo-visual');
  const switchHitarea = document.querySelector('.switch-demo-hitarea');
  const switchImage = switchVisual?.querySelector('img');
  const switchDesktop = window.matchMedia('(min-width: 721px)');
  let switchMotionFrame = 0;
  let switchProgress = 0;

  const renderSwitchPreview = () => {
    switchMotionFrame = 0;
    if (!switchImage?.naturalWidth || !switchDesktop.matches || !fineProjectPointer.matches || reducedMotion.matches) {
      switchVisual?.style.setProperty('--switch-pan-y', '0px');
      return;
    }
    const imageHeight = switchVisual.clientWidth * switchImage.naturalHeight / switchImage.naturalWidth;
    const travel = Math.max(0, imageHeight - switchVisual.clientHeight);
    switchVisual.style.setProperty('--switch-pan-y', `${Math.round(-travel * switchProgress)}px`);
  };
  const scheduleSwitchPreview = progress => {
    switchProgress = Math.max(0, Math.min(1, progress));
    if (!switchMotionFrame) switchMotionFrame = requestAnimationFrame(renderSwitchPreview);
  };

  switchHitarea?.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || !switchDesktop.matches || !fineProjectPointer.matches || reducedMotion.matches) return;
    const bounds = switchVisual.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      scheduleSwitchPreview(0);
      return;
    }
    scheduleSwitchPreview((event.clientY - bounds.top) / bounds.height);
  });
  switchHitarea?.addEventListener('pointerleave', () => scheduleSwitchPreview(0));
  switchHitarea?.addEventListener('pointercancel', () => scheduleSwitchPreview(0));
  switchDesktop.addEventListener('change', () => scheduleSwitchPreview(0));
  fineProjectPointer.addEventListener('change', () => scheduleSwitchPreview(0));
  reducedMotion.addEventListener('change', () => scheduleSwitchPreview(0));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) scheduleSwitchPreview(0);
  });
  switchImage?.addEventListener('load', () => {
    switchVisual.classList.remove('is-image-missing');
    scheduleSwitchPreview(switchProgress);
  });
  switchImage?.addEventListener('error', () => switchVisual.classList.add('is-image-missing'));
  if (switchImage?.complete && !switchImage.naturalWidth) switchVisual.classList.add('is-image-missing');

  const skillShowcase = document.querySelector('.skill-showcase');
  const skillToggle = skillShowcase?.querySelector('.skill-hitarea');
  const skillDetails = document.querySelector('#skillbridge-details');
  const skillHint = skillShowcase?.querySelector('.skill-hint');
  const skillVisual = skillShowcase?.querySelector('.skill-visual');
  const skillMotionLayer = skillShowcase?.querySelector('.skill-motion-layer');
  const fineSkillPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let skillFeedbackTimer;
  let skillMotionFrame = 0;
  let skillTargetX = 0;
  let skillTargetY = 0;

  const updateSkillMotion = () => {
    skillMotionFrame = 0;
    skillMotionLayer.style.setProperty('--motion-x', `${skillTargetX}px`);
    skillMotionLayer.style.setProperty('--motion-y', `${skillTargetY}px`);
  };

  const scheduleSkillMotion = (x, y) => {
    skillTargetX = x;
    skillTargetY = y;
    if (!skillMotionFrame) skillMotionFrame = requestAnimationFrame(updateSkillMotion);
  };

  skillToggle?.addEventListener('pointermove', event => {
    if (!fineSkillPointer.matches || reducedMotion.matches || event.pointerType === 'touch') return;
    const bounds = skillVisual.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      scheduleSkillMotion(0, 0);
      return;
    }
    const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2)));
    const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2)));
    scheduleSkillMotion(Math.round(-x * 3), Math.round(-y * 3));
  });
  skillToggle?.addEventListener('pointerleave', () => scheduleSkillMotion(0, 0));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) scheduleSkillMotion(0, 0);
  });

  skillToggle?.addEventListener('click', () => {
    const open = skillToggle.getAttribute('aria-expanded') !== 'true';
    skillToggle.setAttribute('aria-expanded', String(open));
    skillToggle.setAttribute('aria-label', `${open ? '收起' : '展开'} SkillBridge 简介`);
    skillDetails.hidden = !open;
    skillShowcase.classList.toggle('is-open', open);
    skillHint.firstChild.textContent = open ? '点击收起简介 ' : '点击查看简介 ';
    clearTimeout(skillFeedbackTimer);
    skillShowcase.classList.remove('is-activated');
    void skillShowcase.offsetWidth;
    skillShowcase.classList.add('is-activated');
    skillFeedbackTimer = setTimeout(() => skillShowcase.classList.remove('is-activated'), 620);
  });

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      showcase.classList.add('is-visible');
      observer.disconnect();
    }, { threshold: .2 });
    observer.observe(showcase);
    if (demoShowcase) {
      const demoObserver = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        demoShowcase.classList.add('is-visible');
        demoObserver.disconnect();
      }, { threshold: .2 });
      demoObserver.observe(demoShowcase);
    }
  }

  const accordion = document.querySelector('.article-accordion');
  const articlePanels = [...document.querySelectorAll('.article-panel')];
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  const revealArticle = panel => {
    if (!accordion || window.innerWidth > 720) return;
    const rail = accordion.getBoundingClientRect();
    const item = panel.getBoundingClientRect();
    const offset = (item.left + item.right - rail.left - rail.right) / 2;
    accordion.scrollBy({ left: offset, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  };

  const activateArticle = panel => {
    articlePanels.forEach(item => {
      const active = item === panel;
      item.classList.toggle('is-active', active);
      if (item.tagName === 'BUTTON') item.setAttribute('aria-pressed', String(active));
      else item.setAttribute('aria-expanded', String(active));
    });
  };

  articlePanels.forEach(panel => {
    panel.addEventListener('pointerenter', event => {
      if (finePointer.matches && (event.pointerType === 'mouse' || event.pointerType === 'pen')) activateArticle(panel);
    });
    panel.addEventListener('focus', () => activateArticle(panel));
    panel.addEventListener('click', () => {
      activateArticle(panel);
      if (reducedMotion.matches) revealArticle(panel);
    });
    panel.addEventListener('transitionend', event => {
      if (event.propertyName === 'flex-basis' && panel.classList.contains('is-active')) revealArticle(panel);
    });
  });
})();
