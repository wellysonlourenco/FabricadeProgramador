// Velocidade máxima de até 70 km/h
// a cada 5 km/h acima do limite você ganha 1 ponto
// Math.Floor()
// Caso os pontos seja maior que 12 -> Carteira Suspendida;

verificarVelocidade(180);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;

    if ( velocidade <= velocidadeMaxima)
        console.log('OK');
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima)/KmPorPonto));

        if (pontos >=12)
            console.log('Carteira Suspensa', pontos);
        else
            console.log('Pontos', pontos);
    }

}