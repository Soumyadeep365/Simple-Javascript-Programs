let basicSalary = parseInt(prompt("Please Enter Your Basic Salary : "))
let hra = 0
let da = 0

if (basicSalary <= 10000){
    hra = basicSalary * 0.2
    da = basicSalary * 0.8
}
else if (basicSalary <= 20000){
    hra = basicSalary * 0.25
    da = basicSalary * 0.9
}
else{
    hra = basicSalary * 0.3
    da = basicSalary * 0.95
}

let grossSalary = basicSalary + hra + da
console.log(`Your Basic Salary is : Rs. ${basicSalary}`)
console.log(`Your HRA is : Rs. ${hra}`)
console.log(`Your DA is : Rs. ${da}`)
console.log(`Your Gross Salary is : Rs. ${grossSalary}`)