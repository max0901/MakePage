//쿼리셀렉을써서 나머지가 작동안하고 맨위에꺼만 작동된것
//쿼리셀렉올을써서 나머지도 작동하게 만들것
//js페이지 한페이지로 줄일것

let slides = document.querySelectorAll(".slides");
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

let slides2 = document.querySelectorAll(".show_inner");
let slideimg2 = document.querySelectorAll(".show_inner li");
currentIdx2 = 0;
slideCount2 = 4;
prev2 = document.querySelectorAll(".slide_btn1 .prev");
next2 = document.querySelectorAll(".slide_btn1 .next");
slideWidth2 = 800;
slideMargin2 = 100;
for (let i = 0; i < slides2.length; i++) {
  function moveSlide(num) {
    slides2[i].style.left = -num * 900 + "px";
    currentIdx2 = num;
  }
  prev2[i].addEventListener("click", function () {
    if (currentIdx2 !== 0) moveSlide(currentIdx2 - 1);
  });

  next2[i].addEventListener("click", function () {
    if (currentIdx2 !== slideCount2 - 1) {
      moveSlide(currentIdx2 + 1);
    }
  });
}
