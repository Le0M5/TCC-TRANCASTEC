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

  const trocarFundo = () => {
    // Obter a imagem ativa dentro do carrossel
    const imagemAtiva = carrossel.querySelector('.carousel-item.active img');
    const textoCarrossel = document.querySelector('#textoCarousel')

    // Determinar a cor de fundo com base na imagem ativa
    let corFundo;
    if (imagemAtiva.src.includes('piano1.png')) {
      corFundo = '#f426265e'; // Vermelho
      textoCarrossel.style.color = 'black'
    } else if (imagemAtiva.src.includes('piano2.png')) {
      corFundo = "rgba(0, 0, 0, 0.8)"; // Preto
      textoCarrossel.style.color = 'white'
    } else if (imagemAtiva.src.includes('piano3.png')) {
      corFundo = '#F2C6C2'; // Rosa
      textoCarrossel.style.color = 'black'
    }

    // Alterar o fundo do carrossel
    carrossel.style.backgroundColor = corFundo;
  };

  // Chamar a função para trocar o fundo ao carregar a página
  trocarFundo();

  // Adicionar um listener para trocar o fundo quando o slide do carrossel mudar
  carrossel.addEventListener('slid.bs.carousel', trocarFundo);
});


// CARROSSEL

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if (currentSlide === slider.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if (currentSlide === 0) {
    currentSlide = slider.length - 1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

window.addEventListener('pageshow', function (event) {
  const formulario = document.querySelector('.form');
  formulario.reset();
});


function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "../IMG/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "../IMG/close_white_36dp.svg";
  }
}