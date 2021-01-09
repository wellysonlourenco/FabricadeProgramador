var numeros = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];

var dobrados = numeros.map(
    function(item){
        return item*2;
    }
);
console.log(dobrados);

//conversao de Fº para Cº
var fahrenheit = [0, 32, 45, 46, 47];

var celcius = fahrenheit.map(
    function(item){
        return Math.round((item-32)*5/9);
    }
);

console.log(celcius);

//corrigir a escrita - todas as letras Maiusc
var convidados = [
    {nome: "felipe", vip: true},
    {nome: "wEllyson", vip: false},
    {nome: "CLeion", vip: true}
];

var convidadosNormalizado = convidados.map(
    function(item){
        //var nome = {nome: item.nome.toUpperCase()};

        //return Object.assign(item, nome);
        return Object.assign(item, {nome: item.nome.toUpperCase()});
    }
    
    /*
    function(item){
        return {nome: item.nome.toUpperCase(), vip: item.vip};
    }*/
);

console.log(convidadosNormalizado);