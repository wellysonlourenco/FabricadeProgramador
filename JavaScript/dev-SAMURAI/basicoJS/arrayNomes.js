// EXEMPLO 1

var nomes = ["Chico","Neide", "Wéllyson"];

nomes.push ("Thiago");
nomes.shift(); // remove o primeiro da pilha
nomes.push ("josé");
nomes.pop(); // remove o ultimo da pilha
nomes.unshift("Cleiton"); // coloca no final da pilha

nomes.forEach(function(nome, indice){
    console.log(indice + " - " + nome)
});


//EXEMPLO 2

var cidades = ["Campo Grande", "SP", "Irani", "SC"];
//cidades.splice(1); // remove do 1 pra frente
//cidades.splice(1, 2); // remove do 1 ate o 2
console.log(cidades);
cidades.splice(1, 2, "Irani", "SP"); // remove do 1 ate o 2 e subustitui pelo nome informado



cidades.forEach(function(cidade,indice){
    console.log(indice + " - " + cidade)
});