// Hàm tạo màu ngẫu nhiên
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Hiển thị 10 lần màu ngẫu nhiên trong console
for (let i = 1; i <= 10; i++) {
  const randomColor = getRandomColor();
  console.log(
    `%cThis is color ${i}: ${randomColor}`,
    `color: ${randomColor}; font-size: 16px;`
  );
}
