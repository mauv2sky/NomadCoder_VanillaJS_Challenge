// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".toDoForm"),
  input = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".pendingList"),
  finishedList = document.querySelector(".finishedList");

const TODO_DATA = {
  PENDING: JSON.parse(localStorage.getItem("PENDING")) || [],
  FINISHED: JSON.parse(localStorage.getItem("FINISHED")) || []
};

function handleSubmit(event) {
  event.preventDefault();
  const newItem = createToDoItem(input.value);
  setLocalStorage("PENDING", newItem);

  const toDoElement = createToDoElement(newItem);
  pendingList.appendChild(toDoElement);

  input.value = "";
}

function setLocalStorage(name, item = null) {
  item && TODO_DATA[name].push(item);
  localStorage.setItem(name, JSON.stringify(TODO_DATA[name]));
}

function createToDoItem(text) {
  return { id: Date.now(), text: text };
}

function onClickRemoveBtn(id, name) {
  TODO_DATA[name] = TODO_DATA[name].filter((item) => item.id !== id);
  setLocalStorage(name);
}

function swapTask(parent, name) {
  const item = {
    id: parent.id,
    text: parent.firstChild.textContent
  };
  setLocalStorage(name, item);

  if (name === "FINISHED") {
    pendingList.removeChild(parent);
    finishedList.appendChild(createToDoElement(item, false));
  } else {
    finishedList.removeChild(parent);
    pendingList.appendChild(createToDoElement(item));
  }
}

function loadTasks() {
  TODO_DATA["PENDING"].map((item) => {
    const pendingElement = createToDoElement(item);
    pendingList.appendChild(pendingElement);
  });
  TODO_DATA["FINISHED"].map((item) => {
    const finishedElement = createToDoElement(item, false);
    finishedList.appendChild(finishedElement);
  });
}

function createToDoElement(item, isPending = true) {
  const element = document.createElement("li");
  const span = document.createElement("span");
  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");

  leftBtn.innerText = "❌";
  rightBtn.innerText = isPending ? "✔️" : "🔙";
  span.innerText = item.text;

  element.id = item.id;
  element.appendChild(span);
  element.appendChild(leftBtn);
  element.appendChild(rightBtn);

  leftBtn.addEventListener("click", () => {
    onClickRemoveBtn(item.id, isPending ? "PENDING" : "FINISHED");
    isPending
      ? pendingList.removeChild(element)
      : finishedList.removeChild(element);
  });

  rightBtn.addEventListener("click", () => {
    onClickRemoveBtn(item.id, isPending ? "PENDING" : "FINISHED");
    swapTask(element, isPending ? "FINISHED" : "PENDING");
  });

  return element;
}

function init() {
  loadTasks();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
