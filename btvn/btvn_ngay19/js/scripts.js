// Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

console.log("Bài 1:");

var arr = [3, 6, 1, 13, 17, 9, 4, 2, 23, 11];
console.log(`mang arr: ${arr}`);

var max = arr[0];
var maxLocation = 0;
var min = arr[0];
var minLocation = 0;

// cach1
// for (var i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//     maxLocation = i;
//   }
// }

// for (var i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//     minLocation = i;
//   }
// }

// cach2
for (var i in arr) {
  if (max < arr[i]) {
    max = arr[i];
    maxLocation = i;
  }

  if (min > arr[i]) {
    min = arr[i];
    minLocation = i;
  }
}

console.log(`so lon nhat trong mang: arr[${maxLocation}] = ${max}`);
console.log(`so nho nhat trong mang: arr[${minLocation}] = ${min}`);

// Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng.
// Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”

console.log("Bài 2:");

var arr = [3, 6, 1, 13, 17, 9, 4, 2, 23, 11];
// var arr = [4, 6, 8, 15, 18, 21, 28];
console.log(`mang arr: ${arr}`);

function isPrime(number) {
  if (number % 1 !== 0 || number <= 1) {
    return false;
  }

  for (var i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

var total = 0;
var count = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (isPrime(arr[i])) {
//     total += arr[i];
//     count++;
//   }
// }

for (var i in arr) {
  if (isPrime(arr[i])) {
    total += arr[i];
    count++;
  }
}

if (total === 0) {
  console.log(`Khong co so nguyen to nao trong mang`);
} else {
  console.log(`Tong cac so nguyen to trong mang la: ${total}`);
  console.log(
    `Trung binh cong cac so nguyen to trong mang la: ${total} / ${count} = ${
      total / count
    }`
  );
}

// Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1
// (Gọi là lọc trùng). In ra mảng sau khi đã xử lý

console.log("Bài 3:");

var arr = [4, 9, 1, 7, 4, 6, 9, 5, 1];
console.log(`mang arr: ${arr}`);

var newArr = [];

// for (var i = 0; i < arr.length - 1; i++) {
//   for (var j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       console.log(`arr[${i}] = arr[${j}] = ${arr[i]}`);
//     }
//   }
// }

for (var i in arr) {
  if (newArr.includes(arr[i])) {
    continue;
  }
  newArr[newArr.length] = arr[i];
}
console.log(`mang sau khi loc phan tu trung: ${newArr}`);

// Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
// Sắp xếp mảng theo thứ tự tăng dần
// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng

console.log("Bài 4:");

var arr = [10, 6, 13, 9, 4];
console.log(`mang arr: ${arr}`);

// cach1
// function ascendingSort(array) {
//   for (var i = 0; i < array.length - 1; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
// }
// ascendingSort(arr);
// console.log(`mang sau khi sap xep: ${arr}`);

// cach2
arr.sort(function (next, prev) {
  return next - prev;
});
console.log(`mang sau khi sap xep: ${arr}`);

// var element = 1;
var element = 7;
// var element = 100;
console.log(`Them element = ${element} vao mang:`);

if (element < arr[0]) {
  // thêm vào đầu
  arr.unshift(element);
} else if (element > arr[arr.length - 1]) {
  // thêm vào cuối
  arr.push(element);
} else {
  // thêm vào giữa
  var indexInsert;
  for (var i = 0; i < arr.length; i++) {
    // console.log(i);
    if (element >= arr[i] && element < arr[i + 1]) {
      console.log(i);
      indexInsert = i;
      break;
    }
  }

  //nối
  arr = [].concat(
    arr.slice(0, indexInsert + 1),
    element,
    arr.slice(indexInsert + 1)
  );
}

console.log(`mang sau khi them: ${arr}`);
