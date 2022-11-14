import { main } from './createElements';

//create elements for gallery page

function createElementsForGallery() {
  const test = document.createElement('div');
  test.innerHTML = 'Gallery';
  main.append(test);
}

export { createElementsForGallery };
