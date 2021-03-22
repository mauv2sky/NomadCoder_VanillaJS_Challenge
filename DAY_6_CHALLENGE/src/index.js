import "./styles.css";

const selectCountry = document.querySelector(".js-select");

function handleSelect(event) {
  event.preventDefault();
  const currentCountry = event.target.value;
  localStorage.setItem("country", currentCountry);
}

function loadCountry() {
  const myCountry = localStorage.getItem("country");
  if(myCountry){
    const option = document.querySelector(`option[value=${myCountry}]`);
    option.selected = true;
  }
}

function init() {
  loadCountry();
  selectCountry.addEventListener("change", handleSelect);
}

init();