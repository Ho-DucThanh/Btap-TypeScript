import TaskManager from "./taskmanager";

class Main {
  private _taskManager: TaskManager;
  constructor() {
    this._taskManager = new TaskManager();
  }

  run(): void {
    let isRunning = true;
    while (isRunning) {
      const option = Number(
        prompt(`Chọn chức năng:
        1. Thêm nhân viên mới.
        2. Thêm task mới.
        3. Gán task cho nhân viên.
        4. Đánh dấu task hoàn thành.
        5. Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có).
        6. Dừng chương trình.`)
      );
      switch (option) {
        case 1:
          const name = prompt("Nhập tên nhân viên:") || "";
          this._taskManager.addEmployee(name);
          break;

        case 2:
          const title = prompt("Nhập tiêu đề task:") || "";
          const deadline = prompt("Nhập hạn hoàn thành:") || "";
          this._taskManager.addTask(title, deadline);
          break;

        case 3:
          const employeeId = Number(prompt("Nhập id nhân viên:"));
          const taskId = Number(prompt("Nhập id công việc:"));
          this._taskManager.assignTask(employeeId, taskId);
          break;

        case 4:
          const taskIdCompleted = Number(prompt("Nhập id công việc:"));
          this._taskManager.completeTask(taskIdCompleted);
          break;

        case 5:
          this._taskManager.listTasks();
          break;

        case 6:
          isRunning = false;
          break;

        default:
          console.log("Chức năng không hợp lệ");
          break;
      }
    }
  }
}

const main = new Main();
main.run();
