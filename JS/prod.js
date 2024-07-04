document.addEventListener("DOMContentLoaded", function () {
  // Obtém o modal
  var modal = document.querySelector('#myModal');

  // Obtém o botão que abre o modal
  var btn = document.querySelector("#openModalBtn");

  // Obtém o elemento de fechar
  var span = document.getElementsByClassName("close")[0];

  // Quando o usuário clicar no botão, abra o modal
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // Quando o usuário clicar no elemento de fechar, feche o modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Quando o usuário clicar fora do modal, feche-o
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
