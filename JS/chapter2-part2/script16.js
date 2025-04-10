let unit = parseInt(prompt("Please Tell Us The Amount of Your Electricity Unit : "))
let bill = 0

if (unit <= 50){
    bill = unit * 0.5
}
else if (unit <= 150){
    bill = (50 * 0.5) + ((unit - 50) * 0.75)
}
else if (unit <= 250){
    bill = (50 * 0.5) + (100 *0.75) + ((unit - 150) * 1.2) 
}
else{
    bill = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + ((unit - 250) * 1.5)
}

console.log (`Your Electricity Bill is : Rs. ${bill}`)