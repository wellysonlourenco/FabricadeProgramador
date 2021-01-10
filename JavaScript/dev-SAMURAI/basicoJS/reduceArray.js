var valores = [1.5, 2, 4, 10];


var calc = function(total, item, indice){
    console.log(`Total: ${total} Indice: ${indice} Item: ${item}`);
    return total + item;
}

var somatoria = valores.reduce( calc, 0);
console.log(somatoria);


//dobrar numeros
var numeros = [1,2,3,4,5,6,7,8,9,10];

var calc = function(total, item){
    return total.concat(item*2);
}

var dobrados = numeros.reduce(calc,[]);
console.log(dobrados);

//filtrar

var num = [1,15,20,10,30];

var selecionados = num.reduce(function(total, item){
    if(item > 10){
        total.push(item)
    }
    return total;
},[]);

console.log(selecionados);