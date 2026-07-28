const botao = document.getElementById("btn-enviar"); 
const lista = document.getElementById("lista-vazia");
let totalItens = document.getElementById("total-itens"); // contador de itens criados
let valorAtual = 0; // valor que será exibido no contador

let tarefasCriadas = []; // array para armanzenar as tarefas criadas


function salvarTarefas() {
    const tarefasEmTexto = JSON.stringify(tarefasCriadas); // pega o array e converte para json já dentro de uma nova variável
    localStorage.setItem("minhasTarefas", tarefasEmTexto); // cria uma chave (que vai identificar o que está sendo chamado) e o valor da mesma
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("minhasTarefas"); // busca a chave criada, pega seus itens e adiciona a essa variável
    if (tarefasSalvas !== null) { // se existirem tarefas
        tarefasCriadas = JSON.parse(tarefasSalvas); // o array "principal" vai receber as tarefas existentes já convertidas
    }

    redesenharTarefas(); 
}

function redesenharTarefas() {
    lista.innerHTML = ""; // apaga todos os elementos da lista

    tarefasCriadas.forEach(function (tarefa){ // percorre todo o array e a cada tarefa (parâmetro), cria seu li e button correspondente
    const novoItem = document.createElement('li');
    novoItem.textContent = tarefa;
    novoItem.classList.add('li');

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = "excluir!";
    botaoExcluir.classList.add('btn-excluir');

    botaoExcluir.addEventListener("click", function () { // associa o evento de click ao apagamento de novos itens
    novoItem.remove();

    const index = tarefasCriadas.indexOf(tarefa); // determina qual é o índice dessa tarefa no array e a apaga
    if (index > -1) {
        tarefasCriadas.splice(index, 1);
    }

    salvarTarefas(); // salva o array atualizado no localstorage

    valorAtual -= 1; 
    totalItens.textContent = valorAtual;
    });

    novoItem.appendChild(botaoExcluir);
    lista.appendChild(novoItem);
    });

    valorAtual = tarefasCriadas.length; // garanta que a página já seja atualizada com a quantidade de itens já existente (pega a quantidade de itens presentes no array)
    totalItens.textContent = valorAtual;
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
    redesenharTarefas();
    
    document.getElementById("item").value = "";
    document.getElementById("item").focus();
}

botao.addEventListener("click", criarItem);
carregarTarefas();
redesenharTarefas();
