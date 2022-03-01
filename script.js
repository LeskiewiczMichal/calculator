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
    if (num2 === 0) {
        return 'Nope';
    } else {
        return num1 / num2;
    }
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
            if (display === 'Enter valid numbers') {
                calculator.dataset.firstNumber = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKey = '';
                screen.textContent = keyContent;
            } else if (
                display === '0' ||
                previousKey === 'operator'
                ) {
                screen.textContent = keyContent;
            } else {
                screen.textContent = display + keyContent;
            }
            calculator.dataset.previousKey = 'number';
            
            Array.from(document.querySelectorAll('button'))
            .forEach(k => k.classList.remove('highlight'));
        };

        if (
            usedFor === 'add' ||
            usedFor === 'subtract' ||
            usedFor === 'divide' ||
            usedFor === 'multiply'
        ) {
            let firstNumber = calculator.dataset.firstNumber;
            const operator = calculator.dataset.operator;
            const secondNumber = display;
            e.target.classList.add('highlight');

            if (
                firstNumber &&
                operator &&
                previousKey !== 'calculate'
            ) {
                let result = operate(firstNumber, secondNumber, operator);
                if (isNaN(result)) {
                    screen.style.fontSize = '50px';
                    result = 'Enter valid numbers';
                } else if (result.toString().length > 11) {
                    screen.style.fontSize = '50px';
                    result = 'Number too big.'
                }
                screen.textContent = result;
                calculator.dataset.firstNumber = result;
            } else {
                calculator.dataset.firstNumber = display;
            }


            calculator.dataset.operator = keyContent;
            calculator.dataset.previousKey = 'operator';

        };

        if (usedFor === 'calculate') {
            const firstNumber = calculator.dataset.firstNumber;
            const secondNumber = display;
            const operator = calculator.dataset.operator;
            calculator.dataset.previousKey = 'calculate';
            let result = operate(firstNumber, secondNumber, operator);
            if (isNaN(result)) {
                screen.style.fontSize = '50px';
                result = 'Enter valid numbers';
            } else if (result.toString().length > 11) {
                screen.style.fontSize = '50px';
                result = 'Number too big.'
            }
            screen.textContent = result;
        };

        if (usedFor === 'clear') {
            screen.textContent = 0;
            calculator.dataset.firstNumber = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKey = '';
        };

        if (usedFor === 'decimal') {
            if (!display.includes('.')) {
                screen.textContent = display + '.';
            };
            calculator.dataset.previousKey = 'decimal'
        }
    }
})

