class ControleLogin{

    autenticar(){
        let username = document.getElementById("inputUsuario").value
        let password = document.getElementById("inputSenha").value



        if( username != "" && password != ""){
            let usuarioLS = JSON.parse(localStorage.getItem("usuario"))

            if(usuarioLS.username == usuario && usuarioLS.password == senha){
                alert("Login efetuado com sucesso!")
                location.window = "home.html"
            } else {
                alert("senha ou usuario inválido!")
            }
        }else{
            alert("preencha os campos!")
        }
    }



}

let controleLogin = new ControleLogin()