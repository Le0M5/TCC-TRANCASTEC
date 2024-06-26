document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#cadastroForm');
    const usuarioInput = document.querySelector('#Usuário');
    const passwordInput = document.querySelector('#password');
  
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
  
        const username = usuarioInput.value.trim();
        const password = passwordInput.value.trim();
  
        const usuarioRegex = /^[a-zA-Z0-9._-]{5,16}$/;
        const senhaRegex = /^.{6,}$/;
  
  
        // Validar o nome de usuário
        if (!usuarioRegex.test(username)) {
            alert('Nome de usuário inválido. Deve ter entre 5-16 caracteres e pode incluir letras, números, pontos, traços e sublinhados.');
            return;
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
  