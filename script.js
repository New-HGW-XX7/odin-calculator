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
const output = document.querySelector('.output');

// Stores operands and operators in index-order: 0: number, 1: string, 2: number
const opArray = [];

// Performs the calculation
function operate(num1, operator, num2) {
    let temp;
    switch (operator) {
        case 'plus':
            temp = add(num1, num2);
            break;
        
        default:
            console.log('default');
    }
    wipe(opArray);
    opArray.push(temp);
    return temp;
}

// Ensures that currently displayed number is taken in.
// This way not only Enter performs a calculation but also pressing the operator-buttons.
function operateInbetween() {
    opArray.push(Number(output.textContent));
    writeIn(operate(opArray[0], opArray[1], opArray[2]));
    
}

// Handles and populates the display
function writeIn(input) {
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

const btn2 = document.getElementById('2');
btn2.addEventListener('click', () => writeIn(2));

const btnPlus = document.getElementById('plus');
btnPlus.addEventListener('click', () => {
    const currentValue = Number(output.textContent);
    // Add control to check for empty array - if [0] exists push only operator else currentValue and operator
    if (!opArray[0]) {
        opArray.push(currentValue, 'plus');
    } else if (opArray.length === 2) {
        operateInbetween();
        opArray.push('plus');
    } else {
        opArray.push('plus');
    }
})

const btnEnter = document.getElementById('enter');
btnEnter.addEventListener('click', () => operateInbetween());
