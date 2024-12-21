export default class Book {
    constructor(id, title, author, year) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._year = year;
    }
    set setId(id) {
        this._id = id;
    }
    get getId() {
        return this._id;
    }
    set setTitle(title) {
        this._title = title;
    }
    get getTitle() {
        return this._title;
    }
    set setAuthor(author) {
        this._author = author;
    }
    get getAuthor() {
        return this._author;
    }
    set setYear(year) {
        this._year = year;
    }
    get getYear() {
        return this._year;
    }
}
