const body = document.querySelector("body");

const IMG_NUMBER = 7;

const genRandom = () => {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
};

const paintImage = (imgNumber) => {
  const image = new Image();
  image.src = `./images/img${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
};

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
