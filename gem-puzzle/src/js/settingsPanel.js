import { arrayButtonGameValue, buttonReset } from "./addElement";
import { getMatrix4x4, objMatrix } from "./generateMatrix";
import { setPositionElements } from "./positionElements";

buttonReset.addEventListener("click", () => {
  const resetMatrix = getMatrix4x4(arrayButtonGameValue);
  setPositionElements(resetMatrix);
  objMatrix.valueMatrix = resetMatrix;
});
