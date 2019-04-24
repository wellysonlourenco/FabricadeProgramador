class Gerenciar {

    constructor(){
        this.contador = 0;
        this.numero = [];

    }

lerDados(){
    let numero = parseInt(document.getElementById("inputNumero").value);


    let numeroLista = {}

    numeroLista.numero = numero;
    numeroLista.id = this.contador;

    return numero;
}



adicionarNumero() {
    let valido = this.validar();
    this.lerDados();
    
    let numero = document.getElementById("inputNumero")
    document.getElementById("lista").innerText += numero
    this.limpar()

}

validar(numeroLista){

    let numeroLista = document.getElementById("inputNumero").Value

    
    for ( let i =0; i < Lista.length, i++)
        if (numeroLista == ""){
            alert("Digite o numero!")
            return false
        } else {
            return true
        }
}

limpar() {
    document.getElementById('inputNumero').value = ""
}




    
}

let gerenciador = new Gerenciar()