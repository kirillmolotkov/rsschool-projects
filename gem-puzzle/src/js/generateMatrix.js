import { arrayButtonGame } from "./addElement";

function getMatrix4x4(array) {
  const matrix = [[], [], [], []];
  let x = 0;
  let y = 0;

  for (let i = 0; i < array.length; i++) {
    if (x >= 4) {
      y++;
      x = 0;
    }
    matrix[y][x] = Number(array[i].textContent);
    x++;
  }
  return matrix;
}

let matrix = getMatrix4x4(arrayButtonGame);

export { matrix };
