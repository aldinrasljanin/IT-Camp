// console.log(2 == "2");
// console.log(2 === "2");

// const array1 = [1, 4, 6, 7, 8, 2, 34];

// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }

// let a = 9;

// while (a < 8) {
//   console.log(a, "while");
//   a += 1;
// }

// let b = 9;

// do {
//   console.log(b, "do while");
//   b += 1;
// } while (b < 8);

// var;
// let;
// const;

// // var firstExample = 10;
// const secondExample = 30;
// // console.log(firstExample, "prvi");
// // firstExample = 32;
// // console.log(firstExample, "drugi");
// // firstExample = 100;
// // console.log(firstExample, "treci");

// for (let i = 0; i < 10; i++) {
//   const x = 3;
//   firstExample += x;
//   console.log(firstExample);
// }

// console.log(x);

// && ||
// console.log(5 && 6);

// console.log(3 === 3 && 3 === 3);
// console.log(3 === 6 || 3 === 3);
// false       true

// 3 !== 3 ? console.log("true") : console.log("false");

// const array2 = [132, 3453, 5546, 74577];

// const newArray = array2.filter((el) => el % 2 === 0);
// console.log(newArray);
// const newArray2 = array2.map((el) => el * 2);
// console.log(newArray2);

// const sum = array2.reduce((prev, curr) => prev + curr);
// const sum2 = array2.reduce((prev, curr) => prev + curr, 10000);

// const exampleThird = array2.forEach((el) => el % 2 === 0);
// console.log(exampleThird);
// const mapExample = array2.map((el) => console.log(el));

// console.log(sum, sum2);

// const array2 = [132, 3453, 5546, 74577];

// array2.map((el, index) => {
//   console.log(el);
// });

// const name = "Aldin";
// const school = "Tehnicka";

// console.log("Ja se zovem" + name);
// console.log(`Ja se zovem ${name} i idem u ${school}`);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else if (i % 3 === 0) {
//     console.log("nesto");
//   } else if (i % 8 === 0) {
//     console.log("nesto drugo");
//   } else {
//     console.log("poslednje else");
//   }
// }

// const tacno = 4;
// const netacno = 3;
// console.log(4 === 5 && 3 === 3);
// console.log(4 === 5 || 3 === 3);

// let a = 0;

// console.log(a);
// if (5 > 10) {
//   a = 3;
// } else {
//   a = 16;
// }

// 5 > 10 ? (a = 3) : (a = 16);
// console.log(a);

// const cars = ["bmw", "mercedes-benz", "volskwagen", "audi", "bentley"];
// const secondCars = ["renault", "citreon", "peugeot"];

// console.log(cars);
// const bothArray = cars.concat(secondCars);
// console.log(bothArray);
// console.log(cars);

// console.log(cars.reverse());
// console.log(positiveNumber.every((el) => el > 0));
// positiveNumber.some();
// console.log(positiveNumber.some((el) => el < 0));

// const positiveNumber = [2, 3, 45, 5, 6, 6, -10, -3];
// var reversedArray = [];

// for (let i = positiveNumber.length - 1; i >= 0; i--) {
//   console.log(positiveNumber[i], `${i} index elementa niza`);
//   reversedArray.push(positiveNumber[i]);
// }

// console.log(positiveNumber);
// console.log(reversedArray);

// let stringarray = positiveNumber.join("");
// console.log(stringarray);
// console.log(stringarray.split(""));

// console.log(3);

const numbers = [3, 5, 7, 32, 67, 22];

console.log(Math.max.apply(null, numbers));

// let najveciBroj = 0;

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i], najveciBroj);
//   if (numbers[i] > najveciBroj) {
//     najveciBroj = numbers[i];
//   }
// }

// console.log(najveciBroj);

const cars = ["bmw", "mercedes-benz", "volskwagen", "audi", "bentley"];
console.log(cars);
for (let car in cars) {
  console.log(cars[car]);
}
