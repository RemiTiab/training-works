export const launchHamburgers = (_) => {
  const burgerMenu = document.querySelector('.hamburger');
  const menuBlock = document.querySelector('.header__nav');

  burgerMenu.style.display = 'block';

  burgerMenu.addEventListener('click', (_) => {
    burgerMenu.classList.toggle('is-active');
    menuBlock.classList.toggle('is-active');
  });
};
