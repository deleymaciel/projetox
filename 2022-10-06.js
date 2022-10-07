const valor_digitado = prompt(`qual é seu nome?`);
console.log (`seja bem vindo ${valor_digitado}`)

var distancia = prompt(`Qual a distância?`);
var consumo = prompt(`Qual consumo do seu carro km/l?`)
var valor_da_gasolina = prompt(`Qual valor da gasolina`);
var resultado = (distancia/consumo)*valor_da_gasolina;
alert(resultado);

function calculo_de_consumo(){
    var distancia = prompt(`Qual a distância?`);
    var consumo = prompt(`Qual consumo do seu carro km/l?`)
    var valor_da_gasolina = prompt(`Qual valor da gasolina`);
    var resultado = (distancia/consumo)*valor_da_gasolina;
    alert(resultado);
}

function calculadora_de_churrasco(quantidade_de_pessoas){
    var gramas_por_pessoa = 300;
    var litros_de_refrigerante_por_pessoa = 0.5;
    var quantidade_de_carne = quantidade_de_pessoas*gramas_por_pessoa;
    var quantidade_de_refrigerante = quantidade_de_pessoas*litros_de_refrigerante_por_pessoa;
    console.log(`Você deverá comprar ${quantidade_de_carne} gramas de carne, e ${quantidade_de_refrigerante} litros de refrigerante`)
} 
calculadora_de_churrasco(10);