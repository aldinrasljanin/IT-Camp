//Hoisting je ponasanje u Javascriptu gde inicijalizujemo
// promenjljivu ili funkciju pre nego sto je deklarisemo

console.log(test);
var test = 10;

var a;
console.log(a);
a = 10;

//Nije ispravno zbog arrow funkcije
pozdrav();

const pozdrav = () => {
  console.log("Cao");
};
