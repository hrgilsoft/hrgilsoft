let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let contactInfo = document.querySelector(".contact-info");

const menuBtn = document.querySelector("#menu-btn");
const searchBtn = document.querySelector("#search-btn");
const loginBtn = document.querySelector("#login-btn");
const infoBtn = document.querySelector("#info-btn");
const closeContactInfo = document.querySelector("#close-contact-info");

if (menuBtn) {
  menuBtn.onclick = () => {
    navbar.classList.toggle("active");
    if (searchForm) searchForm.classList.remove("active");
    if (loginForm) loginForm.classList.remove("active");
  };
}

if (searchBtn) {
  searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    if (loginForm) loginForm.classList.remove("active");
  };
}

if (loginBtn) {
  loginBtn.onclick = () => {
    loginForm.classList.toggle("active");
    navbar.classList.remove("active");
    if (searchForm) searchForm.classList.remove("active");
  };
}

if (infoBtn) {
  infoBtn.onclick = () => {
    contactInfo.classList.add("active");
  };
}

if (closeContactInfo) {
  closeContactInfo.onclick = () => {
    contactInfo.classList.remove("active");
  };
}

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000, // 2 seconds between slides
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});
