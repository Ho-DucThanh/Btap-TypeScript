export default class Assignment {
    constructor(employee, task) {
        this._employee = employee;
        this._task = task;
    }
    set employee(employee) {
        this._employee = employee;
    }
    get employee() {
        return this._employee;
    }
    set task(task) {
        this._task = task;
    }
    get task() {
        return this._task;
    }
}
