export const launchHeaderBackgroundScrollEffect = _ => {
  function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('.header-paralax .i1');
    scrollPos = window.scrollY;

    if (scrollPos <= 600) {
      headerText.style.transform = 'translateY(' + -scrollPos / 3 + 'px' + ')';
      headerText.style.opacity = 1 - scrollPos / 300;
    }
  }

  window.addEventListener('scroll', scrollBanner);
};
