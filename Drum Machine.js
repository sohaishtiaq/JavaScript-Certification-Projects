const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playDrumPad(pad) {
  const audio = pad.querySelector(".clip");

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  display.textContent = pad.id;

  pad.classList.add("active");
  setTimeout(() => {
    pad.classList.remove("active");
  }, 100);
}

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playDrumPad(pad);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  const audio = document.getElementById(key);

  if (!audio || !audio.classList.contains("clip")) {
    return;
  }

  const pad = audio.closest(".drum-pad");

  if (pad) {
    playDrumPad(pad);
  }
});
