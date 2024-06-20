function validateNumberInput(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
}

// Removendo a chamada duplicada para validateNumberInput
document.getElementById('numero').addEventListener('input', validateNumberInput);

document.addEventListener('DOMContentLoaded', function () {
    // Obtém o elemento de entrada do número do cartão
    var cardNumberInput = document.getElementById('numero');    

    // Adiciona um ouvinte de evento ao elemento de entrada
    cardNumberInput.addEventListener('input', function (event) {
        // Remove todos os caracteres não numéricos primeiro
        var cleanedValue = event.target.value.replace(/\D/g, '');

        // Verifica se o comprimento do valor limpo é maior ou igual a 12
        if (cleanedValue.length > 4) { // Garante que temos pelo menos 4 dígitos limpos
            // Formata o valor para incluir barras, mas evitando adicionar uma após o último número
            var formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1-');

            // Atualiza o valor do campo de entrada com o valor formatado
            event.target.value = formattedValue;
        }
    });
});
