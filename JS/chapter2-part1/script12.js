let buyAmo = 1000
let sellAmo = 1200

let profit = sellAmo - buyAmo

if (profit > 0) {
    console.log("Profit is: " + profit)
}
else if (profit < 0) {
    console.log("Loss is: " + Math.abs(profit))
}
else {
    console.log("No profit no loss")
}