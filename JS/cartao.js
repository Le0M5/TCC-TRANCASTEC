function validateNumberInput(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
}

document.getElementById('numero').addEventListener('input', validateNumberInput);

document.addEventListener('DOMContentLoaded', function () {
    let cardNumberInput = document.getElementById('numero');

    cardNumberInput.addEventListener('input', function (event) {
        let cleanedValue = event.target.value.replace(/\D/g, '');

        if (cleanedValue.length > 4) {
            let formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1-');
            event.target.value = formattedValue;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function cleanNameInput(event) {
        const input = event.target;
        input.value = input.value.replace(/[0-9]/g, '');
    }

    let NameInput = document.querySelector('#name');
    let cardNameInput = document.querySelector('#nomeNoCartao')

    cardNameInput.addEventListener('input', cleanNameInput);
    NameInput.addEventListener('input', cleanNameInput);
});

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('cartao-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let emailInput = document.getElementById('email');
        let email = emailInput.value.trim();

        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            emailInput.focus();
            return false;
        }

        // Validação de comprimento mínimo para Nome no cartão
        let nomeNoCartaoInput = document.getElementById('nomeNoCartao');
        if (nomeNoCartaoInput.value.length < 4) {
            alert('O nome no cartão deve ter no mínimo 4 caracteres.');
            nomeNoCartaoInput.focus();
            return false;
        }

        // Validação de comprimento mínimo para Número do cartão
        let numeroCartaoInput = document.getElementById('numero');
        if (numeroCartaoInput.value.length < 19) {
            alert('O número do cartão deve ter exatamente 19 caracteres.');
            numeroCartaoInput.focus();
            return false;
        }

        // Se a validação passar, redirecione para outra página
        window.location.href = '../index.html';
    });
});
