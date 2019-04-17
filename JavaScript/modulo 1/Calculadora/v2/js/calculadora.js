class Calculadora{

    somar (numero1, numero2){
        return numero1 + numero2
    }


    calcular(){
        let n1 = parseFloat(document.getElementById("input1").value);
        let n2 = parseFloat(document.getElementById("input2").value);

        let resultado = this.somar(n1, n2)

        alert(resultado)
    }


}

let calc = new Calculadora()