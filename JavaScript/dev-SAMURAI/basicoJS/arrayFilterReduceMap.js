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



//filtrando varios objetos no array carros
var carros = [{marca: 'Audi', cor: 'preto'},
              {marca: 'Audi', cor: 'branco'},
              {marca: 'FIAT', cor: 'branco'},
              {marca: 'VW', cor: 'preto'},
              {marca: 'Chevrolet', cor: 'preto'},
              {marca: 'Renault', cor: 'branco'}];

function groupBy(array, prop) {
    var value = array.reduce(function(total, item){
            var key = item[prop]; // item.marca
        
            total[key] = (total[key] || []).concat(item);
        
            return total;
        }, {});
        return value;
}



var agrupados = groupBy( carros, 'marca');
console.log(agrupados);


//filtrando  varios objetos no array categorias
var produtos = [
    {id: 123, nome: 'Camiseta', cor:'branca', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tênis', cor:'preto', tamanho: '40', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor:'branca', tamanho: 'Unico', categoria: 'Esporte'}
];

    function groupBy(array, prop) {
        var value = array.reduce(function(total, item){
                var key = item[prop]; // item.categoria
            
                total[key] = (total[key] || []).concat(item);
            
                return total;
            }, {});
            return value;
    }
    
    
    
    var agrupados = groupBy( produtos, 'categoria');
    console.log(agrupados);


    // filtrar no array apenas uma categoria no objeto

    var produtos = [
        {id: 123, nome: 'Camiseta', cor:'branca', tamanho: 'G', categoria: 'Vestuário'},
        {id: 456, nome: 'Tênis', cor:'preto', tamanho: '40', categoria: 'Vestuário'},
        {id: 789, nome: 'Bola', cor:'branca', tamanho: 'Unico', categoria: 'Esporte'}
    ];
    
        function groupBy(array, prop) {
            var value = array.reduce(function(total, item){
                    var key = item[prop]; // item.categoria
                
                    total[key] = (total[key] || []).concat(item);
                
                    return total;
                }, {});
                return value;
        }

        var novosProdutos = produtos.filter(function(item){
            return item.categoria == 'Vestuário';
        })
        
        
        
        var agrupados = groupBy( novosProdutos, 'categoria');
        console.log(agrupados);


 //filtrar varios objetos no array

 var produtos = [
    {id: 123, nome: 'Camiseta', cor:'branca', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tênis', cor:'preto', tamanho: '40', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor:'branca', tamanho: 'Unico', categoria: 'Esporte'}
];

    Array.prototype.groupBy= function(prop) {
        var value = this.reduce(function(total, item){
                var key = item[prop]; // item.categoria
            
                total[key] = (total[key] || []).concat(item);
            
                return total;
            }, {});
            return value;
    }

    var produtosFiltrados = produtos.filter(function(item){
        return item.cor == 'preto';
    }).filter(function(item){
        return item.tamanho == 'G';
    });
    
    
    
    console.log(produtosFiltrados);