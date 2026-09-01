// for
// know where to stop,where to repeat?
// for (intilization;condition;increment)

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// while
// dontknow when to stop

// while(condition)
// something that updates the condition

// create a solution to keep asking the user untill they say :quit"
let input = " ";
while (input !== "quit") {
  input = prompt("Type something(or 'quit' to stop it):");
}

// combine loop with array
const fruits = ["apple", "banana", "orange"];
// want to print out all the loops

// initilization (let i = something); condition; increment
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//.length- check how many items have in the array

input = "";

while (input !== "yes" && input !== "no") {
  input = prompt('Please enter "yes" or "no":');
}

console.log("User Entered: ", input);
