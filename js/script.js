const button = document.getElementById("myButton");

button.addEventListener("mouseover", function () {
  button.classList.toggle("clicked");
});

const buttonYes = document.getElementById("button-yes");
const message = document.querySelector(".message");

buttonYes.addEventListener("click", function () {
  message.innerHTML = "TE AMO❤️";
});
