var contador = 0;
var editar = null;

class Gerenciador {
    adicionar() {
        
        //vai verificar a validação e continuar no if
        let Ehvalido = this.validar()

        if (Ehvalido){
        
        let nomeConvidado = document.getElementById('inputConvidado').value
        
        //colocar o nome na lista
        let div = document.createElement("div")
        div.innerText = nomeConvidado
        div.classList.add("div")
        div.setAttribute("id","div-" + contador)
        
        let img = document.createElement("img")
        
        
        
        let remover = document.createElement("img")
        remover.setAttribute('src',"img/lixeira.svg")
        remover.setAttribute('onclick',"gerenciador.remover('div-" +contador+ "' )")
        remover.classList.add("imagem")
        div.appendChild(remover)

        let editar = document.createElement("img")
        editar.setAttribute('src',"img/editar.svg" )
        editar.setAttribute('onclick', "gerenciador.editar('div- " +contador+ "' ) " )
        div.appendChild(editar)  
        editar.classList.add("imagem")
        

        document.getElementById("lista").appendChild(div)
        contador++;

          
        this.limpar()
        }
    }
    
    remover(id){
        document.getElementById(id).remove()
            
    }

    editar(id){
        document.getElementById(id).editar()

    }
    
    
    validar() {
        let nomeConvidado = document.getElementById('inputConvidado').value
        if (nomeConvidado == "") {
            alert("Digite o nome do convidado!")
            return false
        } 
        return true
    }
    
    
    limpar() {
        document.getElementById('inputConvidado').value = ''
    }



}
let gerenciador = new Gerenciador()