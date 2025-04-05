import './thumbnail_rendering.js';
import {container} from './thumbnail_rendering.js'; // Экспортированная переменная с общим узлом <section class="pictures  container">
import {openBigPicture} from './Image_viewer.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    openBigPicture(currentPictureNode.dataset.pictureId);
  }
});
