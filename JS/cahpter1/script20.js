// Q: swap using 3rd variable .

let a = 9
let b = 5

console.log("Before swapping: a = " + a + ", b = " + b)

a = a + b
b = a - b
a = b - a

console.log("After swapping: a = " + a + ", b = " + b)