/// CONCLUIR ///

const botao = document.getElementById("btn-enviar"); 
const lista = document.getElementById("lista-vazia");
let totalItens = document.getElementById("total-itens"); // contador de itens criados
let valorAtual = 0; // valor que será exibido no contador

let tarefasCriadas = []; // array para armanzenar as tarefas criadas (deve ser let já que novos valores serão adicionados)


function salvarTarefas(){
    const tarefasEmTexto = JSON.stringify(tarefasCriadas); // pega o array e converte para json já dentro de uma nova variável
    localStorage.setItem("minhasTarefas", tarefasEmTexto); // cria uma chave (que vai identificar o que está sendo chamado) e o valor da mesma ()
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("minhasTarefas"); // busca a chave criada, pega seus itens e adiciona a essa variável
    if (tarefasSalvas !== null) { // se existirem tarefas
        tarefasCriadas = JSON.parse(tarefasSalvas); // o array "principal" vai receber as tarefas existentes já convertidas
    }
}

function criarItem() {
    const inputProduto = document.getElementById("item").value;

    const novoItem = document.createElement('li');
    novoItem.textContent = inputProduto;
    novoItem.classList.add('li');

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = "excluir!";
    botaoExcluir.classList.add('btn-excluir');

    lista.appendChild(novoItem);

    botaoExcluir.addEventListener("click", function () {
    novoItem.remove();
    valorAtual -= 1;
    totalItens.textContent = valorAtual;
    });

    novoItem.appendChild(botaoExcluir);

    valorAtual += 1;
    totalItens.textContent = valorAtual;

    tarefasCriadas.push(inputProduto); // cada novo input do usuário é adicionado ao final do array
    salvarTarefas();
    
    document.getElementById("item").value = "";
    document.getElementById("item").focus();

}

botao.addEventListener("click", criarItem);