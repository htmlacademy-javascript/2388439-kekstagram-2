import './thumbnail_rendering.js';
import {container} from './thumbnail_rendering.js';
import {openBigPicture} from './Image_viewer.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    openBigPicture(currentPictureNode.dataset.pictureId);
  }
});
