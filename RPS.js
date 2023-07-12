let playerPick;
let computerPick;
let wins=0,losses=0,draws=0;

function computerRock(playerPick){
    document.querySelector('.computer-pick').innerHTML='Computer picked: Rock';
    if(playerPick==0){
        draws+=1;
        document.querySelector('.draws').innerHTML=`draws: ${draws}`;
    }
    else if(playerPick==1){
        losses+=1;
        document.querySelector('.losses').innerHTML=`losses: ${losses}`;
    }
    else{
        wins+=1;
        document.querySelector('.wins').innerHTML=`wins: ${wins}`;
    }
}
function computerScissors(playerPick){
    document.querySelector('.computer-pick').innerHTML='Computer picked: Scissors';
    if(playerPick==0){
        wins+=1;
        document.querySelector('.wins').innerHTML=`wins: ${wins}`;
    }
    else if (playerPick==1){
        draws+=1;
        document.querySelector('.draws').innerHTML=`draws: ${draws}`;
    }
    else{
        losses+=1;
        document.querySelector('.losses').innerHTML=`losses: ${losses}`;
    }
}
function computerPaper(playerPick){
    document.querySelector('.computer-pick').innerHTML='Computer picked: Paper';
    if(playerPick==0){
        losses+=1;
        document.querySelector('.losses').innerHTML=`losses: ${losses}`;
    }
    else if(playerPick==1){
        wins+=1;
        document.querySelector('.wins').innerHTML=`wins: ${wins}`;
    }
    else{
        draws+=1;
        document.querySelector('.draws').innerHTML=`draws: ${draws}`;
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

