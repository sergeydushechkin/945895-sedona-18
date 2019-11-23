var mobileToggle = document.querySelector(".page-header__toggle");
var mobileMenu = document.querySelector(".menu-nav__list");

// mobileMenu.classList.add("menu-nav__list--close");
// mobileToggle.classList.add("page-header__toggle--open")

mobileToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (mobileToggle.classList.contains("page-header__toggle--open")) {
    mobileToggle.classList.remove("page-header__toggle--open");
    mobileToggle.classList.add("page-header__toggle--close");
    mobileMenu.classList.remove("menu-nav__list--close")
  } else {
    mobileToggle.classList.remove("page-header__toggle--close");
    mobileToggle.classList.add("page-header__toggle--open");
    mobileMenu.classList.add("menu-nav__list--close")
  }
});
