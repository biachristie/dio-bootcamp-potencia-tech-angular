const prompt = require('prompt-sync')();

const numPedidos = parseInt(prompt('Número de Pedido: '));

for (let i = 1; i <= numPedidos; i++) {
    const prato = prompt('Prato: ');
    const calorias = parseInt(prompt('Calorias: '));

//Explicação: atribui "true" se o valor lido via prompt() for estritamente igual a 's'.
//Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
    const ehVegano = prompt('É Vegano? [s/n] ').toLowerCase() === 's';

    //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.

    if(ehVegano) {
        console.log(`Pedido ${i}: ${prato} (Vegano) - ${calorias} calorias`)
    } else {
        console.log(`Pedido ${i}: ${prato} (Nao-vegano) - ${calorias} calorias`)
    }
}