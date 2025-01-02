class Person {
  public _id: number;
  public _name: string;
  public _email: string;
  public _phone: string;
  constructor(id: number, name: string, email: string, phone: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._phone = phone;
  }
  getDetails(): string {
    console.log(
      `ID: ${this._id}, Name: ${this._name}, Email: ${this._email}, Phone: ${this._phone}`
    );
    return `ID: ${this._id}, Name: ${this._name}, Email: ${this._email}, Phone: ${this._phone}`;
  }
}

abstract class Room {
  public _roomId: number;
  public _type: string;
  public _pricePerNight: number;
  public _isAvailable: boolean;
  constructor(
    roomId: number,
    type: string,
    pricePerNight: number,
    isAvailable: boolean
  ) {
    this._roomId = roomId;
    this._type = type;
    this._pricePerNight = pricePerNight;
    this._isAvailable = isAvailable;
  }
  bookRoom(): void {
    this._isAvailable = false;
  }
  releaseRoom(): void {
    this._isAvailable = true;
  }
  abstract calculateCost(nights: number): number;
  abstract getAdditionalServices(): string[];
  abstract applyDiscount(discountRate: number): number;
  abstract getCancellationPolicy(): string;
  getDetails(): string {
    return `Room ID: ${this._roomId}, Type: ${this._type}, Price per Night: ${this._pricePerNight}, Is Available: ${this._isAvailable}`;
  }
}

class StandardRoom extends Room {
  constructor(
    roomId: number,
    type: string,
    pricePerNight: number,
    isAvailable: boolean
  ) {
    super(roomId, type, pricePerNight, isAvailable);
  }

  override calculateCost(nights: number): number {
    return this._pricePerNight * nights;
  }

  override getAdditionalServices(): string[] {
    return [];
  }

  override applyDiscount(discountRate: number): number {
    return this._pricePerNight * (1 - discountRate);
  }

  override getCancellationPolicy(): string {
    return "Hoàn lại 100% nếu hủy trước 1 ngày.";
  }
}

class DeluxeRoom extends Room {
  constructor(
    roomId: number,
    type: string,
    pricePerNight: number,
    isAvailable: boolean
  ) {
    super(roomId, type, pricePerNight, isAvailable);
  }

  override calculateCost(nights: number): number {
    return this._pricePerNight * nights;
  }

  override getAdditionalServices(): string[] {
    return ["Dịch vụ ăn sáng"];
  }

  override applyDiscount(discountRate: number): number {
    return this._pricePerNight * (1 - discountRate);
  }

  override getCancellationPolicy(): string {
    return "Hoàn lại 50% nếu hủy trước 2 ngày.";
  }
}

class SuiteRoom extends Room {
  constructor(
    roomId: number,
    type: string,
    pricePerNight: number,
    isAvailable: boolean
  ) {
    super(roomId, type, pricePerNight, isAvailable);
  }

  override calculateCost(nights: number): number {
    return this._pricePerNight * nights;
  }

  override getAdditionalServices(): string[] {
    return ["Dịch vụ spa, minibar"];
  }

  override applyDiscount(discountRate: number): number {
    return this._pricePerNight * (1 - discountRate);
  }

  override getCancellationPolicy(): string {
    return "Không hoàn lại tiền nếu hủy.";
  }
}

class Booking {
  public _bookingId: number;
  public _customer: Person;
  public _room: Room;
  public _nights: number;
  public _totalCost: number;
  constructor(
    bookingId: number,
    customer: Person,
    room: Room,
    nights: number,
    totalCost: number
  ) {
    this._bookingId = bookingId;
    this._customer = customer;
    this._room = room;
    this._nights = nights;
    this._totalCost = totalCost;
  }

  getDetails(): string {
    return `Booking ID: ${
      this._bookingId
    }, Customer: ${this._customer.getDetails()}, Room: ${this._room.getDetails()}, Nights: ${
      this._nights
    }, Total Cost: ${this._totalCost}`;
  }
}

