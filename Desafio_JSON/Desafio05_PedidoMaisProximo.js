const prompt = require('prompt-sync')();

const pedidos = [
    { 
        nome: prompt("Nome: "), 
        tipo: prompt("Tipo: "), 
        distancia: parseFloat(prompt("Distância: "))
    },
    { 
        nome: prompt("Nome: "), 
        tipo: prompt("Tipo: "), 
        distancia: parseFloat(prompt("Distância: "))
    },
    { 
        nome: prompt("Nome: "), 
        tipo: prompt("Tipo: "), 
        distancia: parseFloat(prompt("Distância: "))
    }
];

//TODO: Usando o array acima identifique o pedido mais próximo (menor distância).
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570

const menor = pedidos.reduce((acc, pedido) => {
    return (acc.distancia < pedido.distancia) ? acc : pedido
}, 0);

//TODO: Imprima a saída de acordo com o enunciado deste desafio.

console.log(`O pedido mais próximo é o de ${menor.nome}, do tipo ${menor.tipo}`);