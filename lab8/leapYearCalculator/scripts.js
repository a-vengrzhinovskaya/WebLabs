(() => {
    'use strict'

    ready(function () {
        setOnClickListeners()
    })
})()

function setOnClickListeners() {
    document.getElementById("leapYearCalculatorStartButton").addEventListener("click", () => {
        leapYearCalculator()
    })
}

function leapYearCalculator() {
    const year = +prompt("год");
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        alert("високосный");
    } else {
        alert("не високосный");
    }
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}