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

// 5. Zadatak
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

// const filteredArray = (array) => array.filter((el) => el[1] === "e");

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

// const filteredBooleans = booleans.filter((item) => typeof item === "boolean");
// console.log(filteredBooleans(booleans));

// 10. Zadatak
// Preko funkcije napraviti niz koji se sastoji iz parnih brojeva manjih ili jednakih 50 postojeceg niza.
// const arrayExample = [3, 6, 10, 82, 93, 105, 42, 28, 52, 50, 51, 22, 83];
// const evanArray = (array) => array.filter((el) => el <= 50 && el % 2 === 0);
// console.log(evanArray(arrayExample));

// 11. Zadatak
// Sabrati sve godine tj. elemente niza a nakon toga podeliti sa brojem elemenata.
// tj. vratiti prosecnu starost godina.
const averageAge = (yearsArray) =>
  yearsArray.reduce((acc, year) => acc + Number(year), 0);
return sumYears / yearsArray.length;

// 12. Zadatak
// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers"; and
// return this variable.

// const niz = [73, 100, 88, 105, 110, 200];
// const milesToKm = (array) => {
//   const kilometres = array.map((miles) => miles * 1.61);
//   const totalDistanceInKilometers = kilometres.reduce(
//     (prev, curr) => prev + curr
//   );
//   return totalDistanceInKilometers;
// };
// console.log(Math.round(milesToKm(niz)));

// 13. Zadatak
// From the array of numbers, choose even, double even numbers and
// compute the sum using Arrays:filter, map and reduce methods.
// const arrayExample = [3, 6, 10, 82, 93, 105, 42, 28, 52];

// const combination = (array) => {
//   const filtered = array.filter((el) => el % 2 === 0);
//   //   console.log(filtered);
//   const doubled = filtered.map((el) => el * 2);
//   //   console.log(doubled);
//   const sum = doubled.reduce((prev, curr) => prev + curr, 60);
//   return sum;
// };
// console.log(combination(arrayExample));

// 14. Zadatak
// Iz niza elemenata izracunati sumu parnih brojeva niza.
// const numbers = [3, 6, 10, 82, 93, 105, 42, 28, 52];

// const sumOfEvenNumbers = numbers
//   .filter((num) => num % 2 === 0)
//   .reduce((num1, num2) => num1 + num2);

// console.log(sumOfEvenNumbers); // 220

//  15. Zadatak
// Napraviti funkciju koja ispituje neki niz (argument).
// Ako produkt ima u zalihama vise od 20 treba:
// Treba datom produktu smanjiti cenu za 20%
// Ako produkt ima u zalihama vise od 40 treba:
// Treba datom produktu smanjiti cenu za 40%
// U slucaju da u zalihama ima 20 i manje kolicine,
// cena se ne menja.

// const products = [
//   {
//     id: 1,
//     name: "ARSENAL 22/23 HOME JERSEY",
//     price: 50,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/450ddf1b5943474fa472ae25009dfed0_9366/ARSENAL_22-23_HOME_JERSEY_Y_Red_HA5339_01_laydown.jpg",
//     currency: "EUR",
//     quantity: 41,
//   },
//   {
//     id: 2,
//     name: "ARSENAL CONDIVO 22 TRAINING TOP",
//     price: 65,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/32f9a996849147b284c1ae94009678a1_9366/Arsenal_Condivo_22_Training_Top_Blue_HC1252_01_laydown.jpg",
//     currency: "EUR",
//     quantity: 12,
//   },
//   {
//     id: 3,
//     name: "ARSENAL BEANIE",
//     price: 23,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8589fb63d02499db805ae7a00cf5273_9366/Arsenal_Beanie_Black_HM9965_01_standard.jpg",
//     currency: "EUR",
//     quantity: 7,
//   },
//   {
//     id: 4,
//     name: "ARSENAL ANTHEM JACKET",
//     price: 120,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2db81ab8d14d4817a659ae8c01155d2e_9366/Arsenal_Anthem_Jacket_Blue_HF4030_21_model.jpg",
//     currency: "EUR",
//     quantity: 36,
//   },
//   {
//     id: 5,
//     name: "ARSENAL TRAVEL HOODIE",
//     price: 85,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44d076827f3d4ea08c6bae85012f97bc_9366/Arsenal_Travel_Hoodie_Black_HF4031_01_laydown.jpg",
//     currency: "EUR",
//     quantity: 0,
//   },
//   {
//     id: 6,
//     name: "ARSENAL FC 93-94 JERSEY",
//     price: 85,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edf2037f434d46479c96adbd0085ce75_9366/Arsenal_FC_93-94_Jersey_Yellow_HK5626_01_laydown.jpg",
//     currency: "EUR",
//     quantity: 68,
//   },
//   {
//     id: 7,
//     name: "ARSENAL DNA CAP",
//     price: 23,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80b51f1feee344479c1eae760142da56_9366/Arsenal_DNA_Cap_Black_HM9968_01_standard.jpg",
//     currency: "EUR",
//     quantity: 4,
//   },
//   {
//     id: 8,
//     name: "ARSENAL TRAVEL BACKPACK",
//     price: 65,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7371783770f41e98afeae9a00a5a2c1_9366/Arsenal_Travel_Backpack_Black_HM9967_01_standard.jpg",
//     currency: "EUR",
//     quantity: 14,
//   },
// ];

// const adjustPrice = (product) => {
//   const { quantity } = product;
//   if (quantity > 40) product.price *= 0.6;
//   else if (quantity > 20) product.price *= 0.8;  // Prvi Nacin
//   return product;
// };
// console.log(products.map(adjustPrice));

// const checkProduct = (nizObjekata) => {
//   nizObjekata.map((el) => {
//     if (el.quantity > 40) {
//       el.price *= 0.6;
//     } else if (el.quantity > 20) {               // Drugi Nacin
//       el.price *= 0.8;
//     }
//   });
//   return nizObjekata;
// };
// console.log(checkProduct(products));

// 16.Zadatak
// const mockData = [
//   {
//     id: 1,
//     name: "nesto",
//     lastname: "",
//     subject: "",
//     age: 17,
//   },
//   {
//     id: 2,
//     name: "nesto",
//     lastname: "",
//     subject: "",
//     age: 17,
//   },
//   {
//     id: 3,
//     name: "nesto",
//     lastname: "",
//     subject: "",
//     age: 30,
//   },
//   {
//     id: 4,
//     name: "nesto",
//     lastname: "",
//     subject: "",
//     age: 22,
//   },
//   {
//     id: 5,
//     name: "nesto",
//     lastname: "",
//     subject: "",
//     age: 17,
//   },
// ];
// const classRoom = (array) => {
//   let newArray = array.filter((el) => {
//     return el.age > 20;
//   });
//   return newArray;
// };
// console.log(classRoom(mockData));

// const filteredStudents = (argument1) => {
//   let newArray = argument1.filter((el) => el.id % 2 === 0);
//   return newArray;
// };
// console.log(filteredStudents(mockData));

// const changeData = (argument2) => {
//   return argument2.map((al) => {
//     return {
//       ...al,
//       id: al.id - 1,
//       age: al.age * 3,
//     };
//   });
// };
// console.log(changeData(mockData));
