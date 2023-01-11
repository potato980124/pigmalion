// 헤더
let gnb = document.querySelectorAll('.gnb_menu');
let lnb = document.querySelectorAll('.lnb');
let gnbBg = document.querySelector('#gnb_bg');
let innerHeader = document.querySelector('.inner_header');
let gnbUnderline = document.querySelectorAll('.g_under_line');

gnb.forEach((e,index)=>{
  e.addEventListener('mouseenter',()=>{
    setTimeout(()=>{
      gnbUnderline[index].style.width = '100%';
      e.firstElementChild.style.color = '#91CF00';
    },300);
  });
    e.addEventListener('mouseleave',()=>{
      setTimeout(()=>{
          gnbUnderline[index].style.width = '0';
          e.firstElementChild.style.color = '#ddd';
      },300);
    })
})

//헤더 드롭 
let header = document.querySelector('header');
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  	// 스크롤 세로값이 헤더높이보다 크거나 같으면 
	// 헤더에 클래스 'drop'을 추가한다
  if (windowTop >= headerHeight) {
    header.classList.add("header_drop");
  } 
  // 아니면 클래스 'drop'을 제거
  else {
    header.classList.remove("header_drop");
  }
};
// 헤더 모바일 햄버거 
let hamBtn = document.querySelector('.m_hamberger');
let mobileHeader = document.querySelector('.h_m_menu_wrap');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let indexBody = document.getElementsByTagName('body');


hamBtn.addEventListener('click',()=>{
  mobileHeader.classList.toggle('h_m_open');
  line1.classList.toggle('h_m_line1_cross');
  line2.classList.toggle('h_m_line_out');
  line3.classList.toggle('h_m_line3_cross');
  hamBtn.classList.toggle('m_hamberger_translate');
  // console.log(indexBody[0].style);
  // console.log(indexBody[0].style.length);
  if(indexBody[0].style.length == 0){
    indexBody[0].style.overflow = 'hidden';
  }else{
    indexBody[0].style.overflow = '';
  }
})

// 모바일 헤더 메뉴 아코디언
// let mMenuGnb = document.querySelectorAll('.m_menu_gnb');

// mMenuGnb.forEach((e)=>{
//   e.addEventListener('click',clickMgnb(e));
// })

// function clickMgnb(e){
//   return ()=>{
//     if(e.nextElementSibling.style.maxHeight){
//       e.nextElementSibling.style.maxHeight = null;
//     }else{
//       for(i=0;i < mMenuGnb.length;i++){
//         mMenuGnb[i].nextElementSibling.style.maxHeight = null;
//       }
//       e.nextElementSibling.style.maxHeight = '400px';
//     }
//   };
//   }

/* 모바일 메뉴박스 섹션 아코디언  */

let plusBtn = document.querySelector('.m_menu_box_wrap');
let lotateMinus = document.querySelector('#m_menu_bar_btn2');
let mCont = document.querySelector('.m_menu_cont');

plusBtn.addEventListener('click',()=>{
  lotateMinus.classList.toggle('m_menu_bar_btn_click');
  mCont.classList.toggle('m_menu_cont_click');
})



// 비만도 계산기
let sex = document.getElementsByName('sex');
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let age = document.querySelector('#age');
let clickBtn = document.querySelector('.green_btn');
let weightCont = document.querySelector('#weightCont');
let weightAgeCon = document.querySelector('#weightAgeCon');
//체크박스 ->하나만 선택 -> 성별 별 bmi지수 계산
function checkOnlyOne(ele){
  let checkboxes = document.getElementsByName('sex');
  checkboxes.forEach((all) => {
    all.checked = false;
  })
  ele.checked = true;
}

clickBtn.addEventListener('click', () => {
  let bmi = weight.value / (height.value * height.value); 
  sex.forEach((val) => {
    if (val == "male") {
      weightCont.innerHTML = bmi;
    }
  })
})






























