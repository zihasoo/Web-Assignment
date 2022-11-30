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

chartChange.addEventListener("mouseover", (e) => {
  chart.style.display = "inline";
  table.style.margin = "50px 20% 0px 0px";
});
chartChange.addEventListener("mouseout", (e) => {
  chart.style.display = "none";
  table.style.margin = "50px auto 0px";
});

let etc = document.querySelector("#extra");
etc.style.color = "black";

etc.addEventListener("click", (e) => {
  if (etc.style.color === "black") {
    etc.style.color = "blue";
  } else {
    etc.style.color = "black";
  }
});
