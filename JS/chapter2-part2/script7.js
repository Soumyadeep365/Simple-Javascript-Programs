let side1 = prompt("Enter the length of the 1st side of the triangle: ");
let side2 = prompt("Enter the length of the 2nd side of the triangle: ");
let side3 = prompt("Enter the length of the 3rd side of the triangle: ");

let isacute = false;
let isobtuse = false;
let isrigtangle = false;

if (side1 ** 2 + side2 ** 2 == side3 ** 2 || side1 ** 2 + side3 ** 2 == side2 ** 2 || side2 ** 2 + side3 ** 2 == side1 ** 2){
    isrigtangle = true;
}
else if (side1 ** 2 + side2 ** 2 < side3 ** 2 || side1 ** 2 + side3 ** 2 < side2 ** 2 || side2 ** 2 + side3 ** 2 < side1 ** 2){
    isobtuse = true;
}
else if (side1 ** 2 + side2 ** 2 > side3 ** 2 || side1 ** 2 + side3 ** 2 > side2 ** 2 || side2 ** 2 + side3 ** 2 > side1 ** 2){
    isacute = true;
}
else{
    isobtuse = false;
    isrigtangle = false;
    isacute = false;
}

if (isrigtangle){
    alert("The triangle is right angled.");
}
else if (isobtuse){
    alert("The triangle is obtuse.");
}
else if (isacute){
    alert("The triangle is acute.");
}
else{
    alert("The sides cannot form a triangle.");
}