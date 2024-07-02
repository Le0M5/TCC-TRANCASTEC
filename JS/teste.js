
const carrossel = document.getElementById('carouselExampleAutoplaying');

// Obter a imagem ativa dentro do carrossel
const imagemAtiva = carrossel.querySelector('.carousel-item.active img');

// Obter a cor de fundo computada da imagem ativa
const ClasseImagemAtiva = imagemAtiva.className;


imagemAtiva.addEventListener('click', () => {
    console.log(ClasseImagemAtiva);
});