const numbers = [1, 3, 4, 5, 7, 8, 9, 10, 12];

const even = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(even);

// simple method(arrow method)
const numbers = [1, 3, 4, 5, 7, 8, 9, 10, 12];

const even = numbers.filter((number) => number % 2 === 0);

console.log(even);
