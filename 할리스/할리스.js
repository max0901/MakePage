let nav = document.querySelectorAll(".bottomNav_inner>li");
let navIn = document.querySelectorAll(".bottomNav_inner>li>a");
let hidden = document.querySelector("#hidden");

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("mouseover", function () {
    hidden.style.visibility = "visible";
    hidden.style.opacity = "1";
    nav[i].style.color = "white";
    nav[i].style.backgroundColor = "red";
    navIn[i].style.color = "white";
  });
  nav[i].addEventListener("mouseout", function () {
    hidden.style.visibility = "hidden";
    hidden.style.opacity = "0";
    nav[i].style.color = "black";
    nav[i].style.backgroundColor = "white";
    navIn[i].style.color = "black";
  });
}

const slider = document.querySelector(".main1");
function slideOn() {
  const sliderLi = document.querySelectorAll(".main1 li");
  const firstLi = sliderLi[0];
  const gogogo = setInterval(sliderGo, 4000);
  firstLi.classList.add("on");

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
