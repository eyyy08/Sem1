function sumEvenNumbers(numbers) {
  let totalSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      totalSum += numbers[i];
    }
  }

  return totalSum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
