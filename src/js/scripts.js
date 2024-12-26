import tippy from 'tippy.js';
import { MaskInput } from 'maska';

window.siblings = (el) => [].slice.call(el.parentNode.children).filter((child) => child !== el);

window.showScrollBar = () => {
  document.querySelector('html').classList.remove('noskroll');
  document.querySelector('body').classList.remove('noskroll');
};

window.hideScrollBar = () => {
  document.querySelector('html').classList.add('noskroll');
  document.querySelector('body').classList.add('noskroll');
};

Fancybox.bind('[data-fancybox]', {
  Hash: false,
});

tippy('[data-tippy-content]');

window.addEventListener('dblclick', (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log(event);
});

/* Accordion */

function accordionOpen(header, content) {
  header.classList.add('is-active');
  content.style.maxHeight = content.scrollHeight + 'px';
  setTimeout(() => {
    content.classList.add('is-active');
  }, 300);
}

function accordionClose(header, content) {
  content.classList.remove('is-active');
  header.classList.remove('is-active');
  setTimeout(() => {
    content.style.maxHeight = '0';
  }, 0);
}

(() => {
  const accordionItems = document.querySelectorAll('.js-accordion-item');
  accordionItems.forEach((el) => {
    const header = el.querySelector('.js-accordion-item-header');
    const content = el.querySelector('.js-accordion-item__content');

    if (!header && !content) return false;

    header.addEventListener('click', () => {
      if (!header.classList.contains('is-active')) {
        accordionOpen(header, content);

        return;
      }

      accordionClose(header, content);
    });

    if (el.classList.contains('is-default-open') && window.innerWidth > 1024) {
      accordionOpen(header, content);
    }
  });
})();

/* Tabs */
(() => {
  const tabsSections = document.querySelectorAll('.tabs');
  tabsSections.forEach((el) => {
    const tabBtn = el.querySelectorAll('.tabs__button');
    const content = el.querySelector('.tabs__content');

    tabBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;

        if (!tabId) return false;

        if (el.querySelector('.tabs__button.is-active')) {
          el.querySelector('.tabs__button.is-active').classList.remove('is-active');
        }

        btn.classList.add('is-active');

        const result = content.querySelector(`.is-tab-${tabId}`);

        if (el.querySelector('.tabs__content-box.is-active')) {
          el.querySelector('.tabs__content-box.is-active').classList.remove('is-active');
        }

        if (!result) return false;

        result.classList.add('is-active');
      });
    });
  });
})();

/* toTop btn */
(() => {
  const btn = document.querySelectorAll('.to-top');
  btn.forEach((el) => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if (window.scrollY) {
        el.classList.add('is-visible');
      }

      el.classList.remove('is-visible');
    });
  });
})();

(() => {
  const catalogGrid = document.querySelector('.catalog-grid');
  const container = document.querySelector('.catalog-grid-type');
  if (!container) return false;
  const items = container.querySelectorAll('.catalog-grid-type__item');
  items.forEach((el) => {
    el.addEventListener('click', () => {
      const type = el.dataset.type;
      container.querySelector('.is-active').classList.remove('is-active');
      el.classList.add('is-active');

      document.cookie = `catalog_grid_type=${type}; expires=0; path=/;`;

      if (type === 'grid') {
        catalogGrid.classList.remove(`is-list`);
      } else {
        catalogGrid.classList.add(`is-list`);
      }
    });
  });
})();

/* Select */
/* 
if (typeof require !== 'undefined') {
  var customSelect = require('custom-select').default;
}
const mySelects = customSelect('select'); */

const selects = document.querySelectorAll('.custom-select');
selects.forEach((element) => {
  const dropdown = element.querySelector('.custom-select-dropdown');
  const opener = element.querySelector('.custom-select-opener');
  const options = element.querySelectorAll('.custom-select-option');
  const mainValue = element.querySelector('.custom-select-opener__value');

  opener.addEventListener('click', () => {
    if (element.classList.contains('is-open')) {
      element.classList.remove('is-open');
    } else {
      const openSelects = document.querySelectorAll('.custom-select.is-open');
      openSelects.forEach((select) => {
        select.classList.remove('is-open');
      });

      element.classList.add('is-open');
    }
  });

  options.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.classList.contains('disabled')) {
        return;
      }

      const value = el.dataset.value;

      if (!value) {
        element.classList.remove('is-open');
      }

      mainValue.value = value;
      const activeItem = element.querySelector('.custom-select-option.is-selected');

      if (!activeItem) {
        return;
      }
      activeItem.classList.remove('is-selected');
      el.classList.add('is-selected');
      element.classList.remove('is-open');
    });
  });
});

