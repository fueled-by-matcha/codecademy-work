//represents temperature in Kelvin
const kelvin = 293;
//temperature in Celsius
let celsius = kelvin - 273;
//converts Celsius temp to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//rounds down calculated fahrenheit number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//converts Celsius to Newton
let newton = celsius * (33 / 100);
//rounds down Newton value
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
