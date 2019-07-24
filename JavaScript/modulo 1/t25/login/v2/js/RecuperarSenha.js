class RecuperarSenha{

    recuperarUsuario(){
        let emailBuscar = document.getElementById("inputEmail").nodeValue


        if(emailBuscar != ""){
            let usuarioLS = JSON.parse(localStorage.getItem("usuario"))


            if(usuarioLS.email == emailBuscar){
                alert("Usuario: " + )
            }
        }



    }



}

let recuperar = RecuperarSenha()