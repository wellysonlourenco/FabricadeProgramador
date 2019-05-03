var listaNomes = []

function buscarNome(){
    
    let indice = 0
    let nomeDigitado = document.getElementById("inputNome").value
    
    if (nomeDigitado == ""){
        alert("O Campo Nome deve ser preenchido!")
        }else{
           
            while(listaNomes[indice] != nomeDigitado && indice < listaNomes.length){
                
                indice++

            }
            
            if(indice >= listaNomes.length){
                indice = -1
            }
        }
        let spanArray = document.getElementById("array")
        spanArray.innerText = listaNomes

        let spanResultado = document.getElementById("resultado")
        spanArray.innerText = "Indice : " + indice
}


function adicionarNome(){
    let nomeDigitado = document.getElementById("inputNome").value

    
    if(nomeDigitado == ""){
        alert("O Campo Nome deve ser preenchido!")
    }else{
        listaNomes.push(nomeDigitado)
        // listaNomes[listaNomes.length] = nomeDigitado
        alert("Nome adicionado com sucesso!")
    }

    let spanArray = document.getElementById("array")
    spanArray.innerText = listaNomes

    let spanResultado = document.getElementById("resultado")
    spanArray.innerText = "Indice : " + indice




}