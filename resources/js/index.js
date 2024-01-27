let currValue = '';
let prevValue = '';
let operator = '';

const screen = document.querySelector('#display-screen');
screen.value = '';

const clearScreen = () => {
    currValue = '';
    prevValue = '';
    operator = '';
    screen.value = '';
}

const insertValue = (value) => {
    currValue += value;
    updateScreen();
}

const deleteLast = () => {
    currValue = currValue.slice(0, -1);
    updateScreen();
}

const insertOperator = (operatorValue) => {
    if (currValue !== '') {
        if (operator !== '') {
            calculate();
            operator = operatorValue;
        }
    }
    prevValue = currValue;
    currValue = '';
    operator = operatorValue;
    updateScreen();
}

const insertFloat = () => {
    if (currValue.indexOf('.') === -1) {
        insertValue('.');
    }
}

const calculate = () => {
    let result = '';
    const val1 = parseFloat(prevValue);
    const val2 = parseFloat(currValue);

    if (isNaN(val1) || isNaN(val2)) {
        return;
    }

    switch (operator) {
        case '+':
            result = val1 + val2;
            break;

        case '-':
            result = val1 - val2;
            break;

        case '%':
            result = val1 % val2;
            break;

        case '*':
            result = val1 * val2;
            break;

        case '/':
            if (val2 !== 0) {
                result = val1 / val2;
            } else {
                result = NaN;
            }
            break;

        case '^':
            if (val1 >= 0 && val2 >= 0) {
                result = Math.pow(val1, val2);
            } else {
                result = NaN;
            }
            break;

        default:
            return;
    }
    // console.log("result: " + result)

    // result = result.toPrecision(3);

    screen.value = result;
    currValue = result.toString();
    operator = '';
}

const updateScreen = () => {
    screen.value = prevValue + operator + currValue;
}

// const changeTheme = () => {
//     console.log('Changed')
//     const containerTheme = document.querySelector('.calculator-container');
//     containerTheme.classList.toggle('dark-theme');
// }