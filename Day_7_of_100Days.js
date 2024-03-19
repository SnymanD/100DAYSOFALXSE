// A program that uses the Human Age to calculate the Dog Years using Human Age

// Declaring a Human Age:
let myAge = 36;

// The first year of dog counts as 2 years and the remaining as 4 years
let earlyYears = 2;
earlyYears *= 10.5;
myAge -= 2;

// setting the result equal laterYears
let laterYears = earlyYears;

// Multiplying laterYears by 4
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

//adding earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;

//returning my name in lowercase
let myName = 'Snyman'.toLocaleLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);