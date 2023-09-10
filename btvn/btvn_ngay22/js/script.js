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

// Bài 3:
console.log("Bài 3:");

const categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

// console.log(categories);

function convertNested(categories, parent = 0) {
  var result = [];
  if (categories.length) {
    categories.forEach(function (category, i) {
      if (category.parent === parent) {
        var children = convertNested(categories, category.id);
        if (children.length) {
          category.children = children;
        }
        // console.log(category);

        result = result.filter(function (item) {
          return true;
        });

        result[category.id] = category;
      }
    });
  }

  return result;
}

var nested = convertNested(categories);
console.log(nested);

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
