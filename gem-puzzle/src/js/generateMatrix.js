import { arrayButtonGame, arrayButtonGameValue } from "./addElement";

function getMatrix4x4(array) {
  const matrix = [[], [], [], []];
  let x = 0;
  let y = 0;

  for (let i = 0; i < array.length; i++) {
    if (x >= 4) {
      y++;
      x = 0;
    }
    matrix[y][x] = array[i];
    x++;
  }
  return matrix;
}
let isFirstOpenPage = localStorage.length === 0;

function writeDataLocalStorage() {
  if (isFirstOpenPage) {
    localStorage.setItem("time", "0:00");
    localStorage.setItem("move", 0);
    localStorage.setItem("seconds", 0);
    localStorage.setItem("minutes", 0);
    localStorage.setItem("saveMatrix", arrayButtonGameValue);
  }
}

writeDataLocalStorage();

let matrixForLocalStorage = localStorage
  .getItem("saveMatrix")
  .split(",")
  .map((elem) => Number(elem));

// getter and setter
let objMatrix = {
  matrix: getMatrix4x4(matrixForLocalStorage),
  get valueMatrix() {
    return this.valueMatrix;
  },
  set valueMatrix(value) {
    this.matrix = value;
  },
};
export { getMatrix4x4, objMatrix };
