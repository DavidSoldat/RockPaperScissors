const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const playGame = () => {
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBnt = document.querySelector('#scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBnt];
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerOptions.forEach((option) => {
      option.addEventListener('click', function () {
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        let playerIcon = document.querySelector('#player');
        let computerIcon = document.querySelector('#computer');

        let playerChoice;
        if (this.innerText === '✊') {
          playerChoice = 'rock';
        } else if (this.innerText === '✋') {
          playerChoice = 'paper';
        } else {
          playerChoice = 'scissors';
        }

        if (computerChoice === 'rock') {
          computerIcon.textContent = '✊';
        } else if (computerChoice === 'paper') {
          computerIcon.textContent = '✋';
        } else {
          computerIcon.textContent = '✌';
        }

        if (playerChoice === 'rock') {
          playerIcon.textContent = '✊';
        } else if (playerChoice === 'paper') {
          playerIcon.textContent = '✋';
        } else {
          playerIcon.textContent = '✌';
        }

        winner(playerChoice, computerChoice);
      });
    });
  };

  const winner = (player, computer) => {
    const result = document.querySelector('#scoreText');
    const playerScoreBoard = document.querySelector('#scorePlayer');
    const computerScoreBoard = document.querySelector('#scoreComputer');

    if (player === computer) {
      result.textContent = 'Tie';
    } else if (player == 'rock') {
      if (computer == 'paper') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == 'scissors') {
      if (computer == 'rock') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == 'paper') {
      if (computer == 'scissors') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
    const reset = document.querySelector('#clear');
    reset.addEventListener('click', function () {
      let playerIcon = document.querySelector('#player');
      let computerIcon = document.querySelector('#computer');
      computerScoreBoard.textContent = 0;
      playerScoreBoard.textContent = 0;
      playerScore = 0;
      computerScore = 0;
      result.textContent = 'Play the game!';
      playerIcon.textContent = '?';
      computerIcon.textContent = '?';
    });
  };
  playGame();
};
game();
