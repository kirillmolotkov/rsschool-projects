import { main } from './createElements';
import { copyPlayListEnglish } from './startGame';

//create elements for gallery page

function createElementsForGallery() {
  copyPlayListEnglish.forEach((elem) => {
    let item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.backgroundImage = `url(${elem.image})`;
    main.append(item);
  });
}

export { createElementsForGallery };
