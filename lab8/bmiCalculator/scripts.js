(() => {
    'use strict'

    ready(function () {
        setOnClickListeners()
    })
})()

function setOnClickListeners() {
    document.getElementById("bmiCalculatorStartButton").addEventListener("click", () => {
        bmiCalculator()
    })
}

function bmiCalculator() {
    const weight = +prompt("вес");
    const height = +prompt("рост (в метрах)");

    const bmi = Math.round(weight / (height * height) * 10) / 10;
    let result = "";

    switch (true) {
        case bmi < 18.5:
            result = "недостаточный вес";
            break;
        case (bmi >= 18.5 && bmi < 25):
            result = "нормальный вес";
            break;
        case (bmi >= 25 && bmi < 30):
            result = "избыточный вес";
            break;
        case bmi > 30:
            result = "ожирение";
            break;
        default:
            result = "непонятно что";
            break;
    }

    alert("ваш ИМТ= " + bmi + "\n" + " у вас " + result);
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}