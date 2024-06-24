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
  { titulo: "Toque colorido", descricao: "Sensores táteis; Teclas com texturas e cores diferentes; Ajuste de volume; Tela digital que exibe partituras;", url: "./IMG/Brinquedo-Piano-Xilofone-Colorido-Unissex-Pimpolho-4.webp", preco: 3000, descricaoIMG: "Piano colorido" },
  { titulo: "Toque", descricao: "Sensores táteis; Teclas com texturas e cores diferentes; Ajuste de volume; Tela digital que exibe partituras;", url: "./IMG/Brinquedo-Piano-Xilofone-Colorido-Unissex-Pimpolho-4.webp", preco: 2000, descricaoIMG: "Piano colorido" },
  { titulo: "Toque co", descricao: "Sensores táteis; Teclas com texturas e cores diferentes; Ajuste de volume; Tela digital que exibe partituras;", url: "./IMG/Brinquedo-Piano-Xilofone-Colorido-Unissex-Pimpolho-4.webp", preco: 200, descricaoIMG: "Piano colorido" },
  { titulo: "Toque lo", descricao: "Sensores táteis; Teclas com texturas e cores diferentes; Ajuste de volume; Tela digital que exibe partituras;", url: "./IMG/Brinquedo-Piano-Xilofone-Colorido-Unissex-Pimpolho-4.webp", preco: 300, descricaoIMG: "Piano colorido" },
  { titulo: "Toque ri", descricao: "Sensores táteis; Teclas com texturas e cores diferentes; Ajuste de volume; Tela digital que exibe partituras;", url: "./IMG/Brinquedo-Piano-Xilofone-Colorido-Unissex-Pimpolho-4.webp", preco: 500, descricaoIMG: "Piano colorido" },
  { titulo: "Toque do", descricao: "Sensores táteis; Teclas com texturas e cores diferentes; Ajuste de volume; Tela digital que exibe partituras;", url: "./IMG/Brinquedo-Piano-Xilofone-Colorido-Unissex-Pimpolho-4.webp", preco: 30, descricaoIMG: "Piano colorido" },
];

function createCards(data) {
  const container = document.querySelector('.container-items');
  container.innerHTML = data.map(item => `
  <div class="item">
  <span class="titulo-item">${item.titulo}</span>
  <img src=${item.url} alt=${item.descricaoIMG} class="img-item">
  <span class="precio-item">R$${item.preco}</span>
  <button class="boton-item">Adicionar ao carrinho</button>
  </div>`).join('');
}

createCards(cardsData);

// Carrinho de compras
//letiable que mantiene el estado visible del carrinho
let carrinhoVisible = false;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

function ready() {

  //Agregremos funcionalidad a los botones eliminar del carrinho
  let botaoEliminarItem = document.getElementsByClassName('btn-eliminar');
  for (let i = 0; i < botaoEliminarItem.length; i++) {
    let button = botaoEliminarItem[i];
    button.addEventListener('click', eliminarItemCarrinho);
  }

  //Agrego funcionalidad al boton sumar cantidad
  let botaoSomarQuantidade = document.getElementsByClassName('sumar-cantidad');
  for (let i = 0; i < botaoSomarQuantidade.length; i++) {
    let button = botaoSomarQuantidade[i];
    button.addEventListener('click', sumarCantidad);
  }

  //Agrego funcionalidad al buton restar cantidad
  let botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
  for (let i = 0; i < botonesRestarCantidad.length; i++) {
    let button = botonesRestarCantidad[i];
    button.addEventListener('click', restarCantidad);
  }

  //Agregamos funcionalidad al boton Agregar al carrinho
  let botonesAgregarAlCarrinho = document.getElementsByClassName('boton-item');
  for (let i = 0; i < botonesAgregarAlCarrinho.length; i++) {
    let button = botonesAgregarAlCarrinho[i];
    button.addEventListener('click', agregarAlCarrinhoClicked);
  }

  //Agregamos funcionalidad al botón comprar
  document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked)
}
//Eliminamos todos los elementos del carrinho y lo ocultamos
function pagarClicked() {
  alert(`Compra realizada com sucesso!`);
  //Elimino todos los elmentos del carrinho
  let carrinhoItems = document.getElementsByClassName('carrinho-items')[0];
  while (carrinhoItems.hasChildNodes()) {
    carrinhoItems.removeChild(carrinhoItems.firstChild)
  }
  atualizarTotalCarrinho();
  ocultarCarrinho();
}
//Funciòn que controla el boton clickeado de agregar al carrinho
function agregarAlCarrinhoClicked(event) {
  let button = event.target;
  let item = button.parentElement;
  let titulo = item.getElementsByClassName('titulo-item')[0].innerText;
  let precio = item.getElementsByClassName('precio-item')[0].innerText;
  let imagenSrc = item.getElementsByClassName('img-item')[0].src;
  console.log(imagenSrc);

  agregarItemAlCarrinho(titulo, precio, imagenSrc);

  DeixarCarrinhoVisivel();
}

//Funcion que hace visible el carrinho
function DeixarCarrinhoVisivel() {
  carrinhoVisible = true;
  let carrinho = document.getElementsByClassName('carrinho')[0];
  carrinho.style.marginRight = '0';
  carrinho.style.opacity = '1';

  let items = document.getElementsByClassName('contenedor-items')[0];
  items.style.width = '60%';
}

