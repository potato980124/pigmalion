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

let servise = document.querySelector('#servise');
let lnb = document.querySelectorAll('.lnb');
let gnbBg = document.querySelector('#gnb_bg');
let innerHeader = document.querySelector('.inner_header');

servise.addEventListener('mouseenter',onServise);
function onServise(){
  setTimeout(()=>{
    lnb[0].style.display = 'flex';
  },500)
  gnbBg.style.height = '150px';
}
servise.addEventListener('mouseleave',outServise);
function outServise(){
  lnb[0].style.display = 'none';
  gnbBg.style.height = '0';
}



















