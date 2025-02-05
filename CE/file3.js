// file3.js
const { sum, multiply } = require('./file2'); // Import functions from file2.js

const num1 = 10;
const num2 = 5;

console.log(`Sum of ${num1} and ${num2} is:`, sum(num1, num2));
console.log(`Multiplication of ${num1} and ${num2} is:`, multiply(num1, num2));
