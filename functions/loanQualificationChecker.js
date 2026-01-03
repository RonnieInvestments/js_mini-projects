/*

Review JavaScript conditionals by building a loan qualification checker app.

The app will check whether the user is eligible for a duplex, car, and condo loan based on their annual income and credit score. 

A credit score is a number that represents how good you are at managing borrowed money.

*/

// Declaring variables and their values
let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;
let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;
let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;

// Build out a function inside which you'll have some checks that'll return what loan the applicant is eligible for
function getLoanMessage(annualIncome, creditScore){

  if(annualIncome>=minIncomeForDuplex && creditScore>=minCreditScoreForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";

  } else if (annualIncome>=minIncomeForCondo && creditScore>=minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."

  } else if (annualIncome>=minIncomeForCar && creditScore>=minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans.";
  }

}

// Testing the getLoanFunction 
let duplexLoanMsg = getLoanMessage(85000, 850);
console.log(duplexLoanMsg); // You qualify for duplex, condo, and car loan.

let condoLoanMsg = getLoanMessage(65000, 690);
console.log(condoLoanMsg); // You qualify for condo and car loan.

let carLoanMsg = getLoanMessage(45000, 660);
console.log(carLoanMsg); // You qualify for a car loan.

let noLoanMsg = getLoanMessage(25000, 550);
console.log(noLoanMsg); // You don't qualify for any loans.