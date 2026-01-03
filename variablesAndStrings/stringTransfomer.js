/*
In this workshop, you will practice working with the replace(), 
replaceAll() and repeat() methods by building a string transformer app.
*/
// Initialize originalString variable
let originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

// The replace() method which is used to locate a substring in a string and replace it with another value.
let replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString); // I love dogs.

// Now it is time to work with a new string method.
let exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence); // I love cats and cats are so much fun!

// Create a new variable called dogsOnlySentence and assign it exampleSentence.replace("cats", "dogs").
let dogsOnlySentence = exampleSentence.replace("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence); // I love dogs and cats are so much fun!

/* 
Fix it so the text reads "I love dogs and dogs are so much fun!" 
    const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
*/

// New string method
let learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

// repeat()
let repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

// To see the repeated word in a sentence
let newSentence = "I "+ repeatedLove +  " learning.";
console.log(newSentence); // I love love love  learning.

