//Variável "global" para manter o valor do contador
var contador = 0
//Variável "global" para manter o elemento de edição ou null caso não seja uma edição
var elementoEditar = null

class Gerenciador {

    //Méltodo responsável por adicionar uma nova div na lista contendo o convidado e suas ações
    salvar() {

        //Variável "ehValido" recebe o retorno da função validar.
        let ehValido = this.validar()

        //Verifica de o valor retornado é verdadeiro, ou seja, o campo com nome foi digitado
        if (ehValido) {
            //variável contendo o valor do input
            let nomeConvidado = document.getElementById('inputConvidado').value
            let idadeConvidado = document.getElementById('inputIdade').value
            let sexo = document.querySelector('[type=radio]:checked').value
            
            let tabela = document.getElementById("tabela")

            // let linha = document.createElement('tr')
            // comando altera a criaçao do elemento por objeto
            let linha = tabela.insertRow()
            linha.setAttribute('id', 'linha-' + contador)

            // let colunaNome = document.createElement('td')
            // let colunaIdade = document.createElement('td')
            // let colunaSexo = document.createElement('td')
            // let colunaExcluir = document.createElement('td')
            // let colunaEditar = document.createElement('td')
                // SUBSTITUIR
            let colunaNome =  linha.insertCell(0)
            let colunaIdade = linha.insertCell(1)
            let colunaSexo = linha.insertCell(2)
            let colunaExcluir = linha.insertCell(3)
            let colunaEditar = linha.insertCell(4)



            colunaNome.innerText = nomeConvidado
            colunaIdade.innerText = idadeConvidado
            colunaSexo.innerText = sexo

            let imgExcluir = document.createElement('img')
            imgExcluir.setAttribute('src', 'img/lixeira.svg')
            imgExcluir.setAttribute('onclick', "gerenciador.remover('linha-" + contador + "')")
            imgExcluir.classList.add('imagem')

            let imagemEditar = document.createElement('img')
            imagemEditar.setAttribute('src', 'img/editar.svg')
            imagemEditar.setAttribute('onclick', "gerenciador.editar('linha-" + contador + "')")
            imagemEditar.classList.add('imagem')

            colunaExcluir.appendChild(imgExcluir)
            colunaEditar.appendChild(imagemEditar)

            // linha.appendChild(colunaNome)
            // linha.appendChild(colunaIdade)
            // linha.appendChild(colunaSexo)
            // linha.appendChild(colunaEditar)
            // linha.appendChild(colunaExcluir)

            // tabela.appendChild(linha)

            contador++

            this.limpar()
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
        document.getElementById('inputIdade').value = elementoEditar.children[1].textContent
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

        if(document.getElementById("masc").checked == false && document.getElementById("fem").checked == false){
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









// //Variável "global" para manter o valor do contador
// var contador = 0
// //Variável "global" para manter o elemento de edição ou null caso não seja uma edição
// var elementoEditar = null

// class Gerenciador {

//     //Méltodo responsável por adicionar uma nova div na lista contendo o convidado e suas ações
//     salvar() {

//         //Variável "ehValido" recebe o retorno da função validar.
//         let ehValido = this.validar()

//         //Verifica de o valor retornado é verdadeiro, ou seja, o campo com nome foi digitado
//         if (ehValido) {
//             //variável contendo o valor do input
//             let nomeConvidado = document.getElementById('inputConvidado').value
//             let idadeConvidado= document.getElementById('inputIdade').value
//             let sexo = document.querySelector('[type=radio]:checked').value

//             let tabela = document.getElementById("tabela")

//             let linha = document.createElement('tr')
//             linha.setAttribute('id', 'linha-' + contador)
            
//             let colunaNome = document.createElement('td')
//             let colunaIdade = document.createElement('td')
//             let colunaSexo = document.createElement('td')
//             let colunaExluir = document.createElement('td')
//             let colunaEditar = document.createElement('td')

//             // vai receber o nome
//             colunaNome.innerText = nomeConvidado
//             colunaIdade.innerText= idadeConvidado
//             colunaSexo.innerText = sexo
            

//             let imgExcluir = document.createElement('img')
//             imgExcluir.setAttribute('scr','img/lixeira.svg')
//             imgExcluir.setAttribute('onclick', "gerenciador.remover('linha-" + contador +"')")
//             imgExcluir.classList.add('imagem')

//             let imgEditar = document.createAttribute('img')
//             imgEditar.setAttribute('scr', 'img/editar.svg')
//             imgEditar.setAttribute('onclick', "gerenciador.editar('linha-" + contador + "')")
//             imagemEditar.classList.add('imagem')

//             colunaExcluir.appendChild(imgExcluir)
//             colunaEditar.appendChild(imagemEditar)

//             // coluna é filha da linha
//             linha.appendChild(colunaNome)
//             linha.appendChild(colunaIdade)
//             linha.appendChild(colunaSexo)

//             linha.appendChild(colunaExcluir)
//             linha.appendChild(colunaEditar)

//             // linha é filha da tabela
//             tabela.appendChild(linha)

//             contador++
//             this.limpar()
//         }
//     }

//     remover(id) {
//         document.getElementById(id).remove()
//     }

//     editar(id) {
//         // Busca o elemento a ser editado pelo id recebido e salva a referência na varial global elementoEditar
//         elementoEditar = document.getElementById(id)
//         //Pega o texto dentro do span que é o primeiro filho (posição 0) da div linha (elementoEditar)
//         //Adiciona o valor no inputConvidado
//         document.getElementById("inputConvidado").value = elementoEditar.children[0].textContent
//         document.getElementById('inputIdade').value = elementoEditar.children[1].textContent
    
//     }

//     validar() {
//         //Pega o texto de dentro do inputConvidado
//         let nomeConvidado = document.getElementById('inputConvidado').value
//         let idadeConvidado = document.getElementById("inputIdade").value
        
//         //Verifica se foi digitado o nome no input
//         if (nomeConvidado == "") {
//             alert("Digite o nome do convidado!")
//             return false
//         }

//         if (idadeConvidado == ""){
//             alert("Digite a idade do convidado!")
//             return false
//         }

//         if (document.getElementById("masc").checked == false && document.getElementById("fem").checked == false){
//             alert("Selecione o sexo do convidado!")
//             return false
//         }

//         return true
//     }

//     limpar() {
//         //Seta o texto de dentro do input "inputConvidado" para vazio
//         document.getElementById('inputConvidado').value = ''
//         document.getElementById('inputIdade').value = ''

//         document.getElementById("fem").checked = false
//         document.getElementById("masc").checked = false
//     }
// }

// //Instanciando o objeto da classe Gerenciador
// let gerenciador = new Gerenciador()












































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