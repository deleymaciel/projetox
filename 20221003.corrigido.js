var contador = 0;

// loop while
while (contador >= 10) {
    var x = true;
    console.log(`numero atual ${contador}`);
    // contador = contador + 1;
    // contador += 1;
    contador++;
}

console.log({x});

// loop for
for (var contador2 = 0; contador2 <= 100; contador2 = contador2 + 2) {
    console.log(`numero atual ${contador2}`);
}

var max = 150;

for (var contador2 = 0; contador2 <= max; contador2 = contador2 + 10) {
    console.log(`numero atual ${contador2}`);
    if (contador2 * 2 === max) {
        console.log("Estou no meio");
        if (contador2 == 50) {
            console.log("O meio é 50")
        } else {
            console.log("O meio não é 50")
        }
    } else {
        console.log("Não estou no meio");
    }
}

var lista_de_numeros = [2, 67, 23, 90, 12, 35, 27];

var nome = "Wanderley";
var numero_de_letras = nome.length;

var tamanho_lista = lista_de_numeros.length;


for (var cont = 0; cont < tamanho_lista; cont++) {
    console.log(`Item da lista numero ${cont}: ${lista_de_numeros[cont]}`);
}

for (const item of lista_de_numeros) {
    console.log(`Item da lista: ${item}`);
}
