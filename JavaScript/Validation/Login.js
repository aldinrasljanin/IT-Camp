//Napraviit login formu, ulepsati je u css i napraviti validaciju
//BONUS: jos jedno polje potvrdi sifru
let email = document.forms["form"]["email"];
let password = document.forms["form"]["password"];
let confirmPassword = document.forms["form"]["confirmPassword"];

let email_error = document.getElementById("email_error");
let pass_error = document.getElementById("password_error");
let form = document.querySelector(".login_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
const validated = () => {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  if (password.value.length < 9) {
    password.style.border = "1px solid red";
    pass_error.style.block = "block";
    password.focus();
    return false;
  }
  if (confirmPassword.value !== password.value) {
    confirmPassword.style.border = "1px solid red";
    confirmPassword.focus();
    return false;
  }
  location.href = "Home.html";
};

const email_Verify = () => {
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
};

const password_Verify = () => {
  if (password.value.length >= 8) {
    password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
};

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

email.addEventListener("textInput", email_Verify);
password.addEventListener("textInput", password_Verify);
