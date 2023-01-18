//Rock paper scissors game
let draw = 0;
let userWin = 0;
let computerWin = 0;

function getUserInput() {
  const userAnswer = prompt(
    'Please enter R, P or S to signify my choice of rock, paper, or scissors'
  );
  // if (!userAnswer) {
  //   prompt('please enter somethiing');
  // }
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
  // let userAnswer = getUserInput();
  let userAnswer = 'r';
  let computerResult = getComputerResult();
  console.log(userAnswer, computerResult);

  //if tie draw add 1
  if (userAnswer == computerResult) {
    draw++;
    console.log(`draw ${draw}`);
  } else if (
    (userAnswer == 'p' && computerResult == 'r') ||
    (userAnswer == 's' && computerResult == 'p') ||
    (userAnswer == 'r' && computerResult == 's')
  ) {
    userWin++;
    console.log(`user win ${userWin}`);
  } else {
    console.log(userAnswer, computerResult);
    computerWin++;
    console.log(`comp win ${computerWin}`);
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
