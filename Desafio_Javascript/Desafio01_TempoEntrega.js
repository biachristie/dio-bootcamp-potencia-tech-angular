const prompt = require('prompt-sync')();

const nomeRestaurante = prompt('Nome do Restaurante: ');
const tempoEstimadoEntrega = parseInt(prompt('Tempo Estimado de Entrega: '));

//TODO: Imprimir a saída no padrão definido no enunciado deste desafio.
//Dica: Para simplificar a formatação, utilize o conceito de interpolação de strings.

console.log(`O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`);