function countSpecificLetterFrequency(letters, specificLetter) {
  let count = 0;

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === specificLetter) {
      count++;
    }
  }

  return count;
}

console.log(
  countSpecificLetterFrequency(["a", "b", "a", "c", "b", "a", "d"], "a"),
);
