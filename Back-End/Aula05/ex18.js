const contaBancaria = {
    titular: 'João Silva',
    saldo: 1500,
  
    depositar: function(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado com sucesso.`);
      } else {
        console.log('O valor do depósito deve ser positivo.');
      }
    },
  
    sacar: function(valor) {
      if (valor > 0) {
        if (valor <= this.saldo) {
          this.saldo -= valor;
          console.log(`Saque de ${valor} realizado com sucesso.`);
        } else {
          console.log('Saldo insuficiente para o saque.');
        }
      } else {
        console.log('O valor do saque deve ser positivo.');
      }
    }
  };
  
  
  const cliente = {
    nome: 'Kauã Layon',
    conta: contaBancaria
  };
  
  
  function mostrarSaldo(cliente) {
    console.log(`Nome do Cliente: ${cliente.nome}`);
    console.log(`Saldo da Conta: ${cliente.conta.saldo}`);
  }
  
  
  cliente.conta.depositar(500);  
  cliente.conta.sacar(200);     
  cliente.conta.sacar(1500);    
  
  mostrarSaldo(cliente);
  