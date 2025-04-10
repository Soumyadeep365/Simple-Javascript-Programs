let x1 = 5
let y1 = 10

let x2 = 15
let y2 = 61

console.log(`Coordinates of the first point are: (${x1}, ${y1})`)
console.log(`Coordinates of the second point are: (${x2}, ${y2})`)

let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
console.log("Distance between the two points is: " + distance)