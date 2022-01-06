let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//remove last string
secretMessage.pop();

console.log(secretMessage.length);
//add two strings to end of array
secretMessage.push('to', 'program');
//replace easily with right
const index = secretMessage.indexOf('easily');
secretMessage[index] = 'right';
//remove first string
secretMessage.shift();
//add word to beginning of array
secretMessage.unshift('Programming');
//replace elements with one word
secretMessage.splice(6, 5, 'know');
//join as sentence
console.log(secretMessage.join(' '));
