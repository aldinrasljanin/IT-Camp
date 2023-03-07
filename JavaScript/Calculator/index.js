const display = document.getElementById("input-wrap");
console.log(display);

const buttons = document.getElementsByClassName("number");
console.log(buttons);

console.log(buttons[0]);

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[0]);
  buttons[i].addEventListener("click", (e) => {
    console.log(e.target.textContent);
    let value = e.target.textContent;
    if (value === "=") {
      display.innerText = eval(display.innerText);
    } else display.innerText = e.target.textContent;
  });
}

// display.innerHTML = "nesto";
// eval
