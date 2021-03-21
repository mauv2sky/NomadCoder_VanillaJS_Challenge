import "./styles.css";

const selectCountry = document.querySelector(".js-country");
const USER_LS = "yourCountry";

function handleSelect(event) {
  event.preventDefault();
  const currentCountry = event.target.value;
  localStorage.setItem(USER_LS, currentCountry);
}

function loadCountry() {
  const myCountry = localStorage.getItem(USER_LS);
  if (myCountry === null) {
    selectCountry.addEventListener("change", handleSelect);
  } else {
    for (var i = 0; i < selectCountry.children.length; i++) {
      if (selectCountry.children[i].value === myCountry) {
        selectCountry.children[i].setAttribute("selected", "");
      }
    }
  }
}

function init() {
  loadCountry();
}

init();