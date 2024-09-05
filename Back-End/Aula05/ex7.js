const anoAtual = new Date().getFullYear();

const livro = {
  titulo: '1984',
  autor: 'George Orwell',
  anoPublicacao: 1949,
  genero: 'Distopia'
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const informacoes = [`Título: ${livro.titulo}`, `Autor: ${livro.autor}`, `Ano de publicação: ${livro.anoPublicacao}`, `Gênero: ${livro.genero}`, `Idade da publicação: ${livro.idadePublicacao}`]
console.log(informacoes);