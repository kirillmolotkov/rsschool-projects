import { timeGame } from "./addElement";

let minutes = {
  minutes: 0,
  get currentMinute() {
    return this.minutes;
  },
  set currentMinute(value) {
    this.minutes = value;
  },
};
let seconds = {
  seconds: 0,
  get currentSecond() {
    return this.seconds;
  },
  set currentSecond(value) {
    this.seconds = value;
  },
};

function timesGame() {
  let time = "";
  if (seconds.seconds < 59) {
    seconds.seconds++;
    if (seconds.seconds < 10) {
      time = `${minutes.minutes}:0${seconds.seconds}`;
    }
    if (seconds.seconds > 9) {
      time = `${minutes.minutes}:${seconds.seconds}`;
    }
  } else {
    seconds.currentSecond = 0;
    minutes.minutes++;
    time = `${minutes.minutes}:00`;
  }
  timeGame.innerHTML = time;
  return time;
}

export { timesGame, minutes, seconds };
