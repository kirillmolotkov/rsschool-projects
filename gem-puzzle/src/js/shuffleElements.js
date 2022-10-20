import { arrayButtonGame, buttonShuffle } from "./addElement";
import { getMatrix4x4, objMatrix } from "./generateMatrix";
import { setPositionElements } from "./positionElements";

buttonShuffle.addEventListener("click", () => {
  const shuffledArray = shuffleArray(objMatrix.matrix.flat());

  objMatrix.valueMatrix = getMatrix4x4(shuffledArray);

  setPositionElements(objMatrix.matrix);
});

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
