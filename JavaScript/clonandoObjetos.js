const celular = {
   
        marcaCelular: 'Xiaomi',
        tamanhoTela: 5.5,
        capacidadeBateria: 5000,

        ligar(){
            console.log("Fazendo Ligação ....")
        }
    }


const novoObjeto = Object.assign({}, celular );
console.log(novoObjeto);



const novoObjeto2 = {...celular};
console.log(novoObjeto2);