function getLetterGrade(n) {
  if (n >= 90 && n <= 100) {
    return "A";
  } else if (n >= 80 && n <= 89) {
    return "B";
  } else if (n >= 70 && n <= 79) {
    return "C";
  } else if (n >= 60 && n <= 69) {
    return "D";
  } else if (n < 60) {
    return "F";
  }
}

console.log("Score 95: " + getLetterGrade(95));
console.log("Score 85: " + getLetterGrade(85));
console.log("Score 75: " + getLetterGrade(75));
console.log("Score 65: " + getLetterGrade(65));
console.log("Score 55: " + getLetterGrade(55));

function calculateTax(income, taxStatus) {
  if (taxStatus == "single" && income <= 30000) {
    return income * 0.15;
  } else if (taxStatus == "single" && income > 30000) {
    return income * 0.2;
  } else if (taxStatus == "married" && income <= 50000) {
    return income * 0.1;
  } else if (taxStatus == "married" && income > 50000) {
    return income * 0.15;
  }
}

console.log(
  "Tax for single person earning 25000: " + calculateTax(25000, "single"),
);
console.log(
  "Tax for single person earning 50000: " + calculateTax(50000, "single"),
);
console.log(
  "Tax for married person earning 40000: " + calculateTax(40000, "married"),
);
console.log(
  "Tax for married person earning 60000: " + calculateTax(60000, "married"),
);
