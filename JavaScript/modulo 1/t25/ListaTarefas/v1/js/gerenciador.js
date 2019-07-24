class ToDoListController {

constructor(){
    this.lista = []
    this.contador = 1
    this.idEdicao = null
    



}

lerDados(){
    let tarefa = {}

    tarefa.id = this.contador  
    tarefa.descricao = document.getElementById("inputToDo").value
    tarefa.concluida = false
    
    this.contador++
    return tarefa
    
}

validar(tarefa){

    if(tarefa.descricao == ""){
        alert ("Descrição da Tarefa não pode ser vazia!")
        return false
    }

    return true
    
}


salvar(){
    let tarefa = this.lerDados()

    //inserir no array
    if(this.validar(tarefa)){
        
        if(idEdicao == null){ 
            this.lista.push(tarefa)
        }else{
            for (let i = 0; i < this.lista.length; i++){
                if(this.lista[i].id == this.idEdicao){
                    this.lista[i].descricao = tarefa.descricao
                }

                this.idEdicao == null
                document.getElementById("go").setAttribute('scr', 'img/add.svg')
        }

        this.limparCampo()
        this.gerarTabela()
    }

}



limparCampo(){
    document.getElementById("inputToDo").value = ""
}


gerarTabela(){
    let tabela = document.getElementById("tabela")
    tabela.innerText = ""

    for(let i = 0 ; i < this.lista.length; i++){

        let linha = tabela.insertRow()

        let colunaStatus = linha.insertCell(0)
        let colunaDescricao = linha.insertCell(1)
        let colunaRemover = linha.insertCell(2)
        let colunaEditar = linha.insertCell(3)

        colunaDescricao.innerText = this.lista[i].descricao



        let imgEditar = document.createElement('img')
            imgEditar.setAttribute('src', 'img/editar.svg')
            imgEditar.setAttribute('onclick', "toDoController.editar('" + this.lista[i].id + "')")

        colunaRemover.appendChild(imgEditar)

        let imgRemover = document.createElement('img')
            imgRemover.setAttribute('src', 'img/lixeira.svg')
            imgRemover.setAttribute('onclick', "toDoController.remover('" + this.lista[i].id + "')")

        colunaRemover.appendChild(imgRemover)
    
        let imgStatus = document.createElement("img")

        if(this.lista[i].concluida){
            imgStatus.setAttribute("src", "img/checked.svg")
            
        }else {
            imgStatus.setAttribute("src", "img/unchecked.svg")
        }

        imgStatus.setAttribute("onclick", "toDoController.mudarStatus(" + this.lista[i].id + ")")

        colunaStatus.appendChild(imgStatus)
    }


}

mudarStatus(id){
    
    if (confirm("Tem certeza que deseja alterar o status desta tarefa?")){


    for (let i = 0; i < this.lista.length; i++){
        if(this.lista[i].id == id){
                
                this.lista[i].concluida = !this.lista[i].concluida

            }
            
            this.gerarTabela()
        }
    }

  
}




editar(id){
    let posicao = -1

    for (let i = 0; i < this.lista.length; i++){
        if(this.lista[i].id == id){
            document.getElementById("inputToDo").value = this.lista[i].descricao
            document.getElementById("go").setAttribute('scr', 'img/save-edit.svg')
            this.idEdicao = id
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

    if(posicao != -1){
        this.lista.splice(posicao,1)
        this.gerarTabela()
    }

}



}

let toDoController = new ToDoListController()