/*

A leap year is a year that is divisible by 4, 
except for years that are divisible by 100 and not divisible by 400. 

For example, 2000 is a leap year, but 1900 is not. 
Also, a leap year has an extra day in February, which is the 29th day of the month.

*/

let year = yearToCheck; // should be a number

function isLeapYear(year) {
  if((year%4 === 0 && year%100 !== 0)|| year%400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`
  }
}

let result = isLeapYear(year);
console.log(result);

/*

- Nested -if- version

let year = 2024;

function isLeapYear(year) {

  // Step 1: Check divisibility by 400
  if (year % 400 === 0) {
    return `${year} is a leap year.`;

  // Step 2: Check divisibility by 100
  } else if (year % 100 === 0) {
    return `${year} is not a leap year.`;

  // Step 3: Check divisibility by 4
  } else if (year % 4 === 0) {
    return `${year} is a leap year.`;

  // Step 4: Everything else
  } else {
    return `${year} is not a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);


*/
