/*

You will mask the username part of an email address with asterisks. 
Masking is a term used to hide or replace sensitive information with asterisks or other characters.

*/

function maskEmail(email){ // Makes a function that masks emails and takes email address as input
  
    let atIndex = email.indexOf("@"); // finds the symbol @ in the email
    let username = email.slice(0, atIndex); // takes the part before the @ and makes it the username
    let domain = email.slice(atIndex); // takes the part after the domain (example.com)

    let firstChar = username[0]; // gets the first letter of the username
    let lastChar = username[username.length-1]; // gets the last letter of the username
    let maskedChar = "*".repeat(username.length-2); // makes a string of * the same length as the letters between the first and last character
    return firstChar + maskedChar + lastChar + domain; // joins everything together to form a masked email

}

let email = "apple.pie@example.com";
console.log(maskEmail(email));