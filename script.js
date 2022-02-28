function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function clear() {
    this.num1 = '';
    this.num2 = '';
    this.operator = undefined;
}

function operate(number1, number2, operator) {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result = 0;
    switch(operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    return result;
}

const keys = document.querySelector('.calculator_keys');
const screen = document.querySelector('#screen');

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const keyContent = e.target.textContent;
        const usedFor = e.target.dataset.usedfor;
        const display = screen.textContent;
        const previousKey = calculator.dataset.previousKey;

        if (!usedFor) {
            if (display === '0' || previousKey === 'operator') {
                screen.textContent = keyContent;
            } else {
                screen.textContent = display + keyContent;
            }
        };

        if (
            usedFor === 'add' ||
            usedFor === 'subtract' ||
            usedFor === 'divide' ||
            usedFor === 'multiply'
        ) {
            calculator.dataset.firstNumber = display;
            calculator.dataset.operator = keyContent;
            calculator.dataset.previousKey = 'operator';

        };

        if (usedFor === 'calculate') {
            const firstNumber = calculator.dataset.firstNumber;
            const secondNumber = display;
            const operator = calculator.dataset.operator;
            console.log(firstNumber)
            console.log(secondNumber)
            const result = operate(firstNumber, secondNumber, operator)

            screen.textContent = result;
        }
    }
})

