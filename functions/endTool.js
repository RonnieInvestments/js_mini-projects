/*

You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
The function should return true if the first string ends with the second string, and false otherwise.
You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.

*/

function confirmEnding(string, endString){

  if(endString.length>string.length){
    return false;
  }
  // Get a substring from the end of the string that has the same length as the 'endstring'
  
  let endOfString = string.substring(string.length - endString.length);

  if(endOfString===endString) {
    return true;
  } else {
    return false;
  }
}

/*

You should create a function named confirmEnding.

confirmEnding should take 2 parameters.

confirmEnding("Bastian", "n") should return true.

confirmEnding("Congratulation", "on") should return true.

confirmEnding("Connor", "n") should return false.

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.

confirmEnding("He has to give me a new name", "name") should return true.

confirmEnding("Open sesame", "same") should return true.

confirmEnding("Open sesame", "sage") should return false.

confirmEnding("Open sesame", "game") should return false.

confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain") 
should return false.

confirmEnding("Abstraction", "action") should return true.

Your code should not use the built-in method .endsWith() to solve the lab.

*/