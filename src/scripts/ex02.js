const contador = document.getElementById("cont");
const btnSoma = document.getElementById("som");
const btnSub = document.getElementById("sub");
let valorAtual = 0;

function somarValor () {
    valorAtual += 1;
    contador.textContent = valorAtual;
}

function subtrairValor () {
    valorAtual -= 1;
    contador.textContent = valorAtual;
}

btnSoma.addEventListener("click", somarValor);
btnSub.addEventListener("click", subtrairValor);