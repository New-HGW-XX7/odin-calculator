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

// STATUS
const type = {
    status: 'passive',
};

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

// Enables typing in longer numbers than single digits
function writeInInbetween(numeralstring) {
    if ((output.textContent !== '0' && opArray.length === 0) || type.status === 'active') {
        output.textContent += numeralstring;
    } else if (output.textContent !== '0' && opArray.length === 2) {
        writeIn(numeralstring);
        type.status = 'active';
    } else {
        writeIn(numeralstring);
    }
}

// Clears operational array
function wipe(array) {
    while (array[0]) {
        array.pop();
    }
}

// Number buttons

const btn1 = document.getElementById('1');
btn1.addEventListener('click', () => writeInInbetween(1));

const btn2 = document.getElementById('2');
btn2.addEventListener('click', () => writeInInbetween(2));

const btn3 = document.getElementById('3');
btn3.addEventListener('click', () => writeInInbetween('3'));


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
    type.status = 'passive';
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