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

const arrayButtonGame = [];
const arrayButtonGameValue = [];
for (let i = 1; i < 17; i++) {
  const buttonGame = document.createElement("div");
  buttonGame.className = "button-game";
  buttonGame.innerHTML = `${i}`;
  arrayButtonGame.push(buttonGame);
  arrayButtonGameValue.push(Number(buttonGame.textContent));
  blockGame.append(buttonGame);
}

const buttonShuffle = document.createElement("div");
buttonShuffle.className = "button-shuffle";
buttonShuffle.innerHTML = "Shuffle";
blockSettings.append(buttonShuffle);

const buttonReset = document.createElement("div");
buttonReset.className = "button-reset";
buttonReset.innerHTML = "Reset";
blockSettings.append(buttonReset);

export {
  container,
  blockSettings,
  blockGame,
  blockInfo,
  arrayButtonGame,
  arrayButtonGameValue,
  buttonShuffle,
  buttonReset,
};
