const login = document.querySelector('#sign-in-btn');
const cadastro = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const logarBtn2 = document.querySelector('#logar-btn2');
const cadastrarBtn2 = document.querySelector('#cadastrar-btn2');

cadastro.addEventListener('click', () => {
  container.classList.add('modo-de-cadastro');
});

login.addEventListener('click', () => {
  container.classList.remove('modo-de-cadastro');
});

cadastrarBtn2.addEventListener('click', () => {
  container.classList.add('modo-de-cadastro2');
});

logarBtn2.addEventListener('click', () => {
  container.classList.remove('modo-de-cadastro2');
});

// Aguarda até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {

  // Adiciona um ouvinte de eventos de clique ao botão
  cadastro.addEventListener('click', function (event) {
    // Verifica se o evento foi disparado diretamente pelo botão e não por um link clicado dentro dele
    if (!event.target.matches('a')) {
      // Obtém os valores dos campos de entrada para nome de usuário e email
      let username = document.getElementById('User2').value.trim(); // Limpa espaços em branco no início e no final
      let email = document.getElementById('email').value.trim(); // Limpa espaços em branco no início e no final

      // Verifica se os campos de nome de usuário e email estão vazios
      if (username === '' || email === '') {
        alert('Por favor, preencha todos os campos.'); // Mostra um alerta se algum campo estiver vazio
        return false; // Interrompe a execução do restante do código
      }

      // Define uma expressão regular para validar o formato do email
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Verifica se o email está no formato correto
      if (!email.match(emailRegex)) {
        alert('Por favor, insira um email válido.'); // Mostra um alerta se o email não for válido
        return false; // Interrompe a execução do restante do código
      }

      // Redireciona para a nova página se todas as validações passarem
      window.location.href = '../HTML/Cadastro2.html';
    }
  });
});