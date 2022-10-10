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
