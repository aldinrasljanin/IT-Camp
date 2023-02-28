// 1. korak for petlja
// 2. korak broj okretanja petlje
// 3. korak unos brojeva

// const miniCalculator = () => {
//   const brojOkretanja = prompt("Unesi broj okretanja");
//   let initialValue = 0; // first exemple with +
//   let initialValue = 1; // second exemple with *

//   for (let i = 0; i < brojOkretanja; i++) {
//     initialValue += +prompt("Unesi broj");  // first exemple with +
//     initialValue *= +prompt("Unesi broj");  // second exemple with *
//   }

//   alert(initialValue, "je krajnji rezultat");
// };

// miniCalculator();

const ourClass = [
  {
    name: "Aldin",
    lastName: "Rasljanin",
    age: 52,
    school: {
      class: "III-3",
      name: "tehnicka",
    },
  },
  {
    name: "Nerma",
    lastName: "Hot",
    age: 17,
    school: {
      class: "III-3",
      name: "gimnazija",
    },
  },
  {
    name: "Seid",
    lastName: "Alomerovic",
    age: 25,
    school: {
      class: "III-3",
      name: "tekstilna",
    },
  },
  {
    name: "Ihsan",
    lastName: "Curic",
    age: 23,
    school: {
      class: "III-3",
      name: "ekonomska",
    },
  },
];

// console.log(ourClass);
// console.log(ourClass[2].lastName);
// console.log(ourClass[3].name);
// console.log(ourClass[1].name);

// console.log(ourClass);
// ourClass.map((el) => console.log(el.lastName));
// const adultPersons = ourClass.filter((el) => el.school.name === "ekonomska");

// console.log(adultPersons);
// const newSomething = ourClass.map((el) => {
//   return {
//     name: el.name,
//   };
// });
// console.log(newSomething);

// const ashdjkja = [2, 3, 5, 6, 78, 8, 64, 5, 5];

// let sum = ashdjkja.reduce((a, b) => a + b);

// console.log(sum);

// let sum = ourClass.reduce((prev, curr) => (prev += +curr.age));
// console.log(sum);

let ages = [];
const ageFromObjects = ourClass.map((el) => {
  ages.push(el.age);
});
console.log(ages);
// console.log(ageFromObjects);
let sum = ages.reduce((prev, curr) => prev + curr);
console.log(sum / ages.length);
