let clinica = [];

clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Hamster");

console.log("Animais que chegaram: ", clinica);

delete clinica[0];
delete clinica[1];
delete clinica[2];

console.log("Fila após a saída dos animais: ", clinica);

