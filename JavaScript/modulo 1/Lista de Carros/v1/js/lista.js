class GerencimentoCarros {


constructor(){
    this.lista = []
    this.contador= 1
}


LerDados(){

    let carros={}

    carros.marca= document.getElementById("inputMarca").value
    carros.modelo=document.getElementById("inputModelo").value
    carros.ano = parseInt(document.getElementById("inputAno").value)
    
    return carros
}

gerarTabela(){

    let tabela =document.getElementById("tabela")
    tabela.innerText = ""

    for(let i= 0; i < this.lista.length; i++){

        let linha = tabela.insertRow()

        let colunaId = linha.insertCell(0)
        let colunaMarca = linha.insertCell(1)
        let colunaModelo = linha.insertCell(2)
        let colunaAno = linha.insertCell(3)
        let colunaRemover = linha.insertCell(4)

        // colunaId.innerText = this.lista[i].id
        colunaMarca.innerText = this.lista[i].marca
        colunaModelo.innerText = this.lista[i].modelo
        colunaAno.innerText = this.lista[i].ano

        let imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', 'img/lixeira.svg')
        imgRemover.setAttribute('onclick', "gerenciador.remover('" + this.lista[i].id + "')")

        colunaRemover.appendChild(imgRemover)
    }

}

limpaCampos(){

    document.getElementById("inputMarca").value = ""
    document.getElementById("inputModelo").value = ""
    document.getElementById("inputAno").value = ""

}

adicionar(){

    let carros = this.LerDados()

    if(this.validar(carros)){

        // for(let i = 0; i< this.lista.length; i++){
           carros.id = this.contador
           this.lista.push(carros)
           this.contador++
        
        this.gerarTabela()
    }
    this.limpaCampos()


}

validar(carros){
    if (carros.marca != "" && carros.modelo != "" && carros.ano != ""){

        return true
    }else{

        return false
    }

}



remover(id){
    let posicao = -1

    for (let i = 0; i < this.lista.length;  i++){
        if(this.lista[i].id == id){
            posicao = i
        }

    }

    if(posicao != -1){
        this.lista.splice(posicao, 1)
        this.gerarTabela()
    }

}


resultado(ano) {
    let carroNovo = 0
    let carroVelho = 0
    let media = 0

    for (let i = 0; i < this.lista.length; i++){
        if(this.lista[i].ano > carroNovo){
            carroNovo = this.lista[i].ano
        }
        alert(carroNovo)


    }

   


}



}


let gerenciador = new GerencimentoCarros()

