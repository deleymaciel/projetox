var banco_de_dados = [];
function adicionaEntrega(nome_cliente, endereço, forma_de_pagamento, valor, nome_do_item) {
    banco_de_dados.push({
        nome_cliente : nome_cliente,
        endereco : endereco,
        forma_de_pagamento : forma_de_pagamento,
        valor : valor,
        nome_do_item : nome_do_item
      })
}

function imprimirBancoDeDados(){
  console.log(banco_de_dados);
}

adicionaEntrega(`Wanderley Maciel`, `Rua Araticum 344`, `Dinheiro`, 17.99, `X-Tudo`)
adicionaEntrega(`Kamila Maciel`, `Rua Araticum 344`, `Debito`, 15.99, `X-Bacon`)
adicionaEntrega(`Marcos Maciel`, `Rua Dos Biruleibi 22`, `Credito`, 25.99, `X-Picanha`)
adicionaEntrega(`Rafael Maciel`, `Rua do Pc 22`, `Dinheiro`, 30.99, `X-Jamal e Refri`)
adicionaEntrega(`Gabriel Inacio`, `Rua do Notebook 22`, `pix`, 15.99, `X-Boco`)
adicionaEntrega(`Beth Maciel`, `Rua das Maes 123`, `Debito`, 22.99, `X-Surra`)
