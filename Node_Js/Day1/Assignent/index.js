const crypto = require('crypto');

// Helper functions for mathematical operations
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const divide = (a, b) => a / b;
const sin = (a) => Math.sin(a);
const cos = (a) => Math.cos(a);
const tan = (a) => Math.tan(a);

// Function to generate a random number of specified length
const generateRandom = (length) => {
  if (!length) {
    console.log("Provide length for random number generation.");
    return;
  }
  const bytes = crypto.randomBytes(length);
  return bytes.toString("binary");
};

// Main function to process input arguments and perform operations
const main = () => {
  const [operation, ...args] = process.argv.slice(2);

  // Convert arguments to numbers
  const numbers = args.map(Number);

  let result;
  switch (operation) {
    case 'add':
      result = add(numbers[0], numbers[1]);
      break;
    case 'sub':
      result = sub(numbers[0], numbers[1]);
      break;
    case 'mult':
      result = mult(numbers[0], numbers[1]);
      break;
    case 'divide':
      result = divide(numbers[0], numbers[1]);
      break;
    case 'sin':
      result = sin(numbers[0]);
      break;
    case 'cos':
      result = cos(numbers[0]);
      break;
    case 'tan':
      result = tan(numbers[0]);
      break;
    case 'random':
      result = generateRandom(numbers[0]);
      if (!result) return;
      break;
    default:
      console.log("Invalid operation. Please use add, sub, mult, divide, sin, cos, tan, or random.");
      return;
  }

  console.log(result);
};

// Execute the main function
main();
