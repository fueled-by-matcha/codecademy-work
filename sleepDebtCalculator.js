//this function takes a weekday and returns the amount of sleep
function getSleepHours (day) {
  day = day.toLowerCase();
  //switch statement to return hours slept
  switch (day) {
    case 'sunday':
      return 8;
      break;
    case 'monday':
      return 6
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 9;
      break;
    default:
      return 'Please enter a day of the week.';
      break;
  }
}

//this function calls getSleepHours for each day and returns total hours slept
const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');

//this function returns the ideal hours the user wants to sleep
const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

//This function calculates the sleep debt and outputs a message to the user
const calculateSleepDebt = () => {
  //actual hours slept
  let actualSleepHours = getActualSleepHours();
  //ideal hours user wants to sleep
  let idealSleepHours = getIdealSleepHours(7.5);
  //difference between actual and ideal hours
  let sleepDiff = 0;

  //check to see if actual and ideal are the same
  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours){
    sleepDiff = actualSleepHours - idealSleepHours;
    console.log(`You got more sleep than needed.  You slept ${sleepDiff} more hours than needed.`);
  } else{
    sleepDiff = idealSleepHours - actualSleepHours;
    console.log(`You should get more rest.  You slept ${sleepDiff} hours less than your ideal amount of sleep.`);
  }
}

calculateSleepDebt();
