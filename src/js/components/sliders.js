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

const productsSlider = document.querySelectorAll('.product-slider');
productsSlider.forEach((el) => {
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
      576: {
        slidesPerView: 2,
      },
      780: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    },
  });
});

const sertSlider = document.querySelectorAll('.sert-slider');
sertSlider.forEach((el) => {
  const slider = el.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });
});

const reviewSlider = document.querySelectorAll('.review-slider');
reviewSlider.forEach((el) => {
  const slider = el.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });
});
