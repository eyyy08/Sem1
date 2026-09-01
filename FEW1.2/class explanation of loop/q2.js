// let user enter until it hits the correct number

let guess;

while (guess !== "7") {
  guess = prompt("Please guess a number:");
}

console.log("Correct");

// ans
// ! means 'not'
// intialise secrenumber
// not equal to 7, keep on prompting
// console.log put outside bracket so that it will run after everything is finish
let secretNumber = 7;
let input;

while (Number(input) !== secretNumber) {
  input = prompt("Guess the secret number: ");
}

console.log("Correct!");
alert("Correct! The number was" + secretNumber);
