// 목표달성률
let cWeight = document.querySelector('.cWeight');
let replaceWeight = 68;
let tWeight = document.querySelector('.tWeight');

let cWeightPig = document.querySelector('.cWeight_pig');
let tWeightThropy = document.querySelector('.tWeight_thropy');
let tSucsess = document.querySelector('.t_sucsess');



let totalCalc = (replaceWeight - parseInt(tWeight.innerText)) / (parseInt(cWeight.innerText) - parseInt(tWeight.innerText)) * 100;
console.log(totalCalc);

if (totalCalc == 0) {
    cWeightPig.style.display = 'none';
    tSucsess.style.display = 'block';
} else if (totalCalc > 100 || 0 > totalCalc) {
    cWeightPig.style.display = 'none';
} else {
    cWeightPig.style.right = `${totalCalc}%`;
    cWeightPig.style.transform = `translateX(${totalCalc}%)`;
}

// 달력



let today = new Date();

let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
console.log(todayMonth)
let calendar = document.getElementById("calendar_table");






function buildCalendar() {
    let firstDate = new Date(todayYear, todayMonth - 1, 1);
    let lastDate = new Date(todayYear, todayMonth, 0);
    let day = firstDate.getDay();
    let week = Math.ceil(lastDate.getDate() / 7) + 1;
    let today_yearMonth = todayYear + "년" + todayMonth + "월";
    let leftDays = 7; // setDays 와 반비례 
    let setDays = 1; // leftDays 와 반비례 
    let nextMonthDate = 1;
    for (i = 1; i < week; i++) {
        let row = calendar.insertRow();
        while (day != 0) {
            row.insertCell().innerHTML = "";
            day -= 1;
            leftDays -= 1;
        } // 1주
        while (leftDays != 0) {
            if (setDays > lastDate.getDate()) {
                row.insertCell().innerHTML = nextMonthDate;
                leftDays -= 1;
                nextMonthDate += 1;
            } else {
                row.insertCell().innerHTML = `<p class="target_date">${setDays}</p>`;
                setDays += 1;
                leftDays -= 1;
            }
        }
        leftDays = 7;
    }
    setDays -= 1;
    if (setDays != lastDate.getDate()) {
        let row = calendar.insertRow();
        while (setDays != lastDate.getDate()) {
            setDays++;
            leftDays--;
            row.insertCell().innerHTML = setDays;
        }
        while (leftDays != 0) {
            row.insertCell().innerHTML = nextMonthDate;
            nextMonthDate++;
            leftDays--;
        }
    }
    let lastRow = calendar.rows[calendar.rows.length - 1];
    for (i = 0; i < lastRow.children.length; i++) {
        // if (/* lastRow.children[i].innerText == 1 */true) {
        for (j = 0; j < 8; j++) {
            if (lastRow.children[i].innerText == j) {
                lastRow.children[i].style.color = ' rgba(0, 0, 0, 30%)';
            }
        }
    };
    document.getElementById("yearMonth").innerHTML = today_yearMonth;
    //달력 클릭시 
    let targetDate = document.querySelectorAll('.target_date');
    let dateClick = document.querySelectorAll(".date_click");
    let subtit = document.querySelector(".c_y_m_d_subtit");
    console.log(targetDate);
    targetDate.forEach((e) => {
        e.addEventListener("click", () => {
            // console.log(e.innerText);
            subtit.innerHTML = today_yearMonth + `${e.innerText}일`;
            for (i = 0; i < targetDate.length; i++) {
                targetDate[i].style.color = "#000";
            }
            e.style.color = "#91CF00";
            dateClick.forEach((e) => {
                e.style.display = "block";
            })
            //post로 전송 할 때 언제,유저 id 히든인풋에 value 값으로 넣어주는 함수 
            let when = document.querySelector('.food_info_when');
            when.value = subtit.innerText;
            console.log(when.value);
        })
    })
}
buildCalendar();

function deleteCalendar() {
    while (calendar.rows.length > 2) {
        calendar.deleteRow(2);
    }
}

function prevMonth() {
    todayMonth = todayMonth - 1;
    if (todayMonth == 0) {
        todayMonth = 12;
        todayYear -= 1;
    }
    deleteCalendar();
    today = new Date(todayYear, todayMonth - 1);
    buildCalendar();
}

