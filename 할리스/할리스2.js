let index = 0;

window.onload = function () {
  slideShow();

  function slideShow() {
    let onslide = document.getElementsByClassName("slide1");
  }
  for (i = 0; i < onslide.length; li++) {
    onslide[i].style.display = none;
  }
  index++;
  if (index > onslide.length) {
    index = 1;
  }
  onslide[index - 1].style.display = "block";
  setTimeout(slideShow, 4000);
};
