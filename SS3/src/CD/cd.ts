export default class CD {
  private _id: number;
  private _title: string;
  private _artist: string;
  private _year: number;

  constructor(id: number, title: string, artist: string, year: number) {
    this._id = id;
    this._title = title;
    this._artist = artist;
    this._year = year;
  }

  set id(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set title(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  set artist(artist: string) {
    this._artist = artist;
  }

  get artist(): string {
    return this._artist;
  }

  set year(year: number) {
    this._year = year;
  }

  get year(): number {
    return this._year;
  }
}
