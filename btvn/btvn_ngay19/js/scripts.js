// Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

console.log("Bài 1:");

var arr = [3, 6, 1, 13, 17, 9, 4, 2, 23, 11];
console.log(`mang arr: ${arr}`);

var max = arr[0];
var maxLocation = 0;
var min = arr[0];
var minLocation = 0;

for (var i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
    maxLocation = i;
  }
}

for (var i = 0; i < arr.length; i++) {
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
console.log(`mang arr: ${arr}`);

var total = 0;

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

for (var i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    total += arr[i];
  }
}

if (total === 0) {
  console.log(`Khong co so nguyen to nao trong mang`);
} else {
  console.log(`Tong cac so nguyen to trong mang la: ${total}`);
}

// Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1
// (Gọi là lọc trùng). In ra mảng sau khi đã xử lý

console.log("Bài 3:");

var arr = [4, 9, 1, 7, 4, 6, 9, 5, 1];
console.log(`mang arr: ${arr}`);

for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log(`arr[${i}] = arr[${j}] = ${arr[i]}`);
    }
  }
}

// Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
// Sắp xếp mảng theo thứ tự tăng dần
// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng

console.log("Bài 4:");

var arr = [3, 6, 1, 13, 17, 9, 4, 2, 23, 11];
console.log(`mang arr: ${arr}`);

function ascendingSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

ascendingSort(arr);
console.log(`mang sau khi sap xep: ${arr}`);

console.log("Them 1 so vao vi tri bat ky:");
