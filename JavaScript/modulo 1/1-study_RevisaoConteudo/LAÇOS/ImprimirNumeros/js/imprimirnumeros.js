function imprimirNumeros(){
    
    let qtde = document.getElementById("quantidade").nodeValue
    let span = document.getElementById("resultado")
    let numeros = ""

    if (qtde == ""){
        alert("Digite o valor da quantidade!")
    }else{
        let numeroInteiro = parseInt(qtde)

        for (let i = 1; i <= numeroInteiro; i++){
            numeros += i + " "     // numero = numero + i + " "
        }
        span.innerText = i + " "
    }
    

}