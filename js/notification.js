import {isEscapeKey} from './utils.js';
import { pageBody } from './upload-photo-form.js';

const closeNotification = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if(evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)) {
    existElement.remove();
    pageBody.removeEventListener('click', closeNotification);
    pageBody.removeEventListener('keydown', closeNotification);
  }
};

const appendNotification = (template, trigger = null) => {
  trigger?.();
  const notificationNode = template.cloneNode(true);
  pageBody.append(notificationNode);
  pageBody.addEventListener('click', closeNotification);
  pageBody.addEventListener('keydown', closeNotification);
};

export{appendNotification};
