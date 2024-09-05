const calculadora = {
    soma: function(a, b) {
      return a + b;
    },
    subtracao: function(a, b) {
      return a - b;
    },
    multiplicacao: function(a, b) {
      return a * b;
    },
    divisao: function(a, b) {
      if (b === 0) {
        return 'Erro: Divisão por zero não permitida';
      } else {
        return a / b;
      }
    },
    calcularMedia: function(numeros) {
      if (numeros.length === 0) {
        return 'Erro: Array vazio';
      }
      const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
      return soma / numeros.length;
    }
  };
  
  
  
 
  console.log('Soma:', calculadora.soma(10, 5)); 
 
  console.log('Subtração:', calculadora.subtracao(10, 5)); 
  
  console.log('Multiplicação:', calculadora.multiplicacao(10, 5)); 
 
  console.log('Divisão:', calculadora.divisao(10, 5));
  console.log('Divisão por zero:', calculadora.divisao(10, 0)); 
  

  const numeros = [10, 20, 30, 40, 50];
  console.log('Média:', calculadora.calcularMedia(numeros)); 