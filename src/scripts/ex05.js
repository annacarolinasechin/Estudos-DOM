const botao = document.getElementById("btn-enviar");
const texto = document.getElementById("txt-topo");
const input = document.getElementById("txt-cor");

function alterarCor() {
    const corInserida = input.value.toLowerCase();

    if(corInserida === "vermelho") {
        texto.style.color = 'red';
        botao.style.backgroundColor = 'red';
    }
    else if(corInserida === "verde") {
        texto.style.color = 'green';
        botao.style.backgroundColor = 'green';
    }

    else if(corInserida === "amarelo") {
        texto.style.color = 'yellow';
        botao.style.backgroundColor = 'yellow';
    }
    else {
        alert("Cor inválida. Tente novamente!");
    }
}

botao.addEventListener('click', alterarCor);