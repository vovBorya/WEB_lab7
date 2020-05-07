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