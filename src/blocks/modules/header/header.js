const header = document.querySelector('.header');
const menuBurger = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.burger-menu');
const search = document.querySelector('.header-search');
const catalogBtn = document.querySelectorAll('.js-catalog-btn');
const catalog = document.querySelector('.catalog-menu-wrapper');
const catalogMenu = document.querySelector('.catalog-menu');

menuBurger.addEventListener('click', () => {
  if (menuBurger.classList.contains('is-active') || catalog.classList.contains('is-active')) {
    window.showScrollBar();
    menuBurger.classList.remove('is-active');
    burgerMenu.classList.remove('is-active');
    catalog.classList.remove('is-active');

    return;
  }

  window.hideScrollBar();
  menuBurger.classList.add('is-active');
  burgerMenu.classList.add('is-active');
});

catalogBtn.forEach((el) => {
  el.addEventListener('click', () => {
    if (catalog.classList.contains('is-active')) {
      window.showScrollBar();
      catalog.classList.remove('is-active');

      return;
    }

    window.hideScrollBar();
    catalog.classList.add('is-active');
  });
});

const catalogMenuItems = document.querySelectorAll('.catalog-menu-item');
catalogMenuItems.forEach((el) => {
  const header = el.querySelector('.catalog-menu-item__header');

  if (!header || el.classList.contains('is-link') || window.innerWidth <= 1024) {
    return;
  }

  el.addEventListener('click', () => {
    const openElement = document.querySelector('.catalog-menu-item.is-active');
    
    if (openElement) {
      openElement.classList.remove('is-active');
    }

    el.classList.add('is-active');
  });

  header.addEventListener('click', () => {
    catalogMenu.scrollTop = 0;
  })
});

const headerSearchInput = document.querySelector('.header-search__input');
if (headerSearchInput && window.innerWidth <= 780) {
  headerSearchInput.placeholder = 'Поиск';
}