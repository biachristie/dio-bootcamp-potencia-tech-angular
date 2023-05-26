const prompt = require('prompt-sync')();

const valorHamburguer = parseFloat(prompt('Valor do Hamburguer: '));
const quantidadeHamburguer = parseInt(prompt('Quantidade do Hamburguer: '));
const valorBebida = parseFloat(prompt('Valor da Bedida: '));
const quantidadeBebida = parseInt(prompt('Quantidade da Bedida: '));
const valorPago = parseFloat(prompt('Valor Pago: '));

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).

const totalHamburgueres = valorHamburguer * quantidadeHamburguer;
const totalBebidas = valorBebida * quantidadeBebida;
const valorTotal = totalHamburgueres + totalBebidas;

//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.

const troco = valorPago - valorTotal;

//TODO: Imprimir a saída no formato especificado neste desafio.

console.log(`O preço final do pedido é R$ ${valorTotal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`);

