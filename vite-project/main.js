import "./style.scss";

const hamburgerMenu = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", (e) => {
  mobileNav.style.visibility = "visible";
});

closeBtn.addEventListener("click", (e) => {
  mobileNav.style.visibility = "hidden";
});

window.addEventListener("load", (e) => {
  body.style.display = "block";
});
