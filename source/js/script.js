var mobileToggle = document.querySelector(".page-header__toggle");

mobileToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (mobileToggle.classList.contains("page-header__toggle--open")) {
    mobileToggle.classList.remove("page-header__toggle--open");
    mobileToggle.classList.add("page-header__toggle--close");
  } else {
    mobileToggle.classList.remove("page-header__toggle--close");
    mobileToggle.classList.add("page-header__toggle--open");
  }
});
