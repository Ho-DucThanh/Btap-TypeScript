export default class Course {
  private _id: number;
  private _title: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._title = name;
  }

  set id(id: number) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set title(name: string) {
    this._title = name;
  }

  get title() {
    return this._title;
  }
}
