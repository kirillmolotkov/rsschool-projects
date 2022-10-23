import { buttonAudio } from "./addElement";

let isAudio = true;
buttonAudio.addEventListener("click", () => {
  if (!isAudio) {
    isAudio = true;
    buttonAudio.innerHTML = "On";
  } else {
    isAudio = false;
    buttonAudio.innerHTML = "Off";
  }
  console.log(isAudio);
});

function soundStart() {
  let audio = new Audio();
  audio.src = "./610d963cb025f135c5ac934b8f827ac4.mp3";
  audio.autoplay = isAudio;
}

export { soundStart };
