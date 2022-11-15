import { main } from './createElements';

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
  blockAnswersElement.className = 'block-answers';
  blockAboutMoveElement.className = 'block-about-move';
  blockAudioPlayerElement.className = 'block-audio-player';
  buttonNextQuestionElement.className = 'button-next-question';
  buttonNextQuestionElement.innerHTML = 'Next Level';
  createElementsForStepsQuestion();
  createElementsForBlockAudioPlayer();
  createElementsForBlockAnswers();
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
  arrayAnswersElements.forEach((answerElement) => {
    answerElement.className = 'block-answers__answer';
    answerElement.innerHTML = 'answer';
    blockAnswersElement.append(answerElement);
  });
}

export { createElementsForQuiz };
