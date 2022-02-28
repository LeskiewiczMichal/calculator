// function curry(f) {
//     return function(num1) {
//         return function(operator) {
//             return function(num2){
//                 return f(num1, operator, num2);
//             }
//         }
//     }
// }

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



// Function to get clicked button content
// for (let i = 0; i < numButtons.length; i++) {
    // numButtons[i].addEventListener('click', getButtonContent);
    // buttons[i].addEventListener('click', changeScreen);
// 
// }

function getButtonContent() {
    return event.target.firstChild.nodeValue ;
}



// function changeScreen() {
//     let contentForScreen = getButtonContent();
//     let num1;
//     let num2;
//     let operator;
//     // console.log(contentForScreen)
//     // screen.textContent = event.target.textContent;
//     // screen.textContent = getButtonContent();
//     switch (contentForScreen) {
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//         case '0':
//         case '.':
//             screen.textContent += contentForScreen;
//             numbersForOperation += contentForScreen;
//             break;
//         case 'AC':
//             screen.textContent = '';
//         case '+':
//             num1 = Number(numbersForOperation)
//             numbersForOperation = '';
//             screen.textContent = '';
//             console.log(num1)
//             operator = '+'
//         case '=':
//             num2 = Number(numbersForOperation)
//             console.log(num2)
//             console.log(operate(num1, num2, operator))
//     }
// }
