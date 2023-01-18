//Rock paper scissors game
let draw = 0;
let userWin = 0;
let computerWin = 0;

function startGame() {
  const userAnswer = prompt('Play rock paper scissors game');
  return userAnswer;
}

//user input field
//collect data to see what input its

//computer generates rock paper sissors
function getRandomNum() {
  return Math.floor(Math.random() * 3);
}

// convert results
function convertResults() {
  const randomNum = getRandomNum();

  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'sissors';
  }
}
// console.log(convertResults());

//compare results

function compareResults() {
  const userAnswer = startGame();
  const computerResult = convertResults();
  console.log(userAnswer, computerResult);

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

compareResults();

// add to taily

// Prompt user to play again

//if playing continute game

//if stop show results
