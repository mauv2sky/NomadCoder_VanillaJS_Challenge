import "./styles.css";

const slider = document.querySelector(".slider");
const playBtn = document.querySelector(".playBtn");
const maxValue = document.querySelector(".maxValue");
const guessNum = document.querySelector(".guessNum");

function handleMaxRange() {
  maxValue.innerHTML = slider.value;
}

function onClickPlayBtn() {
  const numResult = document.querySelector(".numResult");
  const gameResult = document.querySelector(".gameResult");
  const inputNumber = parseInt(guessNum.value, 10);
  const randomNum = Math.ceil(Math.random() * slider.value);
  const max = parseInt(maxValue.innerHTML, 10);

  if (inputNumber > max) {
    window.alert("Check your number !");
    guessNum.value = null;
  } else {
    numResult.innerHTML = `you chose:${guessNum.value}, the machine chose:${randomNum}`;
    if (inputNumber === randomNum) {
      gameResult.innerHTML = `<strong>
      ${"You won!".fontcolor("blue")}</strong>`;
    } else {
      gameResult.innerHTML = `<strong>
      ${"You lost!".fontcolor("red")}</strong>`;
    }
  }
}

function init() {
  maxValue.innerHTML = slider.value;
  slider.addEventListener("input", handleMaxRange);
  playBtn.addEventListener("click", onClickPlayBtn);
}

init();