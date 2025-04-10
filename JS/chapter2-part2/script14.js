function find_quadrant(x, y){
    if (x > 0 && y > 0){
        return "Frist Quadrant"
    }
    else if (x < 0 && y > 0){
        return "Second Quadrant"
    }
    else if (x < 0 && y < 0){
        return "Third Quadrant"
    }
    else if (x > 0 && y < 0){
        return "Fourth Quadrant"
    }
    else if (x != 0 && y == 0){
        return "X-axis"
    }
    else if (x == 0 && y != 0){
        return "Y-axis"
    }
    else{
        return "Origin"
    }
}

let x = parseInt(prompt("Enter the value of x : "))
let y = parseInt(prompt("Enter the value of y : "))
let result = find_quadrant(x, y)

console.log (`\nThe point (${x}, ${y}) is in the ${result}.`)