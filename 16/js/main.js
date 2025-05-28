import {container} from './thumbnail-rendering.js';
import {initUploadModal} from './upload-photo-form.js';
import {bootstrapApp} from './sorting.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    evt.preventDefault();
  }
});

initUploadModal();
bootstrapApp();

