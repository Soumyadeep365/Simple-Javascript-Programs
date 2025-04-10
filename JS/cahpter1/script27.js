let time1 = []
let time2 = []

console.log("Enter the 1st time : ")
for (let i = 0; i<3; i++){
    time1.push(parseInt(prompt("Enter the time in hours : minutes : seconds format one by one : ")))
}

console.log("Enter the 2nd time : ")
for (let i = 0; i<3; i++){
    time2.push(parseInt(prompt("Enter the time in hours : minutes : seconds format one by one : ")))
}

let totalTime = ((time1[0] + time2[0]) * 3600) + ((time1[1] + time2[1]) * 60) + (time1[2] + time2[2])
let hours = Math.floor(totalTime / 3600)
let minutes = Math.floor((totalTime % 3600) / 60)
let seconds = totalTime % 60


console.log(`\nThe 1st time is = ${time1[0]} : ${time1[1]} : ${time1[2]}`)
console.log(`\nThe 2nd time is = ${time2[0]} : ${time2[1]} : ${time2[2]}`)
console.log(`\nThe total time is = ${hours} : ${minutes} : ${seconds}`)