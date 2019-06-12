class ControleRegistro {

    // constructor() {
    //     this.usuarioRegistro = {};
    //     this.usuarioLogin = {};
    //     this.usuarioNome = null

    // }

    lerDados() {
        let usuario = {}

        usuario.nome = document.getElementById("inputNome").value
        usuario.email = document.getElementById("inputEmail").value
        usuario.senha = document.getElementById("inputSenha").value

        return usuario

    }

    validar(usuario){
        if (usario.nome != "" && usuario.email != "" && usuario.senha != ""){
            return true
        }else{
            
            return false
        }
    }

    salvar(){
        let usuarioRetornado = this.lerDados()

        if(this.validar(usuarioRetornado)){
            localStorage.getItem("usuario", JSON.stringify(usuarioRetornado))
            alert("Usuario Salvo com Sucesso!")


            location.href= "login.html"

        }else{
            alert("Preencha todos os campos!")
        }
    }

}

    let ControleRegistro = new ControleRegistro()