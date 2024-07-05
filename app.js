function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "./IMG/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "./IMG/close_white_36dp.svg";
  }
}

window.addEventListener('pageshow', function (event) {
  const formulario = document.querySelector('.form');
  formulario.reset();
});
