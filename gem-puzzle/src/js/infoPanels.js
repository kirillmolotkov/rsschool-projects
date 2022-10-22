import { timeGame } from "./addElement";

let minutes = {
  minutes: Number(localStorage.getItem("minutes")),
  get currentMinute() {
    return this.minutes;
  },
  set currentMinute(value) {
    this.minutes = value;
  },
};

let seconds = {
  seconds: Number(localStorage.getItem("seconds")),
  get currentSecond() {
    return this.seconds;
  },
  set currentSecond(value) {
    this.seconds = value;
  },
};

let time = {
  time: localStorage.getItem("time"),
  get valueTime() {
    return this.time;
  },
  set valueTime(value) {
    this.time = value;
  },
};

timeGame.innerHTML = time.time;

function timesGame() {
  if (seconds.seconds < 59) {
    seconds.seconds++;
    if (seconds.seconds < 10) {
      time.valueTime = `${minutes.minutes}:0${seconds.seconds}`;
    }
    if (seconds.seconds > 9) {
      time.valueTime = `${minutes.minutes}:${seconds.seconds}`;
    }
  } else {
    seconds.currentSecond = 0;
    minutes.minutes++;
    time.valueTime = `${minutes.minutes}:00`;
  }
  localStorage.setItem("time", time.time);
  localStorage.setItem("seconds", seconds.seconds);
  localStorage.setItem("minutes", minutes.minutes);
  timeGame.innerHTML = time.time;
  return time.time;
}

export { timesGame, minutes, seconds };
