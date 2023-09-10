// Bài 1:
// Lấy kết quả giao giữa 2 mảng
console.log("Bài 1:");

var arr1 = [1, 4, 3, 2];
var arr2 = [5, 2, 6, 7, 1];
var result = [];

console.log(`mang arr1 = [${arr1}]`);
console.log(`mang arr2 = [${arr2}]`);

var result = arr1.reduce(function (prev, current) {
  if (arr2.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

// console.log(result);
console.log(`Giao giua 2 mang result = [${result}]`);

// Bài 2:
// Làm phẳng array sau (Chuyển về mảng 1 chiều)
console.log("Bài 2:");

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function singleArray(arr) {
  var newArr = arr.reduce(function (prev, current) {
    if (!Array.isArray(current)) {
      return prev.concat(current);
    }
    return prev.concat(singleArray(current));
  }, []);
  return newArr;
}
console.log(`Mang sau khi lam phang: ${singleArray(arr)}`);

/*
phương thức flat() trong es6
console.log(arr.flat(Infinity));
*/

// Bài 3: Tách phần tử trong mảng theo đúng kiểu dữ liệu

console.log("Bài 3:");

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

if (Array.isArray(arr)) {
  arr = arr.flat(Infinity);
  var newArray = arr.reduce(function (prev, current) {
    var type = typeof current;
    if (!prev[type]) {
      prev[type] = [];
    }
    prev[type].push(current);
    return prev;
  }, []);

  console.log(newArray);
}

// Bài 4

var arr = [
  {
    img: "img/11111.jpg",
    title: "Tiêu đề bài viết 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima assumenda accusantium vero ea tempore laborum, est veritatis facere nobis!",
  },
  {
    img: "img/11111.jpg",
    title: "Tiêu đề bài viết 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima assumenda accusantium vero ea tempore laborum, est veritatis facere nobis!",
  },
  {
    img: "img/11111.jpg",
    title: "Tiêu đề bài viết 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima assumenda accusantium vero ea tempore laborum, est veritatis facere nobis!",
  },
];

for (var i in arr) {
  var str;
  if (i % 2 === 0) {
    str = `
    <div class="item">
             <div class="img-odd">
                 <img src="${arr[i]["img"]}" alt="">
             </div>
             <div class="content">
                 <h2 class="heading-lv2">
                     ${arr[i]["title"]}
                 </h2>
                 <p class="desc">${arr[i]["content"]}</p>
             </div>
     </div>
    `;
  } else {
    str = `
    <div class="item">
             <div class="img-even">
                 <img src="${arr[i]["img"]}" alt="">
             </div>
             <div class="content">
                 <h2 class="heading-lv2">
                     ${arr[i]["title"]}
                 </h2>
                 <p class="desc">${arr[i]["content"]}</p>
             </div>
     </div>
    `;
  }
  document.body.insertAdjacentHTML("beforeBegin", str);
}
