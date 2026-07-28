const botao = document.getElementById("btn-salvar");
let mensagem = document.getElementById("saudacao");

function salvarNome(nome) { 
    const nomeSalvo = localStorage.setItem("nome-user", JSON.stringify(nome)); // forma mais enxuta de estabelecer chave + converter pra json (considerando que o nome já é uma string nem era necessário de fato converter, mas né)
}

function carregarNome() { 
    const nomeMensagem = localStorage.getItem("nome-user"); // vai pegar o valor atrelado a chave
    
    if (nomeMensagem !== null) { // se existir valor
        const nomeConvertido = JSON.parse(nomeMensagem); // converte valor pego e o armazena
        mensagem.textContent = `Boas-Vindas, ${nomeConvertido}!`; // mensagem é atualizada de acordo com valor armazenado
    }
}

function personalizarMensagem() {
    const nomeDigitado = document.getElementById("input-nome").value;
    mensagem.textContent = `Boas-Vindas, ${nomeDigitado}!`;

    salvarNome(nomeDigitado); // input do usuário é passado para função direto
}

botao.addEventListener('click', personalizarMensagem); // botão é associado a função
carregarNome(); // é chamada para caso já exista algum valor a ser recarregado