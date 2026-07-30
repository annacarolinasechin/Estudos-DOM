const botao = document.getElementById("bnt-adicionar");
const lista = document.getElementById("lista-vazia");
lista.classList.add('ul');

function criarTarefa () {
    const tarefa = document.getElementById("nova-tarefa").value;

    const novaTarefa = document.createElement('li');
    novaTarefa.classList.add('li')
    novaTarefa.textContent = tarefa;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.textContent = "excluir";

    lista.appendChild(novaTarefa);

    botaoExcluir.addEventListener("click", function () {
    novaTarefa.remove();});

    novaTarefa.append(botaoExcluir);

    document.getElementById("nova-tarefa").value = "";
    document.getElementById("nova-tarefa").focus();
}

botao.addEventListener("click", criarTarefa)