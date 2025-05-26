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
  clearPhoto();
  container.addEventListener('click', onBigPhotoClick);
  pictures.forEach((photo) => {
    const template = document.querySelector('#picture').content.querySelector('.picture');
    const thumbnail = template.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    const info = thumbnail.querySelector('.picture__info');

    image.src = photo.url;
    image.alt = photo.description;
    thumbnail.dataset.pictureId = photo.id;

    info.querySelector('.picture__comments').textContent = photo.comments.length;
    info.querySelector('.picture__likes').textContent = photo.likes;

    thumbnail.addEventListener('click', () => {
      openBigPicture(photo);
    });
    container.appendChild(thumbnail);
  });
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

function clearPhoto() {
  container.querySelectorAll('a.picture').forEach((item) => item.remove());
}

export{sortThumbnails, bootstrapApp};
