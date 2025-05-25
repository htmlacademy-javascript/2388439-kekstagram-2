import {container} from './thumbnail-rendering.js';
import {initUploadModal} from './upload-photo-form.js';
import {bootstrapApp} from './sorting.js';
import {configFilter} from './filter.js';
import {createPhotoThumbnails} from './thumbnail-rendering.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    evt.preventDefault();
  }
});

initUploadModal();
bootstrapApp();

