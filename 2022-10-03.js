var contador = 0;
while (contador <= 10) {
    var x=true;
 console.log(`numero atual ${contador}`);
 contador++;   
}
console.log(x)

for (var contador2 = 0; contador2 <= 10; contador2++){
    console.log(`numero atual ${contador2}`)
}

for (var contador2 = 0; contador2 <= 100; contador2 = contador2 + 10 ){
    console.log(`numero atual ${contadador2}`)
    if (contador2 *2 == 100){
        console.log(`cheguei na metade`)
    }
}

var lista_de_carros = [`uno`, `civic`, `siena`, `idea`, `elantra`];
for (var auxiliar=0; auxiliar < lista_de_carros.length; auxiliar++){
    console.log(`carro atual ${auxiliar} : ${lista_de_carros[auxiliar]}`);
    if (lista_de_carros[auxiliar]==`idea` ){
         console.log(`meu carro Atual`);
    }
}




