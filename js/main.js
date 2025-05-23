import {container} from './thumbnail-rendering.js';
import {initUploadModal} from './upload-photo-form.js';
import {configFilter} from './filter.js';
import {openBigPicture} from './viewer-image.js';
import {showErrorMessage} from './error-message.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    evt.preventDefault();
  }
});

initUploadModal();
configFilter();

async function butstrapApp() {
  try {
    const pictures = await fetchPictures();
    openBigPicture(pictures);
    configFilter(pictures);
  } catch {
    showErrorMessage();
  }
}

butstrapApp()
