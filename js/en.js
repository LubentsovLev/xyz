$(function () {
  $('.slider__slider-1').slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><img src="../img/slider/arr_r.svg" alt="next"></button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><img src="../img/slider/arr_l.svg" alt="back"></button>',
    centerMode: false,
    centerPadding: '0px',
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 3.5,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 830,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 2.3,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 570,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 1.5,
          arrows: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 1.2,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 1.1,
          arrows: false,
        },
      },
    ],
  });
  $('.slider__slider-2').slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><img src="../img/slider/arr_r.svg" alt="next"></button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><img src="../img/slider/arr_l.svg" alt="back"></button>',
    centerMode: false,
    centerPadding: '0px',
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    // slidesToShow: 1.442,
    // infinite: false,
    // swipe: false,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 3.5,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 830,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 2.3,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 570,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 1.5,
          arrows: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 1.2,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          // centerMode: true,
          // centerPadding: '20%',
          slidesToShow: 1.1,
          arrows: false,
        },
      },
    ],
  });
});
