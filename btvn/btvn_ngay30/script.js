var downloadBtn = document.querySelector(".btn-download");
var menuType = document.querySelector(".menu-type");

var content = document.querySelector(".content");
var boldBtn = document.querySelector(".bold-btn");
var underlineBtn = document.querySelector(".underline-btn");
var italicBtn = document.querySelector(".italic-btn");
var colorInput = document.querySelector(".color-input");

var countBold = 0;
boldBtn.addEventListener("click", function () {
  document.execCommand("bold");
  countBold++;
  if (countBold % 2 === 1) {
    this.style.background = "#c850c0";
  } else {
    this.style.background = "";
  }
});

var countUderline = 0;
underlineBtn.addEventListener("click", function () {
  document.execCommand("underline");
  countUderline++;
  if (countUderline % 2 === 1) {
    this.style.background = "#c850c0";
  } else {
    this.style.background = "";
  }
});

var countItalic = 0;
italicBtn.addEventListener("click", function () {
  document.execCommand("italic");
  countItalic++;
  if (countItalic % 2 === 1) {
    this.style.background = "#c850c0";
  } else {
    this.style.background = "";
  }
});

colorInput.addEventListener("input", function () {
  document.execCommand("foreColor", false, colorInput.value);
});
