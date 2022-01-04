let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//function generates target number
function generateTarget(){
  return Math.floor(Math.random() * 10);
}

//function compares guesses and returns the winner
function compareGuesses(userGuess, computerGuess, target){
  let userDiff = getAbsoluteDistance(userGuess, target);
  let computerDiff = getAbsoluteDistance(computerGuess, target);
  //check to see if user guess wins
  if(userDiff < computerDiff){
    return true;
  } else {
    return false;
  }
}

//function updates score
function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

//function increases round number
function advanceRound(){
  currentRoundNumber += 1;
}

//function calculates the absolute distance
function getAbsoluteDistance(guess, target){
  return Math.abs(target - guess);
}
