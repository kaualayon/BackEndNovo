const readline = require('readline');
//cria uma interface de leitura
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Pergunta ao usuario
r1.question('Digite algo: ', (answer) => {
    //Resposta do usuario
    console.log(`Voce digitou: ${answer}`);

    // Fecha a interface
    r1.close();
});