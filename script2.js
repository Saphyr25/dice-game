let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

const ROCK= 0
const PAPER=1
const SCISSOR=2

const EGUAL=0
const WIN = 1
const LOSE= 2

function battle (player, computer){
    if(player===computer){
        return EGUAL
    }
    if(player===ROCK&&computer===PAPER){
        return LOSE
    }
    if(player===ROCK&&computer===SCISSOR){
        return WIN
    }
    if(player===PAPER&&computer===ROCK){
        return WIN
    }
    if(player===PAPER&&computer===SCISSOR){
        return LOSE
    }
    if(player===SCISSOR&&computer===ROCK){
        return LOSE
    }
    if(player===SCISSOR&&computer===PAPER){
        return WIN
    }


}


function doresult (result){
    if(result===WIN){
        alert('win')
        document.getElementById('total').innerHTML=parseInt(document.getElementById('total').textContent )+1
    }   
    if(result===EGUAL){
        alert('égalité')
        return
    }
    if(result===LOSE){
        alert('perdu')
        document.getElementById('total2').innerHTML=parseInt(document.getElementById('total2').textContent )+1
    }
    if(parseInt(document.getElementById('total').textContent )===5){
        alert("Player win!!")
        window.location.assign('accueil.html')
}
if(parseInt(document.getElementById('total2').textContent )===5){
    alert("Computer win!!")
    window.location.assign('accueil.html')
}
}

function botchoice() {
    return Math.floor(Math.random() * 3);
}

rock.onclick = function (e) {
    let bot = botchoice();
    doresult(battle(ROCK,bot))

}

paper.onclick = function (e) {
    let bot = botchoice();
    doresult(battle(PAPER,bot))
}

scissor.onclick = function (e) {
    let bot = botchoice();
    doresult(battle(SCISSOR,bot))
}