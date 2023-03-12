// 1.Zadatak
// Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" ( i veliko i malo).
// Npr. za "Mama ima momu", dobija se rezultat 5.

const string = "Mama ima momu";
function checkLetters(string) {
  let start = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "M" || string[i] === "m") {
      start++;
    }
  }
  return start;
}

// 2.Zadatak
// Ispitati da li u unetom stringu ima vise malih ili velikih slova.
// Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

let stringNeki = "Ako JA SAD ovako PISEM koliko CE MALIH slova DA ima";

const checkCases = (string) => {
  let malaSlova = 0;
  let velikaSlova = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (string[i] === string[i].toUpperCase()) {
        velikaSlova++;
      } else malaSlova++;
    }
  }

  return `Malih slova ima ${malaSlova}, a velikih ${velikaSlova}`;
};

console.log(checkCases(stringNeki));
