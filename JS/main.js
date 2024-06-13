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

const cardsData = [
  { titulo: "Toque colorido", descricao: "Sensores táteis; Teclas com texturas e cores diferentes; Ajuste de volume; Tela digital que exibe partituras;", url: "./IMG/Brinquedo-Piano-Xilofone-Colorido-Unissex-Pimpolho-4.webp" },
  { titulo: "João", descricao: "Descrição do Card 2", url: "" },
  { titulo: "Dudu", descricao: "Descrição do Card 3", url: "" },
  { titulo: "Card 4", descricao: "Descrição do Card 4", url: "" },
  { titulo: "Card 5", descricao: "Descrição do Card 5", url: "" },
  { titulo: "Card 6", descricao: "Descrição do Card 6", url: "" }
];

function createCards(data) {
  const container = document.querySelector('#produtos');
  container.innerHTML = data.map(item => `
    <div class="card">
      <h3>${item.titulo}</h3>
      <img src=${item.url} alt="Imagem do piano inovador">
      <p>${item.descricao}</p>
    </div>
  `).join('');
}

createCards(cardsData);
