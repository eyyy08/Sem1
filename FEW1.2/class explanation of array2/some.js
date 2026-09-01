const fruits = ["cherry", "mango", "banana", "apple"];

const banana = fruits.some(function (fruit) {
  return fruit === "banana";
});

console.log(banana);
// true
