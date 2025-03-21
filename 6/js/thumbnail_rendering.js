import {album} from './upload';
const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnails = (photo) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');
  const info = thumbnail.querySelector('.picture__info');

  image.src = photo.url;
  image.alt = photo.description;

  info.querySelector('.picture__comments').textContent = photo.comments.length;
  info.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};

const fragment = document.createDocumentFragment();

album.forEach((photo) => {
  const thumbnails = createThumbnails(photo);
  fragment.appendChild(thumbnails);
});

container.appendChild(fragment);
