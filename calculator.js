// calculator.js - This is your main application file
// Let's assume it contains basic calculator functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function squareRoot(number) {
    if (number < 0) {
        throw new Error('Square root of negative numbers is not allowed');
    }
    return Math.sqrt(number);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    squareRoot
};