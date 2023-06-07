const button = document.getElementById("myButton");

button.addEventListener("mouseover", function () {
  button.classList.toggle("clicked");
});

const buttonYes = document.getElementById("button-yes");
const message = document.querySelector(".message");

buttonYes.addEventListener("click", function () {
  message.innerHTML = "TE AMO❤️";
});

button.addEventListener("click", function () {
  const containerWidth = document.querySelector(".container").offsetWidth;
  const containerHeight = document.querySelector(".container").offsetHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  const randomX = Math.random() * (containerWidth - buttonWidth);
  const randomY = Math.random() * (containerHeight - buttonHeight);

  button.style.top = randomY + "px";
  button.style.left = randomX + "px";
});