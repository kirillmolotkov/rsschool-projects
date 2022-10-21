import { arrayButtonGame, timeGame } from "./addElement";
import { counterMoves } from "./changePositionElement";
import { minutes, seconds } from "./infoPanels";

import { isTimerStart, timer } from "./settingsPanel";

const winArray = arrayButtonGame.map((elem) => {
  return Number(elem.textContent);
});
function isWon(matrix) {
  const flatMatrix = matrix.flat();
  for (let i = 0; i < winArray.length; i++) {
    if (flatMatrix[i] !== winArray[i]) {
      return false;
    }
  }
  counterMoves.itemNumber = -1;
  if (isTimerStart) {
    clearInterval(timer.timer);
    isTimerStart.isTimer = false;
  }
  timeGame.innerHTML = "0:00";
  minutes.currentMinute = 0;
  seconds.currentSecond = 0;
  return true;
}

export { isWon };
