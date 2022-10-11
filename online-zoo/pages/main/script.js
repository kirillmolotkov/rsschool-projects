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
SHADOW_BACKGROUND.addEventListener("click", () => {
  closeBurgerMenu();
  removePopupCommit();
});

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
      elem.classList.remove("pets-card-item-opacity");
    });
  }, 500);
  setTimeout(() => {
    RIGHT_BUTTON.addEventListener("click", goToRight);
  }, 500);
}

LEFT_BUTTON.addEventListener("click", goToLeft);
RIGHT_BUTTON.addEventListener("click", goToRight);

// carousel testimonials
// const TESTIMONIALS_CARDS = document.querySelector(".testimonials-cards");
// const COMMENTS = document.querySelectorAll(".testimonials-item");
// const INPUT_RANGE = document.querySelector('input[type="range"]');

// INPUT_RANGE.addEventListener("input", carouselComments);

// function carouselComments() {
//   if()
// }

//popup testimonials

const COMMENTS = document.querySelectorAll(".testimonials-item");
const TESTIMONIALS = document.querySelector(".testimonials");
const ARRAY_COMMENTS = Object.assign([], Array.from(COMMENTS));
let cloneCommit;
const DIV = document.createElement("div");
const DIV_CLOSE = document.createElement("div");
DIV.className = "testimonials-popup";
DIV_CLOSE.className = "testimonials-popup-close";
function addPopupCommit() {
  TESTIMONIALS.append(DIV);
  DIV.append(DIV_CLOSE);
}
function removePopupCommit() {
  DIV.remove();
  cloneCommit.remove();
  DIV_CLOSE.remove();
  SHADOW_BACKGROUND.classList.remove("shadow-active");
}
ARRAY_COMMENTS.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    addPopupCommit();
    SHADOW_BACKGROUND.classList.toggle("shadow-active");
    cloneCommit = elem.cloneNode(true);
    DIV.append(cloneCommit);
  });
});

DIV_CLOSE.addEventListener("click", removePopupCommit);
