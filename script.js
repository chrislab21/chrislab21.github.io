document.addEventListener('DOMContentLoaded', () => {

  // ── WORK GRID: HOVER VIDEO PREVIEW ──
  // Only wire this up on devices that actually support hover (mouse/trackpad).
  // Touch devices don't reliably fire mouseenter/mouseleave, so there's no point
  // paying the video-loading cost there.
  const canHover = window.matchMedia('(hover: hover)').matches;

  if (canHover) {
    document.querySelectorAll('.work-item').forEach(item => {
      const video = item.querySelector('.thumb-video');
      const still = item.querySelector('.thumb-still');
      if (!video || !still) return;
      item.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
        video.style.opacity = '1';
      });
      item.addEventListener('mouseleave', () => {
        video.pause();
        video.style.opacity = '0';
      });
    });
  }

  // ── REEL EMBED (reel page) ──
  const reelBtn = document.getElementById('reelPlayBtn');
  const reelWrap = document.getElementById('reelWrap');
  const REEL_URL = 'https://player.vimeo.com/video/1187817817?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=0';
  if (reelBtn && reelWrap) {
    reelBtn.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = REEL_URL;
      iframe.allow = 'autoplay; fullscreen';
      iframe.allowFullscreen = true;
      document.getElementById('reelPlaceholder').remove();
      reelWrap.appendChild(iframe);
    });
  }

});