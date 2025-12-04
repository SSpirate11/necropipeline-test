/**
 * Simple Calculator Module
 * 
 * Provides basic arithmetic operations
 */

class Calculator {
  /**
   * Add two numbers
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtract b from a
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiply two numbers
   * BUG: Returns wrong result!
   */
  multiply(a, b) {
    // INTENTIONAL BUG: Should multiply, but adds instead
    return a + b;
  }

  /**
   * Divide a by b
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}

module.exports = Calculator;