//Funciòn que agrega un item al carrinho
function agregarItemAlCarrinho(titulo, precio, imagenSrc) {
  let item = document.createElement('div');
  item.classList.add = ('item');
  let itemsCarrinho = document.getElementsByClassName('carrinho-items')[0];

  //controlamos que el item que intenta ingresar no se encuentre en el carrinho
  let nombresItemsCarrinho = itemsCarrinho.getElementsByClassName('carrinho-item-titulo');
  for (let i = 0; i < nombresItemsCarrinho.length; i++) {
    if (nombresItemsCarrinho[i].innerText == titulo) {
      alert("O item já se encontra no carrinho!");
      return;
    }
  }

  let itemCarrinhoContenido = `
        <div class="carrinho-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrinho-item-detalles">
                <span class="carrinho-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrinho-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrinho-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
  item.innerHTML = itemCarrinhoContenido;
  itemsCarrinho.append(item);

  //Agregamos la funcionalidad eliminar al nuevo item
  item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrinho);

  //Agregmos al funcionalidad restar cantidad del nuevo item
  let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
  botonRestarCantidad.addEventListener('click', restarCantidad);

  //Agregamos la funcionalidad sumar cantidad del nuevo item
  let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
  botonSumarCantidad.addEventListener('click', sumarCantidad);

  //Actualizamos total
  atualizarTotalCarrinho();
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event) {
  let buttonClicked = event.target;
  let selector = buttonClicked.parentElement;
  console.log(selector.getElementsByClassName('carrinho-item-cantidad')[0].value);
  let cantidadActual = selector.getElementsByClassName('carrinho-item-cantidad')[0].value;
  cantidadActual++;
  selector.getElementsByClassName('carrinho-item-cantidad')[0].value = cantidadActual;
  atualizarTotalCarrinho();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event) {
  let buttonClicked = event.target;
  let selector = buttonClicked.parentElement;
  console.log(selector.getElementsByClassName('carrinho-item-cantidad')[0].value);
  let cantidadActual = selector.getElementsByClassName('carrinho-item-cantidad')[0].value;
  cantidadActual--;
  if (cantidadActual >= 1) {
    selector.getElementsByClassName('carrinho-item-cantidad')[0].value = cantidadActual;
    atualizarTotalCarrinho();
  }
}

//Elimino el item seleccionado del Carrinho
function eliminarItemCarrinho(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  //Actualizamos el total del Carrinho
  atualizarTotalCarrinho();
}
//Funciòn que controla si hay elementos en el Carrinho. Si no hay oculto el Carrinho.
function ocultarCarrinho() {
  let carrinhoItems = document.getElementsByClassName('carrinho-items')[0];
  if (carrinhoItems.childElementCount == 0 || carrinhoItems.childElementCount != 0) {
    let carrinho = document.getElementsByClassName('carrinho')[0];
    carrinho.style.marginRight = '-100%';
    carrinho.style.opacity = '0';
    carrinhoVisible = false;

    let items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '100%';
  }
}
//Actualizamos el total de Carrinho
function atualizarTotalCarrinho() {
  let carrinhoContenedor = document.getElementsByClassName('carrinho')[0];
  let carrinhoItems = carrinhoContenedor.getElementsByClassName('carrinho-item');
  let total = 0;

  for (let i = 0; i < carrinhoItems.length; i++) {
    let item = carrinhoItems[i];
    let precioElemento = item.getElementsByClassName('carrinho-item-precio')[0];
    let precioText = precioElemento.innerText.trim(); // Texto completo do preço

    // Debug para entender o preço antes da conversão
    console.log("Precio antes de conversion:", precioText);

    // Remover símbolos e formatar corretamente
    let precioClean = precioText.replace(/[^\d.,]/g, ''); // Remove todos os caracteres que não sejam dígitos, vírgula e ponto
    console.log("Precio limpo:", precioClean);

    // Converter para float
    let precio = parseFloat(precioClean.replace(',', '.'));
    console.log("Precio convertido:", precio);

    // Verificação se houve sucesso na conversão
    if (isNaN(precio)) {
      console.error("Erro na conversão do preço:", precioText);
      continue; // Pular este item se não foi possível converter
    }

    let cantidadItem = item.getElementsByClassName('carrinho-item-cantidad')[0];
    let cantidad = cantidadItem.value;

    total += precio * cantidad;
  }

  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('carrinho-precio-total')[0].innerText = 'R$' + total.toLocaleString("pt-br");
}


function abrirEFecharCarrinho() {
  if (carrinhoVisible != true) {
    DeixarCarrinhoVisivel()
  } else {
    ocultarCarrinho()
  }
}

const iconeCarrinho = document.querySelector("#cartIcone")

iconeCarrinho.addEventListener('click', abrirEFecharCarrinho)

// Seleciona todos os links no menu
const linksMenu = document.querySelectorAll('.menu a');

// Adiciona um evento de clique a cada link
linksMenu.forEach(link => {
  link.addEventListener('click', function () {
    // Remove a classe 'active' de todos os links
    linksMenu.forEach(link => link.classList.remove('active'));

    // Adiciona a classe 'active' ao link clicado
    this.classList.add('active');
  });
});
