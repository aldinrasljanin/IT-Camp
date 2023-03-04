/// 1.Zadatak ///
// Prvi Deo. Napraviti pomocni niz koji ce sadrzati sve elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatog niza uzeti parne brojeve.
// Treci deo. U drigom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

// const DATA1 = [2, 26, 38, 75, 11, 29];
// const DATA2 = [4, 6, 5, 10, 33, 52, 75];

// const firstAssignament = (array1, array2) => {
//   const combined = array1.concat(array2); // Prvi deo
//   const filteredArray = combined.filter((el) => el % 2 === 0); // Drugi deo
//   filteredArray.unshift(10, 20); // Treci deo
//   return combined, filteredArray; // Kraj
// };
// console.log(firstAssignament(DATA1, DATA2));

/// 2.Zadatak ///
// Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

// const numbers2 = [2, 5, 10, 3, 4, 8];
// const powNumbers = (array) => {
//   let powedNumbers = array.map((el) => el * el);
//   return powedNumbers;
//   return array.map((el) => el * el); // Skraceni deo
// };
// const shortPow = (array) => array.map((el) => el * el); // Laksi nacin
// console.log(shortPow(numbers2));
// console.log(powNumbers(numbers2));

/// 3.Zadatak ///
// Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.
// const numbers = [4, 9, 16, 25, 36];
// Math.sqrt();
// const squareNumbers = (array) => array.map((el) => Math.sqrt(el));
// console.log(numbers);
// console.log(squareNumbers(numbers));

/// 4.Zadatak ///
// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
// value > 2 ==> value * 7
// value >2 and value <8 => (value*4)/2
// Ostale vrednosti da ne uzima u obzir
// I na kraju treba novi niz vratiti sa godinama >10

// const numbers = [3, 5, 10, 13, 22, 253, 10];
// const customAssignment = (array) => {
//   let result = array.map((el) => {
//     if (el > 2) return el * 7;
//     else if (el > 2 && el < 8) return (el * 4) / 2;
//   });
// };

// 4. Zadatak
// Kvadrirati one brojeve koje imaju index 0,3,5.

// function powNumbers(array) {
//   array.map((el, index) => {
//     if (index === 0 || index === 3 || index === 5) {
//       array[index] = el ** 2;
//     }
//   });
//   return array;
// }

// const array = [4, 2, 5, 8, 14, 25];
// console.log(powNumbers(array)); // [16, 2, 5, 64, 14, 625]

// 6. Zadatak
// Napraviti novi niz koji filtrira postojeci i vraca novi sa parnim elementima.

// const evanNumbers = (array) => {
//   return array.filter((el) => el % 2 === 0);
// };

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(evanNumbers(array)); // [2, 4, 6, 8, 10]

// 7. Zadatak
// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza,
// gde je drugo slovo e.

// const filteredArray = (array) => {
//   return array.filter((el) => el[1] === "e");
// };

// const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];
// console.log(filteredArray(words)); // ["televizor", "telefon"]

// 8. Zadatak
// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija
// je duzina >= 6.

// function filteredArray(array) {
//   return array.filter(function (el) {
//     return el.length >= 6;
//   });
// }
// const array = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];
// console.log(filteredArray(array)); //["televizor", "daljinski", "telefon", "stolica"];

// 9. Zadatak
// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima ciji je tip "boolean';.
// const booleans = [true, false, true, false];
// const booleans = [true, false, true, false];

// const filteredBooleans = booleans.filter((item) => typeof item === "boolean");

// console.log(filteredBooleans); // Output: [true, false, true, false]

// 10. Zadatak
// Preko funkcije napraviti niz koji se sastoji iz parnih brojeva manjih ili jednakih 50 postojeceg niza.
// 11. Zadatak
// Sabrati sve godine tj. elemente niza a nakon toga podeliti sa brojem elemenata.
// tj. vratiti prosecnu starost godina.
// 12. Zadatak
// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers"; and
// return this variable.
// 13. Zadatak
// From the array of numbers, choose even double even numbers and
// compute the sum using Array&#39;s filter, map and reduce methods.
