//Da bismo proverili nejednakost koristimo:
// !=
//trazi razliku
// !==

// != -> proverava samo vrednost
// !== -> proverava i tip i vrednost

// for(inicijalnaVrednost; uslov; brojac)

//Pogresno
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");

// Uvecava
for (let i = 1; i < 5; i++) {
  console.log("hello world", i);
}
//Smanjuje
for (let i = 10; i >= 0; i--) {
  console.log("hello world", i);
}

// while (uslov) {

// }

let text = "";
let i = 0;

while (i < 10) {
  text += "The number is " + i;
  i++;
}
// Zadatak
//printati brojeve koji su deljivi sa 2. Petlja pocinje od 1 zavrsava se do 10
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
