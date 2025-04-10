let amo = 485;

let note2000 = 0,
    note500 = 0,
    note200 = 0,
    note100 = 0,
    note50 = 0,
    note20 = 0,
    note10 = 0,
    note5 = 0,
    note2 = 0,
    note1 = 0;

if (amo >= 2000) {
    note2000 = Math.floor(amo / 2000);
    amo %= 2000;
}
if (amo >= 500) {
    note500 = Math.floor(amo / 500);
    amo %= 500;
}
if (amo >= 200) {
    note200 = Math.floor(amo / 200);
    amo %= 200;
}
if (amo >= 100) {
    note100 = Math.floor(amo / 100);
    amo %= 100;
}
if (amo >= 50) {
    note50 = Math.floor(amo / 50);
    amo %= 50;
}
if (amo >= 20) {
    note20 = Math.floor(amo / 20);
    amo %= 20;
}
if (amo >= 10) {
    note10 = Math.floor(amo / 10);
    amo %= 10;
}
if (amo >= 5) {
    note5 = Math.floor(amo / 5);
    amo %= 5;
}
if (amo >= 2) {
    note2 = Math.floor(amo / 2);
    amo %= 2;
}
if (amo >= 1) {
    note1 = Math.floor(amo / 1);
    amo %= 1;
}

console.log("2000:", note2000);
console.log("500:", note500);
console.log("200:", note200);
console.log("100:", note100);
console.log("50:", note50);
console.log("20:", note20);
console.log("10:", note10);
console.log("5:", note5);
console.log("2:", note2);
console.log("1:", note1);
