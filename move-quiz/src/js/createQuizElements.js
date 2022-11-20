import { createAudioPlayer, nextSteps } from './audioPlayer';
import { main } from './createElements';
import {
  currentNumberQuest,
  isCorrectAnswers,
  isHaveCorrectAnswer,
  randomAnswersArray,
} from './startGame';

//create elements for quiz page
const stepsQuestionsElement = document.createElement('div');
const scoreGameElement = document.createElement('div');
const blockAnswersElement = document.createElement('div');
const blockAboutMoveElement = document.createElement('div');
const blockAudioPlayerElement = document.createElement('div');
const buttonNextQuestionElement = document.createElement('button');

function createElementsForQuiz() {
  stepsQuestionsElement.className = 'steps-questions';
  scoreGameElement.className = 'score-game';
  scoreGameElement.textContent = '0';
  blockAnswersElement.className = 'block-answers';
  blockAboutMoveElement.className = 'block-about-move';
  blockAboutMoveElement.textContent = 'pay sound and check movie';
  blockAudioPlayerElement.className = 'block-audio-player';
  buttonNextQuestionElement.className = 'button-next-question';
  buttonNextQuestionElement.innerHTML = 'Next Level';
  createElementsForStepsQuestion();
  createElementsForBlockAudioPlayer();
  createElementsForBlockAnswers();
  createAudioPlayer(audioPlayerElement);
  addedStyleForCurrentQuest();
  main.append(
    stepsQuestionsElement,
    scoreGameElement,
    blockAboutMoveElement,
    blockAnswersElement,
    blockAudioPlayerElement,
    buttonNextQuestionElement
  );
}

const arrayNumberQuestionElement = [
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
];

function createElementsForStepsQuestion() {
  arrayNumberQuestionElement.forEach((numberElement, index) => {
    numberElement.className = 'steps-questions__element';
    numberElement.innerHTML = index + 1;
    stepsQuestionsElement.append(numberElement);
  });
}

const imageBlockAudioPlayerElement = document.createElement('div');
const titleBlockAudioPlayerElement = document.createElement('h3');
const audioPlayerElement = document.createElement('div');

function createElementsForBlockAudioPlayer() {
  imageBlockAudioPlayerElement.className = 'block-audio-player__image';
  titleBlockAudioPlayerElement.className = 'block-audio-player__title';
  titleBlockAudioPlayerElement.innerHTML = '****';
  audioPlayerElement.className = 'block-audio-player__audio-player';
  blockAudioPlayerElement.append(
    imageBlockAudioPlayerElement,
    titleBlockAudioPlayerElement,
    audioPlayerElement
  );
}

const arrayAnswersElements = [
  document.createElement('button'),
  document.createElement('button'),
  document.createElement('button'),
  document.createElement('button'),
  document.createElement('button'),
  document.createElement('button'),
];

function createElementsForBlockAnswers() {
  arrayAnswersElements.forEach((answerElement, index) => {
    answerElement.className = 'block-answers__answer';
    answerElement.textContent =
      randomAnswersArray.answers[currentNumberQuest.number - 1][index].title;
    blockAnswersElement.append(answerElement);
  });
}

function addedStyleForCurrentQuest() {
  arrayNumberQuestionElement.forEach((elem) => {
    elem.classList.remove('current-question');
  });
  arrayNumberQuestionElement.forEach((elem) => {
    if (Number(elem.textContent) === currentNumberQuest.number) {
      elem.classList.add('current-question');
    }
  });
}

blockAnswersElement.addEventListener('click', isCorrectAnswers);
buttonNextQuestionElement.addEventListener('click', () => {
  if (isHaveCorrectAnswer.bool) {
    nextSteps();
  }
});
export {
  createElementsForQuiz,
  audioPlayerElement,
  blockAudioPlayerElement,
  arrayAnswersElements,
  arrayNumberQuestionElement,
  blockAnswersElement,
  blockAboutMoveElement,
  titleBlockAudioPlayerElement,
  imageBlockAudioPlayerElement,
  scoreGameElement,
  buttonNextQuestionElement,
};
