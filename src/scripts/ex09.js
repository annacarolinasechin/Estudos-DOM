const botao = document.getElementById("btn-enviar");

function salvarTema(temaEscolhido) {
    const temaSalvo = localStorage.setItem("temaEscolhido", JSON.stringify(temaEscolhido));
}

function carregarTema () {
    const temaCarregado = localStorage.getItem("temaEscolhido");

    if(temaCarregado !== null) {
        const temaConvertido = JSON.parse(temaCarregado);

        if (temaConvertido === "dark") {
            document.body.style.backgroundColor = "black";
        }
    }
}

function alterarTema() {

    document.body.style.backgroundColor = "black";

    const temaAtual = "dark";

    salvarTema(temaAtual);
}

botao.addEventListener("click", alterarTema);
carregarTema();
