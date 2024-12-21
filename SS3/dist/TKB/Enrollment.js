export default class Enrollment {
    constructor(student, course, scheduleTime) {
        this._student = student;
        this._course = course;
        this._scheduleTime = scheduleTime;
    }
    set student(student) {
        this._student = student;
    }
    get student() {
        return this._student;
    }
    set course(course) {
        this._course = course;
    }
    get course() {
        return this._course;
    }
    set scheduleTime(scheduleTime) {
        this._scheduleTime = scheduleTime;
    }
    get scheduleTime() {
        return this._scheduleTime;
    }
}
