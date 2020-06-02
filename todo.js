const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

let newID = 1;

const saveToDo = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const button = event.target;
  const li = button.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  }); // filter : array의 모든 아이템에 중 true인 아이템들만 가지고 새로운 array를 만든다.
  toDos = cleanToDos;
  saveToDo();
};

const paintToDo = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  span.innerText = text;
  deleteButton.innerText = "✖";
  deleteButton.addEventListener("click", deleteToDo);
  li.id = newID;
  li.appendChild(span);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
  const toDoObj = {
    id: newID,
    text: text,
  };
  newID += 1;
  toDos.push(toDoObj);
};

const toDoHandleSubmit = (event) => {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  saveToDo(currentValue);
  toDoInput.value = "";
};

const loadToDos = () => {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => {
      paintToDo(toDo.text);
    });
  }
};

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", toDoHandleSubmit);
}

init();
