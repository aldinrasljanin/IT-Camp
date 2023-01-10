// //Forme
// const handleSubmit = (e) => {
//   e.preventDefault();
// };

// const validacija = () => {
//   let vrednosti = document.forms["forma"]["first-name"].value;
//   if (vrednosti == "") {
//     alert("Morate popuniti prazno polje");
//     return false;
//   } else {
//     alert("Uspesno");
//   }
// };

//Napraviit login formu, ulepsati je u css i napraviti validaciju
//BONUS: jos jedno polje potvrdi sifru

const form = document.getElementById("login-form");
form.addEventListener("submit", (event) => {
  if (psw2.value !== psw.value) {
    ConfirmPassword.style.border = "1px solid red";
    ConfirmPassword.focus();
    return false;
  }
});
