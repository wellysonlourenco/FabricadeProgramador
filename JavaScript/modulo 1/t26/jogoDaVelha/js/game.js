const player1 = "X";
const player2 = "O";

var playTime = player1;
var gameOver = false;

atualizaMostrador();

function atualizaMostrador(){

    if (gameOver == true){
        return;
    }
    if (playTime == player1) {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("scr", "x.png");
        
    }else {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("scr", "img/o.png");
    }






}