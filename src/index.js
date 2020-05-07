//modal - для манипуляции над модальным окном
const modal = document.getElementById("modal");

const colorArray = ["rgb(34, 49, 63)", "rgb(44, 62, 80)", "rgb(58, 83, 155)"];

function togglePicture() {
  const label = document.getElementById("label");
  const image = document.getElementById("os-logo");
  if (label.textContent === 'Linux') {
    image.src = "resource/windows-logo.png"
    label.innerHTML = "Windows";
  } else {
    label.innerHTML = "Linux";
    image.src = "resource/linux-logo.png"
  }
}

function showDialogBox() {
    modal.style.display = "block";
}

function closeDialogBox() {
  modal.style.display = "none";
}

function submitDialogBox() {
  const inputText = document.getElementById("input").value;
  document.getElementById("welcome-text").innerText = `Hello, ${inputText}! How are you?`;
  closeDialogBox();
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function changeBackground() {
  const background = document.getElementById("container");
  console.log(background.style.background);
  background.style.background = "rgb(44, 62, 80)";
  console.log(background.style.background);
}