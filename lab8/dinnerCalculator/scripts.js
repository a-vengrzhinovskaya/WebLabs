(() => {
    'use strict'

    ready(function () {
        setOnClickListeners()
    })
})()

function setOnClickListeners() {
    document.getElementById("dinnerCalculatorStartButton").addEventListener("click", () => {
        dinnerCalculator()
    })
}

function dinnerCalculator() {
    const membersString = prompt("Введите участников через ', '");
    const members = membersString.split(', ');
    alert("Кто оплачивает ужин: " + members[Math.floor(Math.random() * members.length)]);
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}