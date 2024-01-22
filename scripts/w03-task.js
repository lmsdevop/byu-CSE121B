/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2
}

function subtractNumbers() {
    let addNumber1 = Number(document.querySelector('#subtract1').value);
    let addNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = add(addNumber1, addNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(dividend, divisor) {
    return dividend / divisor;
}

const divideNumbers = function () {
    let dividendValue = Number(document.querySelector('#dividend').value);
    let divisorValue = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividendValue, divisorValue);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal() {
    let getSubtotal = Number(document.querySelector('#subtotal').value);
    let checkbox = document.getElementById('member');
    let result;

    if (checkbox.checked) {
        return result = getSubtotal - (getSubtotal * 0.15);
    } else {
        return result = getSubtotal;
    }
}
document.querySelector('#getTotal').addEventListener('click', function () {
    let totalElement = document.getElementById('total');
    totalElement.innerHTML = `$ ${getTotal().toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
let oddArray = numbersArray.filter(function (number) {
    return number % 2 !== 0;
})
document.querySelector('#odds').innerHTML = oddArray;

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(function (number) {
    return number % 2 == 0;
})

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map((number) => number * 2)

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map((number) => number * 2).reduce((sum, number) => sum + number)
