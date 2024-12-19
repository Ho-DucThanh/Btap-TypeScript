export default class Todo {
  private id: number;
  private _content: string;
  private _status: boolean;

  constructor(id: number, content: string, status: boolean = false) {
    this.id = id;
    this._content = content;
    this._status = status;
  }

  set setContent(content: string) {
    this._content = content;
  }

  get getContent(): string {
    return this._content;
  }

  set setStatus(status: boolean) {
    this._status = status;
  }

  get getStatus(): boolean {
    return this._status;
  }
}



