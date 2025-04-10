function isLeapYear(year){
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    else {
        return false;
    }
}

function getDaysInMonth(month, year){
    if (month < 1 || month > 12){
        return "Invalid month";
    }
    if (month == 2){
        if (isLeapYear(year)){
            return 29;
        }
        else {
            return 28;
        }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11){
        return 30;
    }
    else {
        return 31;
    }
}

let month = parseInt(prompt("Enter the month (1-12): "));
let year = parseInt(prompt("Enter the year: "));
let days = getDaysInMonth(month, year);

console.log (`\nThe month ${month} of the year ${year} has ${days} days.`);

