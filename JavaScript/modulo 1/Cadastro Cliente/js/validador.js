class Validador{

    validar(){

        let mensagem = ""
        let nome = document.getElementById("inputNome").value;
        let email = document.getElementById("inputemail").value;

            if(nome == ""){
                mensagem += "O campo nome é obrigatório! \n"
            }

            if (email == ""){
                mensagem += "O Campo e-mail é obrigatório! \n"
            }       
       
       

        let sexo = document.querySelector("[type=radio]:checked")
        
            if ( sexo == null){
                mensagem += "Seleciona o Sexo! \n"
            }
       
        // let fem = document.getElementById("fem").checked;
        // let masc = document.getElementById("masc").checked;

        // if ( fem == false && masc == false){
        //     mensagem += "Seleciona o Sexo! \n"
        // }
            


        let qtdCursos = document.querySelectorAll("[type=checkbox]:checked").length

            if (qtdCursos == 0){
                mensagem += "Selecione o Curso! \n"
            }



        // modo detalhado 
        // let web =  document.getElementById("web").checked;
        // let mobile = document.getElementById("mobile").checked;
        // let desktop = document.getElementById("desktop").checked;

        //     if (web == false && mobile == false && desktop==false){

        //     }



        let estado = document.getElementById("estado").value;

            if (estado == ""){
                mensagem += "Selecione o Estado! \n"
            }
            


        let foto = document.getElementById("foto").files[0];
        
            if (foto == undefined){
                mensagem += "Selecione a Foto! \n"
            }else if(foto.size >= 1000) {
                mensagem += " A foto tem que ser menor que 1mb! \n"
            }
    


        let datanasc = document.getElementById("datanasc").value;
            
            if (datanasc == ""){
                mensagem += "Selecione a Data de Nascimento! \n"
            } 
                
        

    
        // para aparecer todos em um alerta
        if (mensagem != ""){
            // alert(mensagem)
            document.getElementById("textoMensagem").innerText = mensagem
        }
        document.querySelector("mensagens").classList.add("show")
   
    }
}

let validador = new Validador()