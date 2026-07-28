const botao = document.getElementById("btn-enviar");
let contador = document.getElementById("cont");
let valorAtual = 0; // valor do contador que será incrementado (ELE É QUEM DEVE SER SALVO/MANIPULADO)

function salvarValor() { // pega o valor do contador e o salva como json e logo em seguida, cria uma chave de identificação
    const valorEmTexto = JSON.stringify(valorAtual);
    localStorage.setItem("quantidadeCliques", valorEmTexto);
}

function carregarValor() { // responsável por carregar valores já existentes
    const cliquesSalvos = localStorage.getItem("quantidadeCliques"); // o item com chave "quantidadeCliques" são "pegos"
    
    if (cliquesSalvos !== null) { // se existir valor
        valorAtual = JSON.parse(cliquesSalvos); // vai pegar valor obtido, o converte e o devolve para sua respectiva variável
        contador.textContent = valorAtual; // contador é atualizado de acordo com o valor recebido pela variável
    }
}

function quantidadeClicks() { // responsável por incrementar valor a cada clique
    valorAtual += 1;
    contador.textContent = valorAtual;

    salvarValor(); // é chamada e pega o valor manipulado
}

botao.addEventListener('click', quantidadeClicks); // botão é associado a função
carregarValor(); // é chamada para caso já exista algum valor a ser recarregado