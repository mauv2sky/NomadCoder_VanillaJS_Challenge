import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const titleText = document.querySelector("h2");
const superEventHandler = {
  handleMouseUp: function () {
    titleText.style.color = colors[0];
    titleText.innerHTML = "The mouse is here!";
  },
  handleMouseLeave: function () {
    titleText.style.color = colors[1];
    titleText.innerHTML = "The mouse is gone!";
  },
  handleWindowResize: function () {
    titleText.style.color = colors[2];
    titleText.innerHTML = "you just resized!";
  },
  handleMouseRight: function () {
    titleText.style.color = colors[3];
    titleText.innerHTML = "That was a right click!";
  }
};

titleText.addEventListener("mouseenter", superEventHandler.handleMouseUp);
titleText.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleMouseRight);
