import Student from "./Student";
import Course from "./Course";
import Enrollment from "./Enrollment";

export default class StudyManager {
  private _students: Student[];
  private _courses: Course[];
  private _enrollments: Enrollment[];

  constructor() {
    this._students = [];
    this._courses = [];
    this._enrollments = [];
  }

  addStudent(name: string): void {
    if (!name.trim()) {
      alert("Tên sinh viên không được để trống");
      return;
    }
    this._students.push(new Student(this._students.length + 1, name));
    alert("Thêm sinh viên thành công");
    console.log(`ID: ${this._students.length}, Name: ${name}`);
  }

  addCourse(title: string): void {
    if (!title.trim()) {
      alert("Tên môn học không được để trống");
      return;
    }
    this._courses.push(new Course(this._courses.length + 1, title));
    alert("Thêm môn học thành công");
    console.log(`ID: ${this._courses.length}, Title: ${title}`);
  }

  enrollStudent(
    studentId: number,
    courseId: number,
    scheduleTime: string
  ): void {
    if (!studentId || isNaN(studentId) || !courseId || isNaN(courseId)) {
      alert("Vui lòng nhập ID cho student hoặc course đúng định dạng");
      return;
    }
    if (!scheduleTime.trim()) {
      alert("Vui lòng điền thời gian học dưới dạng YYYY-MM-DD");
    }

    let scheduleTimeConvert = new Date(scheduleTime);
    if (isNaN(scheduleTimeConvert.getTime())) {
      alert("Thời gian học không hợp lệ");
      return;
    }
    scheduleTime = scheduleTimeConvert.toDateString();

    this._enrollments.push(
      new Enrollment(
        this._students[studentId - 1],
        this._courses[courseId - 1],
        scheduleTime
      )
    );
    alert("Đăng ký học cho sinh viên thành công");
    console.log(`ID sinh viên: ${studentId} - Name: ${
      this._students[studentId - 1].name
    }
        ID môn học: ${courseId} - Title: ${this._courses[courseId - 1].title}
        Schedule Time: ${scheduleTime}`);
  }

  listEnrollments(): void {
    if (this._enrollments.length === 0) {
      alert("Chưa có sinh viên nào đăng ký học");
      return;
    }
    this._enrollments.forEach((enrollment, index) => {
      console.log(`ID: ${index + 1}
        Student: ${enrollment.student.name}
        Course: ${enrollment.course.title}
        Schedule Time: ${enrollment.scheduleTime}`);
    });
  }
}
