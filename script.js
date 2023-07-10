let turn = true

let score1 = 0
let score2 = 0

let scoreRound1 = 0
let scoreRound2 = 0

let player1Name = ""
let player2Name = ""

function enableButtons(name, visibility) {
    let elements = document.getElementsByClassName(name)
    for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = visibility
    }
}

function changeTurn() {
    if (turn) {
        turn = false
        scoreRound1 = 0
        enableButtons('disabled', true)
        enableButtons('disabled2', false)
        document.getElementById('score-round').innerHTML = scoreRound1
    }
    else {
        turn = true
        scoreRound2 = 0
        enableButtons('disabled2', true)
        enableButtons('disabled', false)
        document.getElementById('score-round2').innerHTML = scoreRound2
    }
}

function Relaunch() {
    const dice = Math.floor(Math.random() * (6) + 1);
    document.getElementById("dice_img").src = `images/dice-${dice}.png`
    if (dice === 1) {
        changeTurn()
        return
    }
    if (turn) {
        scoreRound1 += dice
        document.getElementById('score-round').innerHTML = scoreRound1
    }
    else {
        scoreRound2 += dice
        document.getElementById('score-round2').innerHTML = scoreRound2
    }

}

function Total() {
    score1 += scoreRound1
    document.getElementById('Total').innerHTML = score1
    score2 += scoreRound2
    document.getElementById('Total2').innerHTML = score2
    changeTurn()
        if (score1 >= 10) {
        alert(`${player1Name} win!`)
        window.location.assign('accueil.html')
    }
    if (score2 >= 10) {
        alert(`${player2Name} win!`)
        window.location.assign('accueil.html')
    }

}
let valider1 = false
let valider2 = false

document.getElementById('button1').onclick = function (e) {
    valider1 = true
    if (valider2) {
        let game_menu = document.getElementById('menu')
        game_menu.style.display = "none"
        let jeu = document.getElementById("dice_game")
        jeu.style.display = "flex"

        let input_name = document.getElementById('input1').value
        let Player1 = document.getElementById('Player1')
        if (input_name === '')
            Player1.textContent = 'Player1';
        else
            Player1.textContent = input_name;
        player1Name = Player1.textContent;

        let input_name2 = document.getElementById('input2').value
        console.log(input_name2)
        let Player2 = document.getElementById('Player2')
        if (input_name === '')
            Player2.textContent = 'Player2';
        else
            Player2.textContent = input_name2;
        player2Name = Player2.textContent;
    }

}


document.getElementById('button2').onclick = function (e) {
    valider2 = true
    if (valider1) {
        let game_menu = document.getElementById('menu')
        game_menu.style.display = "none"
        let jeu = document.getElementById("dice_game")
        jeu.style.display = "flex"
        let input_name = document.getElementById('input1').value
        let Player1 = document.getElementById('Player1')
        if (input_name === '')
            Player1.textContent = 'Player1';
        else
            Player1.textContent = input_name;
         player1Name = Player1.textContent

        let input_name2 = document.getElementById('input2').value
        let Player2 = document.getElementById('Player2')
        if (input_name === '')
            Player2.textContent = 'Player2';
        else
            Player2.textContent = input_name2;
        player2Name = Player2.textContent
    }

}

