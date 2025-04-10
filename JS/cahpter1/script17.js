// Q: Enter time in seconds and find it in hours : minutes : seconds format .

let time = 25300; // seconds

let hours = Math.floor(time / 3600);
let minutes = Math.floor((time % 3600) / 60);
let seconds = time % 60;

console.log(`The time is = ${hours} : ${minutes} : ${seconds}`);
