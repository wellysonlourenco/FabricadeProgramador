var numeros = [10,18,1,15];

var resultado = [];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > 10){
        resultado.push(numero[1]);
    }
}

console.log(resultado);

//utilizando Filter

var numeros = [10,18,1,15];

var novosNumeros = numeros.filter(
    
    function(item){
        return item > 10;

    });

console.log(novosNumeros);

// filtrando pares e impares

var numeros = [10,18,1,15,2,12,21,27];

var pares = function(item){
    return !(item % 2);
}

var impares = function(item){
    return item % 2;
}

var numerosPares = numeros.filter(pares);
var numerosImpares = numeros.filter(impares);

console.log(numerosPares);
console.log(numerosImpares);