document.addEventListener('mouseup', (e) => {
  if (!e.target.closest('.custom-select')) {
    const openSelects = document.querySelectorAll('.custom-select.is-open');
    openSelects.forEach((select) => {
      select.classList.remove('is-open');
    });
  }
});

/* Start phone mask */

(() => {
  const maskList = [
    /*     {
      name: 'Russia',
      code: '+7',
      iso: 'RU',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/ru.svg',
      mask: '(###)###-##-##',
    }, */
    {
      name: 'Belarus',
      code: '+375',
      iso: 'BY',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/by.svg',
      mask: ' (##) ###-##-##',
    },
  ];

  const phoneInputs = document.querySelectorAll('.phone-input');

  phoneInputs.forEach((el) => {
    const input = el.querySelector('.input');
    /*  const dropdown = el.querySelector('.phone-input__mask-switch-dropdown');
    const current = el.querySelector('.phone-input__mask-switch-current'); */
    let mask = null;
    function setMask(maskItem) {
      mask = new MaskInput(input, {
        mask: `${maskItem.code}${maskItem.mask}`,
        eager: true,
        onMaska: (detail) => {
          if (detail.completed) {
            el.classList.add('is-valid');
          } else {
            el.classList.remove('is-valid');
          }
        },
      });
    }
    setMask(maskList[0]);

    /*     maskList.forEach((item) => {
      var div = document.createElement('div');
      div.innerHTML = `<div class="phone-input__dropdown-item"><img src="${item.flag}" class="phone-input__main-icon"> ${item.name} ${item.code}</div>`;
      dropdown.appendChild(div);

      div.addEventListener('click', (e) => {
        current.innerHTML = `<img src="${item.flag}" class="phone-input__main-icon">`;
        input.value = '+';
        mask.destroy();
        setMask(item);
      });
    });
    current.innerHTML = `<img src="${maskList[0].flag}" class="phone-input__main-icon">`; */

    /*     current.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('is-active');
    }); */

    input.addEventListener('focus', () => {
      if (!input.value) {
        input.value = '+';
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.phone-input__mask-switch')) {
      document
        .querySelectorAll('.phone-input__mask-switch-dropdown.is-active')
        .forEach((el) => el.classList.remove('is-active'));
    }
  });
})();

/* Catalog card */
const catalogCards = document.querySelectorAll('.catalog-card');
catalogCards.forEach((el) => {
  const availability = el.querySelectorAll('.catalog-card__availability');
  const availabilityContent = el.querySelector('.catalog-card__availability-content-wrapper');

  if (!availabilityContent) {
    return false;
  }

  const isMobile = window.innerWidth <= 576;

  availability.forEach((el2) => {
    tippy(el2, {
      content: availabilityContent.innerHTML,
      allowHTML: true,
      interactive: !isMobile,
      appendTo: () => document.body,
      theme: 'light-border',
      maxWidth: 'none',
      trigger: isMobile ? 'click' : 'mouseenter focus',
      onShow() {
        if (!isMobile) {
          return;
        }
        window.hideScrollBar();
      },
      onHide() {
        if (!isMobile) {
          return;
        }
        window.showScrollBar();
      },
    });
  });
});

const topCartBtns = document.querySelectorAll(
  '.catalog-card__top-btn, .product-page-info-order-item__cart, .assortment-item__cart, .order-card-product__top-btn'
);

topCartBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
  });
});

const cardCounter = document.querySelectorAll('.catalog-card__counter');

