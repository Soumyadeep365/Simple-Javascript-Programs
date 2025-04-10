function remark(marks){
    if (marks > 90){
        return "Too Good";
    }
    else if (marks >= 80 && marks <= 90){
        return "Good";
    }
    else if (marks < 10){
        return "Too Bad";
    }
    else if (marks >= 10 && marks <= 20){
        return "Bad";
    }
    else{
        return "Average";
    }
}

let marks = parseInt(prompt("Enter your marks: "));
let result = remark(marks);

console.log(`You are a ${result} student.`);