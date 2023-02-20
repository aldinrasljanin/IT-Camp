// for petlja- for loop
// i ide do 100- i goes up to 100
// ako je i deljiv sa 3 console.log("fizz")- if it is also divisible by 3 console.log("fizz")
// ako je i deljiv sa 5 console.log("buzz")- if it is also divisible by 5 console.log("buzz")
// ako je i deljiv i sa 3 i sa 5 console.log("fizzbuzz")- if it is divisible by both 3 and 5 console.log("fizzbuzz")

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

const positiveNumber = [6, 5, 4, 3, 2, 0, -1, -2];
var reversedArray = [];

for (let i = positiveNumber.length - 1; i >= 0; i--) {
  console.log(positiveNumber[i], `${i} index elementa niza`);
  reversedArray.push(positiveNumber[i]);
}
console.log(positiveNumber);
console.log(reversedArray);

const numbers = [3, 5, 7, 32, 67, 22];
let najveciBroj = 0;

for (let i = 0; i < numbers.length; i++);
{
  if (numbers[i] > najveciBroj) {
    najveciBroj = numbers[i];
  }
}
console.log(najveciBroj);

console.log(Math.max.apply(null, numbers));

// DOMACI
// reverse word
let firstTask = "laptop"; //potpal
let secondTask = "autobus"; //subotau

word1 = [...firstTask].reverse().join(" ");
word2 = [...secondTask].reverse().join(" ");

console.log(firstTask);
console.log(word1);
console.log(secondTask);
console.log(word2);
