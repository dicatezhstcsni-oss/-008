(function() {
  var avatar = document.getElementById('qcAvatarLauncher');
  var overlay = document.getElementById('qcVideoOverlay');
  var video = document.getElementById('qcGuideVideo');

  function openVideo() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    var p = video.play();
    if (p && p.catch) p.catch(function() { /* 用户可手动点击播放 */ });
  }

  function closeVideo() {
    video.pause();
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }

  avatar.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    openVideo();
  });

  video.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    closeVideo();
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeVideo();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeVideo();
  });
})();
