//This code takes care of the scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//define win, lose or tie
const win = 'You Win this round!';
const lose = 'You Lose this round!';
const tie = 'This round is a tie!';

const play = (computerPlay) => {
  let computerSelection = ['rock', 'paper', 'scissors'];
  let computerPlay = Math.floor(
    Math.random() * computerSelection.length
    // Returns random decimal numbers from 0 to less than one
    // And multiplies it with the index number from the computerselection array
  );
  return computerPlay;
};

// Retuens a whole number
console.log('The computer choose ' + play());

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

    2; // Retuens a whole number
    console.log('The computer choose ' + play());

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

// let computerSelection = ['rock', 'paper', 'scissors'];
// let computerPlay = Math.floor(
//   Math.random() * computerSelection.length
// );

// console.log(
//   'The computer choose ' + computerPlay,
//   computerSelection[computerPlay]
// );

// let playerSelection = prompt(
//   'Do you choose rock, paper or scissors?'
// );
// let computerPlay = Math.random();

// if (computerPlay < 0.34) {
//   computerPlay = 'rock';
// } else if (computerPlay <= 0.67) {
//   computerPlay = 'paper';
// } else {
//   computerPlay = 'scissors';
// }

// const playRound = (playerSelection, computerSelection) => {
//   if (playerSelection.toLowerCase() === computerSelection) {
//     return 'The result is a tie!';
//   }

//   if (playerSelection.toLowerCase() === 'rock') {
//     if (computerSelection === 'scissors') {
//       return 'You Win! Rock beats Scissors"';
//     } else {
//       return 'You Lose! Paper beats Rock"';
//     }
//   }

//   if (playerSelection.toLowerCase() === 'paper') {
//     if (computerSelection === 'rock') {
//       return 'You win! Paper beats Rock';
//     } else {
//       if (computerSelection === 'scissors') {
//         return 'You Lose! Scissors beats Paper';
//       }
//     }
//   }

//   if (playerSelection.toLowerCase() === 'scissors') {
//     if (computerSelection === 'rock') {
//       return 'You lose! Rock beats Scissors';
//     } else {
//       if (computerSelection === 'paper') {
//         return 'You Win! Scissors beats Rock';
//       }
//     }
//   }
// };

// const computerSelection = computerPlay;
// console.log('Player Selection: ' + playerSelection);
// console.log('Computer Selection: ' + computerSelection);
// console.log(playRound(playerSelection, computerSelection));
