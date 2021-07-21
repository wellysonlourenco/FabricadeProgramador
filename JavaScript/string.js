// Tipo Primitivo
const mensagem = 'minha primeira mensagem';
// Tipo Objeto
const outraMensagem = new String('Bom dia!');

console.log(typeof mensagem); // identificar o tipo
console.log(outraMensagem.length); // mostrar a quantidade de caracteres
console.log(outraMensagem[3]); // acessar por indice


console.log(mensagem.includes('primeira')); // busca por palavra = true
console.log(mensagem.startsWith('minha')); // busca começo = true
console.log(mensagem.endsWith('verde')); //false
mensagem.indexOf('primeira'); //6
mensagem.replace('minha', 'sua'); // substitui a palavra
mensagem.trim(); // remove os espaços excedente
mensagem.split(' '); // identifica e Quebra as ' espaço ' em 3