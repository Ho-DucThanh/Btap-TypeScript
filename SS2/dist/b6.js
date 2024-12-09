"use strict";
let stores = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 },
];
let carts = [];
function StoreB6() {
    const inputElement = document.getElementById("inputCommand");
    const command = inputElement.value.toUpperCase();
    switch (command) {
        case "C":
            const productName = prompt("Nhập tên sản phẩm muốn mua:") || "";
            const storeItem = stores.find((store) => store.name.toLowerCase() === (productName === null || productName === void 0 ? void 0 : productName.toLowerCase()));
            if (storeItem && storeItem.count > 0) {
                const cartItem = carts.find((cart) => cart.name.toLowerCase() === (productName === null || productName === void 0 ? void 0 : productName.toLowerCase()));
                if (cartItem) {
                    cartItem.count++;
                }
                else {
                    carts.push(Object.assign(Object.assign({}, storeItem), { count: 1 }));
                }
                storeItem.count--;
                alert(`Đã thêm ${productName} vào giỏ hàng.`);
            }
            else {
                alert(`Sản phẩm ${productName} không tồn tại hoặc đã hết hàng.`);
            }
            break;
        case "R":
            alert("Store và cart đã được hiển thị");
            break;
        case "U":
            const updateId = parseInt(prompt("Nhập ID của sản phẩm muốn cập nhật trong giỏ hàng:") || "0", 10);
            const updateCartItem = carts.find((cart) => cart.id === updateId);
            if (updateCartItem) {
                const updateCount = parseInt(prompt(`Nhập số lượng mới cho sản phẩm "${updateCartItem.name}":`) ||
                    "0", 10);
                if (updateCount >= 0) {
                    const storeItem = stores.find((store) => store.id === updateCartItem.id);
                    if (storeItem) {
                        storeItem.count += updateCartItem.count - updateCount;
                        updateCartItem.count = updateCount;
                        alert(`Đã cập nhật số lượng sản phẩm "${updateCartItem.name}" thành ${updateCount}.`);
                    }
                }
                else {
                    alert("Số lượng không hợp lệ.");
                }
            }
            else {
                alert(`Không tìm thấy sản phẩm với ID ${updateId} trong giỏ hàng.`);
            }
            break;
        case "D":
            const deleteId = parseInt(prompt("Nhập ID của sản phẩm muốn xóa trong giỏ hàng:") || "0", 10);
            const deleteIndex = carts.findIndex((cart) => cart.id === deleteId);
            if (deleteIndex !== -1) {
                const cartItem = carts[deleteIndex];
                const storeItem = stores.find((store) => store.id === cartItem.id);
                if (storeItem) {
                    storeItem.count += cartItem.count;
                }
                carts.splice(deleteIndex, 1);
                alert(`Đã xóa sản phẩm "${cartItem.name}" khỏi giỏ hàng.`);
            }
            else {
                alert(`Không tìm thấy sản phẩm với ID ${deleteId} trong giỏ hàng.`);
            }
            break;
        case "E":
            alert("Cảm ơn bạn đã đến với Rikkei Stores!");
            return;
        default:
            alert("Vui lòng nhập C, R, U, D hoặc E.");
            break;
    }
    renderTable(carts, "cartTable");
    renderTable(stores, "storeTable");
}
function renderTable(data, containerId) {
    const containerElement = document.getElementById(containerId);
    if (data.length === 0) {
        containerElement.innerHTML = "<p>Không có dữ liệu</p>";
        return;
    }
    let tableHTML = `<table>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Count</th>
                      </tr>`;
    data.forEach((item) => {
        tableHTML += `<tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.count}</td>
                  </tr>`;
    });
    tableHTML += "</table>";
    containerElement.innerHTML = tableHTML;
}
renderTable(carts, "cartTable");
renderTable(stores, "storeTable");
