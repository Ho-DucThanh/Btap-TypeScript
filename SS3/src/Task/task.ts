export default class Task {
  private _id: number;
  private _title: string;
  private _deadline: string;
  private _isCompleted: boolean;

  constructor(
    id: number,
    title: string,
    deadline: string,
    isCompleted: boolean = false
  ) {
    this._id = id;
    this._title = title;
    this._deadline = deadline;
    this._isCompleted = isCompleted;
  }

  set id(id: number) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set title(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set deadline(deadline: string) {
    this._deadline = deadline;
  }

  get deadline() {
    return this._deadline;
  }

  set isCompleted(isCompleted: boolean) {
    this._isCompleted = isCompleted;
  }

  get isCompleted() {
    return this._isCompleted;
  }
}
