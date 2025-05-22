import {getData} from './api.js';
import {openBigPicture} from './viewer-image.js';
import {showErrorMessage} from './error-message.js';
export const container = document.querySelector('.pictures');

getData()
  .then((data) => {
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
    });
  })
  .catch((error) => {
    showErrorMessage(error.message);
});
