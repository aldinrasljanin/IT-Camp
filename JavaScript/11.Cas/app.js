// 1. Kreirati niz koji sadrzi elemente a,b,c,d i promeniti element b da ispisuje slovo m.

let niz1 = ["a", "b", "c", "d"];
niz1[1] = "m";
console.log(niz1);

// 2. Kreirati niz od 10 elemenata nasumicnih brojeva i pomocu metode reduce prikazati zbir istih.
let numbers = [1, 3, 6, 8, 10, 36, 20, 17, 30, 122];
const sum = numbers.reduce((sum, number) => {
  return sum + number;
});
console.log(sum);

// 3. Pretvoriti iz Celzijusa u Farenhajt.
const convertCelsius = (celsius) => {
  return celsius * (9 / 5) + 32;
};
console.log(convertCelsius(6));
