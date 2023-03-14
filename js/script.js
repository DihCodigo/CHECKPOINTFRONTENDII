"use strict";

let botaoSubimit = document.getElementById("submit");


let cardInfoBank = [{
    "setNameForm": "Em Contos",
    "setReleaseDateForm": "2019",
    "setDescriptionForm": "A série EmContos é uma antologia que destaca novos talentos do conto literário, com curadoria especializada na seleção dos autores. Ser é a primeira obra da série, que reúne autores consagrados e estreantes em dezesseis contos que exploram a complexidade da experiência humana.",
    "setIMGForm": "https://m.media-amazon.com/images/I/51MRRvmVgVS._SX346_BO1,204,203,200_.jpg",
  },
  {
    "setNameForm": "Jurassic Park",
    "setReleaseDateForm": "1990",
    "setDescriptionForm": "Jurassic Park é um livro de ficção científica escrito por Michael Crichton e publicado em 20 de novembro de 1990. A trama usa a teoria do caos e suas implicações filosóficas para explicar o colapso de um parque de diversões povoado por dinossauros, recriados através de engenharia genética.",
    "setIMGForm": "https://m.media-amazon.com/images/I/91aWIRWYfnL.jpg",
  },

];



const criarItemCard = 
(
setNameForm,
setReleaseDateForm,
setDescriptionForm,
setIMGForm
) => {
  const newCard = document.createElement("div");
  newCard.classList.add("individualCard");
  newCard.innerHTML = `
  
  <img src='${setIMGForm}' />
      <div class="text">
        <h1>${setNameForm}</h1>
        <h3 class="animate-text">${setReleaseDateForm}</h3>
        <p class="animate-text">${setDescriptionForm}</p>
      </div>
  `;

  document.getElementById("CardsSection").appendChild(newCard);
};

const limparCards = () => {
  const listaCards = document.getElementById("CardsSection");
  while (listaCards.firstChild) {
    listaCards.removeChild(listaCards.lastChild);
  }
};


const atualizarItens = () => {
  limparCards();
  cardInfoBank.forEach((item) =>
    criarItemCard(
      item.setNameForm,
      item.setReleaseDateForm,
      item.setDescriptionForm,
      item.setIMGForm
    )
  );
};


function inserirNovoItemNoJson() {
  let getIMGFormValue = document.getElementById("IMGForm");
  let getNameFormValue = document.getElementById("NameForm");
  let getReleaseDateFormValue = document.getElementById("ReleaseDateForm");
  let getDescriptionFormValue = document.getElementById("DescriptionForm");

  let newObjCard = {
    "setNameForm": getNameFormValue.value,
    "setReleaseDateForm": getReleaseDateFormValue.value,
    "setDescriptionForm": getDescriptionFormValue.value,
    "setIMGForm": getIMGFormValue.value,
  };


  cardInfoBank.push(newObjCard);
  atualizarItens();

  // Limpar o Campo subimit 
  getNameFormValue.value = "";
  getReleaseDateFormValue.value = "";
  getDescriptionFormValue.value = "";
  getIMGFormValue.value = "";
}

//botão de enviar formulário
botaoSubimit.addEventListener("click", (event) => {
  event.preventDefault();

  inserirNovoItemNoJson();
});

atualizarItens();