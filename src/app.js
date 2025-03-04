import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".btn").addEventListener("click", generateCard)

};

function generateCard() {
  let allSuits = ["♦", "♣", "♥", "♠"];
  let allNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];
  let SuitIndex = Math.floor(Math.random() * allSuits.length)
  let numberIndex = Math.floor(Math.random() * allNumbers.length)

  let randomSuit = allSuits[SuitIndex]
  let randomNumber = allNumbers[numberIndex]

  if (randomSuit == "♥" || randomSuit == "♦") {
    document.querySelector(".top").style.color = "red"
    document.querySelector(".bottom").style.color = "red"
    document.querySelector(".suit").style.color = "red"

  }
  else {
    document.querySelector(".top").style.color = "black"
    document.querySelector(".bottom").style.color = "black"
    document.querySelector(".suit").style.color = "black"
  }
  document.querySelector(".top").innerHTML = randomNumber
  document.querySelector(".bottom").innerHTML = randomNumber
  document.querySelector(".suit").innerHTML = randomSuit
}

