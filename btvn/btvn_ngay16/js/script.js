// # Bài 1: Hoán vị 2 số
// Input: Cho trước 2 số a, b
// Output: Thực hiện hoán vị 2 số không dùng biến trung gian
console.log('Bai 1:');

var a = 10;
var b = 5;

console.log(`a = ${a}`);
console.log(`b = ${b}`);

a = a + b;
b = a - b;
a = a - b;

console.log('Sau khi hoan vi: ');
console.log(`a = ${a}`);
console.log(`b = ${b}`);

/* ---------------------------------------- */
// # Bài 2: Thực hiện phép toán
// Viết chương trình tính toán biểu thức sau
// S = 10 + 20 + 5^10 / 2
console.log('Bai 2:');

var S;
S = 10 +20 + 5 ** 10 / 2;

console.log(`S = ${S}`);

/* ---------------------------------------- */
// # Bài 3: Tìm số lớn nhất
// Học viên tìm hiểu về câu lệnh rẽ nhánh và giải bài tập sau
// Input: Cho trước 3 số a, b, c
// Output: Tìm số lớn nhất trong 3 số và hiển thị kết quả
console.log('Bai 3:');

var a = 3;
var b = 9;
var c = 5;
var max = a;

console.log(`day so cho: ${a} ${b} ${c}`);


if (b > a) {
    if (b > c) { max = b; } 
    else max = c;
} else if (c > a) max = c;
else { max = a;}

console.log(`max = ${max}`);

/* ---------------------------------------- */
// # Bài 4: Kiểm tra số cùng dấu
// Input: Cho trước 2 số a, b
// Output: Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
console.log('Bai 4:');

var a = -5;
var b = 5;

console.log(`cho 2 so a va b la: ${a} ${b}`);

if (a == 0 || b == 0) console.log("khong xac dinh vi co 1 so bang 0");
else if (a*b > 0) console.log("cung dau");
else console.log("khac dau");

/* ---------------------------------------- */
// # Bài 5: Sắp xếp 3 số
// Input: Cho trước 3 số a, b, c
// Output: Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
console.log('Bai 5:');

var a=5;
var b=10;
var c=4;
var max, min, mid;

console.log(`day so truoc khi sap xep: ${a} ${b} ${c}`);

max = a;
if (b > a) {
    if (b > c) { max = b; } 
    else max = c;
} else if (c > a) max = c;
else { max = a;}

min = a;
if (b < a) {
    if (b < c) min = b;
    else min = c;
} else if (c < a) min = c;
else min = a;

if (a == max) {
    if (b == min) mid = c; 
    else mid = b;
} else if (b == max) {
    if (a == min) mid = c;
    else mid = a;
} else {
    if (a == min) mid =b;
    else mid = a;
}


console.log(`day so sau khi sap xep: ${min} ${mid} ${max}`);

