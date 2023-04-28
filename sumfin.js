//Project Planning//
// have player input a command word //
// player input vs bot input //
// display winner //
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    let filter = playerSelection.toUpperCase();
    let combo = filter + computerSelection;
    switch (combo) {
        case "PAPERROCK":
            return("You win, paper beats rock!");
        case "PAPERSCISSORS":
            return("You lose, scissors beats paper!");
        case "SCISSORSPAPER":
            return("You win, scissors beats paper!");
        case "SCISSORSROCK":
            return("You lose, rock beats scissors!");
        case "ROCKPAPER":
            return("You lose, paper beats rock!");
        case "ROCKSCISSORS":
            return("You win, rock beats scissors!");
        default:
            return("Tie game, you picked the same thing!");
    };
}

function game() {
    let games = 0
    do {
        let computerSelection = getComputerChoice();
        let result = (playRound(playerSelection, computerSelection));
        let winLoss = result[4];
        switch (winLoss) {
            case "w":
                console.log("winner: player"); playerScore++;
                break;
            case "l":
                console.log("winner: bot"); botScore++;
                break;
            default:
                console.log("it'\s a tie");
                break;
        };
        console.log("player " + playerScore)
        console.log("bot " + botScore)
        games++;
    } while (games < 5);
        
    if (playerScore > botScore) {
        console.log("You Win!")
    } else if (botScore > playerScore) {
        console.log("You Lose!")
    } else {
        console.log("TIE GAME")
    };  
    return("GAME OVER");
};

let botScore = 0;
let playerScore = 0;
const playerSelection = "pApEr"
let computerSelection = getComputerChoice();
console.log(game());