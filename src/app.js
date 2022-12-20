/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let number = [
    "A",
    "K",
    "Q",
    "J",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  let palo = ["♦", "♥ ", " ♠", "♣"];
  let numberRandom = number[Math.floor(Math.random() * number.length)];
  let paloRandom = palo[Math.floor(Math.random() * palo.length)];
  console.log(numberRandom, paloRandom);

  let cambioPalo = document.querySelector("#palo");
  console.log(cambioPalo);
  cambioPalo.innerHTML = paloRandom;
  let cambioPaloDos = document.querySelector("#palo2");
  cambioPaloDos.innerHTML = paloRandom;

  if (paloRandom == "♦" || paloRandom == "♥ ") {
    cambioPalo.classList.add("red");
    cambioPaloDos.classList.add("red");
  } else {
    cambioPalo.classList.remove("red");
    cambioPaloDos.classList.remove("red");
  }
  /*if (paloRandom == "♦" || paloRandom == "♥") {
    let cambioColorPalo = document.querySelector("#palo");
    cambioColorPalo.classList.add(".red");
    let cambioColorPaloDos = document.querySelector("#palo2");
    cambioColorPaloDos.classList.add("red");
  }
   */
  document.getElementById("palo").innerHTML = paloRandom;
  document.getElementById("palo2").innerHTML = paloRandom;
  document.getElementById("num").innerHTML = numberRandom;
};
