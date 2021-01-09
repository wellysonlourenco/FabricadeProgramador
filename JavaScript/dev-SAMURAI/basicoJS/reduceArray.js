var valores = [1.5, 2, 4, 10];


var calc = function(total, item, indice){
    console.log(`Total: ${total} Indice: ${indice} Item: ${item}`);
    return total + item;
}

var somatoria = valores.reduce( calc, 0);
console.log(somatoria);