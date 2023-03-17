/// Object Oriented Programming ///

// console.log({
//   name: Aldin,
//   lastname: Rasljanin,
// });

// let classRoom = {
//   numberOfPeople: 6,
//   teacher: "Aldin",
// };

// console.log(classRoom);
// console.log(classRoom.hasOwnProperty("ucenik"));

// const createNewObject = (name, lastName) => {
//   // let newObject = {};
//   // newObject.name = name;
//   // newObject.lastName = lastName;
//   const newObject = {
//     name: name,
//     lastName,
//   };
//   return newObject;
// };

// console.log(createNewObject("Aldin", "Halilovic"));

// let person = createNewObject("Aldin", "Halilovic");

// console.log(person);
// console.log(`cao ${person.name}`);

class Animal {
  name = "Aldin";
  age = 21;

  constructor(ime, godine, owner) {
    this.name = ime;
    this.age = godine;
    this.owner = owner;
    this.lastname = owner;
  }
  writeAges() {
    return this.age;
  }

  nestoTrece(godine) {
    this.age = godine;
  }
}

// const someAnimal = new Animal("aaaa", 30, "Aldin");
const someAnimal = new Animal();
// console.log(someAnimal);
// someAnimal.writeAges();
// someAnimal.nestoTrece(52);
// someAnimal.writeAges();

// console.log(someAnimal);
// klasa sablon za pravljenje klase, imaju svoj properties
// const someAnimal = new Animal("Lesi", 30);

// console.log(someAnimal);

class Dog extends Animal {
  bark;

  constructor(arg1) {
    super(); // super() // predstavlja extand of Animal
    this.bark = arg1;
  }
}

const pas = new Dog("aw aw");
// console.log(pas.writeAges());
//nasljedjivanje, enkapsulacija, abstrakcija, polimorfizam

// Example for static name //
class School {
  static name = "NIT";
  static nekaFun() {
    console.log("staticna vrednost");
  }

  constructor(students) {
    this.students = students;
  }
}

let skola = new School(30);
// console.log(skola);
// console.log(School.name);
// School.nekaFun();

// Example for getting seats in bus //
// class bus {
//   seats;

//   constructor(sedista) {
//     this.seats = sedista;

//     setSeats();
//     {
//       return this.seats;
//     }
//     getSeats(brojSedista);
//     {
//       this.seats = sedista;
//     }
//   }
// }
// console.log(setSeats);

// Example for private class //
class Shop {
  #profit = 30; // To get this argument we have to create
  proizvod = 40;

  getProfit() {
    return this.#profit;
  }
}
const prodavnica = new Shop(); // Call for function
console.log(prodavnica);
// console.log(prodavnica.proizvod);
// console.log(prodavnica.);

let noviProfit = prodavnica.getProfit(); // Function for get profit
console.log(noviProfit);
