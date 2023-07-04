let turn = true

let score1=0
let score2=0 

let scoreRound1 =0
let scoreRound2 =0

function enableButtons (name , visibility){
    let elements= document.getElementsByClassName(name)
    for(let i=0; i <elements.length; i++){
        elements[i].disabled=visibility
    }
}

function changeTurn(){
    if(turn){
        turn=false
        scoreRound1=0
        enableButtons('disabled', true)
        enableButtons('disabled2', false)
        document.getElementById('score-round').innerHTML=scoreRound1
    }
    else{
        turn = true
        scoreRound2= 0
        enableButtons('disabled2', true)
        enableButtons('disabled', false)
        document.getElementById('score-round2').innerHTML=scoreRound2        
}
}

function Relaunch( ){
    const dice = Math.floor(Math.random()*(6)+1);
    console.log(dice)
  if( dice===1){
    
        changeTurn()
       return 
    }
    if(turn){
        scoreRound1 += dice
        document.getElementById('score-round').innerHTML=scoreRound1  
    }
    else{
        scoreRound2 += dice
        document.getElementById('score-round2').innerHTML=scoreRound2 
    }
  
}

function Total (){
    
}