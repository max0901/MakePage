let list1 = document.querySelector("#list1");
let hide1 = document.querySelector("#hide1");
let list2 = document.querySelector("#list2");
let hide2 = document.querySelector("#hide2");
let list3 = document.querySelector("#list3");
let hide3 = document.querySelector("#hide3");
let list4 = document.querySelector("#list4");
let hide4 = document.querySelector("#hide4");

list1.addEventListener("mouseover", () => {
  hide1.style.display = "block";
  hide1.style.transition = "all 1s";
});
list1.addEventListener("mouseout", () => {
  hide1.style.display = "none";
});
list2.addEventListener("mouseover", () => {
  hide2.style.display = "block";
});
list2.addEventListener("mouseout", () => {
  hide2.style.display = "none";
});
list3.addEventListener("mouseover", () => {
  hide3.style.display = "block";
});
list3.addEventListener("mouseout", () => {
  hide3.style.display = "none";
});
list4.addEventListener("mouseover", () => {
  hide4.style.display = "block";
});
list4.addEventListener("mouseout", () => {
  hide4.style.display = "none";
});
