import {openBigPicture} from'./viewer-image.js';
import {container} from './thumbnail-rendering.js';
import {createPhotoThumbnails} from './thumbnail-rendering.js';
import {configFilter} from './filter.js';
import {showErrorMessage} from './error-message.js';

let pictures = [];

async function bootstrapApp() {
  try {
    pictures = await createPhotoThumbnails();
    configFilter(pictures);
  } catch {
    showErrorMessage();
  }
}

function sortThumbnails(picturesData) {
  pictures = picturesData;
  clearBigPhoto();
  container.addEventListener('click', onBigPhotoClick);
  console.log(pictures);
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

export{sortThumbnails, bootstrapApp};
