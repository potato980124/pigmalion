let onBlock = '6.5%';

let cWeight = document.querySelector('.cWeight');
let replaceWeight = 74;
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