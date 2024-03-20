//Magic Eight Ball, building a Magic Eight Ball using control flow in JavaScript.
//control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.
//The user will be able to input a question, then our program will output a random fortune.

let userName = 'Snyman';
userName ? console.log(`Hello ${userName}`) : console.log('Hello Stranger!');

const userQuestion = 'Which random number?';
console.log(`${userName} asked this question: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 7);
let eightBall = randomNumber;

switch (eightBall) {
  case 0:
  console.log('It is certain');
  break;
  case 1:
  console.log('It is decidedly so');
  break;
  case 2:
  console.log('Reply hazy try again');
  break;
  case 3:
  console.log('Cannot predict now');
  break;
  case 4:
  console.log('Do not count on it');
  break;
  case 5:
  console.log('My sources say no');
  break;
  case 6:
  console.log('Outlook not so good');
  break;
  case 7:
  console.log('Signs point to yes');
}
console.log(eightBall);