import {getData} from './api.js';
import {showErrorMessage} from './error-message.js';
import {createThumbnail} from './cteate-tumbnail.js'
import {CONTAINER_CLASS} from './constants.js';

const container = document.querySelector(CONTAINER_CLASS);
const photosArray = [];

const createPhotoThumbnails = async () => {
  try {
    const data = await getData();

    data.forEach((photo) => {
      const thumbnail = createThumbnail(photo);
      container.appendChild(thumbnail);
      photosArray.push(photo);
    });
    return photosArray;
  } catch (error) {
    showErrorMessage(error.message);
  }
};
export {createPhotoThumbnails, createThumbnail, container, photosArray};
