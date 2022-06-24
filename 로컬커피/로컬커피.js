let list = document.querySelectorAll("nav>ul>li");
let hide1 = document.querySelectorAll("nav >ul >li ul");

for (let i = 0; i < list.length; i++) {
  if (i === 1 || 2) {
    list[i].addEventListener("mouseover", () => {
      if (!list[i].classList.contains("on")) {
        list[i].classList.add("on");
        if (i === 1) {
          hide1[i - 1].style.display = "block";
        } else if (i === 2) {
          hide1[i - 1].style.display = "block";
        }
      } else {
        list[i].classList.remove("on");
      }
    });
    list[i].addEventListener("mouseout", () => {
      if (!list[i].classList.contains("on")) {
        list[i].classList.add("on");
      } else {
        list[i].classList.remove("on");
        if (i === 1) {
          hide1[i - 1].style.display = "none";
        } else if (i === 2) {
          hide1[i - 1].style.display = "none";
        }
      }
    });
  }
}
