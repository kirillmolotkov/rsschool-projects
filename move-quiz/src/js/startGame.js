//preparing the game for launch
import { audio } from './audioPlayer';
import { deleteElements } from './createAboutElements';
import {
  arrayAnswersElements,
  blockAboutMoveElement,
  imageBlockAudioPlayerElement,
  scoreGameElement,
  titleBlockAudioPlayerElement,
} from './createQuizElements';
import { playListEnglish } from './playListEn';
import { winGame } from './winGame';

function shuffle(array) {
  //use Fisher-Yates Shuffle algorithm
  let shuffleArray = array;
  for (let i = shuffleArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
  }
  return shuffleArray;
}

const copyPlayListEnglish = playListEnglish.slice(0);
let shuffledCopyPlayListEnglish = {
  shuffle: shuffle(copyPlayListEnglish),
  get shuffleValue() {
    return this.shuffle;
  },
  set shuffleValue(value) {
    this.shuffle = value;
  },
};

function createRandomAnswers(shuffledList) {
  let counterIteration = 0;
  let arrayQuestions = [];
  let stepArrayQuestions = [];

  shuffledList.forEach((elem) => {
    if (counterIteration < 6) {
      arrayQuestions.push(elem);
      counterIteration++;
    }
    if (counterIteration === 6) {
      counterIteration = 0;
      stepArrayQuestions.push(arrayQuestions);
      arrayQuestions = [];
    }
  });
  return stepArrayQuestions;
}

let randomAnswersArray = {
  answers: createRandomAnswers(shuffledCopyPlayListEnglish.shuffle),
  get randomAnswers() {
    return this.answers;
  },
  set randomAnswers(value) {
    this.answers = value;
  },
};
console.log(randomAnswersArray.answers);
let correctAnswersArray = {
  correct: createCorrectAnswers(randomAnswersArray.answers),
  get correctAnswers() {
    return this.correct;
  },
  set correctAnswers(value) {
    this.correct = value;
  },
};

function createCorrectAnswers(arrayAnswers) {
  let correctAnswers = [];
  arrayAnswers.forEach((elem) => {
    let answer = Math.floor(Math.random() * 6);
    correctAnswers.push(elem[answer]);
  });
  return correctAnswers;
}

//start game
let currentNumberQuest = {
  number: 1,
  get numberValue() {
    return this.number;
  },
  set numberValue(value) {
    this.number = value;
  },
};
let gameScore = {
  score: 0,
  get scoreValue() {
    return this.score;
  },
  set scoreValue(value) {
    this.score = value;
  },
};
//create new audio player for block about movie

const newButtonPlayAndPause = document.createElement('div');
const newButtonMuteVolume = document.createElement('div');
const newTimePlay = document.createElement('div');
const newInputRangeTimePlay = document.createElement('input');
const newInputRangeVolume = document.createElement('input');
const containerForNewAudioPlayer = document.createElement('div');

function createNewAudioPlayer(placeOfCreation) {
  containerForNewAudioPlayer.className = 'container-new-audio-player';
  newButtonPlayAndPause.className =
    'new-audio-player__button-play-pause button-play';
  newInputRangeTimePlay.className = 'new-audio-player__range-time-play';
  newInputRangeTimePlay.setAttribute('type', 'range');
  newInputRangeTimePlay.setAttribute('value', '0');
  newTimePlay.className = 'new-audio-player__time-play';
  newTimePlay.textContent = '00:00';
  newButtonMuteVolume.className = 'new-audio-player__button-mute';
  newInputRangeVolume.className = 'new-audio-player__range-volume';
  newInputRangeVolume.setAttribute('type', 'range');
  newInputRangeVolume.setAttribute('min', '0');
  newInputRangeVolume.setAttribute('max', '100');
  newInputRangeVolume.setAttribute('value', '100');

  placeOfCreation.append(containerForNewAudioPlayer);
  containerForNewAudioPlayer.append(
    newButtonPlayAndPause,
    newInputRangeTimePlay,
    newTimePlay,
    newButtonMuteVolume,
    newInputRangeVolume
  );
}

const aboutImageElement = document.createElement('div');

function addImageCheckedAnswer(selectedAnswers) {
  aboutImageElement.className = 'block-about-move__image';
  blockAboutMoveElement.append(aboutImageElement);
  let arrayObjects = randomAnswersArray.answers[currentNumberQuest.number - 1];
  arrayObjects.forEach((obj) => {
    if (selectedAnswers.textContent === obj.title) {
      aboutImageElement.style.backgroundImage = `url(${obj.image})`;
    }
  });
}

const aboutTitleElement = document.createElement('h3');

function addTitleCheckedAnswers(selectedAnswers) {
  aboutTitleElement.className = 'block-about-move__title';
  blockAboutMoveElement.append(aboutTitleElement);
  let arrayObjects = randomAnswersArray.answers[currentNumberQuest.number - 1];
  arrayObjects.forEach((obj) => {
    if (selectedAnswers.textContent === obj.title) {
      aboutTitleElement.textContent = obj.title;
    }
  });
}

const aboutDescriptionElement = document.createElement('p');

