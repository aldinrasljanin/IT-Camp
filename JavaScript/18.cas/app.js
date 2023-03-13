/// 1.Zadatak ///
// Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" ( i veliko i malo).
// npr. za "Mama ima momu", dobija se rezultat 5.

let string = "Mama ima momu";

const checkLetter = (someString) => {
  let numberMs = 0;
  for (let m in someString) {
    // console.log(someString[m]);
    if (someString[m] === "m" || someString[m] === "M") {
      numberMs += 1;
    }
  }
  return numberMs; // vraca nam datu funkciju
};
console.log(checkLetter(string));

/// 2.Zadatak ///
// Ispitati da li u unetom stringu ima vise malih ili velikih slova.
// Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

let stringNeki = "Ako JA SAD ovako PISEM koliko CE MALIH slova DA ima";

const checkCases = (string) => {
  let malaSlova = 0; // pocetna vrednost brojanja malih slova
  let velikaSlova = 0; // pocetna vrednost brojaca velikih slova

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (string[i] === string[i].toUpperCase()) {
        velikaSlova++;
      } else malaSlova++;
    }
  }

  return `Malih slova ima ${malaSlova}, a velikih ${velikaSlova}`; // vraca nam koliko ima malih i velikih slova M,m
};

console.log(checkCases(stringNeki));
