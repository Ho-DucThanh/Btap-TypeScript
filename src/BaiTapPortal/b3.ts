let firstName: string = "duc";
let lastName: string = "thanh";
let fullName: string = "";

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
fullName = firstName + " " + lastName;

console.log(fullName);
