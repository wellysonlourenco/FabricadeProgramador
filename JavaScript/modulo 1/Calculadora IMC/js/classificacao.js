function Classificacao () {
    var n1 = parseFloat(document.getElementById("input1").value)
    var n2 = parseFloat(document.getElementById("input2").value)

    var resultado = n1/(n2*n2)

    if (resulado <= 18 ){
        mensagem += "Abaixo do Peso! (IMC menor que 18) - Vermelho \n"
    }
    if (resultado > 18 && resultado  <=25 ){
        mensagem += "Ideal! (IMC maior que 18 e menor que 25) - Azul \n"
    }
    if (resultado >25 && resultado <= 30){
        mensagem += "Sobre o peso! (IMC maior que 25 e menor que 30) - Amarelo \n "
    }


}