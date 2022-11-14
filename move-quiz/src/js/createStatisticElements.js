import { main } from './createElements';

//create elements for statistic page

function createElementsForStatistic() {
  const test = document.createElement('div');
  test.innerHTML = 'Statistic';
  main.append(test);
}

export { createElementsForStatistic };
