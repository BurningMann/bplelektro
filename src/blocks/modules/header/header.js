const header = document.querySelector('.header');
const menuBurger = document.querySelector('.header-burger');

menuBurger.addEventListener('click', () => {
  if (menuBurger.classList.contains('is-active')) {
    window.showScrollBar();
    menuBurger.classList.remove('is-active');
  } else {
    window.hideScrollBar();
    menuBurger.classList.add('is-active');
  }
});
