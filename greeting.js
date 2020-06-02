const greetingForm = document.querySelector(".js-greetingForm");
const greetingInput = greetingForm.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

// Local Storage에 저장
const saveName = (userName) => {
  localStorage.setItem(USER_LS, userName);
};

// Input form 제출할 때
const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = greetingInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
};

// 이름 요청
const askForName = () => {
  greetingForm.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
};

// 인사
const paintGreeting = (userName) => {
  greetingForm.classList.remove(SHOWING_CN); // Form(input) 을 숨긴다.
  greeting.classList.add(SHOWING_CN); // H4(Greeting)을 나타낸다. (인사)
  greeting.innerText = `Hello, ${userName}.`;
};

const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName(); // USER NAME 이 존재하지 않을 경우, 이름을 물어본다.
  } else {
    paintGreeting(currentUser); // USER NAME 이 존재하는 경우, 인사.
  }
};

function init() {
  loadName();
}

init();
