const display = document.getElementById("input-wrap");
// console.log(display);

const buttons = document.getElementsByClassName("numbers");
// console.log(buttons);

// console.log(buttons[0]);

const Functions = (value) => {
  const currentValue = display.innerText;
  const lastChar = currentValue.slice(-1);

  if (value === "=") {
    display.innerText = eval(currentValue);
  } else if (value === "AC") {
    display.innerText = "";
  } else if (value === "C") {
    display.innerText = currentValue.slice(0, -1);
  } else if (value === "+/-") {
    if (currentValue.startsWith("-")) {
      display.innerText = currentValue.slice(1);
    } else {
      display.innerText = `-${currentValue}`;
    }
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    if (
      lastChar !== "+" &&
      lastChar !== "-" &&
      lastChar !== "*" &&
      lastChar !== "/" &&
      currentValue !== ""
    ) {
      display.innerText += value;
    }
  } else {
    if (currentValue === "" && value === "-") {
      display.innerText += "-";
    } else if (/^[0-9]+$/.test(value)) {
      display.innerText += value;
    }
  }
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
