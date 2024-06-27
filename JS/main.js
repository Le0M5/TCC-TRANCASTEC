document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const carrossel = document.getElementById('carouselExampleAutoplaying');
  const imagensCarrossel = carrossel.querySelectorAll('.carousel-item img');

  const trocarFundo = () => {
    // Obter a imagem ativa dentro do carrossel
    const imagemAtiva = carrossel.querySelector('.carousel-item.active img');

    // Obter a cor de fundo computada da imagem ativa
    const corFundoImagem = window.getComputedStyle(imagemAtiva).backgroundColor;
    


    if (corFundoImagem === 'rgb(81, 81, 81)') { 
      carrossel.style.backgroundColor = 'rgb(81, 81, 81)'
    } else if (corFundoImagem === 'rgb(233, 121, 121)') { 
      carrossel.style.backgroundColor = 'rgb(233, 121, 121)'
    } else {  
      carrossel.style.backgroundColor = 'rgb(245, 187, 197)'
    }

    // Aplicar a cor de fundo da imagem ativa à div do carrossel
  };

  // Chamar a função para trocar o fundo ao carregar a página
  trocarFundo();

  // Adicionar um listener para trocar o fundo quando o slide do carrossel mudar
  carrossel.addEventListener('slid.bs.carousel', trocarFundo);
});