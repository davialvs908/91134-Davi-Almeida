function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";

  if (name === "") {
    errorMessage.textContent = "por favor,insira seu nome.";
    return false;
  }

  if (password === "") {
    errorMessage.textContent = " por favor, insira sua senha.";
    return false;
  }
  if (password !== confirmPassword) {
    errorMessage.textContent = "as senhas não conferem.";
    return false;
  }

  return true;
}
