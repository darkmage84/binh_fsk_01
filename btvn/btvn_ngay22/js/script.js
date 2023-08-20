// Bài 1:
console.log("Bài 1:");

var calcTotal = function (...args) {
  var result = 0;
  for (var i of args) {
    if (!isNaN(i) && i !== Infinity && typeof i === "number") {
      result += i;
    } else {
      console.log("Dữ liệu truyền vào không hợp lệ!");
      return;
    }
  }
  return result;
};

console.log(calcTotal(1, 5, 6, 9, 4, 12));

// Bài 2:
console.log("Bài 2:");

var price1 = 12000;
var price2 = "120000000";
Number.prototype.getCurrency = function (currency) {
  if (currency === "đ" || currency === "Đ") {
    return this.toLocaleString("vi", { style: "currency", currency: "VND" });
  }
};
console.log(price1.getCurrency("đ"));
console.log(parseInt(price2).getCurrency("đ"));

// Bài 4:
console.log("Bài 4:");

Array.prototype.reduce2 = function (callback, initialValue) {
  if (this.length === 0) {
    return "Error!";
  }

  var currentValue = initialValue !== undefined ? initialValue : this[0];
  var startIndex = initialValue !== undefined ? 0 : 1;

  for (var i = startIndex; i < this.length; i++) {
    currentValue = callback(currentValue, this[i]);
  }

  return currentValue;
};

var result = [4, 6, 2, 9, 7, 2, 3, 5].reduce2((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(result);
