const header = document.querySelector('.header');
const menuBurger = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.burger-menu');
const search = document.querySelector('.header-search');

menuBurger.addEventListener('click', () => {
  if (menuBurger.classList.contains('is-active')) {
    window.showScrollBar();
    menuBurger.classList.remove('is-active');
    burgerMenu.classList.remove('is-active');

    return;
  }

  window.hideScrollBar();
  menuBurger.classList.add('is-active');
  burgerMenu.classList.add('is-active');
});
