document.addEventListener('DOMContentLoaded', function() {
  M.updateTextFields();
});

function validateForm() {
  let valid = true;
  clearErrors(); 

  let nome = document.getElementById("nome").value;
  if (nome.trim() === "") {
    showError("nome", "Nome é obrigatório");
    valid = false;
  }

  let email = document.getElementById("email").value;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    showError("email", "E-mail inválido");
    valid = false;
  }

  // Validação do assunto
  let assunto = document.getElementById("assunto").value;
  if (assunto.trim() === "") {
    showError("assunto", "Assunto é obrigatório");
    valid = false;
  }

  // Validação da mensagem
  let mensagem = document.getElementById("mensagem").value;
  if (mensagem.trim() === "") {
    showError("mensagem", "Mensagem é obrigatória");
    valid = false;
  }

  if (!valid) {
    return false;
  }

  // Mostrar o loader enquanto o formulário está sendo enviado
  document.getElementById("loader").style.display = "block";
  document.getElementById("submit-btn").disabled = true;

  // Simulação de envio
  setTimeout(function () {
    // Envio bem-sucedido
    alert("Mensagem enviada com sucesso!");
    document.getElementById("loader").style.display = "none";
    document.getElementById("submit-btn").disabled = false;
  }, 2000);

  return false; // Previne o envio real para efeito de demonstração
}

// Função para mostrar os erros de validação
function showError(field, message) {
  document.getElementById(field + "-error").textContent = message;
}

// Função para limpar erros
function clearErrors() {
  let errorFields = ["nome", "email", "assunto", "mensagem"];
  errorFields.forEach(function (field) {
    document.getElementById(field + "-error").textContent = "";
  });
}