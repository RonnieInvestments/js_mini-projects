// Working with functions to build a calculator app
// Start by creating a function called addTwoAndSeven

/*  function addTwoAndSeven() {
        return 2+7;
    };
    console.log(addTwoAndSeven());
 */
// addThreeAndFour function
/*  function addThreeAndFour() {
        return 3+4;
    };
    console.log(addThreeAndFour()); */

/*

Even though the functions work as expected, there is a lot of repetition in your code.

Since you are building a calculator, you don't want to have to create a function for every possible combination of numbers you want to add together.

It would be better to create a single reusable function that can add any two numbers together.

Remove all of the code you have written so far.

*/
//Declare a function called calculateSum that takes two parameters, num1 and num2
function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log(calculateSum(2,5)); // 7
// testing our function
console.log(calculateSum(10,10)); // 20
console.log(calculateSum(5,5)); // 10

// Create a function that will subtract two numbers
function calculateDifference(num1, num2) {
  return num1 - num2;
}
console.log(calculateDifference(22,5)); // 17
console.log(calculateDifference(12,1)); // 11
console.log(calculateDifference(17,9)); // 8

// Add the multiplication functionality to your calculator
function calculateProduct(num1, num2) {
  return num1 * num2;
};
console.log(calculateProduct(13,5)); // 65

// Add the division functionality to your calculator
function calculateQuotient(num1, num2) {
    // To accomodate for the infinity case 
    if (num2===0) {
        return "Error: Division by zero";
    } else {
        return num1 / num2;
    }
}
console.log(calculateQuotient(7,11)); // 0.6363636363636364
console.log(calculateQuotient(3, 0)); // infinity

// Calculating the square of a number
/*
To calculate the square of a number in JavaScript, you can use the Math.pow() method. 

The Math.pow() method takes two arguments: the base number and the exponent.

You can also use the exponentiation operator (**) to calculate the square of a number.

*/
function calculateSquare(num) {
  return num ** 2;
}
// Test cases
console.log(calculateSquare(2)); // 4
console.log(calculateSquare(9)); // 81

// The square root functionality
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}
// Testing out my calculateSquareRoot function
console.log(calculateSquareRoot(25)); // 5
console.log(calculateSquareRoot(100)); // 5