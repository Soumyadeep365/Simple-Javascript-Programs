let a = 55
let b = 10
let c = 22

if (a > b && a > c) {
    console.log("a is the largest number: " + a)
}
else if (b > a && b > c) {
    console.log("b is the largest number: " + b)
}
else if (c > a && c > b) {
    console.log("c is the largest number: " + c)
}
else {
    console.log("All numbers are equal")
}