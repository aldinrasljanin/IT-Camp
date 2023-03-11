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

console.log(squareFn(3));

function squareFn(n) {
  return n * n;
}

console.log(squareConst(4));

var squareConst = (n) => {
  return n * n;
};
