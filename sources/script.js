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
    if(humanChoice == 'rock'){
        switch(computerChoice){
            case 'rock':
                return 'Tie';
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
                return 'Tie';
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
                return 'Tie';
        }
    }

}

const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
const scoreDiv = document.querySelector(".score");
const replayDiv = document.querySelector(".replay");
let counter = 0;

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        let result = document.createElement("div");
        result.classList.add('rounds');
        result.textContent = `Round : ${counter+1} : ${playRound(getHumanChoice(button.id),getComputerChoice(random(3)))}`;
        container.appendChild(result);
        counter++;

        if(counter<5 ){
            scoreDiv.textContent = ` The score is :  ${humanScore} for you and ${computerScore} for the computer`;
        } else {
            if(humanScore> computerScore){
                scoreDiv.textContent = ` You win with a score of ${humanScore}  to ${computerScore}`;
                scoreDiv.classList.add('win');
            } else {
                scoreDiv.textContent = ` You loose with a score of ${humanScore}  to ${computerScore}`;
                scoreDiv.classList.add('loose');
            }
            // let replay = document.createElement("button");
            // replay.textContent = 'Rejouer';
            // replay.classList.add('replay');
            // replayDiv.appendChild(replay)
            // replay.addEventListener('click', () => {
            //     rounds = document.querySelectorAll(".rounds");
            //     rounds.remove();
            //     humanScore = 0;
            //     computerScore = 0;
            // })

        }

        console.log("score humain: "+ humanScore)
        console.log("score ordi: "+humanScore)
    })

});


// let playGame = (rounds) => {
//     for(i=1; i<=rounds ; i++){
//         let input = prompt('Rock ,paper or cissors?');
//         playRound(getHumanChoice(input),getComputerChoice(random(3)));
//         console.log("score humain: "+ humanScore)
//         console.log("score ordi: "+computerScore)
//     }
//     if(humanScore> computerScore){
//         return 'You won !';
//     } else if (humanScore < computerScore){
//         return 'You lost';
//     } else{
//         return 'tie';
//     }
// }


// console.log(playGame(5));


