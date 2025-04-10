function calculateTax(salary) {
    let amo = 0;
    if (sal < 10000){
        amo = 0
    }
    else if (sal >= 10000 && sal <= 20000){
        amo = (salary * 0.1)
    }
    else if (sal >= 20000 && sal <= 30000){
        amo = (salary * 0.2)
    }
    else {
        amo = (salary * 0.3)
    }
    return amo
}

let sal = parseInt(prompt("Please Enter Your Salary : "))
let tax = calculateTax(sal)
if (tax == 0){
    console.log("You are not required to pay tax.")
}
else{
    console.log(`Your Payable Tax is : Rs. ${tax}`)
}