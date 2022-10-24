const container = document.createElement("div");
container.className = "container";
document.body.prepend(container);

const blockSettings = document.createElement("div");
blockSettings.className = "block-settings";
container.append(blockSettings);

const blockGame = document.createElement("div");
blockGame.className = "block-game";
container.append(blockGame);

const blockInfo = document.createElement("div");
blockInfo.className = "block-info";
container.append(blockInfo);

let sizeValueGame = {
  number: 0,
  get current() {
    return this.number;
  },
  set current(value) {
    this.number = value;
  },
};

let firstStartApp = localStorage.length === 0;

if (firstStartApp) {
  sizeValueGame.current = 16;
} else {
  sizeValueGame.current =
    Number(localStorage.getItem("defaultSize")) *
    Number(localStorage.getItem("defaultSize"));
}

const arrayButtonGame = {
  item: [],
  get node() {
    return this.item;
  },
  set node(value) {
    this.item = value;
  },
};

const arrayButtonGameValue = {
  item: [],
  get list() {
    return this.item;
  },
  set list(value) {
    this.list = value;
  },
};

function createGameElement(valueElement) {
  for (let i = 1; i <= valueElement; i++) {
    const buttonGame = document.createElement("div");
    buttonGame.className = "button-game";
    buttonGame.innerHTML = `${i}`;
    arrayButtonGame.node.push(buttonGame);

    arrayButtonGameValue.item.push(Number(buttonGame.textContent));

    blockGame.append(buttonGame);
  }
}
createGameElement(sizeValueGame.current);

function styleButtonGame(array) {
  array.forEach((elem) => {
    elem.style.width = `${100 / Number(localStorage.getItem("defaultSize"))}%`;
    elem.style.height = `${Math.floor(
      100 / Number(localStorage.getItem("defaultSize"))
    )}%`;
    // elem.style.fontSize = ``
  });
}
styleButtonGame(arrayButtonGame.item);

const buttonShuffle = document.createElement("div");
buttonShuffle.className = "button-shuffle";
buttonShuffle.innerHTML = "Shuffle";
blockSettings.append(buttonShuffle);

const buttonReset = document.createElement("div");
buttonReset.className = "button-reset";
buttonReset.innerHTML = "Reset";
blockSettings.append(buttonReset);

const movesCounter = document.createElement("div");
movesCounter.className = "moves-counter";
movesCounter.innerHTML = "Moves: 0";
blockInfo.append(movesCounter);

const timeGame = document.createElement("div");
timeGame.classList = "time-game";
timeGame.innerHTML = "0:00";
blockInfo.append(timeGame);

const blockSizeGame = document.createElement("div");
blockSizeGame.classList = "block-size-game";
blockSettings.append(blockSizeGame);

const arrayButtonSize = [];
const arrayButtonSizeValue = [];
for (let i = 0; i < 6; i++) {
  const buttonSize = document.createElement("div");
  buttonSize.className = "button-size";
  buttonSize.innerHTML = `${i + 3}X${i + 3}`;
  arrayButtonSize.push(buttonSize);
  arrayButtonSizeValue.push(i + 3);
  blockSizeGame.append(buttonSize);
}

const audioGame = document.createElement("audio");
audioGame.setAttribute("src", "./audio.mp3");
audioGame.classList = "audio-game";
blockInfo.append(audioGame);

const buttonAudio = document.createElement("div");
buttonAudio.classList = "button-audio";
buttonAudio.innerHTML = "Off";
blockSettings.append(buttonAudio);

const wonMessage = document.createElement("div");
wonMessage.classList = "won-message";
blockGame.append(wonMessage);

export {
  container,
  blockSettings,
  blockGame,
  blockInfo,
  arrayButtonGame,
  arrayButtonGameValue,
  buttonShuffle,
  buttonReset,
  movesCounter,
  timeGame,
  arrayButtonSize,
  arrayButtonSizeValue,
  blockSizeGame,
  createGameElement,
  sizeValueGame,
  styleButtonGame,
  audioGame,
  buttonAudio,
  wonMessage,
};
