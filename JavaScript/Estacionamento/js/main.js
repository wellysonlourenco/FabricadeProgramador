document.getElementById('formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(e){
    var modeloCarro  = document.getElementById('modeloCarro').value;
    var placaCarro = document.getElementById('modeloPlaca').value;
    var time = new Date();

    if(!modeloCarro && !placaCarro){
        alert("Por favor, preencha os campos em branco!");
        return false;
    }
    
    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }
    
    
    //patio é a chave (key)
    if(localStorage.getItem('patio2') === null){
        var carros = [];
        carros.push(carro);
        // transforma o objeto em String para o array
        localStorage.setItem('patio2', JSON.stringify(carros));
    }else{
        // transforma a String para objeto
        var carros = JSON.parse( localStorage.getItem('patio2'));
        carros.push(carro);
        localStorage.setItem('patio2',JSON.stringify(carros));
    }

    document.getElementById('formulario').reset();
    mostrarPatio();

    e.preventDefault();
}

function apagarVeiculo(placa){
    // console.log(placa);
    var carros = JSON.parse(localStorage.getItem('patio2'));

    for (var  i= 0; i < carros.length; i++){
        if (carros[i].placa == placa){
            carros.splice(i,1);
        }

        localStorage.setItem('patio2',JSON.stringify(carros));
    }

    mostrarPatio();

}

function mostrarPatio(){
    var carros = JSON.parse(localStorage.getItem('patio2'));
    var carrosResultado = document.getElementById('resultados');
    
    carrosResultado.innerHTML =  '';
    
    for(var i = 0; i < carros.length; i++){
        var modelo = carros[i].modelo;
        var placa = carros[i].placa;
        var hora = carros[i].hora;
        var minutos = carros[i].minutos;
        
        carrosResultado.innerHTML += '<tr><td>' + modelo +
        '</td><td>' + placa +
        '</td><td>' + hora + ':' + minutos + '</td><td>' + 
                                '<button type="button" class="btn btn-danger" onclick="apagarVeiculo(\'' +placa + '\')">Excluir</button>' +
                                // '</td><td>' + Finalizar +
                                '</td></tr>';

    }
}

// https://github.com/PedroMeloTI/Estacionamento-JS/blob/master/js/main.js