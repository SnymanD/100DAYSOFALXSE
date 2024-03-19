// Here’s how you convert your age from “human years” to “dog years”:
let myAge = 36;

// The first two years of a dog’s life count as 10.5 dog years each
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