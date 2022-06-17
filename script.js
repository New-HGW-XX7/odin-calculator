// Basic functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, operator, num2) {

}

// Functionality

// Handles and populates the display
function writeIn(input) {
    const output = document.querySelector('.output');
    output.textContent = input;
}

// Clears operational array
function wipe(array) {
    while (array[0]) {
        array.pop();
    }
}

// Button wiring

const btn1 = document.getElementById('1');
btn1.addEventListener('click', () => writeIn(1));