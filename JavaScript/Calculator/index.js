const display = document.getElementById("input-wrap");
console.log(display);

const buttons = document.getElementsByClassName("number");
console.log(buttons);

console.log(buttons[0]);

const nekaDrugaFunkcija = (value) => {
  if (value === "=") {
    prikaz.innerText = eval(prikaz.innerText);
  } else if (value === "AC") {
    prikaz.innerText = "";
  } else if (value === "+/-") {
    if (prikaz.innerText.startsWith("-")) {
      prikaz.innerText = prikaz.innerText.slice(1);
    } else prikaz.innerText = `-${prikaz.innerText}`;
  } else prikaz.innerText += value;
};

for (let i = 0; i < buttoni.length; i++) {
  buttoni[i].addEventListener("click", (e) => {
    console.log(e.target.textContent);
    let value = e.target.textContent;
    nekaDrugaFunkcija(value);
  });
}

// display.innerHTML = "nesto";
// eval
