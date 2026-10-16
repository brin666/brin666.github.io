(() => {
  const film = document.getElementById('demo-film');
  const chapters = document.querySelector('.film-chapters');
  const message = document.getElementById('video-message');
  if (!film || !chapters || !message) return;
  const buttons = [...chapters.querySelectorAll('[data-seek]')];
  const showError = () => {
    message.hidden = false;
    message.textContent = '影片暂时无法载入，可重试打开 MP4，或继续查看下方原图与结果。';
  };
  const seek = async (button) => {
    const time = Number(button.dataset.seek);
    if (!Number.isFinite(time) || time < 0) return;
    try {
      if (film.readyState < HTMLMediaElement.HAVE_METADATA) {
        await new Promise((resolve, reject) => {
          const finish = (error) => {
            clearTimeout(timeout);
            film.removeEventListener('loadedmetadata', ready);
            film.removeEventListener('error', failed);
            error ? reject(error) : resolve();
          };
          const ready = () => finish();
          const failed = () => finish(new Error('Video unavailable'));
          const timeout = setTimeout(failed, 15000);
          film.addEventListener('loadedmetadata', ready, {once:true});
          film.addEventListener('error', failed, {once:true});
          film.load();
        });
      }
      film.currentTime = Math.min(time, film.duration);
      film.pause();
      message.hidden = true;
      film.scrollIntoView({behavior:'instant', block:'center'});
    } catch { showError(); }
  };
  chapters.addEventListener('click', event => {
    const button = event.target.closest('button[data-seek]');
    if (button && chapters.contains(button)) void seek(button);
  });
  film.addEventListener('error', showError);
  const source = film.querySelector('source');
  source?.addEventListener('error', showError);
  chapters.hidden = false;
})();
