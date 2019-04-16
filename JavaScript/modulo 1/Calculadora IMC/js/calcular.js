    function calcular(){
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
    
