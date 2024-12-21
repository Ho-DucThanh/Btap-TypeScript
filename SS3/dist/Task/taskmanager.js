import Task from "./task.js";
import Employee from "./employee.js";
import Assignment from "./assignment.js";
export default class TaskManager {
    constructor() {
        this._employees = [];
        this._tasks = [];
        this._assignments = [];
    }
    addEmployee(name) {
        if (!name.trim()) {
            alert("Tên không được để trống");
            return;
        }
        this._employees.push(new Employee(this._employees.length + 1, name));
        alert("Thêm nhân viên thành công");
        console.log(`Name: ${name}, Id: ${this._employees.length}`);
    }
    addTask(title, deadline) {
        if (!title.trim()) {
            alert("Tiêu đề không được để trống");
            return;
        }
        if (!deadline) {
            alert("Deadline không được để trống");
            return;
        }
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(deadline)) {
            alert("Deadline phải đúng định dạng YYYY-MM-DD!");
            return;
        }
        let deadlineConvert = new Date(deadline);
        if (isNaN(deadlineConvert.getTime())) {
            alert("Deadline không hợp lệ!");
            return;
        }
        deadline = deadlineConvert.toDateString();
        this._tasks.push(new Task(this._tasks.length + 1, title, deadline));
        alert("Thêm công việc thành công");
        console.log(`Id: ${this._tasks.length}, Title: ${title}, Deadline: ${deadline}`);
    }
    assignTask(employeeId, taskId) {
        if (!employeeId || !taskId || isNaN(employeeId) || isNaN(taskId)) {
            alert("Id nhân viên hoặc task không đúng định dạngdạng");
            return;
        }
        if (taskId <= 0 ||
            taskId > this._tasks.length ||
            employeeId <= 0 ||
            employeeId > this._employees.length) {
            alert("Id không hợp lệ");
            return;
        }
        this._assignments.push(new Assignment(this._employees[employeeId - 1], this._tasks[taskId - 1]));
        alert("Phân công công việc thành công");
        console.log(`Phân công công việc cho nhân viên như sau:
        Id nhân viên: ${employeeId} - Name: ${this._employees[employeeId - 1].name}
        Id Task: ${taskId} - Title: ${this._tasks[taskId - 1].title} - Dealine: ${this._tasks[taskId - 1].deadline} - IsCompleted: ${this._tasks[taskId - 1].isCompleted}`);
    }
    completeTask(taskId) {
        if (taskId <= 0 || taskId > this._tasks.length || isNaN(taskId)) {
            alert("Id công việc không hợp lệ");
            return;
        }
        let task = this._tasks.find((task) => task.id === taskId);
        if (!task) {
            alert("Công việc không tồn tại");
            return;
        }
        task.isCompleted = true;
        alert("Đánh dấu công việc thành công");
        console.log(task.isCompleted);
    }
    listTasks() {
        if (this._tasks.length === 0) {
            alert("Danh sách công việc rỗng");
            return;
        }
        this._tasks.forEach((task) => {
            let status = task.isCompleted ? "Hoàn thành" : "Chưa hoàn thành";
            let deadline = new Date(task.deadline);
            let now = new Date();
            let isOverdue = deadline.getTime() < now.getTime() ? "Quá hạn" : "Chưa quá hạn";
            alert(`ID: ${task.id}, Tiêu đề: ${task.title}, Deadline: ${task.deadline}, Trạng thái: ${status}, ${isOverdue}`);
            console.log(`ID: ${task.id}, Tiêu đề: ${task.title}, Deadline: ${task.deadline}, Trạng thái: ${status}, ${isOverdue}`);
        });
    }
}
