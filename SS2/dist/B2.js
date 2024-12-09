"use strict";
let numbersB2 = [1, 12, 5, 18, 7, 10, 3, 14, 6, 9];
const max = Math.max(...numbersB2);
const indexMax = numbersB2.indexOf(max);
const min = Math.min(...numbersB2);
const indexMin = numbersB2.indexOf(min);
console.log(`Giá trị lớn nhất là: ${max} có index là: ${indexMax}`);
console.log(`Giá trị nhỏ nhất là: ${min} có index là: ${indexMin}`);
