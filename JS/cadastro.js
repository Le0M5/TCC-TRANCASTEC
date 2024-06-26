document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#loginForm');
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const email = document.querySelector('#email')

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      const usuarioRegex = /^[a-zA-Z0-9._-]{5,16}$/;
      const senhaRegex = /^.{6,}$/;
      const emailRegex = /^[\w\-\.]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}$/;


      // Validar o nome de usuário
      if (!usuarioRegex.test(username)) {
          alert('Nome de usuário inválido. Deve ter entre 5-16 caracteres e pode incluir letras, números, pontos, traços e sublinhados.');
          return;
      }
      // Validar email
      if (!emailRegex.test(email)) {
        alert('Email deve ser válido')
      }
      // Validar a senha
      if (!senhaRegex.test(password)) {
          alert('Senha deve ter pelo menos 6 caracteres.');
          return;
      }

      // Se as validações passarem, redirecionar para a página Cep.html
      window.location.href = './Cep.html';
  });
});
