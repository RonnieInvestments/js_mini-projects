// In this workshop you will learn how to work with JavaScript fundamentals by building a greeting bot.

console.log("Hi there!"); // First message

console.log("I am excited to talk to you!"); // Add the bot's second message

let bot; // Declare a variable called bot

bot = "teacherBot"; // Assign variable name

let botLocation = "the universe"; // Initialize botLocation variable

console.log("Allow me to introduce myself."); // Add another message from the bot

let botIntroduction; // Initialize botIntroduction
botIntroduction = "My name is " + bot + "."; // Using string concatenation
console.log(botIntroduction);

// Bot's location Sentence
let botLocationSentence;
botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

// Reassigning variables
bot = "professorBot";

// Time to see new bot value
let nicknameIntroduction;
nicknameIntroduction = "My name is " + bot + ".";
console.log(nicknameIntroduction);

// Change nickname
bot = "awesomeTeacherBot";

// Trying the new nickname
let newNicknameGreeting;
newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

// Focus on the bot's favorite subject
let favoriteSubject = "Computer Science";

// Favorite subject sentence
let favoriteSubjectSentence;
favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

// Parting shot
console.log("Well, it was nice to talk to you. Have a nice day!");
