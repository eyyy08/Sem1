function calculateArea(length, width) {
  return length * width;
}

// Call calculateArea three times with different values
console.log("Area: " + calculateArea(5, 5));
console.log("Area: " + calculateArea(5, 10));
console.log("Area: " + calculateArea(10, 10));

function checkTemperature(temperature) {
  if (temperature > 30) {
    return "Hot";
  } else {
    return "Cold";
  }
}

// Call chechTemperature twice with different values
console.log(checkTemperature(35));
console.log(checkTemperature(25));
