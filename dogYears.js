//stores my age
var myAge = 27;
//stores early age
let earlyYears = 2;
earlyYears *= 10.5;
//accounting for earlyYears
let laterYears = myAge - 2;
//calculate dog years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//calculating total dog years
var myAgeInDogYears = earlyYears + laterYears;
let myName = 'Lauren'
//convert name to all lowercase
myName = myName.toLowerCase();
//display message
console.log(`My name is ${myName}.  I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
