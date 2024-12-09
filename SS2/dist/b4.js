"use strict";
let numbersB4 = [1, 12, 5, 18, 7, 10, 3, 14, 6, 9];
for (let i = 0; i < numbersB4.length; i++) {
    for (let j = i + 1; j < numbersB4.length; j++) {
        if (numbersB4[j] > numbersB4[i]) {
            let temp = numbersB4[i];
            numbersB4[i] = numbersB4[j];
            numbersB4[j] = temp;
        }
    }
}
console.log(`Mảng sau khi sắp xếp: ${numbersB4}`);
