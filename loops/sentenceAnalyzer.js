// Build a sentence analyzer

/*

Create a getVowelCount function with a parameter called sentence. 
Your function should return the total number of vowels in a sentence.

*/
function getVowelCount(sentence){
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++
    }

    /*
    Alternative way

    for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
    
    */

  }
  return count;
}

// Test the vowelCount function
let vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

// Check for consonants
function getConsonantCount(sentence) {
  const vowels = "aeiou"; // Stores all vowels in lower case and allows us to use the .includes() method
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      count++;
    }
    /*

    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;

    for (const char of sentence.toLowerCase()) {
        if (consonants.includes(char)) {
        count++;
        }
    }
    
    */
  }

  return count;
}

// Test the getConsonantFunction
let consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

// Check for punctuations
function getPunctuationCount(sentence) {
  let punctuation = ".,!?;:'\"-()[]{}<>@#$%^&*`~\\/|"; // add more if needed
  let count = 0;

  for (let char of sentence) {
    if (punctuation.includes(char)) {
      count++;
    }
  }
  return count;
}

// Test the punctuations function
let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log("Punctuation Count: " + punctuationCount);

// Check for number of words
function getWordCount(sentence) {
  if (sentence.trim() === '') { // Handling empty strings 
    return 0;
  }
  
  const words = sentence.trim().split(/\s+/); // Splitting sentence into words
  return words.length; // Counting the words
}

// Test the getWordCount function
let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
