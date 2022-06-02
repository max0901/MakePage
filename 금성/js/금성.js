let slides = document.querySelector(".slides");
let slideimg = document.querySelectorAll(".slides li");
currentIdx = 0;
slideCount = slideimg.length;
prev = document.querySelector(".controller>#prev");
next = document.querySelector(".controller>#next");
slideWidth = 150;
slideMargin = 50;

next.addEventListener("click", function () {
  if (currentIdx <= slideCount - 1) {
    slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
    slides.style.transition = `${0.5}s ease-out`;
  }
});

prev.addEventListener("click", function () {
  if (currentIdx >= 0) {
    slides.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
    slides.style.transition = `${0.5}s ease-out`;
  }
});
