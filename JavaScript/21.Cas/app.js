// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// Callstack: last in first out
// Callback que: first in first out

// First Example
// function numOne() {
//   console.log(1);
// }

// function numTwo() {
//   console.log(2);
//   numOne();
// }

// function numThree() {
//   console.log(5);
//   numTwo();
//   console.log(3);
// }

// function numFive() {
//   console.log("first");
//   numThree();
//   console.log("a");
// }

// numFive();

// Second Example
// function sayMyName(name) {
//   console.log("Moje ime je " + name);
// }

// const nekaFunkcija = () => {
//   const myName = "aldin";
//   sayMyName(myName);
// };

// nekaFunkcija();

// Third Example
// function time() {
//   setTimeout(() => {
//     console.log("nesto");
//   }, 1000);
// }

// function one() {
//   console.log(1);
// }

// function two() {
//   setTimeout(() => {
//     console.log("bilo sta");
//   }, 2);
// }

// function three() {
//   setTimeout(() => {
//     console.log(3);
//   }, 1);
// }

// function neka() {
//   console.log("imas, nemas");
// }

// console.log(2);
// console.log(2);
// console.log(2);
// two();
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);

/// Promise ///
// Vraca dva izbora uspesno i neuspesno

// const obecanje = new Promise((resolve, reject) => {
//   // resolve(2);
//   // reject("neuspesno");
//   let a = 1 + 2;
//   if (a === 3) {
//     resolve(a);
//   } else {
//     reject("Zbir je netacan");
//   }
// });

// obecanje
//   .then((res) => {
//     let a = 0;
//     for (let i = 0; i < res; i++) {
//       a += 2;
//     }
// res + 10;
//     return a;
//   })
//   .then((el) => console.log(el))
//   .catch((el) => console.log(el))
//   .finally(() => console.log("konacan rezultat"));

// const prvi = new Promise((resolve, reject) => {
// resolve("prosao prvi");
//   reject("ne prolazi");
// });
// const drugi = new Promise((resolve, reject) => {
//   resolve("prosao drugi");
// });
// const treci = new Promise((resolve, reject) => {
//   resolve("prosao treci");
// });

/// Promise all ///
// Promise.all([prvi, drugi, treci])
//   .then((el) => console.log(el))
//   .catch((el) => console.log(el));

/// Data Fetch ///
// fetch("httpsppppppppppp://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((el) => (a = el))
//   .then(() => console.log(a))
//   .catch((error) => console.log("Greska " + error));

// function getData() {
//   let a;
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((el) => (a = el))
//     .then(() => console.log(a.products[0].images))
//     .catch((error) => console.log("Greska " + error));

//   return a;
// }

// const data = getData();
// console.log(data);
// if (data) {
//   console.log(data, "aa");
// }

function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((jsonFormat) => console.log(jsonFormat));
}
getData();
