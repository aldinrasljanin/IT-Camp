function validateForm() {
  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirm-email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  if (email != confirmEmail) {
    alert("Emails do not match");
    return false;
  }
  if (password != confirmPassword) {
    alert("Passwords do not match");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
