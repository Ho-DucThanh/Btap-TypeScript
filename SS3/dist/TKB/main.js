import StudyManager from "./StudyManager.js";
class Main {
  constructor() {
    this._studyManager = new StudyManager();
  }
  run() {
    let isRunning = true;
    while (isRunning) {
      const option = Number(
        prompt(`Chọn chức năng:
                    1. Thêm sinh viên mới.
                    2. Thêm khóa học mới.
                    3. Đăng ký học cho sinh viên.
                    4. Hiển thị thời khóa biểu học tập.
                    5. Dừng chương trình.`)
      );
      switch (option) {
        case 1:
          const studentName = prompt("Nhập tên sinh viên:") || "";
          this._studyManager.addStudent(studentName);
          break;
        case 2:
          const courseTitle = prompt("Nhập tên khóa học:") || "";
          this._studyManager.addCourse(courseTitle);
          break;
        case 3:
          const studentId = Number(prompt("Nhập ID sinh viên:"));
          const courseId = Number(prompt("Nhập ID khóa học:"));
          const scheduleTime = prompt("Nhập thời gian học (YYYY-MM-DD):") || "";
          this._studyManager.enrollStudent(studentId, courseId, scheduleTime);
          break;
        case 4:
          this._studyManager.listEnrollments();
          break;
        case 5:
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
