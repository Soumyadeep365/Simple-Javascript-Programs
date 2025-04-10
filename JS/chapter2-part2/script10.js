function checkMarks(marks) {
    if (marks > 80){
        return "A";
    }
    else if (marks <= 80 && marks >= 60){
        return "B";
    }
    else if (marks < 60 && marks >= 40){
        return "C";
    }
    else{
        return "D";
    }
}

let marks = prompt("Enter your marks: ");

let grade = checkMarks(marks);

console.log(`Your grade is: ${grade}`);