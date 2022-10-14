var lista_da_manha = [1, 16, 72, 2, 9, 20, 3];
var deley = {
    entregas: [],
    valor: 0
}

var gustavo = {
    entregas: [],
    valor: 0
}

function calcularValorEntrega(km) {
    var valor_entrega = km*1.5;
    if (valor_entrega < 10) {
        valor_entrega = 10;
    }
    return valor_entrega;
}

function ordenarLista(anterior, atual){
    if (anterior > atual) {
        return 1;
    }
    return -1;
}

function popularListaDeEntregas(entrega) {
    if (entrega > 5){
        deley.entregas.push(entrega);
        deley.valor += calcularValorEnterga(entrega);
    } else {
        gustavo.entregas.push(entrega);
        gustavo.valor += calcularValorEntrega(entrega);
    }
}
function manipularListadeEntregas(lista_de_entregas) {
    lista_de_entregas.sort(ordenarLista);
    for (var posicao = 0; posicao < lista_de_entregas.length; posicao++){
        const entrega = lista_de_entregas[posicao];
        popularListasDeEntregas(entrega);
    }
}

manipularListadeEntregas(lista_da_manha);
var lista_da_tarde = [12, 34, 3, 16, 7, 30, 4, 2, 56, 12, 2];
manipularListadeEntregas(lista_da_tarde);

console.log({
    lista_da_manha,
    lista_da_tarde,
    deley,
    gustavo
})


var entrega = {
    nome_cliente: `Diego`,
    endereco: `Rua Caliandra 101`,
    forma_de_pagamento: `Pix`,
    valor_dos_itens: 102.99,
    valor_da_entrega: 14*1.5,
    valor_total: 102.99 + 14*1.5,
    distancia: 14
}

console.log(entrega.nome_cliente);

var banco_de_dados = [];
function adicionaEntrega(nome_cliente, endereco, forma_de_pagamento, valor_dos_itens, valor_da_entrega, valor_total, distancia) {
    banco_de_dados.push({
        nome_cliente : nome_cliente,
        endereco : endereco,
        forma_de_pagamento : forma_de_pagamento,
        valor_dos_itens : valor_dos_itens,
        valor_da_entrega : valor_da_entrega,
        valor_total : valor_total,
        distancia : distancia
    })
}

function imprimirBancoDeDados(){
    console.log(banco_de_dados);
}

adicionaEntrega(`Gabriel`, `Rua 27 357`, `Cartao`, 89.9, 10, 99.9, 2.5);
adicionaEntrega(`Wanderley`, `Rua Araticum 344`, `Dinheiro`, 115, 10, 125, 3)
adicionaEntrega(`Gabriel`, `Rua Regina Othilia 257`,`Cartao`, 72,10,82, 4)