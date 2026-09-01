// Get the input fields, buttons, and result paragraph
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const result = document.getElementById("result");

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

add.addEventListener("click", function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);

  result.textContent = "Result: " + addition(number1, number2);
});

subtract.addEventListener("click", function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);

  result.textContent = "Result: " + subtraction(number1, number2);
});

multiply.addEventListener("click", function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);

  result.textContent = "Result: " + multiplication(number1, number2);
});

divide.addEventListener("click", function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);

  result.textContent = "Result: " + division(number1, number2);
});
