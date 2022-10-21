import { timeGame } from "./addElement";

let minutes = 0;
let seconds = 0;

function timesGame() {
  let time = "";
  if (seconds < 59) {
    seconds++;
    if (seconds < 10) {
      time = `${minutes}:0${seconds}`;
    }
    if (seconds > 9) {
      time = `${minutes}:${seconds}`;
    }
  } else {
    seconds = 0;
    minutes++;
    time = `${minutes}:00`;
  }
  timeGame.innerHTML = time;
  return time;
}

// let timer = {
//   time: 0,
//   get valueTime() {
//     return this.time;
//   },
//   set valueTime(value) {
//     this.time;
//   },
// };
export { timesGame };
