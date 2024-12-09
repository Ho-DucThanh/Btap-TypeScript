type Store = { id: number; name: string; count: number };
type Cart = { id: number; name: string; count: number };

let stores: Store[] = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];

let carts: Cart[] = [];

type StoreType = Store | undefined;
type CartType = Cart | undefined;

function StoreB6(): void {
  const inputElement = document.getElementById(
    "inputCommand"
  ) as HTMLInputElement;
  const command: string = inputElement.value.toUpperCase();

  switch (command) {
    case "C":
      const productName: string = prompt("Nhập tên sản phẩm muốn mua:") || "";
      const storeItem: StoreType = stores.find(
        (store) => store.name.toLowerCase() === productName?.toLowerCase()
      );
      if (storeItem && storeItem.count > 0) {
        const cartItem: CartType = carts.find(
          (cart) => cart.name.toLowerCase() === productName?.toLowerCase()
        );
        if (cartItem) {
          cartItem.count++;
        } else {
          carts.push({ ...storeItem, count: 1 });
        }
        storeItem.count--;
        alert(`Đã thêm ${productName} vào giỏ hàng.`);
      } else {
        alert(`Sản phẩm ${productName} không tồn tại hoặc đã hết hàng.`);
      }
      break;

    case "R":
      alert("Store và cart đã được hiển thị");
      break;

    case "U":
      const updateId: number = parseInt(
        prompt("Nhập ID của sản phẩm muốn cập nhật trong giỏ hàng:") || "0",
        10
      );
      const updateCartItem: CartType = carts.find(
        (cart) => cart.id === updateId
      );
      if (updateCartItem) {
        const updateCount: number = parseInt(
          prompt(`Nhập số lượng mới cho sản phẩm "${updateCartItem.name}":`) ||
            "0",
          10
        );
        if (updateCount >= 0) {
          const storeItem: StoreType = stores.find(
            (store) => store.id === updateCartItem.id
          );
          if (storeItem) {
            storeItem.count += updateCartItem.count - updateCount;
            updateCartItem.count = updateCount;
            alert(
              `Đã cập nhật số lượng sản phẩm "${updateCartItem.name}" thành ${updateCount}.`
            );
          }
        } else {
          alert("Số lượng không hợp lệ.");
        }
      } else {
        alert(`Không tìm thấy sản phẩm với ID ${updateId} trong giỏ hàng.`);
      }
      break;

    case "D":
      const deleteId: number = parseInt(
        prompt("Nhập ID của sản phẩm muốn xóa trong giỏ hàng:") || "0",
        10
      );
      const deleteIndex: number = carts.findIndex(
        (cart) => cart.id === deleteId
      );
      if (deleteIndex !== -1) {
        const cartItem: CartType = carts[deleteIndex];
        const storeItem: StoreType = stores.find(
          (store) => store.id === cartItem.id
        );
        if (storeItem) {
          storeItem.count += cartItem.count;
        }
        carts.splice(deleteIndex, 1);
        alert(`Đã xóa sản phẩm "${cartItem.name}" khỏi giỏ hàng.`);
      } else {
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

function renderTable(data: (Store | Cart)[], containerId: string): void {
  const containerElement = document.getElementById(containerId) as HTMLElement;
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
