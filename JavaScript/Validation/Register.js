let email = document.getElementById("email");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let confirmEmail = document.getElementById("confirm-email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let errors = document.querySelectorAll(".error");

// Stavlja display none na svaki element koji ima klasu error

for (var i = 0; i <= errors.length - 1; i++) {
  errors[i].setAttribute("style", "display: none");
}
const validate = () => {
  // Validacije imena

  if (name.value.length <= 0) {
    errors[0].setAttribute("style", "display: block");
    name.style.border = "1px solid red";
    name.focus();
    return false;
  } else {
    errors[0].setAttribute("style", "display: none");
    name.style.border = "2px solid #ccc";
  }

  // Validacija prezimena

  if (surname.value.length <= 0) {
    errors[1].setAttribute("style", "display: block");
    surname.style.border = "1px solid red";
    surname.focus();
    return false;
  } else {
    errors[1].setAttribute("style", "display: none");
    surname.style.border = "2px solid #ccc";
  }

  // Validacija emaila

  if (email.value.length < 9) {
    errors[2].setAttribute("style", "display: block");
    email.style.border = "1px solid red";
    email.focus();
    return false;
  } else {
    errors[2].setAttribute("style", "display: none");
    email.style.border = "2px solid #ccc";
  }

  // Valdacija confirm emaila

  if (email.value.length != confirmEmail.value.length) {
    errors[3].setAttribute("style", "display: block");
    return false;
  } else {
    errors[3].setAttribute("style", "display: none");
  }

  // Validacija passworda

  if (password.value.length < 9) {
    errors[4].setAttribute("style", "display: block");
    password.style.border = "1px solid red";
    password.focus();
    return false;
  } else {
    errors[4].setAttribute("style", "display: none");
    password.style.border = "2px solid #ccc";
  }

  // Validacija confirm passworda

  if (password.value != confirmPassword.value) {
    errors[5].setAttribute("style", "display: block");
    confirmPassword.focus();
    confirmPassword.style.border = "1px solid red";
    return false;
  } else {
    errors[5].setAttribute("style", "display: none");
    confirmPassword.style.border = "2px solid #ccc";
    location.href = "Login.html";
  }
};

window.document
  .getElementById("registration-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
  });

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
