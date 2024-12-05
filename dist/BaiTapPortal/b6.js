"use strict";
function luythua(a, n) {
    let numA = parseFloat(a.toString());
    let numN = parseFloat(n.toString());
    let result = 1;
    if (isNaN(numA) || isNaN(numN)) {
        console.log("Invalid input");
        return NaN;
    }
    for (let i = 1; i <= numN; i++) {
        result *= numA;
    }
    return result;
}
function giaithua(a) {
    let numA = parseFloat(a.toString());
    if (isNaN(numA)) {
        console.log("Invalid input");
        return NaN;
    }
    let result = 1;
    for (let i = 1; i <= numA; i++) {
        result *= i;
    }
    return result;
}
function canbac2(a) {
    let numA = parseFloat(a.toString());
    if (isNaN(numA)) {
        console.log("Invalid input");
        return NaN;
    }
    return Math.sqrt(numA);
}
console.log(luythua(2, 3));
console.log(giaithua(5));
console.log(canbac2(16));
