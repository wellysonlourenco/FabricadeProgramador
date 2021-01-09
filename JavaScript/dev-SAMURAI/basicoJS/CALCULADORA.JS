var soma = function (x,y){
    return x + y;
}

var mult = function (x,y){
    return x-y;
}

var div = function (x,y){
    if (y == 0){
        alert("o Divisor precisa ser diferente de zero");
    }
    else{
        return x/y;
    }
}

var sub = function (x,y){
    return x - y;
}


var sqrt = function (x){

    return  Math.sqrt(x);
}

var calculadora = function (x, y, operacao){
    return operacao(x,y);
}

calculadora (9,2, sqrt);