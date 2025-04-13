import {openBigPicture} from './viewer_image.js';
import './thumbnail_rendering.js';
import {container} from './thumbnail_rendering.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    openBigPicture(currentPictureNode.dataset.pictureId);
    evt.preventDefault();
  }
});
// Точка входа
