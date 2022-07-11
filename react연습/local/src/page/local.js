function PageMove() {
  let list = document.querySelectorAll("nav>ul>li");
  let hide1 = document.querySelectorAll("nav >ul >li ul");
  let hidebackcolor = document.querySelectorAll(".hide>li");
  let hidecolor = document.querySelectorAll(".hide>li>a");
  let hidebackcolor2 = document.querySelectorAll(".hide_ul>li");
  let hidecolor2 = document.querySelectorAll(".hide_ul>li>a");
  let hide_item = document.querySelectorAll(".hide2>li");
  let hide_ul = document.querySelectorAll(".hide_ul");
  let tag_list = document.querySelectorAll("#img_inner> ul li");
  let hide_tag = document.getElementsByClassName("hide_tag");
  let btn = document.getElementsByClassName("button");

  // nav메뉴 하이드 js
  document.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    let header = document.querySelector("header");

    if (scroll < 300) {
      header.style.backgroundColor = "rgba(0,0,0,0.3)";
      for (let i = 0; i < list.length; i++) {
        if (i === 1 || 2) {
          list[i].addEventListener("mouseover", () => {
            if (!list[i].classList.contains("on")) {
              list[i].classList.add("on");
              if (i === 1) {
                hide1[i - 1].style.display = "block";
                hide1[i - 1].style.backgroundColor = "white";
              } else if (i === 2) {
                hide1[i - 1].style.display = "block";
                hide1[i - 1].style.backgroundColor = "white";
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
    } else {
      header.style.backgroundColor = "rgb(0,0,0)";
      for (let i = 0; i < list.length; i++) {
        if (i === 1 || 2) {
          list[i].addEventListener("mouseover", () => {
            if (!list[i].classList.contains("on")) {
              list[i].classList.add("on");
              if (i === 1) {
                hide1[i - 1].style.display = "block";
                hide1[i - 1].style.backgroundColor = "grey";
              } else if (i === 2) {
                hide1[i - 1].style.display = "block";
                hide1[i - 1].style.backgroundColor = "grey";
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
            hidebackcolor[j].style.backgroundColor = "green";
            hidecolor[j].style.color = "black";
          });
          hidebackcolor[j].addEventListener("mouseout", () => {
            hidebackcolor[j].style.backgroundColor = "grey";
            hidecolor[j].style.color = "black";
          });
        }
        for (let j = 0; j < hidebackcolor2.length; j++) {
          hidebackcolor2[j].addEventListener("mouseover", () => {
            hidebackcolor2[j].style.backgroundColor = "green";
            hidecolor2[j].style.color = "black";
          });
          hidebackcolor2[j].addEventListener("mouseout", () => {
            hidebackcolor2[j].style.backgroundColor = "grey";
            hidecolor2[j].style.color = "black";
          });
        }
      }
    }
  });
  // 인스타 js
  for (let i = 0; i < tag_list.length; i++) {
    tag_list[i].addEventListener("mouseover", () => {
      hide_tag[i].style.display = "block";
    });
    tag_list[i].addEventListener("mouseleave", () => {
      hide_tag[i].style.display = "none";
    });
  }

  //버튼js
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseover", () => {
      console.log("test");
      btn[i].style.backgroundColor = "white";
      btn[i].style.color = "black";
    });
    btn[i].addEventListener("mouseleave", () => {
      btn[i].style.backgroundColor = "black";
      btn[i].style.color = "white";
    });
  }
}

export default PageMove;
