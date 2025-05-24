import {getData} from './api.js';
import {openBigPicture} from './viewer-image.js';
import {showErrorMessage} from './error-message.js';

export const container = document.querySelector('.pictures');
export const photosArray = [];

const createPhotoThumbnails = async () => {
  try {
    const data = await getData();

    data.forEach((photo) => {
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
      photosArray.push(photo);
    });
    return photosArray;
  } catch (error) {
    showErrorMessage(error.message);
  }
};

export {createPhotoThumbnails};
