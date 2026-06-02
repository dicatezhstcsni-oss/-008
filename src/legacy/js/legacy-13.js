function openShandongGuide(){
  var page = document.getElementById('shandongPreGuide');
  if(page) page.classList.add('active');
}
function closeShandongGuide(){
  var page = document.getElementById('shandongPreGuide');
  if(page) page.classList.remove('active');
}
function enterJinanOriginalGuide(e){
  if(e){
    e.preventDefault();
    e.stopPropagation();
  }
  closeShandongGuide();
  if(typeof window.openMapPage === 'function'){
    window.openMapPage();
    return false;
  }
  var qyPage = document.getElementById('qyTourMapPage');
  if(qyPage){
    qyPage.classList.add('qy-active');
    document.body.classList.add('qy-map-open');
    return false;
  }
  alert('未找到原始泉城医养旅游导览图页面。');
  return false;
}
