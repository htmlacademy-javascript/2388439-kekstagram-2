import {getData} from './api.js';
import {openBigPicture} from './viewer-image.js';
import {showErrorMessage} from './error-message.js';
import {CONTAINER_CLASS, TEMPLATE_SELECTOR, PICTURE_CLASS, IMAGE_CLASS, INFO_CLASS, COMMENTS_CLASS, LIKES_CLASS} from './constants.js';

const container = document.querySelector(CONTAINER_CLASS);
const photosArray = [];

function createThumbnail(photo) {
  const template = document.querySelector(TEMPLATE_SELECTOR).content.querySelector(PICTURE_CLASS);
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector(IMAGE_CLASS);
  const info = thumbnail.querySelector(INFO_CLASS);

  image.src = photo.url;
  image.alt = photo.description;
  thumbnail.dataset.pictureId = photo.id;

  info.querySelector(COMMENTS_CLASS).textContent = photo.comments.length;
  info.querySelector(LIKES_CLASS).textContent = photo.likes;

  thumbnail.addEventListener('click', () => {
    openBigPicture(photo);
  });

  return thumbnail;
}

const createPhotoThumbnails = async () => {
  try {
    const data = await getData();

    data.forEach((photo) => {
      const thumbnail = createThumbnail(photo);
      container.appendChild(thumbnail);
      photosArray.push(photo);
    });
    return photosArray;
  } catch (error) {
    showErrorMessage(error.message);
  }
};
export {createPhotoThumbnails, createThumbnail, container, photosArray};
