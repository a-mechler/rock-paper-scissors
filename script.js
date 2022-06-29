function compSelect(){
    let play = Math.floor(Math.random() * 3 + 1)
    if (play === 1){
        return 'rock';
    } else if (play === 2){
        return 'paper';
    } else if (play === 3){
        return 'scissors';
    }
}

function reset(){
    win.textContent = 0;
    lose.textContent = 0;
    tie.textContent = 0;
}

function decider() {
    if (parseInt(win.textContent) >= 5){
        alert('YOU WIN!');
        reset();
    } else if (parseInt(lose.textContent) >= 5){
        alert('YOU LOSE!');
        reset();
    }
}

function playRound(e){
    playerPlay = e.srcElement.id;
    compPlay = compSelect();
    if ((playerPlay === 'rock' & compPlay === 'scissors') || 
        (playerPlay === 'paper' & compPlay === 'rock') || 
        (playerPlay === 'scissors' & compPlay === 'paper')) {
            win.textContent = parseInt(win.textContent) + 1;  
    }      
    else if ((playerPlay === 'rock' & compPlay === 'paper') ||
        (playerPlay === 'paper' & compPlay === 'scissors') ||
        (playerPlay === 'scissors' & compPlay === 'rock')) {
            lose.textContent = parseInt(lose.textContent) + 1;
    }
    else tie.textContent = parseInt(tie.textContent) + 1;

    decider();
}


const win = document.querySelector('#win');
const tie = document.querySelector('#tie');
const lose = document.querySelector('#lose');
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', playRound));




