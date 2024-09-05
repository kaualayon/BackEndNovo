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
  
const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
   }

   pessoa.seguroSocial = 'Aposentadoria';
   pessoa.cpf = '133435466';
   
const relatorio = `Nome: ${pessoa.nome} 
Data de nascimento: ${pessoa.dataNascimento} 
Carteira de Identidade ${pessoa.carteiraIdentidade.substring(0,4) } XXXX
Email: ${pessoa.email} 
Telefone: ${pessoa.telefone}
Cidade: ${pessoa.cidade}
Estado: ${pessoa.estado}
Seguro Social: ${pessoa.seguroSocial}
CPF: ${pessoa.cpf.substring(0,4)} XXXXX`

console.log(relatorio);