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
// super() // predstavlja extand of Animal
//nasljedjivanje, enkapsulacija, abstrakcija, polimorfizam

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
