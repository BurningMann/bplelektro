const popupButtons = document.querySelectorAll('[data-popup]');
const closePopup = document.querySelectorAll('.js-close-popup');
popupButtons.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const popupSlug = el.dataset.popup;
    window.openDialog(popupSlug);
  });
});

closePopup.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const popup = el.closest('.popup');
    if (popup) {
      popup.classList.remove('is-active');
      window.showScrollBar();
    }
  });
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup') && !e.target.classList.contains('success_popup')) {
    e.target.classList.remove('is-active');
    window.showScrollBar();
  }
});

let toastTimeout = null;
window.activateSuccessPopup = (title = 'Спасибо', text, delay) => {
  const popup = document.querySelector('.success_popup');
  if (!popup) return false;

  const toastTitle = popup.querySelector('.success-popup-title');
  const toastText = popup.querySelector('.success-popup-message');
  toastTitle.toastTitle = title;
  toastText.innerHTML = text;
  popup.classList.add('is-active');

  if (!delay) {
    return false;
  }

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    popup.classList.remove('is-active');
    setTimeout(() => {
      toastText.innerHTML = '';
    }, 300);
  }, delay);
};

window.openDialog = (target) => {
  const popup = document.querySelector(`.${target}_popup`);
  if (!popup) {
    return;
  }

  popup.classList.add('is-active');
  window.hideScrollBar();
};
