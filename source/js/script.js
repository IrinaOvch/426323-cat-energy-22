const navigationToggle = document.querySelector(".main-navigation__toggle");
const navigationLinks = document.querySelector(".main-navigation__links");

navigationToggle.classList.add("main-navigation__toggle--visible");
navigationToggle.classList.remove("main-navigation__toggle--opened");
navigationLinks.classList.add("main-navigation__links--closed");

navigationToggle.addEventListener("click", toggleNavigationMenu);

function toggleNavigationMenu(evt) {
  evt.preventDefault();
  navigationToggle.classList.toggle("main-navigation__toggle--opened");
  navigationLinks.classList.toggle("main-navigation__links--closed");
}




const toggle = document.querySelector(".toggle__scale-toggle");
const beforeButton = document.querySelector(".toggle__button--before");
const afterButton = document.querySelector(".toggle__button--after");
const beforeImage = document.querySelector(".example__image--before");
const afterImage = document.querySelector(".example__image--after");

function showBeforeImage(evt) {
  evt.preventDefault();
  afterImage.classList.add("example__image--hidden");
  beforeImage.classList.remove("example__image--hidden");
  toggle.classList.remove("toggle__scale-toggle--right-position");
  toggle.classList.add("toggle__scale-toggle--left-position");
}

function showAfterImage(evt) {
  evt.preventDefault();
  beforeImage.classList.add("example__image--hidden");
  afterImage.classList.remove("example__image--hidden");
  toggle.classList.remove("toggle__scale-toggle--left-position");
  toggle.classList.add("toggle__scale-toggle--right-position");
}

beforeButton.addEventListener("click", showBeforeImage);
afterButton.addEventListener("click", showAfterImage);
