import { arrayButtonGame, blockGame } from "./addElement";
import { objMatrix } from "./generateMatrix";
import { setPositionElements } from "./positionElements";
import { isWon } from "./wonGame";

let voidButtonNumber = 16;
blockGame.addEventListener("click", (event) => {
  const button = event.target;

  if (!button) {
    return;
  }
  let buttonNumber = 0;
  if (button.textContent.length > 2) {
    buttonNumber = Number(button.textContent.slice(-2));
  } else {
    buttonNumber = Number(button.textContent);
  }

  const buttonCoords = findCoordinatesByNumber(buttonNumber, objMatrix.matrix);
  const voidButtonCoords = findCoordinatesByNumber(
    voidButtonNumber,
    objMatrix.matrix
  );
  const isValid = isValidForSwap(buttonCoords, voidButtonCoords);
  if (isValid) {
    swap(buttonCoords, voidButtonCoords, objMatrix.matrix);
    setPositionElements(objMatrix.matrix);
  }
});

function findCoordinatesByNumber(number, matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === number) {
        return { x, y };
      }
    }
  }

  return null;
}

function isValidForSwap(coords_1, coords_2) {
  const diffX = Math.abs(coords_1.x - coords_2.x);
  const diffY = Math.abs(coords_1.y - coords_2.y);

  return (
    (diffX === 1 || diffY === 1) &&
    (coords_1.x === coords_2.x || coords_1.y === coords_2.y)
  );
}

function swap(coords_1, coords_2, matrix) {
  const coords1Number = matrix[coords_1.y][coords_1.x];
  matrix[coords_1.y][coords_1.x] = matrix[coords_2.y][coords_2.x];
  matrix[coords_2.y][coords_2.x] = coords1Number;
  if (isWon(objMatrix.matrix)) {
    console.log("You Won");
  }
}
