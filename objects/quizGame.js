// Create an array named questions containing at least 5 objects with keys (category, question, choices, and answer)

const questions = [

{
  category: "CSS",
  question: "Which property is used to change text color?",
  choices: ["font-style", "color", "background"],
  answer: "color",
},

{
  category: "JavaScript",
  question: "Which keyword is used to declare a variable in JavaScript?",
  choices: ["let", "loop", "define"],
  answer: "let",
},

{
  category: "Mathematics",
  question: "What is 2+2?",
  choices: ["3", "4", "5"],
  answer: "4",
},

{
  category: "Web",
  question: "Which HTML tag is used for a paragraph?",
  choices: ["<div>", "<p>", "<span>"],
  answer: "<p>",
},

{
  category: "General",
  question: "Which device is used to input text?",
  choices: ["Monitor", "Keyboard", "Printer"],
  answer: "Keyboard",
},

];

/*

You should have a function named getRandomQuestion that 
takes an array of questions as a parameter and 
returns a random question object from the array.

*/
function getRandomQuestion(questions){
  let randomIndex = Math.floor(Math.random()*questions.length);
  return questions[randomIndex]; 
}

/*

You should have a function named getRandomComputerChoice that takes 
the array of the available choices as a parameter, 
and returns a random answer to the selected question.

*/
function getRandomComputerChoice(choices){
  let randomChoice = Math.floor(Math.random()*choices.length);
  return choices[randomChoice]; 
}

/* 

You should have a function named getResults that takes 
the question object as the first parameter and 
the computer's choice as the second parameter. 
The function should return The computer's choice is correct! if the answer is correct. 
Otherwise, it returns The computer's choice is wrong. 
The correct answer is: <correct-answer>, 
where <correct-answer> is the value of the correct answer to the chosen question.

*/
function getResults(question, computerChoice){
  if(computerChoice===question.answer){
    return `The computer's choice is correct!`;
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}