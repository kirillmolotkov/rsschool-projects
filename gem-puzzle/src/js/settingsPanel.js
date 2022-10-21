import {
  arrayButtonGameValue,
  blockGame,
  buttonReset,
  movesCounter,
  timeGame,
} from "./addElement";
import { counterMoves } from "./changePositionElement";
import { getMatrix4x4, objMatrix } from "./generateMatrix";
import { minutes, seconds, timesGame } from "./infoPanels";
import { setPositionElements } from "./positionElements";

buttonReset.addEventListener("click", () => {
  const resetMatrix = getMatrix4x4(arrayButtonGameValue);
  setPositionElements(resetMatrix);
  objMatrix.valueMatrix = resetMatrix;

  counterMoves.itemNumber = 0;
  movesCounter.innerHTML = `Moves: ${counterMoves.moves}`;
  if (isTimerStart) {
    clearInterval(timer.timer);
    isTimerStart.isTimer = false;
  }
  minutes.currentMinute = 0;
  seconds.seconds = 0;
  timeGame.innerHTML = "0:00";
});
let timer = {
  timer: null,
  get timeStart() {
    return this.timer;
  },
  set timeStart(value) {
    this.timer = value;
  },
};

let isTimerStart = {
  timer: false,
  get isTimer() {
    return this.timer;
  },
  set isTimer(value) {
    this.timer = value;
  },
};

blockGame.addEventListener("click", (event) => {
  const button = event.target;

  if (button.className === "button-game") {
    if (!isTimerStart.timer) {
      timer.timeStart = setInterval(timesGame, 1000);
      isTimerStart.isTimer = true;
    }
  }
});

export { isTimerStart, timer };
