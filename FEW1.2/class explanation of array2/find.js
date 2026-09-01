// find the first condition of a array

const numbers = [1, 3, 5, 7, 8, 9];

// want to output the even number
const even = numbers.find(function (number) {
  return number % 2 === 0;
});

console.log(even);
// 8

// if add '4', it will show 4 bcs it find the first value that fit with the condition

const numbers = [1, 3, 4, 5, 7, 8, 9];

const index = numbers.findIndex(function (number) {
  return number % 2 === 0;
});

console.log(index);
// 2
