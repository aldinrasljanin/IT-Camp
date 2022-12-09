//Break -> Prekida dalju iteraciju u petlji
//Continue -> Preskace odredjenu iteraciju i prelazi na drugu

// for (let i = 1; i <= 20; i++) {
//   if (i === 11) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i === 11) {
//     break;
//   }
//   console.log(i);
// }

//Rad sa nizovima u petlji
// for (promenljiva of niz) {
//     // code block to be executed
//   }

//Rad sa nizovima
let niz = [10, 20, 30, 40, 50];

for (let x of niz) {
  console.log(x);
}

//Rad sa objektima
const person = { fname: "John", lname: "Doe", age: 25 };

for (let i in person) {
  console.log(i);
}
