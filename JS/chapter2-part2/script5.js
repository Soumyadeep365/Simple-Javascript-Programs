let side1 = promot ("enter the length of the 1st side of the triangle: ")
let side2 = prompt ("enter the length of the 2nd side of the triangle: ")
let side3 = prompt ("enter the length of the 3rd side of the triangle: ")

let isTriangle = false

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
    isTriangle = true
}
else{
    isTriangle = false
}

if (isTriangle){
    alert("The sides can form a triangle.")
}else{
    alert("The sides cannot form a triangle.")
}