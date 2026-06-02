(function(){
  function ensureGuofengVideo(){
    document.querySelectorAll('.qy-dh-video').forEach(function(v){
      v.muted = true;
      v.playsInline = true;
      v.setAttribute('playsinline','');
      v.setAttribute('webkit-playsinline','');
      var p = v.play && v.play();
      if (p && p.catch) {
        p.catch(function(){ v.classList.add('qy-video-fail'); });
      }
      setTimeout(function(){
        if (v.readyState === 0 || v.videoWidth === 0) v.classList.add('qy-video-fail');
      }, 1200);
    });
  }
  document.addEventListener('DOMContentLoaded', ensureGuofengVideo);
  document.addEventListener('click', ensureGuofengVideo, true);
  window.addEventListener('load', ensureGuofengVideo);
})();
