// Q: wap to convart a days to years : months : days format .

let days = 2535; // days

let years = Math.floor(days / 365);
let months = Math.floor((days % 365) / 30);
let remainingDays = days % 30;

console.log(`The days is = ${years} : ${months} : ${remainingDays}`);