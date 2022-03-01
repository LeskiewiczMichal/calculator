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
            const clearButton = document.querySelector('#clear');
            screen.textContent = 0;
            if (clearButton.textContent === 'AC') {
            screen.textContent = 0;
            calculator.dataset.firstNumber = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKey = '';
            Array.from(document.querySelectorAll('button'))
            .forEach(k => k.classList.remove('highlight'));
            }
            clearButton.textContent = 'AC';

        };

        if (usedFor === 'decimal') {
            if (!display.includes('.')) {
                screen.textContent = display + '.';
            };
            calculator.dataset.previousKey = 'decimal'
        };

        if (screen.textContent !== '0'){
            const clearButton = document.querySelector('#clear');
            clearButton.textContent = 'CE';
        }
    }
});

document.onkeydown = e => {
    const keyCode = e.keyCode;

    if (e.key == '0' || e.key == 'Num0') {
        document.getElementById('zero').click();
    };
    if (e.key == '1' || e.key == 'Num1') {
        document.getElementById('one').click();
    }
    if (e.key == '2' || e.key == 'Num2') {
        document.getElementById('two').click();
    };
    if (e.key == '3' || e.key == 'Num3') {
        document.getElementById('three').click();
    };
    if (e.key == '4' || e.key == 'Num4') {
        document.getElementById('four').click();
    };
    if (e.key == '5' || e.key == 'Num5') {
        document.getElementById('five').click();
    };
    if (e.key == '6' || e.key == 'Num6') {
        document.getElementById('six').click();
    };
    if (e.key == '7' || e.key == 'Num7') {
        document.getElementById('seven').click();
    };
    if (e.key == '8' || e.key == 'Num8') {
        document.getElementById('eight').click();
    };
    if (e.key == '9' || e.key == 'Num9') {
        document.getElementById('nine').click();
    };
    if (keyCode == 187 && e.shiftKey) {
        document.getElementById('plus').click();
    };
    if (keyCode == 189) {
        document.getElementById('subtract').click();
    };
    if (keyCode == 56 && e.shiftKey) {
        document.getElementById('multiply').click();
    };
    if (keyCode == 191) {
        document.getElementById('divide').click();
    };
    if (keyCode == 187 && !e.shiftKey) {
        document.getElementById('equal').click();
    };
    if (keyCode == 8) {
        document.getElementById('clear').click();
    };
    if (keyCode == 190) {
        document.getElementById('decimal').click();
    };
}


