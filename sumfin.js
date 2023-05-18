const title = document.getElementById('titleBar');
const button = document.getElementsByTagName('button');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
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
            return("YOU WIN PAPER BEATS ROCK!");
        case "PAPERSCISSORS":
            return("YOU LOSE, SCISSORS BEATS PAPER!");
        case "SCISSORSPAPER":
            return("YOU WIN SCISSORS BEATS PAPER!");
        case "SCISSORSROCK":
            return("YOU LOSE, ROCK BEATS SCISSORS!");
        case "ROCKPAPER":
            return("YOU LOSE, PAPER BEATS ROCK!");
        case "ROCKSCISSORS":
            return("YOU WIN, ROCK BEATS SCISSORS!");
        default:
            return("TIE GAME!");
    };
}

function reset() {
    computerScore.textContent = "BOT " + botScore;
    userScore.textContent = "PLAYER " + playerScore;
    botScore = botScore - botScore;
    playerScore = playerScore - playerScore;
    
}

for (let item of button){
  item.addEventListener('click', () => {
      const outcome = playRound(item.id);
      h2.appendChild(results);
      let winLoss = outcome[4];

      switch (winLoss) {
        case "W":
          playerScore++;
          break;
        case "L":
          botScore++;
          break;
      }

      computerScore.textContent = "BOT " + botScore;
      userScore.textContent = "PLAYER " + playerScore;
      
      if (playerScore === 5) {
        results.textContent = 'WINNER: PLAYER';
        title.textContent = "GAME OVER";
        reset();
      } else if (botScore === 5) {
        results.textContent = 'WINNER: BOT';
        title.textContent = "GAME OVER";
        reset();
      } else {
        results.textContent = outcome;
        title.textContent = "ROCK PAPER SUSSORS"
      }

})};