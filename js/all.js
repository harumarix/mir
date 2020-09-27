'use strict'; // Magnific Popup Modal

$(document).ready(function () {
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS

    }
  });
}); // Burger Menu

document.addEventListener('DOMContentLoaded', function () {
  var burgerButton = document.querySelector('.burger-header');
  var closeButton = document.querySelector('.close-button');
  burgerButton.addEventListener('click', function () {
    document.querySelector('.mob-menu').classList.toggle('mob-menu__active');
  });
  closeButton.addEventListener('click', function () {
    document.querySelector('.mob-menu').classList.toggle('mob-menu__active');
  });
  document.addEventListener('click', function () {
    document.querySelector('.mob-menu').classList.remove('mob-menu__active');
  });
  document.querySelector('.mob-menu').addEventListener("click", function (ev) {
    ev.stopPropagation();
  });
  burgerButton.addEventListener("click", function (ev) {
    ev.stopPropagation();
  });
}); // document.addEventListener('DOMContentLoaded', () => {
// // Swiper preview
// let mySwiper = new Swiper ('.swiper-container', {
// 	// Optional parameters
// 	direction: 'vertical',
// 	loop: true,
// 	// Navigation arrows
// 	navigation: {
// 	  nextEl: '.preview-button-next',
// 	  prevEl: '.preview-button-prev',
// 	},
//  })
//  // Swiper offers
// 	let mySwiper = new Swiper ('.swiper-container-offers', {
// 	direction: 'vertical',
// 	loop: true,
// 	navigation: {
// 	  nextEl: '.offers-button-next',
// 	  prevEl: '.offers-button-prev',
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		dynamicBullets: true,
// 	 },
//  })
//   // Swiper equipment
//   let mySwiper = new Swiper ('.swiper-container-equipment', {
// 	direction: 'vertical',
// 	loop: true,
// 	navigation: {
// 	  nextEl: '.equipment-button-next',
// 	  prevEl: '.equipment-button-prev',
// 	},
//  })
// })
// Swiper pagination

document.addEventListener('DOMContentLoaded', function () {
  var pagWrap = document.getElementById("swiper-pagination-offers");
  var nodePrev = document.getElementById("swiper-pagination-offers-prev");
  var nodeNext = document.getElementById("swiper-pagination-offers-next");
  pagWrap.prepend(nodePrev);
  pagWrap.append(nodeNext);
});
// const store = new Vuex.Store({
//     state: {
//     },
//     mutations: {
//     },
//     actions: {
//     }
// })
"use strict";
//# sourceMappingURL=all.js.map
