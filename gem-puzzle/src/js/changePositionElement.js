import { arrayButtonGame, blockGame, movesCounter } from "./addElement";
import { objMatrix } from "./generateMatrix";
import { setPositionElements } from "./positionElements";
import { isWon } from "./wonGame";
let counterMoves = {
  moves: Number(localStorage.getItem("move")),
  get itemNumber() {
    return this.moves;
  },
  set itemNumber(value) {
    this.moves = value;
  },
};

movesCounter.innerHTML = `Moves: ${counterMoves.moves}`;

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
    localStorage.setItem("saveMatrix", objMatrix.matrix);
    setPositionElements(objMatrix.matrix);
    counterMoves.moves++;
    movesCounter.innerHTML = `Moves: ${counterMoves.moves}`;
    localStorage.setItem("move", counterMoves.moves);
    // console.log(localStorage.getItem("saveMatrix"));
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
export {
  voidButtonNumber,
  findCoordinatesByNumber,
  isValidForSwap,
  swap,
  counterMoves,
};
