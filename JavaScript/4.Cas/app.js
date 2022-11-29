year = window.prompt("Unesi godinu: ");
x = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
alert(x);

// if (kisa) {
//   //ponesi kisobran
// } else {
//   // ne treba kisobran
// }

// Vezba za if uslov

let sat = 16;
if (sat <= 10) {
  console.log("Jutro");
} else if (sat < 20 && sat > 10) {
  console.log("Dan");
} else if (sat >= 20) {
  console.log("Vece");
}

//Uslove koristimo da bismo odredili tok naseg programa

//if
//else if
//else
//switch

let broj_prvi = 5;
let broj_drugi = 10;

if (broj_prvi > broj_drugi) {
  console.log(true);
} else {
  console.log(false);
}

let mesec = 6;

//Nije dobra praksa
// if (mesec === 1) {
//   console.log("Januar");
// } else if (mesec === 2) {
//   console.log("februar");
// } else {
//   console.log("jun");
// }

switch (mesec) {
  case 1:
    console.log("Januar");
    break;
  case 2:
    console.log("Februar");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Maj");
    break;
  case 6:
    console.log("Jun");
    break;
  default:
}

//Varijable(promenljive)

//var -> function-scoped i moze postati global scope, moze se definisati vise istih promenljivih pomocu var
//let -> block-scoped, ako se definise u nekom blokui ne moze joj se pristupiti van tog bloka. Mozemo joj menjati vrednost
//const -> radi sve isto sto i let ali ne mozemo promeniti vrednost kao kod let. Ne mozemo promeniti vrednost ali mozemo properti

//Veliki problem
var x = 10;
var x = 11;
var x = 12;
console.log(x);

//Ne mozemo definisati iste varijable sa let
// let y = 10
// let y = 10

//Menjanje vrednosti
let z = "Zdravo";
z = "Dobar dan";
console.log(z);

{
  let nesto = 10;
}

//Ne moze se menjati na ovaj nacin
const cars = ["bmw", "audi"];
cars = ["mercedes"];

//Primer kako menjamo properti
const car = { type: "Fiat", model: "500", color: "white" };
car.color = "black";