cardCounter.forEach((btn) => {
  const minusBtn = btn.querySelector('.catalog-card__counter-button.is-minus');
  const plusBtn = btn.querySelector('.catalog-card__counter-button.is-plus');
  const input = btn.querySelector('.catalog-card__counter-input input');

  minusBtn.addEventListener('click', () => {
    if (input.value <= 1) {
      return;
    }

    input.value = Number(input.value) - 1;
  });

  plusBtn.addEventListener('click', () => {
    input.value = Number(input.value) + 1;
  });

  input.addEventListener('change', () => {
    const value = Number(input.value);

    if (value <= 0 || isNaN(value)) {
      input.value = 1;

      return;
    }

    input.value = value;
  });
});

const anchorButtons = document.querySelectorAll('[data-anchor]');
anchorButtons.forEach((el) => {
  el.addEventListener('click', () => {
    const targetData = el.dataset.anchor;
    const target = document.querySelector(`#${targetData}`);

    if (!target) {
      return;
    }

    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
});

const addAdressBtn = document.querySelectorAll('.profile-page__add-delivery-adress');
addAdressBtn.forEach((el) => {
  const hiddenBlock = document.querySelector('.profile-page__fields-box.hidden');

  if (!hiddenBlock) {
    return;
  }

  el.addEventListener('click', () => {
    hiddenBlock.classList.remove('hidden');
    el.remove();
  });
});

const hasHorizontalScrollbar = (element) => element.scrollWidth > element.clientWidth;

const orderTableWr = document.querySelectorAll('.scroll-container');
orderTableWr.forEach((el) => {
  const content = el.querySelector('.scroll-container__content');

  if (!hasHorizontalScrollbar(content)) {
    return;
  }

  el.classList.add('is-scroll');

  const contentScrollHeight = content.scrollWidth - el.offsetWidth;
  const shadowTop = el.querySelector('.scroll-shadow--top');
  const shadowBottom = el.querySelector('.scroll-shadow--bottom');

  content.addEventListener('scroll', function () {
    var currentScroll = this.scrollLeft / contentScrollHeight;
    shadowTop.style.opacity = currentScroll;
    shadowBottom.style.opacity = 1 - currentScroll;

    if (Number(shadowTop.style.opacity) <= 0) {
      shadowTop.classList.add('hidden');
    } else {
      shadowTop.classList.remove('hidden');
    }

    if (Number(shadowBottom.style.opacity) <= 0) {
      shadowBottom.classList.add('hidden');
    } else {
      shadowBottom.classList.remove('hidden');
    }
  });
});

const contentTables = document.querySelectorAll('.editor-content table');

contentTables.forEach((el) => {
  const wrapper = document.createElement('div');
  wrapper.classList = 'table-owerflow';

  const tableCopy = el.cloneNode(true);
  wrapper.appendChild(tableCopy);
  console.log(tableCopy);

  el.parentNode.insertBefore(wrapper, el);
  el.remove();
});

const assortmentItemBtn = document.querySelectorAll('.assortment-item__more');
assortmentItemBtn.forEach((el) => {
  el.addEventListener('click', () => {
    const parrent = el.closest('.assortment-item');
    const id = parrent.dataset.productId;
    const childProducts = document.querySelectorAll(`.assortment-item-list.parrent-product-${id}`);
    const text = document.querySelector(`.assortment-item__more-text`);

    parrent.classList.toggle('is-active');
    childProducts.forEach((item) => {
      item.classList.toggle('is-visible');
    });

    if (parrent.classList.contains('is-active')) {
      text.innerHTML = 'Свернуть';
    } else {
      text.innerHTML = 'Все товары';
    }
  });
});

const learnAboutEnrollmentBtns = document.querySelectorAll('[data-learn-about-enrollment-product-name]');

learnAboutEnrollmentBtns.forEach((el) => {
  el.addEventListener('click', () => {
    const data = el.dataset.learnAboutEnrollmentProductName;
    const target = document.getElementById('learn-about-enrollment_popup-name');
    const targetTitle = document.getElementById('learn-about-enrollment_popup-name-title');

    console.log(target);
    if (!data || !target) {
      return;
    }
    targetTitle.innerHTML = data;
    target.value = data;
  });
});

import './import/modules';
import './import/components';
import './components/sliders';
import './components/map';
