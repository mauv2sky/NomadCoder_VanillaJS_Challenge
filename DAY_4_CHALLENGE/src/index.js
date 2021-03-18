// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

const MAX_WIN_COLOR = "maxWinColor";
const MIN_WIN_COLOR = "minWinColor";

function handleResize() {
  var width_size = window.innerWidth;

  if (700 <= width_size) {
    body.classList.add(MAX_WIN_COLOR);
  } else if (400 <= width_size && width_size < 700) {
    body.classList.remove(MAX_WIN_COLOR);
    body.classList.remove(MIN_WIN_COLOR);
  } else if (width_size < 400) {
    body.classList.add(MIN_WIN_COLOR);
  }
}

function init() {
  window.addEventListener("resize", handleResize);
}
init();
