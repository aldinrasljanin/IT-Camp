// 1.Zadatak
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

// 2.Zadatak
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

// 3.Zadatak
// Napraviti novi niz koji sadrzi kvadratne korene elemenata predstojeceg niza.
// const numbers = [4, 9, 16, 25, 36];
// const squereNumbers = (array) => array.map((el) => Math.sqrt(el));

// console.log(numbers);
// console.log(squereNumbers(numbers));

// 4.Zadatak
// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
// value > 2 ==> value * 7
// value >2 and value <8 => (value*4)/2
// Ostale vrednosti da ne uzima u obzir
// I na kraju treba novi niz vratiti sa godinama >10

// const numbers = [3, 5, 10, 13, 22, 253, 10];
