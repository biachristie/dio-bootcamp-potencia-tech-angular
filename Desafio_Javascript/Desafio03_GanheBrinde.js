const prompt = require('prompt-sync')();

const valorPedido = parseInt(prompt('Valor do Pedido: '));

//TODO: Criar as condições necessárias para impressão da saída conforme o enunciado.

if(valorPedido >= 50) {
    console.log(`Parabens, você ganhou uma sobremesa gratis!`);
} else {
    console.log(`Que pena, você nao ganhou nenhum brinde especial.`);
}