class HotelManager {
  private _rooms: Room[];
  private _bookings: Booking[];
  private _customers: Person[];
  constructor() {
    this._rooms = [];
    this._bookings = [];
    this._customers = [];
  }

  addRoom(type: string, pricePerNight: number): void {
    if (!type.trim() || pricePerNight <= 0 || isNaN(pricePerNight)) {
      console.log("Type hoặc pricePerNight không hợp lệ");
      return;
    }
    const roomId = this._rooms.length + 1;
    let room: Room;
    switch (type) {
      case "StandardRoom":
        room = new StandardRoom(roomId, type, pricePerNight, true);
        break;
      case "DeluxeRoom":
        room = new DeluxeRoom(roomId, type, pricePerNight, true);
        break;
      case "SuiteRoom":
        room = new SuiteRoom(roomId, type, pricePerNight, true);
        break;
      default:
        console.log("Loại phòng không tồn tại");
        return;
    }
    this._rooms.push(room);
    alert(`Phòng ${type} đã được thêm thành công`);
    console.log(
      `Phòng ID: ${roomId}, Type: ${type}, Price per Night: ${pricePerNight}, Trạng thái: ${room._isAvailable}`
    );
  }

  addCustomer(name: string, email: string, phone: string): Person {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      console.log("Name, email, phone không được để trống");
      throw new Error("Name, email, phone không được để trống");
    }
    const customerId = this._customers.length + 1;
    const customer = new Person(customerId, name, email, phone);
    this._customers.push(customer);
    alert(`Khách hàng ${name} đã được thêm thành công`);
    console.log(
      `Khách hàng ID: ${customerId}, Name: ${name}, Email: ${email}, Phone: ${phone}`
    );
    return customer;
  }

  bookRoom(customerId: number, roomId: number, nights: number): Booking {
    const customer = this._customers.find(
      (customer) => customer._id === customerId
    );

    const room = this._rooms.find((room) => room._roomId === roomId);
    console.log(room);
    if (!customer || !room) {
      console.log("Khách hàng hoặc phòng không tồn tại");
      throw new Error("Khách hàng hoặc phòng không tồn tại");
    }
    // book room theo type room
    const booking = new Booking(
      this._bookings.length + 1,
      customer,
      room,
      nights,
      room.calculateCost(nights)
    );
    this._bookings.push(booking);
    room.bookRoom();
    alert(`Phòng ${room._type} đã được đặt thành công`);
    console.log(booking.getDetails());
    return booking;
  }

  releaseRoom(roomId: number): void {
    const room = this._rooms.find((room) => room._roomId === roomId);
    if (!room) {
      console.log("Phòng không tồn tại");
      throw new Error("Phòng không tồn tại");
    }
    room.releaseRoom();
    alert(`Phòng ${room._type} đã được trả phòng thành công`);
    console.log(room.getDetails());
  }

  listAvailableRooms(): void {
    const availableRooms = this._rooms.filter(
      (room) => room._isAvailable === true
    );
    if (availableRooms.length === 0) {
      console.log("Không có phòng nào còn trống");
      return;
    }
    availableRooms.forEach((room) => {
      console.log(room.getDetails());
    });
  }

  listBookingsByCustomer(customerId: number): void {
    const booking = this._bookings.filter(
      (booking) => booking._customer._id === customerId
    );
    booking.forEach((booking) => {
      console.log(booking.getDetails());
    });
  }

  calculateTotalRevenue(): number {
    const totalRevenu = this._bookings.reduce((accumulator, currentValue) => {
      return accumulator + currentValue._totalCost;
    }, 0);
    console.log(`Tổng doanh thu: ${totalRevenu}`);
    return totalRevenu;
  }

  getRoomTypesCount(): void {
    const roomTypes = this._rooms.map((room) => room._type);
    console.log(roomTypes);
    const roomTypeCount = roomTypes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, {});
    console.log(`Số lượng phòng theo loại: ${roomTypeCount}`);
  }

  applyDiscountToRoom(roomId: number, discountRate: number): void {
    const room = this._rooms.findIndex((room) => room._roomId === roomId);
    const totalCost = this._rooms[room].applyDiscount(discountRate);
    alert(
      `Phòng ${this._rooms[room]._type} đã được áp dụng giảm giá thành công`
    );
    console.log(
      `Số tiền phòng ${this._rooms[room]._type} sau khi áp dụng giảm giá: ${totalCost}`
    );
  }

  getRoomServices(roomId: number): void {
    const room = this._rooms.find((room) => room._roomId === roomId);
    console.log(room);
    if (!room) {
      console.log("Phòng không tồn tại");
      throw new Error("Phòng không tồn tại");
    }
    console.log(`Dịch vụ phòng ${room._type}: ${room.getAdditionalServices()}`);
  }

  getCancellationPolicy(roomId: number): void {
    const room = this._rooms.find((room) => room._roomId === roomId);
    if (!room) {
      console.log("Phòng không tồn tại");
      throw new Error("Phòng không tồn tại");
    }
    console.log(`Chính sách hủy phòng: ${room.getCancellationPolicy()}`);
  }
}

