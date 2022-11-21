import { main } from './createElements';
import { arrayScoreGame } from './startGame';

//create elements for statistic page

function createElementsForStatistic() {
  let statistic = document.createElement('div');
  statistic.className = 'statistic-item';
  if (arrayScoreGame.length === 0) {
    statistic.textContent = 'Play the game to display statistics';
    main.append(statistic);
  } else {
    arrayScoreGame.forEach((score, index) => {
      let item = document.createElement('div');
      item.className = 'statistic-item';
      item.textContent = `Number Your game ${
        index + 1
      } and Your score: ${score}`;
      main.append(item);
    });
  }
}
export { createElementsForStatistic };
