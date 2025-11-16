console.clear();
const headerUtilsLang = document.querySelector(".header-utils__lang");
const langList = document.querySelector(".lang-list");
const menuBtn = document.querySelector(".header-utils__menu-btn .menu-btn");
const gnbBox = document.querySelector(".gnb-box");
/*
header > language list
상단바의 언어 설정 메뉴 클릭 시 언어 리스트 표시 설정
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
header > menu-btn
상단바의 햄버거 버튼 < - > 닫기 버튼 전환 모션 설정
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
//
//

/*
section1 > swiper
*/
let swiper1;
function section1Swiper() {
  swiper1 = new Swiper(".section1 .swiper", {
    pagination: {
      el: ".pagination1",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        document.querySelector(
          ".progressbarFillClass"
        ).style.transform = `scaleX(${current / total})`;
        return `<span class="currnet">0${current}</span><span class="bar"></span><span class="total">0${total}</span>`;
      },
    },
    navigation: {
      nextEl: ".swiper-custombutton-next",
      prevEl: ".swiper-custombutton-prev",
    },
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });
}
//pagination2
function pagination2() {}
/*
add/remove active class
*/
function addActiveClass(el) {
  el.classList.add("active");
}
function removeActiveClass(el) {
  el.classList.remove("active");
}

//========================================================================
headerLangOption();
menuBtnMotion();
section1Swiper();
pagination2();
