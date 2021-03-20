import "./styles.css";

const untilXmas = document.querySelector(".untilXmas");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const crrDay = new Date();
  const gapTime = xmasDay.getTime() - crrDay.getTime();

  const day = Math.ceil(gapTime / (1000 * 60 * 60 * 24));
  const hour =
    Math.ceil((gapTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - 1;
  const min = Math.ceil((gapTime % (1000 * 60 * 60)) / (1000 * 60)) - 1;
  const sec = Math.ceil((gapTime % (1000 * 60)) / 1000);

  untilXmas.innerText = `${day}d ${hour < 10 ? `0${hour}` : hour}h ${
    min < 10 ? `0${min}` : min
  }m ${sec < 10 ? `0${sec}` : sec}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
