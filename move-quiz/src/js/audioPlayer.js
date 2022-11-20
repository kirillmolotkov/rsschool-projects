import { deleteElements } from './createAboutElements';
import {
  arrayAnswersElements,
  audioPlayerElement,
  blockAudioPlayerElement,
  createElementsForQuiz,
  imageBlockAudioPlayerElement,
  scoreGameElement,
} from './createQuizElements';
import { playListEnglish } from './playListEn';
import {
  correctAnswersArray,
  counterMistakes,
  currentNumberQuest,
  deleteElementsInBlockAbout,
  isHaveCorrectAnswer,
  isMiniWin,
  setScoreGame,
} from './startGame';

//create audio player elements

const buttonPlayAndPause = document.createElement('div');
const buttonMuteVolume = document.createElement('div');
const timePlay = document.createElement('div');
const inputRangeTimePlay = document.createElement('input');
const inputRangeVolume = document.createElement('input');

function createAudioPlayer(placeOfCreation) {
  buttonPlayAndPause.className = 'audio-player__button-play-pause button-play';
  inputRangeTimePlay.className = 'audio-player__range-time-play';
  inputRangeTimePlay.setAttribute('type', 'range');
  inputRangeTimePlay.setAttribute('value', '0');
  timePlay.className = 'audio-player__time-play';
  timePlay.textContent = '00:00';
  buttonMuteVolume.className = 'audio-player__button-mute';
  inputRangeVolume.className = 'audio-player__range-volume';
  inputRangeVolume.setAttribute('type', 'range');
  inputRangeVolume.setAttribute('min', '0');
  inputRangeVolume.setAttribute('max', '100');
  inputRangeVolume.setAttribute('value', '100');

  placeOfCreation.append(
    buttonPlayAndPause,
    inputRangeTimePlay,
    timePlay,
    buttonMuteVolume,
    inputRangeVolume
  );
}

let isPlayAudio = {
  bool: false,
  get playValue() {
    return this.bool;
  },
  set playValue(value) {
    this.bool = value;
  },
};
const audio = new Audio();
let timePlayInterval;
let currentTimePlay = 0;
let valueVolumeAudioPlayer = 1;

function audioPlayerPlay(srcCurrentPlayList) {
  audio.src = srcCurrentPlayList;
  audio.currentTime = currentTimePlay;
  audio.volume = valueVolumeAudioPlayer;
  audio.pause();

  if (!isPlayAudio.bool) {
    audio.play();
    isPlayAudio.boolValue = true;
    inputRangeTimePlay.setAttribute(
      'max',
      correctAnswersArray.correct[currentNumberQuest.number - 1].duration
    );
    timePlayInterval = setInterval(() => {
      inputRangeTimePlay.setAttribute(
        'value',
        `${Math.floor(audio.currentTime)}`
      );
      currentTimePlay = Math.floor(audio.currentTime);
      writeTimePlayInElement();
    }, 100);
    buttonPlayAndPause.classList.remove('button-play');
    buttonPlayAndPause.classList.add('button-pause');
  } else {
    audio.pause();
    isPlayAudio.boolValue = false;
    clearInterval(timePlayInterval);
    timePlayInterval = null;
    buttonPlayAndPause.classList.remove('button-pause');
    buttonPlayAndPause.classList.add('button-play');
  }
}

function rewindAudio() {
  currentTimePlay = inputRangeTimePlay.value;
  isPlayAudio.boolValue = false;
  audioPlayerPlay(
    correctAnswersArray.correct[currentNumberQuest.number - 1].src
  );
}

function changeVolumeAudio() {
  valueVolumeAudioPlayer = inputRangeVolume.value / 100;
  isPlayAudio.boolValue = false;
  audioPlayerPlay(
    correctAnswersArray.correct[currentNumberQuest.number - 1].src
  );
}

function writeTimePlayInElement() {
  let currentValue = Number(currentTimePlay);
  let seconds = 0;
  let minutes = Math.floor(currentValue / 60);
  if (currentValue < 60) seconds = currentValue;
  if (currentValue > 60) seconds = currentValue - 60 * minutes;
  if (seconds < 10) timePlay.textContent = `0${minutes}:0${seconds}`;
  if (seconds >= 10) timePlay.textContent = `0${minutes}:${seconds}`;
}

buttonPlayAndPause.addEventListener('click', () => {
  audioPlayerPlay(
    correctAnswersArray.correct[currentNumberQuest.number - 1].src
  );
});
inputRangeTimePlay.addEventListener('click', rewindAudio);
inputRangeVolume.addEventListener('click', changeVolumeAudio);

function nextSteps() {
  audio.pause();
  audio.currentTime = 0;
  inputRangeTimePlay.setAttribute('min', `0`);
  inputRangeTimePlay.setAttribute(
    'max',
    correctAnswersArray.correct[currentNumberQuest.number - 1].duration
  );
  inputRangeTimePlay.setAttribute('value', `0`);
  isPlayAudio.boolValue = false;
  isMiniWin(isHaveCorrectAnswer.bool);
  currentNumberQuest.numberValue++;
  isHaveCorrectAnswer.boolValue = false;

  arrayAnswersElements.forEach((elem) => {
    elem.style.borderColor = '';
    elem.setAttribute('value', '');
  });

  deleteElementsInBlockAbout();
  deleteElements();
  createElementsForQuiz();
  setScoreGame();
  counterMistakes.counterValue = 5;
  imageBlockAudioPlayerElement.style.backgroundImage =
    'url(./assets/movie.jpg)';
}

export {
  createAudioPlayer,
  audioPlayerPlay,
  currentTimePlay,
  nextSteps,
  audio,
  isPlayAudio,
};
