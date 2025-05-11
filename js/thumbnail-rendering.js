import {getData} from './api.js';
import { openBigPicture } from './viewer-image.js';
export const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const album = getData().then(data => {
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
});

export {album};
console.log(album);
console.log(typeof album);
// const createThumbnails = (photo) => {
//   const thumbnail = template.cloneNode(true);
//   const image = thumbnail.querySelector('.picture__img');
//   const info = thumbnail.querySelector('.picture__info');

//   image.src = photo.url;
//   image.alt = photo.description;
//   thumbnail.dataset.pictureId = photo.id;

//   info.querySelector('.picture__comments').textContent = photo.comments.length;
//   info.querySelector('.picture__likes').textContent = photo.likes;

//   return thumbnail;
// };

// const fragment = document.createDocumentFragment();

// album.forEach((photo) => {
//   const thumbnails = createThumbnails(photo);
//   fragment.appendChild(thumbnails);
// });

// container.appendChild(fragment);
