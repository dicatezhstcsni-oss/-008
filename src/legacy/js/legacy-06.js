(function(){
  function playGuofengNarratorVideo(){
    document.querySelectorAll('.qy-dh-video').forEach(function(v){
      try { v.muted = true; v.play && v.play().catch(function(){}); } catch(e) {}
    });
  }
  document.addEventListener('click', playGuofengNarratorVideo, true);
  document.addEventListener('touchstart', playGuofengNarratorVideo, true);
  window.addEventListener('load', playGuofengNarratorVideo);
  setInterval(playGuofengNarratorVideo, 1500);
})();
