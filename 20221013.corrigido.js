var lista_da_manha = [
  1,
  16,
  72,
  3, 
  9,
  20,
  2,
];

// var ou variaveis são escritas em snake_case com underline
// functions ou funções são escritas em camelCase com a primeira letra minuscula e as primeiras letras das palavras seguintes maiusculas

var deley = {
  entregas: [],
  valor: 0
}
var gustavo = {
  entregas: [],
  valor: 0
}

function calcularValorEntrega(km) {
  var valor_entrega = km * 1.5;
  if (valor_entrega < 10) {
    valor_entrega = 10;
  }
  return valor_entrega;
}

function ordenarLista(anterior, atual) {
  if (anterior > atual) {
    return 1;
  }
  return -1;
}

function popularListasDeEntregas(entrega) {
  if (entrega > 5) {
    deley.entregas.push(entrega);
    deley.valor += calcularValorEntrega(entrega);
  } else {
    gustavo.entregas.push(entrega);
    gustavo.valor += calcularValorEntrega(entrega);
  }
}

function manipularListaDeEntregas(lista_de_entregas) {
  lista_de_entregas.sort(ordenarLista);
  for (var posicao = 0; posicao < lista_de_entregas.length; posicao++) {
    const entrega = lista_de_entregas[posicao];
    popularListasDeEntregas(entrega);
  }
}

manipularListaDeEntregas(lista_da_manha);
var lista_da_tarde = [12,34,3,16,7,30,4,2,56,12,2];
manipularListaDeEntregas(lista_da_tarde);

console.log({
  lista_da_manha,
  lista_da_tarde,
  deley,
  gustavo
});


var banco_de_dados = [];

function calcularEntrega(km) {
  var valor_entrega = 1.5 * km;
  if (valor_entrega < 10) {
    valor_entrega = 10;
  }
  return valor_entrega;
}

function calcularTotal(valor_itens, valor_entrega, forma_de_pagamento) {
  var taxa = 1;
  if (forma_de_pagamento == "Crédito") {
    taxa = 1.05; 
  }
  return (valor_itens + valor_entrega) * taxa; 
}

function adicionaEntrega(nome, end, forma_de_pagamento, valor_itens, distancia) {
  var valor_entrega = calcularEntrega(distancia);
  banco_de_dados.push({
    cliente: {
      nome,
      endereco: end,
      forma_de_pagamento
    },
    valor: {
      itens: valor_itens,
      entrega: valor_entrega,
      total: calcularTotal(valor_itens, valor_entrega, forma_de_pagamento),
    },
    distancia
  });
}

function imprimeListaDeEntregas() {
  // console.log(banco_de_dados)
  console.log("NOME | ENDERECO | FORMA DE PAGAMENTO | DISTANCIA | ITENS | ENTREGA | TOTAL")
  for (const item of banco_de_dados) {
    console.log(`${item.cliente.nome} | ${item.cliente.endereco} | ${item.cliente.forma_de_pagamento} | ${item.distancia} | ${item.valor. itens} | ${item.valor.entrega} | ${item.valor.total}`)
  }
}

imprimeListaDeEntregas()
adicionaEntrega("Diego", "Rua Caliandra", "PIX", 90.90, 14.5);
console.log("=================================")
imprimeListaDeEntregas()
adicionaEntrega("Luan", "Rua das batatinhas", "Crédito", 200.90, 3);
console.log("=================================")
imprimeListaDeEntregas()
adicionaEntrega("Deley", "Praça MRV", "Débito", 110.90, 14);
console.log("=================================")
imprimeListaDeEntregas()
