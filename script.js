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

// Function to get clicked button content
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', getButtonContent);
    buttons[i].addEventListener('click', changeScreen);

}

function getButtonContent() {
    return event.target.firstChild.nodeValue ;
}

let screen = document.getElementById('screen');

function changeScreen() {
    let contentForScreen = getButtonContent();
    // console.log(contentForScreen)
    // screen.textContent = event.target.textContent;
    // screen.textContent = getButtonContent();
    switch (contentForScreen) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            screen.textContent += contentForScreen;
            break;
    }
}
