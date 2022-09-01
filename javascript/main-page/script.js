let playerSelection = prompt(
  'Do you choose rock, paper or scissors?'
);
let computerSelection = Math.random();

if (computerSelection < 0.34) {
  computerSelection = 'rock';
} else if (computerSelection <= 0.67) {
  computerSelection = 'paper';
} else {
  computerSelection = 'scissors';
}

let compare = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection) {
    return 'The result is a tie!';
  }

  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'scissors') {
      return 'You Win! Rock beats Scissors"';
    } else {
      return 'You Lose! Paper beats Rock"';
    }
  }

  if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'rock') {
      return 'You win! Paper beats Rock';
    } else {
      if (computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
      }
    }
  }

  if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose! Rock beats Scissors';
    } else {
      if (computerSelection === 'paper') {
        return 'You Win! Scissors beats Rock';
      }
    }
  }
};
console.log('User Selection: ' + playerSelection);
console.log('Computer Selection: ' + computerSelection);
console.log(compare(playerSelection, computerSelection));
