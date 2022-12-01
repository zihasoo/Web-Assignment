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

let chartChange = document.querySelector("#arrow");
let chart = document.querySelector("#chartBox");
let table = document.querySelector(".compare_table");
let is_clicked = false;

chartChange.addEventListener("click", (e) => {
  if (!is_clicked) {
    is_clicked = true;
    chart.style.display = "inline";
    table.style.margin = "50px 20% 0px 0px";
  } else {
    is_clicked = false;
    chart.style.display = "none";
    table.style.margin = "50px auto 0px";
  }
});

let etc = document.querySelector("#extra");
etc.style.color = "black";

etc.addEventListener("click", (e) => {
  if (etc.style.color === "black") {
    etc.style.color = "red";
  } else {
    etc.style.color = "black";
  }
});
