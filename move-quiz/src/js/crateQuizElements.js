import { main } from './createElements';

//create elements for quiz page

function createElementsForQuiz() {
  const test = document.createElement('div');
  test.innerHTML = 'test';
  main.append(test);
}

export { createElementsForQuiz };
