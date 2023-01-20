// Functions
let count = document.getElementById("count");
let buttons = document.getElementsByClassName("allbtn");

// Variable declaration
let countValue = 0;

// Select button
minus.addEventListener("click", () => {
  countValue--;
  count.innerHTML = countValue;
});
reset.addEventListener("click", () => {
  countValue = 0;
  count.innerHTML = countValue;
});
plus.addEventListener("click", () => {
  countValue++;
  count.innerHTML = countValue;
});

// Particle js
const snowflakes = {
  particles: {
    number: {
      value: 100,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 10,
      random: true,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      straight: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
    },
    modes: {
      push: {
        particles_nb: 12,
      },
    },
  },
};

particlesJS("particles-js", snowflakes);
