import CDStoreManager from "./CDStoreManager.js";
class Main {
  constructor() {
    this._cdStoreManager = new CDStoreManager();
  }
  run() {
    let isRunning = false;
    while (isRunning) {
      const option = Number(
        prompt(`Chọn chức năng:
            1. Thêm CD vào cửa hàng.
            2. Hiển thị danh sách CD.
            3. Xóa CD theo mã CD.
            4. Tìm kiếm CD theo tên.
            5. Dừng chương trình.`)
      );
      switch (option) {
        case 1:
          const title = prompt("Nhập tên CD") || "";
          const artist = prompt("Nhập tên ca sĩ") || "";
          const year = Number(prompt("Nhập năm phát hành") || 0);
          this._cdStoreManager.addCD(title, artist, year);
          break;
        case 2:
          this._cdStoreManager.listCDs();
          break;
        case 3:
          const id = Number(prompt("Nhập mã CD cần xóa") || 0);
          this._cdStoreManager.removeCD(id);
          break;
        case 4:
          const searchTitle = prompt("Nhập tên CD cần tìm") || "";
          this._cdStoreManager.searchCD(searchTitle);
          break;
        case 5:
          isRunning = false;
          break;
        default:
          alert("Chức năng không hợp lệ");
          break;
      }
    }
  }
}
const main = new Main();
main.run();
