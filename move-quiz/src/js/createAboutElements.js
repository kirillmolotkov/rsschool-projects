import { main, nav } from './createElements.js';
import { createElementsForQuiz } from './createQuizElements.js';
import { createElementsForGallery } from './createGalleryElements.js';
import { createElementsForStatistic } from './createStatisticElements.js';

// create elements for about page
const titleMain = document.createElement('h1');
const descriptionMain = document.createElement('h3');
const descriptionPageQuiz = document.createElement('p');
const descriptionPageGallery = document.createElement('p');
const descriptionPageStatistic = document.createElement('p');

function createElementsForAbout() {
  titleMain.className = 'main-title';
  titleMain.innerHTML = 'Welcome to my game "Movies Quiz"';
  main.append(titleMain);

  descriptionMain.className = 'main-description';
  descriptionMain.innerHTML = 'Description:';
  main.append(descriptionMain);

  descriptionPageQuiz.className = 'description-page-quiz';
  descriptionPageQuiz.innerHTML = 'Text about tab Quiz';
  main.append(descriptionPageQuiz);

  descriptionPageGallery.className = 'description-page-gallery';
  descriptionPageGallery.innerHTML = 'Text about tab Gallery';
  main.append(descriptionPageGallery);

  descriptionPageStatistic.className = 'description-page-statistic';
  descriptionPageStatistic.innerHTML = 'Text about tab Statistic';
  main.append(descriptionPageStatistic);
}

createElementsForAbout();

//change elements in main

function changeElementsInMain(targetElement) {
  deleteElements();
  if (targetElement.textContent === 'About') createElementsForAbout();
  if (targetElement.textContent === 'Quiz') createElementsForQuiz();
  if (targetElement.textContent === 'Gallery') createElementsForGallery();
  if (targetElement.textContent === 'Statistic') createElementsForStatistic();
}

//apply styles to the selected tab

nav.addEventListener('click', changeStyleActiveTab);

function changeStyleActiveTab(event) {
  let target = event.target;
  const navNodeListElements = document.querySelectorAll('.nav-list-item');
  if (target.tagName !== 'LI') {
    return;
  } else {
    navNodeListElements.forEach((elem) => elem.classList.remove('active-tab'));
    target.classList.add('active-tab');
    changeElementsInMain(target);
    main.classList = `main main-${target.textContent.toLowerCase()}`;
  }
}

//delete content in main page

function deleteElements() {
  while (main.childNodes.length !== 0) {
    main.removeChild(main.lastChild);
  }
}
