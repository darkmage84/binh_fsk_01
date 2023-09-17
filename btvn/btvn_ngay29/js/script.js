var listHidden = document.querySelector(".list-hidden");
var list = document.querySelector(".list");
var listItem = list.querySelectorAll(".list-item");

var dragging = null;

// console.log(list);
// console.log(listItem);

listItem.forEach(function (item) {
  //   console.log(listItem[i]);

  item.addEventListener("dragstart", function (e) {
    // chọn phần tử kéo để sắp xếp
    dragging = e.target;
    // console.log(dragging);
  });

  item.addEventListener("dragover", function (e) {
    // mặc định, phần tử ko thể được thả vào phần tử khác
    // e.preventDefault() ngăn chặn xử lý mặc định
    e.preventDefault();

    if (dragging == null) {
      return;
    }

    // thực hiện kéo thả, chèn node dragging vào trước item
    this.parentNode.insertBefore(dragging, this);
  });

  item.addEventListener("dragend", function (e) {
    dragging = null;
    render();
  });
});

// hàm đánh số mudole, số bài
// thủ công quá
function render() {
  var lessionList = list.querySelectorAll(".list-item:not(.active");
  var moduleList = list.querySelectorAll(".active");

  //   console.log(lessionList);

  lessionList.forEach(function (item, index) {
    // console.log(item.innerHTML);
    item.innerHTML = `Bài ${++index}: ${item.innerText}`;
  });

  moduleList.forEach(function (item, index) {
    item.innerHTML = `Module ${++index}: ${item.innerHTML}`;
  });
}
render(list);
