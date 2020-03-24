export const launchSomeCssTricks = _ => {
  //Height Transition
  var el = document.querySelector('.el');
  var height = el.scrollHeight;
  el.style.setProperty('--max-height', height + 'px');

  //Mouse cursor gradient tracking
  var btn = document.querySelector('.mouse-cursor-gradient-tracking');
  btn.onmousemove = function(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  };
};
