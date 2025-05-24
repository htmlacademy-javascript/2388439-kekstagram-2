import {container} from './thumbnail-rendering.js';
import {initUploadModal} from './upload-photo-form.js';
import {configFilter} from './filter.js';
import {createPhotoThumbnails} from './thumbnail-rendering.js';
import {showErrorMessage} from './error-message.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    evt.preventDefault();
  }
});

async function butstrapApp() {
  initUploadModal();
  try {
    const pictures = await createPhotoThumbnails();
    configFilter(pictures);
  } catch {
    showErrorMessage();
  }
}

butstrapApp();

