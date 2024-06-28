const limparFormulario = (endereco) => {
    document.getElementById('Endereço').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
}


const preencherFormulario = (endereco) => {
    document.getElementById('Endereço').value = endereco.logradouro;
    document.getElementById('Bairro').value = endereco.bairro;
    document.getElementById('Cidade').value = endereco.localidade;
    document.getElementById('Estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('CEP').value.replace("-", "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep == 0) {

    } else if (cep.length < 8) {

    } else if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('Endereço').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('Endereço').value = 'CEP incorreto!';
    }
}

document.getElementById('CEP')
    .addEventListener('keyup', pesquisarCep);

// Função para lidar com o evento de envio do formulário
function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do evento de envio

    // Aqui você pode adicionar qualquer lógica de validação adicional, se necessário

    // Submete o formulário manualmente após a validação
    event.target.submit();
    window.location.href = '../index.html'
}

// Adiciona o ouvinte de eventos ao elemento do formulário
document.querySelector('.formCEP').addEventListener('submit', handleSubmit);