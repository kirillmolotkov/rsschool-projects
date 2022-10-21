import { arrayButtonGame } from "./addElement";
const winArray = arrayButtonGame.map((elem) => {
  return Number(elem.textContent);
});
function isWon(matrix) {
  const flatMatrix = matrix.flat();
  for (let i = 0; i < winArray.length; i++) {
    if (flatMatrix[i] !== winArray[i]) {
      return false;
    }
  }
  return true;
}

export { isWon };
