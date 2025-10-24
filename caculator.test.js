// calculator.test.js
const { add, subtract, multiply, divide, modulus } = require('./calculator');

describe('Calculator Tests', () => {
    // Add tests
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds -1 + 5 to equal 4', () => {
        expect(add(-1, 5)).toBe(4);
    });

    // Subtract tests
    test('subtracts 5 - 2 to equal 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('subtracts 0 - 5 to equal -5', () => {
        expect(subtract(0, 5)).toBe(-5);
    });

    // Multiply tests
    test('multiplies 3 * 4 to equal 12', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies -2 * 3 to equal -6', () => {
        expect(multiply(-2, 3)).toBe(-6);
    });

    // Divide tests
    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    // Modulus tests (Bonus)
    test('modulus 10 % 3 to equal 1', () => {
        expect(modulus(10, 3)).toBe(1);
    });

    test('modulus 8 % 4 to equal 0', () => {
        expect(modulus(8, 4)).toBe(0);
    });

    test('throws error when modulus by zero', () => {
        expect(() => modulus(10, 0)).toThrow('Modulus by zero is not allowed');
    });
});