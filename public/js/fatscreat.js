// 헤더 
let gnb = document.querySelectorAll('.gnb_menu');
let innerHeader = document.querySelector('.inner_header');
let gnbUnderline = document.querySelectorAll('.g_under_line');
//헤더 드롭 
let header = document.querySelector('header');
let headerHeight = header.offsetHeight;
let gnbColor = document.querySelectorAll('.gnb_menu');
// 헤더 모바일 햄버거 
let hamBtn = document.querySelector('.m_hamberger');
let mobileHeader = document.querySelector('.h_m_menu_wrap');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let indexBody = document.getElementsByTagName('body');


console.log(hamBtn.children);
window.onscroll = function () {
  let windowTop = window.scrollY;
  // 스크롤 세로값이 헤더높이보다 크거나 같으면 
  // 헤더에 클래스 'drop'을 추가한다
  if (windowTop >= headerHeight) {
    headerHoverDrop();
    header.classList.add("header_drop");
    gnbColor.forEach((a) => {
      a.firstElementChild.style.color = "#91CF00";
    })
    for (i = 0; i < hamBtn.children.length;i++){
      hamBtn.children[i].style.backgroundColor = "#91CF00";
    }
  }
  // 아니면 클래스 'drop'을 제거
  else {
    headerHover()
    header.classList.remove("header_drop");
    gnbColor.forEach((a) => {
      a.firstElementChild.style.color = "";
    })
    for (i = 0; i < hamBtn.children.length;i++){
      hamBtn.children[i].style.backgroundColor = "#fff";
    }
  }
};


function headerHover() {
  gnb.forEach((e, index) => {
    e.addEventListener('mouseenter', () => {
      setTimeout(() => {
        gnbUnderline[index].style.width = '100%';
        e.firstElementChild.style.color = '#91CF00';
      }, 300);
    });
    e.addEventListener('mouseleave', () => {
      setTimeout(() => {
        gnbUnderline[index].style.width = '0';
        e.firstElementChild.style.color = '';
      }, 300);
    })
  })
}
function headerHoverDrop() {
  gnb.forEach((e, index) => {
    e.addEventListener('mouseenter', () => {
      setTimeout(() => {
        gnbUnderline[index].style.width = '100%';
        e.firstElementChild.style.color = '#91CF00';
      }, 300);
    });
    e.addEventListener('mouseleave', () => {
      setTimeout(() => {
        gnbUnderline[index].style.width = '0';
        e.firstElementChild.style.color = '#91CF00';
      }, 300);
    })
  })
}





hamBtn.addEventListener('click', () => {
  mobileHeader.classList.toggle('h_m_open');
  line1.classList.toggle('h_m_line1_cross');
  line2.classList.toggle('h_m_line_out');
  line3.classList.toggle('h_m_line3_cross');
  // console.log(indexBody[0].style);
  // console.log(indexBody[0].style.length);
  if (indexBody[0].style.length == 0) {
    indexBody[0].style.overflow = 'hidden';
  } else {
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

plusBtn.addEventListener('click', () => {
  lotateMinus.classList.toggle('m_menu_bar_btn_click');
  mCont.classList.toggle('m_menu_cont_click');
})



// 비만도 계산기
let checkboxes = document.getElementsByName('sex');
//체크박스 ->하나만 선택 -> 성별 별 bmi지수 계산
function checkOnlyOne(ele) {
  checkboxes.forEach((all) => {
    all.checked = false;
  })
  ele.checked = true;
}
console.log(checkboxes[0].checked)
window.onload = () => {
  const calcBtn = document.querySelector(".green_btn");
  const calcResetBtn = document.querySelector("#calc_reset");
  calcBtn.addEventListener('click', calcBmi);
  calcResetBtn.addEventListener('click', calcReset)
}

function calcBmi() {
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let age = parseInt(document.querySelector('#age').value);
  let warn = document.querySelector('#warn_empty');
  let weightCont = document.querySelector('#weightCont');
  let weightAgeCon = document.querySelector('#weightAgeCon');
  if (checkboxes[0].checked == false && checkboxes[1].checked == false) {
    warn.innerHTML = '성별을 선택해 주세요!!';
  } else if (height == '' || isNaN(height)) {
    warn.innerHTML = '정확한 신장을 입력해 주세요!!';
  } else if (weight == '' || isNaN(weight)) {
    warn.innerHTML = '정확한 몸무게를 입력해 주세요!!';
  } else if (age == '' || isNaN(age)) {
    warn.innerHTML = '정확한 나이를 입력해 주세요!!';
  } else {
    let bmi = weight / (height / 100) ** 2; //bmi 계산법
    bmi = Math.round(bmi * 100) / 100; //bmi 수치 반올림
    console.log(checkboxes[0].checked);
    if (checkboxes[0].checked == true) {
      if (bmi < 20.0) {
        weightCont.innerHTML = `${bmi}`;
        weightAgeCon.innerHTML = `저체중`;
      } else if (bmi < 25) {
        weightCont.innerHTML = `${bmi}`;
        weightAgeCon.innerHTML = `정상`;
      } else {
        weightCont.innerHTML = `${bmi}`;
        weightAgeCon.innerHTML = `과체중`;
      }
    } else {
      if (bmi < 18.5) {
        weightCont.innerHTML = `${bmi}`;
        weightAgeCon.innerHTML = `저체중`;
      } else if (bmi < 25) {
        weightCont.innerHTML = `${bmi}`;
        weightAgeCon.innerHTML = `정상`;
      } else {
        weightCont.innerHTML = `${bmi}`;
        weightAgeCon.innerHTML = `과체중`;
      }
    }
  }
}

function calcReset() {
  let warn = document.querySelector('#warn_empty');
  let weightCont = document.querySelector('#weightCont');
  let weightAgeCon = document.querySelector('#weightAgeCon');

  document.querySelector('#height').value = '';
  document.querySelector('#weight').value = '';
  document.querySelector('#age').value = '';
  warn.innerHTML = '';
  weightCont.innerHTML = '';
  weightAgeCon.innerHTML = '';
  checkboxes.forEach((e) => {
    e.checked = false;
  })
}