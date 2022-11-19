// Objekat
var audi = { boja: "bela", model: "x6" };
console.log(audi);

var osoba = {
  ime: "Neko",
  godine: 55,
  zanimanje: "Programer",
  drzavljanstvo: "Nemac",
};

// Na ovaj nacin pristupamo objektima
var dajGodine = osoba.godine;
// moze i ovako
console.log(osoba.godine);

// Nizovi
// Lenght meri duzinu niza
// Sort sortira nizove
// Brojanje nizova pocinje od 0
var cars = ["Audi", "Bmw", "Mercedes"];
console.log(cars);
var cars3 = ["Audi", "Bmw", "Audi", "Mercedes"];
console.log(cars3.sort());
var car = cars.length;
var car = cars[2];
console.log(car);
console.log(cars[0]);

// Dodavanje elemenata
var cars2 = [];
cars2[0] = "Audi";
cars2[1] = "Renault";
cars2[2] = "Porsche";
cars2[3] = "Golf";
console.log(cars2);

// TIPOVI PODATAKA
// SLOZENI TIPOVI PODATAKA
// Objekat
// Niz
// Funkcija

// Aritmeticki operatori
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);

// =   dodeljuje vrednost
// ==  uporedjuje samo vrednost bez obzira na tip
// === uporedjuje i tip i vrednost
var x = 5;
var y = "5";
console.log(x == y);
console.log(x === y);

// Vezba nizova
var cars = ["Audi", "Bmw", "Mercedes", "Fiat", true, false, 2];
// var car = cars.length;
console.log(car);
var car = cars[2];
console.log(cars[4]);
console.log(cars[6]);
