console.log("\t Good Morning Sir ! \n\n")
let name = prompt("\tPlease Enter Your Name : ")
console.log(`\tWelcome ${name} !\n\n`)
let unit = parseInt(prompt("\tPlease Tell Us The Amount of Your Electricity Unit :: "))
let bill = 0
console.log("\tCalculating Your Bill...\n")
console.log("\tPlease Wait...\n")
if (unit <=200){
    bill = unit * 1
}
else if (unit >= 201 && unit <= 400){
    bill = unit * 2
}
else if (unit >= 401 && unit <= 600){
    bill = unit * 3
}
else{
    bill = unit * 4
}
let sCharge = 0
let finalBill = 0
if (bill > 500){
    sCharge = bill * 0.15
    finalBill = bill + sCharge
}

setTimeout(() => {
    console.log("\n\n\t________________________________________________________________________\t\n\n")
    console.log(`\tName : ${name}\t\t\t Unit Consumed : ${unit}`)
    console.log(`\tNet Amount of Your bill is : Rs. ${bill}`)
    console.log(`\n\tYou Must Have to Pay 15 Percent Surcharge on Your Net ammount\n\tif Net amount is exceeds Rs. 500 !\n`)
    console.log(`\tYour Surcharge is : Rs. ${sCharge}`)
    console.log(`\t__________________________________________________\t\t\n`)
    console.log(`\tTotal Amount of Your bill is :: Rs. ${finalBill}\n`)
    console.log(`\t__________________________________________________\t\t\n`)
    console.log("\tYou Must Have to Pay Your Bill In Between 15 Days !\n\tEither You Have to Pay Double Surcharge !\n\n")
    console.log("\t\tTHANK YOU SIR !\tHAVE A NICE DAY !!!\n\t\tVISIT AGAIN !!")
    console.log("\n\n\t________________________________________________________________________\t\n\n")
}, 1000);