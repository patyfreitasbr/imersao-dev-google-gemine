function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.
  
    // Acessa o elemento HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    //se campoPesquisa  for uma string sme anda
    if (campoPesquisa == "") {
      section.innerHTML = "<p>Busca vazia</p>"
      return

    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)
     
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento (dado) dentro do array 'dados'.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

       // se titulo includes campoPesquisa 
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)) {
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
   
          
    }
    //se resultado nao existir faça essa ação
    if (!resultados) {
      resultados = "<p>Nada foi encontrado. Você precisa digita o nome de uma atleta ou esporte</p>"
    }
  
    // Atribui o HTML gerado ao elemento 'section', substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }