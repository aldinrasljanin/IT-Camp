// Metode za rad sa nizovima

// 1. push    -> dodaje element na kraju niza
// 2. unshift -> dodaje element na pocetak niza
const arr = ["apple", "banana", "orange"];
arr.push("mango");
arr.unshift("avocado");
console.log(arr);

// 3. pop   -> brise element na kraj niza
// 4. shift -> brise element na pocetak niza
const arr2 = ["apple", "banana", "orange"];
arr.pop();
arr.shift();
console.log(arr2);

// 5. slice -> ne menja niz, vec vraca samo selektovane elemente iz niza
// formula za metodu slice : slice(start, end)
const arr3 = ["apple", "banana", "orange", "lemon", "ananas"];
let fruit = arr3.slice(2, 4);
console.log(fruit);

//6. splice -> menja niz i vraca selektovane elemente
const arr4 = ["apple", "banana", "orange", "lemon", "ananas"];
arr4.splice(1, 3, "cherry");
console.log(arr4);
// slice i splice vracaju selektovane elemente

//7. spread operator(...niz) -> pravi kopiju tog niza koji smo oznacili
const arr5 = [1, 2];
const arr6 = [5, 6, 7, true, false, "brojevi i razno"];
const arr7 = [...arr5, 3, 4, ...arr7];
console.log(arr6);
//kopirali smo niz arr5, arr6 i prosledili ga u arr7
