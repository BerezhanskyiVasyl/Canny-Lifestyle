const swiperTestiminials = new Swiper(".swiper-testimonials", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  // autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: ".sw-btn-estimonials-prev",
    prevEl: ".sw-btn-estimonials-next",
  },

  pagination: {
    el: ".swiper-pagination-testimonials",
    clickable: true,
  },

  breakpoints: {
    320: { slidesPerView: 1, autoHeight: true },
    768: { slidesPerView: 2, autoHeight: true },
    1152: { slidesPerView: 3, autoHeight: true },
    1420: { slidesPerView: 4, autoHeight: true },
  },
})

const swiperFag = new Swiper(".swiper-fag", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 10,
  // autoHeight: true,

  pagination: {
    el: ".swiper-pagination-fag",
    clickable: true,
  },
})
