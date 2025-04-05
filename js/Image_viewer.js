import {isEscapeKey} from './utils.js';
const thumbnailPicture = document.querySelector('.picture'); //Миниатюра фотки.
const bigPicture = document.querySelector('.big-picture'); //Окно с большой фоткой.
const cross = bigPicture.querySelector('.cancel'); //Крестик закрытия большой фотки.

//------------------------------------------------------------------//

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalWindow();
  }
};

const openModalWindow = () => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};
const closeModalWindow = () => {
  bigPicture.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

thumbnailPicture.addEventListener('click', () => {
  openModalWindow();
});

cross.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

