function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.
  
    // Acessa o elemento HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
     
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // Itera sobre cada elemento (dado) dentro do array 'dados'.
    for (let dado of dados) {
      // Concatena HTML para cada resultado, formatando os dados do objeto 'dado'.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado ao elemento 'section', substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }