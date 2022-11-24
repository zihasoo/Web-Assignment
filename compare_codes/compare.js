"use strict";

let changeColor = document.querySelector("#build");
let spanChange = document.querySelectorAll(".yellow");

changeColor.addEventListener("mouseover", (e) => {
  for (let i = 0; i < spanChange.length; i++) {
    spanChange[i].classList.add("add");
  }
});
changeColor.addEventListener("mouseout", (e) => {
  for (let i = 0; i < spanChange.length; i++) {
    spanChange[i].classList.remove("add");
  }
});
