(() => {
    'use strict'

    ready(function () {
        setLogButtonOnCLickListener()
    })
})()

function setLogButtonOnCLickListener() {
    document.getElementById("actionButton").addEventListener("click", () => {
        logNumbers()
        logText()
    })
}

function logNumbers() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;

    console.log("first number= " + firstNumber + ", second number= " + secondNumber);
    console.log("first number + second number= " + (parseInt(firstNumber) + parseInt(secondNumber)));
    console.log("first number - second number= " + (parseInt(firstNumber) - parseInt(secondNumber)));
    console.log("first number * second number= " + (parseInt(firstNumber) * parseInt(secondNumber)));
    console.log("first number / second number= " + (parseInt(firstNumber) / parseInt(secondNumber)));
    console.log("first number % second number= " + (parseInt(firstNumber) % parseInt(secondNumber)));
    console.log("first number square= " + Math.pow(firstNumber, 2) + ", second number square= " + Math.pow(secondNumber, 2));
    console.log("дополнительные задания:");
    console.log("first number root= " + Math.sqrt(firstNumber) + ", second number root= " + Math.sqrt(secondNumber));
    console.log("first number absolute value= " + Math.abs(firstNumber) + ", second number absolute value= " + Math.abs(secondNumber));
}

function logText() {
    const someString = document.getElementById("someString").value;
    console.log("со строкой:");
    console.log(someString.toUpperCase());
    console.log(someString.toLowerCase());
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}