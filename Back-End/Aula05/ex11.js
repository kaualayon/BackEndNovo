const anoAtual = new Date().getFullYear();

const livro = {
  titulo: '1984',
  autor: 'George Orwell',
  anoPublicacao: 1949,
  genero: 'Distopia'
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;


console.log("Antes da alteração");
console.log(`Gênero: ${livro.genero}`);
console.log("")


livro.genero = 'Ação';


const detalhes =  `
Título: ${livro.titulo} 
Autor: ${livro.autor}
Ano de publicação: ${livro.anoPublicacao}
Gênero após a mudança: ${livro.genero}
Idade da publicação: ${livro.idadePublicacao} anos `
console.log("Depois da alteração")
console.log(detalhes);