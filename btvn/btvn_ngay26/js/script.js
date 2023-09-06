var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressDot = progressBar.querySelector(".dot");

var progressBarWidth = progressBar.clientWidth;

var timer = progressBar.querySelector(".timer");

var isDrag = false;
var initialClientX = 0;
var initialRate = 0;
var rate = 0;

// hàm nhận giá trị
var handleChange = function (value) {};

progressBar.addEventListener("mousedown", function (e) {
  // Tính tỉ lệ phần trăm giữa vị trí click với chiều rộng
  rate = (e.offsetX * 100) / progressBarWidth;

  // Update CSS vào progress
  progress.style.width = `${rate}%`;

  initialRate = rate;
  // console.log(rate);

  isDrag = true;

  initialClientX = e.clientX;

  var currentTime = (audio.duration * rate) / 100;
  currentTimeEl.innerHTML = getTime(currentTime);

  audio.currentTime = currentTime;
});

// Kéo dot
progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();

  isDrag = true;
  initialClientX = e.clientX;
});

document.addEventListener("mousemove", function (e) {
  e.stopPropagation();

  if (isDrag) {
    var space = e.clientX - initialClientX;
    rate = (space * 100) / progressBarWidth + initialRate;

    if (rate < 0) {
      rate = 0;
    }

    if (rate > 100) {
      rate = 100;
    }

    progress.style.width = `${rate}%`;

    var currentTime = (audio.duration * rate) / 100;
    currentTimeEl.innerHTML = getTime(currentTime);

    // timer.style.display = "block";
  }
});

document.addEventListener("mouseup", function (e) {
  isDrag = false;
  initialRate = rate;

  var currentTime = (audio.duration * rate) / 100;
  currentTimeEl.innerHTML = getTime(currentTime);

  audio.currentTime = currentTime;
});

/* 
Khi bấm chuột xuống vào dot:
- Cần lấy được clientX tại vị trí bấm chuột

Khi kéo chuột:
- Lấy được clientX ở vị trí gần nhất (kéo đến đâu lấy vị trí ở đó)
- Tính khoảng cách kéo: clientX mới nhất - clientX ban đầu khi click
*/

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;

var playBtn = document.querySelector(".play-btn");

var playIcon = `<i class="fas fa-play"></i>`;
var pausedIcon = `<i class="fas fa-pause"></i>`;

// hàm
var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  } `;
};

audio.addEventListener("loadeddata", function () {
  //   console.log(audio.duration);
  // trả về tổng thời gian theo s
  durationTimeEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  if (audio.paused) {
    audio.play();
    this.innerHTML = pausedIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  if (!isDrag) {
    currentTimeEl.innerText = getTime(this.currentTime);

    // tính tỉ lệ phần trăm
    var rate = (this.currentTime / this.duration) * 100;

    // update vào timer
    progress.style.width = `${rate}%`;

    // chức năng tua
  }
});

// khi đưa chuột vào thanh progress sẽ hiển thị thời gian tại vị trí con trỏ chuột
progressBar.addEventListener("mousemove", function (e) {
  timer.style.display = "block";
  timer.style.left = `${e.offsetX}px`;

  var rate = (e.offsetX * 100) / this.clientWidth;

  var currentTime = (audio.duration * rate) / 100;

  timer.innerHTML = getTime(currentTime);
});

progressDot.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

progressBar.addEventListener("mouseout", function (e) {
  timer.style.display = "none";
});

// Sau khi chạy hết, set các chỉ số về bằng 0, play-btn bằng playIcon
audio.addEventListener("ended", function (e) {
  rate = 0;
  audio.currentTime = 0;
  progress.style.width = 0;
  playBtn.innerHTML = playIcon;
});
