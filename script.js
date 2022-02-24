function curry(f) {
    return function(num1) {
        return function(operator) {
            return function(num2){
                return f(num1, operator, num2);
            }
        }
    }
}

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

function operator(num1, num2, operator) {
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

let buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', getButtonContent);
}

function getButtonContent(){
    console.log(event.target.firstChild.nodeValue) ;
}

