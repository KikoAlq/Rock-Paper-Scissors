const title = document.getElementById('titleBar');
const button = document.getElementsByTagName('button');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const h1 = document.querySelector('h1');
const results = document.createElement('div');
results.style.fontSize = "40px";
let botScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[choice];
}

function playRound(playerSelection) {
    let filter = playerSelection.toUpperCase();
    let combo = filter + getComputerChoice();
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

function reset() {
    computerScore.textContent = "Bot " + botScore;
    userScore.textContent = "Player " + playerScore;
    botScore = botScore - botScore;
    playerScore = playerScore - playerScore;
    
}

for (let item of button){
  item.addEventListener('click', () => {
      const outcome = playRound(item.id);
      h1.appendChild(results);
      let winLoss = outcome[4];

      switch (winLoss) {
        case "w":
          playerScore++;
          break;
        case "l":
          botScore++;
          break;
      }

      computerScore.textContent = "Bot " + botScore;
      userScore.textContent = "Player " + playerScore;
      
      if (playerScore === 5) {
        results.textContent = 'Winner: Player';
        title.textContent = "GAME OVER";
        reset();
      } else if (botScore === 5) {
        results.textContent = 'Winner: Bot';
        title.textContent = "GAME OVER";
        reset();
      } else {
        results.textContent = outcome;
        title.textContent = "First to five wins!"
      }

})};