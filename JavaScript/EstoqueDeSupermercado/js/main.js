document.getElementById('formulario').addEventListener('submit',cadastrarProdutos);


function cadastrarProdutos(e){
    let nomeProduto = document.getElementById('inputProduto').value;
    let codigoProduto = document.getElementById('inputCodigo').value;
    let quantidadeProduto = document.getElementById('inputQuantidade').value;


    if(!nomeProduto || !codigoProduto || !quantidadeProduto){
        alert("Por Favor, preencha os campos em branco!")
        mostrarProdutos();
        e.preventDefault();
        return false;
    }else{

    quantidadeProduto = parseInt(document.getElementById('inputQuantidade').value);

    produto = {
        nome : nomeProduto,
        codigo: codigoProduto,
        quantidade: quantidadeProduto
    }

    if (localStorage.getItem('estoque') === null){
        let produtos = [];
        produtos.push(produto);
        localStorage.setItem('estoque',JSON.stringify(produtos));
        alert("Foram cadastradas com sucesso "+quantidadeProduto+" unidades do Produto "+ nomeProduto+"!");
    }else{
        let produtos = JSON.parse(localStorage.getItem('estoque'));
        produtos.push(produto);
        localStorage.setItem('estoque',JSON.stringify(produtos));
        alert("Foram cadastradas com sucesso "+quantidadeProduto+" unidades do Produto "+ nomeProduto+"!");
    }

    document.getElementById('formulario').reset();
    mostrarProdutos();
    
    e.preventDefault();
    // console.log(produto);

    }
}

function mostrarProdutos(){
    let produtos = JSON.parse(localStorage.getItem('estoque'));
    let produtoResultado = document.getElementById('resultados');

    produtoResultado.innerHTML = '';

    for (var i = 0; i< produtos.length; i++){
        var nome = produtos[i].nome;
        var codigo = produtos[i].codigo;
        var quantidade = produtos[i].quantidade;


        produtoResultado.innerHTML += '<tr><td>' + nome +
                                      '</td><td>' + codigo +
                                      '</td><td>' + quantidade + '</td><td>';


    }
}