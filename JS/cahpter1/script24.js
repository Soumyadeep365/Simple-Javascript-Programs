let p = 55
let r = 10
let t = 22

let amo = p * ((1 + (r / 100)) ** t)
let CI = amo - p

console.log("Compound Interest is: " + CI)