// In this workshop, you will practice working with various string methods used for formatting strings.
// Initialize userInput variable
let userInput = "   Hello World!   ";

// Console.log (Original input)
console.log("Original input:");
console.log(userInput);

// Trim() to remove all whitespaces
let cleanedInput = userInput.trim();

// Checking the results
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

/*
There will be times where you will want to only trim whitespace at the beginning of the string. 
That is where the trimStart() method comes in handy.
*/
let trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

// To trim whitespace at the end of a string, you can use the trimEnd() method.
let trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

/*
There will be times where you will need to create a new string with a different casing.
To create a new string with all of the letters converted to uppercase, 
you can use the toUpperCase() method.
*/
// Create a variable called upperCaseInput and assign it the result of using the toUpperCase() method on the cleanedInput variable
let upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

// If you need to create a new string where all of the letters are in lowercase, you can use the toLowerCase() method.
let lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

// Multiple methods to create new strings
let lowercaseWord = "camelcase";
let camelCasedVersion = lowercaseWord.slice(0,5)+ // camel
    lowercaseWord[5].toUpperCase()+ // camelC - converts C to uppercase
    lowercaseWord.slice(-3); // access the remaining 'ase' letter using slice(negative index)
console.log("Camel cased version:");
console.log(camelCasedVersion);

