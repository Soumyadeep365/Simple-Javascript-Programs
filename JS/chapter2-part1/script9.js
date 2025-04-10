let length = prompt("Enter a length in meters:")
let breadth = prompt("Enter a breadth in meters:")
let area_rec = length * breadth

let radius = prompt("Enter a radius in meters:")
let area_cir = Math.PI * radius * radius    

if (area_rec > area_cir) {
    console.log("Area of rectangle is greater than area of circle")
}
else if (area_rec < area_cir) {
    console.log("Area of circle is greater than area of rectangle")
}
else {
    console.log("Area of rectangle is equal to area of circle")
}