//burger menu

const BURGER_MENU_BUTTON_OPEN = document.querySelector(".burger-menu");
const BURGER_MENU_BUTTON_CLOSE = document.querySelector(".burger-menu-close");
const BURGER_MENU_OPEN = document.querySelector(".burger-menu-open");
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

//amount

const DONATION_LINE = document.querySelector(".value-donation-line");
const DEFAULT_CHECK = document.querySelector(".cursor-pointer-6");
const VALUE_PRICE = document.querySelector(".value-price");
const ARRAY_VALUE_PRICE = Array.from(VALUE_PRICE.children);
const INPUT_VALUE = document.querySelector('input[type="number"]');
const DONATION_LINE_CHILDREN = document.querySelectorAll(".cursor-pointer");
const ARRAY_DONATION_LINE_CHILDREN = Array.from(DONATION_LINE_CHILDREN);
const ARRAY_DONATION_LINE = Array.from(DONATION_LINE.firstChild);
let checkedSteps;

DONATION_LINE.addEventListener("click", (event) => {
  let target = event.target;
  checked(target);
});

function checked(target = DEFAULT_CHECK) {
  if (checkedSteps) {
    checkedSteps.classList.remove("cursor-pointer-checked");
  }
  ARRAY_VALUE_PRICE.forEach((elem) => {
    elem.style.color = "";
  });
  checkedSteps = target;
  ARRAY_VALUE_PRICE.forEach((elem) => {
    if (elem.textContent === `$${target.dataset.value}`) {
      elem.style.color = "#fe9013";
      INPUT_VALUE.value = target.dataset.value;
    }
  });

  checkedSteps.classList.add("cursor-pointer-checked");
}
checked();
INPUT_VALUE.addEventListener("focusout", () => {
  if (
    INPUT_VALUE.value === "5000" ||
    INPUT_VALUE.value === "2000" ||
    INPUT_VALUE.value === "1000" ||
    INPUT_VALUE.value === "500" ||
    INPUT_VALUE.value === "250" ||
    INPUT_VALUE.value === "100" ||
    INPUT_VALUE.value === "50" ||
    INPUT_VALUE.value === "25"
  ) {
    ARRAY_VALUE_PRICE.forEach((elem) => {
      elem.style.color = "";
    });
    ARRAY_DONATION_LINE_CHILDREN.forEach((elem) => {
      elem.classList.remove("cursor-pointer-checked");
    });
    ARRAY_DONATION_LINE_CHILDREN.forEach((elem) => {
      if (INPUT_VALUE.value === elem.dataset.value) {
        elem.classList.add("cursor-pointer-checked");
      }
    });

    ARRAY_VALUE_PRICE.forEach((elem) => {
      if (`$${INPUT_VALUE.value}` === elem.textContent) {
        elem.style.color = "#fe9013";
      }
    });
  } else {
    ARRAY_DONATION_LINE_CHILDREN.forEach((elem) => {
      elem.classList.remove("cursor-pointer-checked");
    });
    ARRAY_VALUE_PRICE.forEach((elem) => {
      elem.style.color = "";
    });
    checkedSteps.classList.remove("cursor-pointer-checked");
  }
});
