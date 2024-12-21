import Book from "./book";

export default class LibraryManager {
  private _books: Book[];
  constructor() {
    this._books = [];
  }
  addBook(title: string, author: string, year: number): void {
    if (!title.trim() || !author.trim() || !year.toString().trim()) {
      console.log("Thông tin sách không được để trống!");
      return;
    }
    if (isNaN(year)) {
      console.log("Năm xuất bản phải là số!");
      return;
    }
    this._books.push(new Book(this._books.length + 1, title, author, year));
    alert("Thêm sách vào thư viên thành công");
    console.log(
      `ID: ${this._books.length}, Title: ${title}, Author: ${author}, Year: ${year}`
    );
  }

  listBook(): void {
    if (this._books.length === 0) {
      console.log("Thư viện sách rỗng!");
      return;
    }
    console.log("Danh sách sách trong thư viện:");
    this._books.forEach((book: Book, index: number) => {
      console.log(
        `ID: ${index + 1} - Title: ${book.getTitle} - Author: ${
          book.getAuthor
        } - Year: ${book.getYear}`
      );
    });
  }

  removeBook(id: number): void {
    if (isNaN(id) || id <= 0 || id > this._books.length) {
      alert("ID không hợp lệ");
      return;
    }
    this._books.splice(id - 1, 1);
    alert(`Xoá sách có ID là: ${id} thành công`);
  }

  searchBook(title: string): void {
    if (!title.trim()) {
      alert("Tiêu đề sách không được để trống!");
      return;
    }
    const findBook: Book[] = this._books.filter((book) =>
      book.getTitle.toLowerCase().includes(title.toLowerCase())
    );
    if (findBook.length === 0) {
      console.log("Không tìm thấy sách");
      return;
    }
    console.log("Sách bạn cần tìm là:");
    findBook.forEach((book) => {
      console.log(
        `ID: ${book.getId}, Title: ${book.getTitle} - Author: ${book.getAuthor} - Year: ${book.getYear}`
      );
    });
  }
}
