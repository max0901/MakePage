let list = document.querySelectorAll("nav>ul>li");
let hide1 = document.querySelectorAll("nav >ul >li ul");
let hidebackcolor = document.querySelectorAll(".hide>li");
let hidecolor = document.querySelectorAll(".hide>li>a");
let hidebackcolor2 = document.querySelectorAll(".hide_ul>li");
let hidecolor2 = document.querySelectorAll(".hide_ul>li>a");
let hide_item = document.querySelectorAll(".hide2>li");
let hide_ul = document.querySelectorAll(".hide_ul");
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
  for (let j = 0; j < hide_item.length - 1; j++) {
    hide_item[j].addEventListener("mouseover", () => {
      hide_ul[j].style.display = "block";
    });
    hide_item[j].addEventListener("mouseout", () => {
      hide_ul[j].style.display = "none";
    });
  }
  for (let j = 0; j < hidebackcolor.length - 1; j++) {
    hidebackcolor[j].addEventListener("mouseover", () => {
      hidebackcolor[j].style.backgroundColor = "black";
      hidecolor[j].style.color = "white";
    });
    hidebackcolor[j].addEventListener("mouseout", () => {
      hidebackcolor[j].style.backgroundColor = "white";
      hidecolor[j].style.color = "black";
    });
  }
  for (let j = 0; j < hidebackcolor2.length; j++) {
    hidebackcolor2[j].addEventListener("mouseover", () => {
      hidebackcolor2[j].style.backgroundColor = "black";
      hidecolor2[j].style.color = "white";
    });
    hidebackcolor2[j].addEventListener("mouseout", () => {
      hidebackcolor2[j].style.backgroundColor = "white";
      hidecolor2[j].style.color = "black";
    });
  }
}
