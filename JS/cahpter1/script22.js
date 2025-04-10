function getRemainder(a, b) {
    while (a >= b){
        a = a-b
    }
    return a
}

let num1 = prompt("Enter number 1 : ")
let num2 = prompt("Enter number 2 : ")

if (num1 >= num2) {
    console.log(`Remainder of ${num1} divided by ${num2} is: ${getRemainder(num1, num2)}`)
}
else{
    let temp = num1
    num1 = num2
    num2 = temp
    
    console.log(`Swapping numbers: num1 = ${num1}, num2 = ${num2}`)

    console.log(`Remainder of ${num1} divided by ${num2} is: ${getRemainder(num1, num2)}`)
}