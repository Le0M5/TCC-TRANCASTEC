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

const login = document.querySelector('#logar')
const cadastro = document.querySelector('#cadastrar')
const container = document.querySelector('.container')

cadastro.addEventListener('click', () => {
  container.classList.add('modo-de-cadastro')
})

login.addEventListener('click', () => {
  container.classList.remove('modo-de-cadastro')
})