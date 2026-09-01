// like slice(create new array)

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(function (number) {
  return number * 2;
});

console.log(double);

// transform ori array to something else

// another way
const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((number) => number * 2);

console.log(double);
