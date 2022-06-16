const banner = document.getElementsByClassName("show_inner");
const bannerLi = document.querySelectorAll("#show_inner1 li");

let prev = document.querySelectorAll(".prev");
let next = document.querySelectorAll(".next");

const size = bannerLi[0].clientWidth;
const margin = 100;
let cnt = 0;

for (let i = 0; i < prev.length; i++) {
  next[i].addEventListener("click", () => {
    if (cnt < bannerLi.length - 1) {
      cnt++;
      banner[i].style.transform =
        "translateX(" + -(size + margin) * cnt + "px)";
    } else if (cnt === bannerLi.length - 1) {
      cnt = 0;
      banner[i].style.transform =
        "translateX(" + -(size + margin) * cnt + "px)";
    }
  });

  prev[i].addEventListener("click", () => {
    if (cnt > 0) {
      cnt--;
      banner[i].style.transform =
        "translateX(" + -(size + margin) * cnt + "px)";
    } else if (cnt === 0) {
      cnt = bannerLi.length - 1;
      banner[i].style.transform =
        "translateX(" + -(size + margin) * cnt + "px)";
    }
  });
}
