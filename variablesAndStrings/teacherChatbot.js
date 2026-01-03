// Creating a simple teacher chatbot
// Console log "Hi there!"
console.log("Hi there!");

// Set bot name
let botName = "teacherBot";

// Create greeting using the botName variable
let greeting = `My name is ${botName}.`;
console.log(greeting);

// Create a few more variables that will be used in future bot messages
let subject = "JavaScript";
let topic = "strings";

// Creating sentence variable for the next step
let sentence = `Today, you will learn about ${topic} 
in ${subject}.`;
console.log(sentence);

// Working with string length property
let strLengthIntro = `Here is an example of using 
the length property on the word ${subject}.`;
console.log(strLengthIntro);

// Using the length property on strings
console.log(subject.length);

// Length of the topic string
console.log(`Here is an example of using the length
property on the word ${topic}.`);
console.log(topic.length);

// Review accessing characters from a string
console.log(`Here is an example of accessing the
first letter in the word ${subject}.`);

// Accessing characters from a string using their index
console.log(subject[0]); //First letter in the subject variable 'J'

// Accessing the second letter in the subject variable
console.log(`Here is an example of accessing the second
letter in the word ${subject}.`);
console.log(subject[1]); // 'a'

// Accessing the last character of a string
console.log(`Here is an example of accessing the last
letter in the word ${subject}.`);
console.log(subject[subject.length-1]); // 't'

// Last character
let lastCharacter = "t";
console.log(lastCharacter);

// Finding the index position of substring in a string
let learningIsFunSentence = "Learning is fun.";
console.log("Here are examples of finding the positions of substrings in the sentence.");

/* The indexOf() method
    Add a new console statement that outputs the result of using 
    the indexOf method on the learningIsFunSentence variable 
    to find the index position of the substring "Learning".
*/
console.log(learningIsFunSentence.indexOf("Learning"));
console.log(learningIsFunSentence.indexOf("fun")); // Find position of the substring "fun"
console.log(learningIsFunSentence.indexOf("learning")); // Returns -1, case sensitivity

// Final message
console.log("I hope you enjoyed learning today.");