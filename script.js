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
let opArray = [];

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

        case 'minus':
            temp = subtract(num1, num2);
            break;

        case 'multiply':
            temp = multiply(num1, num2);
            break;
        
        case 'divide':
            if (num2 === 0) {
                alert('Not okay!');
                writeIn('0');
             } else {
             temp = divide(num1, num2);
             }
            break;
        
        default:
            console.log('default');
            break;
    }
    wipe(opArray);
    opArray.push(temp);
    return temp;
}

// Checks operating conditions
function checkOperatorCondition(operator) {
    const currentValue = Number(output.textContent);
    // Check for empty array and populate
    // If [0] and [1] exist, perform calculation and push only operator
    // If only [0] exists, push only operator

    if (opArray.length === 0) {
        opArray.push(currentValue, operator);
    } else if (opArray.length === 2) {
        operateInbetween();
        opArray.push(operator);
    } else {
        opArray.push(operator);
    }
    type.status = 'passive';

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
    if (opArray.length === 0 || type.status === 'active') {
        if (output.textContent === '0') {
            output.textContent = numeralstring;
        } else {
            output.textContent += numeralstring;
        }
    } 
    else if (opArray.length === 1) {
        wipe(opArray);
        writeIn(numeralstring);

    } else if (opArray.length === 2) {
        writeIn(numeralstring);
        type.status = 'active';
    } else {
        writeIn(numeralstring);
    }
}

// Clears operational array
function wipe(array) {
    while (array.length > 0) {
        array.pop();
    }
}

// Number buttons

const allBtns = document.querySelectorAll('button');
allBtns.forEach(el => el.addEventListener('click', () => console.log(opArray, type.status)));

const btn1 = document.getElementById('1');
btn1.addEventListener('click', () => writeInInbetween(1));

const btn2 = document.getElementById('2');
btn2.addEventListener('click', () => writeInInbetween(2));

const btn3 = document.getElementById('3');
btn3.addEventListener('click', () => writeInInbetween('3'));

const btn4 = document.getElementById('4');
btn4.addEventListener('click', () => writeInInbetween(4));

const btn5 = document.getElementById('5');
btn5.addEventListener('click', () => writeInInbetween(5));

const btn6 = document.getElementById('6');
btn6.addEventListener('click', () => writeInInbetween('6'));

const btn7 = document.getElementById('7');
btn7.addEventListener('click', () => writeInInbetween(7));

const btn8 = document.getElementById('8');
btn8.addEventListener('click', () => writeInInbetween(8));

const btn9 = document.getElementById('9');
btn9.addEventListener('click', () => writeInInbetween('9'));

const btn0 = document.getElementById('0');
btn0.addEventListener('click', () => writeInInbetween(0));

// Operator buttons and decimal

const btnPlus = document.getElementById('plus');
btnPlus.addEventListener('click', () => checkOperatorCondition('plus'));

const btnMinus = document.getElementById('minus');
btnMinus.addEventListener('click', () => checkOperatorCondition('minus'));

const btnMultiply = document.getElementById('multiply');
btnMultiply.addEventListener('click', () => checkOperatorCondition('multiply'));

const btnDivide = document.getElementById('divide');
btnDivide.addEventListener('click', () => checkOperatorCondition('divide'));

// Enter button

const btnEnter = document.getElementById('enter');
btnEnter.addEventListener('click', () => {
    operateInbetween();
    type.status = 'passive';
});


// Clear and reverse buttons

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    wipe(opArray);
    output.textContent = '0';
});