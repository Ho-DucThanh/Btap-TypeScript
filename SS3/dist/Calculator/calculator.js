"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Không thể chia cho 0.");
        }
        return a / b;
    }
}
class Main {
    constructor() {
        this.calculator = new Calculator();
    }
    run() {
        let isRunning = true;
        while (isRunning) {
            const choice = prompt(`Menu:
        1. Cộng hai số
        2. Trừ hai số
        3. Nhân hai số
        4. Chia hai số
        5. Dừng chương trình
        Nhập lựa chọn của bạn:`);
            switch (choice) {
                case "1": {
                    const a = parseFloat(prompt("Nhập số thứ nhất:") || "0");
                    const b = parseFloat(prompt("Nhập số thứ hai:") || "0");
                    alert(`Kết quả: ${this.calculator.add(a, b)}`);
                    break;
                }
                case "2": {
                    const a = parseFloat(prompt("Nhập số thứ nhất:") || "0");
                    const b = parseFloat(prompt("Nhập số thứ hai:") || "0");
                    alert(`Kết quả: ${this.calculator.subtract(a, b)}`);
                    break;
                }
                case "3": {
                    const a = parseFloat(prompt("Nhập số thứ nhất:") || "0");
                    const b = parseFloat(prompt("Nhập số thứ hai:") || "0");
                    alert(`Kết quả: ${this.calculator.multiply(a, b)}`);
                    break;
                }
                case "4": {
                    const a = parseFloat(prompt("Nhập số thứ nhất:") || "0");
                    const b = parseFloat(prompt("Nhập số thứ hai:") || "0");
                    try {
                        alert(`Kết quả: ${this.calculator.divide(a, b)}`);
                    }
                    catch (error) {
                        alert(error.message);
                    }
                    break;
                }
                case "5":
                    alert("Chương trình đã dừng!");
                    isRunning = false;
                    break;
                default:
                    alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
            }
        }
    }
}
const main = new Main();
main.run();
