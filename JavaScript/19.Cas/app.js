/// Object Oriented Programming ///

// console.log({
//   name: Aldin,
//   lastname: Rasljanin,
// });

// const createNewObject = (name, lastName) => {
//   let newObject = {};
//   newObject.name = name;
//   newObject.lastName = lastName;
//   return newObject;
// };
// console.log(createNewObject("Aldin", "Rasljanin"));

class Animal {
  name;
  age;

  constructor(ime, godine) {
    this.name = ime;
    this.age = godine;
  }
}
// klasa sablon za pravljenje klase
const someAnimal = new Animal("Lesi", 30);

console.log(someAnimal);
