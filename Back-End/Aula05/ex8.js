const anoAtual = new Date().getFullYear();

const livro = {
  titulo: '1984',
  autor: 'George Orwell',
  anoPublicacao: 1949,
  genero: 'Distopia'
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

livro.avaliacao = null;






if(livro.avaliacao==null){
    livro.avaliacao = 9;
    console.log("Avaliação adicionada: ", livro.avaliacao);
}else{
    console.log("Erro, O livro já possui uma avaliação!");
}