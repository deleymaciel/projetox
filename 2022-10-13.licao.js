var banco_de_dados  [];
function adicionaEntrega(nome_cliente, endereço, forma_de_pagamento, valor, nome do item) {
    banco_de_dados.push({
        nome_cliente : nome_cliente,
        endereco : endereco,
        forma_de_pagamento : forma_de_pagamento,
        valor : valor,
        nome_do_item : nome_do_item
      })
}

