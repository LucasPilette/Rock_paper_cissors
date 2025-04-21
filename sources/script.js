let random = (max) => {
    return Math.floor(Math.random() * max);
}

let getComputerChoice = (number) => {
    switch(number){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'cissors';
            break;
    }
};


let getHumanChoice = (choice) => {
    choice = choice.toLowerCase();
    if(choice == 'rock' || choice  == 'paper' || choice  == 'cissors'){
        return choice;
    } else {
        return ' error'
    }
}

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice,computerChoice) => {
    console.log(humanChoice);
    console.log(computerChoice);
    if(humanChoice == 'rock'){
        switch(computerChoice){
            case 'rock':
                return 'tie';
            case 'paper':
                computerScore++;
                return 'You lost, paper beats rock!';
            case 'cissors':
                humanScore++;
                return 'You win, rock beats cissors!';
        }
    } else if (humanChoice =='paper'){
        switch(computerChoice){
            case 'rock':
                humanScore++;
                return 'You win, paper beats rock!';
            case 'paper':
                return 'tie';
            case 'cissors':
                computerScore++;
                return 'You lost, cissors beats paper!';
        }
    } else if (humanChoice =='cissors'){
        switch(computerChoice){
            case 'rock':
                computerScore++;
                return 'You lost, rock beats cissors!';
            case 'paper':
                humanScore++;
                return 'You win, cissors beats paper!';
            case 'cissors':
                return 'tie';
        }
    }

}

let playGame = (rounds) => {
    for(i=1; i<=rounds ; i++){
        let input = prompt('Rock ,paper or cissors?');
        playRound(getHumanChoice(input),getComputerChoice(random(3)));
        console.log("score humain: "+ humanScore)
        console.log("score ordi: "+computerScore)
    }
    if(humanScore> computerScore){
        return 'You won !';
    } else if (humanScore < computerScore){
        return 'You lost';
    } else{
        return 'tie';
    }
}


console.log(playGame(5));


