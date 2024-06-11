const login = document.querySelector('#sign-in-btn')
const cadastro = document.querySelector('#sign-up-btn')
const container = document.querySelector('.container')
const logarBtn2 = document.querySelector('#logar-btn2')
const cadastrarBtn2 = document.querySelector('#cadastrar-btn2')

cadastro.addEventListener('click', () => {
  container.classList.add('modo-de-cadastro')
});

login.addEventListener('click', () => {
  container.classList.remove('modo-de-cadastro')
});

cadastrarBtn2.addEventListener('click', () => {
  container.classList.add('modo-de-cadastro2')
});

logarBtn2.addEventListener('click', () => {
  container.classList.remove('modo-de-cadastro2')
});