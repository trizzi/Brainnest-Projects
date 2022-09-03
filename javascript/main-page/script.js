//This code takes care of the scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//define win, lose or tie
const win = 'You Win this round!';
const lose = 'You Lose this round!';
const tie = 'This round is a tie!';

let computerSelection = ['rock', 'paper', 'scissors'];
let computerPlay = Math.floor(
  Math.random() * computerSelection.length
  // Returns random decimal numbers from 0 to less than one
  // And multiplies it with the index number from the computerselection array
);

// Returns a whole number
console.log(
  'The computer choose ' + computerPlay,
  computerSelection[computerPlay]
);

// Prompt Message
let playerSelection = prompt(
  'lets play rock paper scissors'
);
console.log('you choose ' + playerSelection.toLowerCase());

// Conditions
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === 'rock' &&
      computerSelection[computerPlay] === 'scissors') ||
    (playerSelection.toLowerCase() === 'paper' &&
      computerSelection[computerPlay] === 'rock') ||
    (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection[computerPlay] === 'paper')
  ) {
    playerScore++;
    return win;
  } else if (
    (playerSelection.toLowerCase() === 'rock' &&
      computerSelection[computerPlay] === 'paper') ||
    (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection[computerPlay] === 'rock') ||
    (playerSelection.toLowerCase() === 'paper' &&
      computerSelection[computerPlay] === 'scissors')
  ) {
    computerScore++;
    return lose;
  } else if (
    playerSelection.toLowerCase() ===
    computerSelection[computerPlay]
  ) {
    tieScore++;
    return tie;
  } else {
    return 'you must input rock, paper or scissors';
  }
}

console.log(playRound(playerSelection, computerSelection));

//loop
function game() {
  for (let i = 0; i < 4; i++) {
    let playerSelection = prompt(
      'lets play rock paper scissors'
    );

    console.log(
      'you choose ' + playerSelection.toLowerCase()
    );

    let computerSelection = ['rock', 'paper', 'scissors'];
    let computerPlay = Math.floor(
      Math.random() * computerSelection.length
      // Returns random decimal numbers from 0 to less than one
      // And multiplies it with the index number from the computerselection array
    );
    // Retuens a whole number
    console.log(
      'The computer choose ' + computerPlay,
      computerSelection[computerPlay]
    );

    console.log(
      playRound(playerSelection, computerSelection)
    );
  }
  if (playerScore > computerScore) {
    return 'You Win this game.';
  }
  if (playerScore == computerScore) {
    return 'This game is a tie.';
  } else {
    return 'You Lose this game.';
  }
}

console.log(game()); //play the loop

console.log(
  'Your final score is ' +
    playerScore +
    ' wins ' +
    computerScore +
    ' loses and ' +
    tieScore +
    ' draws.'
);

let score = playerScore + computerScore + tieScore;

console.log(
  'You played this game ' + score + ' times.Game over!!!'
);

// reload page
const reloadButton = document.querySelector('.btn');

function reload() {
  reload = location.reload();
}

reloadButton.addEventListener('click', (e) => {
  reload();
  console.log('click');
});

