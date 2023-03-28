// const postsDiv = document.getElementById("posts");
// const dataButton = document.getElementById("buttonId");
// // console.log(postsDiv);
// let getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((el) => el.json())
//     .then((res) => {
//       let skraceniPostovi = res.slice(0, 10);
//       for (let post in skraceniPostovi) {
//         const newParagraph = document.createElement("p");
//         newParagraph.innerText = skraceniPostovi[post].title;

//         postsDiv.append(newParagraph);
//       }
//     });
// };

// dataButton.addEventListener("click", () => getData());

// let string = "Danas je lep dan";
// let reversedString = "";

// for (let i = string.length - 1; i >= 0; i--) {
//   reversedString += string[i];
// }

// console.log(reversedString);
