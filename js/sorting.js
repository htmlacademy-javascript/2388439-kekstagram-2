import {openBigPicture} from'./viewer-image.js';
import {container} from './thumbnail-rendering.js';
import {createPhotoThumbnails} from './thumbnail-rendering.js';

let pictures = [];

function sortThumbnails(picturesData) {
  clearBigPhoto();
  pictures = picturesData;
  createPhotoThumbnails();
  container.addEventListener('click', onBigPhotoClick);
  console.table(pictures);
}

function onBigPhotoClick(evt) {
  const picture = evt.target.closest('a.picture[data-id]');
  if(!picture) {
    return;
  }
  evt.preventDefault();
  const id = Number(picture.dataset.id);
  const pictureData = pictures.find((item) => item.id === id);
  openBigPicture(pictureData);
}

function clearBigPhoto() {
  container.querySelectorAll('a.picture').forEach((item) => item.remove());
}

export{sortThumbnails};
