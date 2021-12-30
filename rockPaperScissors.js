//function stores user's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  //check for valid input
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Please enter a valid choice.');
  }
};

//function stores computer's choice
const getComputerChoice = () => {
  //pick random number between 0 and 2
  choice = Math.floor(Math.random() * 3);
  //return a choice for computer
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

//function determines winner
function determineWinner(userChoice, computerChoice){
  //check to see if choices are the same
  if (userChoice === computerChoice){
    return 'The game is a tie';
  }
  //conditions for rock
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer has won the game.';
    } else{
      return 'The user has won the game.';
    }
  }
  //conditions for paper
  if(userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer has won the game.';
    } else{
      return 'The user has won the game.';
    }
  }
  //conditions for scissors
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The computer has won the game.';
    } else {
      return 'The user has won the game.';
    }
  }
}

//function plays the game
function playGame(){
  //get user's choice
  let userChoice = getUserChoice('bomb');
  //cheat code
  if (userChoice === 'bomb'){
    console.log('The user has won the game.');
  } else{
    //get computer choice
    let computerChoice = getComputerChoice();

    //log choices
    console.log(`User has chosen ${userChoice}.`);
    console.log(`Computer has chosen ${computerChoice}.`);

    //log the winner
    console.log(determineWinner(userChoice, computerChoice));
  }
}

//play the game
playGame();
