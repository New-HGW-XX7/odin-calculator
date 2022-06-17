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
    writeIn(temp);
}

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