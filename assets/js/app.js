const display = document.querySelector("#display");

let result = "";
let number1 = "";
let number2 = "";
let operator = "";
let displayConcat = "";

function press(num) {
    number1 += num;
    displayPreview();
}

function setOP(op) {
    operator = op;
    number2 = number1;
    number1 = "";
    displayPreview();
}

function displayPreview() {
    if(number2.length === 0) {
        display.innerHTML = `${number1}${operator}`;
    } else {
        display.innerHTML = `${number2}${operator}${number1}`;
    }
}

function calculate() {

    let first = parseFloat(number1);
    let second = parseFloat(number2);
    let temporal;

    switch (operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = second - first;
            break;
        case "*":
            temporal = first * second;
            result = Number.isInteger(temporal) ? temporal : temporal.toFixed(2);
            break;
        case "/":
            temporal = second / first
            result = Number.isInteger(temporal) ? temporal : (temporal).toFixed(2);
            break;
        default:
            return;
    }

    resetOperations();
    display.innerHTML = result;
}

function clr() {
    resetOperations();
    display.innerHTML = 0;
}

function resetOperations() {
    number1 = "";
    number2 = "";
    operator = "";
}