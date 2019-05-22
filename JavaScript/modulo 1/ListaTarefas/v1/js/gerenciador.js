class gerenciamentoTarefas {

constructor(){
    this.lista []
    this.contador = 1
    this.idEdicao = -1



}

lerDados(){
    let tarefa = {}

    tarefa.nome = document.getElementById("inputTarefa").value

    return tarefa

}

validar(tarefa){
    if(tarefa.nome == ""){
        return false
    }else {
        return true
    }

}

gerarTabela(){
    let tabela = docu

}

limparCampo(){

}

verificar(id){
    let posicao = -1

    for (let i = 0; i < this.lista.length; i++){
        if(this.lista[i].id == id){
            posicao = i
        }
    }    

}

editar(id){
    let posicao = -1

    for (let i = 0; i < this.lista.length; i++){
        if(this.lista[i].id == id){
            posicao = i
        }
    }

}

remover(id){
    let posicao = -1

    for (let i = 0; i < this.lista.length; i++){
        if(this.lista[i].id == id){
            posicao = i
        }
    }

}



}

let gerenciamento = new gerenciamentoTarefas()