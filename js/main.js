import {container} from './thumbnail-rendering.js';
import {initUploadModal} from './upload-photo-form.js';

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if(currentPictureNode){
    evt.preventDefault();
  }
});

initUploadModal();

function debounce (callback, timeoutDelay = 500) {

  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}
