// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 ou 5 => FizzBuzz
// Não Divisível por 3 ou 5 => Entrada
// Não é um número => 'Não é um número'


const resultado = fizzBuss(3);
console.log(resultado);

function fizzBuss(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    if (entrada % 3 == 0)
        return 'Fizz';
    if (entrada % 5 == 0)
        return 'Buzz';
    return entrada;
}