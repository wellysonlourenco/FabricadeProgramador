class GerenciadorLista{

    adicionarConvidado(){
        
        
        let ehValido = this.validar()
        if(valido){
            //adicionar
            let convidado = document.getElementById("inputConvidado").value
            document.getElementById("lista").innerText += convidado + '\n'
        // }else{
        //     alert("Insira o nome do convidado!")
        this.limpar()
        }
    }    

    validar(){
        let nomeConvidado = document.getElementById("inputconvudado"),value
            if (nomeConvidado == ""){
                //inválido
                alert("Preencha o nome do convidado!")
                return false
            } else if (nomeConvidado.length > 30) {
                alert("Nome deve conter no máximo 30 caracteres!")
                return false
            } else if (nomeConvidado.charAT(0) != nomeConvidado.charAT(0).toUpperCase()){
                alert("A primeira Letra do nome deve ser maiúscula!")
                return false
            } else {
                return true
            }
            
        
        
        
        
        
        // if(document.getElementById("inputConvidado").value == ""){
        //     // alert("Insira o nome do convidado!")
        //     // invalido
        //     return false
        // } else {
        //     // valido
        //     return true

        // }
    }



    limpar(){
        document.getElementById("inputConvidado").value = '';
    }
}



let gerenciador = new GerenciadorLista()