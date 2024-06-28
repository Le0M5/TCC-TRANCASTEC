document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#loginForm');
    const usuarioInput = document.querySelector('#Usuário');
    const passwordInput = document.querySelector('#password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const username = usuarioInput.value.trim();
        const password = passwordInput.value.trim();

        const UsuarioValido = 'Leonardo16'
        const SenhaValida = '123456'

        // Validar o nome de usuário
        if (username != UsuarioValido) {
            alert('Usuário ou senha inválidos.');
            return;
        }
        // Validar a senha
        if (password != SenhaValida) {
            alert('Usuário ou senha inválidos.');
            return;
        }

        // Se as validações passarem, redirecionar para a página Cep.html
        window.location.href = '../index.html';
    });
});
