let slides = document.querySelector(".slides");
let slideimg = document.querySelectorAll(".slides li");
let slideBox = document.querySelector(".slide");

let prev_btn = document.querySelector(".controller>.prev");
let next_btn = document.querySelector(".controller>.next");

let cnt1 = 0;
let margin1 = 5;
let size1 = 50;

// next_btn.addEventListener("click", () => {
//   if (cnt1 < slideimg.length - 1) {
//     cnt1++;
//     slides.style.transform = "translateX(" + -(size1 + margin1) * cnt1 + "px)";
//   } else if (cnt1 === slideimg.length - 1) {
//     cnt1 = 0;
//     slides.style.transform = "translateX(" + -(size1 + margin1) * cnt1 + "px)";
//   }
// });
// prev_btn.addEventListener("click", () => {
//   if (cnt1 > 0) {
//     cnt1--;
//     slides.style.transform = "translateX(" + -(size1 + margin1) * cnt1 + "px)";
//   } else if (cnt1 === 0) {
//     cnt1 = slideimg.length - 1;
//     slides.style.transform = "translateX(" + -(size1 + margin1) * cnt1 + "px)";
//   }
// });

setInterval(() => {
  if (cnt1 < 1000) {
    cnt1++;
    slides.style.transition = "all 4s";
    slides.style.transform = "translateX(" + -(size1 + margin1) * cnt1 + "px)";
  } else if (cnt1 === slideimg.length - 1) {
    setTimeout(function () {
      slides.style.transition = "all 4s";
      cnt1 = 0;
      slides.style.transform =
        "translateX(" + -(size1 + margin1) * cnt1 + "px)";
    }, 0);
  }
}, 500);
setInterval(() => {
  for (let i = 0; i < 13; i++) {
    slides.append(slideimg[i].cloneNode(true));
    slideimg[i].remove();
  }
}, 3000);
