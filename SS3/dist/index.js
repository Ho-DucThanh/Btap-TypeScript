import TodoListManager from "./TodoListManager.js";
class Main {
  constructor() {
    this.todoListManager = new TodoListManager();
  }
  run() {
    const inputField = document.getElementById("inputField");
    const submitButton = document.getElementById("submitButton");
    const outputDiv = document.getElementById("output");
    const updateOutput = (message) => {
      outputDiv.innerHTML += `<p>${message}</p>`;
    };
    submitButton.addEventListener("click", () => {
      const choice = inputField.value.trim();
      inputField.value = "";
      switch (choice) {
        case "1":
          this.todoListManager.listTodos();
          break;
        case "2":
          const content = prompt("Nhập nội dung công việc:");
          if (content) {
            this.todoListManager.addTodo(content);
          }
          break;
        case "3":
          const removeIndex = parseInt(prompt("Nhập vị trí cần xóa:") || "-1");
          if (removeIndex !== -1) {
            this.todoListManager.removeTodo(removeIndex);
          }
          break;
        case "4":
          const updateIndex = parseInt(prompt("Nhập vị trí cần sửa:") || "-1");
          const updateContent = prompt("Nhập nội dung mới:");
          if (updateContent && updateIndex !== -1) {
            this.todoListManager.updateTodo(updateIndex - 1, updateContent);
          }
          break;
        case "5":
          this.todoListManager.sortTodo();
          break;
        case "6":
          const searchContent = prompt("Nhập nội dung công việc cần tìm:");
          if (searchContent) this.todoListManager.findTodo(searchContent);
          break;
        case "7":
          updateOutput("Chương trình đã dừng!");
          break;
        default:
          updateOutput("Lựa chọn không hợp lệ, vui lòng thử lại!");
      }
    });
  }
}
const main = new Main();
main.run();
