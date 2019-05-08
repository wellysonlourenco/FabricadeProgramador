class GerenciadorLista{

    constructor(){
        this.lista = []
        this.contador = 0
    }

    lerDados(){
        let convidado= {}

        convidado.nome = document.getElementById("inputConvidado").value 
        convidado.idade = document.getElementById("inputIdade").value 
        convidado.sexo = document.querySelector('[type=radio]:checked').value

        return convidado
    }

    validar(convidado){
        if (convidado.nome != "" && convidado.idade != "" && convidado.sexo != null){
            alert("Preencha todos os campos!")
            return false
            } else { 
                return true
        }
    }

    gerarTabela(){
        let tabela = document.getElementById("tabela")

        for(let i = 0 ; i < this.lista.length ; i++ ){

            let linha = tabela.insertRow()

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
            

            let imgEditar = document.createElement('img')
            imgEditar.setAttribute('src' , 'img/editar.svg')
            imgEditar.setAttribute('onclick', "gerenciador.editar('" + this.lista[i].id + "')")
            
            let imgRemover = document.createElement('img')
                imgRemover.setAttribute('src' , 'img/lixeira.svg')
                imgRemover.setAttribute('onclick', "gerenciador.remover('" + this.lista[i].id + "')")
            
            colunaEditar.appendChild(imgEditar)
            colunaRemover.appendChild(imgRemover)
        }
    }

    limparCampos(){
        // document.getElementById("imputConvidado").value = ""
        // document.getElementById("inputIdade").value = ""
        document.getElementById('inputConvidado').value = ''
        document.getElementById('inputIdade').value = ''

        // if ((document.querySelector('[type:radio]:checked')) != null){
        //     document.querySelector('[type:radio]:checked').checked = false
        // }
    }

    editar(){

    }

    salvar(){
        let  convidado = this.lerDados()

        if(this.validar(convidado)){ //salvando com a id (array)
            convidado.id = this.contador
            this.lista.push(convidado)

            this.contador++
            this.gerarTabela()
        }

    }

    remover(){

    }


}

let gerenciador = new GerenciadorLista()