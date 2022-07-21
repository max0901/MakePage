let slides = document.querySelector(".slides");
let slides1 = document.querySelectorAll(".slides");
let slideimg = document.querySelectorAll(".slides li");
let slideBox = document.querySelector("#slide");

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

// 첫번쨰
// setInterval(() => {
//   if (cnt1 < 1000) {
//     cnt1++;
//     slides.style.transition = "all 4s";
//     slides.style.transform = "translateX(" + -(size1 + margin1) * cnt1 + "px)";
//   } else if (cnt1 === slideimg.length - 1) {
//     setTimeout(function () {
//       slides.style.transition = "all 4s";
//       cnt1 = 0;
//       slides.style.transform =
//         "translateX(" + -(size1 + margin1) * cnt1 + "px)";
//     }, 0);
//   }
// }, 500);
// setInterval(() => {
//   for (let i = 0; i < 13; i++) {
//     // slides.append(slideimg[i].cloneNode(true));
//     slideBox.append(slides1[i].cloneNode(true));
//     slides1[i].remove();
//   }
// }, 3000);

// 두번쨰
setInterval(() => {
  if (cnt1 < 1000) {
    cnt1++;
    for (let i = 0; i < 1000; i++) {
      slides1[i].style.transition = "all 4s";
      slides1[i].style.transform =
        "translateX(" + -(size1 + margin1) * cnt1 + "px)";
    }
  } else if (cnt1 === slideimg.length - 1) {
    setTimeout(function () {
      for (let i = 0; i > 1000; i++) {
        slides1[i].style.transition = "all 4s";
        cnt1 = 0;
        slides1[i].style.transform =
          "translateX(" + -(size1 + margin1) * cnt1 + "px)";
      }
    }, 0);
  }
}, 500);
setInterval(() => {
  for (let i = 0; i < 13; i++) {
    // slides.append(slideimg[i].cloneNode(true));
    slideBox.append(slides1[i].cloneNode(true));
    slides1[i].remove();
  }
}, 3000);
