// Factory Functions (Função de fábrica)
// camelCase umDoisTresQuatro
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,

        ligar(){
            console.log("Fazendo Ligação ....")
        }
    }

}
const celula1 = criarCelular('Xiaomi', 5.5, 4000);
//console.log(celula1);

//Construct Functions
//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligação ...")
    }
}

const celular = new Celular('Xiaomi', 5.5, 5000);
console.log(celular);


// As duas formas de contrução de fuctions Faz a mesma coisa...