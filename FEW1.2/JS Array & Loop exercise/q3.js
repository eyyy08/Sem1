function concatenateStrings(strings) {
  let result = " ";

  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
  }

  return result;
}

console.log(concatenateStrings(["Hello", "World", "in", "JavaScript"]));
