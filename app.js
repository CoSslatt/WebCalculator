const RESULT_WINDOW = document.querySelector('.operations__result');
const NOT_AVAILABLE_SIGNS_TO_TYPE = ['%', 'CE', 'null'];
// CALC == CALCULATOR
const CALC_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
const CALC_OPERATORS = ['/', 'x', '-', '+'];

let currentNumber;

window.addEventListener('click', event => {
    if (event.target.className !== 'row') return;

    checkSignAvailability(event);
    addNumberToResultWindow(event);
    addOperatorsToResultWindow(event);

    calculatorFeatures(event);
});

function checkSignAvailability(e) {
    for (let i = 0; i < NOT_AVAILABLE_SIGNS_TO_TYPE.length; i++) {
        if (e.target.innerText === NOT_AVAILABLE_SIGNS_TO_TYPE[i])
            return;
    }
}

function addNumberToResultWindow(e) {
    for (let i = 0; i < CALC_NUMBERS.length; i++) {
        if (e.target.innerText == CALC_NUMBERS[i]) {
            RESULT_WINDOW.innerText += e.target.innerText;

            console.log(RESULT_WINDOW.textContent);

            break;
        }
    }
}

function addOperatorsToResultWindow(e) {
    for (let i = 0; i < CALC_OPERATORS.length; i++) {
        if (RESULT_WINDOW.textContent.includes('+')) continue;
        if (RESULT_WINDOW.textContent.includes('-')) continue;
        if (RESULT_WINDOW.textContent.includes('/')) continue;
        if (RESULT_WINDOW.textContent.includes('x')) continue;

        if (e.target.innerText === CALC_OPERATORS[i]) {
            currentNumber = RESULT_WINDOW.textContent;

            RESULT_WINDOW.textContent += e.target.innerText;

            break;
        }
    }
}

function checkOperationSign(sign, number1, number2) {
    let tempResult;

    switch (sign) {
        case '+':
            tempResult = number1 + number2;
            break;
        case '-':
            tempResult = number1 - number2;
            break;
        case 'x':
            tempResult = number1 * number2;
            break;
        case '/':
            tempResult = number1 / number2;
            break;
    }

    return tempResult;
}

const clearResultWindow = () => {RESULT_WINDOW.textContent = null};

const doOperation = () => {
    let secondNumber = RESULT_WINDOW.textContent;
    let sign;

    sign = secondNumber.slice(currentNumber.length, currentNumber.length + 1);
    secondNumber = secondNumber.slice(currentNumber.length + 1);

    let result;
    result = checkOperationSign(sign, parseFloat(currentNumber), parseFloat(secondNumber));
    RESULT_WINDOW.textContent = result;
};

function calculatorFeatures(e) {
    switch (e.target.innerText) {
        case 'C':
            clearResultWindow();
            break;
        case '=':
            doOperation();
            break;
    }
}