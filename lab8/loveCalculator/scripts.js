(() => {
    'use strict'

    ready(function () {
        setOnClickListeners()
    })
})()

function setOnClickListeners() {
    document.getElementById("loveCalculatorStartButton").addEventListener("click", () => {
        loveCalculator()
    })
}

function loveCalculator() {
    const firstName = prompt("1 имя");
    const secondName = prompt("2 имя");
    alert(firstName + " подходит к " + secondName + " на " + Math.round(Math.random() * 101) + "%");
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}