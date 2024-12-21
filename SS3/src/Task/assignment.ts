import Task from "./task";
import Employee from "./employee";

export default class Assignment {
  private _employee: Employee;
  private _task: Task;

  constructor(employee: Employee, task: Task) {
    this._employee = employee;
    this._task = task;
  }

  set employee(employee: Employee) {
    this._employee = employee;
  }

  get employee() {
    return this._employee;
  }

  set task(task: Task) {
    this._task = task;
  }

  get task() {
    return this._task;
  }
}
