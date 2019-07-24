class Gerenciador {
    
    constructor() {
        this.contador = 0
        this.elementoEditar = null
    }

    



    inserirLinha(convidado){
        convidado.id = contador

        let tabela = document.getElementById("tabela")

        
        let linha = tabela.insertRow(convidado.id)
        linha.setAttribute('id', convidado.id)

        let colunaId = linha.insertCell(0)
        let colunaNome = linha.insertCell(1)
        let colunaIdade = linha.insertCell(2)
        let colunaSexo = linha.insertCell(3)
        let colunaExcluir = linha.insertCell(4)
        let colunaEditar = linha.insertCell(5)

        colunaId.innerText = convidado.id   
        colunaNome.innerText = convidado.nome
        colunaIdade.innerText = convidado.idade
        colunaSexo.innerText = convidado.sexo

        let imgExcluir = document.createElement('img')
        imgExcluir.setAttribute('src', 'img/lixeira.svg')
        imgExcluir.setAttribute('onclick', "gerenciador.remover('linha-" + convidado.id + "')")
        imgExcluir.classList.add('imagem')

        let imagemEditar = document.createElement('img')
        imagemEditar.setAttribute('src', 'img/editar.svg')
        imagemEditar.setAttribute('onclick', "gerenciador.editar('linha-" + convidado.id + "')")
        imagemEditar.classList.add('imagem')

        colunaExcluir.appendChild(imgExcluir)
        colunaEditar.appendChild(imagemEditar)


    }


    lerDados(){
    
        let convidado = {}

        convidado.nome = document.getElementById('inputConvidado').value
        convidado.idade = document.getElementById('inputIdade').value
        convidado.sexo = document.querySelector('[type=radio]:checked').value

    return convidado        
    }
    
    
    

    

    salvar(convidado) {
        this.contador.lerDados
        


        if (ehValido){
            if(this.elementoEditar == null){
                this.inserirLinha(convidado)
                this.limpar()
                contador++
            }

        }

        let ehValido = this.validar()


        
        // elementoEditar.children[0].innerText = nomeConvidado
        // elementoEditar.children[1].innerText = idadeConvidado
        // elementoEditar.children[2].innerText = sexo
        // elementoEditar = null
        }

            //Verifica de o valor retornado é verdadeiro, ou seja, o campo com nome foi digitado
            if (ehValido) {
    }
    remover(id) {
        document.getElementById(id).remove()
    }




    editar(id) {
        // Busca o elemento a ser editado pelo id recebido e salva a referência na varial global elementoEditar
        elementoEditar = document.getElementById(id)
        //Pega o texto dentro do span que é o primeiro filho (posição 0) da div linha (elementoEditar)
        //Adiciona o valor no inputConvidado
        document.getElementById("inputConvidado").value = elementoEditar.children[0].textContent
        document.getElementById('inputIdade').value = elementoEditar.children[1].textContent

        let sx = elementoEditar.children[2].textContent

        if (sx == "F") {
            document.getElementById("fem").checked = true
            document.getElementById("masc").checked = false
        } else {
            document.getElementById("masc").checked = true
            document.getElementById("fem").checked = false
        }
    }


    validar() {
        //Pega o texto de dentro do inputConvidado
        let nomeConvidado = document.getElementById('inputConvidado').value
        let idadeConvidado = document.getElementById('inputIdade').value


        //Verifica se foi digitado o nome no input
        if (nomeConvidado == "") {
            alert("Digite o nome do convidado!")
            return false
        }

        if (idadeConvidado == "") {
            alert("Digite a idade do convidado!")
            return false
        }

        if (document.getElementById("masc").checked == false && document.getElementById("fem").checked == false) {
            alert("Selecione o sexo do convidado")
            return false
        }

        return true
    }

    limpar() {
        //Seta o texto de dentro do input "inputConvidado" para vazio
        document.getElementById('inputConvidado').value = ''
        document.getElementById('inputIdade').value = ''

        document.getElementById("fem").checked = false
        document.getElementById("masc").checked = false
    }
}

//Instanciando o objeto da classe Gerenciador
let gerenciador = new Gerenciador()