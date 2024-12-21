import Todo from "./todo";

export default class TodoListManager {
  private todos: Todo[];
  private idCounter: number = 1;

  constructor() {
    this.todos = [];
  }
  addTodo(content: string): void {
    if (!content.trim()) {
      console.log("Nội dung công việc không được để trống!");
      return;
    }
    this.todos.push(new Todo(this.idCounter++, content));
    console.log("Thêm công việc thành công!");
  }

  removeTodo(index: number): void {
    if (isNaN(index) || index <= 0 || index > this.todos.length) {
      console.log("Index không hợp lệ");
      return;
    }
    this.todos.splice(index - 1, 1);
    console.log("Xóa công việc thành công!");
  }

  updateTodo(index: number, content: string): void {
    if (isNaN(index) || index <= 0 || index > this.todos.length) {
      console.log("Index không hợp lệ");
      return;
    }
    if (!content.trim()) {
      console.log("Nội dung công việc không được để trống!");
      return;
    }
    this.todos[index - 1].setContent = content;
    alert(`Cập nhật công việc tại vị trí ${index} thành công!`);
    console.log(
      `Nội dung sau khi cập nhật: ID: ${index}, Nội dung: ${content}`
    );
  }

  sortTodo(): void {
    this.todos.sort((a, b) => a.getContent.localeCompare(b.getContent));
    console.log("Danh sách công việc sau khi sắp xếp:");
    this.listTodos();
  }

  findTodo(content: string): void {
    if (!content.trim()) {
      console.log("Nội dung tìm kiếm không được để trống!");
      return;
    }
    const index: number = this.todos.findIndex((todo) =>
      todo.getContent.toLowerCase().includes(content.toLowerCase())
    );
    if (index === -1) {
      console.log("Không tìm thấy công việc");
      return;
    } else {
      console.log(
        `Công việc được tìm thấy ở vị trí đầu tiên cócó ID: ${index} - Content: ${content}`
      );
    }
  }

  listTodos(): void {
    if (this.todos.length === 0) {
      console.log("Danh sách công việc rỗng!");
      return;
    }
    console.log("Danh sách công việc:");
    this.todos.forEach((todo, index) => {
      console.log(
        `ID: ${index + 1}, Nội dung: ${todo.getContent}, Status: ${
          todo.getStatus ? "✔" : "✘"
        }`
      );
    });
  }
}
