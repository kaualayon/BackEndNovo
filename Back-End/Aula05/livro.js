const livro = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    genero: 'Distopia'
  };
  
  const livroExemplo = {
    titulo: livro.titulo,
    autor: livro.autor,
    anoPublicacao: livro.anoPublicacao,
    genero: livro.genero
  };
  

  console.log('Detalhes do Livro:');
  console.log(`Título: ${livroExemplo.titulo}`);
  console.log(`Autor: ${livroExemplo.autor}`);
  console.log(`Ano de Publicação: ${livroExemplo.anoPublicacao}`);
  console.log(`Gênero: ${livroExemplo.genero}`);
  