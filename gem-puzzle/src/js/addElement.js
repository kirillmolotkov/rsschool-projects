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
for (let i = 1; i < 17; i++) {
  const buttonGame = document.createElement("div");
  buttonGame.className = "button-game";
  buttonGame.innerHTML = `${i}`;
  arrayButtonGame.push(buttonGame);
  blockGame.append(buttonGame);
}

const buttonShuffle = document.createElement("div");
buttonShuffle.className = "button-shuffle";
buttonShuffle.innerHTML = "Shuffle";
blockSettings.append(buttonShuffle);

export {
  container,
  blockSettings,
  blockGame,
  blockInfo,
  arrayButtonGame,
  buttonShuffle,
};
