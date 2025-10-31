const {
    add,
    subtract,
    multiply,
    divide,
    power,
    squareRoot
} = require('./calculator');

describe('Calculator - Unit Tests', () => {
    
    describe('add() function', () => {
        test('should add two positive numbers correctly', () => {
            // Arrange
            const a = 5;
            const b = 3;
            
            // Act
            const result = add(a, b);
            
            // Assert
            expect(result).toBe(8);
        });

        test('should add positive and negative numbers correctly', () => {
            expect(add(5, -3)).toBe(2);
        });

        test('should add two negative numbers correctly', () => {
            expect(add(-5, -3)).toBe(-8);
        });

        test('should add zero to a number correctly', () => {
            expect(add(5, 0)).toBe(5);
        });

        test('should handle decimal numbers correctly', () => {
            expect(add(2.5, 3.1)).toBeCloseTo(5.6);
        });
    });

    describe('subtract() function', () => {
        test('should subtract two positive numbers correctly', () => {
            expect(subtract(10, 4)).toBe(6);
        });

        test('should subtract negative numbers correctly', () => {
            expect(subtract(5, -3)).toBe(8);
        });

        test('should return negative result when subtracting larger number', () => {
            expect(subtract(3, 10)).toBe(-7);
        });

        test('should handle zero correctly', () => {
            expect(subtract(0, 5)).toBe(-5);
            expect(subtract(5, 0)).toBe(5);
        });
    });

    describe('multiply() function', () => {
        test('should multiply two positive numbers correctly', () => {
            expect(multiply(4, 5)).toBe(20);
        });

        test('should multiply positive and negative numbers correctly', () => {
            expect(multiply(4, -5)).toBe(-20);
        });

        test('should multiply two negative numbers correctly', () => {
            expect(multiply(-4, -5)).toBe(20);
        });

        test('should return zero when multiplying by zero', () => {
            expect(multiply(5, 0)).toBe(0);
            expect(multiply(0, 5)).toBe(0);
        });

        test('should handle decimal numbers correctly', () => {
            expect(multiply(2.5, 4)).toBe(10);
        });
    });

    describe('divide() function', () => {
        test('should divide two positive numbers correctly', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('should divide numbers with decimal result', () => {
            expect(divide(5, 2)).toBe(2.5);
        });

        test('should handle negative numbers in division', () => {
            expect(divide(-10, 2)).toBe(-5);
            expect(divide(10, -2)).toBe(-5);
            expect(divide(-10, -2)).toBe(5);
        });

        test('should throw error when dividing by zero', () => {
            // Arrange & Act & Assert
            expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
        });

        test('should return zero when dividing zero by a number', () => {
            expect(divide(0, 5)).toBe(0);
        });

        test('should handle decimal divisors correctly', () => {
            expect(divide(10, 0.5)).toBe(20);
        });
    });

    describe('power() function', () => {
        test('should calculate positive exponent correctly', () => {
            expect(power(2, 3)).toBe(8);
        });

        test('should handle zero exponent correctly', () => {
            expect(power(5, 0)).toBe(1);
        });

        test('should handle negative exponent correctly', () => {
            expect(power(2, -2)).toBe(0.25);
        });

        test('should handle fractional base correctly', () => {
            expect(power(0.5, 2)).toBe(0.25);
        });

        test('should handle base of zero correctly', () => {
            expect(power(0, 5)).toBe(0);
            expect(power(0, 0)).toBe(1); // Mathematical convention
        });
    });

    describe('squareRoot() function', () => {
        test('should calculate square root of positive number correctly', () => {
            expect(squareRoot(25)).toBe(5);
        });

        test('should calculate square root of zero correctly', () => {
            expect(squareRoot(0)).toBe(0);
        });

        test('should calculate square root of decimal number correctly', () => {
            expect(squareRoot(2.25)).toBe(1.5);
        });

        test('should throw error for negative numbers', () => {
            expect(() => squareRoot(-25)).toThrow('Square root of negative numbers is not allowed');
        });

        test('should handle perfect squares correctly', () => {
            expect(squareRoot(144)).toBe(12);
        });
    });

    describe('Integration Tests - Multiple Operations', () => {
        test('should handle complex calculation sequence', () => {
            // (10 + 5) * 2 / 3
            const step1 = add(10, 5);        // 15
            const step2 = multiply(step1, 2); // 30
            const step3 = divide(step2, 3);  // 10
            
            expect(step3).toBe(10);
        });

        test('should handle power and square root combination', () => {
            // √(5² + 12²)
            const step1 = power(5, 2);           // 25
            const step2 = power(12, 2);          // 144
            const step3 = add(step1, step2);     // 169
            const step4 = squareRoot(step3);     // 13
            
            expect(step4).toBe(13);
        });

        test('should handle edge case scenarios', () => {
            // Testing boundary values
            expect(add(Number.MAX_SAFE_INTEGER, 0)).toBe(Number.MAX_SAFE_INTEGER);
            expect(subtract(Number.MIN_SAFE_INTEGER, 0)).toBe(Number.MIN_SAFE_INTEGER);
        });
    });

    describe('Error Handling and Validation', () => {
        test('should handle very large numbers', () => {
            const largeNum = 1e15;
            expect(add(largeNum, largeNum)).toBe(2e15);
        });

        test('should handle very small numbers', () => {
            const smallNum = 1e-15;
            expect(multiply(smallNum, 2)).toBe(2e-15);
        });

        test('should maintain precision for decimal operations', () => {
            const result = add(0.1, 0.2);
            expect(result).toBeCloseTo(0.3); // Using toBeCloseTo for floating point comparison
        });
    });
});