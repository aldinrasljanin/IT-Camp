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
