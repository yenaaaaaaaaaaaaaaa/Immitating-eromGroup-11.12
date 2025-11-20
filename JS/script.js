console.clear();
const headerUtilsLang = document.querySelector(".header-utils__lang");
const langList = document.querySelector(".lang-list");
const menuBtn = document.querySelector(".header-utils__menu-btn .menu-btn");
const gnbBox = document.querySelector(".gnb-box");
const familySiteBox = document.querySelector(".family-site-box");
const familySiteBoxTitle = document.querySelector(".family-site-box >.title");
const topBtn = document.querySelector(".top");
const gnbDepth1Menu = document.querySelectorAll(".depth1 > li");
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

/*
footer > family-site
*/
function familySiteList() {
  familySiteBoxTitle.addEventListener("click", function () {
    const isActive = familySiteBox.classList.contains("active");
    if (isActive) {
      removeActiveClass(familySiteBox);
    } else {
      addActiveClass(familySiteBox);
    }
  });
}

/*
scroll to top 
*/
function scrollTop() {
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/*
gnb > menu
 */
function gnbMobMenu(){
  // console.log(gnbDepth1Menu);
  const depth2 = document.querySelectorAll(".gnb-menubox .depth2");
  gnbDepth1Menu.forEach(function(menu){
    // console.log(menu);
    menu.addEventListener("click",function()
    {
      getSiblings(menu);
      const isActive = menu.classList.contains("active");
      if(isActive){
        removeActiveClass(menu);
      }
      else{
        removeActiveSiblngs(menu);
        addActiveClass(menu);
        
      }
    });
  });
  depth2.forEach(function(ul) {
    ul.addEventListener("click", function(e){
      e.stopPropagation();
    })
  })
}

function getSiblings(el){
  const siblings =Array.from(el.parentElement.children).filter(
		(sibling) => sibling != el
	);
  // console.log(siblings);
}
function removeActiveSiblngs(el){
  const activeSiblings = getSiblings(el).filter(function(sibling){
    sibling.classList.contains("active");
  });
  activeSiblings.forEach(function(activeSibling){
    removeActiveClass(activeSibling);
  })
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
//AOS
AOS.init({
  offset: 300,
  duration: 1000,
  mirror: false,
});
//========================================================================
headerLangOption();
menuBtnMotion();
section1Swiper();
familySiteList();
scrollTop();
gnbMobMenu();