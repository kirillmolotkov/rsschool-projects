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

const arrayNumberQuestionElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function createElementsForStepsQuestion() {
  arrayNumberQuestionElement.forEach((numberElement) => {
    let divElement = document.createElement('div');
    divElement.className = 'steps-questions__element';
    divElement.innerHTML = numberElement;
    stepsQuestionsElement.append(divElement);
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

const arrayAnswersElements = [1, 2, 3, 4, 5, 6];
function createElementsForBlockAnswers() {
  arrayAnswersElements.forEach((answersElement) => {
    let answer = document.createElement('button');
    answer.className = 'block-answers__answer';
    answer.innerHTML = 'answer';
    blockAnswersElement.append(answer);
  });
}

export { createElementsForQuiz };
