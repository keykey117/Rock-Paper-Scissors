function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "scissors";
    case 3:
      return "paper";
    default:
      return null;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return -1;
    } else if (computerSelection === "scissors") {
      return 1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return 1;
    } else if (computerSelection === "scissors") {
      return -1;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return 1;
    } else if (computerSelection === "rock") {
      return -1;
    }
  }
}

function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Enter Rock, Paper or Scissors");
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    score += result;
    if (result === 0) {
      console.log(`Draw! Both players played ${playerSelection}`);
    } else if (result === 1) {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (result === -1) {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
  }
  if (score === 0) {
    alert("DRAW! Good effort!");
  } else if (score > 0) {
    alert("You won!");
  } else {
    alert("You lost, try again next time");
  }
}

game();
