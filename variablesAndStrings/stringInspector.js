// Practice working with slice() and includes()
// Initialize variable fccSentence
let fccSentence = "freeCodeCamp is a great place to learn web development.";

// Start out with the console.log
console.log("Here are some examples of the includes() method:");

/* 
Create a variable named hasFreeCodeCamp. 
Then assign it the result of using the includes() method on 
fccSentence to check if it contains "freeCodeCamp".
*/
let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

/* 
Create a variable named hasJavaScript. 
Then assign it the result of using the includes() method 
to check if fccSentence includes "JavaScript".
*/
let hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

/*
Create a variable named hasLowercaseFCC. 
Then assign it the result of using the includes() method 
to check if fccSentence includes "freecodecamp" (all lowercase).
*/
let hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

// Slice() method
// Initialize variable message.
let message = "Welcome to freeCodeCamp!";
console.log("Here are some examples of the slice() method:");

/*
Create a variable named platform. 
Then assign it the result of using message.slice(11, 23) to extract "freeCodeCamp".
*/
let platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

// You can use slice() to extract from the beginning of a string.
let greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

// The slice() method can use negative indices to count from the end of the string. -1 refers to the last character.
let endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

// Parting message
console.log("Workshop complete! You now know how to use includes() and slice().");