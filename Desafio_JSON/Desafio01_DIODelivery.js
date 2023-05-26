const prompt = require('prompt-sync')();

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
    cliente: prompt("Cliente: "),
    endereco: prompt("Endereço: "),
    itens: [],
    taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(prompt("Quantidade de Itens: "));
while (pedido.itens.length < quantidadeItens) {
    const nomeItem = prompt("Nome do Item: ");
    const precoItem = parseFloat(prompt("Preço: "));
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
}

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.

let somaPreco = 0;

for (let i = 0; i < quantidadeItens; i++) {
    somaPreco = somaPreco + pedido.itens[i].preco;
}

//TODO: Imprima a saída no padrão descrito neste desafio.

const totalCalculado = somaPreco + pedido.taxaEntrega;

console.log (`
    Pedido: ${pedido.cliente}
    Endereco de entrega: ${pedido.endereco}
    Total: R$ ${totalCalculado.toFixed(2)}
`);