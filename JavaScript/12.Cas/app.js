const x = document.getElementById("Img");
const y = (document.getElementById("text").style.color = "red");
const z = (document.getElementById("text").style.fontFamily = "sans-serif");

// Napraviti dugme koje kad se klikne promeni boju nekog teksta u plavu
function changeColor() {
  document.getElementById("text2").style.color = "blue";
}
//Dohvatanje elementa po klasi
function myFunction() {
  const myList = document.getElementsByClassName("list-group-car");
  for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = "red";
  }
}
//Dohvatanje elementa po id-u
// function myFunction() {
//   document.getElementById("car1").style.color = "red";
//   document.getElementById("car2").style.color = "blue";
//   document.getElementById("car3").style.color = "purple";
//   document.getElementById("car4").style.color = "cyan";
//   document.getElementById("car5").style.color = "grey";
// }

//Dohvatanje elementa po tag-u
const listItemsTag = document.getElementsByTagName("li");

let p = document.querySelector("demo");

//Forme
const handleSubmit = (e) => {
  e.preventDefault();
};

const validacija = () => {
  let vrednosti = document.forms["forma"]["first-name"].value;
  if (vrednosti == "") {
    alert("Morate popuniti prazno polje");
    return false;
  } else {
    alert("Uspesno");
  }
};

//Nodes
const newParagraph = document.createElement("p");
const text = document.createTextNode("Novi paragraf");
newParagraph.appendChild(text);

const newElement = document.getElementById("container");
newElement.appendChild(newParagraph);
