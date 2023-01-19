//Rock paper scissors game
let draw = 0;
let userWon = 0;
let computerWon = 0;

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

// show results
function showResults(result) {
  alert(
    result +
      ` Total: draw ${draw}, User Won ${userWon}, Computer Won ${computerWon}`
  );
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
    console.log(`Draw ${draw}`);
    showResults(`Draw ${draw}`);
  } else if (
    //paper > rock
    //sissors > paper
    //Rock > sissors
    (userAnswer == 'p' && computerResult == 'r') ||
    (userAnswer == 's' && computerResult == 'p') ||
    (userAnswer == 'r' && computerResult == 's')
  ) {
    //if user wins add 1 to winner
    userWon++;
    console.log(`User Won ${userWon}`);
    showResults(`User Won ${userWon}`);
  } else {
    //if computer wins add 1 to computer
    console.log(userAnswer, computerResult);
    computerWon++;
    console.log(`Comp Won ${computerWon}`);
    showResults(`Comp Won ${computerWon}`);
  }
}

// Prompt user to play again
function playAgain() {
  if (!window.confirm('Do you want to play again?')) {
    // run game
    console.log('non');
    return;
  }
  console.log('yes');
  getUserInput();
  return;
}

//if playing continute game
