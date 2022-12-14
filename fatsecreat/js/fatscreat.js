// 헤더
let gnb = document.querySelectorAll('.gnb_menu');
let lnb = document.querySelectorAll('.lnb');
let gnbBg = document.querySelector('#gnb_bg');
let innerHeader = document.querySelector('.inner_header');
let gnbUnderline = document.querySelectorAll('.g_under_line');

gnb.forEach((e,index)=>{
  e.addEventListener('mouseenter',()=>{
    setTimeout(()=>{
      lnb[index].style.display = 'flex';
      gnbUnderline[index].style.width = '100%';
      gnbBg.style.height = '170px';
      e.firstElementChild.style.color = '#91CF00';
    },300);
    setTimeout(()=>{
      lnb[index].style.opacity = '1';
    },500)
  });
    e.addEventListener('mouseleave',()=>{
      setTimeout(()=>{
          lnb[index].style.display = 'none';
          gnbUnderline[index].style.width = '0';
          gnbBg.style.height = '0';
          e.firstElementChild.style.color = '#ddd';
      },300);
      setTimeout(()=>{
        lnb[index].style.opacity = '0';
      },500)
    })
})
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
let mMenuGnb = document.querySelectorAll('.m_menu_gnb');

mMenuGnb.forEach((e)=>{
  e.addEventListener('click',clickMgnb(e));
})

function clickMgnb(e){
  return ()=>{
    if(e.nextElementSibling.style.maxHeight){
      e.nextElementSibling.style.maxHeight = null;
    }else{
      for(i=0;i < mMenuGnb.length;i++){
        mMenuGnb[i].nextElementSibling.style.maxHeight = null;
      }
      e.nextElementSibling.style.maxHeight = '400px';
    }
  };
  }

/* 모바일 메뉴박스 섹션 아코디언  */

let plusBtn = document.querySelector('.m_menu_box_wrap');
let lotateMinus = document.querySelector('#m_menu_bar_btn2');
let mCont = document.querySelector('.m_menu_cont');

plusBtn.addEventListener('click',()=>{
  lotateMinus.classList.toggle('m_menu_bar_btn_click');
  mCont.classList.toggle('m_menu_cont_click');
})



// 비만도 계산기
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let age = document.querySelector('#age');
let buttonCalc = document.querySelector('.green_btn');
let heightV;
let weightV;
let bmi;
height.addEventListener('input', (event) => {
  heightV = event.target.value;
  console.log(heightV);
})
weight.addEventListener('input', (event) => {
  weightV = event.target.value;
  console.log(weightV);
})
buttonCalc.addEventListener('click', onCalc);
function onCalc(e) {
  bmi = weightV / ((heightV / 100) * (heightV / 100));
  let weightCont = document.querySelector('#weightCont');
  weightCont.innerText = bmi.toFixed(3);
  let weightAgeCon = document.querySelector('#weightAgeCon');
  if (bmi > 20) {
    weightAgeCon.innerText = '비만입니다.'
  } else {
    weightAgeCon.innerText = '비만이 아닙니다.'
  }
  e.preventDefault(); // 안 써 주면 자동으로 다음 인풋값이 들어간다 다음 인풋값은 입력이 안 되었기 때문에 새로고침이 된다
}
























