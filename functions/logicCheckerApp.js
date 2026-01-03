// Building a logic checker app
// Begin by declaring a variable named truthyOrFalsy and assign it the boolean value true

// let truthyOrFalsy = true; comment this out

/* 

Change the assignment of truthyOrFalsy by setting its value to "freeCodeCamp". 
You will still see true logged to the console because a non-empty string is a truthy value.

*/
let truthyOrFalsy = "freeCodeCamp";

/*

Falsy values are values that evaluate to false in a boolean context. Examples of falsy values are:

"" (empty string)
0
false
null
undefined
NaN

let truthyOrFalsy = ""; // false

*/

// You can use the Boolean() function to check the truthiness of a value
console.log(Boolean(truthyOrFalsy));

// Initialize a new variable
let hasDeveloperJob = true;

/*

A conditional statement is used to run code depending on a condition. 
It is composed of the if keyword, followed by a condition enclosed 
by parentheses, and a body enclosed by curly braces.

*/
if(hasDeveloperJob){
  console.log("Timmy is employed as a developer.")
};

// Declare another variable and assign it a false value
let isTimmyAGamer = false;
    if(isTimmyAGamer){
    console.log("Timmy loves to play World of Warcraft.");
    }; // Nothing is logged as the condition of my statement is false

// Declare another variable timmyAge and set it to 18
let timmyAge = 18;
    if(timmyAge>=16){
    console.log("Timmy is old enough to drive.") // Timmy is old enough to drive.
    } else { // Add else clause to the existing if statement
        console.log("Timmy is not old enough to drive.") // Timmy is not old enough to drive.
    };

/* 

Test case:
Finally, change the declaration of timmyAge and set it to a number less than 16. 
    let timmyAge = 15;
After that you'll see "Timmy is not old enough to drive." logged to the console.

*/