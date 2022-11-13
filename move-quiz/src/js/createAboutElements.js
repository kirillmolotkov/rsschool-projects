import { createElementsForQuiz } from './crateQuizElements.js';
import { main, nav } from './createElements.js';

// create elements for about page

function createElementsForAbout() {
  const titleMain = document.createElement('h1');
  titleMain.className = 'main-title';
  titleMain.innerHTML = 'Welcome to my game "Movies Quiz"';
  main.append(titleMain);

  const descriptionMain = document.createElement('h3');
  descriptionMain.className = 'main-description';
  descriptionMain.innerHTML = 'Description:';
  main.append(descriptionMain);

  const descriptionPageQuiz = document.createElement('p');
  descriptionPageQuiz.className = 'description-page-quiz';
  descriptionPageQuiz.innerHTML = 'Text about tab Quiz';
  main.append(descriptionPageQuiz);

  const descriptionPageGallery = document.createElement('p');
  descriptionPageGallery.className = 'description-page-gallery';
  descriptionPageGallery.innerHTML = 'Text about tab Gallery';
  main.append(descriptionPageGallery);

  const descriptionPageStatistic = document.createElement('p');
  descriptionPageStatistic.className = 'description-page-statistic';
  descriptionPageStatistic.innerHTML = 'Text about tab Statistic';
  main.append(descriptionPageStatistic);
}

createElementsForAbout();

//change elements in main

function changeElementsInMain(targetElement) {
  deleteElements();
  if (targetElement.textContent === 'About') {
    createElementsForAbout();
  }
  if (targetElement.textContent === 'Quiz') {
    createElementsForQuiz();
  }
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
  }
}

//delete content in main page

function deleteElements() {
  while (main.childNodes.length !== 0) {
    main.removeChild(main.lastChild);
  }
}
