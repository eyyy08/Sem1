// Question1
// Print all even numbers from 1-10

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// another way
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
