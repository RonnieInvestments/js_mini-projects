//  Build a function that returns the length of the longest word in the provided sentence

function findLongestWordLength(string){

    // Remove spaces from the beginning and end of a string
  string = string.trim();

    // Split the sentence into individual words using spaces as separators
  const words = string.split(/\s+/);

    // Store the length of the longest word found so far
  let longestLength = 0;

     // Loop through each word in the array
  for(let word of words) {

    // If the current word is longer than the previous longest
    if (word.length > longestLength){
        // Update longestLength to the current word's length
      longestLength = word.length;
    }
  }
   // Return the length of the longest word 
  return longestLength;
}