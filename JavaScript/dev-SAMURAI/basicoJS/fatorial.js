var fatorial =  function (x){
    resultado = x;
    for (let i = 1; i <= x; i++){
        resultado *= i; 
    }
    return resultado;
}

var calculadora = function (x, operacao){
    return operacao(x);
}

calculadora (3, fatorial);