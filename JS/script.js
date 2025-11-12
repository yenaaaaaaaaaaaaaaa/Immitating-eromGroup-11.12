console.clear();
const headerUtilsLang = document.querySelector(".header-utils__lang");

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
}
function addActiveClass(el) {
  el.classList.add("active");
}
function removeActiveClass(el) {
  el.classList.remove("active");
}
headerLangOption();
