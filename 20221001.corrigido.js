var distancia = 1200;
var consumo = 17.5;
var veiculo = `moto`;
var tem_passageiro = true;
var tem_pet = false;
var preco = 4.63;

var resultado = (distancia / consumo) * preco;
console.log({resultado})

var quanto_posso_gastar = 0;
var limite_cartao = 100;

if (quanto_posso_gastar >= resultado || limite_cartao >= resultado || limite_cartao + quanto_posso_gastar >= resultado) { // >= // <= // == // != // && // ||
    console.log("Você pode viajar tranquilo");
} else {
    console.log("Você não pode viajar");
}

console.log(`${consumo} ${distancia}`)