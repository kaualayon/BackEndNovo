const estudante = {
    nome: 'Kauã Layon',
    matricula: 123456,
    curso: 'Desenvolvimento Back-End',
    materias: [
      'Fundamentos de Engenharia de Software',
      'Algoritmos e Estruturas de Dados',
      'Banco de Dados',
      'Sistemas Operacionais'
    ]
  };
  
  console.log('Detalhes do Estudante:');
  console.log(`Nome: ${estudante.nome}`);
  console.log(`Matrícula: ${estudante.matricula}`);
  console.log(`Curso: ${estudante.curso}`);
  console.log(`Matérias: ${estudante.materias.join(', ')}`);
  