const prompt = require('prompt-sync')();

const restaurantes = [
    {
        nome: prompt("Restaurante: "), 
        avaliacao: parseFloat(prompt("Nota: "))
    },
    {
        nome: prompt("Restaurante: "), 
        avaliacao: parseFloat(prompt("Nota: "))
    }
];

//TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570

const maior = restaurantes.reduce((acc, restaurante) => {
    return (acc.avaliacao > restaurante.avaliacao) ? acc : restaurante
}, 0)

//TODO: Imprima a saída de acordo com o enunciado deste desafio.

console.log(`Restaurante: ${maior.nome}, Avaliação: ${maior.avaliacao.toFixed(1)}`);
