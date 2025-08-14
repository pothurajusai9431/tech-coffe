const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');



menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener('click',() => menuOpenButton.click());

// install swipper

const swiper = new Swiper('.slider-wrapper', {
//   // Optional parameters
//   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

breakPoints:{
    0:{
        slidesPreview:1
    },
}
});