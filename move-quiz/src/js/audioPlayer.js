import {
  audioPlayerElement,
  blockAudioPlayerElement,
} from './createQuizElements';
import { playListEnglish } from './playListEn';

//create audio player elements

const buttonPlayAndPause = document.createElement('div');
const buttonMuteVolume = document.createElement('div');
const timePlay = document.createElement('div');
const inputRangeTimePlay = document.createElement('input');
const inputRangeVolume = document.createElement('input');

function createAudioPlayer() {
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

  audioPlayerElement.append(
    buttonPlayAndPause,
    inputRangeTimePlay,
    timePlay,
    buttonMuteVolume,
    inputRangeVolume
  );
}

let isPlayAudio = false;
const audio = new Audio();
let timePlayInterval;
let currentTimePlay = 0;
let valueVolumeAudioPlayer = 1;

function audioPlayerPlay() {
  audio.src = playListEnglish[0].src;
  audio.currentTime = currentTimePlay;
  audio.volume = valueVolumeAudioPlayer;

  if (!isPlayAudio) {
    audio.play();
    isPlayAudio = true;
    inputRangeTimePlay.setAttribute('max', playListEnglish[0].duration);
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
    isPlayAudio = false;
    clearInterval(timePlayInterval);
    timePlayInterval = null;
    buttonPlayAndPause.classList.remove('button-pause');
    buttonPlayAndPause.classList.add('button-play');
  }
}

function rewindAudio() {
  currentTimePlay = inputRangeTimePlay.value;
  isPlayAudio = false;
  audioPlayerPlay();
}

function changeVolumeAudio() {
  valueVolumeAudioPlayer = inputRangeVolume.value / 100;
  isPlayAudio = false;
  audioPlayerPlay();
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

buttonPlayAndPause.addEventListener('click', audioPlayerPlay);
inputRangeTimePlay.addEventListener('click', rewindAudio);
inputRangeVolume.addEventListener('click', changeVolumeAudio);
export { createAudioPlayer };
