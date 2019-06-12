class Gerenciador {

    constructor() {
        this.usuarioRegistro = {};
        this.usuarioLogin = {};
        this.usuarioNome = null

    }

    lerDadosDoRegistro() {


        this.usuarioRegistro.nome = document.getElementById("inputNome").value
        this.usuarioRegistro.usuario = document.getElementById("inputUsuario").value
        this.usuarioRegistro.senha = document.getElementById("inputSenha").value

    }

    lerDadosLogin() {

        this.usuarioLogin.usuario = document.getElementById("inputUsuario").value
        this.usuarioLogin.senha = document.getElementById("inputSenha").value


    }

    validar() {

        let mensagem = ""

        if (this.usuarioRegistro.nome == "") {
            mensagem += " Digite o nome!"

        }
        if (this.usuarioRegistro.usuario == "") {
            mensagem += "digite o nome do usuario!"

        }
        if (this.usuarioRegistro.senha == "") {
            mensagem += "digite a senha!"

        }
        if (mensagem == "") {
            return true;
        }

        alert(mensagem);
        return false
    }

    salvarUsuario() {
        this.lerDadosDoRegistro()
        if (this.localStorage()) {
            if (this.validar()) {
                localStorage.setItem("usuario", JSON.stringify(this.usuarioRegistro))
                // window.location.href = "login.html";

            }
        } else {
            alert("erro!!! local storage!");
        }
    }

    loginUsuario() {
        this.lerDadosLogin()

        let usuarioRetornado = localStorage.getItem(this.usuarioLogin.usuario)
        if (usuarioRetornado == null) {
            alert("Usuario ou senha inválida!")
        } else {
        let usuarioLogado = localStorage.parse(usuarioRetornado)
            if(this.usuarioLogin.senha == usuarioLogado.senha){
                alert("Usuario Logado")
            }else{
                alert("Senha Invalida")
            }
        

        }



    }


    localStorage() {
        if (typeof (Storage) !== "undefined") {
            return true;
        }
        else {
            return false;
        }

    }





}

let gerenciador = new Gerenciador()