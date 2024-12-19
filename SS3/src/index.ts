import TodoListManager from "./TodoListManager";

class Main {
  private todoListManager: TodoListManager = new TodoListManager();

  run(): void {
    const inputField = document.getElementById(
      "inputField"
    ) as HTMLTextAreaElement;
    const submitButton = document.getElementById(
      "submitButton"
    ) as HTMLButtonElement;
    const outputDiv = document.getElementById("output") as HTMLDivElement;
    const updateOutput = (message: string) => {
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
          const content: string | null = prompt("Nhập nội dung công việc:");
          if (content) {
            this.todoListManager.addTodo(content);
          }
          break;

        case "3":
          const removeIndex: number | null = parseInt(
            prompt("Nhập vị trí cần xóa:") || "-1"
          );
          if (removeIndex !== -1) {
            this.todoListManager.removeTodo(removeIndex);
          }
          break;

        case "4":
          const updateIndex: number | null = parseInt(
            prompt("Nhập vị trí cần sửa:") || "-1"
          );
          const updateContent: string | null = prompt("Nhập nội dung mới:");
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
