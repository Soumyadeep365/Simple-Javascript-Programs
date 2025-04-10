let age = prompt("Enter your age:");
let residence = prompt("Press 1 if you are a resident of India, otherwise press 0 : ");
let daysStayed = prompt("Enter the number of days you have stayed in India: ");
let isEligible = false;

if (age >= 18 && residence == 1 && daysStayed >= 5){
    isEligible = true;
}
else{
    isEligible = false;
}

if (isEligible){
    alert("You are eligible to vote in India.");
}
else{
    alert("You are not eligible to vote in India.");
}