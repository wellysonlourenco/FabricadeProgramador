var numeros = [10, 18,1,15,2,12,36,3];

var pares = function(item){
    return !(item%2);
}

var impares = function(item){
    return item % 2;
}

var dobrados = function(item){
    return item * 2;
}

var numerosParesDobrados = numeros.filter(pares).map(dobrados);


console.log(numerosParesDobrados);



//filtrando
var carros = [{marca: 'Audi', cor: 'preto'},
              {marca: 'Audi', cor: 'branco'},
              {marca: 'FIAT', cor: 'branco'},
              {marca: 'VW', cor: 'preto'},
              {marca: 'Chevrolet', cor: 'preto'},
              {marca: 'Renault', cor: 'branco'}];

function groupBy(array, prop) {
    var value = array.reduce(
        function(total, item){
            var key = item[prop]; // item.marca
        
            total[key] = (total[key] || []).concat(item);
        
            return total;
        },{});
        return value;
}

console.log(agrupados);//10:05


var agrupados = groupBy( carros, ' marca');