import LibraryManager from "./LibraryManager";

class Main {
  private _libraryManager: LibraryManager;
  constructor() {
    this._libraryManager = new LibraryManager();
  }

  run(): void {
    let isRunning = true;
    while (isRunning) {
      const option = Number(
        prompt(
          `Chọn chức năng:
                1. Thêm sách mới vào thư viện.
                2. Hiển thị danh sách sách trong thư viện.
                3. Xóa sách khỏi thư viện theo mã sách.
                4. Tìm kiếm sách theo tên.
                5. Dừng chương trình.`
        )
      );
      switch (option) {
        case 1:
          const title = prompt("Nhập tiêu đề sách:") || "";
          const author = prompt("Nhập tác giả:") || "";
          const year = Number(prompt("Nhập năm xuất bản:") || "");
          this._libraryManager.addBook(title, author, year);
          break;

        case 2:
          this._libraryManager.listBook();
          break;

        case 3:
          const id = Number(prompt("Nhập mã sách cần xoá:") || "");
          this._libraryManager.removeBook(id);
          break;

        case 4:
          const titleSearch = prompt("Nhập tiêu đề sách cần tìm:") || "";
          this._libraryManager.searchBook(titleSearch);
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
