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

function playRound(playerPlay, compPlay){
    if (playerPlay === 'rock' & compPlay === 'scissors') return 2;
    else if (playerPlay === 'rock' & compPlay === 'paper') return 0;
    else if (playerPlay === 'paper' & compPlay === 'rock') return 2;
    else if (playerPlay === 'paper' & compPlay === 'scissors') return 0;
    else if (playerPlay === 'scissors' & compPlay === 'paper') return 2;
    else if (playerPlay === 'scissors' & compPlay === 'rock') return 0;
    else return 1;
}

function game(){
    let wins = 0;
    let loses = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++){
        let playerSelect = prompt('rock paper scissors').toLowerCase();
        if (playerSelect != 'rock' & playerSelect != 'paper' & playerSelect != 'scissors'){
            console.log('please enter rock, paper, or scissors');
            i--;
            continue;
        }
        let compSelection = compSelect();
        let result = playRound(playerSelect, compSelection);
        if (result === 2){
            console.log(`You win! ${playerSelect} beats ${compSelection}`);
            wins++;
        } else if (result === 0){
            console.log(`You lose! ${compSelection} beats ${playerSelect}`);
            loses++;
        } else if (result === 1){
            console.log(`Tie! ${playerSelect} ties ${compSelection}`);
            ties++;
        }
    }  
    if (wins > loses){
        console.log(`You win! ${wins} wins, ${loses} loses, ${ties} ties`)
    }  else if (loses > wins){
        console.log(`You lose! ${wins} wins, ${loses} loses, ${ties} ties`)
    } else{
        console.log(`Tie! ${wins} wins, ${loses} loses, ${ties} ties`)
    }
}

game();