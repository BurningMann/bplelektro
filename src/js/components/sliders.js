const mainSlider = document.querySelectorAll('.main-slider');
mainSlider.forEach((el) => {
  const slider = el.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
  });
});

const popularSeriesSlider = document.querySelectorAll('.popular-series');
popularSeriesSlider.forEach((el) => {
  const slider = el.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
    breakpoints: {
      375: {
        slidesPerView: 'auto',
      },
    },
  });
});
