const input = document.getElementById("termo-buscado"); // "pega" o que está sendo inserido pelo usuário
const listaFilmes = document.querySelectorAll("#lista li"); // "pega" a lista (ul) e todos os seus elementos (li)

function pesquisarFilme() {
  const filmePesquisado = input.value.toLowerCase(); // pega o valor do input (se atualiza em tempo real)

  listaFilmes.forEach(function(i) { // pega a toda a lista e atribui a cada um dos seus elementos uma variável "i"
    const nomeFilme = i.textContent.toLowerCase(); // cada "i" pega o conteúdo (texto) o "empurra" para a variável

    if(nomeFilme.includes(filmePesquisado)) { // se qualquer "coisa" inserida estiver "inclusa" nos itens presentes na lista
      i.style.display = 'block'; // cada "i" (filmes cujo nomes TEM "correspondência") fica visível 
    } 
    else {
      i.style.display = 'none'; // cada "i" (filmes que NÃO tem "correspondência") fica invisível
    }
  });

  document.getElementById("termo-buscado").value = ""; // "reseta" o que está no input após o enter
  document.getElementById("termo-buscado").focus(); // foco retorna ao input automaticamen
}

input.addEventListener("input", pesquisarFilme); // cada alteração no input será captado e vínculado a função