const INTRO_DURATION = 9;
const HANDOFF_START = 7.25;
const UI_FADE_START = 7.8;

function smoothstep(value) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

export function createEntranceUI({ onSkip = () => {} } = {}) {
  const root = document.documentElement;
  const shell = document.querySelector('.lab-shell');
  const overlay = document.getElementById('entrance-ui');
  const title = document.getElementById('entrance-title');
  const status = document.getElementById('entrance-status');
  const copy = document.getElementById('entrance-copy');
  const skipButton = document.getElementById('entrance-skip');
  const skipLink = document.querySelector('.skip-link');
  const stage = document.querySelector('.stage');
  const scene = document.getElementById('scene');
  const state = {
    phase: root.dataset.geneEntrance || 'idle',
    scene,
    placeholder: null,
    originalStyle: '',
    originalShellOpacity: '',
    originalShellVisibility: '',
    originalShellWillChange: '',
    originalShellInert: false,
    originalSkipLinkInert: false,
    capturedShellState: false,
    originalAriaHidden: null,
    previousFocus: null,
    skipRequested: false,
    skipFocus: false,
    scale: [1, 1],
  };

  function setPhase(phase) {
    if (state.phase === phase) return;
    state.phase = phase;
    root.dataset.geneEntrance = phase;
    overlay.dataset.phase = phase;
  }

  function requestSkip(fromButton = false) {
    if (!['waiting', 'loading', 'active', 'handoff'].includes(state.phase)) return;
    state.skipRequested = true;
    state.skipFocus ||= fromButton;
    onSkip();
  }

  skipButton.addEventListener('click', () => requestSkip(true));
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !['waiting', 'loading', 'active', 'handoff'].includes(state.phase)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    requestSkip(false);
  }, true);

  function showLoading({ focus = false } = {}) {
    if (state.phase === 'active') return;
    state.previousFocus = document.activeElement;
    state.skipRequested = false;
    state.skipFocus = false;
    overlay.style.opacity = '1';
    copy.style.opacity = '';
    skipButton.style.opacity = '';
    title.textContent = '基因表达';
    status.textContent = '正在准备分子序列…';
    if (!state.capturedShellState) {
      state.originalShellInert = shell.inert;
      state.originalSkipLinkInert = skipLink?.inert || false;
      state.originalShellOpacity = shell.style.opacity;
      state.originalShellVisibility = shell.style.visibility;
      state.originalShellWillChange = shell.style.willChange;
      state.capturedShellState = true;
    }
    shell.inert = true;
    if (skipLink) skipLink.inert = true;
    shell.setAttribute('aria-hidden', 'true');
    // Paint the paper interface once behind the opaque opening. Keeping this
    // compositor layer warm avoids a first-paint stall when it fades in at 7.8s.
    shell.style.willChange = 'opacity';
    shell.style.opacity = '.001';
    shell.style.visibility = 'visible';
    setPhase('loading');
    if (focus || (state.previousFocus !== document.body && shell.contains(state.previousFocus))) skipButton.focus({ preventScroll: true });
  }

  function activate() {
    if (state.skipRequested || !state.scene || !stage) return false;
    if (!state.placeholder) {
      state.placeholder = document.createComment('gene-expression-scene-position');
      state.scene.parentNode.insertBefore(state.placeholder, state.scene);
    }
    state.originalStyle = state.scene.getAttribute('style') || '';
    state.originalAriaHidden = state.scene.getAttribute('aria-hidden');
    state.scene.classList.add('gene-expression-entrance');
    document.body.append(state.scene);
    Object.assign(state.scene.style, {
      position: 'fixed', inset: '0 auto auto 0', width: '100vw', height: '100dvh',
      minHeight: '0', margin: '0', zIndex: '90', transformOrigin: '0 0', transform: 'none',
      overflow: 'visible', borderRadius: '0', pointerEvents: 'none',
    });
    state.scene.setAttribute('aria-hidden', 'true');
    overlay.style.opacity = '1';
    title.textContent = '基因表达';
    status.textContent = '从 DNA 到多肽';
    setPhase('active');
    return true;
  }

  function update(time) {
    const viewportWidth = Math.max(1, window.innerWidth || document.documentElement.clientWidth);
    const viewportHeight = Math.max(1, window.innerHeight || document.documentElement.clientHeight);
    const rect = stage.getBoundingClientRect();
    const targetLeft = rect.left + stage.clientLeft;
    const targetTop = rect.top + stage.clientTop;
    const targetWidth = Math.max(1, stage.clientWidth);
    const targetHeight = Math.max(1, stage.clientHeight);
    const sx = Math.max(0.001, targetWidth / viewportWidth);
    const sy = Math.max(0.001, targetHeight / viewportHeight);
    const handoff = smoothstep((time - HANDOFF_START) / (INTRO_DURATION - HANDOFF_START));
    const x = targetLeft * handoff;
    const y = targetTop * handoff;
    state.scale = [1 + (sx - 1) * handoff, 1 + (sy - 1) * handoff];
    state.scene.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) scale(${state.scale[0].toFixed(5)},${state.scale[1].toFixed(5)})`;
    const fade = smoothstep((time - HANDOFF_START) / (INTRO_DURATION - HANDOFF_START));
    overlay.style.opacity = '1';
    copy.style.opacity = String(1 - fade);
    skipButton.style.opacity = String(1 - fade * 0.28);
    if (time >= HANDOFF_START) setPhase('handoff');
    else if (state.phase === 'handoff') setPhase('active');
    if (time >= UI_FADE_START) {
      shell.style.visibility = 'visible';
      shell.style.opacity = String(Math.max(.001, smoothstep((time - UI_FADE_START) / (INTRO_DURATION - UI_FADE_START))));
    } else {
      shell.style.visibility = 'visible';
      shell.style.opacity = '.001';
    }
    return state.scale.slice();
  }

  function finish() {
    if (state.placeholder?.isConnected && state.scene) {
      state.placeholder.replaceWith(state.scene);
      state.placeholder = null;
    }
    if (state.scene) {
      state.scene.classList.remove('gene-expression-entrance');
      state.scene.setAttribute('style', state.originalStyle);
      if (state.originalAriaHidden === null) state.scene.removeAttribute('aria-hidden');
      else state.scene.setAttribute('aria-hidden', state.originalAriaHidden);
    }
    shell.inert = state.originalShellInert;
    if (skipLink) skipLink.inert = state.originalSkipLinkInert;
    shell.removeAttribute('aria-hidden');
    shell.style.opacity = state.originalShellOpacity;
    shell.style.visibility = state.originalShellVisibility;
    shell.style.willChange = state.originalShellWillChange;
    state.capturedShellState = false;
    overlay.style.opacity = '';
    copy.style.opacity = '';
    skipButton.style.opacity = '';
    setPhase('complete');
    const focusTarget = state.previousFocus?.isConnected && state.previousFocus !== document.body
      ? state.previousFocus
      : state.skipFocus ? document.getElementById('play') : null;
    if (focusTarget && !focusTarget.inert) focusTarget.focus?.({ preventScroll: true });
    state.skipRequested = false;
    state.skipFocus = false;
    return true;
  }

  function cancel() {
    if (state.placeholder?.isConnected && state.scene) {
      state.placeholder.replaceWith(state.scene);
      state.placeholder = null;
    }
    if (state.scene) {
      state.scene.classList.remove('gene-expression-entrance');
      state.scene.setAttribute('style', state.originalStyle);
      if (state.originalAriaHidden === null) state.scene.removeAttribute('aria-hidden');
      else state.scene.setAttribute('aria-hidden', state.originalAriaHidden);
    }
    shell.inert = state.originalShellInert;
    if (skipLink) skipLink.inert = state.originalSkipLinkInert;
    shell.removeAttribute('aria-hidden');
    shell.style.opacity = state.originalShellOpacity;
    shell.style.visibility = state.originalShellVisibility;
    shell.style.willChange = state.originalShellWillChange;
    state.capturedShellState = false;
    overlay.style.opacity = '';
    copy.style.opacity = '';
    skipButton.style.opacity = '';
    delete root.dataset.geneEntrance;
    overlay.dataset.phase = 'idle';
    state.phase = 'idle';
    if (document.activeElement === skipButton) document.getElementById('play')?.focus({ preventScroll: true });
    state.skipRequested = false;
  }

  return {
    get phase() { return state.phase; },
    get skipRequested() { return state.skipRequested; },
    get scale() { return state.scale.slice(); },
    showLoading,
    activate,
    update,
    finish,
    cancel,
  };
}
