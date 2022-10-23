import { arrayButtonGame, buttonShuffle } from "./addElement";
import {
  findCoordinatesByNumber,
  isValidForSwap,
  swap,
  voidButtonNumber,
} from "./changePositionElement";
import { getMatrix4x4, objMatrix } from "./generateMatrix";
import { setPositionElements } from "./positionElements";

const maxShuffleCount = 100;
let timer;

buttonShuffle.addEventListener("click", () => {
  let shuffleCounter = 0;
  clearInterval(timer);

  if (shuffleCounter === 0) {
    timer = setInterval(() => {
      randomSwap(objMatrix.matrix);
      setPositionElements(objMatrix.matrix);

      shuffleCounter += 1;

      if (shuffleCounter >= maxShuffleCount) {
        clearInterval(timer);
      }
    }, 50);
  }
});

let blockedCoords = null;

function randomSwap(matrix) {
  const voidButtonCoords = findCoordinatesByNumber(
    voidButtonNumber.current,
    objMatrix.matrix
  );

  const validCoords = findValidCoords(voidButtonCoords, matrix, blockedCoords);

  const swapCoords =
    validCoords[Math.floor(Math.random() * validCoords.length)];
  swap(voidButtonCoords, swapCoords, matrix);

  blockedCoords = voidButtonCoords;
}

function findValidCoords(voidCoords, matrix, blockedCoords) {
  const validCoords = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (isValidForSwap({ x, y }, voidCoords)) {
        if (
          !blockedCoords ||
          !(blockedCoords.x === x && blockedCoords.y === y)
        ) {
          validCoords.push({ x, y });
        }
      }
    }
  }
  return validCoords;
}

export { blockedCoords };
