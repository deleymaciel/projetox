function Lista_de_Veiculos(lista, carro_atual) {
    for(posicao=0; posicao < lista.length; posicao++){
        console.log(`Veiculo atual ${posicao} : ${lista[posicao]}`);
        if (lista[posicao] == carro_atual){
            console.log(`Meu veículo atual`);
        }
        if (lista[posicao - 1] == carro_atual){ 
            console.log(`Meu próximo veículo`);
        }
    }
}
Lista_de_Veiculos([`Fan1`, `Lander1`, `Fan2`, `Lander2`, `160-1`, `160-2`, `xj6`],`160-2`)

