import CD from "./cd.js";
export default class CDStoreManager {
  constructor() {
    this._cds = [];
  }
  addCD(title, artist, year) {
    if (!title.trim() || !artist.trim() || !year) {
      alert("Vui lòng điền đẩy đủ thông tin");
      return;
    }
    if (isNaN(year)) {
      alert("Năm phát hành không hợp lệ");
      return;
    }
    this._cds.push(new CD(this._cds.length + 1, title, artist, year));
    alert("Thêm CD vào cửa hàng thành công");
    console.log(
      `ID: ${this._cds.length} - Title: ${title} - Artist: ${artist} - Year: ${year}`
    );
  }
  listCDs() {
    if (this._cds.length === 0) {
      alert("Không có CD nào trong cửa hàng");
      return;
    }
    console.log("Danh sách CD có trong cửa hàng là:");
    this._cds.forEach((cd, index) => {
      console.log(
        `ID: ${index} - Title: ${cd.title} - Artist: ${cd.artist} - Year: ${cd.year}`
      );
    });
  }
  removeCD(id) {
    if (isNaN(id) || id <= 0 || id > this._cds.length) {
      alert("ID không hợp lệ");
      return;
    }
    this._cds.splice(id - 1, 1);
    alert(`Xoá CD có ID là: ${id} thành công`);
  }
  searchCD(title) {
    if (!title.trim()) {
      alert("Tên sách không được để trống");
      return;
    }
    const searchTitleCD = this._cds.filter((cd) =>
      cd.title.toLocaleLowerCase().includes(title)
    );
    if (!searchTitleCD) {
      alert(`Không tìm thấy CD nào có title: ${title} trong cửa hàng`);
    }
    console.log("Danh sách có title là: ${title} trong cửa hàng");
    searchTitleCD.forEach((title, index) => {
      console.log(
        `ID: ${index} - Title: ${title.title} - Artist: ${title.artist} - Year: ${title.year}`
      );
    });
  }
}
