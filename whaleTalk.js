//translate this into whale talk
let input = 'turpentine and turtles';
//vowels to be extracted
const vowels = ['a', 'e', 'i', 'o', 'u'];
//store vowels from input string
let resultArray = [];
//loop to iterate through each letter of input
for(let i = 0; i < input.length; i++){
  //console.log(i);
  //loop to iterate through vowels array
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(vowels[j]);
    }
  }
  //double the vowels e and u
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  }
  if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
}
//join the array together and put in uppercase
console.log(resultArray.join('').toUpperCase());
