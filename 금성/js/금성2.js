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
