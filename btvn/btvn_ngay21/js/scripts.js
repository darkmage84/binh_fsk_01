// Bài 1:
// Viết hàm getError(field) có tham số truyền vào là field tương ứng với nhóm cần lấy lỗi.
// Tuy nhiên, chỉ trả về 1 chuỗi là lỗi đầu tiên của 1 nhóm
console.log("Bài 1:");

var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

var getError = function (field) {
  if (errors[field]) {
    var error = errors[field];
    var key = Object.keys(error).at(0);
    return error[key];
  }
  return;
};

console.log(getError("name"));
console.log(getError("error"));
console.log(getError("email"));
console.log(getError("password"));

// Bài 2:
console.log("Bài 2:");

function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

const customers = [
  new Customer("Nguyễn Văn A", 11, "Ha Noi"),
  new Customer("Nguyễn Văn B", 2, "Hai Phong"),
  new Customer("Nguyễn Văn C", 12, "TP.HCM"),
];

var createCustomers = function (customers) {
  if (customers.length) {
    customers = customers.map(function (customer) {
      var shortName =
        customer.name.split(" ").slice(0, 1).join() +
        " " +
        customer.name.split(" ").slice(-1).join();
      customer.shortName = shortName;
      return customer;
    });

    customers.sort(function (next, prev) {
      return next.age - prev.age;
    });

    return customers;
  }
};

var result = createCustomers(customers);
console.log(result);

// Bài 3:
console.log("Bài 3:");

function Person(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

var register = function (name, email, password) {
  var errors = {};
  if (!name) {
    errors.name = "Tên chưa được nhập!";
  }

  if (!email) {
    errors.email = "Email chưa được nhập!";
  }

  if (!password) {
    errors.password = "Password chưa được nhập!";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  var user = new Person(name, email, password);
  user.role = "user";

  data.push(user);

  return user;
};

var login = function (email, password) {
  var dataLogin = data.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (dataLogin) {
    return dataLogin;
  }

  return console.log("Thông tin đăng nhập không hợp lệ!");
};

var data = [];

var account1 = register("Nguyen Van A", "nguyenvana@email.com", "123456");
console.log(account1);

var account2 = register("Nguyen Van B", "nguyenvanb@email.com", "147369");
console.log(account2);

var account3 = register("Nguyen Van C", "nguyenvanc@email.com", "987654");
console.log(account3);

var dataLogin = login("nguyenvana@email.com", "123456@");
// console.log(dataLogin);

var dataLogin = login("nguyenvanb@email.com", "147369");
console.log(dataLogin);
