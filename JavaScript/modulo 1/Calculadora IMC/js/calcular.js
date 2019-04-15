class IMC {

    Calcular(){
    var n1 = parseFloat(document.getElementById("input1").value)
    var n2 = parseFloat(document.getElementById("input2").value)

    var resultado = n1/(n2*n2)
        if (resultado < 18.5 ) {
        alert("Você está magro com esse indice: " + resultado);
        }
        if (resultado>= 18.5 && resultado <= 25){
        alert("Você está normal com esse indice: " + resultado);
        }
        if (resultado> 25 && resultado <= 29.9){
        alert("Você está com sobre peso com esse indice: " + resultado);
        }
        if (resultado > 29.9 && resultado <= 39.9){
        alert("Você está com obesidade com esse indice: " + resultado);
        }
        if (resultado > 39.9){
        alert("Você estácom obesidade grave com esse indice: " + resultado);
        }
        
    }

    classificacao () {
        
        var resultado = this.Calcular()
        var resultado = parseFloat(document.getElementById('resultado'))
    
        if (resulado <= 18 ){
            mensagem += "Abaixo do Peso! (IMC menor que 18) - Vermelho \n"
        }
        if (resultado > 18 && resultado  <=25 ){
            mensagem += "Ideal! (IMC maior que 18 e menor que 25) - Azul \n"
        }
        if (resultado >25 && resultado <= 30){
            mensagem += "Sobre o peso! (IMC maior que 25 e menor que 30) - Amarelo \n "
        }
        if (resultado > 30 && resultado <= 35) {
            mensagem += "Obesidade 1! (IMC maior que 30 e menor que 35) - Laranja \n"
        }
        if (resultado > 35 && resultado <= 40){
            mensagem += "Obesidade 2! (IMC maior que 35 e menor que 40) - Roxo \n"
        }

        else{
            mensagem += "Obesidade 3! (IMC maior que 40) - Preto \n"
        }
    
    
    }
    

    limpar() {
        document.getElementById('input1').value = ''
        document.getElementById('input2').value = ''

    }

    validar (){

    }
}
var calcular = new IMC()