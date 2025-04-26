import {openBigPicture} from './viewer-image.js';
import './thumbnail-rendering.js';
import {container} from './thumbnail-rendering.js';
import {initUploadModal} from './upload-photo-form.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    openBigPicture(currentPictureNode.dataset.pictureId);
    evt.preventDefault();
  }
});

initUploadModal();
