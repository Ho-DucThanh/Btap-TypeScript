export default class Book {
  private _id: number;
  private _title: string;
  private _author: string;
  private _year: number;
  constructor(id: number, title: string, author: string, year: number) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._year = year;
  }

  set setId(id: number) {
    this._id = id;
  }

  get getId(): number {
    return this._id;
  }

  set setTitle(title: string) {
    this._title = title;
  }

  get getTitle(): string {
    return this._title;
  }

  set setAuthor(author: string) {
    this._author = author;
  }

  get getAuthor(): string {
    return this._author;
  }

  set setYear(year: number) {
    this._year = year;
  }

  get getYear(): number {
    return this._year;
  }
}
