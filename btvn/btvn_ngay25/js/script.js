var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var carouselDot = carousel.querySelector(".carousel-dot");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");

// 1. Tính toán số lượng ảnh:
var carouselItems = carouselInner.querySelectorAll(".item");
// console.log(carouselItems.length);

// 2. Xử lý
if (carouselItems.length) {
  // 2.1. Lấy chiều rộng của 1 item
  var itemWidth = carouselInner.clientWidth;
  // clientWidth trả về chiều rộng của Element

  // 2.2. Tính tổng chiều rộng các item
  var totalWidth = itemWidth * carouselItems.length;

  // 2.3. Cập nhật CSS cho carousel-inner
  carouselInner.style.width = `${totalWidth}px`;

  // renderDot
  renderDot();

  // 2.4. Xử lý chuyển slide khi click vào button
  var position = 0;
  var index = 0;
  navNext.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      index++;
      position -= itemWidth;
      carouselInner.style.translate = `${position}px`;
      renderDot(index);
    }
  });

  navPrev.addEventListener("click", function () {
    if (position < 0) {
      index--;
      position += itemWidth;
      carouselInner.style.translate = `${position}px`;
      renderDot(index);
    }
  });
}

// hàm hiển thị các dot để chuyển ảnh
function renderDot(indexDot = 0) {
  var dotHtml = "";
  carouselItems.forEach(function (item, _index) {
    dotHtml += `
    <span data-index="${_index}" ${
      +_index === +indexDot ? 'class="active"' : ""
    }></span>
    `;
  });

  carouselDot.innerHTML = dotHtml;

  carouselDot.addEventListener("click", function (e) {
    if (e.target.nodeName === "SPAN") {
      var indexClicked = e.target.dataset.index;
      index = indexClicked;
      goSlide();
    }
  });
}

function goSlide() {
  position = 0 - index * itemWidth;
  carouselInner.style.translate = `${position}px`;
  renderDot(index);
}

renderDot();

// vuốt để chuyển slide
var isDrag = false;
var initialOffsetX = 0;
var moveWidth;

carousel.addEventListener("mousedown", function (e) {
  e.preventDefault();
  carousel.classList.add("drag");
});

carousel.addEventListener("mouseup", function (e) {
  e.preventDefault();
  carousel.classList.remove("drag");
});

carouselInner.addEventListener("mousedown", function (e) {
  e.preventDefault();
  if (e.which === 1) {
    isDrag = true;
    initialOffsetX = e.offsetX;
  }
});

carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
  carouselInner.style.transition = null;
  if (moveWidth < 0) {
    if (Math.abs(moveWidth) > 100 && index < carouselItems.length - 1) {
      index++;
    }
    goSlide(index);
  } else {
    if (Math.abs(moveWidth) > 100 && index > 0) {
      index--;
    }
    position = 0 - index * itemWidth;
    carouselInner.style.translate = `${position}px`;
    goSlide(index);
  }
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    moveWidth = e.offsetX - initialOffsetX;
    carouselInner.style.transition = "none";
    carouselInner.style.translate = `${position + moveWidth}px`;
  }
});
