//puxa tabela do html
const inputItem = document.getElementById("inputDescricao");
const inputQtd = document.getElementById("inputQtd");
const inputPreco = document.getElementById("inputPreco");

//puxa botões da tabela
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");

//lista de produtos que vão aparecer na tabela
const lista = document.getElementById("lista");

//array que armazena itens da lista
let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";

  //incrementa lista
  for (let index = 0; index < listaItems.length; ++index) {
    const item = listaItems[index];

    //cria uma nova linha na tabela
    const linha = document.createElement("tr"); 
    //cria a célula da descrição
    const descricaoCelula = document.createElement("td"); 
    //cria a célula da quantidade
    const qtdCelula = document.createElement("td"); 
    //cria a célula do preço
    const precoCelula = document.createElement("td"); 

    const descricaoTexto = document.createTextNode(item.descricao);
    const qtdTexto = document.createTextNode(item.qtd);
    const precoTexto = document.createTextNode(item.preco);

    descricaoCelula.appendChild(descricaoTexto);
    qtdCelula.appendChild(qtdTexto);
    precoCelula.appendChild(precoTexto);

    linha.appendChild(descricaoCelula);
    linha.appendChild(qtdCelula);
    linha.appendChild(precoCelula);

    //adiciona a nova linha à tabela
    lista.appendChild(linha); 
  }
};

//função do botão de add
const handleBtAdicionarClick = () => {
  const item = {
    descricao: inputItem.value,
    qtd: inputQtd.value,
    preco: inputPreco.value,
  };

  //verifica se todos os campos foram preenchidos
  if (!item.descricao || !item.qtd || !item.preco) { 
    alert("Necessário preencher todos os campos!");
    return;
  }

  //add item na tabela
  listaItems.push(item);

  //faz com que o form fique com as celulas limpas depois de add algo na tabela e deixa em foco
  inputItem.value = "";
  inputQtd.value = "";
  inputPreco.value = "";
  inputItem.focus();

  //chama a função e passa parametros
  redesenhaLista(lista, listaItems);
};

//deixa o form e tabela limpos clicando no botão
const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.value = "";
  inputQtd.value = "";
  inputPreco.value = "";
  inputItem.focus();
};

//faz os botões funcionarem 
btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;


