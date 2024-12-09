let numbersB4: number[] = [1, 12, 5, 18, 7, 10, 3, 14, 6, 9];

for (let i: number = 0; i < numbersB4.length; i++) {
  for (let j: number = i + 1; j < numbersB4.length; j++) {
    if (numbersB4[j] > numbersB4[i]) {
      let temp: number = numbersB4[i];
      numbersB4[i] = numbersB4[j];
      numbersB4[j] = temp;
    }
  }
}

console.log(`Mảng sau khi sắp xếp: ${numbersB4}`);
