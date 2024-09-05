const pessoas = [
    {
      nome: 'Kauã Layon',
      idade: 17,
      cidade: 'São Paulo'
    },
    {
      nome: 'Fabiana Silva',
      idade: 34,
      cidade: 'Rio de Janeiro'
    },
    {
      nome: 'Mariana Santos',
      idade: 27,
      cidade: 'Belo Horizonte'
    },
    {
      nome: 'Eduardo Costa',
      idade: 40,
      cidade: 'Porto Alegre'
    },
    {
      nome: 'Fernanda Vieira',
      idade: 22,
      cidade: 'Curitiba'
    }
  ];
  
 
  function mostrarPessoas(pessoas) {
    console.log('Lista de Pessoas:');
    pessoas.forEach(pessoa => {
      console.log(`Nome: ${pessoa.nome}`);
      console.log(`Idade: ${pessoa.idade}`);
      console.log(`Cidade: ${pessoa.cidade}`);
      console.log('---');
    });
  }

  mostrarPessoas(pessoas);
  