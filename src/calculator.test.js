const Calculator = require('./calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(calc.add(-1, -2)).toBe(-3);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      // This test will FAIL because multiply() has a bug
      expect(calc.multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(calc.multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers', () => {
      expect(calc.multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    test('throws error on division by zero', () => {
      expect(() => calc.divide(5, 0)).toThrow('Division by zero');
    });
  });
});
