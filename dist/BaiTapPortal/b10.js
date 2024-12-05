"use strict";
function getZodiacSign(day, month) {
    switch (month) {
        case 1:
            return day <= 19 ? "Ma Kết" : "Bảo Bình";
        case 2:
            return day <= 18 ? "Bảo Bình" : "Song Ngư";
        case 3:
            return day <= 20 ? "Song Ngư" : "Bạch Dương";
        case 4:
            return day <= 19 ? "Bạch Dương" : "Kim Ngưu";
        case 5:
            return day <= 20 ? "Kim Ngưu" : "Song Tử";
        case 6:
            return day <= 21 ? "Song Tử" : "Cự Giải";
        case 7:
            return day <= 22 ? "Cự Giải" : "Sư Tử";
        case 8:
            return day <= 22 ? "Sư Tử" : "Xử Nữ";
        case 9:
            return day <= 22 ? "Xử Nữ" : "Thiên Bình";
        case 10:
            return day <= 23 ? "Thiên Bình" : "Bọ Cạp";
        case 11:
            return day <= 22 ? "Bọ Cạp" : "Nhân Mã";
        case 12:
            return day <= 21 ? "Nhân Mã" : "Ma Kết";
        default:
            return "Invalid date";
    }
}
