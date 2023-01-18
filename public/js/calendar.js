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
                row.insertCell().innerHTML = setDays;
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
console.log(atFoodName.length);

function foodSearch() {
    console.log(atFoodName.length);
    let mEat = document.querySelector('.m_eat').value;
    console.log(mEat);
    // data.I2790.row[0].NUTR_CONT1 이건 열량 뽑아내는 것
    const apiAddr = "http://openapi.foodsafetykorea.go.kr/api/9afad6adb4074c399a97/I2790/json/1/500/";
    let rFoodData = apiAddr + 'DESC_KOR=' + encodeURI(`${mEat}`);
    // let apiFoodDatas = {};
    // let atFoodName = [];
    fetch(rFoodData)
        .then((response) => response.json())
        .then((data) => {
            apiFoodDatas = data.I2790;
            atFoodName.splice(0, atFoodName.length);
            for (i = 0; i < apiFoodDatas.total_count; i++) {
                // console.log(apiFoodDatas.row[i].DESC_KOR);
                // console.log(apiFoodDatas.row[i].NUTR_CONT1);
                // atFoodName.push(apiFoodDatas.row[i].NUTR_CONT1);
                atFoodName.push({
                    name: apiFoodDatas.row[i].DESC_KOR,
                    kcal: apiFoodDatas.row[i].NUTR_CONT1
                });
            }
            // console.log(atFoodName.length);
            let cFoodList = document.querySelector('.m_check');
            for (i = 0; i < atFoodName.length; i++) {
                cFoodList.innerHTML += `<div class="c_regis_check"><input type="checkbox" name="food"> <p>${atFoodName[i].name}</p><div/>`;
            }
        });
}