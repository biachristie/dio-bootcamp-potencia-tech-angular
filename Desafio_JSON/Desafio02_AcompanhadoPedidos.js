const prompt = require('prompt-sync')();

// Criando um objeto chamado "pedido" as seguintes propriedades:
const pedido = {
    cliente: {
      nome: prompt("Nome do Cliente: "),                  // Lê a primeira linha da "Entrada": Nome do Cliente.
      endereco: prompt("Endereço do Cliente: "),          // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(prompt("ID do Pedido: ")),               // Lê a terceira linha da "Entrada": ID do Pedido.
};

//TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.

const telefone = prompt("Telefone do Cliente: ");

//TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".

pedido.cliente.telefone = telefone;
console.log(pedido);

//TODO: Imprima a saída formatada de acordo com este desafio.

console.log (`
  Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
  ID: ${pedido.id}
  Tel: ${pedido.cliente.telefone}
`);