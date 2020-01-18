// Меню
var mobileToggle = document.querySelector(".page-header__toggle");
var mobileMenu = document.querySelector(".menu-nav__list");

mobileMenu.classList.add("menu-nav__list--close");
mobileToggle.classList.add("page-header__toggle--open")

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

// Показ попапов
if (document.querySelector(".popup")) {
  var popupSuccess = document.querySelector(".popup--success");
  var popupFail = document.querySelector(".popup--fail");

  var closeSuccess = document.querySelector(".popup__close-button--success");
  var closeFail = document.querySelector(".popup__close-button--fail");

  var form = document.querySelector(".form")
  var formUsername = document.querySelector("#id__user-name");
  var formSurname = document.querySelector("#id__user-surname");
  var formPatronymic = document.querySelector("#id__user-patronymic");
  var formTelephone = document.querySelector("#id__user-telephone");
  var formEmail = document.querySelector("#id__user-email");

  form.addEventListener("submit", function(event) {
    if (!formUsername.value || !formSurname.value ||
      !formPatronymic.value || !formTelephone || !formEmail) {
        event.preventDefault();

        if (!formUsername.value) formUsername.classList.add("form__input--red");
        if (!formSurname.value) formSurname.classList.add("form__input--red");
        if (!formPatronymic.value) formPatronymic.classList.add("form__input--red");
        if (!formTelephone.value) formTelephone.classList.add("form__input--red");
        if (!formEmail.value) formEmail.classList.add("form__input--red");

        popupFail.classList.remove("popup--show");
        popupFail.offsetWidth = popupFail.offsetWidth;
        popupFail.classList.add("popup--show");
    } else {
        popupSuccess.classList.remove("popup--show");
        popupSuccess.offsetWidth = popupSuccess.offsetWidth;
        popupSuccess.classList.add("popup--show");
    }
  });

  closeSuccess.addEventListener("click", function(event) {
    event.preventDefault();
    if (popupSuccess.classList.contains("popup--show")) {
      popupSuccess.classList.remove("popup--show");
    }
  });

  closeFail.addEventListener("click", function(event) {
    event.preventDefault();
    if (popupFail.classList.contains("popup--show")) {
      popupFail.classList.remove("popup--show");
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (popupSuccess.classList.contains("popup--show")) {
        popupSuccess.classList.remove("popup--show");
      }
      if (popupFail.classList.contains("popup--show")) {
        popupFail.classList.remove("popup--show");
      }
    }
  });
}
