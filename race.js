let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = true;

let runnerAge = 18;

if(registerEarly && runnerAge >= 18){
  raceNumber += 1000;
}

if(registerEarly && runnerAge > 18){
  console.log(`Runner with race number ${raceNumber} will race at 9:30 am.`);
} else if(runnerAge > 18 && !registerEarly){
  console.log(`Runner with race number ${raceNumber} will race at 11:00 am.`);
} else if(runnerAge < 18){
  console.log(`Youth registrants run at 12:30 pm.  Your race number is ${raceNumber}.`);
} else{
  console.log('Please see the registration desk.');
}
