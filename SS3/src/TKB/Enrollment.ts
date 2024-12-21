import Student from "./Student";
import Course from "./Course";

export default class Enrollment {
  private _student: Student;
  private _course: Course;
  private _scheduleTime: string;

  constructor(student: Student, course: Course, scheduleTime: string) {
    this._student = student;
    this._course = course;
    this._scheduleTime = scheduleTime;
  }

  set student(student: Student) {
    this._student = student;
  }

  get student() {
    return this._student;
  }

  set course(course: Course) {
    this._course = course;
  }

  get course() {
    return this._course;
  }

  set scheduleTime(scheduleTime: string) {
    this._scheduleTime = scheduleTime;
  }

  get scheduleTime() {
    return this._scheduleTime;
  }
}
