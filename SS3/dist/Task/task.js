export default class Task {
    constructor(id, title, deadline, isCompleted = false) {
        this._id = id;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = isCompleted;
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
    set deadline(deadline) {
        this._deadline = deadline;
    }
    get deadline() {
        return this._deadline;
    }
    set isCompleted(isCompleted) {
        this._isCompleted = isCompleted;
    }
    get isCompleted() {
        return this._isCompleted;
    }
}
