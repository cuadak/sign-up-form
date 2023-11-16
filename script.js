function validatePassword() {
  const pass = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPassword").value;
  const validatePass = document.getElementById("validatePass");
  const submitButton = document.querySelector("button[type='submit']");
  validatePass.style.fontSize = "9px";
  if (pass != confirmPass) {
    validatePass.style.color = "red";
    validatePass.innerText = "* Passwords do not match";
    submitButton.disabled = true;
  } else {
    validatePass.style.color = "green";
    validatePass.innerText = "* Passwords matched";
    submitButton.disabled = false;
  }
}
