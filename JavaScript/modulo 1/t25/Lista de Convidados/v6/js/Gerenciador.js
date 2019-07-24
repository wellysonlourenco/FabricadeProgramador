class GerenciadorLista {

    constructor() {
        this.lista = []
        this.contador = 1
        this.idEdicao = -1
        
    }

    lerDados() {
        let convidado = {}

        convidado.nome = document.getElementById("inputConvidado").value
        convidado.idade = document.getElementById("inputIdade").value
        convidado.sexo = document.querySelector('[type=radio]:checked').value

        return convidado
    }

    validar(convidado) {
        if (convidado.nome != "" && convidado.idade != "" && convidado.sexo != null) {
            return true
        } else {
            return false
        }
    }

    gerarTabela() {

        let tabela  = document.getElementById("tabela")
        tabela.innerText = ""

        for(let i = 0; i < this.lista.length; i++){

            let linha  = tabela.insertRow()

            let colunaId = linha.insertCell(0)
            let colunaNome = linha.insertCell(1)
            let colunaIdade = linha.insertCell(2)
            let colunaSexo = linha.insertCell(3)
            let colunaEditar = linha.insertCell(4)
            let colunaRemover = linha.insertCell(5)

            colunaId.innerText = this.lista[i].id
            colunaNome.innerText = this.lista[i].nome
            colunaIdade.innerText = this.lista[i].idade
            colunaSexo.innerText = this.lista[i].sexo
            // colunaEditar.innerText = this.lista[i].


            let imgEditar = document.createElement('img')
            imgEditar.setAttribute('src', 'img/editar.svg')
            imgEditar.setAttribute('onclick', "gerenciador.editar('" + this.lista[i].id + "')")

            let imgRemover = document.createElement('img')
            imgRemover.setAttribute('src', 'img/lixeira.svg')
            imgRemover.setAttribute('onclick', "gerenciador.remover('" + this.lista[i].id + "')")

            colunaEditar.appendChild(imgEditar)
            colunaRemover.appendChild(imgRemover)
        }
    }

    limparCampos() {
        document.getElementById("inputConvidado").value = ""
        document.getElementById("inputIdade").value = ""
        if (document.querySelector('[type=radio]:checked') != null)
            document.querySelector('[type=radio]:checked').checked = false
    }

    editar(id) {
        let posicao = -1
       
        for (let i = 0; i < this.lista.length; i++){
            if(this.lista[i].id == id){
                posicao = i
            }
        }

        if(posicao != -1){
            this.idEdicao = id
            document.getElementById("inputConvidado").value = this.lista[posicao].nome
            document.getElementById("inputIdade").value = this.lista[posicao].idade

            if(this.lista[posicao].sexo == "M"){
                document.getElementById("masc").checked = true
            } else {
                document.getElementById("fem").checked = true
            }
        }    

    }

   
    
    remover(id) {
        let posicao = -1

        for (let i = 0; i < this.lista.length; i++){
            if(this.lista[i].id == id){
                posicao = i
            }
        }

        if(posicao != -1){
            // splice (POSICAO, ELEMENTO_REMOVER, )
            this.lista.splice(posicao, 1)
            
           
        }
    }


    salvar() {
        let convidado = this.lerDados()

        if(this.validar(convidado)){

            if(this.idEdicao == -1){
            convidado.id = this.contador
            this.lista.push(convidado)
            this.contador++
            }else{
                for (let i = 0 ; this.lista.length; i++){
                    if(this.lista[i].id == this.idEdicao){
                        this.lista[i].nome = convidado.nome
                        this.lista[i].idade = convidado.idade
                        this.lista[i].sexo = convidado.sexo
                    }
                }
        }
            this.gerarTabela()
        }
    }


}

let gerenciador = new GerenciadorLista()