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
