import Todo from "./todo.js";
export default class TodoListManager {
  constructor() {
    this.todos = [];
    this.idCounter = 1;
  }
  addTodo(content) {
    if (!content.trim()) {
      console.log("Nội dung công việc không được để trống!");
      return;
    }
    this.todos.push(new Todo(this.idCounter++, content));
    console.log("Thêm công việc thành công!");
  }
  removeTodo(index) {
    if (index < 0 || index >= this.todos.length) {
      console.log("Index không hợp lệ");
      return;
    }
    this.todos.splice(index, 1);
    console.log("Xóa công việc thành công!");
  }
  updateTodo(index, content) {
    if (index < 0 || index >= this.todos.length) {
      console.log("Index không hợp lệ");
      return;
    }
    if (!content.trim()) {
      console.log("Nội dung công việc không được để trống!");
      return;
    }
    this.todos[index].setContent = content;
    console.log("Cập nhật công việc thành công!");
  }
  sortTodo() {
    this.todos.sort((a, b) => a.getContent.localeCompare(b.getContent));
    this.listTodos();
  }
  findTodo(content) {
    const index = this.todos.findIndex((todo) =>
      todo.getContent.toLowerCase().includes(content.toLowerCase())
    );
    if (index === -1) {
      console.log("Không tìm thấy công việc");
      return;
    } else {
      console.log(`Công việc được tìm thấy ở vị trí: ${index}`);
    }
  }
  listTodos() {
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
