//burger menu

const BURGER_MENU_OPEN = document.querySelector(".burger-menu-open");
const BURGER_MENU_BUTTON_OPEN = document.querySelector(".burger-menu");
const BURGER_MENU_BUTTON_CLOSE = document.querySelector(".burger-menu-close");
const SHADOW_BACKGROUND = document.querySelector(".shadow");

function openBurgerMenu() {
  BURGER_MENU_OPEN.classList.add("burger-menu-open-active");
  SHADOW_BACKGROUND.classList.add("shadow-active");
}

function closeBurgerMenu() {
  BURGER_MENU_OPEN.classList.remove("burger-menu-open-active");
  SHADOW_BACKGROUND.classList.remove("shadow-active");
}

BURGER_MENU_BUTTON_OPEN.addEventListener("click", openBurgerMenu);
BURGER_MENU_BUTTON_CLOSE.addEventListener("click", closeBurgerMenu);
SHADOW_BACKGROUND.addEventListener("click", closeBurgerMenu);

//carousel pets

const LEFT_BUTTON = document.querySelector(".pets-card-button-left");
const RIGHT_BUTTON = document.querySelector(".pets-card-button-right");
const CAROUSEL_PETS = document.querySelector(".pets-card-items");
const PETS_CARDS = [
  document.querySelector(".pets-card-item-1"),
  document.querySelector(".pets-card-item-2"),
  document.querySelector(".pets-card-item-3"),
  document.querySelector(".pets-card-item-4"),
  document.querySelector(".pets-card-item-5"),
  document.querySelector(".pets-card-item-6"),
];

let arrayNumberCard = [0, 1, 2, 3, 4, 5];

function shuffle(array) {
  return array.sort(() => {
    return Math.random() - 0.5;
  });
}

function goToLeft() {
  LEFT_BUTTON.removeEventListener("click", goToLeft);
  PETS_CARDS.forEach((elem) => {
    elem.classList.add("pets-card-item-opacity");
  });
  setTimeout(() => {
    PETS_CARDS.forEach((elem) => {
      elem.remove();
    });
  }, 500);
  setTimeout(() => {
    let arrayRandomNumberCard = shuffle(arrayNumberCard);
    PETS_CARDS.forEach((elem, index) => {
      CAROUSEL_PETS.append(PETS_CARDS[arrayRandomNumberCard[index]]);
      console.log(arrayRandomNumberCard[index]);
      elem.classList.remove("pets-card-item-opacity");
    });
  }, 500);
  setTimeout(() => {
    LEFT_BUTTON.addEventListener("click", goToLeft);
  }, 500);
}

function goToRight() {
  RIGHT_BUTTON.removeEventListener("click", goToRight);
  PETS_CARDS.forEach((elem) => {
    elem.classList.add("pets-card-item-opacity");
  });
  setTimeout(() => {
    PETS_CARDS.forEach((elem) => {
      elem.remove();
    });
  }, 500);
  setTimeout(() => {
    let arrayRandomNumberCard = shuffle(arrayNumberCard);
    PETS_CARDS.forEach((elem, index) => {
      CAROUSEL_PETS.append(PETS_CARDS[arrayRandomNumberCard[index]]);
      console.log(arrayRandomNumberCard[index]);
      elem.classList.remove("pets-card-item-opacity");
    });
  }, 500);
  setTimeout(() => {
    RIGHT_BUTTON.addEventListener("click", goToRight);
  }, 500);
}

LEFT_BUTTON.addEventListener("click", goToLeft);
RIGHT_BUTTON.addEventListener("click", goToRight);
console.log(window.screen.width);
console.log(PETS_CARDS);
