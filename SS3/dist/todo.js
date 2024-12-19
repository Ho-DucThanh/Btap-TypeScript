export default class Todo {
    constructor(id, content, status = false) {
        this.id = id;
        this._content = content;
        this._status = status;
    }
    set setContent(content) {
        this._content = content;
    }
    get getContent() {
        return this._content;
    }
    set setStatus(status) {
        this._status = status;
    }
    get getStatus() {
        return this._status;
    }
}
