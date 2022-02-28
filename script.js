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

function operate(num1, num2, operator) {
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
        const usedFor = e.target.dataset.usedFor;
        const display = screen.textContent;

        if (!usedFor) {
            if (display === '0') {
                screen.textContent = keyContent;
            } else {
                screen.textContent = display + keyContent;
            }
        }
    }
})