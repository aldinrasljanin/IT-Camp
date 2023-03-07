const display = document.getElementById("input-wrap");
console.log(display);

const buttons = document.getElementsByClassName("number");
console.log(buttons);

console.log(buttons[0]);

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[0]);
  buttons[i].addEventListener("click", (e) => {
    console.log(e.target);
  });
}
