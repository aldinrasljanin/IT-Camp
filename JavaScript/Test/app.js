// FIZZBUZZ challange
// Ispisati brojeve od 0 do 100;
// Ukoliko je broj deljiv sa 3 - ispisati "FIZZ"
// Ukoliko je broj deljiv sa 3 - ispisati "BUZZ"
// Ukoliko je broj deljiv sa 3 - ispisati "FIZZBUZZ";

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}
//2.Zadatak
// Iz niza brojeva, izdvojiti sve parne brojeve, i duplirati ih,

const array = [3, 5, 8, 9, 10, 33, 56, 24, 93, 67, 34];
const evenArray = array.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log(evenArray);

// 3.Zadatak
// Preuzmi podatke sa api-ja, i izdvojiti sve usere sa parnim id-jem;
// API URL : https://jsonplaceholder.typecode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const userEvenId = data.filter((user) => user.id % 2 === 0);
    console.log(userEvenId);
  });
