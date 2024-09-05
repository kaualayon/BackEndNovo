
const livro = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    genero: 'Distopia',
    idadePublicacao: new Date().getFullYear() - 1949,
    avaliacao: 4.5
  };
  
  console.log('Antes da exclusão da propriedade:');
  console.log(`Título: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
  console.log(`Gênero: ${livro.genero}`);
  console.log(`Idade de Publicação: ${livro.idadePublicacao} anos`);
  console.log(`Avaliação: ${livro.avaliacao}`);
  
 
  delete livro.avaliacao;
  
 
  console.log('\nDepois da exclusão da propriedade:');
  console.log(`Título: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
  console.log(`Gênero: ${livro.genero}`);
  console.log(`Idade de Publicação: ${livro.idadePublicacao} anos`);
  console.log(`Avaliação: ${livro.avaliacao}`); 
  