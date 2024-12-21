export default class Employee {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  set id(id: number) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
