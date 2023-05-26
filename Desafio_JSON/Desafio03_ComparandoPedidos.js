const prompt = require('prompt-sync')();

// JSON do Cliente 1
const cliente1 = { 
    nome: prompt("Nome cliente 1: "), 
    item: prompt("Item cliente 1: "), 
    preco: parseFloat(prompt("Preço cliente 1: "))
};

// JSON do Cliente 2
const cliente2 = { 
    nome: prompt("Nome cliente 2: "), 
    item: prompt("Item cliente 2: "), 
    preco: parseFloat(prompt("Preço cliente 2: ")) 
};

//TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.

let itensIguais = 0;

Object.keys(cliente1).forEach(elemento => {
    if(cliente1[elemento] === cliente2[elemento]) {
        itensIguais++;
    }
});

//TODO: Imprimir a saída conforme o enunciado deste desafio.

if (itensIguais == 3) {
    console.log(`Os pedidos são iguais`);
} else {
    console.log(`Os pedidos são diferentes`);
}
