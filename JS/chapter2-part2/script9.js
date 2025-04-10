function season(month){
    if (month == 12 || month == 1 || month == 2){
        return "Winter Season";
    }
    else if (month == 3 || month == 4 || month == 5){
        return "Summer Season";
    }
    else if (month == 6 || month == 7 || month == 8){
        return "Monsoon Season";
    }
    else if (month == 9 || month == 10 || month == 11){
        return "Autumn Season";
    }
    else{
        return "Invalid Month";
    }
}

let month = parseInt(prompt("Enter the month number (1-12): "));

let result = season(month);

console.log("The season is: " + result);