function nextMonth() {
    todayMonth += 1;
    if (todayMonth == 13) {
        todayMonth = 1;
        todayYear = todayYear + 1;
    }
    deleteCalendar();
    today = new Date(todayYear, todayMonth - 1);
    buildCalendar();
}
// 음식 데이터
let apiFoodDatas = {};
let atFoodName = [];

function foodSearch() {
    let mEat = document.querySelector('.m_eat').value;
    console.log(mEat);
    const apiAddr = "http://openapi.foodsafetykorea.go.kr/api/9afad6adb4074c399a97/I2790/json/1/100/";
    let rFoodData = apiAddr + 'DESC_KOR=' + encodeURI(`${mEat}`);
    fetch(rFoodData)
        .then((response) => response.json())
        .then((data) => {
            apiFoodDatas = data.I2790;
            console.log(apiFoodDatas);
            atFoodName.splice(0, 100);
            // console.log(apiFoodDatas.row[0]);
            for (i = 0; i < apiFoodDatas.row.length; i++) {
                // console.log(apiFoodDatas.row[i].DESC_KOR);
                // console.log(apiFoodDatas.row[i].NUTR_CONT1);
                // atFoodName.push(apiFoodDatas.row[i].NUTR_CONT1);
                atFoodName.push({
                    name: apiFoodDatas.row[i].DESC_KOR,
                    kcal: apiFoodDatas.row[i].NUTR_CONT1,
                    tansu: apiFoodDatas.row[i].NUTR_CONT2,
                    danbak: apiFoodDatas.row[i].NUTR_CONT3,
                    fat: apiFoodDatas.row[i].NUTR_CONT4
                });
            }
            // console.log(atFoodName.length);
            let cFoodList = document.querySelector('.m_check');
            cFoodList.innerHTML = '';
            for (i = 0; i < atFoodName.length; i++) {
                cFoodList.innerHTML += `<div class="c_regis_check"><input type="checkbox" class="food_value food_value${i}"><p class="food_name">${atFoodName[i].name}</p><p class="food_kcal">${atFoodName[i].kcal}kcal</p><div/>`;
                // 음식 선택시 c_regis_what에 표시
                let foodValue = document.querySelectorAll(".food_value");
                let cRegisWhatWrap = document.querySelector('.c_regis_what_wrap');
                let foodName = document.querySelectorAll('.food_name');
                foodValue.forEach((e, index) => {
                    e.addEventListener('change', () => { // 체크된 애들 체크박스 아래에 추가 해줄 떄
                        if (e.checked == true) {
                            cRegisWhatWrap.innerHTML += `<div class="c_regis_what c_regis_what${index}"><input type="hidden" name="m_foods${index}" value="${atFoodName[index].name}"><input type="hidden" name="m_foods${index}" value="${atFoodName[index].kcal}"><input type="hidden" name="m_foods${index}" value="${atFoodName[index].tansu}"><input type="hidden" name="m_foods${index}" value="${atFoodName[index].danbak}"><input type="hidden" name="m_foods${index}" value="${atFoodName[index].fat}"><p>${foodName[index].innerText}</p><p class="c_delete_check">x</p></div>`;
                            let deleteCheck = document.querySelectorAll('.c_delete_check');
                            let deleteNum = 0;
                            let cRegisWhat = document.querySelectorAll(`.c_regis_what`);
                            //db에 넣기 위해 히든 인풋 태그에 value 값 넣어줄 때 
                            let mFoodsValue = document.getElementsByName('m_foods');
                            console.log(mFoodsValue[0]);
                            deleteCheck.forEach((del, dindex) => { // 체크된 음식들 지울 떄
                                del.addEventListener('click', () => {
                                    deleteNum = cRegisWhat[dindex].classList[1];
                                    let cDeleteNum = document.querySelector(`.${deleteNum}`);
                                    let deleteChoose = document.querySelector(`.food_value${dindex}`);
                                    cDeleteNum.remove();
                                    deleteChoose.checked = false;
                                })
                            })
                        }
                    })
                })
            }
        });
}

let deleteCheck = document.querySelectorAll('.c_delete_check');

deleteCheck.forEach((e) => {
    e.addEventListener('click', () => {

    })
})