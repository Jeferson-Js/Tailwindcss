document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita a submissão normal do formulário

    const usernameValue = loginForm.username.value;
    const emailValue = loginForm.email.value;

    // Simulação de validação de usuário e email
    if (usernameValue === "admin" && emailValue === "frances@gmail.com") {
      window.location.href = "logado.html";
    } else {
      alert("Nome de usuário ou email incorretos!");
    }
  });
});
