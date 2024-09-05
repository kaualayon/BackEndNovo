const pessoa = {
    nome: 'Kauã Layon',
    idade: 17,
    solteiro: true,
    hobbies: ['Futebol', 'Leitura', 'Treinar']
  };
  
  
  function mostrarInfoPessoa(pessoa) {
    console.log('Informações da Pessoa:');
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(', ')} (Tipo: ${typeof pessoa.hobbies})`);
  }

  mostrarInfoPessoa(pessoa);
  