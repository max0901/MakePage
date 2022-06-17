let slides = document.querySelector(".slides");
let slideimg = document.querySelectorAll(".slides li");

let prev_btn = document.querySelector(".controller>.prev");
let next_btn = document.querySelector(".controller>.next");

let cnt1 = 0;
let margin1 = 50;
let size1 = 100;

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
  if (cnt1 < slideimg.length - 1) {
    cnt1++;
    slides.style.transition = "all 1s";
    slides.style.transform = "translateX(" + -(size1 + margin1) * cnt1 + "px)";
    for (let i = 0; i < slideimg.length - 1; i++) {
      clone(i);
    }
  } else if (cnt1 === slideimg.length - 1) {
    setTimeout(function () {
      slides.style.transition = "0s";
      cnt1 = 0;
      slides.style.transform =
        "translateX(" + -(size1 + margin1) * cnt1 + "px)";
    });
  }
}, 500);
let clone = (i) => {
  slides.append(slideimg[i].cloneNode(true));
};
