import { arrayButtonGame, timeGame } from "./addElement";
import { counterMoves } from "./changePositionElement";
import { objMatrix } from "./generateMatrix";
import { minutes, seconds } from "./infoPanels";

import { isTimerStart, timer } from "./settingsPanel";

function isWon(matrix) {
  let winArray = arrayButtonGame.node.map((elem) => {
    return Number(elem.textContent);
  });

  const flatMatrix = matrix.flat();
  for (let i = 0; i < winArray.length; i++) {
    if (flatMatrix[i] !== winArray[i]) {
      return false;
    }
  }

  console.log(
    `Moves: ${counterMoves.itemNumber}, Time: ${localStorage.getItem("time")}`
  );

  counterMoves.itemNumber = -1;
  if (isTimerStart) {
    clearInterval(timer.timer);
    isTimerStart.isTimer = false;
  }

  timeGame.innerHTML = "0:00";
  minutes.currentMinute = 0;
  seconds.currentSecond = 0;
  localStorage.setItem("time", "0:00");

  return true;
}

export { isWon };
