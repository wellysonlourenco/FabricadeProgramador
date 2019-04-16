
    function classificacao() {
        var n1 = parseFloat(document.getElementById("input1").value)
        var n2 = parseFloat(document.getElementById("input2").value)

        var resultado = n1/(n2*n2)
    
        if (resultado <= 18 ){
            alert("Abaixo do Peso! (IMC menor que 18) - Vermelho :" +resultado);
        }
        if (resultado > 18 && resultado  <=25 ){
            alert("Ideal! (IMC maior que 18 e menor que 25) - Azul :" + resultado);
        }
        if (resultado >25 && resultado <= 30){
            alert("Sobre o peso! (IMC maior que 25 e menor que 30) - Amarelo : " + resultado);
        }
        if (resultado > 30 && resultado <= 35) {
            alert("Obesidade 1! (IMC maior que 30 e menor que 35) - Laranja : " + resultado);
        }
        if (resultado > 35 && resultado <= 40){
            alert("Obesidade 2! (IMC maior que 35 e menor que 40) - Roxo : " + resultado);
        }
        else{
            alert("Obesidade 3! (IMC maior que 40) - Preto :" + resultado);
        }
    
    
    }