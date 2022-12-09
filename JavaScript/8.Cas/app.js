// function ime_funkcije(parametar1, parametar2) {
// naredbe
// }

// ime_funkcije(argumenti1, argument2); //pozivanje funkcije

//Funkcija je blok za izvrsavanje nekih naredbi
//Koristenjem funcije mozemo skratiti kod
//Funkciju definisemo jednom i mozemo je koristiti vise puta u kodu

function saberi(a, b) {
  console.log(a + b);
  let z = 5; //Mozemo definisati lokalne promenljive
}

saberi(5, 10);
saberi(10, 20);

function pozdrav(ime) {
  console.log("Pozdrav " + ime);
  return; //Vraca vrednost funkcije i tu se funkcija zaustavlja
}
pozdrav("Ibrahime");
pozdrav("Danilo");

//ES6 funkcije
//Arrow funkcije
const oduzmi = (a, b) => {
  console.log(a - b);
};
oduzmi(10, 5);

//Nestovani nizovi
[][[]][[[]]];
