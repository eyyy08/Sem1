function calculateArea(length, width) {
  return length * width;
}

console.log(calculateArea(5, 5));
console.log(calculateArea(5, 10));
console.log(calculateArea(10, 10));

function checkTemperature(temperature) {
  if (temperature > 30) {
    return "Hot";
  } else {
    return "Cold";
  }
}

console.log(checkTemperature(35));
console.log(checkTemperature(25));
