// Today I have decided to work on a simple program to change the temperature from
// Kelvin to Celsius, Fahrenheit and Newton just for interest sake. I will be using JavaScript to write the program.

// Kelvin to Celsius
const kelvin = 295;
console.log(`The temperature to convert is ${kelvin} degrees Kelvin.`)

const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius.`);

// Celsius to FahrenheitZ
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);