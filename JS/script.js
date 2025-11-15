console.clear();
const headerUtilsLang = document.querySelector(".header-utils__lang");
const langList = document.querySelector(".lang-list");
const menuBtn = document.querySelector(".header-utils__menu-btn .menu-btn");
const gnbBox = document.querySelector(".gnb-box");
/*
header > dropdown language list
*/
function headerLangOption() {
  headerUtilsLang.addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    console.log(isActive);
    console.log(this);
    if (isActive) {
      removeActiveClass(headerUtilsLang);
    } else {
      addActiveClass(headerUtilsLang);
    }
  });
  langList.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
/*
add/remove active class
*/
function addActiveClass(el) {
  el.classList.add("active");
}
function removeActiveClass(el) {
  el.classList.remove("active");
}

/*
header > menu-btn motion
*/
function menuBtnMotion() {
  menuBtn.addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    if (isActive) {
      removeActiveClass(this);
      removeActiveClass(gnbBox);
    } else {
      addActiveClass(this);
      addActiveClass(gnbBox);
    }
  });
}
headerLangOption();
menuBtnMotion();
