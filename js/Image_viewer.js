import {isEscapeKey} from './utils.js';
const thumbnailPicture = document.querySelector('.picture'); //Миниатюра фотки.
const bigPicture = document.querySelector('.big-picture'); //Окно с большой фоткой.
const cross = bigPicture.querySelector('.cancel'); //Крестик закрытия большой фотки.

thumbnailPicture.addEventListener('click', () => {
  bigPicture.classList.remove('hidden');
});

cross.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});
