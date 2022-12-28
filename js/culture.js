const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

//轮播图图片
const slides = document.querySelectorAll(".slide");
// 正在播放的幻灯片
var Index = 0;
var autoPlay = true;

// 播放方向，前进或后退
var forward = true;
var interval = 3000;
next.addEventListener("click", NextPicture);
prev.addEventListener("click", Prevpicture);

// 是否自动播放
if (autoPlay) {
  setInterval(forward ? NextPicture : Prevpicture, interval);

}

//定义函数
function NextPicture() {
  let current = slides[Index];
  current.classList.remove("current");
  Index++;
  if (Index >= slides.length) {
    Index = 0;
  }
  slides[Index].classList.add("current");
}

function Prevpicture() {
  let current = slides[Index];
  current.classList.remove("current");
  Index--;
  if (Index < 0) {
   Index = slides.length - 1;
  }
  slides[Index].classList.add("current");
}
