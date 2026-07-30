const h1 = document.getElementById("titulo");
const btn = document.getElementById("botao");

function alterarMensagem() {
    h1.textContent = "Mudou né!";
    document.body.classList.add('title');
}

btn.addEventListener("click", alterarMensagem)