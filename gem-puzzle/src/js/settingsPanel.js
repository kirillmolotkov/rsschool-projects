import {
  arrayButtonGame,
  arrayButtonGameValue,
  arrayButtonSize,
  blockGame,
  blockSizeGame,
  buttonReset,
  createGameElement,
  movesCounter,
  sizeValueGame,
  styleButtonGame,
  timeGame,
} from "./addElement";
import { counterMoves, voidButtonNumber } from "./changePositionElement";
import { getMatrix4x4, objMatrix } from "./generateMatrix";
import { minutes, seconds, timesGame } from "./infoPanels";
import { setPositionElements } from "./positionElements";
import { maxShuffleCount } from "./shuffleElements";

buttonReset.addEventListener("click", resetGame);

function resetGame() {
  const resetMatrix = getMatrix4x4(arrayButtonGameValue.item);
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
  localStorage.setItem("time", "0:00");
  localStorage.setItem("move", 0);
  localStorage.setItem("saveMatrix", objMatrix.matrix);
}

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

arrayButtonSize.forEach((elem) => {
  if (elem.textContent[0] === localStorage.getItem("defaultSize")) {
    elem.classList.add("button-size-active");
  }
});

blockSizeGame.addEventListener("click", (event) => {
  const button = event.target;
  localStorage.setItem("defaultSize", button.textContent[0]);

  arrayButtonGame.node.forEach((elem) => {
    elem.remove();
  });
  voidButtonNumber.size = Number(
    localStorage.getItem("defaultSize") *
      Number(localStorage.getItem("defaultSize"))
  );
  arrayButtonGame.node = [];

  sizeValueGame.current =
    Number(localStorage.getItem("defaultSize")) *
    Number(localStorage.getItem("defaultSize"));
  arrayButtonGameValue.item = [];
  createGameElement(sizeValueGame.current);

  localStorage.setItem("saveMatrix", getMatrix4x4(arrayButtonGameValue.item));
  objMatrix.valueMatrix = getMatrix4x4(arrayButtonGameValue.item);
  setPositionElements(getMatrix4x4(arrayButtonGameValue.item));

  arrayButtonGame.node[
    getMatrix4x4(arrayButtonGameValue.item).flat().length - 1
  ].style.display = "none";

  resetGame();
  styleButtonGame(arrayButtonGame.item);
  checked(button);
  maxShuffleCount.sizeCount = Number(localStorage.getItem("defaultSize")) * 20;
});

function checked(button) {
  arrayButtonSize.forEach((elem) => {
    if (elem.classList[1]) {
      elem.classList.remove("button-size-active");
    }
  });
  button.classList.add("button-size-active");
}

export { isTimerStart, timer };
