function sumArray(numbers) {
  let totalSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }

  return totalSum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
