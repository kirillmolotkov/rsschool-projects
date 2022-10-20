import { arrayButtonGame, arrayButtonGameValue } from "./addElement";
import { objMatrix } from "./generateMatrix";

function setPositionElements(matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      const value = matrix[y][x];
      const node = arrayButtonGame[value - 1];
      setStylesGameElement(node, x, y);
    }
  }
}

function setStylesGameElement(node_list, position_x, position_y) {
  const shiftPs = 100;
  node_list.style.transform = `translate3D(${position_x * shiftPs}%,${
    position_y * shiftPs
  }%,0)`;
}
arrayButtonGame[objMatrix.matrix.flat().length - 1].style.display = "none"; // hidden last element

setPositionElements(objMatrix.matrix);

export { setPositionElements };
