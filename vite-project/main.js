import "./style.scss";

const hamburgerMenu = document.querySelector(".hamburger");

const closeBtn = document.querySelector(".close-btn");

const mobileNav = document.querySelector(".mobile-nav");

hamburgerMenu.addEventListener("click", (e) => {
  mobileNav.style.visibility = "visible";
});

closeBtn.addEventListener("click", (e) => {
  mobileNav.style.visibility = "hidden";
});
