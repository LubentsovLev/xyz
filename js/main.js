// $(function () {
//   $('.slider__slider-1').slick({
//     nextArrow:
//       '<button type="button" class = "slick-arrow slick-next"><img src="img/slider/arr_r.svg" alt="next"></button>',
//     prevArrow:
//       '<button type="button" class = "slick-arrow slick-prev"><img src="img/slider/arr_l.svg" alt="back"></button>',
//     centerMode: false,
//     centerPadding: '0px',
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: false,
//     responsive: [
//       {
//         breakpoint: 1160,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 3.5,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 3,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 830,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 2.3,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 2,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 570,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 1.5,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 430,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 1.2,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 375,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 1.1,
//           arrows: false,
//         },
//       },
//     ],
//   });
//   $('.slider__slider-2').slick({
//     nextArrow:
//       '<button type="button" class = "slick-arrow slick-next"><img src="img/slider/arr_r.svg" alt="next"></button>',
//     prevArrow:
//       '<button type="button" class = "slick-arrow slick-prev"><img src="img/slider/arr_l.svg" alt="back"></button>',
//     centerMode: false,
//     centerPadding: '0px',
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: false,
//     // slidesToShow: 1.442,
//     // infinite: false,
//     // swipe: false,
//     responsive: [
//       {
//         breakpoint: 1160,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 3.5,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 3,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 830,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 2.3,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 2,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 570,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 1.5,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 430,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 1.2,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 375,
//         settings: {
//           // centerMode: true,
//           // centerPadding: '20%',
//           slidesToShow: 1.1,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

// burger
// burger
// burger
// burger
const burger = document.querySelector('.burger__burger');
const nav = document.querySelector('.header-mob-fixed');
const headerMob = document.querySelector('.header-mob');

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  document.body.classList.toggle('hidden');
  nav.classList.toggle('active');
  headerMob.classList.toggle('active');
});
// burger
// burger
// burger

const lgFlip = document.querySelector('.header-mob__lengs-flip');
lgFlip.addEventListener('click', function () {
  this.parentNode.classList.toggle('active');
});

// sliders
// sliders
// sliders
const flipSl1 = document.querySelector('.slider__choose-item-1');
const flipSl2 = document.querySelector('.slider__choose-item-2');

const slider1 = document.querySelector('.slider__slider-1');
const slider2 = document.querySelector('.slider__slider-2');

const sliderChange = (type) => {
  flipSl1.classList.remove('active');
  flipSl2.classList.remove('active');
  slider1.classList.remove('active');
  slider2.classList.remove('active');
  if (type === 1) {
    slider1.classList.add('active');
    flipSl1.classList.add('active');
  }
  if (type === 2) {
    slider2.classList.add('active');
    flipSl2.classList.add('active');
  }
};
sliderChange(1);

document.addEventListener('click', function (e) {
  if (e.target.className.includes('jssli-1')) {
    sliderChange(1);
  }
  if (e.target.className.includes('jssli-2')) {
    sliderChange(2);
  }
  if (e.target.localName === 'a') {
    burger.classList.remove('active');
    document.body.classList.remove('hidden');
    nav.classList.remove('active');
    headerMob.classList.remove('active');
  }
});
// sliders
// sliders
// sliders
