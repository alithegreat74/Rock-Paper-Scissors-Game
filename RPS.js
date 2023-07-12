let playerPick;
let computerPick;
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};


document.querySelector('.wins').innerHTML=`Wins: ${score.wins}`;
document.querySelector('.draws').innerHTML=`Draws: ${score.draws}`;
document.querySelector('.losses').innerHTML=`Losses: ${score.losses}`;

function computerRock(playerPick){
    document.querySelector('.computer-pick').innerHTML='Computer picked: Rock';
    if(playerPick==0){
        score.draws+=1;
        document.querySelector('.draws').innerHTML=`draws: ${score.draws}`;
    }
    else if(playerPick==1){
        score.losses+=1;
        document.querySelector('.losses').innerHTML=`losses: ${score.losses}`;
    }
    else{
        score.wins+=1;
        document.querySelector('.wins').innerHTML=`wins: ${score.wins}`;
    }
}
function computerScissors(playerPick){
    document.querySelector('.computer-pick').innerHTML='Computer picked: Scissors';
    if(playerPick==0){
        score.wins+=1;
        document.querySelector('.wins').innerHTML=`wins: ${score.wins}`;
    }
    else if (playerPick==1){
        score.draws+=1;
        document.querySelector('.draws').innerHTML=`draws: ${score.draws}`;
    }
    else{
        score.losses+=1;
        document.querySelector('.losses').innerHTML=`losses: ${score.losses}`;
    }
}
function computerPaper(playerPick){
    document.querySelector('.computer-pick').innerHTML='Computer picked: Paper';
    if(playerPick==0){
        score.losses+=1;
        document.querySelector('.losses').innerHTML=`losses: ${score.losses}`;
    }
    else if(playerPick==1){
        score.wins+=1;
        document.querySelector('.wins').innerHTML=`wins: ${score.wins}`;
    }
    else{
        score.draws+=1;
        document.querySelector('.draws').innerHTML=`draws: ${score.draws}`;
    }
}

function match(playerPick,computerPick){
    if(computerPick==0){
        computerRock(playerPick);
    }
    else if(computerPick==1){
        computerScissors(playerPick);
    }
    else{
       computerPaper(playerPick);
    }
    localStorage.setItem('score', JSON.stringify(score));
}

document.querySelector('.Rock-button').onclick=function(){
    playerPick=0;
    document.querySelector('.player-pick').innerHTML='You picked: Rock';
    computerPick=Math.floor(Math.random()*3);
    match(playerPick,computerPick);
}
document.querySelector('.Paper-button').onclick=function(){
    playerPick=1;
    document.querySelector('.player-pick').innerHTML='You picked: Scissors';
    computerPick=Math.floor(Math.random()*3);
    match(playerPick,computerPick);
}
document.querySelector('.Scissors-button').onclick=function(){
    playerPick=2;
    document.querySelector('.player-pick').innerHTML='You picked: Paper';
    match(playerPick,computerPick);
}

