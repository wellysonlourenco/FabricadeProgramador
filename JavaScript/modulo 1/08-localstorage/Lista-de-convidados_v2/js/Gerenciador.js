class Gerenciador {



    constructor(){
        this.contador = 0
        this.elementoEditar = null
        this.listaConvidados = []
    }



    lerDados(){
        let convidado = {}
        convidado.nome = document.getElementById('inputConvidado').value



        return convidado
    }

    buscarConvidadosLocalStorage(){
        if(localStorage.getItem("convidados") == null){
            localStorage.setItem("convidados", "[]")
        }else{
            this.listaConvidados = JSON.parse(localStorage.getItem("convidados")) //converte string para JSON
            this.gerarLista()
        }
    }

    gerarLista(){
        let lista = document.getElementById("lista") //pegar o proprio elemento (DIV)

        lista.innerText = ""

        for(let i = 0; i < this.listaConvidados.length; i++){
            let divlinha = document.createElement("div")
            
            let spanNome = document.createElement("span")
                spanNome.innerText = this.listaConvidados[i].nome
            
            let divEdicao = document.createElement("div")
                let imgEdicao = document.createElement("img")
                imgEdicao.setAttribute("src", "img/editar.svg")
                imgEdicao.setAttribute("onclick", "gerenciador.editar('" + this.listaConvidado(i).id + "' )")
                imgEdicao.classList.add("imagem")
                divEdicao.appendChild(imgEdicao)
            
            
            let divRemocao = document.createElement("div")
                let imgRemocao = document.createElement("img")
                imgRemocao.setAttribute("src", "img/lixeira.svg")
                imgRemocao.setAttribute("onclick", "gerenciador.editar('" + this.listaConvidados(i).id + "')")
                imgRemocao.classList.add("imagem")
                divRemocao.appendChild(imgRemocao)

                
            divLinha.appendChild(spanNome)
            divLinha.appendChild(divEdicao)
            divLinha.appendChild(divRemocao)


            lista.appendChild(divLinha)

            
        }
    }

    //Méltodo responsável por adicionar uma nova div na lista contendo o convidado e suas ações
    salvar() {

       let convidadoRetornado = this.lerDados()

        if (this.validar(convidadoRetornado)){
            if(elementoEditar == null){
                convidadoRetornado.id = this.contador
                this.listaConvidados.push(convidadoRetornado)
                this.contador++

                localStorage.setItem("convidados", JSON.stringify(this.listaConvidados))
            } else { //edicao  


            }
            this.limpar()
            this.gerarLista()
        }

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
    }

    validar() {
        
        if (Convidado.nome == "") {
            alert("Digite o nome do convidado!")
            return false
        }
        return true
    }

    limpar() {
        //Seta o texto de dentro do input "inputConvidado" para vazio
        document.getElementById('inputConvidado').value = ''
    }
}

//Instanciando o objeto da classe Gerenciador
let gerenciador = new Gerenciador()












































// //Variável "global" para manter o valor do contador
// var contador = 0
// //Variável "global" para manter o elemento de edição ou null caso não seja uma edição
// var elementoEditar = null

// class Gerenciador {
//     salvar() {
        
//         //Variável "ehValido" recebe o retorno da função validar.
//         let Ehvalido = this.validar()

//         if (Ehvalido){
        
//         let nomeConvidado = document.getElementById('inputConvidado').value
        
//         //colocar o nome na lista
//         let div = document.createElement("div")
//         div.innerText = nomeConvidado
//         div.classList.add("div")
//         div.setAttribute("id","div-" + contador)
        
//         let img = document.createElement("img")
        
        
        
//         let remover = document.createElement("img")
//         remover.setAttribute('src',"img/lixeira.svg")
//         remover.setAttribute('onclick',"gerenciador.remover('div-" +contador+ "' )")
//         remover.classList.add("imagem")
//         div.appendChild(remover)

//         let editar = document.createElement("img")
//         editar.setAttribute('src',"img/editar.svg" )
//         editar.setAttribute('onclick', "gerenciador.editar('div- " +contador+ "' ) " )
//         div.appendChild(editar)  
//         editar.classList.add("imagem")
        

//         document.getElementById("lista").appendChild(div)
//         contador++;

          
//         this.limpar()
//         }
//     }
    
//     remover(id){
//         document.getElementById(id).remove()
            
//     }

//     editar(id){
//         document.getElementById(id).editar()

//     }
    
    
//     validar() {
//         let nomeConvidado = document.getElementById('inputConvidado').value
//         if (nomeConvidado == "") {
//             alert("Digite o nome do convidado!")
//             return false
//         } 
//         return true
//     }
    
    
//     limpar() {
//         document.getElementById('inputConvidado').value = ''
//     }



// }
// let gerenciador = new Gerenciador()