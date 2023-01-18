//Rock paper scissors game
let draw = 0;
let userWin = 0;
let computerWin = 0;

function getUserInput() {
  const userAnswer = prompt(
    'Please enter R, P or S to signify my choice of rock, paper, or scissors'
  );
  return userAnswer;
}

//user input field
//collect data to see what input its

//computer generates rock paper sissors
function getComputerResult() {
  const randomNum = Math.floor(Math.random() * 3);
  const rockPaperScissorsArry = ['r', 'p', 's'];

  return rockPaperScissorsArry[randomNum];
}

//compare results

function compareResults() {
  const userAnswer = getUserInput();
  const computerResult = getComputerResult();
  console.log(userAnswer, computerResult);
  userAnswer = userAnswer.toLowerCase;

  //if tie draw add 1
  if (userAnswer === computerResult) {
    draw = +1;
    console.log(draw);
  }

  //paper > rock

  //sissors > paper
  //Rock > sissors

  //if user wins add 1 to winner
  //if computer wins add 1 to computer
}

// compareResults();

// add to taily

// Prompt user to play again

//if playing continute game

//if stop show results
