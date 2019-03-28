class GerenciadorLista {

    adicionarConvidado() {

        let Valido = this.validar()

        if (Valido) {
            //Adiciono
            let convidado = document.getElementById("inputConvidado").value
            document.getElementById("lista").innerText += convidado + '\n'
            this.limpar()
        } 

    }

    validar() {
        let nomeConvidado = document.getElementById("inputConvidado").value
        if (nomeConvidado == "") {
            //Inválido
            alert("Preencha o nome do convidado!")
            return false
        } else if (nomeConvidado.length > 30) {
            alert("Nome deve conter no máximo 30 caracteres!")
            return false
        } else if (nomeConvidado.charAt(0) != nomeConvidado.charAt(0).toUpperCase()) {
            alert("A primeira letra do nome deve ser maiúscula!")
            return false
        } else {
            //Válido
            return true
        }

    }

    limpar() {
        document.getElementById('inputConvidado').value = ""
    }
}

let gerenciador = new GerenciadorLista()




// class GerenciadorLista{

//     adicionarConvidado(){
        
        
//         let valido = this.validar()
//         if(valido){
//             //adicionar
//             let convidado = document.getElementById("inputConvidado").value
//             document.getElementById("lista").innerText += convidado + '\n'
//             this.limpar()
        
//         }
//     }    

//     validar(){
//         let nomeConvidado = document.getElementById("inputconvudado"),value
//             if (nomeConvidado == ""){
//                 //inválido
//                 alert("Preencha o nome do convidado!")
//                 return false
//             } else if (nomeConvidado.length > 30) {
//                 alert("Nome deve conter no máximo 30 caracteres!")
//                 return false
//             } else if (nomeConvidado.charAT(0) != nomeConvidado.charAT(0).toUpperCase()){
//                 alert("A primeira Letra do nome deve ser maiúscula!")
//                 return false
//             } else {
//                 return true
//             }
            
        
        
        
        
        
//         // if(document.getElementById("inputConvidado").value == ""){
//         //     // alert("Insira o nome do convidado!")
//         //     // invalido
//         //     return false
//         // } else {
//         //     // valido
//         //     return true

//         // }
//     }



//     limpar(){
//         document.getElementById("inputConvidado").value = '';
//     }
// }



// let gerenciador = new GerenciadorLista()