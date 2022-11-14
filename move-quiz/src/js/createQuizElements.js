import { main } from './createElements';

//create elements for quiz page
const stepsQuestionsElement = document.createElement('div');
const scoreGameElement = document.createElement('div');
const blockAnswersElement = document.createElement('div');
const blockAboutMoveElement = document.createElement('div');
const blockAudioPlayerElement = document.createElement('div');
const buttonNextQuestionElement = document.createElement('button');
const arrayNumberQuestionElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function createElementsForQuiz() {
  stepsQuestionsElement.className = 'steps-questions';
  scoreGameElement.className = 'score-game';
  blockAnswersElement.className = 'block-answers';
  blockAboutMoveElement.className = 'block-about-move';
  blockAudioPlayerElement.className = 'block-audio-player';
  buttonNextQuestionElement.className = 'button-next-question';
  buttonNextQuestionElement.innerHTML = 'Next Level';

  main.append(
    stepsQuestionsElement,
    scoreGameElement,
    blockAboutMoveElement,
    blockAnswersElement,
    blockAudioPlayerElement,
    buttonNextQuestionElement
  );
}

export { createElementsForQuiz };
