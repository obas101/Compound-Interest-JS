let principal = 450000;
let rate = 0.2;
let numb = 4;
let time = 3;
const compoundInterest = principal * ((1 + rate / numb)^(numb * time));
console.log("The compound interest is " + compoundInterest)