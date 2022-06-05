//쿼리셀렉을써서 나머지가 작동안하고 맨위에꺼만 작동된것
//쿼리셀렉올을써서 나머지도 작동하게 만들것
//js페이지 한페이지로 줄일것

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
let slides2 = document.querySelector(".show_inner");
let slideimg2 = document.querySelectorAll("#show_inner1 li");
currentIdx2 = 0;
slideCount2 = slideimg2.length;
prev2 = document.querySelector(".slide_btn1 #prev");
next2 = document.querySelector(".slide_btn1 #next");
slideWidth2 = 800;
slideMargin2 = 100;

function moveSlide(num) {
  slides2.style.left = -num * 900 + "px";
  currentIdx2 = num;
}

prev2.addEventListener("click", function () {
  if (currentIdx2 !== 0) moveSlide(currentIdx2 - 1);
});

next2.addEventListener("click", function () {
  if (currentIdx2 !== slideCount2 - 1) {
    moveSlide(currentIdx2 + 1);
  }
});

let slides3 = document.querySelector("#show_inner2");
let slideimg3 = document.querySelectorAll("#show_inner2 li");
currentIdx3 = 0;
slideCount3 = slideimg3.length;
prev3 = document.querySelector(".slide_btn2 > #prev");
next3 = document.querySelector(".slide_btn2 > #next");

function moveSlide2(num) {
  slides3.style.left = -num * 900 + "px";
  currentIdx3 = num;
}

prev3.addEventListener("click", function () {
  if (currentIdx3 !== 0) moveSlide2(currentIdx3 - 1);
});

next3.addEventListener("click", function () {
  if (currentIdx3 !== slideCount3 - 1) {
    moveSlide2(currentIdx3 + 1);
  }
});
