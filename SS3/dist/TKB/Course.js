export default class Course {
    constructor(id, name) {
        this._id = id;
        this._title = name;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set title(name) {
        this._title = name;
    }
    get title() {
        return this._title;
    }
}
