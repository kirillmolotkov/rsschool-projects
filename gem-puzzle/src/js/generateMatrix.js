import { arrayButtonGame, arrayButtonGameValue } from "./addElement";

function getMatrix4x4(array) {
  let valueSizeMatrix = Number(localStorage.getItem("defaultSize"));
  let counterIteration = 0;

  let matrix = [];
  let arrayForMatrix = [];

  array.forEach((elem) => {
    if (counterIteration < valueSizeMatrix) {
      arrayForMatrix.push(elem);

      counterIteration++;
    }
    if (counterIteration === valueSizeMatrix) {
      counterIteration = 0;
      matrix.push(arrayForMatrix);
      arrayForMatrix = [];
    }
  });

  return matrix;
}

let isFirstOpenPage = localStorage.length === 0;

function writeDataLocalStorage() {
  if (isFirstOpenPage) {
    localStorage.setItem("time", "0:00");
    localStorage.setItem("move", 0);
    localStorage.setItem("seconds", 0);
    localStorage.setItem("minutes", 0);
    localStorage.setItem("saveMatrix", arrayButtonGameValue.item);
    localStorage.setItem("defaultSize", 4);
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
