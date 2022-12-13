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


/* 모바일 메뉴박스 아코디언  */

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
























