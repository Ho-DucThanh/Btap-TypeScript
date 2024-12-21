import Todo from "./todo.js";
export default class TodoListManager {
  constructor() {
    this.idCounter = 1;
    this.todos = [];
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
    if (isNaN(index) || index <= 0 || index > this.todos.length) {
      console.log("Index không hợp lệ");
      return;
    }
    this.todos.splice(index - 1, 1);
    console.log("Xóa công việc thành công!");
  }
  updateTodo(index, content) {
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
  sortTodo() {
    this.todos.sort((a, b) => a.getContent.localeCompare(b.getContent));
    console.log("Danh sách công việc sau khi sắp xếp:");
    this.listTodos();
  }
  findTodo(content) {
    if (!content.trim()) {
      console.log("Nội dung tìm kiếm không được để trống!");
      return;
    }
    const index = this.todos.findIndex((todo) =>
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
