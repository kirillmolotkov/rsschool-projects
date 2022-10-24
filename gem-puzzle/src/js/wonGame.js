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

  saveScoreGame();

  getSaveScoreGame();
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
localStorage.setItem("counterGame", 0);
let counterGame = Number(localStorage.getItem("counterGame"));
function saveScoreGame() {
  counterGame++;
  console.log(counterGame);
  let sizeGame = localStorage.getItem("defaultSize");
  let moves = counterMoves.itemNumber;
  let time = localStorage.getItem("time");
  let currentScore = `Size game: ${sizeGame}x${sizeGame} Moves: ${moves} Time: ${time}`;

  localStorage.setItem(`score${counterGame}`, currentScore);
}

function getSaveScoreGame() {
  let saveScore = [];
  for (let i = 0; i < 11; i++) {
    saveScore.push(localStorage.getItem(`score${i}`));
  }

  return saveScore;
}

export { isWon, getSaveScoreGame };
