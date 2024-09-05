const pessoa = {
    nome: 'Kauã Layon',
    idade: 17,
    solteiro: true,
    hobbies: ['Futebol', 'Leitura', 'Treinar'],
    endereco: {
      rua: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      estado: 'SP'
    }
  };
  
  function mostrarInfoPessoa(pessoa) {
    console.log('Informações da Pessoa:');
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(', ')} (Tipo: ${typeof pessoa.hobbies})`);
    
   
    console.log(`Endereço:`);
    console.log(`  Rua: ${pessoa.endereco.rua} (Tipo: ${typeof pessoa.endereco.rua})`);
    console.log(`  Cidade: ${pessoa.endereco.cidade} (Tipo: ${typeof pessoa.endereco.cidade})`);
    console.log(`  Estado: ${pessoa.endereco.estado} (Tipo: ${typeof pessoa.endereco.estado})`);
  }
  

  mostrarInfoPessoa(pessoa);
  