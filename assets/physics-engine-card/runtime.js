(() => {
  const stage = document.querySelector('[data-engine-motion]');
  const link = stage?.closest('.project-showcase')?.querySelector('.project-hitarea');
  const video = stage?.querySelector('video');
  if (!stage || !link || !video) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const base = new URL('./assets/physics-engine-card/', document.baseURI);
  let hovered = false, focused = false, visible = false, failed = false;
  let loading = null, started = false, completed = false;
  const wanted = () => (hovered || focused) && visible && !document.hidden && !reduce.matches && !failed;
  const fail = () => { failed = true; video.pause(); stage.dataset.videoState = 'fallback'; };
  async function load() {
    const [response, budgetResponse] = await Promise.all([fetch(new URL('timeline.json',base)), fetch(new URL('motion-budget.json',base))]);
    if (!response.ok || !budgetResponse.ok) throw Error('Motion manifest unavailable');
    const timeline = await response.json(), budget = await budgetResponse.json();
    if (budget.delivery?.selected !== 'baked-video' || budget.runtime?.controller !== 'autonomous-playback' || !budget.passes || timeline.frameCount < 2 || timeline.fps <= 0) throw Error('Invalid motion manifest');
    video.src = new URL('motion.mp4',base).href;
    await new Promise((resolve,reject) => {
      video.addEventListener('loadedmetadata',resolve,{once:true});
      video.addEventListener('error',reject,{once:true});
      video.load();
    });
    if (Math.abs(video.duration - timeline.frameCount / timeline.fps) > 1 / timeline.fps) throw Error('Video and timeline disagree');
  }
  async function sync() {
    if (!wanted()) { video.pause(); started = false; completed = false; stage.dataset.videoState = failed ? 'fallback' : 'poster'; return; }
    if (completed || started) return;
    started = true;
    try {
      loading ??= load(); await loading;
      if (!wanted()) { started = false; return; }
      video.currentTime = 0; await video.play();
      if (wanted()) stage.dataset.videoState = 'playing'; else sync();
    } catch (error) { if (error.name !== 'AbortError') fail(); else { started = false; if (wanted()) sync(); } }
  }
  video.muted = true; video.loop = false;
  video.addEventListener('error',fail);
  video.addEventListener('ended',() => { completed = true; stage.dataset.videoState = 'ended'; });
  link.addEventListener('pointerenter',e => { if (fine.matches && e.pointerType !== 'touch') { hovered = true; sync(); } });
  link.addEventListener('pointerleave',() => { hovered = false; sync(); });
  link.addEventListener('focus',() => { focused = true; sync(); });
  link.addEventListener('blur',() => { focused = false; sync(); });
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }).observe(stage);
  reduce.addEventListener('change',sync); document.addEventListener('visibilitychange',sync);
  window.addEventListener('pagehide',() => video.pause()); window.addEventListener('pageshow',sync);
})();
