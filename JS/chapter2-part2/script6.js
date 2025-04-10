let side1 = prompt("Enter the length of the 1st side of the triangle: ");
let side2 = prompt("Enter the length of the 2nd side of the triangle: ");
let side3 = prompt("Enter the length of the 3rd side of the triangle: ");

let isequilateral = false;
let isisosceles = false;
let isscalene = false;

if (side1 == side2 && side2 == side3){
    isequilateral = true;
}
else if (side1 == side2 || side2 == side3 || side1 == side3){
    isisosceles = true;
}
else{
    isscalene = true;
}

if (isequilateral){
    alert("The triangle is equilateral.");
}
else if (isisosceles){
    alert("The triangle is isosceles.");
}
else if (isscalene){
    alert("The triangle is scalene.");
}
else{
    alert("The sides cannot form a triangle.");
}