document.querySelector('.fixed_up').onclick = function(){
 window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // 可选，平滑滚动
  });
}