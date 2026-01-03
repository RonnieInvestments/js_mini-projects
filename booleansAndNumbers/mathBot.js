// Building a mathbot
// Create the botName and bot Greeting variables
let botName = "MathBot";
let greeting = "Hi there! My name is "+ botName +" and I am here to teach you about the Math object!"
console.log(greeting);

// The Math.random() method 
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

// Generate a random number using the Math.random() method
let randomNum = Math.random();
console.log(randomNum);

// Generate a random number between two values
console.log("Now, generate a random number between two values.");
let min = 1;
let max = 100;

/* 

The formula to generate a random number between two values is the following:

Example Code
Math.random() * (maximum - minimum) + minimum;

*/

let randomNum2 = Math.random() * (100 - 1) + 1;
console.log(randomNum2);

// Working with the Math.floor() method
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

let numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

// Generating a random integer between two values
console.log("Now, generate a random integer between two values.");

/*

The formula to generate a random integer between two values is the following:

Example Code
Math.floor(Math.random() * (maximum - minimum) + minimum);

*/
let randomInt = Math.floor(Math.random()*(100-1)+1);
console.log(randomInt);

// How the Math.ceil() method works
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

let numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

// How to round numbers to the nearest whole integer
console.log("The Math.round() method rounds the value to the nearest whole integer.");

let numRounded = Math.round(2.7);
console.log(numRounded); // 3

let numRounded2 = Math.round(11.2);
console.log(numRounded2); // 11

// How to get the minimum and maximum values of a set of numbers
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

let maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum); // 125

let minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum); // 2

// Parting shot
console.log("It was fun learning about the different Math methods with you!");