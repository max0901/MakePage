let nav = document.querySelectorAll(".bottomNav_inner>li");
let navIn = document.querySelectorAll(".bottomNav_inner>li>a");
let hidden = document.querySelector("#hidden");
let bnav = document.querySelector(".bottomNav");

bnav.addEventListener("mouseover", () => {
  hidden.style.visibility = " visible";
  hidden.style.height = 300 + "px";
  hidden.style.opacity = 1;
});
bnav.addEventListener("mouseout", () => {
  hidden.style.visibility = " hidden";
});
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("mouseover", function () {
    nav[i].style.color = "white";
    nav[i].style.backgroundColor = "red";
    navIn[i].style.color = "white";
  });
  nav[i].addEventListener("mouseout", function () {
    nav[i].style.color = "black";
    nav[i].style.backgroundColor = "white";
    navIn[i].style.color = "black";
  });
}

const slider = document.querySelector(".main1");
const sliderLi = document.querySelectorAll(".main1 ul li");
const firstLi = sliderLi[0];
function slideOn() {
  firstLi.classList.add("on");
  setInterval(sliderGo, 6000);

  function sliderGo() {
    const onslide = document.querySelector(".on");
    onslide.classList.remove("on");
    if (!onslide.nextElementSibling) {
      sliderLi[0].classList.add("on");
    } else {
      sliderLi[0].nextElementSibling.classList.add("on");
    }
  }
}
slideOn();
