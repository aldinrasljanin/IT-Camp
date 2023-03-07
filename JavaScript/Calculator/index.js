const display = document.getElementById("input-wrap");
console.log(display);

const buttons = document.getElementsByClassName("number");
console.log(buttons);

console.log(buttons[0]);

const Functions = (value) => {
  if (value === "=") {
    display.innerText = eval(display.innerText);
  } else if (value === "AC") {
    display.innerText = "";
  } else if (value === "+/-") {
    if (display.innerText.startsWith("-")) {
      display.innerText = display.innerText.slice(1);
    } else display.innerText = `-${display.innerText}`;
  } else display.innerText += value;
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    console.log(e.target.textContent);
    let value = e.target.textContent;
    Functions(value);
  });
}

// display.innerHTML = "nesto";
// eval
