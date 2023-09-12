var product_data = [
  {
    product_id: 1,
    product_name: "San pham 1",
    product_price: 1000,
  },
  {
    product_id: 2,
    product_name: "San pham 2",
    product_price: 2000,
  },
  {
    product_id: 3,
    product_name: "San pham 3",
    product_price: 3000,
  },
  {
    product_id: 4,
    product_name: "San pham 4",
    product_price: 4000,
  },
  {
    product_id: 5,
    product_name: "San pham 5",
    product_price: 5000,
  },
];

// import product data (item)
var count = 0;
product_data.forEach(function (item) {
  count++;
  var product_item = "";
  product_item += `<tr>`;
  product_item += `<td> ${count} </td>`;
  product_item += `<td> ${item.product_name}  </td>`;
  product_item += `<td> ${item.product_price.toLocaleString()}  </td>`;
  product_item += `
            <td>
            <input type="number" id="quantity_${item.product_id}" value="1">
            <button type="button" id="add_to_cart_${item.product_id}">Them</butotn>
            </td> `;
  product_item += `</tr>`;

  document.querySelector(".product-table").innerHTML += product_item;
});

var add_to_cart = document.querySelectorAll(".product-table button");
// console.log(add_to_cart);
if (add_to_cart.length > 0) {
  for (var i in add_to_cart) {
    add_to_cart[i].onclick = function () {
      var quantity_id = this.parentElement.querySelector("input").id;
      //   console.log(quantity_id, typeof quantity_id);
      var product_id = quantity_id.replace("quantity_", "");
      //   console.log(product_id, typeof product_id);

      product_id = parseInt(product_id);
      //   console.log(product_id, typeof product_id);

      var quantity_value = document.querySelector("#" + quantity_id).value;
      //   console.log(quantity_value, typeof quantity_value);
      if (quantity_value < 1) {
        quantity_value = 1;
      }

      var cart_data = sessionStorage.getItem("cart");
      cart_data = JSON.parse(cart_data);
      if (cart_data == null) {
        cart_data = [];
        var cart_object = {
          product_id: product_id,
          quantity: quantity_value,
        };

        cart_data.push(cart_object);
      } else {
        var check = false;
        cart_data.forEach(function (cart_item, cart_key) {
          if (product_id == cart_item.product_id) {
            var current_quantity = parseInt(cart_item.quantity);
            current_quantity += parseInt(quantity_value);
            cart_data[cart_key] = {
              product_id: product_id,
              quantity: current_quantity,
            };
            check = true;
          }
        });

        if (check == false) {
          var cart_object = {
            product_id: product_id,
            quantity: quantity_value,
          };
          cart_data.push(cart_object);
        }
      }

      var cart_json = JSON.stringify(cart_data);

      sessionStorage.setItem("cart", cart_json);

      renderCart();
    };
  }
}

function get_product(id) {
  var result;
  product_data.forEach(function (data) {
    if (data.product_id == id) {
      result = data;
    }
  });
  return result;
}

function renderCart() {
  var cart_data = sessionStorage.getItem("cart");
  cart_data = JSON.parse(cart_data);
  if (cart_data !== null && cart_data.length > 0) {
    var cart_table = "";
    cart_table += `<table width="100%" border="1" cellpadding="1" cellspacing="1"  class="cart-table">`;
    cart_table += `
      <tr>
          <th>STT</th>
          <th>Ten san pham</th>
          <th>Gia</th>
          <th>So luong</th>
          <th>Thanh tien</th>
          <th>Xoa</th>
      </tr>
    `;
    cart_table += `</table>`;
    cart_table += `
    <div class="action-btn">
        <button type="button" class="update-cart">Cap nhat gio hang</button>
        <button type="button" class="delete-cart">Xoa gio hang</button>
    </div>
    `;

    document.querySelector(".cart-data").innerHTML = cart_table;
    var count = 0;
    var total_quantity = 0;
    var total_amount = 0;
    cart_data.forEach(function (cart_item) {
      count++;

      var detail = get_product(cart_item.product_id);

      var amount =
        parseInt(detail.product_price) * parseInt(cart_item.quantity);
      total_amount += parseInt(amount);
      total_quantity += parseInt(cart_item.quantity);
      var tr_html = "";
      tr_html += `
      <tr>
              <td>${count}</td>

              <td>${detail.product_name}</td>

              <td>${detail.product_price.toLocaleString()}</td>

              <td><input type="number" class="quantity" data-id="${
                cart_item.product_id
              }" value="${cart_item.quantity}"></td>

              <td>${amount.toLocaleString()}</td>

              <td><button type="button" class="delete-item">Xoa</button></td>
      </tr>
      `;

      document.querySelector(".cart-table").innerHTML += tr_html;
    });

    if (count > 0) {
      var last_tr = "";
      last_tr += `
      <tr>
        <td colspan="3">Tong</td>

        <td>${total_quantity}</td>

        <td colspan="2">${total_amount.toLocaleString()}</td>
        </tr>
      `;

      document.querySelector(".cart-table").innerHTML += last_tr;
    }

    updateCart();

    deleteCart();

    deleteAll();
  } else {
    document.querySelector(
      ".cart-data"
    ).innerHTML = `<h3 style="color: red;">Gio hang hien dang trong</h3>`;
  }
}

function updateCart() {
  document.querySelector(".cart-data .update-cart").onclick = function () {
    var cart_arr = document.querySelectorAll(".cart-table tbody .quantity");
    if (cart_arr !== null && cart_arr.length > 0) {
      cart_arr.forEach(function (cart_item) {
        var quantity_value = parseInt(cart_item.value);
        var product_id = parseInt(cart_item.getAttribute("data-id"));

        var cart_data = sessionStorage.getItem("cart");
        cart_data = JSON.parse(cart_data);

        cart_data.forEach(function (value, key) {
          if (product_id == value.product_id) {
            if (quantity_value > 0) {
              cart_data[key] = {
                product_id: product_id,
                quantity: parseInt(quantity_value),
              };
            } else {
              cart_data.splice(key, 1);
            }
          }
        });

        var cart_json = JSON.stringify(cart_data);

        sessionStorage.setItem("cart", cart_json);
      });

      //   alert("Cap nhat thanh cong");

      renderCart();
    }
  };
}

function deleteCart() {
  document.querySelectorAll(".delete-item").forEach(function (del_item) {
    del_item.onclick = function () {
      if (confirm("Xoa san pham khoi gio hang?")) {
        var product_id = this.parentElement.parentElement
          .querySelector(".quantity")
          .getAttribute("data-id");
        product_id = parseInt(product_id);

        var cart_data = sessionStorage.getItem("cart");

        cart_data = JSON.parse(cart_data);

        cart_data.forEach(function (value, key) {
          if (product_id == value.product_id) {
            cart_data.splice(key, 1);
          }
        });

        var cart_json = JSON.stringify(cart_data);

        sessionStorage.setItem("cart", cart_json);
        // alert("Xoa san pham thanh cong");
        renderCart();
      }
    };
  });
}

function deleteAll() {
  document.querySelector(".delete-cart").onclick = function () {
    if (confirm("Xoa tat ca trong gio hang?")) {
      sessionStorage.removeItem("cart");
      //   alert("Xoa gio hang thanh cong");
      renderCart();
    }
  };
}

renderCart();
