var nomes = ["Chico","Neide", "Wéllyson"];


// busca raiz
var busca = "Neide";
var indice = -1;

for (let i = 0; nomes.length; i++){
    if (nomes[i] == busca){
        indice = i;
        break;
    }
}

console.log("Encontrei o " + busca + " na posição: " + indice);


// busca nutella
var nomes = ["Chico","Neide", "Wéllyson"];

var busca = "Neide";
var indice = nomes.indexOf(busca);


console.log("Encontrei o " + busca + " na posição: " + indice);
