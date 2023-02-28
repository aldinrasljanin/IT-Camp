// 1. korak for petlja
// 2. korak broj okretanja petlje
// 3. korak unos brojeva

// const miniCalculator = () => {
//   const brojOkretanja = prompt("Unesi broj okretanja");
//   //   let initialValue = 1;

//   for (let i = 0; i < brojOkretanja; i++) {
//     initialValue *= +prompt("Unesi broj");
//   }

//   alert(initialValue, "je krajnji rezultat");
// };

// miniCalculator();

const ourClass = [
  {
    name: "Aldin",
    lastName: "Rasljanin",
    age: 17,
  },
  {
    name: "Danilo",
    lastName: "Petrovic",
    age: 17,
  },
  {
    name: "Seid",
    lastName: "Alomerovic",
    age: 19,
  },
  {
    name: "Ihsan",
    lastName: "Curic",
    age: 20,
  },
];
// callbackfn argument neke nove funkcije
console.log(ourClass);
// console.log(ourClass[2].lastName);
// console.log(ourClass[3].name);
// console.log(ourClass[1].name);

// ourClass.map((el) => console.log(el));
// ourClass.map((el) => console.log(el.lastName));

const adultPerson = ourClass.filter((el) => el.age > 18);
console.log(adultPerson);
