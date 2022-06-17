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

        case 'multiply':
            temp = multiply(num1, num2);
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

// Number buttons

const btn1 = document.getElementById('1');
btn1.addEventListener('click', () => writeIn(1)); // Update these. Enable concatenation. Use new function.
                                                  // See 3 for example. Needs to check for 0.
                                                  // Also check if current display is a result value or not.
                                                  // If array-length is 0 or 2 it's not and concat is okay.

const btn2 = document.getElementById('2');
btn2.addEventListener('click', () => writeIn(2));

const btn3 = document.getElementById('3');
btn3.addEventListener('click', () => {
    output.textContent += '3';
});


// Operator buttons

const btnPlus = document.getElementById('plus');
btnPlus.addEventListener('click', () => {
    const currentValue = Number(output.textContent);
    // Check for empty array and populate
    // If [0] and [1] exist, perform calculation and push only operator
    // If only [0] exists, push only operator
    if (!opArray[0]) {
        opArray.push(currentValue, 'plus');
    } else if (opArray.length === 2) {
        operateInbetween();
        opArray.push('plus');
    } else {
        opArray.push('plus');
    }
});

const btnMultiply = document.getElementById('multiply');
btnMultiply.addEventListener('click', () => {
    const currentValue = Number(output.textContent);
    // Check for empty array and populate
    // If [0] and [1] exist, perform calculation and push only operator
    // If only [0] exists, push only operator
    if (!opArray[0]) {
        opArray.push(currentValue, 'multiply');
    } else if (opArray.length === 2) {
        operateInbetween();
        opArray.push('multiply');
    } else {
        opArray.push('multiply');
    }
});

const btnEnter = document.getElementById('enter');
btnEnter.addEventListener('click', () => operateInbetween());

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    wipe(opArray);
    output.textContent = '0';
});