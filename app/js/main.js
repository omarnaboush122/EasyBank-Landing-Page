const hamburger = document.getElementById("btn-hamburger");
const header = document.getElementById("header");
const overlay = document.getElementById("overlay");
const fadeElements = document.querySelectorAll(".has-fade");

hamburger.addEventListener("click", openMenu);

function openMenu() {
  if (header.classList.contains("open")) {
    document.body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeElements.forEach((element) => {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    })
  } else {
    document.body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElements.forEach((element) => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
}
