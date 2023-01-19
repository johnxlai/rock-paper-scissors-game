//Rock paper scissors game
let draw = 0;
let userWon = 0;
let computerWon = 0;

//collect data to see what input its
function getUserInput() {
  let userAnswer = prompt(
    'Please enter r, p or s to signify my choice of rock, paper, or scissors'
  );
  return userAnswer;
}

//computer generates rock paper sissors
function getComputerResult() {
  const randomNum = Math.floor(Math.random() * 3);
  const rockPaperScissorsArry = ['r', 'p', 's'];

  return rockPaperScissorsArry[randomNum];
}

// show results
function showResults(result) {
  alert(
    result +
      ` Total: draw ${draw}, User Won ${userWon}, Computer Won ${computerWon}`
  );
  playAgain();
}

// End Game
function thankYouforPlaying() {
  alert('thank you for playing');
}

//compare results
function startGame() {
  let userAnswer = getUserInput();
  //End game if user is blank
  if (!userAnswer) {
    thankYouforPlaying();
    return;
  }

  userAnswer = userAnswer.toLowerCase();

  let computerResult = getComputerResult();

  //if tie draw add 1
  if (userAnswer == computerResult) {
    draw++;

    showResults(`Draw This Round`);
  } else if (
    //paper > rock || sissors > paper || Rock > sissors
    (userAnswer == 'p' && computerResult == 'r') ||
    (userAnswer == 's' && computerResult == 'p') ||
    (userAnswer == 'r' && computerResult == 's')
  ) {
    //if user wins add 1 to winner
    userWon++;
    showResults(`User Won This Round`);
  } else {
    //if computer wins add 1 to computer
    computerWon++;
    showResults(`Comp Won This Round`);
  }
}

// Prompt user to play again
function playAgain() {
  if (!window.confirm('Do you want to play again?')) {
    // End Game
    thankYouforPlaying();
  }
  //Run game Again
  startGame();
}

//Inital Load
startGame();
