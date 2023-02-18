// for petlja- for loop
// i ide do 100- i goes up to 100
// ako je i deljiv sa 3 console.log("fizz")- if it is also divisible by 3 console.log("fizz")
// ako je i deljiv sa 5 console.log("buzz")- if it is also divisible by 5 console.log("buzz")
// ako je i deljiv i sa 3 i sa 5 console.log("fizzbuzz")- if it is divisible by both 3 and 5 console.log("fizzbuzz")

for (let i = 1; i <= 100; i++) {
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
