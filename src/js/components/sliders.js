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
    slidesPerView: 2,
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

const productSLiderContainer = document.querySelectorAll('.product-page-slider');
productSLiderContainer.forEach((el) => {
  const objectSLider = el.querySelector('.product-page-slider__main .swiper');
  const objectSLiderThumb = el.querySelector('.product-page-slider__thumbs .swiper');

  const swiperThumb = new Swiper(objectSLiderThumb, {
    slidesPerView: '4',
    loop: true,
    spaceBetween: 10,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
  });

  const swiper = new Swiper(objectSLider, {
    slidesPerView: '1',
    loop: true,
    thumbs: {
      swiper: swiperThumb,
    },
  });
});

const videoSlider = document.querySelectorAll('.video-slider');
videoSlider.forEach((el) => {
  const slider = el.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    loop: true,
    speed: 700,
    spaceBetween: 10,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
  });
});
