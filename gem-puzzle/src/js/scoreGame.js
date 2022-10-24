import { blockGame, blockSettings } from "./addElement";
import { getSaveScoreGame } from "./wonGame";

let isOpenScore = false;
const buttonScore = document.createElement("div");
buttonScore.classList = "button-score";
buttonScore.innerHTML = "Score";
setTimeout(() => {
  blockSettings.append(buttonScore);
}, 0);

const scoreTable = document.createElement("div");
scoreTable.classList = "score-table";
setTimeout(() => {
  blockGame.append(scoreTable);
}, 0);

buttonScore.addEventListener("click", () => {
  openScore();
});

function openScore() {
  let score = "";
  let arraySave = getSaveScoreGame();
  arraySave.forEach((elem, index) => {
    if (elem !== null) {
      score += `${index} ${elem} <br>`;
    }
  });
  if (!isOpenScore) {
    scoreTable.classList.add("score-table-close");
    buttonScore.classList.remove("button-score-open");
    isOpenScore = true;
  } else {
    scoreTable.classList.remove("score-table-close");
    buttonScore.classList.add("button-score-open");
    isOpenScore = false;
    scoreTable.innerHTML = "";
    scoreTable.insertAdjacentHTML("afterbegin", score);
  }
}
openScore();
