var funcionario =  {
    nome: 'Wéllyson',
    idade: 29,
    numRegistro = "1234567B",
    departamento :"TI",
    eventos: [
        {evento: 'faltou', data: '18/05/2009'},
        {evento: 'falou bravo com o chefe', data: '17/05/2009'},
    ],
    detalhes: {
        hobies: ['fotografia'],
    },
    horarios: [],
    registrarEntrada: function(data){
        this.horarios.push({data: data, evento: 'entrada'});
        console.log("Entrada às " + data + " - " + this.numRegistro);
    },
    registrarSaida: function(data){
        this.horarios.push({data: data, evento: 'saida'});
        console.log("Saida às " + data + " - " + this.numRegistro);
    },
}

funcionario.registrarEntrada("06/09/2020");
funcionario.registrarSaida("06/09/2020");