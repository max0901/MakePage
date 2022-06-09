let slides = document.querySelector(".slides");
let slideimg = document.querySelectorAll(".slides li");
currentIdx = 0;
slideCount = slideimg.length;
prev = document.querySelector(".controller>.prev");
next = document.querySelector(".controller>.next");
slideWidth = 150;
slideMargin = 400;
making();
init();

function making() {
  for (let i = 0; i < slideCount; i++) {
    let copy = slideimg[i].cloneNode(true);
    slides.append(copy);
    if (i == slideCount - 1) {
      let last = slides.lastElementChild.cloneNode(true);
      slides.insertBefore(last, slides.firstElementChild);
    }
  }
}
function init() {
  slides.style.width = (slideWidth + slideMargin) * (slideCount - 1) + "px";

  slides.style.left = -(slideWidth + slideMargin) + "px";
}
let stop;

function moving() {
  slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
  slides.style.transition = `${0.5}s ease-out`;

  currentIdx++;
  if (currentIdx > slideCount) {
    currentIdx = 1;
  }
  stop = setTimeout(moving, 1000);
}

function stop() {
  clearTimeout(stop);
}
moving();

// next.addEventListener("click", function () {
//   if (currentIdx <= slideCount - 1) {
//     slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
//     slides.style.transition = `${0.5}s ease-out`;
//   }
//   if (currentIdx === slideCount - 1) {
//     setTimeout(function () {
//       slides.style.left = -(slideWidth + slideMargin) + "px";
//       slides.style.transition = `${0}s `;
//     }, 500);
//     currentIdx = -1;
//   }
//   currentIdx += 1;
// });

// prev.addEventListener("click", function () {
//   if (currentIdx >= 0) {
//     slides.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
//     slides.style.transition = `${0.5}s ease-out`;
//   }
//   if (currentIdx === 0) {
//     setTimeout(function () {
//       slides.style.left = -slideCount * (slideWidth + slideMargin) + "px";
//       slides.style.transition = `${0}s ease-out`;
//     }, 500);
//     currentIdx = slideCount;
//   }
//   currentIdx -= 1;
// });
