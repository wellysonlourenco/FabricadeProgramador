// Factory Functions (Função de fábrica)

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
console.log(celula1);