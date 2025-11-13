console.clear();
const headerUtilsLang = document.querySelector(".header-utils__lang");
const langList = document.querySelector('.lang-list');
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
  langList.addEventListener('click', function(e){
    e.stopPropagation();
  });
}
function addActiveClass(el) {
  el.classList.add("active");
}
function removeActiveClass(el) {
  el.classList.remove("active");
}
headerLangOption();
