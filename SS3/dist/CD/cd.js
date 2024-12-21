export default class CD {
    constructor(id, title, artist, year) {
        this._id = id;
        this._title = title;
        this._artist = artist;
        this._year = year;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set artist(artist) {
        this._artist = artist;
    }
    get artist() {
        return this._artist;
    }
    set year(year) {
        this._year = year;
    }
    get year() {
        return this._year;
    }
}
