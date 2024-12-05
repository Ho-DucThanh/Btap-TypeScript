"use strict";
let firstName = "duc";
let lastName = "thanh";
let fullName = "";
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
fullName = firstName + " " + lastName;
console.log(fullName);
