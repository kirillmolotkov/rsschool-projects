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
// getter and setter
let objMatrix = {
  matrix: getMatrix4x4(arrayButtonGameValue),
  get valueMatrix() {
    return this.valueMatrix;
  },
  set valueMatrix(value) {
    this.matrix = value;
  },
};
export { getMatrix4x4, objMatrix };
