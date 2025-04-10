let a = parseInt(prompt("Enter the value of a : "))
let b = parseInt(prompt("Enter the value of b : "))
let c = parseInt(prompt("Enter the value of c : "))

let d = b * b - 4 * a * c
if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a)
    let x2 = (-b - Math.sqrt(d)) / (2 * a)
    console.log(`Roots are real and different: x1 = ${x1}, x2 = ${x2}`)
}
else if (d == 0) {
    let x = -b / (2 * a)
    console.log(`Roots are real and same: x1 = x2 = ${x}`)
}
else {
    let realPart = (-b / (2 * a)).toFixed(2)
    let imaginaryPart = (Math.sqrt(-d) / (2 * a)).toFixed(2)
    console.log(`Roots are complex and different: x1 = (${realPart} + ${imaginaryPart}i), x2 = (${realPart} - ${imaginaryPart}i)`)
}