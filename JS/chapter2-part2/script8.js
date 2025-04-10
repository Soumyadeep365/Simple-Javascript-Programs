function circle(radius){
    return Math.PI * Math.pow(radius, 2);
}

function triangle(base, height){
    return (base * height) / 2;
}

function rectangle(length, width){
    return length * width;
}

function square(side){
    return Math.pow(side, 2);
}

while (true){
    let choise = prompt("\tMenue:-\n\t\t1. Circle\n\t\t2. Triangle\n\t\t3. Rectangle\n\t\t4. Square\n\t\t5. Exit\n\tEnter your choice: ");
    if (choise == '5'){
        console.log("Exiting...");
        break;
    }
    switch(choise){
        case '1':
            let radius = prompt("Enter the radius of the circle: ");
            console.log("Area of Circle = " + circle(radius));
            break;
        case '2':
            let base = prompt("Enter the base of the triangle: ");
            let height = prompt("Enter the height of the triangle: ");
            console.log("Area of Triangle = " + triangle(base, height));
            break;
        case '3':
            let length = prompt("Enter the length of the rectangle: ");
            let width = prompt("Enter the width of the rectangle: ");
            console.log("Area of Rectangle = " + rectangle(length, width));
            break;
        case '4':
            let side = prompt("Enter the side of the square: ");
            console.log("Area of Square = " + square(side));
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}