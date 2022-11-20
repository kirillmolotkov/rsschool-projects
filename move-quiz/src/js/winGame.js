import { audio, isPlayAudio } from './audioPlayer';
import { deleteElements } from './createAboutElements';
import { main } from './createElements';
import {
  arrayAnswersElements,
  createElementsForQuiz,
  imageBlockAudioPlayerElement,
} from './createQuizElements';
import {
  copyPlayListEnglish,
  correctAnswersArray,
  createCorrectAnswers,
  createRandomAnswers,
  currentNumberQuest,
  deleteElementsInBlockAbout,
  gameScore,
  isHaveCorrectAnswer,
  randomAnswersArray,
  shuffle,
  shuffledCopyPlayListEnglish,
} from './startGame';

const buttonNewGame = document.createElement('button');
const gratulation = document.createElement('h1');
const resultScore = document.createElement('h2');

function winGame(score) {
  buttonNewGame.className = 'button-new-game';
  buttonNewGame.innerHTML = 'New Game';
  gratulation.className = 'gratulation';
  gratulation.textContent = 'Gratulation, Yuo Win!!';
  resultScore.className = 'result-score';
  resultScore.textContent = `Your score: ${score}`;
  if (score === 30) {
    main.append(gratulation, resultScore);
  } else {
    main.append(gratulation, resultScore, buttonNewGame);
  }
}

function startNewGame() {
  deleteElementsInBlockAbout();
  deleteElements();

  shuffledCopyPlayListEnglish.shuffleValue = shuffle(copyPlayListEnglish);
  randomAnswersArray.randomAnswers = createRandomAnswers(
    shuffledCopyPlayListEnglish.shuffle
  );
  correctAnswersArray.correctAnswers = createCorrectAnswers(
    randomAnswersArray.answers
  );
  currentNumberQuest.numberValue = 1;
  isHaveCorrectAnswer.boolValue = false;
  gameScore.scoreValue = 0;
  isPlayAudio.playValue = false;
  audio.pause();
  arrayAnswersElements.forEach((elem) => {
    elem.style.borderColor = '';
    elem.removeAttribute('value');
  });
  createElementsForQuiz();
  imageBlockAudioPlayerElement.style.backgroundImage =
    'url(./assets/movie.png)';
}

buttonNewGame.addEventListener('click', startNewGame);
export { winGame };