function addDescriptionCheckedAnswers(selectedAnswers) {
  aboutDescriptionElement.className = 'block-about-move__description';
  blockAboutMoveElement.append(aboutDescriptionElement);
  let arrayObjects = randomAnswersArray.answers[currentNumberQuest.number - 1];
  arrayObjects.forEach((obj) => {
    if (selectedAnswers.textContent === obj.title) {
      aboutDescriptionElement.textContent = obj.description;
    }
  });
}

let isHaveCorrectAnswer = {
  bool: false,
  get boolValue() {
    return this.bool;
  },
  set boolValue(value) {
    this.bool = value;
  },
};

function isCorrectAnswers(event) {
  let targetDataElem;
  let target = event.target;
  if (target.tagName !== 'BUTTON') {
    return;
  } else {
    let result =
      correctAnswersArray.correct[currentNumberQuest.number - 1].title ===
      target.textContent;
    randomAnswersArray.answers[currentNumberQuest.number - 1].forEach(
      (elem) => {
        if (elem.title === target.textContent) {
          targetDataElem = elem;
        }
      }
    );
    if (
      correctAnswersArray.correct[currentNumberQuest.number - 1].title ===
      target.textContent
    ) {
      titleBlockAudioPlayerElement.textContent =
        correctAnswersArray.correct[currentNumberQuest.number - 1].title;
      imageBlockAudioPlayerElement.style.backgroundImage = `url(${
        correctAnswersArray.correct[currentNumberQuest.number - 1].src
      })`;
    }

    if (isAudioForAboutPlay) {
      audioPlayerForBlockAbout(targetDataElem.src, targetDataElem.duration);
    }

    if (!isHaveCorrectAnswer.bool) {
      if (result !== true) {
        target.setAttribute('value', 'false');
        target.style.borderColor = 'red';
      } else {
        target.setAttribute('value', 'true');
        target.style.borderColor = 'green';
        isHaveCorrectAnswer.boolValue = true;
        audio.pause();
        audio.currentTime = 0;
        imageBlockAudioPlayerElement.style.backgroundImage = `url(${
          correctAnswersArray.correct[currentNumberQuest.number - 1].image
        })`;
      }
    }
    console.log(currentNumberQuest.number);
    if (currentNumberQuest.number === 6 && isHaveCorrectAnswer.bool === true) {
      setScoreGame();
      deleteElements();
      winGame(gameScore.score);
    }
    newButtonPlayAndPause.addEventListener('click', () => {
      aboutTimePlayInterval = 0;
      aboutCurrentTimePlay = 0;
      if (!isAudioForAboutPlay) {
        audioPlayerForBlockAbout(targetDataElem.src, targetDataElem.duration);
        isAudioForAboutPlay = true;
      } else if (isAudioForAboutPlay) {
        audioPlayerForBlockAbout(targetDataElem.src, targetDataElem.duration);
        isAudioForAboutPlay = false;
      }
    });

    deleteElementsInBlockAbout();
    createNewAudioPlayer(blockAboutMoveElement);
    addImageCheckedAnswer(target);
    addTitleCheckedAnswers(target);
    addDescriptionCheckedAnswers(target);
  }
}

function deleteElementsInBlockAbout() {
  while (blockAboutMoveElement.childNodes.length !== 0) {
    blockAboutMoveElement.removeChild(blockAboutMoveElement.lastChild);
  }
}

let isAudioForAboutPlay = false;
let aboutAudio = new Audio();
let aboutTimePlayInterval;
let aboutCurrentTimePlay = 0;
let aboutValueVolumeAudioPlayer = 1;

async function audioPlayerForBlockAbout(currentSrc, targetAudio) {
  aboutAudio.src = currentSrc;
  aboutAudio.currentTime = aboutCurrentTimePlay;
  aboutAudio.volume = aboutValueVolumeAudioPlayer;

  if (!isAudioForAboutPlay) {
    await aboutAudio.play();
    newInputRangeTimePlay.setAttribute('max', targetAudio);
    aboutTimePlayInterval = setInterval(() => {
      newInputRangeTimePlay.setAttribute(
        'value',
        `${Math.floor(aboutAudio.currentTime)}`
      );
      aboutCurrentTimePlay = Math.floor(aboutAudio.currentTime);
    }, 100);
  } else {
    aboutAudio.pause();
    clearInterval(aboutTimePlayInterval);
    aboutTimePlayInterval = null;
  }
}

let counterMistakes = {
  counter: 5,
  get counterValue() {
    return this.counter;
  },
  set counterValue(value) {
    this.counter = value;
  },
};
function isMiniWin(win) {
  if (win === true) {
    arrayAnswersElements.forEach((answer) => {
      if (answer.getAttribute('value') == 'false') {
        counterMistakes.counterValue--;
      }
    });
  }
}
function setScoreGame() {
  gameScore.scoreValue += counterMistakes.counter;
  scoreGameElement.textContent = `${gameScore.score}`;
}

export {
  createCorrectAnswers,
  randomAnswersArray,
  correctAnswersArray,
  currentNumberQuest,
  isCorrectAnswers,
  isHaveCorrectAnswer,
  deleteElementsInBlockAbout,
  isMiniWin,
  setScoreGame,
  counterMistakes,
  gameScore,
  shuffledCopyPlayListEnglish,
  createRandomAnswers,
  copyPlayListEnglish,
  shuffle,
};
