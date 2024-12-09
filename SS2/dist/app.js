"use strict";
let numbersList = [1, 2, 3, 4, 5];
let cars = {
    type: "Sedan",
    model: "Civic",
    year: 2020,
};
let roles = ["Admin", "User"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["MOD"] = 11] = "MOD";
    Role[Role["USER"] = 12] = "USER";
})(Role || (Role = {}));
let userRole = Role.MOD;
console.log(userRole);
let randomValues;
randomValues = true;
console.log(randomValues);
let a = "1";
parseInt(a.toString());
console.log(typeof a);
const user = { name: "duc thanh", age: 10, email: "abc@example.com" };
let u1 = { name: "Administrator", age: 30 };
function map(arr, fn) {
    let result = [];
    for (let i in arr) {
        let mapElement = fn(arr[i], +i);
        result.push(mapElement);
    }
    return result;
}
let resultArr = map([3, 5, 7, 9], (element, index) => element * index);
console.log(resultArr);
