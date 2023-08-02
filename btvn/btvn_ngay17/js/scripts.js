// Bài 1: Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

console.log("Bai 1:");

function costTaxi(distance) {
  var price;
  var level1 = 15000;
  var level2 = 13500;
  var level3 = 11000;

  if (distance <= 0) {
    return console.log("Unknown");
  }

  if (distance <= 1) {
    price = distance * level1;
  } else if (1 < distance && distance <= 5) {
    price = level1 + (distance - 1) * level2;
  } else {
    price = level1 + level2 * 4 + (distance - 5) * level3;
    if (distance > 120) {
      price = price * 0.9;
    }
  }

  return price;
}

console.log(`Tien taxi cua ban la ${costTaxi(-1)} vnd`);
console.log(`Tien taxi cua ban la ${costTaxi(0.9)} vnd`);
console.log(`Tien taxi cua ban la ${costTaxi(2.5)} vnd`);
console.log(`Tien taxi cua ban la ${costTaxi(6)} vnd`);
console.log(`Tien taxi cua ban la ${costTaxi(120)} vnd`);
console.log(`Tien taxi cua ban la ${costTaxi(130)} vnd`);

// ---------------------------------------------------------------

// Bài 2: Tính tiền điện
// Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau
// Input: Số điện tiêu thụ hàng tháng
// Output: Hiển thị số tiền phải đóng

console.log("Bai 2:");

function costElectricity(totalPowerConsumption) {
  var cost = 0;
  var level1 = 1678;
  var level2 = 1734;
  var level3 = 2014;
  var level4 = 2536;
  var level5 = 2834;
  var level6 = 2927;

  if (totalPowerConsumption <= 0) {
    return console.log("Unknown");
  }

  if (0 < totalPowerConsumption && totalPowerConsumption <= 50) {
    cost = totalPowerConsumption * level1;
  } else if (51 <= totalPowerConsumption && totalPowerConsumption <= 100) {
    cost = 50 * level1 + (totalPowerConsumption - 50) * level2;
  } else if (101 <= totalPowerConsumption && totalPowerConsumption <= 200) {
    cost = 50 * level1 + 50 * level2 + (totalPowerConsumption - 100) * level3;
  } else if (201 <= totalPowerConsumption && totalPowerConsumption <= 300) {
    cost =
      50 * level1 +
      50 * level2 +
      100 * level3 +
      (totalPowerConsumption - 200) * level4;
  } else if (301 <= totalPowerConsumption && totalPowerConsumption <= 400) {
    cost =
      50 * level1 +
      50 * level2 +
      100 * level3 +
      100 * level4 +
      (totalPowerConsumption - 300) * level5;
  } else {
    cost =
      50 * level1 +
      50 * level2 +
      100 * level3 +
      100 * level4 +
      100 * level5 +
      (totalPowerConsumption - 400) * level6;
  }

  return cost;
}

console.log(`Tien dien la ${costElectricity(25)}`);
console.log(`Tien dien la ${costElectricity(125)}`);
console.log(`Tien dien la ${costElectricity(255)}`);

// ---------------------------------------------------------------

// Bài 3: Tính giá trị biểu thức
// Cho trước số nguyên n. Tính giá trị biểu thức sau
// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

console.log("Bai 3:");

function expression1(number) {
  // S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
  if (number % 1 !== 0) {
    return console.log("unknown");
  }

  var total = 0;
  console.log("total = 0 ");
  for (var i = 1; i <= number; i++) {
    total += i * (i + 1);
    console.log(`+ ${i}*${i + 1} `);
  }
  return total;
}

console.log(`total = ${expression1(5)}`);

// ---------------------------------------------------------------

// Bài 4: Viết hàm kiểm tra số nguyên tố
// Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
// Hàm có 1 tham số là số cần kiểm tra
// Hàm có giá trị trả về
// Gọi hàm trong câu điều kiện if else

console.log("Bai 4:");

function isPrime(number) {
  if (number % 1 !== 0 || number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
      i = number;
    }
  }
  return true;
}

console.log(`Kiem tra so 6:`);

if (isPrime(6)) {
  console.log(` La so nguyen to`);
} else {
  console.log("Khong la so nguyen to");
}

// ---------------------------------------------------------------

// Bài 5: Vẽ tam giác số
// Vẽ tam giác số sau với N dòng
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

console.log("Bai 5:");

var startJ = 1;
var endJ = 1;
var k = 0;
var l = 1;

function drawTriangle(number) {
  var line = "";
  for (var i = 1; i <= number; i++) {
    startJ = startJ + k++;
    endJ = endJ + l++;
    for (var j = startJ; j < endJ; j++) {
      line += j + " ";
    }
    line += "\n";
  }
  console.log(line);
}

drawTriangle(5);
