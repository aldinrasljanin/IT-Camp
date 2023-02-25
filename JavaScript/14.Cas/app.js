// function addTwo(argument1, argument2) {
//   // console.log(argument1, argument2);

//   let zbir = argument1 + argument2;
//   // console.log(zbir);
//   return zbir;
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
// }

// addTwo();

// const addThree = function () {};

// addThree();

// const addFour = () => {};

// addTwo(2, 1);
// console.log(addTwo(2, 1));

// const konacanZbir = addTwo(2, 1);
// console.log(konacanZbir);

// const someArray = [1, 3, 5, 6, 7, 73, 45];

// // const myCallback = (el) => console.log(el);

// // someArray.map(myCallback);

// // someArray.forEach(myCallback);
// for each izlistava niz
// const ourForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// };

// // ourForEach(someArray, console.log);

// const ourMapFn = (array, callback) => {
//   let a = [];
//   for (let i = 0; i < array.length; i++) {
//     a.push(callback(array[i]));
//   }
//   return a;
// };

// // const myCallBack = (el) => el * 2;

// // console.log(ourMapFn(someArray, myCallBack));

// const ourFilterFn = (array, callback) => {
//   let a = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       a.push(array[i]);
//     }
//   }
//   return a;
// };

// console.log(ourFilterFn(someArray, (num) => num % 2 === 0));

// // const secondTry = (array, callback) => {
// const secondTry = (callback, array) => {
//   let a = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) a.push(array[i]);
//   }
//   return a;
// };

// // console.log(secondTry(someArray, (num) => num % 2 === 0));
// console.log(secondTry((num) => num % 2 === 0, someArray));

/// OBJEKTI
// key:value  // jedan properti

// const classRoom = {
//   subject: "Math",
//   room: "3B",
//   student: {
//     age: 32,
//     name: "Aldin",
//     saySomething() {
//       console.log(this.name);
//     },
//   },
//   sayHello() {
//     console.log(this.student.age);
//   },
// };

// classRoom.sayHello();

// function sayHelloToClassroom() {
//   console.log(this, "iz funkcije");
// }

// sayHelloToClassroom.call(classRoom);

// console.log(classRoom);
// console.log(classRoom.subject);
// console.log(classRoom.room);
// console.log(classRoom["subject"]);
// console.log(classRoom.student.name);

// const classRoom2 = [
//   { name: "aldin", age: [10, 3, 5, 7] },
//   { name: "mehmed", age: 21 },
//   { name: "tarik", age: 53 },
//   { name: "alija", age: 10 },
//   { name: "nikola", age: 10 },
//   { name: "petar", age: 13 },
// ];

// console.log(this);
// this // rezervisana rec za objekte u ovom slucaju classRoom2

/// Obnavljanje ///

// &&
// ||

// console.log(4 === 2 && 4 === 3);
// 4 === 4 || 4 === 3;

// let firstName = "aldin";

// for (let i = 0; i < firstName.length; i++) {
//   console.log(firstName[i]);
// }

// do {
//   console.log("nesto");
// } while (firstName.length > 22);

// while (condition) {}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 7, 8, 2, 23, 231, 33, 213, 124, 324];
// console.log(numberArray.length);
// console.log(numberArray.filter((el) => el > 10));
// console.log(numberArray.map((el) => el + 10));

// const slicedArray = numberArray.slice(0, 15);
// console.log(slicedArray);
// // console.log(slicedArray);
// console.log(numberArray);
// numberArray.splice(0, 3);
// console.log(numberArray);

// const ourForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     // callback(array[i]);
//     console.log(array[i]);
//   }
// };

// ourForEach(numberArray, console.log);

// numberArray.map((el) => console.log(el));

// console.log(customObject);

// console.log(Object.keys(customObject));
// console.log(Object.values(customObject));
// Object.keys(customObject);
// Object.values(customObject);

// customObject.knowledge.css();

// const knowledgeObject = {
//   javascript: "good",
//   html: "good",
//   advanced: {
//     react: "good",
//     typescript: "solid",
//     reactnative: "beginner",
//   },
// };

// console.log(knowledgeObject);
const customObject = {
  key: "value",
  name: "aldin",
  age: 21,
  knowledge: {
    javascript: "good",
    html: "good",
    css() {
      console.log(this);
    },
    advanced: {
      react: "good",
      typescript: "solid",
      reactnative: "beginner",
      josJedan: {
        paJosJedan: {
          onda: {
            poslednji: "nesto",
          },
        },
      },
    },
  },
};

function sayHello(arg1, arg2, arg3) {
  console.log(`${this.advanced.react} i ${arg1} i ${arg2}, ${arg3}`);
}

sayHello.call(customObject.knowledge, "argument1", "argument2");
sayHello.apply(customObject.knowledge, ["argument1", "argument2", "argument3"]);
// razlika je samo slanje u nizu

// sayHello();

// console.log(this); // svi elementi u browzeru se console logaju

// console.log(customObject.knowledge.advanced.josJedan.paJosJedan.onda.poslednji);

console.log(Object.keys(customObject));
console.log(Object.keys(customObject.knowledge));
