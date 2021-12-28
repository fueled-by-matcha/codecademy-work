let userName = '';
//customize hello message
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
//create user question
let userQuestion = "Should I give my cat dinner?";
console.log(`${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
//set eightBall to whatever random number
switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
//display eightBall
console.log(`${eightBall}`);
