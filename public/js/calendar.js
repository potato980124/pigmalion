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

// let today = new Date(); //현재의 날짜

// todayYear = today.getFullYear();

// todayMonth = today.getMonth() + 1; // 월은 0부터 시작하기때문에 + 1을 해줘야지 해당 달의 월이 나온다.

// today_yearMonth = todayYear + " - " + todayMonth;

// document.getElementById("yearMonth").innerHTML = today_yearMonth;


// let firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
// let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
// console.log(firstDate)
// console.log(lastDate.getDate())
// let day = firstDate.getDay();
// let calendar = document.getElementById("calendar_table");
// let week = Math.ceil(lastDate.getDate() / 7) + 1;

// function buildCalendar() {
//     let leftDays = 7; // setDays 와 반비례 
//     let setDays = 1; // leftDays 와 반비례 
//     for (i = 1; i < week; i++) {
//         let row = calendar.insertRow();
//         while (day != 0) {
//             row.insertCell().innerHTML = "";
//             day -= 1;
//             leftDays -= 1;
//         } // 1주
//         let nextMonthDate = 1;
//         while (leftDays != 0) {
//             if (setDays > lastDate.getDate()) {
//                 row.insertCell().innerHTML = nextMonthDate;
//                 leftDays -= 1;
//                 nextMonthDate += 1;
//             } else {
//                 row.insertCell().innerHTML = setDays;
//                 setDays += 1;
//                 leftDays -= 1;
//             }
//         }
//         leftDays = 7;
//     }
// }
// buildCalendar();


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

// let lastRow = calendar.rows[calendar.rows.length - 1];
// lastRow.style.color = 'red';
// console.log(lastRow.children);