class Main {
  private _hotelManager: HotelManager;
  constructor() {
    this._hotelManager = new HotelManager();
  }
  run(): void {
    let isRunning = true;
    while (isRunning) {
      const option = Number(
        prompt(
          `Chọn chức năng:
                    1. Thêm khách hàng.	    
                    2. Thêm phòng.	    
                    3. Đặt phòng.				    
                    4. Trả phòng.			    
                    5. Hiển thị danh sách phòng còn trống
                    6. Hiển thị danh sách đặt phòng của khách hàng
                    7. Tính tổng doanh thu từ các đặt phòng		    	
                    8. Đếm số lượng từng loại phòng    
                    9. Áp dụng giảm giá cho phòng 		    
                    10. Hiển thị các dịch vụ bổ sung của phòng
                    11. Hiển thị chính sách hủy phòng
                    12. Thoát chương trình`
        )
      );
      switch (option) {
        case 1:
          const name = prompt("Nhập tên khách hàng:") || "";
          const email = prompt("Nhập email khách hàng:") || "";
          const phone = prompt("Nhập số điện thoại khách hàng:") || "";
          this._hotelManager.addCustomer(name, email, phone);
          break;
        case 2:
          const type = prompt("Nhập loại phòng:") || "";
          const pricePerNight = Number(prompt("Nhập giá phòng:") || "");
          this._hotelManager.addRoom(type, pricePerNight);
          break;
        case 3:
          const customerId = Number(prompt("Nhập ID khách hàng:") || "");
          const roomId = Number(prompt("Nhập ID phòng:") || "");
          const nights = Number(prompt("Nhập số đêm:") || "");
          this._hotelManager.bookRoom(customerId, roomId, nights);
          break;
        case 4:
          const roomId4 = Number(prompt("Nhập ID phòng:") || "");
          this._hotelManager.releaseRoom(roomId4);
          break;
        case 5:
          this._hotelManager.listAvailableRooms();
          break;
        case 6:
          const customerId6 = Number(prompt("Nhập ID khách hàng:") || "");
          this._hotelManager.listBookingsByCustomer(customerId6);
          break;
        case 7:
          this._hotelManager.calculateTotalRevenue();
          break;
        case 8:
          this._hotelManager.getRoomTypesCount();
          break;
        case 9:
          const roomId9 = Number(prompt("Nhập ID phòng:") || "");
          const discountRate = Number(prompt("Nhập tỷ lệ giảm giá:") || "");
          this._hotelManager.applyDiscountToRoom(roomId9, discountRate);
          break;
        case 10:
          const roomId10 = Number(prompt("Nhập ID phòng:") || "");
          this._hotelManager.getRoomServices(roomId10);
          break;
        case 11:
          const roomId11 = Number(prompt("Nhập ID phòng:") || "");
          this._hotelManager.getCancellationPolicy(roomId11);
          break;
        case 12:
          isRunning = false;
          break;
        default:
          console.log("Chức năng không tồn tại");
          break;
      }
    }
  }
}

const main = new Main();
main.run();
