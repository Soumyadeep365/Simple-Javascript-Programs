let num = 55
let c = 0

while (num > 0) {
    let digit = num % 10
    c++
    num = Math.floor(num / 10)
}
if (c === 1) {
    console.log("Number is a single digit number")
}
else {
    console.log("Number is not a single digit number")
}